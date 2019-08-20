export interface Company {
    companiesPriceList?: {
        symbol: string;
        price: number;
    };
    symbol?: string;
    price?: number;
    Error?: string;
    Message?: string;
}
