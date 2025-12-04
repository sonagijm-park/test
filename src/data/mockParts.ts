// src/data/mockParts.ts

// 1. Part 타입 정의 (이 파일 안에서 직접 정의해서 충돌 방지)
export interface Part {
    id: string;
    name: string;
    intervalKm: number;
    lastReplacedKm: number;
    asin: string;
    searchQuery: string;
    category: string;
}

// 2. 데이터 리스트
export const mockParts: Part[] = [
    {
        id: '1',
        name: 'Engine Oil Filter (오일 필터)',
        intervalKm: 10000,
        lastReplacedKm: 24000,
        asin: 'B000AS3D42',
        searchQuery: 'Motorcraft FL-910S Oil Filter',
        category: 'Engine'
    },
    {
        id: '2',
        name: 'Air Cleaner Element (에어 필터)',
        intervalKm: 20000,
        lastReplacedKm: 20000,
        asin: 'B0B6FB6Z4L',
        searchQuery: '2023 Ford Ranger Air Filter',
        category: 'Engine'
    },
    {
        id: '3',
        name: 'Cabin Air Filter (에어컨 필터)',
        intervalKm: 15000,
        lastReplacedKm: 15000,
        asin: 'B09YV3H5Q2',
        searchQuery: '2023 Ford Ranger Cabin Air Filter',
        category: 'Air'
    },
    {
        id: '4',
        name: 'Front Brake Pads (전륜 브레이크 패드)',
        intervalKm: 40000,
        lastReplacedKm: 0,
        asin: 'B08X4W5J8K',
        searchQuery: 'Motorcraft Front Brake Pads Ford Ranger 2023',
        category: 'Brake'
    },
    {
        id: '5',
        name: 'Diesel Glow Plugs (예열 플러그)',
        intervalKm: 80000,
        lastReplacedKm: 0,
        asin: 'B07X5Z1M3N',
        searchQuery: 'Ford Ranger 2.0 Bi-Turbo Glow Plugs',
        category: 'Power'
    },
    {
        id: '6',
        name: 'Battery AGM (메인 배터리)',
        intervalKm: 50000,
        lastReplacedKm: 0,
        asin: 'B016W4L7XW',
        searchQuery: 'AGM Battery H7 Group 94R',
        category: 'Power'
    }
];