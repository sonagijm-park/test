export interface Part {
    id: string;
    name: string;
    intervalKm: number;
    lastReplacedKm: number;
    asin: string;
    searchQuery: string;
    category: string;
}

export type PartStatus = 'good' | 'warning' | 'urgent';

export interface PartStatusResult {
    status: PartStatus;
    remainingKm: number;
}
