// src/data/store-data.ts

export interface Product {
    id: string;
    slug: string;
    name: string;
    price: number;
    category: string;
    rating: number;
    reviews: number;
    tags: string[];
    colors: { name: string; hex: string }[];
    sizes: string[];
    description: string;
    image: string;
    images: string[];
}

export interface StoreData {
    name: string;
    slug: string;       
    heroImage: string; 
    description: string;
    products: Product[];
}

export const STORE_DATA: Record<string, StoreData> = {
    
    // 1. CLOTHING BRAND
    'aura-stitch': {
        name: "Aura & Stitch",
        slug: 'aura-stitch',
        heroImage: "https://plus.unsplash.com/premium_photo-1691367279293-f82232361dae?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
        description: "Ethically made staples for the tropical climate. 100% Organic Linen & Cotton.",
        products: [
            {
                id: 'p1',
                slug: 'essential-linen-shirt',
                name: 'The Essential Linen Shirt',
                price: 189,
                category: 'Tops',
                rating: 4.8,
                reviews: 124,
                tags: ['Best Seller'],
                colors: [{ name: 'Sand', hex: '#E5D0B1' }, { name: 'White', hex: '#FFFFFF' }],
                sizes: ['S', 'M', 'L', 'XL'],
                description: "Cut from 100% European flax, this shirt is breathable, durable, and gets softer with every wash.",
                // REPLACED IMAGE
                image: 'https://plus.unsplash.com/premium_photo-1690338237128-b32fedb44d55?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                images: ['https://plus.unsplash.com/premium_photo-1690338237128-b32fedb44d55?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']
            },
            {
                id: 'p2',
                slug: 'pleated-wide-trousers',
                name: 'Pleated Wide Trousers',
                price: 249,
                category: 'Bottoms',
                rating: 4.9,
                reviews: 42,
                tags: ['New'],
                colors: [{ name: 'Charcoal', hex: '#36454F' }, { name: 'Olive', hex: '#556B2F' }],
                sizes: ['28', '30', '32'],
                description: "A relaxed fit with a single pleat for ease of movement. Perfect for office or casual wear.",
                // REPLACED IMAGE
                image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800',
                images: ['https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800']
            },
            {
                id: 'p3',
                slug: 'resort-camp-collar',
                name: 'Resort Camp Collar',
                price: 169,
                category: 'Tops',
                rating: 4.7,
                reviews: 28,
                tags: ['Summer'],
                colors: [{ name: 'Navy', hex: '#000080' }],
                sizes: ['S', 'M', 'L'],
                description: "Boxy fit camp collar shirt made from crisp organic cotton poplin.",
                // REPLACED IMAGE
                image: 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?auto=format&fit=crop&q=80&w=800',
                images: ['https://images.unsplash.com/photo-1578932750294-f5075e85f44a?auto=format&fit=crop&q=80&w=800']
            },
            {
                id: 'p4',
                slug: 'weekend-shorts',
                name: 'The Weekend Short',
                price: 129,
                category: 'Bottoms',
                rating: 4.6,
                reviews: 55,
                tags: [],
                colors: [{ name: 'Khaki', hex: '#F0E68C' }],
                sizes: ['S', 'M', 'L', 'XL'],
                description: "Mid-length shorts with an elastic waistband for maximum comfort.",
                // REPLACED IMAGE
                image: 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?auto=format&fit=crop&q=80&w=800',
                images: ['https://images.unsplash.com/photo-1565084888279-aca607ecce0c?auto=format&fit=crop&q=80&w=800']
            },
            {
                id: 'p5',
                slug: 'oversized-tee',
                name: 'Heavyweight Oversized Tee',
                price: 89,
                category: 'Tops',
                rating: 4.9,
                reviews: 210,
                tags: ['Essential'],
                colors: [{ name: 'Black', hex: '#000' }, { name: 'White', hex: '#FFF' }],
                sizes: ['S', 'M', 'L', 'XL'],
                description: "280gsm heavyweight cotton. Structured fit that doesn't lose shape.",
                // REPLACED IMAGE
                image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800',
                images: ['https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800']
            },
            {
                id: 'p6',
                slug: 'canvas-tote',
                name: 'Market Canvas Tote',
                price: 49,
                category: 'Accessories',
                rating: 4.8,
                reviews: 30,
                tags: [],
                colors: [{ name: 'Natural', hex: '#F5F5DC' }],
                sizes: ['One Size'],
                description: "Durable canvas tote for your daily essentials or grocery runs.",
                // REPLACED IMAGE
                image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800',
                images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800']
            }
        ]
    },

    // 2. SKINCARE BRAND
    'lumina-botanicals': {
        name: "Lumina Botanicals",
        slug: 'lumina-botanicals',
        heroImage: "https://plus.unsplash.com/premium_photo-1671641737541-714de143f6c7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Clean, clinical-grade formulations for barrier repair.",
        products: [
            {
                id: 's1',
                slug: 'lumina-glow-serum',
                name: 'Lumina Glow Serum',
                price: 145,
                category: 'Serums',
                rating: 5.0,
                reviews: 89,
                tags: ['Viral', 'Best Seller'],
                colors: [],
                sizes: ['30ml', '50ml'],
                description: "A potent Vitamin C + Hyaluronic Acid blend for instant radiance.",
                image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800',
                images: ['https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800']
            },
            {
                id: 's2',
                slug: 'midnight-repair-oil',
                name: 'Midnight Repair Oil',
                price: 180,
                category: 'Oils',
                rating: 4.8,
                reviews: 210,
                tags: ['Night Care'],
                colors: [],
                sizes: ['30ml'],
                description: "Infused with Blue Tansy to soothe redness while you sleep.",
                image: 'https://images.unsplash.com/photo-1767186833952-375c1709631e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2tpbiUyME9pbHxlbnwwfHwwfHx8MA%3D%3D',
                images: ['https://images.unsplash.com/photo-1767186833952-375c1709631e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2tpbiUyME9pbHxlbnwwfHwwfHx8MA%3D%3D']
            },
            {
                id: 's3',
                slug: 'hydra-barrier-cream',
                name: 'Hydra-Barrier Cream',
                price: 125,
                category: 'Moisturizers',
                rating: 4.9,
                reviews: 340,
                tags: ['Essentials'],
                colors: [],
                sizes: ['50ml'],
                description: "Ceramide-rich moisturizer that locks in hydration for 24 hours.",
                image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=800',
                images: ['https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=800']
            },
            {
                id: 's4',
                slug: 'gentle-gel-cleanser',
                name: 'Gentle Gel Cleanser',
                price: 85,
                category: 'Cleansers',
                rating: 4.7,
                reviews: 150,
                tags: [],
                colors: [],
                sizes: ['150ml'],
                description: "Low pH cleanser that removes grime without stripping natural oils.",
                image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800',
                images: ['https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800']
            },
            {
                id: 's5',
                slug: 'rose-water-toner',
                name: 'Rose Water Mist',
                price: 65,
                category: 'Toners',
                rating: 4.6,
                reviews: 45,
                tags: [],
                colors: [],
                sizes: ['100ml'],
                description: "Refreshing mist with organic rose water and glycerin.",
                image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=800',
                images: ['https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=800']
            }
        ]
    },

    // 3. TECH BRAND
    'nexus-audio': {
        name: "Nexus Audio",
        slug: 'nexus-audio',
        heroImage: "https://plus.unsplash.com/premium_photo-1664699106213-11a7ac5bd9a7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
        description: "High-fidelity audio engineered in Tokyo.",
        products: [
            {
                id: 't1',
                slug: 'nexus-anc-headphones',
                name: 'Nexus ANC Pro',
                price: 899,
                category: 'Headphones',
                rating: 4.9,
                reviews: 340,
                tags: ['Flagship'],
                colors: [{ name: 'Black', hex: '#111' }, { name: 'Silver', hex: '#C0C0C0' }],
                sizes: ['One Size'],
                description: "Industry-leading noise cancellation with 40-hour battery.",
                image: 'https://images.unsplash.com/photo-1752055833666-bfca5443136b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF1ZGlvJTIwaGVhZHBob25lfGVufDB8fDB8fHww',
                images: ['https://images.unsplash.com/photo-1752055833666-bfca5443136b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF1ZGlvJTIwaGVhZHBob25lfGVufDB8fDB8fHww']
            },
            {
                id: 't2',
                slug: 'nexus-buds-air',
                name: 'Nexus Buds Air',
                price: 499,
                category: 'Earbuds',
                rating: 4.8,
                reviews: 890,
                tags: ['Best Seller'],
                colors: [{ name: 'White', hex: '#FFF' }, { name: 'Black', hex: '#111' }],
                sizes: ['One Size'],
                description: "True wireless earbuds with transparency mode and spatial audio.",
                image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800',
                images: ['https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800']
            },
            {
                id: 't3',
                slug: 'nexus-home-speaker',
                name: 'Nexus Home One',
                price: 1299,
                category: 'Speakers',
                rating: 4.9,
                reviews: 45,
                tags: ['New'],
                colors: [{ name: 'Grey', hex: '#808080' }],
                sizes: ['Standard'],
                description: "360-degree room filling sound with Google Assistant built-in.",
                image: 'https://plus.unsplash.com/premium_photo-1683141496040-eeef9702269f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXVkaW8lMjBzcGVha2VyfGVufDB8fDB8fHww',
                images: ['https://plus.unsplash.com/premium_photo-1683141496040-eeef9702269f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXVkaW8lMjBzcGVha2VyfGVufDB8fDB8fHww']
            },
            {
                id: 't4',
                slug: 'keychron-mechanical',
                name: 'K1 Wireless Mechanical',
                price: 349,
                category: 'Accessories',
                rating: 4.7,
                reviews: 56,
                tags: ['Tactile'],
                colors: [{ name: 'RGB', hex: '#333' }],
                sizes: ['TKL'],
                description: "Low profile hot-swappable switches with aluminum body.",
                image: 'https://images.unsplash.com/photo-1608377205627-ae97b46989f4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8',
                images: ['https://images.unsplash.com/photo-1608377205627-ae97b46989f4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8']
            },
            {
                id: 't5',
                slug: 'braided-cable',
                name: 'Pro USB-C Cable',
                price: 49,
                category: 'Accessories',
                rating: 4.5,
                reviews: 120,
                tags: [],
                colors: [{ name: 'Red', hex: '#FF0000' }],
                sizes: ['2m'],
                description: "Durable braided cable supporting 100W fast charging.",
                image: 'https://plus.unsplash.com/premium_photo-1669262667978-5d4aafe29dd5?q=80&w=830&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                images: ['https://plus.unsplash.com/premium_photo-1669262667978-5d4aafe29dd5?q=80&w=830&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']
            }
        ]
    }
};