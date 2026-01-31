/**
 * Contact Page Configuration
 * ==========================
 * All content for the contact page.
 * 
 * CLIENT EDITABLE: Update all values below.
 */

export const contactConfig = {
    // ========================================
    // PAGE META
    // ========================================
    meta: {
        title: "Contact",
        description: "Get in touch with us for legal consultation. Call, WhatsApp, email, or visit our office.",
        keywords: "contact advocate, legal consultation, lawyer contact, book appointment",
    },

    // ========================================
    // PAGE HEADER
    // ========================================
    header: {
        title: "Contact Us",
        subtitle: "Get in Touch for Legal Assistance",
        description: "Have a legal question? Need representation? Reach out through any of our contact channels.",
    },

    // ========================================
    // CONTACT METHODS
    // ========================================
    contactMethods: {
        phone: {
            icon: "phone",
            title: "Call Us",
            description: "Speak directly with our team",
            action: "Call Now",
            // Value comes from site config
        },
        whatsapp: {
            icon: "message-circle",
            title: "WhatsApp",
            description: "Chat with us on WhatsApp",
            action: "Start Chat",
            // Value comes from site config
        },
        email: {
            icon: "mail",
            title: "Email Us",
            description: "Send us a detailed message",
            action: "Send Email",
            // Value comes from site config
        },
        visit: {
            icon: "map-pin",
            title: "Visit Office",
            description: "Meet us in person",
            action: "Get Directions",
            // Value comes from site config
        },
    },

    // ========================================
    // CONTACT FORM
    // ========================================
    form: {
        title: "Send Us a Message",
        description: "Fill out the form below and we'll get back to you within 24 hours.",

        fields: {
            name: {
                label: "Your Name",
                placeholder: "Enter your full name",
                required: true,
            },
            email: {
                label: "Email Address",
                placeholder: "Enter your email",
                required: true,
            },
            phone: {
                label: "Phone Number",
                placeholder: "+91-XXXXXXXXXX",
                required: true,
            },
            caseType: {
                label: "Type of Legal Matter",
                placeholder: "Select case type",
                required: true,
                options: [
                    { value: "", label: "Select case type" },
                    { value: "civil", label: "Civil Matter" },
                    { value: "criminal", label: "Criminal Matter" },
                    { value: "family", label: "Family/Matrimonial" },
                    { value: "corporate", label: "Corporate/Commercial" },
                    { value: "consumer", label: "Consumer Dispute" },
                    { value: "property", label: "Property Dispute" },
                    { value: "other", label: "Other" },
                ],
            },
            message: {
                label: "Brief Description of Your Matter",
                placeholder: "Please provide a brief description of your legal issue...",
                required: true,
                rows: 5,
            },
        },

        submitButton: {
            text: "Send Message",
            loadingText: "Sending...",
        },

        successMessage: "Thank you for contacting us. We will get back to you within 24 hours.",
        errorMessage: "Something went wrong. Please try again or contact us directly.",

        disclaimer: "By submitting this form, you agree to our Privacy Policy. The information provided is confidential.",
    },

    // ========================================
    // OFFICE INFORMATION
    // ========================================
    office: {
        title: "Office Location",

        // Hours come from site config but can override here
        hoursTitle: "Office Hours",

        directions: {
            show: true,
            text: "Get Directions",
            url: "https://maps.google.com/?q=your-office-address", // Replace with actual directions link
        },
    },

    // ========================================
    // EMERGENCY CONTACT
    // ========================================
    emergency: {
        show: true,
        title: "Legal Emergency?",
        description: "For urgent matters like arrests or immediate legal emergencies, call our emergency line.",
        note: "Available for genuine legal emergencies",
    },

    // ========================================
    // FAQ SECTION (Contact-specific)
    // ========================================
    faq: {
        show: true,
        title: "Common Questions",

        items: [
            {
                question: "How quickly will you respond to my inquiry?",
                answer: "We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.",
            },
            {
                question: "Is the initial consultation free?",
                answer: "Yes, we offer a free initial consultation to understand your case and provide preliminary guidance.",
            },
            {
                question: "Do I need to bring any documents?",
                answer: "If possible, bring any relevant documents related to your case. However, we can also advise you on what documents will be needed after our initial discussion.",
            },
        ],
    },
};

export type ContactConfig = typeof contactConfig;
