/**
 * Home Page Configuration
 * =======================
 * All content for the home page.
 * 
 * CLIENT EDITABLE: Update all values below.
 */

export const homeConfig = {
    // ========================================
    // PAGE META
    // ========================================
    meta: {
        title: "Expert Legal Services",
        description: "Expert legal services in Civil, Criminal & Corporate Law. 15+ years of experience. Free consultation available.",
        keywords: "advocate, lawyer, legal services, civil law, criminal law, corporate law, India",
    },

    // ========================================
    // HERO SECTION
    // ========================================
    hero: {
        badge: "Advocate in India | High Court & Supreme Court",
        headline: "Trusted Legal Excellence, Dedicated Advocacy",
        subheadline: "Providing expert legal representation in Civil, Criminal, and Corporate Law. Your rights. Our priority.",

        highlights: [
            "15+ Years of Experience",
            "1000+ Cases Handled",
            "Bar Council Registered",
            "Free Initial Consultation",
        ],

        cta: {
            primary: {
                text: "Free Consultation",
                href: "/contact",
            },
            secondary: {
                text: "Call Now",
                // href is auto-generated from site config phone
            },
            whatsapp: {
                text: "WhatsApp",
                // href is auto-generated from site config whatsapp
            },
        },
    },

    // ========================================
    // TRUST BAR (Statistics)
    // ========================================
    trustBar: {
        items: [
            { value: "15+", label: "Years Experience" },
            { value: "1000+", label: "Cases Handled" },
            { value: "95%", label: "Success Rate" },
            { value: "500+", label: "Happy Clients" },
        ],
    },

    // ========================================
    // PRACTICE AREAS PREVIEW
    // ========================================
    practiceAreasPreview: {
        subtitle: "Our Expertise",
        title: "Practice Areas",
        description: "We provide comprehensive legal services across multiple areas of law.",

        // Show only first 4 on home page
        showCount: 4,

        viewAllLink: {
            text: "View All Practice Areas",
            href: "/practice-areas",
        },
    },

    // ========================================
    // ABOUT PREVIEW
    // ========================================
    aboutPreview: {
        subtitle: "About Us",
        title: "Experienced Legal Advocacy You Can Trust",
        description: "With over 15 years of experience in the legal profession, we have successfully represented clients across a wide spectrum of legal matters. Our commitment to justice and client satisfaction sets us apart.",

        highlights: [
            "Bar Council Registered Advocate",
            "High Court & Supreme Court Practice",
            "Personalized Legal Strategy",
            "Transparent Fee Structure",
        ],

        cta: {
            text: "Learn More About Us",
            href: "/about",
        },
    },

    // ========================================
    // TESTIMONIALS PREVIEW
    // ========================================
    testimonialsPreview: {
        subtitle: "Client Reviews",
        title: "What Our Clients Say",
        description: "We take pride in delivering results and building lasting relationships with our clients.",

        // Show only first 3 on home page
        showCount: 3,

        viewAllLink: {
            text: "Read More Reviews",
            href: "/testimonials",
        },
    },

    // ========================================
    // FAQ SECTION
    // ========================================
    faq: {
        subtitle: "FAQs",
        title: "Frequently Asked Questions",
        description: "Find answers to common questions about our legal services.",

        items: [
            {
                question: "What types of cases do you handle?",
                answer: "We handle a wide range of cases including civil litigation, criminal defense, family law matters, corporate legal issues, and more. Contact us for a consultation to discuss your specific situation.",
            },
            {
                question: "How much does a consultation cost?",
                answer: "We offer a free initial consultation to understand your case and provide preliminary guidance. Subsequent consultations and legal services are charged based on the complexity of the matter.",
            },
            {
                question: "How long will my case take?",
                answer: "The duration varies depending on the type and complexity of your case. During our consultation, we will provide an estimated timeline based on your specific circumstances.",
            },
            {
                question: "Do you appear in High Court and Supreme Court?",
                answer: "Yes, we are enrolled to practice in all courts including District Courts, High Court, and the Supreme Court of India.",
            },
            {
                question: "Can I contact you for urgent matters?",
                answer: "Yes, we understand that legal emergencies can arise at any time. You can reach us via phone or WhatsApp for urgent matters.",
            },
        ],
    },

    // ========================================
    // CTA SECTION
    // ========================================
    ctaSection: {
        title: "Need Legal Assistance?",
        description: "Schedule a free consultation with our experienced team today.",

        cta: {
            primary: {
                text: "Schedule Consultation",
                href: "/contact",
            },
            secondary: {
                text: "Call Now",
                // href auto-generated
            },
        },
    },
};

export type HomeConfig = typeof homeConfig;
