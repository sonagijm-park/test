import React from 'react';
import type { Part } from '../../types';
import { calculatePartStatus } from '../../utils/partUtils';

interface PartsListProps {
    parts: Part[];
    currentMileage: number;
}

const PartsList: React.FC<PartsListProps> = ({ parts, currentMileage }) => {
    // Sort parts by urgency (lowest remaining km first)
    const sortedParts = [...parts].sort((a, b) => {
        const statusA = calculatePartStatus(a, currentMileage);
        const statusB = calculatePartStatus(b, currentMileage);
        return statusA.remainingKm - statusB.remainingKm;
    });

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800">Parts Forecaster</h3>
            <div className="grid gap-4 md:grid-cols-2">
                {sortedParts.map((part) => {
                    const { status, remainingKm } = calculatePartStatus(part, currentMileage);

                    let statusColor = 'bg-green-50 border-green-200';
                    let badgeColor = 'bg-green-100 text-green-800';
                    let statusLabel = 'Good';

                    if (status === 'urgent') {
                        statusColor = 'bg-red-50 border-red-200';
                        badgeColor = 'bg-red-100 text-red-800';
                        statusLabel = 'Urgent';
                    } else if (status === 'warning') {
                        statusColor = 'bg-yellow-50 border-yellow-200';
                        badgeColor = 'bg-yellow-100 text-yellow-800';
                        statusLabel = 'Warning';
                    }

                    return (
                        <div key={part.id} className={`p-4 rounded-lg border ${statusColor} shadow-sm flex flex-col justify-between`}>
                            <div>
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-semibold text-slate-900">{part.name}</h4>
                                    <span className={`text-xs font-bold px-2 py-1 rounded-full uppercase ${badgeColor}`}>
                                        {statusLabel}
                                    </span>
                                </div>
                                <p className="text-sm text-slate-600 mb-4">
                                    Due in <span className="font-bold">{remainingKm.toLocaleString()} km</span>
                                </p>
                            </div>
                            <a
                                href={`https://www.amazon.com/dp/${part.asin}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center bg-white border border-slate-300 text-slate-700 font-medium py-2 px-4 rounded hover:bg-slate-50 transition-colors text-sm"
                            >
                                View Item 🛒
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PartsList;
