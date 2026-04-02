/**
 * Site-Wide Configuration
 * =======================
 * Central configuration for the entire website.
 * 
 * CLIENT EDITABLE: Update all values below with your actual information.
 */

export const siteConfig = {
  // ========================================
  // BASIC SITE INFORMATION
  // ========================================
  siteName: "Advocate Pradnya Pednekar",
  siteTagline: "Trusted Legal Excellence, Dedicated Advocacy",
  siteDescription: "Expert legal services in Civil, Criminal & Corporate Law. 22+ years of experience. Trusted legal representation.",

  // Domain (without https://)
  domain: "yourdomain.com",

  // Full site URL (with https://)
  siteUrl: "https://yourdomain.com",

  // ========================================
  // ADVOCATE/FIRM INFORMATION
  // ========================================
  advocate: {
    name: "Advocate Pradnya Pednekar",
    fullName: "Mrs. Pradnya Pednekar",
    designation: "Advocate",
    barCouncilNumber: "MAH/1117/2004",
    barCouncilState: "Maharashtra Bar Council",
    enrollmentYear: "2004",
    experience: "22+",
    casesHandled: "1000+",
    successRate: "95%",
    happyClients: "1000+",
  },

  // ========================================
  // CONTACT INFORMATION
  // ========================================
  contact: {
    // Phone numbers
    phone: {
      primary: "+91-9833889863",
      secondary: "+91-9833889863",
      display: "+91-9833-889863", // Formatted for display
    },

    // WhatsApp (without + sign, just numbers)
    whatsapp: {
      number: "919833889863",
      message: "Hello, I would like to schedule a consultation.", // Pre-filled message
    },

    // Email addresses
    email: {
      primary: "adv.pradnyapednekar@gmail.com",
      form: "adv.pradnyapednekar@gmail.com", // Where form submissions go
    },

    // Office address
    address: {
      line1: "B-19, Shanti Bhavan, Arihant Shopping Center",
      line2: "J.S.D. Road, Next to Mulund Railway Station",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400081",
      landmark: "Next to Mulund Railway Station",
      full: "B-19, Shanti Bhavan, Arihant Shopping Center, J.S.D. Road, Next to Mulund Railway Station, Mulund(W), Mumbai - 400081",
    },

    // Office hours
    hours: {
      weekdays: "5:00 PM - 8:00 PM (Mon-Sat) | Prior Appointment Only",
      saturday: "5:00 PM - 8:00 PM",
      sunday: "Closed",
      note: "Prior appointment only",
    },

    // Google Maps
    googleMaps: {
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d...", // Replace with actual embed URL
      latitude: "19.0760",
      longitude: "72.8777",
    },
  },

  // ========================================
  // SOCIAL MEDIA LINKS
  // ========================================
  social: {
    linkedin: "https://linkedin.com/in/your-profile",
    twitter: "https://twitter.com/your-handle",
    facebook: "https://facebook.com/your-page",
    instagram: "", // Leave empty if not used
  },

  // ========================================
  // ANALYTICS & TRACKING
  // ========================================
  analytics: {
    // Google Analytics 4
    googleAnalyticsId: "G-XXXXXXXXXX",

    // Google Tag Manager (optional)
    googleTagManagerId: "",

    // Google Search Console verification
    googleSiteVerification: "",
  },

  // ========================================
  // FORM HANDLING (Resend / Netlify / Formspree)
  // ========================================
  forms: {
    // Provider: 'netlify' | 'formspree' | 'resend'
    provider: "netlify",

    // Formspree endpoint (if using Formspree)
    formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID",

    // Resend configuration (if using Resend)
    resend: {
      apiEndpoint: "/api/send-email", // Your API endpoint
      toEmail: "contact@yourdomain.com",
      fromEmail: "noreply@yourdomain.com",
    },

    // Netlify Forms settings
    netlify: {
      formName: "contact",
      successRedirect: "/thank-you",
    },
  },

  // ========================================
  // SEO & META DEFAULTS
  // ========================================
  seo: {
    titleTemplate: "%s | Advocate Pradnya Pednekar",
    defaultTitle: "Advocate Pradnya Pednekar | Expert Legal Services",
    defaultDescription: "Expert legal services in Civil, Criminal & Corporate Law. 22+ years of experience. Bar Council registered advocate. Trusted legal representation.",
    defaultKeywords: "advocate, lawyer, legal services, civil law, criminal law, corporate law, India, High Court, Supreme Court",

    // Open Graph defaults
    ogImage: "/images/og-image.jpg",
    ogType: "website",

    // Twitter Card
    twitterCard: "summary_large_image",
    twitterHandle: "@your-handle",
  },

  // ========================================
  // IMAGES & ASSETS
  // ========================================
  images: {
    logo: "/images/logo.png",
    favicon: "/favicon.svg",
    advocatePhoto: "/images/advocate-photo.jpg",
    officePhoto: "/images/office.jpg",
    ogImage: "/images/og-image.jpg",
  },

  // ========================================
  // LEGAL & COMPLIANCE
  // ========================================
  legal: {
    copyrightYear: new Date().getFullYear(),
    copyrightName: "Advocate Pradnya Pednekar",

    // Bar Council compliance notice
    barCouncilDisclaimer: "As per the rules of the Bar Council of India, advocates are not permitted to solicit work or advertise. This website is meant solely for informational purposes and not for the purpose of advertising.",
  },

  // ========================================
  // NAVIGATION
  // ========================================
  navigation: {
    main: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      {
        label: "Practice",
        href: "/practice-areas",
        children: [
          { label: "Civil Law", href: "/practice-areas#civil" },
          { label: "Criminal Law", href: "/practice-areas#criminal" },
          { label: "Family Law", href: "/practice-areas#family" },
          { label: "Corporate Law", href: "/practice-areas#corporate" },
          { label: "Revenue Law", href: "/practice-areas#revenue" },
        ]
      },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Contact", href: "/contact" },
    ],
    footer: [
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
    ],
  },
};

// Type export for TypeScript support
export type SiteConfig = typeof siteConfig;
