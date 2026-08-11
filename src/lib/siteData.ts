export const companyConfig = {
  name: "VectorValue",
  email: "contact@vectorvalue.com",
  phone: "+91 123 456 7890",
  linkedin: "YOUR_LINKEDIN",
  linkedinUrl: "#",
  schedulingProvider: "calendly",
  calendlyUrl: "YOUR_CALENDLY_URL",
  calcomUrl: "YOUR_CALCOM_URL",
  responseWindow: "48h",
};

export const TARGET_MARKETS = [
  { lat: 51.51, lng: -0.13, label: "UK", size: 1 },
  { lat: 52.37, lng: 4.9, label: "NL", size: 0.9 },
  { lat: 40.71, lng: -74.01, label: "US", size: 1 },
  { lat: 43.65, lng: -79.38, label: "CA", size: 0.9 },
  { lat: 25.2, lng: 55.27, label: "UAE", size: 1 },
  { lat: 24.71, lng: 46.68, label: "KSA", size: 0.9 },
  { lat: 1.35, lng: 103.82, label: "SG", size: 0.9 },
  { lat: -33.87, lng: 151.21, label: "AU", size: 1 },
];

export const MARKET_LINKS = [[0, 2], [0, 4], [4, 6], [6, 7], [2, 3], [0, 1], [4, 5]];

export const expertise = [
  {
    slug: "civil-engineering",
    icon: "ruler",
    title: "Civil Engineering",
    summary: "Precision-driven civil estimation and design support for buildings, sites and infrastructure packages.",
    intro: "Civil scope is where budgets are won or lost. We quantify it line by line — from stripping and bulk earthwork to concrete, reinforcement and finishes — so your team prices from measured quantities rather than allowances.",
    services: ["Quantity Estimation", "Cost Estimation", "BOQ Preparation", "Civil Works Estimation", "Earthwork Estimation", "Concrete Estimation", "Reinforcement Estimation", "Masonry Estimation", "Take-Off Services", "Material Quantification"],
    provides: [
      { title: "Measured quantities", body: "Take-offs traced back to drawing references, with assumptions and exclusions stated in writing." },
      { title: "Priced or unpriced BOQs", body: "Structured to your standard method of measurement, or to a format we agree at kick-off." },
      { title: "Comparative options", body: "Quantity and cost deltas between design options, so decisions are made on numbers." },
    ],
    projectTypes: ["Commercial and mixed-use buildings", "Industrial and logistics facilities", "Residential developments", "Site development and external works", "Refurbishment and fit-out packages"],
  },
  {
    slug: "structural-engineering",
    icon: "frame",
    title: "Structural Engineering",
    summary: "Analysis, design and detailing support for concrete and steel structures, delivered as reviewable calculation packages.",
    intro: "Structural decisions carry the largest downstream cost. We model, analyse and detail — then hand over calculations a reviewing engineer can follow line by line.",
    services: ["Structural Design", "Structural Analysis", "Structural Calculations", "Steel Structure Design", "Reinforced Concrete Design", "Structural Detailing", "Load Analysis", "Design Review", "Engineering Documentation"],
    provides: [
      { title: "Analysis models", body: "Load paths, load combinations and results presented with the assumptions that produced them." },
      { title: "Design calculations", body: "Member and connection design sets prepared for engineer-of-record review." },
      { title: "Detailing support", body: "Reinforcement and steelwork detailing drafted to your drawing standards." },
    ],
    projectTypes: ["Framed buildings in concrete or steel", "Industrial structures and platforms", "Structural alterations and strengthening", "Temporary works design support", "Design-review and second-opinion work"],
  },
  {
    slug: "foundation-engineering",
    icon: "layers",
    title: "Foundation Engineering",
    summary: "Shallow and deep foundation design, analysis and drawing packages — engineering only, never installation.",
    intro: "Foundations are designed once and paid for forever. We size and check them against the geotechnical information available, compare shallow and deep options, and document the reasoning behind the recommendation.",
    services: ["Foundation Design", "Shallow Foundation Design", "Deep Foundation Design", "Pile Foundation Design", "Foundation Analysis", "Foundation Load Calculations", "Foundation Drawings", "Foundation Design Review"],
    provides: [
      { title: "Option studies", body: "Pads, rafts, strips or piles compared on capacity, settlement and quantity — with the trade-offs written down." },
      { title: "Design calculations", body: "Bearing capacity, settlement, pile capacity and pile-cap design against the supplied geotechnical report." },
      { title: "Foundation drawings", body: "Layouts, schedules and details ready for review and onward coordination." },
    ],
    projectTypes: ["Buildings on variable or weak ground", "Piled foundations and pile caps", "Raft and mat foundations", "Machine and equipment bases", "Foundation reviews on inherited designs"],
  },
];

export const process = [
  { index: "01", title: "Understand", body: "We review drawings, specifications and scope, then agree the basis of estimate or design brief in writing." },
  { index: "02", title: "Analyze", body: "Engineers identify technical requirements, missing information, assumptions and the checks the work will need." },
  { index: "03", title: "Estimate / Design", body: "Take-offs, calculations, analysis or design work are produced against the agreed basis." },
  { index: "04", title: "Review", body: "A second engineer checks the output against the brief and our internal review protocol." },
  { index: "05", title: "Deliver", body: "Organised, referenced files are issued with a short note covering assumptions, exclusions and open items." },
];

export const deliverables = [
  { icon: "table", title: "Bills of Quantities", formats: ["XLSX", "PDF"] },
  { icon: "ruler", title: "Quantity Take-Offs", formats: ["XLSX", "PDF"] },
  { icon: "calculator", title: "Cost Estimates", formats: ["XLSX", "PDF"] },
  { icon: "sigma", title: "Engineering Calculations", formats: ["PDF"] },
  { icon: "layers", title: "Foundation Designs", formats: ["PDF", "DWG"] },
  { icon: "frame", title: "Structural Designs", formats: ["PDF", "DWG"] },
];

export const faqs = [
  { q: "Does VectorValue perform construction?", a: "No. VectorValue delivers engineering estimation, design, analysis, documentation and technical consultancy. We do not carry out construction, installation, contracting, excavation or piling works on site." },
  { q: "What types of projects do you support?", a: "Buildings, industrial facilities, site development and civil infrastructure packages — at feasibility, tender or detailed design stage. The work is engineering and commercial documentation rather than site execution." },
  { q: "Do you work with international clients?", a: "Yes. VectorValue is structured for remote engineering delivery to international project teams, working to the drawing standards, measurement rules and file formats your project already uses." },
  { q: "Can you work from our drawings?", a: "Yes — drawings, specifications, tender documents and geotechnical reports are the usual starting point. Where information is missing we list the assumptions we have made instead of leaving them implicit." },
];

export const pillars = [
  { icon: "crosshair", title: "Precision", body: "Quantities and calculations produced through documented workflows, not estimates of estimates." },
  { icon: "layers", title: "Technical Depth", body: "Civil, structural, foundation, quantity and infrastructure disciplines under one engineering standard." },
  { icon: "compass", title: "Decision Support", body: "Clear technical information before commitment — options compared, assumptions stated." },
  { icon: "globe", title: "International Collaboration", body: "Remote engineering support structured around your time zone, drawing standards and file formats." },
  { icon: "gauge", title: "Efficiency", body: "Deliverables organised so your team can use them immediately, without rebuilding the model." },
  { icon: "eye", title: "Transparency", body: "Every deliverable states what was included, what was excluded and what it was measured from." },
];

export const clientTypes = [
  { title: "Developers", body: "Budget certainty before commitment, and engineering options compared on cost." },
  { title: "Engineering Consultants", body: "Overflow capacity for take-offs, calculations and documentation during peak load." },
  { title: "Construction Companies", body: "Pre-construction engineering, estimation, design and technical support. Construction execution remains yours — we do not build, install or contract." },
  { title: "Project Management Teams", body: "Independent quantities and technical review to test what has been submitted." },
  { title: "Architects", body: "Structural and foundation engineering support alongside architectural design." },
  { title: "Quantity Surveyors", body: "Measured quantities and BOQ preparation to feed commercial workflows." },
  { title: "Infrastructure Companies", body: "Linear take-offs, earthwork balances and utility quantification." },
  { title: "International Project Owners", body: "A single engineering partner across estimation, design and documentation." },
];

export const insights = [
  { category: "Foundation Engineering", title: "Shallow or deep: how foundation selection is actually decided", excerpt: "Ground conditions, load intensity, settlement tolerance and programme — the four inputs that decide a foundation strategy before cost enters the conversation.", read: "8 min", image: "/assets/imagery/towers-upward-monochrome.jpg" },
  { category: "Estimation", title: "What a defensible basis of estimate contains", excerpt: "The drawing register, measurement rules, inclusions and exclusions that turn a number into a document your commercial team can defend.", read: "6 min", image: "/assets/imagery/engineers-drawings-topdown.jpg" },
  { category: "Quantity Take-Off", title: "Where take-off errors compound on linear infrastructure", excerpt: "Chainage-based measurement, level data quality and the earthwork balance — three places small errors become large ones.", read: "7 min", image: "/assets/imagery/coastal-viaduct-aerial.jpg" },
];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Core Expertise", href: "/core-expertise", mega: true },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const megaGroups = [
  { title: "Civil Engineering", href: "/core-expertise/civil-engineering", icon: "ruler", items: [] },
  { title: "Structural Engineering", href: "/core-expertise/structural-engineering", icon: "frame", items: [] },
  { title: "Foundation Engineering", href: "/core-expertise/foundation-engineering", icon: "layers", items: [] },
];

export const footerLinks = [
  { title: "Explore", links: [{ label: "Home", href: "/" }, { label: "Core Expertise", href: "/core-expertise" }, { label: "About", href: "/about" }, { label: "Careers", href: "/careers" }, { label: "Contact", href: "/contact" }] },
  { title: "Expertise", links: [{ label: "Civil Engineering", href: "/core-expertise/civil-engineering" }, { label: "Structural Engineering", href: "/core-expertise/structural-engineering" }, { label: "Foundation Engineering", href: "/core-expertise/foundation-engineering" }] },
  { title: "Connect", links: [{ label: "Book a Call", href: "/book-a-call" }, { label: "Contact", href: "/contact" }, { label: "Email", href: "mailto:YOUR_EMAIL" }, { label: "LinkedIn", href: "#" }] },
];
