type VariantType = 'size' | 'color' | 'material';

export type Variant = {
    price: number | null;
    outOfStock: boolean;
    images?: string[];
} & {
    [K in VariantType]?: string; 
};

export interface Product {
    id: string;
    articleNumber?: string;
    name: string;
    description: string;
    sizeChartImg?: string;
    category: string[];
    availableVariants?: VariantType[];
    availableVariantsOptions?: {
        [K in VariantType]?: K extends 'color' ? { image: string; value: string }[] : string[];
    };
    variants?: Variant[];
}