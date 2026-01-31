/**
 * Privacy Policy Page Configuration
 * ===================================
 * All content for the privacy policy page.
 * 
 * CLIENT EDITABLE: Review with legal counsel before publishing.
 */

export const privacyConfig = {
    // ========================================
    // PAGE META
    // ========================================
    meta: {
        title: "Privacy Policy",
        description: "Our privacy policy explains how we collect, use, and protect your personal information.",
        keywords: "privacy policy, data protection, personal information, GDPR",
        noindex: true,
    },

    // ========================================
    // PAGE HEADER
    // ========================================
    header: {
        title: "Privacy Policy",
        subtitle: "How We Protect Your Information",
        lastUpdated: "January 2026",
    },

    // ========================================
    // INTRODUCTION
    // ========================================
    introduction: `This Privacy Policy describes how we collect, use, and protect your personal information when you visit our website and use our services. We are committed to protecting your privacy and handling your data with transparency and in accordance with applicable laws.`,

    // ========================================
    // POLICY SECTIONS
    // ========================================
    sections: [
        {
            title: "Information We Collect",
            content: `We may collect the following types of information:

**Personal Information You Provide:**
- Name and contact information (email, phone number)
- Message content when you contact us through forms
- Any other information you voluntarily provide

**Automatically Collected Information:**
- Browser type and version
- Operating system
- IP address
- Pages visited and time spent
- Referring website
- Device information`,
        },
        {
            title: "How We Use Your Information",
            content: `We use the information we collect for the following purposes:

- To respond to your inquiries and requests
- To provide legal services when engaged
- To improve our website and services
- To send important updates about your matter
- To comply with legal obligations
- To analyze website usage for improvements

We do not use your information for marketing purposes without explicit consent.`,
        },
        {
            title: "Information Sharing",
            content: `We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:

- With your explicit consent
- To comply with legal obligations or court orders
- With service providers who assist in website operations (under confidentiality agreements)
- To protect our rights and safety

All parties with whom we share data are bound by confidentiality obligations.`,
        },
        {
            title: "Attorney-Client Confidentiality",
            content: `If you become a client, all communications and information shared with us in connection with legal services are protected by attorney-client privilege and professional confidentiality obligations.

This protection goes beyond standard privacy policies and is a fundamental aspect of the attorney-client relationship governed by the Bar Council of India rules.`,
        },
        {
            title: "Data Security",
            content: `We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:

- Secure form submissions (HTTPS encryption)
- Limited access to personal information
- Regular security assessments
- Secure data storage practices

While we strive to protect your information, no method of transmission over the internet is 100% secure.`,
        },
        {
            title: "Cookies and Tracking",
            content: `Our website may use cookies and similar technologies to:

- Improve user experience
- Analyze website traffic (Google Analytics)
- Remember your preferences

You can control cookie settings through your browser. Disabling cookies may affect some website functionality.

**Google Analytics:** We use Google Analytics to understand how visitors interact with our website. Google Analytics collects information anonymously and reports website trends without identifying individual visitors.`,
        },
        {
            title: "Your Rights",
            content: `You have the following rights regarding your personal information:

- **Access:** Request information about data we hold about you
- **Correction:** Request correction of inaccurate data
- **Deletion:** Request deletion of your data (subject to legal retention requirements)
- **Objection:** Object to processing of your data
- **Portability:** Request transfer of your data

To exercise these rights, please contact us using the details on our Contact page.`,
        },
        {
            title: "Data Retention",
            content: `We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, or as required by law. 

Contact form submissions are retained for a reasonable period to respond to inquiries. Client records are retained in accordance with professional and legal requirements.`,
        },
        {
            title: "Third-Party Links",
            content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites. We recommend reviewing their privacy policies before providing any personal information.`,
        },
        {
            title: "Children's Privacy",
            content: `Our website is not intended for children under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.`,
        },
        {
            title: "Changes to This Policy",
            content: `We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.

Significant changes will be highlighted or communicated directly if you have provided contact information.`,
        },
        {
            title: "Contact Us",
            content: `If you have questions about this Privacy Policy or our data practices, please contact us through the details provided on our Contact page.`,
        },
    ],

    // ========================================
    // FOOTER NOTE
    // ========================================
    footerNote: "By using this website, you consent to our Privacy Policy and agree to its terms.",
};

export type PrivacyConfig = typeof privacyConfig;
