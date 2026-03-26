"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { supabase } from "@/lib/supabase-client";
import Link from "next/link";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        const checkUser = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession();

            if (!session && pathname !== "/admin/login") {
                router.push("/admin/login");
                setLoading(false);
                return;
            }

            if (session) {
                // Check if user has admin role
                const { data: roles, error } = await supabase
                    .from("user_roles")
                    .select("role")
                    .eq("user_id", session.user.id)
                    .eq("role", "admin")
                    .single();

                if (error || !roles) {
                    // Start Debug Block
                    setLoading(false);
                    return (
                        <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 p-4">
                            <h1 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h1>
                            <div className="bg-white p-6 rounded shadow max-w-lg w-full overflow-auto">
                                <p className="mb-2"><strong>User ID:</strong> {session.user.id}</p>
                                <p className="mb-2"><strong>Email:</strong> {session.user.email}</p>
                                <p className="mb-2"><strong>Database Error:</strong> {error?.message || "Role not found"}</p>
                                <p className="text-sm text-gray-500 mt-4">
                                    with this exact <strong>User ID</strong> and role <strong>&apos;admin&apos;</strong>.
                                </p>
                                <button
                                    onClick={() => window.location.reload()}
                                    className="mt-6 bg-blue-500 text-white px-4 py-2 rounded"
                                >
                                    Retry
                                </button>
                                <button
                                    onClick={async () => {
                                        await supabase.auth.signOut();
                                        router.push("/admin/login");
                                    }}
                                    className="mt-2 ml-2 text-gray-600 hover:text-black underline"
                                >
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    );
                    // End Debug Block
                }
            }
            setLoading(false);
        };

        checkUser();
    }, [router, pathname]);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    // If on login page, don't show the admin sidebar
    if (pathname === "/admin/login") {
        return <>{children}</>;
    }

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside
                className={`${collapsed ? 'w-20' : 'w-64'} bg-white shadow-md transition-all duration-300 flex flex-col`}
            >
                <div className="p-4 flex items-center justify-between border-b">
                    {!collapsed && <h1 className="text-xl font-bold text-gray-800 truncate">myera admin</h1>}
                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="p-2 rounded hover:bg-gray-100 text-gray-500 ml-auto"
                        title={collapsed ? "Expand" : "Collapse"}
                    >
                        {collapsed ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15l-7.5-7.5 7.5-7.5" />
                            </svg>
                        )}
                    </button>
                </div>

                <nav className="mt-6 px-2 space-y-2 flex-grow">
                    <NavItem
                        href="/admin/dashboard"
                        active={pathname === "/admin/dashboard"}
                        collapsed={collapsed}
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                            </svg>
                        }
                        label="Dashboard"
                    />
                    <NavItem
                        href="/admin/reports"
                        active={pathname === "/admin/reports"}
                        collapsed={collapsed}
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                            </svg>
                        }
                        label="Reports"
                    />
                </nav>

                <div className="p-4 border-t">
                    <button
                        onClick={async () => {
                            await supabase.auth.signOut();
                            router.push("/admin/login");
                        }}
                        className={`w-full flex items-center ${collapsed ? 'justify-center' : 'px-4'} py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors`}
                        title="Sign Out"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                        </svg>
                        {!collapsed && <span className="ml-3">Sign Out</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-8">
                {children}
            </main>
        </div>
    );
}

function NavItem({ href, active, collapsed, icon, label }: { href: string; active: boolean; collapsed: boolean; icon: React.ReactNode; label: string }) {
    return (
        <Link
            href={href}
            className={`flex items-center ${collapsed ? 'justify-center' : 'px-4'} py-2 rounded-lg text-sm font-medium transition-colors ${active
                ? "bg-purple-50 text-purple-700"
                : "text-gray-600 hover:bg-gray-50"
                }`}
            title={collapsed ? label : undefined}
        >
            {icon}
            {!collapsed && <span className="ml-3">{label}</span>}
        </Link>
    );
}
