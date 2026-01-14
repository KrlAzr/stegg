// src/data/demos.ts

export const DEMOS = [
    // --- SERVICE / LEAD GEN ---

    // 1. Skin Clinic
    {
        slug: 'dr-sophia-aesthetic',
        niche: 'Skin Clinic',
        title: 'Dr. Sophia Aesthetic Clinic',
        headline: 'Where Medical Science Meets Artistry.',
        subheadline: 'A boutique medical aesthetic centre in Bangsar South. FDA-approved technologies for subtle, sophisticated enhancement.',
        color: 'rose',
        image: 'https://images.unsplash.com/photo-1555820585-c5ae44394b79?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
        stats: [
            { label: 'procedures performed', value: '12k+' },
            { label: 'doctors on board', value: '4' },
            { label: 'google rating', value: '4.9' }
        ],
        problem: {
            title: 'Stop gambling with your face.',
            text: 'Discount treatments often use diluted products or uncertified lasers. We prioritize safety and long-term skin health over quick fixes.'
        },
        process: [
            { step: '01', title: '3D Mapping', text: 'We scan your facial structure to plan precise enhancements.' },
            { step: '02', title: 'The Blueprint', text: 'A holistic plan combining injectables, lasers, and topicals.' },
            { step: '03', title: 'Refinement', text: 'A follow-up scan 2 weeks later to ensure perfection.' }
        ],
        reviews: [
            { name: 'Datin Sofia', text: 'Dr. Sophia has an artist\'s eye. I look 5 years younger but nobody can tell I had work done.', stars: 5 },
            { name: 'Elena R.', text: 'The PicoSure laser treatment completely cleared my melasma.', stars: 5 },
            { name: 'Chloe T.', text: 'Impeccable service. The private waiting rooms are a nice touch.', stars: 5 }
        ],
        faq: [
            { q: 'Are your doctors LCP certified?', a: 'Absolutely. Every doctor holds a valid LCP (Letter of Credentialing and Privileging) from the Ministry of Health Malaysia.' },
            { q: 'Do you offer installment plans?', a: 'Yes, we offer 0% interest installments for up to 12 months for Maybank, CIMB, and Public Bank cardholders.' },
            { q: ' Is there any downtime for laser treatments?', a: 'Most of our laser treatments have zero to minimal downtime (mild redness for 2-3 hours). You can return to work immediately.' },
            { q: 'Do you provide Halal-certified options?', a: 'Yes, all our injectables and topical products are verified Halal-friendly and wudhu-compliant.' },
            { q: 'What is the consultation fee?', a: 'Our consultation fee is RM150, which is fully waived if you proceed with any treatment on the same day.' }
        ]
    },

    // 2. Psychiatric Clinic
    {
        slug: 'greenleaf-specialist',
        niche: 'Psychiatric Clinic',
        title: 'Greenleaf Specialist Centre',
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
            { name: 'Anonymous', text: 'Dr. Tan saved my career. I was burning out and she helped me find balance.', stars: 5 },
            { name: 'Jason L.', text: 'A very non-judgmental space. I felt heard for the first time in years.', stars: 5 },
            { name: 'Priya K.', text: 'Professional and discreet. The medication management is very precise.', stars: 5 }
        ],
        faq: [
            { q: 'Do I need a referral letter?', a: 'No, as a private specialist centre, you can book a consultation directly with us without a referral.' },
            { q: 'Is my visit confidential?', a: 'Strictly. We do not share records with employers, insurance companies, or family members without your explicit written consent.' },
            { q: 'Can I claim insurance?', a: 'It depends on your policy. We can provide a detailed medical report for you to submit for reimbursement.' },
            { q: 'Do you offer online sessions?', a: 'Yes, for follow-up appointments, we offer secure tele-consultations for your convenience.' },
            { q: 'How long is a standard session?', a: 'First assessments are 60 minutes. Follow-up psychotherapy sessions are typically 45 minutes.' }
        ]
    },

    // 3. Dental Clinic
    {
        slug: 'imperial-dental',
        niche: 'Dental Clinic',
        title: 'Imperial Dental Bangsar',
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
            { q: 'Do you do Invisalign?', a: 'Yes, we are a Diamond Provider for Invisalign and have treated over 500 cases.' },
            { q: 'Is there a warranty?', a: 'We offer a 5-year warranty on all ceramic crowns and veneers against breakage.' },
            { q: 'I am afraid of dentists. Can you help?', a: 'We specialize in anxious patients. We offer sedation dentistry and a completely pain-free guarantee.' },
            { q: 'Do you treat children?', a: 'Yes, we have a dedicated paediatric specialist who makes visits fun for kids.' },
            { q: 'What brands of implants do you use?', a: 'We only use premium Swiss and German implants (Straumann and Nobel Biocare) for longevity.' }
        ]
    },

    // 4. Gym / Fitness
    {
        slug: 'ironforge-barbell',
        niche: 'Gym',
        title: 'IronForge Barbell Club',
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
            { q: 'Is this Crossfit?', a: 'No. We focus on structured strength training and powerlifting, avoiding the high-risk movements of random WODs.' },
            { q: 'Can beginners join?', a: 'Yes! Our "Foundations" class is mandatory for all new lifters to ensure your technique is safe.' },
            { q: 'Do you have shower facilities?', a: 'Yes, we have premium showers with towel service and hair dryers.' },
            { q: 'What are your operating hours?', a: 'We are open 24/7 for members via keycard access. Staffed hours are 7am - 10pm.' },
            { q: 'Is personal training included?', a: 'Our membership includes "Small Group Coaching" where a coach is always on the floor to guide you.' }
        ]
    },

    // 5. Physio Centre
    {
        slug: 'physioactive-rehab',
        niche: 'Physio Centre',
        title: 'PhysioActive Rehab',
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
            { q: 'Is this claimable?', a: 'Yes, we are panel providers for AIA, Prudential, and Great Eastern. We handle the paperwork.' },
            { q: 'Do I need a referral letter?', a: 'Not strictly necessary, but helpful for insurance claims. We can refer you to our partner GP if needed.' },
            { q: 'What should I wear?', a: 'Please wear comfortable sports attire that allows us to access the injured area (e.g. shorts for knee injuries).' },
            { q: 'How long is a session?', a: 'Initial assessment is 60 minutes. Subsequent treatment sessions are 45 minutes.' },
            { q: 'Do you do home visits?', a: 'Yes, we have a mobile team for post-op patients who cannot travel.' }
        ]
    },

    // 6. Chiropractic Centre
    {
        slug: 'spineworks-chiro',
        niche: 'Chiropractic Centre',
        title: 'SpineWorks Chiropractic',
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
            { q: 'Does it hurt?', a: 'Most patients feel immediate relief. There may be mild soreness like a gym workout, which fades in 24 hours.' },
            { q: 'How many sessions will I need?', a: 'It depends on your X-ray. We focus on corrective care (fixing the root) rather than lifetime dependency.' },
            { q: 'Is it safe for elderly patients?', a: 'Yes, we use gentler, low-force techniques for seniors and children.' },
            { q: 'Why is there a popping sound?', a: 'That is simply gas being released from the joint fluid. It is not bone rubbing on bone.' },
            { q: 'Do I need to undress?', a: 'No, fully clothed adjustments. Just avoid wearing thick denim or tight belts.' }
        ]
    },

    // 7. Construction Company
    {
        slug: 'grand-build-sdn-bhd',
        niche: 'Construction Company',
        title: 'Grand Build Sdn Bhd',
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
            { name: 'Mr. Tan', text: 'Grand Build took over my abandoned project and finished it in 4 months. Lifesavers.', stars: 5 },
            { name: 'Jason & Amy', text: 'The finishing on the exposed concrete is museum quality.', stars: 5 },
            { name: 'Ar. Farhan', text: 'As an architect, I rarely enjoy working with builders. Grand Build is the exception.', stars: 5 }
        ],
        faq: [
            { q: 'Do you handle council submissions?', a: 'Yes, our in-house runner handles all DBKL/MBSA submissions and approvals.' },
            { q: 'What is the retention sum?', a: 'We hold a standard 5% retention sum released 12 months after the defect liability period.' },
            { q: 'Do you offer a warranty?', a: 'Yes, we provide a 24-month structural warranty on all new builds.' },
            { q: 'What is your average cost per sqft?', a: 'For luxury finishes, our rates typically start from RM350 psf, inclusive of M&E.' },
            { q: 'Can you help with renovation loans?', a: 'We can connect you with bankers from Maybank and Public Bank who specialize in construction loans.' }
        ]
    },

    // 8. Insurance Agent
    {
        slug: 'legacy-private-wealth',
        niche: 'Insurance Agent',
        title: 'Legacy Private Wealth',
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
            { step: '02', title: 'Gap Analysis', text: 'Identifying exposure in medical, critical illness, and income replacement.' },
            { step: '03', title: 'The Trust', text: 'Structuring insurance payouts into a trust to protect beneficiaries.' }
        ],
        reviews: [
            { name: 'David T.', text: 'My agent handled my hospital admission at 2am. That is real service.', stars: 5 },
            { name: 'Puan Zaiton', text: 'They helped me structure a buy-sell agreement for my company partners.', stars: 5 },
            { name: 'Alex H.', text: 'No hard selling. They actually advised me to cancel a bad policy I had.', stars: 5 }
        ],
        faq: [
            { q: 'Do you charge a consultation fee?', a: 'No, our initial financial health check is complimentary.' },
            { q: 'Which insurers do you represent?', a: 'We are a financial advisory group with access to multiple top-tier insurers including Allianz, AIA, and Great Eastern.' },
            { q: 'Can you review my old policies?', a: 'Yes, we specialize in "Policy Audits" to find gaps or redundant coverages in your portfolio.' },
            { q: 'Do you handle Hibah/Wasiat?', a: 'Yes, we have certified Islamic Estate Planners to assist with Wasiat and Hibah structuring.' },
            { q: 'What happens if I need to claim?', a: 'You call us first. We handle the admission, the guarantee letter, and the paperwork.' }
        ]
    },

    // 9. Auto Detailing
    {
        slug: 'autobahn-detailing',
        niche: 'Auto Detailing',
        title: 'Autobahn Detailing',
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
            { q: 'How long does the coating last?', a: 'Our Platinum Package is warrantied for 7 years with proper maintenance.' },
            { q: 'Do you offer pickup service?', a: 'Yes, enclosed trailer pickup is available for unregistered or classic cars.' },
            { q: 'Is PPF better than Ceramic Coating?', a: 'PPF prevents rock chips and scratches. Ceramic Coating provides gloss and ease of cleaning. We often combine both.' },
            { q: 'Do you remove seats for interior detailing?', a: 'Yes, we remove seats to deep clean the carpets and leather fully.' },
            { q: 'Can you fix curb rash on rims?', a: 'Yes, we offer rim refurbishment and repainting services.' }
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
        problem: { title: '', text: '' }, process: [], reviews: [], faq: [
            { q: 'How is the sizing?', a: 'True to size. We have a detailed measurement chart for every item.' },
            { q: 'Do you ship internationally?', a: 'Yes, we ship to Singapore, Australia, and the UK.' },
            { q: 'Where are your clothes made?', a: 'Designed in KL, and ethically manufactured in small batches in Vietnam.' },
            { q: 'What is your return policy?', a: 'Free returns within 14 days of purchase, no questions asked.' },
            { q: 'Are the fabrics pre-shrunk?', a: 'Yes, all our linens and cottons are pre-washed to minimize shrinkage.' }
        ]
    },

    // 11. Dessert Shop (Lead Gen / Local)
    {
        slug: 'sunday-bakes',
        niche: 'Dessert Shop',
        title: 'Sunday Bakes',
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
            { q: 'Are you Halal?', a: 'We use all Halal-certified ingredients and no alcohol/lard in our kitchen.' },
            { q: 'Do you make custom cakes?', a: 'Yes, we accept custom orders for weddings and birthdays with 3 days notice.' },
            { q: 'Are your donuts vegan?', a: 'We have a specific vegan sourdough range available on weekends.' },
            { q: 'Can I pre-order?', a: 'Highly recommended! You can WhatsApp us to secure your box before we sell out.' }
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
        problem: { title: '', text: '' }, process: [], reviews: [], faq: [
             { q: 'Is this suitable for sensitive skin?', a: 'Yes, our entire line is fragrance-free and clinically tested for sensitive skin.' },
             { q: 'Are your products vegan?', a: '100% Vegan and Cruelty-Free. We never test on animals.' },
             { q: 'How long does shipping take?', a: 'Orders are processed within 24 hours. Delivery takes 2-4 working days.' },
             { q: 'Can I use this with Retinol?', a: 'Our barrier cream is specifically designed to be used alongside Retinol to prevent dryness.' },
             { q: 'Where is it made?', a: 'Formulated in Korea, bottled in Malaysia.' }
        ]
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
        problem: { title: '', text: '' }, process: [], reviews: [], faq: [
            { q: 'Does it have multipoint connection?', a: 'Yes, you can connect to your laptop and phone simultaneously.' },
            { q: 'How is the microphone quality?', a: 'We use 4 beamforming mics to isolate your voice from background noise.' },
            { q: 'Is there a warranty?', a: '2-Year International Warranty covers all manufacturing defects.' },
            { q: 'Does it support LDAP?', a: 'Yes, high-res LDAP and AptX codecs are supported on Android devices.' },
            { q: ' Is it water resistant?', a: 'IPX4 rated, so it can handle sweat and light rain.' }
        ]
    }
];