import type { Part, PartStatusResult } from '../types';

export const calculatePartStatus = (part: Part, currentMileage: number): PartStatusResult => {
    const nextDueKm = part.lastReplacedKm + part.intervalKm;
    const remainingKm = nextDueKm - currentMileage;

    let status: PartStatusResult['status'] = 'good';

    if (remainingKm < 1000) {
        status = 'urgent';
    } else if (remainingKm < 5000) {
        status = 'warning';
    }

    return {
        status,
        remainingKm,
    };
};
