/**
 * Terms of Use Page Configuration
 * ================================
 * All content for the terms of use page.
 * 
 * CLIENT EDITABLE: Review with legal counsel before publishing.
 */

export const termsConfig = {
    // ========================================
    // PAGE META
    // ========================================
    meta: {
        title: "Terms of Use",
        description: "Terms and conditions for using our website. Please read before using our services.",
        keywords: "terms of use, website terms, conditions, legal terms",
        noindex: true,
    },

    // ========================================
    // PAGE HEADER
    // ========================================
    header: {
        title: "Terms of Use",
        subtitle: "Website Usage Terms and Conditions",
        lastUpdated: "January 2026",
    },

    // ========================================
    // INTRODUCTION
    // ========================================
    introduction: `Welcome to our website. By accessing and using this website, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this website.`,

    // ========================================
    // TERMS SECTIONS
    // ========================================
    sections: [
        {
            title: "Use License",
            content: `Permission is granted to temporarily access this website for personal, non-commercial informational purposes only. This is a grant of a license, not a transfer of title, and under this license you may not:

- Modify or copy the materials
- Use the materials for any commercial purpose
- Attempt to decompile or reverse engineer any software on this website
- Remove any copyright or proprietary notations
- Transfer the materials to another person or "mirror" on any other server

This license shall automatically terminate if you violate any of these restrictions.`,
        },
        {
            title: "Website Content",
            content: `The materials on this website are provided for general information purposes only. They do not constitute legal advice and should not be relied upon as such.

While we make reasonable efforts to keep the information accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or availability of the information on this website.

The content may be changed without notice.`,
        },
        {
            title: "No Attorney-Client Relationship",
            content: `Using this website or contacting us through it does not create an attorney-client relationship. An attorney-client relationship is only established when we have expressly agreed to represent you and have entered into a formal engagement agreement.

You should not act or refrain from acting based on any content on this website without seeking appropriate legal or professional advice.`,
        },
        {
            title: "User Conduct",
            content: `When using this website or contacting us, you agree not to:

- Provide false or misleading information
- Use the website for any unlawful purpose
- Attempt to gain unauthorized access to any part of the website
- Interfere with the proper functioning of the website
- Use automated systems to access the website without permission
- Engage in any conduct that could damage, disable, or impair the website`,
        },
        {
            title: "Contact Form Submissions",
            content: `Information submitted through our contact forms is not protected by attorney-client privilege until an attorney-client relationship is established.

By submitting information through our forms, you:
- Consent to us contacting you regarding your inquiry
- Understand that we are not obligated to respond or take your case
- Agree to provide accurate information
- Accept that the submission does not guarantee our services`,
        },
        {
            title: "Intellectual Property",
            content: `All content on this website, including text, graphics, logos, images, and software, is the property of the law firm or its content suppliers and is protected by intellectual property laws.

You may not reproduce, distribute, modify, or create derivative works from any content without prior written permission.`,
        },
        {
            title: "Third-Party Links",
            content: `This website may contain links to external websites that are not under our control. We are not responsible for the content, privacy policies, or practices of any third-party websites.

The inclusion of any links does not imply endorsement or recommendation. You access third-party websites at your own risk.`,
        },
        {
            title: "Limitation of Liability",
            content: `In no event shall we be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.

We shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the website.`,
        },
        {
            title: "Indemnification",
            content: `You agree to indemnify and hold harmless the law firm, its attorneys, and employees from and against any claims, liabilities, damages, judgments, awards, losses, costs, or expenses (including reasonable attorneys' fees) arising out of:

- Your violation of these Terms of Use
- Your violation of any third-party rights
- Your use of this website`,
        },
        {
            title: "Accuracy of Materials",
            content: `The materials appearing on this website may include technical, typographical, or photographic errors. We do not warrant that any of the materials on this website are accurate, complete, or current.

We may make changes to the materials at any time without notice.`,
        },
        {
            title: "Governing Law",
            content: `These Terms of Use and any disputes arising from them shall be governed by and construed in accordance with the laws of India.

Any legal action or proceeding relating to access to or use of this website shall be subject to the exclusive jurisdiction of the courts in [Your City, State], India.`,
        },
        {
            title: "Modifications",
            content: `We reserve the right to revise these Terms of Use at any time without prior notice. By continuing to use this website after any changes, you agree to be bound by the revised terms.

We recommend reviewing these terms periodically.`,
        },
        {
            title: "Severability",
            content: `If any provision of these Terms of Use is found to be invalid or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect.`,
        },
        {
            title: "Contact Information",
            content: `If you have any questions about these Terms of Use, please contact us through the details provided on our Contact page.`,
        },
    ],

    // ========================================
    // FOOTER NOTE
    // ========================================
    footerNote: "By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.",
};

export type TermsConfig = typeof termsConfig;
