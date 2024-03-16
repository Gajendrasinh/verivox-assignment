export interface Tariff {
    id: number;
    name: string;
    downloadSpeed: number;
    uploadSpeed: number;
    price: number;
    benefits: string[]
}