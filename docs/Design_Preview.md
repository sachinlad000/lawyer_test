# DESIGN PREVIEW DOCUMENT

## Pradnya pednekar Professional Website

---

| Document Information | |
|----------------------|--------------------------|
| **Version** | 1.0 |
| **Date** | January 29, 2026 |
| **Prepared By** | Sachin lad |

---

# 1. COLOR PALETTE

## 1.1 Primary Colors - Navy Blue

**Why Navy Blue?**
Navy blue is universally associated with trust, authority, professionalism, and stability - essential qualities for legal professionals. It conveys reliability and expertise, making clients feel confident in your legal services.

| Swatch | Name | Hex Code | RGB | Usage |
|--------|------|----------|-----|-------|
| ██████ | Primary 900 | #0A2463 | 10, 36, 99 | **Main brand color** - Headers, buttons, key elements |
| ██████ | Primary 700 | #223A6D | 34, 58, 109 | Gradients, hover states |
| ██████ | Primary 500 | #2D4A80 | 45, 74, 128 | Links, secondary elements |
| ██████ | Primary 100 | #C0C8D9 | 192, 200, 217 | Light backgrounds, borders |

---

## 1.2 Accent Colors - Gold

**Why Gold?**
Gold represents prestige, excellence, and premium quality. It creates a distinguished look that separates your practice from competitors and signals high-value legal services.

| Swatch | Name | Hex Code | RGB | Usage |
|--------|------|----------|-----|-------|
| ██████ | Accent 500 | #D4AF37 | 212, 175, 55 | **Main accent** - CTAs, highlights, badges |
| ██████ | Accent 600 | #C49A2A | 196, 154, 42 | Hover states |
| ██████ | Accent 700 | #A37824 | 163, 120, 36 | Text on light backgrounds |
| ██████ | Accent 100 | #F9EED1 | 249, 238, 209 | Light accent backgrounds |

---

## 1.3 Neutral Colors

**Purpose**: Clean, professional backgrounds and readable text

| Swatch | Name | Hex Code | Usage |
|--------|------|----------|-------|
| ██████ | White | #FFFFFF | Page backgrounds |
| ██████ | Neutral 50 | #F9FAFB | Section backgrounds |
| ██████ | Neutral 100 | #F3F4F6 | Card backgrounds |
| ██████ | Neutral 200 | #E5E7EB | Borders, dividers |
| ██████ | Neutral 500 | #6B7280 | Muted text, captions |
| ██████ | Neutral 700 | #374151 | Body text |
| ██████ | Neutral 900 | #111827 | Headings, dark text |

---

## 1.4 Functional Colors

| Swatch | Purpose | Hex Code | Usage |
|--------|---------|----------|-------|
| ██████ | WhatsApp | #25D366 | WhatsApp button, contact |
| ██████ | Success | #10B981 | Form success, confirmations |
| ██████ | Error | #EF4444 | Form errors, warnings |
| ██████ | Warning | #F59E0B | Important notices |

---

# 2. TYPOGRAPHY

## 2.1 Heading Font: Playfair Display

**Why Playfair Display?**
An elegant serif typeface that conveys tradition, authority, and sophistication. Perfect for a legal professional's website as it balances modernity with the gravitas expected in the legal field.

### Heading Examples

# Heading 1 (H1)
**Font**: Playfair Display Bold | **Size**: 56px (Desktop) / 32px (Mobile)
*Usage*: Page titles, main headlines

## Heading 2 (H2)
**Font**: Playfair Display Bold | **Size**: 40px (Desktop) / 24px (Mobile)
*Usage*: Section titles

### Heading 3 (H3)
**Font**: Playfair Display Bold | **Size**: 28px (Desktop) / 20px (Mobile)
*Usage*: Subsection titles

#### Heading 4 (H4)
**Font**: Playfair Display Bold | **Size**: 20px (Desktop) / 18px (Mobile)
*Usage*: Card titles, minor headings

---

## 2.2 Body Font: Inter

**Why Inter?**
A modern, highly-readable sans-serif font designed specifically for screens. Excellent clarity at all sizes ensures comfortable reading for all visitors.

### Body Text Examples

**Regular Body Text** (16px)
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
*Usage*: Main content, paragraphs

**Large Body Text** (18px)
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
*Usage*: Hero subheadlines, introductions

**Small Text** (14px)
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
*Usage*: Captions, metadata, footers

**Button Text** (16px Semibold)
SCHEDULE CONSULTATION
*Usage*: All button labels

---

# 3. COMPONENT EXAMPLES

## 3.1 Buttons

### Primary Button (Navy Blue)
```
┌─────────────────────────────┐
│  📅  Schedule Consultation  │
└─────────────────────────────┘
Background: #0A2463 | Text: White | Hover: Lifts up with shadow
```
*Usage*: Main call-to-action buttons

### Accent Button (Gold)
```
┌─────────────────────────────┐
│  📅  Free Consultation      │
└─────────────────────────────┘
Background: #D4AF37 | Text: #0A2463 | Hover: Darker gold
```
*Usage*: Featured/highlighted actions

### Outline Button (For light backgrounds)
```
┌─────────────────────────────┐
│  📞  Call Now               │
└─────────────────────────────┘
Background: Transparent | Border: #0A2463 | Text: #0A2463
```
*Usage*: Secondary actions on light backgrounds

### Outline Light Button (For dark backgrounds)
```
┌─────────────────────────────┐
│  📞  Call Now               │
└─────────────────────────────┘
Background: Transparent | Border: White | Text: White
```
*Usage*: Secondary actions on dark backgrounds (hero section)

### WhatsApp Button
```
┌─────────────────────────────┐
│  💬  WhatsApp               │
└─────────────────────────────┘
Background: #25D366 | Text: White | Hover: #128C7E
```
*Usage*: WhatsApp contact links

---

## 3.2 Cards

### Practice Area Card — Default State
```
┌─────────────────────────────────┐
│         ⚖️                      │
│                                 │
│    Civil Litigation             │
│                                 │
│    Expert representation in     │
│    property disputes, contract  │
│    matters, and civil suits.    │
│                                 │
│    Learn More →                 │
└─────────────────────────────────┘
Background: White | Shadow: Subtle | Border-radius: 16px
```

### Practice Area Card — Hover State
```
┌─────────────────────────────────┐
│         ⚖️                      │  ↑ Lifts 4px
│                                 │
│    Civil Litigation             │
│                                 │
│    Expert representation in     │
│    property disputes, contract  │
│    matters, and civil suits.    │
│                                 │
│    Learn More →                 │
└─────────────────────────────────┘
Shadow: Larger | Transform: translateY(-4px)
```

### Testimonial Card
```
┌─────────────────────────────────┐
│  "Excellent representation.     │
│   Mr. Sharma handled my case    │
│   with utmost professionalism   │
│   and got a favorable outcome." │
│                                 │
│  ⭐⭐⭐⭐⭐                        │
│                                 │
│  👤 R. Kumar                    │
│  Property Dispute Case          │
└─────────────────────────────────┘
Background: White | Category Badge: Gold
```

---

## 3.3 Trust Badges

### Experience Badge
```
┌─────────────────────────────────┐
│  🏆  15+                        │
│      Years Experience           │
└─────────────────────────────────┘
Background: Navy gradient | Icon: Gold circle
```

### Cases Badge
```
┌─────────────────────────────────┐
│  📋  1000+                      │
│      Cases Handled              │
└─────────────────────────────────┘
```

### Success Rate Badge
```
┌─────────────────────────────────┐
│  ✓   95%                        │
│      Success Rate               │
└─────────────────────────────────┘
```

---

## 3.4 Form Elements

### Input Field — Default
```
┌─────────────────────────────────┐
│  Your Name                      │
└─────────────────────────────────┘
Border: #E5E7EB (2px) | Background: White
```

### Input Field — Focus
```
┌─────────────────────────────────┐
│  Your Name                      │
└─────────────────────────────────┘
Border: #2D4A80 (2px) | Shadow: Blue glow
```

### Input Field — Error
```
┌─────────────────────────────────┐
│  Your Name                      │
└─────────────────────────────────┘
Border: #EF4444 (2px) | Error message below
```

---
















# 4. PAGE LAYOUTS

## 4.1 Home Page — Desktop View

```
┌──────────────────────────────────────────────────────────────────┐
│  ☰ ADVOCATE NAME    Home  About  Practice Areas  Contact  [CTA] │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────────────────┐  ┌──────────────────────────┐  │
│  │                              │  │                          │  │
│  │  Trusted Legal Excellence    │  │    [Professional         │  │
│  │                              │  │     Photo                │  │
│  │  Providing expert legal      │  │     Placeholder]         │  │
│  │  representation in Civil,    │  │                          │  │
│  │  Criminal, and Corporate Law │  │   ┌─────────────────┐    │  │
│  │                              │  │   │ 15+ Years Exp   │    │  │
│  │  ✓ 15+ Years Experience      │  │   └─────────────────┘    │  │
│  │  ✓ 1000+ Cases Handled       │  │                          │  │
│  │  ✓ Bar Council Registered    │  │   ┌─────────────────┐    │  │
│  │  ✓ Free Initial Consultation │  │   │ 1000+ Cases     │    │  │
│  │                              │  │   └─────────────────┘    │  │
│  │  [Free Consultation] [Call]  │  │                          │  │
│  │  [WhatsApp]                  │  │                          │  │
│  └──────────────────────────────┘  └──────────────────────────┘  │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│  15+ Years  │  1000+ Cases  │  95% Success  │  500+ Clients     │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│                    PRACTICE AREAS                                │
│                                                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐        │
│  │ Civil    │  │ Criminal │  │ Family   │  │ Corporate│        │
│  │ Law      │  │ Law      │  │ Law      │  │ Law      │        │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘        │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│                    CLIENT TESTIMONIALS                           │
│                                                                  │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐                 │
│  │ "Great..." │  │ "Excel..."│  │ "Highly..." │                 │
│  │ ⭐⭐⭐⭐⭐    │  │ ⭐⭐⭐⭐⭐   │  │ ⭐⭐⭐⭐⭐    │                 │
│  │ R. Kumar   │  │ S. Patel  │  │ M. Singh   │                 │
│  └────────────┘  └────────────┘  └────────────┘                 │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│  FOOTER: Contact | Quick Links | Practice Areas | Disclaimer    │
└──────────────────────────────────────────────────────────────────┘
```

---

## 4.2 Home Page — Mobile View

```
┌───────────────────────┐
│  ☰  ADVOCATE NAME     │
├───────────────────────┤
│                       │
│  Trusted Legal        │
│  Excellence           │
│                       │
│  Providing expert     │
│  legal representation │
│  in Civil, Criminal,  │
│  and Corporate Law    │
│                       │
│  ✓ 15+ Years          │
│  ✓ 1000+ Cases        │
│  ✓ Bar Council Reg.   │
│  ✓ Free Consultation  │
│                       │
│  [Free Consultation]  │
│  [Call Now]           │
│  [WhatsApp]           │
│                       │
├───────────────────────┤
│  15+   │  1000+       │
│  Years │  Cases       │
│────────│──────────────│
│  95%   │  500+        │
│  Rate  │  Clients     │
├───────────────────────┤
│                       │
│    PRACTICE AREAS     │
│                       │
│  ┌─────────────────┐  │
│  │   Civil Law     │  │
│  └─────────────────┘  │
│  ┌─────────────────┐  │
│  │   Criminal Law  │  │
│  └─────────────────┘  │
│  ┌─────────────────┐  │
│  │   Family Law    │  │
│  └─────────────────┘  │
│                       │
├───────────────────────┤
│      TESTIMONIALS     │
│                       │
│  ┌─────────────────┐  │
│  │ "Excellent..."  │  │
│  │ ⭐⭐⭐⭐⭐          │  │
│  │ R. Kumar        │  │
│  └─────────────────┘  │
│                       │
├───────────────────────┤
│       FOOTER          │
└───────────────────────┘

  ┌─────┐
  │ 💬  │  ← Floating WhatsApp
  └─────┘
```

---

## 4.3 Contact Page — Desktop View

```
┌──────────────────────────────────────────────────────────────────┐
│  ☰ ADVOCATE NAME    Home  About  Practice Areas  Contact  [CTA] │
├──────────────────────────────────────────────────────────────────┤
│                       CONTACT US                                 │
│                Get in touch for a consultation                   │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────────────┐  ┌────────────────────────────┐   │
│  │                          │  │                            │   │
│  │  CONTACT FORM            │  │  CONTACT INFORMATION       │   │
│  │                          │  │                            │   │
│  │  ┌────────────────────┐  │  │  📞 +91-XXXXXXXXXX         │   │
│  │  │ Your Name          │  │  │                            │   │
│  │  └────────────────────┘  │  │  💬 WhatsApp Chat          │   │
│  │  ┌────────────────────┐  │  │                            │   │
│  │  │ Email Address      │  │  │  ✉️  contact@domain.com    │   │
│  │  └────────────────────┘  │  │                            │   │
│  │  ┌────────────────────┐  │  │  📍 123, Law Chambers      │   │
│  │  │ Phone Number       │  │  │     High Court Road        │   │
│  │  └────────────────────┘  │  │     City, State - 400001   │   │
│  │  ┌────────────────────┐  │  │                            │   │
│  │  │ Case Type      ▼   │  │  │  ⏰ OFFICE HOURS           │   │
│  │  └────────────────────┘  │  │     Mon-Fri: 10am-6pm      │   │
│  │  ┌────────────────────┐  │  │     Sat: 10am-2pm          │   │
│  │  │ Your Message       │  │  │                            │   │
│  │  │                    │  │  │  ┌────────────────────┐    │   │
│  │  │                    │  │  │  │                    │    │   │
│  │  └────────────────────┘  │  │  │   GOOGLE MAP       │    │   │
│  │                          │  │  │                    │    │   │
│  │  [Send Message]          │  │  └────────────────────┘    │   │
│  │                          │  │                            │   │
│  └──────────────────────────┘  └────────────────────────────┘   │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│  FOOTER: Contact | Quick Links | Practice Areas | Disclaimer    │
└──────────────────────────────────────────────────────────────────┘
```

---

# 5. NAVIGATION FLOW

```
                            ┌──────────────┐
                            │   HOME PAGE  │
                            └──────┬───────┘
                                   │
       ┌───────────────┬───────────┼───────────┬───────────────┐
       │               │           │           │               │
       ▼               ▼           ▼           ▼               ▼
┌──────────────┐ ┌───────────┐ ┌────────┐ ┌────────────┐ ┌───────────┐
│    ABOUT     │ │ PRACTICE  │ │PORTFOLIO│ │TESTIMONIALS│ │  CONTACT  │
│              │ │   AREAS   │ │         │ │            │ │           │
└──────────────┘ └───────────┘ └─────────┘ └────────────┘ └─────┬─────┘
                                                                │
                                                                ▼
                                                         ┌──────────────┐
                                                         │  THANK YOU   │
                                                         │    PAGE      │
                                                         └──────────────┘

FOOTER LINKS:
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│  DISCLAIMER  │  │   PRIVACY    │  │    TERMS     │
│              │  │   POLICY     │  │   OF USE     │
└──────────────┘  └──────────────┘  └──────────────┘
```

---

# 6. HEADER COMPONENT STATES

## 6.1 Header — Default (At top of page)
```
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│  [LOGO] ADVOCATE NAME    Home  About  Practice Areas ▼  ...     │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
Background: Transparent (on hero) or White
Text: White (on hero) or Navy
```

## 6.2 Header — Scrolled
```
┌──────────────────────────────────────────────────────────────────┐
│  [LOGO] ADVOCATE NAME    Home  About  Practice Areas ▼  [CTA]   │
└──────────────────────────────────────────────────────────────────┘
Background: White with shadow
Text: Navy Blue
Position: Fixed (sticky)
```

## 6.3 Header — Mobile
```
┌───────────────────────────────────┐
│  ☰  [LOGO] ADVOCATE NAME          │
└───────────────────────────────────┘
Hamburger menu opens slide-in navigation
```

## 6.4 Mobile Menu — Open
```
┌───────────────────────────────────┐
│  ✕  [LOGO] ADVOCATE NAME          │
├───────────────────────────────────┤
│                                   │
│  Home                             │
│  ─────────────────────────────    │
│  About                            │
│  ─────────────────────────────    │
│  Practice Areas              ▼   │
│    • Civil Law                    │
│    • Criminal Law                 │
│    • Family Law                   │
│    • Corporate Law                │
│  ─────────────────────────────    │
│  Portfolio                        │
│  ─────────────────────────────    │
│  Testimonials                     │
│  ─────────────────────────────    │
│  Contact                          │
│  ─────────────────────────────    │
│                                   │
│  [Schedule Consultation]          │
│                                   │
└───────────────────────────────────┘
Background: White | Animation: Slide from right
```

---

# 7. FOOTER COMPONENT

```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│  ADVOCATE NAME        QUICK LINKS      PRACTICE AREAS    CONTACT US │
│                                                                      │
│  [Description of      • Home           • Civil Law       📞 Phone   │
│   the law firm        • About          • Criminal Law    💬 WhatsApp│
│   and services]       • Practice       • Family Law      ✉️ Email   │
│                       • Portfolio      • Corporate Law   📍 Address │
│  ┌─────────────┐      • Testimonials                                │
│  │ BAR COUNCIL │      • Contact                          ⏰ Hours   │
│  │ REGISTERED  │                                                    │
│  └─────────────┘                                                    │
│                                                                      │
├──────────────────────────────────────────────────────────────────────┤
│  DISCLAIMER: This website is meant for informational purposes       │
│  only. The information provided does not constitute legal advice.   │
│  No attorney-client relationship is created by accessing this site. │
├──────────────────────────────────────────────────────────────────────┤
│  © 2026 [Advocate Name]. All Rights Reserved.                       │
│  Disclaimer | Privacy Policy | Terms of Use                         │
└──────────────────────────────────────────────────────────────────────┘

Background: Navy Blue (#0A2463)
Text: White
Accent links: Gold on hover
```

---

# 8. FLOATING WHATSAPP BUTTON

## Position & Appearance
```
                                    ┌─────────────┐
                                    │     💬      │
                                    │  WhatsApp   │  ← Tooltip on hover
                                    └─────────────┘
                                          │
                                    ┌─────┴─────┐
                                    │    💬     │  ← Main button
                                    └───────────┘
                                    
Position: Fixed, bottom-right corner (24px from edges)
Size: 60px diameter
Background: #25D366 (WhatsApp Green)
Animation: Subtle pulse effect
```

## States
- **Default**: Green circle with white WhatsApp icon
- **Hover**: Slight scale up (1.1x), deeper shadow, tooltip appears
- **Click**: Opens WhatsApp with pre-filled message

---







# 9. APPROVAL SECTION

## Design Approval



| Element | Approved |
|---------|----------|
| Color Palette (Navy Blue & Gold) | ☐ Yes  ☐ No |
| Typography (Playfair Display & Inter) | ☐ Yes  ☐ No |
| Button Styles | ☐ Yes  ☐ No |
| Card Designs | ☐ Yes  ☐ No |
| Page Layouts | ☐ Yes  ☐ No |
| Navigation Design | ☐ Yes  ☐ No |
| Footer Design | ☐ Yes  ☐ No |
| Mobile Design Approach | ☐ Yes  ☐ No |

**Comments / Change Requests**:

_________________________________________________________

_________________________________________________________

_________________________________________________________

---

**END OF DESIGN PREVIEW DOCUMENT**
