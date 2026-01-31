/**
 * Portfolio/Case Studies Page Configuration
 * ==========================================
 * All content for the portfolio page.
 * 
 * CLIENT EDITABLE: Update all values below.
 * NOTE: Case studies should be anonymized for client confidentiality.
 */

export const portfolioConfig = {
    // ========================================
    // PAGE META
    // ========================================
    meta: {
        title: "Portfolio",
        description: "Explore our successful case studies across civil, criminal, family, and corporate law matters.",
        keywords: "case studies, legal portfolio, successful cases, court verdicts, advocate experience",
    },

    // ========================================
    // PAGE HEADER
    // ========================================
    header: {
        title: "Our Portfolio",
        subtitle: "Success Stories Across Legal Domains",
        description: "A selection of our successfully handled cases. Client identities have been anonymized for confidentiality.",
    },

    // ========================================
    // STATISTICS
    // ========================================
    stats: [
        { value: "1000+", label: "Cases Handled" },
        { value: "95%", label: "Success Rate" },
        { value: "15+", label: "Years Experience" },
        { value: "500+", label: "Happy Clients" },
    ],

    // ========================================
    // DISCLAIMER
    // ========================================
    disclaimer: "The case studies presented below are for informational purposes only. Client identities have been anonymized to maintain confidentiality. Past results do not guarantee similar outcomes in future cases.",

    // ========================================
    // CASE STUDIES
    // ========================================
    caseStudies: [
        {
            id: 1,
            category: "Civil",
            categoryColor: "blue",
            title: "Property Title Dispute Resolution",
            court: "High Court",
            year: "2023",
            duration: "18 months",

            problem: "A client approached us regarding a disputed property worth ₹2 crores. Multiple parties claimed ownership, and the original title documents were challenged. The client faced the risk of losing their family property.",

            strategy: "We conducted thorough title searches, gathered historical records, and built a strong documentary evidence chain. Our team filed a comprehensive suit for declaration of title with supporting witness testimony.",

            outcome: "The High Court ruled in our client's favor, declaring them as the rightful owner. The opposing parties' claims were dismissed, and our client secured clear title to the property.",

            highlights: ["Clear title obtained", "Property worth ₹2 Cr secured", "Opposition claims dismissed"],
        },
        {
            id: 2,
            category: "Criminal",
            categoryColor: "red",
            title: "Anticipatory Bail in Financial Fraud Case",
            court: "Sessions Court",
            year: "2023",
            duration: "3 weeks",

            problem: "A business professional was falsely implicated in a financial fraud case. An FIR was registered, and there was imminent threat of arrest. The allegations, if proved, could result in severe penalties.",

            strategy: "We immediately filed for anticipatory bail, presenting documentary evidence that disproved the allegations. We demonstrated the client's cooperation with investigating agencies and absence of flight risk.",

            outcome: "Anticipatory bail was granted within two weeks. Subsequently, we filed a quashing petition, and the FIR was quashed by the High Court, completely exonerating our client.",

            highlights: ["Bail granted in 2 weeks", "FIR quashed", "Client fully exonerated"],
        },
        {
            id: 3,
            category: "Family",
            categoryColor: "purple",
            title: "Child Custody Resolution",
            court: "Family Court",
            year: "2024",
            duration: "8 months",

            problem: "A mother sought custody of her two children after an acrimonious divorce. The father contested custody and alleged that the mother was unfit. The children's welfare was the paramount concern.",

            strategy: "We focused on the children's best interests, presenting evidence of the mother's stable home environment, financial capability, and emotional support. We also facilitated regular visitation to maintain the father-child relationship.",

            outcome: "The Family Court awarded primary custody to our client with structured visitation rights for the father. Both children are thriving in a stable environment.",

            highlights: ["Primary custody awarded", "Visitation rights structured", "Children's welfare prioritized"],
        },
        {
            id: 4,
            category: "Corporate",
            categoryColor: "green",
            title: "Contract Dispute - Service Provider",
            court: "Commercial Court",
            year: "2023",
            duration: "12 months",

            problem: "A technology company was owed ₹50 lakhs by a client who refused to pay for delivered services. The defaulting party raised frivolous objections about service quality to avoid payment.",

            strategy: "We filed a commercial suit with comprehensive documentation including signed contracts, delivery proofs, and email correspondence. We also obtained interim orders to secure the disputed amount.",

            outcome: "The Commercial Court ordered full payment plus interest. The judgment was enforced through execution proceedings, and our client recovered the entire amount.",

            highlights: ["₹50 lakhs recovered", "Full payment with interest", "Quick enforcement"],
        },
        {
            id: 5,
            category: "Consumer",
            categoryColor: "orange",
            title: "Insurance Claim Denial Challenged",
            court: "NCDRC",
            year: "2023",
            duration: "6 months",

            problem: "A policyholder's health insurance claim of ₹8 lakhs was wrongfully denied by the insurance company citing pre-existing conditions that were disclosed at the time of policy purchase.",

            strategy: "We filed a complaint before the National Consumer Disputes Redressal Commission, proving that all conditions were disclosed during policy inception and the denial was arbitrary and unfair.",

            outcome: "NCDRC ordered the insurance company to pay the full claim amount along with compensation for mental harassment and litigation costs.",

            highlights: ["Full claim paid", "Compensation awarded", "Insurance company penalized"],
        },
        {
            id: 6,
            category: "Constitutional",
            categoryColor: "indigo",
            title: "Fundamental Rights Protection",
            court: "High Court",
            year: "2022",
            duration: "4 months",

            problem: "A citizen's property was being arbitrarily demolished by municipal authorities without proper notice or adherence to due process. The demolition was scheduled within days.",

            strategy: "We filed an urgent writ petition challenging the demolition order, citing violation of principles of natural justice and fundamental rights under Article 21. We obtained an immediate stay.",

            outcome: "The High Court stayed the demolition and ordered the authorities to follow proper procedure. Eventually, the demolition order was quashed as it was issued without jurisdiction.",

            highlights: ["Demolition stayed", "Property saved", "Fundamental rights upheld"],
        },
    ],

    // ========================================
    // CATEGORIES (for filtering)
    // ========================================
    categories: [
        { id: "all", label: "All Cases" },
        { id: "Civil", label: "Civil" },
        { id: "Criminal", label: "Criminal" },
        { id: "Family", label: "Family" },
        { id: "Corporate", label: "Corporate" },
        { id: "Consumer", label: "Consumer" },
        { id: "Constitutional", label: "Constitutional" },
    ],

    // ========================================
    // CTA SECTION
    // ========================================
    cta: {
        title: "Facing a Similar Situation?",
        description: "Let us put our experience to work for you. Schedule a consultation to discuss your case.",

        button: {
            text: "Get Free Consultation",
            href: "/contact",
        },
    },
};

export type PortfolioConfig = typeof portfolioConfig;
