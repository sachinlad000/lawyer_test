/**
 * Disclaimer Page Configuration
 * ==============================
 * All content for the disclaimer page.
 * 
 * CLIENT EDITABLE: Review with legal counsel before publishing.
 */

export const disclaimerConfig = {
    // ========================================
    // PAGE META
    // ========================================
    meta: {
        title: "Disclaimer",
        description: "Legal disclaimer for the website. Please read before using our website.",
        keywords: "legal disclaimer, website terms, bar council disclaimer",
        noindex: true, // Legal pages typically don't need indexing
    },

    // ========================================
    // PAGE HEADER
    // ========================================
    header: {
        title: "Disclaimer",
        subtitle: "Important Legal Notice",
        lastUpdated: "January 2026",
    },

    // ========================================
    // DISCLAIMER SECTIONS
    // ========================================
    sections: [
        {
            title: "Bar Council of India Compliance",
            content: `As per the rules of the Bar Council of India, advocates are not permitted to solicit work or advertise. This website is meant solely for informational purposes and not for the purpose of advertising. The information contained in this website is provided for general informational purposes only.

By accessing this website, you acknowledge and confirm that you are seeking information relating to our legal services of your own accord and that there has been no form of solicitation, advertisement, or inducement by us or any person authorized by us.`,
        },
        {
            title: "No Attorney-Client Relationship",
            content: `The use of this website or any of the links contained within the website does not create an attorney-client relationship between you and the law firm. Any communication with us through this website or any of the contact forms does not result in professional legal advice.

An attorney-client relationship is not created until a formal engagement letter is signed and acknowledged by both parties.`,
        },
        {
            title: "Information Not Legal Advice",
            content: `The content on this website is intended to provide general information about our practice areas and legal services. It should not be considered legal advice or substitute for professional legal consultation.

Legal matters are complex and fact-specific. The information on this website may not apply to your specific situation. We recommend consulting with a qualified legal professional before making any decisions based on the information provided.`,
        },
        {
            title: "No Guarantee of Results",
            content: `Past results do not guarantee similar outcomes in future cases. Each case is different, and the outcome depends on the specific facts and circumstances involved.

Any case studies or success stories presented on this website are representative of matters handled by our firm but do not guarantee similar results in your case.`,
        },
        {
            title: "Third-Party Links",
            content: `This website may contain links to third-party websites for your convenience. We do not endorse, control, or assume responsibility for the content or practices of any third-party websites.

Accessing any third-party website is at your own risk, and you should review the terms and privacy policies of such websites before use.`,
        },
        {
            title: "Jurisdiction",
            content: `The information contained on this website is intended for use in India. It may not be applicable to other jurisdictions.

Any disputes arising out of or in connection with this website shall be subject to the exclusive jurisdiction of courts in [Your City, State], India.`,
        },
        {
            title: "Changes to Disclaimer",
            content: `We reserve the right to modify this disclaimer at any time without prior notice. Changes will be effective immediately upon posting on this website.

Your continued use of this website after any modifications indicates your acceptance of the updated disclaimer.`,
        },
        {
            title: "Contact Information",
            content: `If you have any questions about this disclaimer, please contact us through the details provided on our Contact page.`,
        },
    ],

    // ========================================
    // FOOTER NOTE
    // ========================================
    footerNote: "By using this website, you acknowledge that you have read, understood, and agree to be bound by this disclaimer.",
};

export type DisclaimerConfig = typeof disclaimerConfig;
