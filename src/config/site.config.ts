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
  siteName: "Advocate Sharma & Associates",
  siteTagline: "Trusted Legal Excellence, Dedicated Advocacy",
  siteDescription: "Expert legal services in Civil, Criminal & Corporate Law. 15+ years of experience. Free consultation available.",
  
  // Domain (without https://)
  domain: "yourdomain.com",
  
  // Full site URL (with https://)
  siteUrl: "https://yourdomain.com",

  // ========================================
  // ADVOCATE/FIRM INFORMATION
  // ========================================
  advocate: {
    name: "Advocate Sharma",
    fullName: "Mr. Rajesh Kumar Sharma",
    designation: "Senior Advocate",
    barCouncilNumber: "STATE/1234/2009",
    barCouncilState: "State Bar Council",
    enrollmentYear: "2009",
    experience: "15+",
    casesHandled: "1000+",
    successRate: "95%",
    happyClients: "500+",
  },

  // ========================================
  // CONTACT INFORMATION
  // ========================================
  contact: {
    // Phone numbers
    phone: {
      primary: "+91-XXXXXXXXXX",
      secondary: "+91-XXXXXXXXXX",
      display: "+91-XXXX-XXXXXX", // Formatted for display
    },
    
    // WhatsApp (without + sign, just numbers)
    whatsapp: {
      number: "91XXXXXXXXXX",
      message: "Hello, I would like to schedule a consultation.", // Pre-filled message
    },
    
    // Email addresses
    email: {
      primary: "contact@yourdomain.com",
      form: "forms@yourdomain.com", // Where form submissions go
    },
    
    // Office address
    address: {
      line1: "123, Law Chambers",
      line2: "High Court Road",
      city: "Your City",
      state: "Your State",
      pincode: "400001",
      landmark: "Near High Court",
      full: "123, Law Chambers, High Court Road, Your City, State - 400001",
    },
    
    // Office hours
    hours: {
      weekdays: "10:00 AM - 6:00 PM",
      saturday: "10:00 AM - 2:00 PM",
      sunday: "Closed",
      note: "Appointments preferred",
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
    titleTemplate: "%s | Advocate Sharma & Associates",
    defaultTitle: "Advocate Sharma & Associates | Expert Legal Services",
    defaultDescription: "Expert legal services in Civil, Criminal & Corporate Law. 15+ years of experience. Bar Council registered advocate. Free initial consultation.",
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
    copyrightName: "Advocate Sharma & Associates",
    
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
        label: "Practice Areas", 
        href: "/practice-areas",
        children: [
          { label: "Civil Law", href: "/practice-areas#civil" },
          { label: "Criminal Law", href: "/practice-areas#criminal" },
          { label: "Family Law", href: "/practice-areas#family" },
          { label: "Corporate Law", href: "/practice-areas#corporate" },
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
