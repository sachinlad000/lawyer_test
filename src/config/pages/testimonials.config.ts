/**
 * Testimonials Page Configuration
 * ================================
 * All content for the testimonials page.
 * 
 * CLIENT EDITABLE: Update all values below.
 * NOTE: Ensure you have client permission for each testimonial.
 */

export const testimonialsConfig = {
    // ========================================
    // PAGE META
    // ========================================
    meta: {
        title: "Testimonials",
        description: "Read what our clients say about our legal services. Real reviews from satisfied clients.",
        keywords: "client testimonials, lawyer reviews, advocate reviews, legal services reviews",
    },

    // ========================================
    // PAGE HEADER
    // ========================================
    header: {
        title: "Client Testimonials",
        subtitle: "What Our Clients Say About Us",
        description: "We take pride in delivering results and building lasting relationships with our clients.",
    },

    // ========================================
    // STATISTICS
    // ========================================
    stats: [
        { value: "500+", label: "Happy Clients" },
        { value: "4.9", label: "Average Rating" },
        { value: "95%", label: "Would Recommend" },
    ],

    // ========================================
    // DISCLAIMER
    // ========================================
    disclaimer: "These testimonials are from genuine clients who have used our services. Individual results may vary based on the specific facts and circumstances of each case. Published with client consent.",

    // ========================================
    // TESTIMONIALS
    // ========================================
    testimonials: [
        {
            id: 1,
            name: "R. Kumar",
            initials: "RK",
            location: "Mumbai",
            category: "Property Dispute",
            categoryColor: "blue",
            rating: 5,

            review: "Advocate Pradnya Pednekar handled my property dispute with exceptional professionalism. The case had been pending for years, but her strategic approach led to a favorable judgment. Her team kept me informed at every step. Highly recommended for any property-related matters.",

            caseType: "Civil",
            year: "2023",
        },
        {
            id: 2,
            name: "S. Patel",
            initials: "SP",
            location: "Delhi",
            category: "Criminal Defense",
            categoryColor: "red",
            rating: 5,

            review: "When I was falsely accused in a criminal case, Advocate Pradnya Pednekar came to my rescue. She secured anticipatory bail within days and eventually got the case quashed. Her knowledge of criminal law is impressive, and her courtroom presence is commanding.",

            caseType: "Criminal",
            year: "2023",
        },
        {
            id: 3,
            name: "M. Singh",
            initials: "MS",
            location: "Pune",
            category: "Family Law",
            categoryColor: "purple",
            rating: 5,

            review: "Going through a divorce is emotionally draining, but Advocate Pradnya Pednekar made the legal process much smoother. She handled my custody case with sensitivity and fought for my rights as a parent. Today, I have custody of my children, thanks to her efforts.",

            caseType: "Family",
            year: "2024",
        },
        {
            id: 4,
            name: "A. Mehta",
            initials: "AM",
            location: "Bangalore",
            category: "Consumer Case",
            categoryColor: "orange",
            rating: 5,

            review: "My insurance claim was wrongfully denied, and I didn't know what to do. Advocate Pradnya Pednekar took my case to NCDRC and won. Not only did I get my claim amount, but also compensation for harassment. Excellent service!",

            caseType: "Consumer",
            year: "2023",
        },
        {
            id: 5,
            name: "Corporate Client",
            initials: "CC",
            location: "Hyderabad",
            category: "Corporate Law",
            categoryColor: "green",
            rating: 5,

            review: "We have been working with this law office for our corporate legal matters for over three years. From contract drafting to dispute resolution, they handle everything professionally. Their advice has saved us from potential legal pitfalls multiple times.",

            caseType: "Corporate",
            year: "2024",
        },
        {
            id: 6,
            name: "P. Desai",
            initials: "PD",
            location: "Chennai",
            category: "Recovery Suit",
            categoryColor: "blue",
            rating: 4,

            review: "I had given a substantial loan to someone who refused to repay. Advocate Pradnya Pednekar filed a recovery suit and obtained a decree in my favor. The execution process was also handled efficiently. Recovered my full amount with interest.",

            caseType: "Civil",
            year: "2023",
        },
        {
            id: 7,
            name: "K. Sharma",
            initials: "KS",
            location: "Ahmedabad",
            category: "Bail Matter",
            categoryColor: "red",
            rating: 5,

            review: "When a family member was arrested, we were in panic. Advocate Pradnya Pednekar's team responded immediately for a bail application. Their quick action and strong arguments secured bail within 48 hours. Forever grateful for their help during a difficult time.",

            caseType: "Criminal",
            year: "2024",
        },
        {
            id: 8,
            name: "N. Joshi",
            initials: "NJ",
            location: "Kolkata",
            category: "Writ Petition",
            categoryColor: "indigo",
            rating: 5,

            review: "The municipal authorities were about to demolish my shop without proper notice. Advocate Pradnya Pednekar filed an urgent writ petition and got a stay from the High Court. She saved my livelihood and successfully challenged the arbitrary action.",

            caseType: "Constitutional",
            year: "2023",
        },
    ],

    // ========================================
    // CATEGORIES (for filtering)
    // ========================================
    categories: [
        { id: "all", label: "All Reviews" },
        { id: "Civil", label: "Civil" },
        { id: "Criminal", label: "Criminal" },
        { id: "Family", label: "Family" },
        { id: "Corporate", label: "Corporate" },
        { id: "Consumer", label: "Consumer" },
        { id: "Constitutional", label: "Constitutional" },
    ],

    // ========================================
    // GOOGLE REVIEWS LINK
    // ========================================
    googleReviews: {
        show: true,
        text: "See more reviews on Google",
        url: "https://g.page/your-business/review", // Replace with actual Google Business link
    },

    // ========================================
    // CTA SECTION
    // ========================================
    cta: {
        title: "Ready to Experience Our Service?",
        description: "Join hundreds of satisfied clients. Schedule a free consultation today.",

        button: {
            text: "Contact Us Now",
            href: "/contact",
        },
    },
};

export type TestimonialsConfig = typeof testimonialsConfig;
