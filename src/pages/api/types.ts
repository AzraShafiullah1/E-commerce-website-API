
export {}; // Prevents Next.js from treating this as a page

export interface Product {
    quantity: number;
    id: number;
    name: string;
    price: number;
    image: string;
}