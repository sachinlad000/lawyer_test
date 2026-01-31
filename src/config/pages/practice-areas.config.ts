/**
 * Practice Areas Page Configuration
 * ==================================
 * All content for the practice areas page.
 * 
 * CLIENT EDITABLE: Update all values below.
 */

export const practiceAreasConfig = {
    // ========================================
    // PAGE META
    // ========================================
    meta: {
        title: "Practice Areas",
        description: "Comprehensive legal services in Civil, Criminal, Family, Corporate, and Consumer Law. Expert representation in all courts.",
        keywords: "civil law, criminal law, family law, corporate law, consumer law, legal services, advocate",
    },

    // ========================================
    // PAGE HEADER
    // ========================================
    header: {
        title: "Practice Areas",
        subtitle: "Comprehensive Legal Services Across Multiple Disciplines",
        description: "We provide expert legal representation in a wide range of practice areas. Each matter receives personalized attention and strategic advocacy.",
    },

    // ========================================
    // PRACTICE AREAS
    // ========================================
    areas: [
        {
            id: "civil",
            title: "Civil Litigation",
            icon: "scale",
            color: "blue",
            shortDescription: "Expert representation in all civil matters including property disputes, contract issues, and recovery suits.",
            fullDescription: "Our civil litigation practice covers the full spectrum of civil disputes. We represent clients in property matters, breach of contract cases, recovery suits, and all types of civil proceedings. Our approach combines thorough legal research with strategic advocacy to achieve favorable outcomes.",

            services: [
                "Property Disputes & Title Litigation",
                "Contract Disputes & Enforcement",
                "Recovery Suits & Money Claims",
                "Injunction & Specific Performance",
                "Partition Suits",
                "Landlord-Tenant Disputes",
                "Declaration & Mandatory Injunctions",
                "Civil Appeals",
            ],

            caseTypes: ["Property", "Contract", "Recovery", "Injunction"],
        },
        {
            id: "criminal",
            title: "Criminal Defense",
            icon: "shield",
            color: "red",
            shortDescription: "Vigorous defense in criminal cases including bail, trial representation, and appeals.",
            fullDescription: "We provide robust criminal defense representation at all stages of criminal proceedings. From the initial FIR stage through trial and appeals, we ensure that your rights are protected. Our experience includes handling cases involving serious offenses, white-collar crimes, and anticipatory bail matters.",

            services: [
                "Anticipatory Bail Applications",
                "Regular Bail Applications",
                "Trial Defense & Representation",
                "Criminal Appeals (Sessions, High Court, Supreme Court)",
                "White-Collar Crime Defense",
                "Quashing of FIR (Section 482)",
                "Revision Petitions",
                "Criminal Writs",
            ],

            caseTypes: ["Bail", "Trial", "Appeal", "Defense"],
        },
        {
            id: "family",
            title: "Family & Matrimonial",
            icon: "heart",
            color: "purple",
            shortDescription: "Compassionate handling of family matters including divorce, custody, and maintenance.",
            fullDescription: "Family disputes require a delicate balance of legal expertise and emotional sensitivity. We handle divorce, child custody, maintenance, and domestic violence cases with the compassion and professionalism they deserve. Our goal is to achieve fair outcomes while minimizing conflict.",

            services: [
                "Divorce & Separation",
                "Child Custody & Visitation",
                "Maintenance & Alimony",
                "Domestic Violence (DV Act) Cases",
                "Hindu Marriage Act Matters",
                "Special Marriage Act Matters",
                "Guardianship Petitions",
                "Restitution of Conjugal Rights",
            ],

            caseTypes: ["Divorce", "Custody", "Maintenance", "DV Act"],
        },
        {
            id: "corporate",
            title: "Corporate & Commercial",
            icon: "briefcase",
            color: "green",
            shortDescription: "Business-focused legal services including company formation, contracts, and compliance.",
            fullDescription: "We provide comprehensive corporate legal services to businesses of all sizes. From company incorporation to ongoing compliance, contract drafting, and dispute resolution, we help businesses navigate the complex legal landscape with confidence.",

            services: [
                "Company Incorporation & Registration",
                "Contract Drafting & Review",
                "Shareholder Agreements",
                "Due Diligence",
                "NCLT Matters",
                "Startup Legal Services",
                "Employment Agreements",
                "Business Dispute Resolution",
            ],

            caseTypes: ["Formation", "Contracts", "Disputes", "NCLT"],
        },
        {
            id: "consumer",
            title: "Consumer Protection",
            icon: "users",
            color: "orange",
            shortDescription: "Advocacy for consumer rights in product/service complaints before consumer forums.",
            fullDescription: "Consumer rights must be protected vigorously. We represent consumers before District Forums, State Commissions, and the National Consumer Disputes Redressal Commission (NCDRC). Our expertise helps clients obtain compensation for defective products and deficient services.",

            services: [
                "Consumer Complaints Filing",
                "District Forum Representation",
                "State Commission Appeals",
                "NCDRC Matters",
                "Product Liability Claims",
                "Service Deficiency Cases",
                "Insurance Claim Disputes",
                "Banking & Financial Services Complaints",
            ],

            caseTypes: ["Complaints", "Appeals", "Insurance", "Banking"],
        },
        {
            id: "constitutional",
            title: "Constitutional & Writ",
            icon: "book-open",
            color: "indigo",
            shortDescription: "Protection of fundamental rights through writ petitions and constitutional remedies.",
            fullDescription: "Constitutional rights form the bedrock of our democracy. We file writ petitions before High Courts and the Supreme Court to protect fundamental rights and challenge unlawful government action. Our constitutional practice includes public interest litigation and fundamental rights enforcement.",

            services: [
                "Writ Petitions (Article 226/32)",
                "Fundamental Rights Cases",
                "Public Interest Litigation",
                "Habeas Corpus",
                "Mandamus",
                "Certiorari & Prohibition",
                "Service Matters",
                "Administrative Law",
            ],

            caseTypes: ["Writs", "PIL", "Rights", "Admin"],
        },
    ],

    // ========================================
    // CTA BANNER
    // ========================================
    cta: {
        title: "Need Legal Assistance?",
        description: "Contact us to discuss your legal matter and explore your options.",

        button: {
            text: "Schedule Free Consultation",
            href: "/contact",
        },
    },
};

export type PracticeAreasConfig = typeof practiceAreasConfig;
