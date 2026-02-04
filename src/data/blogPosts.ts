// Blog posts data for static generation
// In production, use Astro Content Collections instead

export const blogPosts = [
  {
    slug: "understanding-property-disputes-india",
    title: "Understanding Property Disputes in India: A Complete Guide",
    excerpt: "Property disputes are one of the most common legal issues in India. Learn about types of property disputes, legal remedies, and how to protect your property rights.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Property Law",
    author: {
      name: "Advocate Pradnya Pednekar",
      role: "Senior Advocate",
      bio: "15+ years of experience in Civil, Criminal, and Corporate Law."
    },
    content: `
      <p class="lead">Property disputes are among the most prevalent and complex legal issues faced by individuals and families in India.</p>
      <h2>Types of Property Disputes</h2>
      <p>Understanding the nature of your property dispute is the first step toward resolution.</p>
      <h3>1. Title Disputes</h3>
      <p>These involve disagreements about who legally owns the property.</p>
      <h3>2. Partition Disputes</h3>
      <p>When family members or co-owners want to divide property, conflicts often emerge.</p>
      <h2>Legal Remedies Available</h2>
      <p>You can file various types of civil suits depending on your specific situation.</p>
      <div class="cta-box">
        <h3>Need Help with a Property Dispute?</h3>
        <p>Our experienced team has successfully handled hundreds of property matters.</p>
        <a href="/contact" class="btn btn-accent">Schedule Free Consultation</a>
      </div>
    `,
    relatedPosts: [
      { title: "Title Search: Why It's Essential", slug: "anticipatory-bail-explained" },
    ]
  },
  {
    slug: "anticipatory-bail-explained",
    title: "Anticipatory Bail: When, Why, and How to Apply",
    excerpt: "Anticipatory bail can protect you from arrest. Understand the legal provisions and process.",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Criminal Law",
    author: {
      name: "Advocate Pradnya Pednekar",
      role: "Senior Advocate",
      bio: "15+ years of experience in Civil, Criminal, and Corporate Law."
    },
    content: `
      <p class="lead">Anticipatory bail is a legal provision that allows a person to seek bail in anticipation of an arrest.</p>
      <h2>What is Anticipatory Bail?</h2>
      <p>Under Section 438 of CrPC, anticipatory bail can be granted by the Sessions Court or High Court.</p>
      <h2>When Can You Apply?</h2>
      <p>You can apply when you have reason to believe that you may be arrested for a non-bailable offense.</p>
      <div class="cta-box">
        <h3>Need Urgent Legal Help?</h3>
        <p>Contact us immediately for anticipatory bail applications.</p>
        <a href="/contact" class="btn btn-accent">Get Immediate Help</a>
      </div>
    `,
    relatedPosts: [
      { title: "Understanding Property Disputes", slug: "understanding-property-disputes-india" },
    ]
  }
];

export type BlogPost = typeof blogPosts[0];
