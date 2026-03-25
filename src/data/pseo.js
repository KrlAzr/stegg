// src/data/pseo.js

// SHARED LOCATIONS (Used by both)
export const locations = [
    { slug: "subang-jaya", name: "Subang Jaya", state: "Selangor" },
    { slug: "petaling-jaya", name: "Petaling Jaya", state: "Selangor" },
    { slug: "shah-alam", name: "Shah Alam", state: "Selangor" },
    { slug: "ttdi", name: "TTDI", state: "Kuala Lumpur" },
    { slug: "bangsar", name: "Bangsar", state: "Kuala Lumpur" },
    { slug: "puchong", name: "Puchong", state: "Selangor" },
    { slug: "cyberjaya", name: "Cyberjaya", state: "Selangor" },
    { slug: "bukit-jalil", name: "Bukit Jalil", state: "Kuala Lumpur" },
    { slug: "klang", name: "Klang", state: "Selangor" },
    { slug: "damansara", name: "Damansara", state: "Selangor" }
];

// DATA SET 1: AGENCY SERVICES (Web Design, SEO)
export const agencyServices = [
    { 
        slug: "web-design", 
        name: "Web Design", 
        keyword: "Web Design",
        icon: "🎨",
        pain: "Is your current website driving customers away?",
        solution: "We build high-performance websites that load in under 1 second.",
        hook: "Stop losing customers to slow websites."
    },
    { 
        slug: "seo-services", 
        name: "SEO Services", 
        keyword: "SEO Agency",
        icon: "📈",
        pain: "Stuck on Page 2 of Google?",
        solution: "Speed is a #1 ranking factor. Our sites score 100/100 on Core Web Vitals.",
        hook: "Rank #1 on Google organically."
    },
    { 
        slug: "google-ads", 
        name: "Google Ads Management", 
        keyword: "Google Ads",
        icon: "💰",
        pain: "Burning budget on clicks that don't convert?",
        solution: "Lower your CPM and CPC by improving your Landing Page Quality Score.",
        hook: "Stop paying the 'Slow Website Tax'."
    }
];

// DATA SET 2: SAAS NICHES (Badminton, Cafe)
export const saasNiches = [
    { 
        slug: "badminton-court", 
        name: "Badminton Court", 
        type: "Sports",
        pain: "Double bookings and WhatsApp screenshots",
        benefit: "Auto-lock slots instantly upon payment",
        icon: "🏸"
    },
    { 
        slug: "futsal-center", 
        name: "Futsal Center", 
        type: "Sports", 
        pain: "Empty slots during off-peak hours",
        benefit: "Fill courts 24/7 with real-time availability",
        icon: "⚽"
    },
    { 
        slug: "cafe", 
        name: "Cafe", 
        type: "Dining", 
        pain: "Messy DM reservations and no-shows",
        benefit: "Let guests book their favorite table zone",
        icon: "☕"
    },
    { 
        slug: "coworking-space", 
        name: "Coworking Space", 
        type: "Space", 
        pain: "Manually tracking meeting room usage",
        benefit: "Automated room booking and credit deduction",
        icon: "🏢"
    }
];