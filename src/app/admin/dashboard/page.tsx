"use client";

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase-client';

import UserGrowthChart from "../components/UserGrowthChart";
import ReferralChart from "../components/ReferralChart";
import ReferralByDayChart from "../components/ReferralByDayChart";
import TimezoneChart from "../components/TimezoneChart";
import MemoriesChart from "../components/MemoriesChart";
import VotesChart from "../components/VotesChart";
import SavedMemoriesChart from "../components/SavedMemoriesChart";
import CommentsChart from "../components/CommentsChart";
import EventMessagesChart from "../components/EventMessagesChart";

export default function AdminDashboard() {
    const [userCount, setUserCount] = useState<number | null>(null);

    useEffect(() => {
        const fetchUserCount = async () => {
            const { count, error } = await supabase
                .from('profiles')
                .select('*', { count: 'exact', head: true });

            if (!error && count !== null) {
                setUserCount(count);
            }
        };

        fetchUserCount();
    }, []);

    return (
        <div className="p-6">
            <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                    <p className="text-gray-600 mt-1">Overview of myera performance and user metrics.</p>
                    {userCount !== null && (
                        <div className="mt-4 flex items-center">
                            <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full border border-purple-200">
                                {userCount} Users
                            </span>
                        </div>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1 md:col-span-2">
                    <UserGrowthChart />
                </div>
                <div className="col-span-1 md:col-span-2">
                    <ReferralByDayChart />
                </div>
                <div className="col-span-1 md:col-span-2">
                    <MemoriesChart />
                </div>
                <div className="col-span-1 md:col-span-2">
                    <VotesChart />
                </div>
                <div className="col-span-1 md:col-span-2">
                    <SavedMemoriesChart />
                </div>
                <div className="col-span-1 md:col-span-2">
                    <CommentsChart />
                </div>
                <div className="col-span-1 md:col-span-2">
                    <EventMessagesChart />
                </div>
                <ReferralChart />
                <TimezoneChart />
            </div>
        </div>
    );
}
