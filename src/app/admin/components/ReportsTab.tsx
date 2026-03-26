"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase-client';

type Report = {
    id: string;
    reason: string;
    created_at: string;
    memory_id: string | null;
    comment_id: string | null;
    reported_user_id: string | null;
    memory?: { caption: string; photo_url: string; era_name: string } | null;
    comment?: { content: string } | null;
    reported_user?: { username: string } | null;
};

export default function ReportsTab() {
    const [reports, setReports] = useState<Report[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
    const [actionLoading, setActionLoading] = useState<string | null>(null);

    const removeReport = (id: string) => {
        setReports(prev => prev.filter(r => r.id !== id));
    };

    const handleDeleteMemory = async (report: Report) => {
        if (!report.memory_id) return;
        if (!confirm('Delete this memory? This will also delete the report.')) return;
        setActionLoading(report.id);
        const { error } = await supabase.from('memories').delete().eq('id', report.memory_id);
        setActionLoading(null);
        if (error) { alert('Failed to delete memory: ' + error.message); return; }
        removeReport(report.id);
    };

    const handleDeleteComment = async (report: Report) => {
        if (!report.comment_id) return;
        if (!confirm('Delete this comment? This will also delete the report.')) return;
        setActionLoading(report.id);
        const { error } = await supabase.from('comments').delete().eq('id', report.comment_id);
        setActionLoading(null);
        if (error) { alert('Failed to delete comment: ' + error.message); return; }
        removeReport(report.id);
    };

    const handleBanUser = async (report: Report) => {
        if (!report.reported_user_id) return;
        if (!confirm(`Ban user ${report.reported_user?.username || report.reported_user_id}?`)) return;
        setActionLoading(report.id);
        const { error } = await supabase.from('profiles').update({ is_banned: true }).eq('id', report.reported_user_id);
        setActionLoading(null);
        if (error) { alert('Failed to ban user: ' + error.message); return; }
        alert('User banned.');
    };

    const handleIgnore = async (report: Report) => {
        if (!confirm('Ignore and delete this report?')) return;
        setActionLoading(report.id);
        const { error } = await supabase.from('reports').delete().eq('id', report.id);
        setActionLoading(null);
        if (error) { alert('Failed to delete report: ' + error.message); return; }
        removeReport(report.id);
    };

    useEffect(() => {
        const fetchReports = async () => {
            setLoading(true);
            setError(null);

            const { data, error: fetchError } = await supabase
                .from('reports')
                .select(`
                    id,
                    reason,
                    created_at,
                    memory_id,
                    comment_id,
                    reported_user_id,
                    memory:memories(caption, photo_url, era_name),
                    comment:comments(content),
                    reported_user:profiles!reported_user_id(username)
                `)
                .order('created_at', { ascending: false });

            if (fetchError) {
                setError(fetchError.message);
                setLoading(false);
                return;
            }

            setReports((data as unknown as Report[]) || []);
            setLoading(false);
        };

        fetchReports();
    }, []);

    function formatDate(dateStr: string) {
        const d = new Date(dateStr);
        return d.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    }

    function truncate(str: string, maxLen: number) {
        if (str.length <= maxLen) return str;
        return str.slice(0, maxLen) + '…';
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                Error loading reports: {error}
            </div>
        );
    }

    if (reports.length === 0) {
        return (
            <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
                No reports found.
            </div>
        );
    }

    return (
        <>
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">Reports</h2>
                    <p className="text-sm text-gray-500 mt-1">{reports.length} total reports</p>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Image
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Reason
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Date
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Era
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Caption
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Comment
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Reported User
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {reports.map((report) => (
                                <tr key={report.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">
                                        {report.memory?.photo_url ? (
                                            <img
                                                src={report.memory.photo_url}
                                                alt="Memory"
                                                className="w-12 h-12 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                                                onClick={() => setFullscreenImage(report.memory!.photo_url)}
                                            />
                                        ) : (
                                            <span className="text-gray-300">—</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">
                                        {report.reason}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                                        {formatDate(report.created_at)}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                                        {report.memory?.era_name
                                            ? report.memory.era_name
                                            : <span className="text-gray-300">—</span>}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">
                                        {report.memory
                                            ? truncate(report.memory.caption, 80)
                                            : <span className="text-gray-300">—</span>}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">
                                        {report.comment
                                            ? truncate(report.comment.content, 80)
                                            : <span className="text-gray-300">—</span>}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                                        {report.reported_user
                                            ? report.reported_user.username
                                            : <span className="text-gray-300">—</span>}
                                    </td>
                                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                                        <div className="flex flex-col gap-1">
                                            {report.memory_id && (
                                                <button
                                                    onClick={() => handleDeleteMemory(report)}
                                                    disabled={actionLoading === report.id}
                                                    className="px-2 py-1 text-xs font-medium text-red-700 bg-red-50 border border-red-200 rounded hover:bg-red-100 disabled:opacity-50"
                                                >
                                                    Delete Memory
                                                </button>
                                            )}
                                            {report.comment_id && (
                                                <button
                                                    onClick={() => handleDeleteComment(report)}
                                                    disabled={actionLoading === report.id}
                                                    className="px-2 py-1 text-xs font-medium text-red-700 bg-red-50 border border-red-200 rounded hover:bg-red-100 disabled:opacity-50"
                                                >
                                                    Delete Comment
                                                </button>
                                            )}
                                            {report.reported_user_id && (
                                                <button
                                                    onClick={() => handleBanUser(report)}
                                                    disabled={actionLoading === report.id}
                                                    className="px-2 py-1 text-xs font-medium text-orange-700 bg-orange-50 border border-orange-200 rounded hover:bg-orange-100 disabled:opacity-50"
                                                >
                                                    Ban User
                                                </button>
                                            )}
                                            <button
                                                onClick={() => handleIgnore(report)}
                                                disabled={actionLoading === report.id}
                                                className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded hover:bg-gray-100 disabled:opacity-50"
                                            >
                                                Ignore
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {fullscreenImage && (
                <div
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center cursor-pointer"
                    onClick={() => setFullscreenImage(null)}
                >
                    <img
                        src={fullscreenImage}
                        alt="Memory fullscreen"
                        className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
                    />
                </div>
            )}
        </>
    );
}
