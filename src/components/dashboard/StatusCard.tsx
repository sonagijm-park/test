import React from 'react';

interface StatusCardProps {
    status: 'good' | 'warning' | 'critical';
}

const StatusCard: React.FC<StatusCardProps> = ({ status }) => {
    const getStatusColor = () => {
        switch (status) {
            case 'good':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'warning':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'critical':
                return 'bg-red-100 text-red-800 border-red-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const getStatusText = () => {
        switch (status) {
            case 'good':
                return 'All Systems Good';
            case 'warning':
                return 'Maintenance Due Soon';
            case 'critical':
                return 'Immediate Attention Required';
            default:
                return 'Unknown Status';
        }
    };

    return (
        <div className={`p-4 rounded-lg border ${getStatusColor()} shadow-sm transition-all duration-300`}>
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-semibold">Vehicle Status</h3>
                    <p className="text-sm font-medium mt-1">{getStatusText()}</p>
                </div>
                <div className={`w-3 h-3 rounded-full ${status === 'good' ? 'bg-green-500' :
                        status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                    } animate-pulse`}></div>
            </div>
        </div>
    );
};

export default StatusCard;
