/**
 * About Page Configuration
 * ========================
 * All content for the about page.
 * 
 * CLIENT EDITABLE: Update all values below.
 */

export const aboutConfig = {
    // ========================================
    // PAGE META
    // ========================================
    meta: {
        title: "About",
        description: "Learn about our experienced legal team with over 15 years of practice in Civil, Criminal, and Corporate Law.",
        keywords: "about advocate, lawyer profile, legal experience, bar council advocate",
    },

    // ========================================
    // PAGE HEADER
    // ========================================
    header: {
        title: "About Us",
        subtitle: "Committed to Justice, Dedicated to You",
    },

    // ========================================
    // BIOGRAPHY SECTION
    // ========================================
    biography: {
        title: "Professional Profile",

        content: [
            "With over 15 years of dedicated practice in the legal profession, Advocate Sharma has established a reputation for excellence, integrity, and unwavering commitment to client success.",
            "After completing his law degree from a prestigious institution, he began his career under the guidance of senior advocates at the High Court. This foundational experience shaped his approach to legal practice – thorough preparation, strategic thinking, and compassionate client representation.",
            "Today, he leads a team of legal professionals who share his vision of accessible, effective legal services. His practice spans civil litigation, criminal defense, corporate law, and specialized areas, serving clients from all walks of life.",
            "His philosophy is simple: every client deserves personalized attention, clear communication, and vigorous advocacy. He believes in demystifying the legal process and empowering clients to make informed decisions about their cases.",
        ],
    },

    // ========================================
    // EDUCATION & QUALIFICATIONS
    // ========================================
    education: {
        title: "Education & Qualifications",

        degrees: [
            {
                degree: "Bachelor of Laws (LLB)",
                institution: "National Law University",
                year: "2009",
            },
            {
                degree: "Bachelor of Arts (BA)",
                institution: "University Name",
                year: "2006",
            },
        ],

        certifications: [
            "Advanced Litigation Training Program",
            "Corporate Law Specialization",
            "Mediation and Arbitration Certification",
        ],
    },

    // ========================================
    // COURTS & TRIBUNALS
    // ========================================
    courts: {
        title: "Courts & Tribunals",
        description: "We are enrolled to practice before the following courts and tribunals:",

        list: [
            {
                name: "Supreme Court of India",
                icon: "building",
                description: "Enrolled to appear in the highest court of the land",
            },
            {
                name: "High Court",
                icon: "landmark",
                description: "Regular practice before the State High Court",
            },
            {
                name: "District & Sessions Courts",
                icon: "scale",
                description: "Extensive trial court experience",
            },
            {
                name: "Tribunals & Forums",
                icon: "gavel",
                description: "Consumer forums, NCLT, and other tribunals",
            },
        ],
    },

    // ========================================
    // PROFESSIONAL AFFILIATIONS
    // ========================================
    affiliations: {
        title: "Professional Affiliations",

        list: [
            "State Bar Council of [State]",
            "Bar Association of India",
            "High Court Bar Association",
            "District Bar Association",
        ],
    },

    // ========================================
    // LANGUAGES
    // ========================================
    languages: {
        title: "Languages",
        description: "We can conduct legal proceedings in:",

        list: [
            { language: "English", proficiency: "Fluent" },
            { language: "Hindi", proficiency: "Fluent" },
            { language: "Regional Language", proficiency: "Native" },
        ],
    },

    // ========================================
    // WHY CHOOSE US
    // ========================================
    whyChooseUs: {
        title: "Why Choose Us",

        reasons: [
            {
                title: "Experienced Representation",
                description: "Over 15 years of courtroom experience across various practice areas.",
                icon: "award",
            },
            {
                title: "Personalized Approach",
                description: "Every case receives individual attention and a tailored legal strategy.",
                icon: "user",
            },
            {
                title: "Transparent Communication",
                description: "Regular updates and clear explanations about your case progress.",
                icon: "message-circle",
            },
            {
                title: "Affordable Services",
                description: "Quality legal representation with fair and transparent fee structure.",
                icon: "wallet",
            },
            {
                title: "Proven Track Record",
                description: "95% success rate with over 1000 cases handled successfully.",
                icon: "trophy",
            },
            {
                title: "Client-First Philosophy",
                description: "Your interests come first in everything we do.",
                icon: "heart",
            },
        ],
    },

    // ========================================
    // CTA SECTION
    // ========================================
    cta: {
        title: "Ready to Discuss Your Case?",
        description: "Schedule a free consultation to learn how we can help you.",

        button: {
            text: "Contact Us Today",
            href: "/contact",
        },
    },
};

export type AboutConfig = typeof aboutConfig;
