// src/data/campaigns.js

// 1. Wealthy/Targeted Locations (Expanded)
export const locations = [
    { slug: "mont-kiara", name: "Mont Kiara" },
    { slug: "bangsar", name: "Bangsar" },
    { slug: "damansara-heights", name: "Damansara Heights" },
    { slug: "ttdi", name: "TTDI" },
    { slug: "sri-hartamas", name: "Sri Hartamas" },
    { slug: "bukit-tunku", name: "Bukit Tunku" },
    { slug: "desa-park-city", name: "Desa Park City" },
    { slug: "subang-jaya", name: "Subang Jaya" },
    { slug: "petaling-jaya", name: "Petaling Jaya" },
    { slug: "shah-alam", name: "Shah Alam" },
    { slug: "cyberjaya", name: "Cyberjaya" },
    { slug: "putrajaya", name: "Putrajaya" },
    { slug: "ampang", name: "Ampang" }
];

// 2. The Niche Relations (7 High-Ticket Industries)
export const niches = [
    {
        slug: "dental",
        name: "Dental Clinic",
        plural: "Dental Clinics",
        pain_point: "empty appointment slots",
        competitor_platform: "WhatClinic",
        high_value_items: [
            { slug: "invisalign", name: "Invisalign" },
            { slug: "dental-implants", name: "Dental Implants" },
            { slug: "veneers", name: "Composite Veneers" }
        ]
    },
    {
        slug: "physio",
        name: "Physiotherapy Centre",
        plural: "Physio Centres",
        pain_point: "reliance on referral only",
        competitor_platform: "DoctorOnCall",
        high_value_items: [
            { slug: "slip-disc-treatment", name: "Slip Disc Treatment" },
            { slug: "sports-massage", name: "Sports Massage" },
            { slug: "stroke-rehab", name: "Stroke Rehab" }
        ]
    },
    {
        slug: "confinement",
        name: "Confinement Centre",
        plural: "Confinement Centres",
        pain_point: "high competition pricing",
        competitor_platform: "PopMummy", // or generic Mummy blogs
        high_value_items: [
            { slug: "28-days-package", name: "Premium Confinement Package" },
            { slug: "postnatal-massage", name: "Postnatal Massage" },
            { slug: "nanny-service", name: "Private Nanny Service" }
        ]
    },
    {
        slug: "renovation",
        name: "Interior Design Firm",
        plural: "Interior Designers",
        pain_point: "low-quality leads",
        competitor_platform: "Kaodim",
        high_value_items: [
            { slug: "kitchen-cabinets", name: "Kitchen Cabinets" },
            { slug: "wet-works", name: "Wet Works Extension" },
            { slug: "commercial-reno", name: "Commercial Renovation" }
        ]
    },
    {
        slug: "roofing",
        name: "Roofing Specialist",
        plural: "Roofing Specialists",
        pain_point: "price wars with handymen",
        competitor_platform: "Recommend.my",
        high_value_items: [
            { slug: "roof-leaking", name: "Roof Leaking Repair" },
            { slug: "waterproofing", name: "Concrete Waterproofing" },
            { slug: "roof-tiles", name: "Roof Tiles Replacement" }
        ]
    },
    {
        slug: "preschool",
        name: "Private Kindergarten",
        plural: "Private Kindergartens",
        pain_point: "low enrolment numbers",
        competitor_platform: "Kiddy123",
        high_value_items: [
            { slug: "islamic-kindergarten", name: "Islamic Kindergarten" },
            { slug: "montessori", name: "Montessori Program" },
            { slug: "daycare", name: "Full Daycare Service" }
        ]
    },
    {
        slug: "detailing",
        name: "Auto Detailing Shop",
        plural: "Detailing Shops",
        pain_point: "cheap car wash customers",
        competitor_platform: "Fave", // Discount sites
        high_value_items: [
            { slug: "ceramic-coating", name: "Ceramic Coating" },
            { slug: "ppf", name: "Paint Protection Film (PPF)" },
            { slug: "premium-tint", name: "Premium Window Tinting" }
        ]
    }
];