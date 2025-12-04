import React, { useState } from 'react';
import { mockParts } from '../../data/mockParts';
import PartsList from './PartsList';
import MileageInput from './MileageInput';

const Dashboard: React.FC = () => {
    const [currentMileage, setCurrentMileage] = useState<number>(34000);

    return (
        <div className="space-y-6 px-4">
            {/* 1. 주행거리 입력창 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                    🚗 Current Mileage
                </h2>
                <MileageInput
                    value={currentMileage}
                    onChange={setCurrentMileage}
                />
            </div>

            {/* 2. 부품 리스트 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                    🔧 Maintenance Forecast
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                    Based on your current mileage ({currentMileage.toLocaleString()} km)
                </p>
                <PartsList parts={mockParts} currentMileage={currentMileage} />
            </div>
        </div>
    );
};

export default Dashboard;


