export const DEMOS = [
    // --- SERVICE / LEAD GEN ---

    // 1. Skin Clinic
    {
        slug: 'muse-medical',
        niche: 'Skin Clinic',
        title: 'The Muse Clinic',
        headline: 'Where Medical Science Meets Artistry.',
        subheadline: 'A boutique medical aesthetic centre in Bangsar South. FDA-approved technologies for subtle, sophisticated enhancement.',
        color: 'rose',
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=2000', 
        stats: [
            { label: 'procedures performed', value: '12k+' },
            { label: 'doctors on board', value: '4' },
            { label: 'google rating', value: '4.9' }
        ],
        problem: {
            title: 'Stop gambling with your face.',
            text: 'Discount treatments often use diluted products or uncertified lasers. At Muse, we prioritize safety and long-term skin health over quick fixes.'
        },
        process: [
            { step: '01', title: '3D Mapping', text: 'We scan your facial structure to plan precise enhancements.' },
            { step: '02', title: 'The Blueprint', text: 'A holistic plan combining injectables, lasers, and topicals.' },
            { step: '03', title: 'Refinement', text: 'A follow-up scan 2 weeks later to ensure perfection.' }
        ],
        reviews: [
            { name: 'Datin Sofia', text: 'Dr. Lim has an artist\'s eye. I look 5 years younger but nobody can tell I had work done.', stars: 5 },
            { name: 'Elena R.', text: 'The PicoSure laser treatment completely cleared my melasma.', stars: 5 },
            { name: 'Chloe T.', text: 'Impeccable service. The private waiting rooms are a nice touch.', stars: 5 }
        ],
        faq: [
            { q: 'Are your doctors LCP certified?', a: 'Absolutely. Every doctor holds a valid LCP from the Ministry of Health.' },
            { q: 'Do you offer installment plans?', a: 'Yes, we offer 0% interest installments for Maybank and CIMB cardholders.' }
        ]
    },

    // 2. Psychiatric Clinic
    {
        slug: 'serene-minds',
        niche: 'Psychiatric Clinic',
        title: 'Serene Minds Specialist',
        headline: 'Mental Wellness, Demystified.',
        subheadline: 'Evidence-based psychiatric care and psychotherapy in a discreet, safe environment. Reclaim your peace of mind.',
        color: 'sky',
        image: 'https://plus.unsplash.com/premium_photo-1664378617428-8b66debab58e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHBzeWNoaWF0cmlzdHxlbnwwfHwwfHx8MA%3D%3D',
        stats: [
            { label: 'specialists', value: '8' },
            { label: 'years practice', value: '25' },
            { label: 'confidentiality', value: '100%' }
        ],
        problem: {
            title: 'You don\'t have to struggle alone.',
            text: 'Anxiety, depression, and burnout are medical conditions, not character flaws. They require professional treatment, not just positive thinking.'
        },
        process: [
            { step: '01', title: 'Assessment', text: 'A comprehensive 60-minute evaluation to understand your history.' },
            { step: '02', title: 'Care Plan', text: 'Medication management combined with cognitive behavioral therapy.' },
            { step: '03', title: 'Support', text: 'Regular check-ins to adjust treatment and ensure progress.' }
        ],
        reviews: [
            { name: 'Anonymous', text: 'Dr. Sarah saved my career. I was burning out and she helped me find balance.', stars: 5 },
            { name: 'Jason L.', text: 'A very non-judgmental space. I felt heard for the first time in years.', stars: 5 },
            { name: 'Priya K.', text: 'Professional and discreet. The medication management is very precise.', stars: 5 }
        ],
        faq: [
            { q: 'Do I need a referral letter?', a: 'No, you can book a consultation directly with us.' },
            { q: 'Is it confidential?', a: 'Strictly. We do not share records without your explicit written consent.' }
        ]
    },

    // 3. Dental Clinic
    {
        slug: 'pearl-district',
        niche: 'Dental Clinic',
        title: 'Pearl District Dental',
        headline: 'Designing Smiles. Defining Confidence.',
        subheadline: 'Advanced cosmetic dentistry and implantology centre. Digital smile design for predictable, stunning results.',
        color: 'teal',
        image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stats: [
            { label: 'implants placed', value: '5,000+' },
            { label: 'pain-free rating', value: '99%' },
            { label: 'tech level', value: 'Elite' }
        ],
        problem: {
            title: 'Hiding your smile affects your life.',
            text: 'Missing teeth or discoloration can crush self-esteem. Traditional dentistry is often painful and slow. We use digital tech to change that.'
        },
        process: [
            { step: '01', title: '3D Scan', text: 'No more gooey molds. We use intraoral scanners for instant 3D models.' },
            { step: '02', title: 'Mockup', text: 'Test drive your new smile with a temporary mockup before we begin.' },
            { step: '03', title: 'Transformation', text: 'Guided surgery ensures minimum discomfort and maximum precision.' }
        ],
        reviews: [
            { name: 'Michael C.', text: 'I got a full set of veneers. The attention to detail is insane.', stars: 5 },
            { name: 'Aisha B.', text: 'Root canal was actually painless. I fell asleep in the chair.', stars: 5 },
            { name: 'Ken W.', text: 'Best investment I ever made. My confidence has skyrocketed.', stars: 5 }
        ],
        faq: [
            { q: 'Do you do Invisalign?', a: 'Yes, we are a Diamond Provider for Invisalign.' },
            { q: 'Is there a warranty?', a: 'We offer a 5-year warranty on all ceramic crowns and veneers.' }
        ]
    },

    // 4. Gym / Fitness
    {
        slug: 'vanguard-strength',
        niche: 'Gym',
        title: 'Vanguard Strength',
        headline: 'Forged in Iron. Built by Science.',
        subheadline: 'Not just a gym. A performance facility. Small group training with certified coaches who track your every lift.',
        color: 'stone',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2000',
        stats: [
            { label: 'members', value: '300' },
            { label: 'PRs hit', value: 'Daily' },
            { label: 'community', value: '100%' }
        ],
        problem: {
            title: 'Commercial gyms want you to fail.',
            text: 'They oversell memberships hoping you don\'t show up. We are the opposite. We cap our members to ensure you get coaching, not just equipment.'
        },
        process: [
            { step: '01', title: 'Baseline', text: 'Strength and mobility screen to set your starting numbers.' },
            { step: '02', title: 'Program', text: 'A structured 12-week block designed for progressive overload.' },
            { step: '03', title: 'Review', text: 'Quarterly check-ins to adjust goals and nutrition.' }
        ],
        reviews: [
            { name: 'Rajiv M.', text: 'Dropped 10kg and added 20kg to my squat. The programming works.', stars: 5 },
            { name: 'Sarah J.', text: 'Intimidating at first, but the community is incredibly supportive.', stars: 5 },
            { name: 'Danial', text: 'No waiting for racks. No influencers filming. Just hard work.', stars: 5 }
        ],
        faq: [
            { q: 'Is this Crossfit?', a: 'No. We focus on structured strength training, not random WODs.' },
            { q: 'Can beginners join?', a: 'Yes, our "Foundations" class is mandatory for all new lifters.' }
        ]
    },

    // 5. Physio Centre
    {
        slug: 'kinetic-x',
        niche: 'Physio Centre',
        title: 'KineticX Centre',
        headline: 'Don\'t Just Recover. Optimize.',
        subheadline: 'Data-driven rehabilitation for elite athletes and corporate professionals. Fixing biomechanics, not just symptoms.',
        color: 'teal',
        image: 'https://images.unsplash.com/photo-1754941622136-6664a3f50b2e?q=80&w=1086&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stats: [
            { label: 'elite athletes', value: '50+' },
            { label: 'pain-free clients', value: '3,400' },
            { label: 'recovery speed', value: '2x' }
        ],
        problem: {
            title: 'Painkillers are not a strategy.',
            text: 'Masking pain leads to chronic injury. Most clinics just massage the sore spot; we analyze your gait, posture, and load to find the root cause.'
        },
        process: [
            { step: '01', title: 'Motion Capture', text: 'We use high-speed cameras to analyze your movement patterns.' },
            { step: '02', title: 'Load Management', text: 'Calculated progressive overload to rebuild tissue tolerance.' },
            { step: '03', title: 'Performance', text: 'Transition from rehab straight into strength & conditioning.' }
        ],
        reviews: [
            { name: 'Marcus L.', text: 'Back to marathons after a slipped disc. The strength program was brutal but it worked.', stars: 5 },
            { name: 'Jenny C.', text: 'Very modern facility. Not like those depressing old physio centres.', stars: 5 },
            { name: 'Coach Raj', text: 'I send all my injured players here. They come back stronger than before.', stars: 5 }
        ],
        faq: [
            { q: 'Is this claimable?', a: 'Yes, we are panel providers for AIA, Prudential, and Great Eastern.' },
            { q: 'Do I need a referral letter?', a: 'Not strictly necessary, but helpful for insurance claims.' }
        ]
    },

    // 6. Chiropractic Centre
    {
        slug: 'axis-chiro',
        niche: 'Chiropractic Centre',
        title: 'Axis Spine & Health',
        headline: 'Realignment for Modern Life.',
        subheadline: 'Gonstead method chiropractic care focusing on nervous system interference. Correcting the "Tech Neck" epidemic.',
        color: 'indigo',
        image: 'https://images.unsplash.com/photo-1540205895360-4ad4cffb3aa8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stats: [
            { label: 'spines adjusted', value: '10k+' },
            { label: 'migraines fixed', value: '95%' },
            { label: 'drug-free', value: '100%' }
        ],
        problem: {
            title: 'Your posture is affecting your health.',
            text: 'Sitting at a desk for 8 hours compresses the spine and pinches nerves, causing headaches, fatigue, and brain fog.'
        },
        process: [
            { step: '01', title: 'X-Ray Analysis', text: 'We never guess. We visualize the exact misalignment via digital X-ray.' },
            { step: '02', title: 'Adjustment', text: 'Precise, manual adjustments to restore joint mobility.' },
            { step: '03', title: 'Ergonomics', text: 'We teach you how to set up your workspace to hold the adjustment.' }
        ],
        reviews: [
            { name: 'Bryan T.', text: 'I had migraines for 10 years. After 1 month here, they are gone.', stars: 5 },
            { name: 'Samantha', text: 'Dr. Lee explains everything so clearly. No hard selling of packages.', stars: 5 },
            { name: 'Uncle Bob', text: 'I can finally turn my neck to check blind spots while driving.', stars: 5 }
        ],
        faq: [
            { q: 'Does it hurt?', a: 'Most patients feel immediate relief. There may be mild soreness like a gym workout.' },
            { q: 'How many sessions?', a: 'It depends on the X-ray, but we focus on corrective care, not lifetime dependency.' }
        ]
    },

    // 7. Construction Company
    {
        slug: 'ironwood-construct',
        niche: 'Construction Company',
        title: 'Ironwood Construct',
        headline: 'Industrial Precision. Residential Soul.',
        subheadline: 'CIDB Grade G7 Contractors specializing in high-end bungalow construction and major structural renovations.',
        color: 'orange',
        image: 'https://images.unsplash.com/photo-1587582423116-ec07293f0395?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stats: [
            { label: 'sqft built', value: '500k+' },
            { label: 'safety incidents', value: '0' },
            { label: 'on-time handover', value: '98%' }
        ],
        problem: {
            title: 'The horror stories are real.',
            text: 'Abandoned sites, ballooning budgets, and cracked walls. The construction industry has a trust issue. We are here to fix it with radical transparency.'
        },
        process: [
            { step: '01', title: 'Feasibility', text: 'Soil tests and structural integrity checks before quoting.' },
            { step: '02', title: 'Virtual Twin', text: 'Walk through your future home in VR before we pour concrete.' },
            { step: '03', title: 'Live Logs', text: 'Access daily site photos and logs via our client portal.' }
        ],
        reviews: [
            { name: 'Mr. Tan', text: 'Ironwood took over my abandoned project and finished it in 4 months. Lifesavers.', stars: 5 },
            { name: 'Jason & Amy', text: 'The finishing on the exposed concrete is museum quality.', stars: 5 },
            { name: 'Ar. Farhan', text: 'As an architect, I rarely enjoy working with builders. Ironwood is the exception.', stars: 5 }
        ],
        faq: [
            { q: 'Do you handle council submissions?', a: 'Yes, our in-house runner handles all DBKL/MBSA submissions.' },
            { q: 'What is the retention sum?', a: 'We hold a standard 5% retention sum released after the defect liability period.' }
        ]
    },

    // 8. Insurance Agent
    {
        slug: 'sentinel-wealth',
        niche: 'Insurance Agent',
        title: 'Sentinel Wealth Group',
        headline: 'Protecting Legacies, Not Just Selling Policies.',
        subheadline: 'Premier advisory for high-net-worth individuals. Comprehensive estate planning, medical coverage, and business succession.',
        color: 'slate',
        image: 'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stats: [
            { label: 'claims settled', value: 'RM50M' },
            { label: 'MDRT agents', value: '100%' },
            { label: 'client retention', value: '99%' }
        ],
        problem: {
            title: 'Most people are dangerously underinsured.',
            text: 'Inflation eats into medical limits. Old policies often have loopholes. We audit your portfolio to ensure you are actually covered when it matters.'
        },
        process: [
            { step: '01', title: 'The Audit', text: 'Reviewing all your existing policies from any insurer.' },
            { step: '02', title: 'Gap Analysis', text: 'identifying exposure in medical, critical illness, and income replacement.' },
            { step: '03', title: 'The Trust', text: 'Structuring insurance payouts into a trust to protect beneficiaries.' }
        ],
        reviews: [
            { name: 'David T.', text: 'My agent handled my hospital admission at 2am. That is real service.', stars: 5 },
            { name: 'Puan Zaiton', text: 'They helped me structure a buy-sell agreement for my company partners.', stars: 5 },
            { name: 'Alex H.', text: 'No hard selling. They actually advised me to cancel a bad policy I had.', stars: 5 }
        ],
        faq: [
            { q: 'Do you charge a consultation fee?', a: 'No, our initial financial health check is complimentary.' },
            { q: 'Which insurers do you represent?', a: 'We are a financial advisory group with access to multiple top-tier insurers.' }
        ]
    },

    // 9. Auto Detailing
    {
        slug: 'blackbadge-studio',
        niche: 'Auto Detailing',
        title: 'Blackbadge Studio',
        headline: 'Preserving Automotive Art.',
        subheadline: 'The authorized applicator for Gtechniq Ceramic & XPEL Paint Protection Film in Glenmarie.',
        color: 'indigo',
        image: 'https://images.unsplash.com/photo-1605437241278-c1806d14a4d9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stats: [
            { label: 'supercars protected', value: '400+' },
            { label: 'certified installers', value: '100%' },
            { label: 'gloss units', value: '99' }
        ],
        problem: {
            title: 'Your investment is eroding.',
            text: 'Malaysian roads and UV rays destroy paintwork in months. A standard car wash introduces micro-scratches that dull your finish.'
        },
        process: [
            { step: '01', title: 'Decontamination', text: 'Iron removal and clay bar treatment to strip road grime.' },
            { step: '02', title: 'Correction', text: 'Multi-stage paint correction to remove 95% of swirls.' },
            { step: '03', title: 'Armoring', text: 'Application of self-healing PPF or 9H Ceramic Coating.' }
        ],
        reviews: [
            { name: 'Kenji O.', text: 'My GT3 RS looks wetter than when I picked it up from the showroom.', stars: 5 },
            { name: 'Dr. Siva', text: 'Trusted them with the Ferrari. Flawless workmanship on the PPF edges.', stars: 5 },
            { name: 'Alex W.', text: 'Interior detailing removed stains I thought were permanent.', stars: 5 }
        ],
        faq: [
            { q: 'How long does it last?', a: 'Our Platinum Package is warrantied for 7 years.' },
            { q: 'Do you offer pickup?', a: 'Yes, enclosed trailer pickup available for unregisterd or classic cars.' }
        ]
    },

    // 10. Clothing Brand (E-Commerce)
    {
        slug: 'aura-stitch',
        niche: 'Clothing Brand',
        title: 'Aura & Stitch',
        headline: 'Minimalist Essentials. Ethically Made.',
        subheadline: 'Premium linen and organic cotton staples for the tropical climate. Designed in KL, crafted for longevity.',
        color: 'rose',
        image: 'https://images.unsplash.com/photo-1734669579657-7bb97f1c0fc9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stats: [
            { label: 'fabrics', value: 'Organic' },
            { label: 'plastic free', value: '100%' },
            { label: 'returns', value: 'Free' }
        ],
        // E-com projects don't always need these fields for the grid, but keeping structure prevents errors
        problem: { title: '', text: '' }, process: [], reviews: [], faq: []
    },

    // 11. Dessert Shop (Lead Gen / Local)
    {
        slug: 'gilded-crumb',
        niche: 'Dessert Shop',
        title: 'The Gilded Crumb',
        headline: 'Artisanal Indulgence.',
        subheadline: 'Handcrafted French pastries and sourdough donuts. Using only French butter and Madagascan vanilla.',
        color: 'amber',
        image: 'https://images.unsplash.com/photo-1583338917451-face2751d8d5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stats: [
            { label: 'daily sellout', value: '3pm' },
            { label: 'butter used', value: 'Isigny' },
            { label: 'calories', value: 'Worth It' }
        ],
        problem: {
            title: 'Life is too short for dry cake.',
            text: 'Mass-produced desserts are full of preservatives and sugar substitutes. We bake fresh every morning, in small batches, with zero shortcuts.'
        },
        process: [
            { step: '01', title: 'The Fold', text: 'Our croissant dough is laminated over 3 days for maximum layers.' },
            { step: '02', title: 'The Bake', text: 'Baked fresh at 6am. The smell fills the entire street.' },
            { step: '03', title: 'The Finish', text: 'Hand-piped fillings and delicate glazing for the perfect bite.' }
        ],
        reviews: [
            { name: 'FoodieMy', text: 'The Pistachio Cronut is life-changing. Get there early!', stars: 5 },
            { name: 'Sarah', text: 'Better than the bakeries I tried in Paris. Seriously.', stars: 5 },
            { name: 'Kevin L.', text: 'Perfect coffee pairing. The ambiance is great for dates.', stars: 5 }
        ],
        faq: [
            { q: 'Do you deliver?', a: 'Yes, via GrabFood and Lalamove within 15km.' },
            { q: 'Are you Halal?', a: 'We use all Halal-certified ingredients and no alcohol.' }
        ]
    },

    // 12. Skincare
    {
        slug: 'lumina-botanicals',
        niche: 'Skincare',
        title: 'Lumina Botanicals',
        headline: 'Science-Backed Radiance.',
        subheadline: 'Clean, clinical-grade skincare formulations focusing on barrier repair and hydration.',
        color: 'sky',
        image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=2000',
        stats: [{ label: 'vegan', value: '100%' }],
        problem: { title: '', text: '' }, process: [], reviews: [], faq: []
    },

    // 13. Tech Gadgets
    {
        slug: 'nexus-audio',
        niche: 'Tech Gadgets',
        title: 'Nexus Audio',
        headline: 'Pure Sound. Zero Noise.',
        subheadline: 'High-fidelity audio equipment for creators and audiophiles. Engineered in Tokyo.',
        color: 'zinc',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=2000',
        stats: [{ label: 'battery', value: '40hr' }],
        problem: { title: '', text: '' }, process: [], reviews: [], faq: []
    }
];