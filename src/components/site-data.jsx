window.vvAsset = function (id, path) { return (window.__resources && window.__resources[id]) || path; };

/* VectorValue site content. Everything the marketing site renders comes from here —
   no copy is hardcoded inside screens. Values marked CONFIGURE are placeholders. */

const companyConfig = {
  name: "VectorValue",
  email: "YOUR_EMAIL",            // CONFIGURE
  phone: "YOUR_PHONE",            // CONFIGURE
  linkedin: "YOUR_LINKEDIN",      // CONFIGURE
  linkedinUrl: "#",               // CONFIGURE
  schedulingProvider: "calendly", // "calendly" | "calcom"
  calendlyUrl: "YOUR_CALENDLY_URL", // CONFIGURE — read from VITE_CALENDLY_URL in production
  calcomUrl: "YOUR_CALCOM_URL",     // CONFIGURE — read from VITE_CALCOM_URL in production
  responseWindow: "48h",
};

/* CONFIGURE — approved target markets only. These describe where VectorValue supports
   projects remotely. They are not offices, clients or completed projects. */
const TARGET_MARKETS = [
  { lat: 51.51, lng: -0.13, label: "UK", size: 1 },
  { lat: 52.37, lng: 4.90, label: "NL", size: 0.9 },
  { lat: 40.71, lng: -74.01, label: "US", size: 1 },
  { lat: 43.65, lng: -79.38, label: "CA", size: 0.9 },
  { lat: 25.20, lng: 55.27, label: "UAE", size: 1 },
  { lat: 24.71, lng: 46.68, label: "KSA", size: 0.9 },
  { lat: 1.35, lng: 103.82, label: "SG", size: 0.9 },
  { lat: -33.87, lng: 151.21, label: "AU", size: 1 },
];
const MARKET_LINKS = [[0, 2], [0, 4], [4, 6], [6, 7], [2, 3], [0, 1], [4, 5]];

const navItems = [
  { label: "Home", href: "/" },
  { label: "Core Expertise", href: "/core-expertise", mega: true },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const expertise = [
  {
    slug: "civil-engineering", icon: "ruler", title: "Civil Engineering",
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
    slug: "structural-engineering", icon: "frame", title: "Structural Engineering",
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
    slug: "foundation-engineering", icon: "layers", title: "Foundation Engineering",
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
  {
    slug: "quantity-cost-engineering", icon: "calculator", title: "Quantity & Cost Engineering",
    summary: "Take-offs, BOQs and estimates that hold up in tender review — with every assumption visible.",
    intro: "An estimate is only as good as its basis. We state the drawings, revisions, rates and exclusions behind every number, so your commercial team can defend it in a tender interview.",
    services: ["Quantity Take-Off", "BOQ Preparation", "Cost Estimation", "Material Quantification", "Tender Estimation", "Preliminary Estimation", "Detailed Estimation", "Cost Comparison", "Pricing Support"],
    provides: [
      { title: "Basis of estimate", body: "Drawing register, revision numbers, measurement rules, inclusions and exclusions, issued with the estimate." },
      { title: "Structured BOQs", body: "Trade-sectioned, formula-linked workbooks you can re-rate without rebuilding them." },
      { title: "Cost comparisons", body: "Option-by-option comparison of quantity and cost impact for value-engineering reviews." },
    ],
    projectTypes: ["Tender and bid submissions", "Budget and feasibility estimates", "Value-engineering exercises", "Variation and claim quantification", "Subcontract package pricing support"],
  },
  {
    slug: "infrastructure-engineering", icon: "route", title: "Infrastructure Engineering",
    summary: "Estimation and design support for roads, drainage, utilities and site development packages.",
    intro: "Infrastructure scope spreads across long linear runs where small measurement errors compound. We quantify it systematically and keep the model auditable.",
    services: ["Road Estimation", "Drainage Estimation", "Utility Estimation", "Site Development Estimation", "Infrastructure Quantity Take-Off", "Civil Infrastructure Design Support"],
    provides: [
      { title: "Linear take-offs", body: "Chainage-based quantification for carriageways, kerbing, drainage runs and utility corridors." },
      { title: "Earthwork balances", body: "Cut, fill and haul quantities from level and section information." },
      { title: "Design support", body: "Layout and levels support for engineers coordinating an infrastructure package." },
    ],
    projectTypes: ["Access roads and internal estate roads", "Surface-water and foul drainage networks", "Utility corridors and service routes", "Plot and site development platforms", "Public-realm and hardscape packages"],
  },
  {
    slug: "technical-documentation", icon: "file-text", title: "Technical Documentation",
    summary: "Reports, calculation sets and drawing documentation that make engineering work reviewable.",
    intro: "Undocumented engineering cannot be checked, approved or defended. We turn analysis into documents your reviewers, clients and authorities can read in one pass.",
    services: ["Engineering Reports", "Technical Documentation", "Design Calculations", "Quantity Reports", "Cost Reports", "Drawing Documentation", "Engineering Review", "Technical Coordination"],
    provides: [
      { title: "Engineering reports", body: "Method, inputs, results and conclusions in a consistent, reviewable structure." },
      { title: "Calculation sets", body: "Indexed, referenced and formatted for third-party checking." },
      { title: "Drawing documentation", body: "Registers, revision control and issue sheets that keep a package traceable." },
    ],
    projectTypes: ["Design submissions and approvals packages", "Tender documentation support", "Technical due-diligence reviews", "Handover and as-built documentation", "Internal engineering standards work"],
  },
];

const megaGroups = expertise.map((e) => ({
  title: e.title, href: "/core-expertise/" + e.slug, icon: e.icon,
  items: e.services.slice(0, 5).map((s) => ({ label: s, href: "/core-expertise/" + e.slug })),
}));

const pillars = [
  { icon: "crosshair", title: "Precision", body: "Quantities and calculations produced through documented workflows, not estimates of estimates." },
  { icon: "layers", title: "Technical Depth", body: "Civil, structural, foundation, quantity and infrastructure disciplines under one engineering standard." },
  { icon: "compass", title: "Decision Support", body: "Clear technical information before commitment — options compared, assumptions stated." },
  { icon: "globe", title: "International Collaboration", body: "Remote engineering support structured around your time zone, drawing standards and file formats." },
  { icon: "gauge", title: "Efficiency", body: "Deliverables organised so your team can use them immediately, without rebuilding the model." },
  { icon: "eye", title: "Transparency", body: "Every deliverable states what was included, what was excluded and what it was measured from." },
];

const process = [
  { index: "01", title: "Understand", body: "We review drawings, specifications and scope, then agree the basis of estimate or design brief in writing." },
  { index: "02", title: "Analyze", body: "Engineers identify technical requirements, missing information, assumptions and the checks the work will need." },
  { index: "03", title: "Estimate / Design", body: "Take-offs, calculations, analysis or design work are produced against the agreed basis." },
  { index: "04", title: "Review", body: "A second engineer checks the output against the brief, the inputs and our internal review protocol." },
  { index: "05", title: "Deliver", body: "Organised, referenced files are issued with a short note covering assumptions, exclusions and open items." },
];

const deliverables = [
  { icon: "table", title: "Bills of Quantities", formats: ["XLSX", "PDF"] },
  { icon: "ruler", title: "Quantity Take-Offs", formats: ["XLSX", "PDF"] },
  { icon: "calculator", title: "Cost Estimates", formats: ["XLSX", "PDF"] },
  { icon: "sigma", title: "Engineering Calculations", formats: ["PDF"] },
  { icon: "layers", title: "Foundation Designs", formats: ["PDF", "DWG"] },
  { icon: "frame", title: "Structural Designs", formats: ["PDF", "DWG"] },
  { icon: "file-text", title: "Technical Reports", formats: ["PDF", "DOCX"] },
  { icon: "pen-tool", title: "Engineering Drawings", formats: ["DWG", "PDF"] },
  { icon: "folder-open", title: "Design Documentation", formats: ["PDF", "ZIP"] },
  { icon: "check-square", title: "Review Documents", formats: ["PDF"] },
];

const clientTypes = [
  { title: "Developers", body: "Budget certainty before commitment, and engineering options compared on cost." },
  { title: "Engineering Consultants", body: "Overflow capacity for take-offs, calculations and documentation during peak load." },
  { title: "Construction Companies", body: "Pre-construction engineering, estimation, design and technical support. Construction execution remains yours — we do not build, install or contract." },
  { title: "Project Management Teams", body: "Independent quantities and technical review to test what has been submitted." },
  { title: "Architects", body: "Structural and foundation engineering support alongside architectural design." },
  { title: "Quantity Surveyors", body: "Measured quantities and BOQ preparation to feed commercial workflows." },
  { title: "Infrastructure Companies", body: "Linear take-offs, earthwork balances and utility quantification." },
  { title: "International Project Owners", body: "A single engineering partner across estimation, design and documentation." },
];

const insights = [
  { category: "Foundation Engineering", title: "Shallow or deep: how foundation selection is actually decided", excerpt: "Ground conditions, load intensity, settlement tolerance and programme — the four inputs that decide a foundation strategy before cost enters the conversation.", read: "8 min", image: window.vvAsset("img-towers-upward-monochrome","../../assets/imagery/towers-upward-monochrome.jpg") },
  { category: "Estimation", title: "What a defensible basis of estimate contains", excerpt: "The drawing register, measurement rules, inclusions and exclusions that turn a number into a document your commercial team can defend.", read: "6 min", image: window.vvAsset("img-engineers-drawings-topdown","../../assets/imagery/engineers-drawings-topdown.jpg") },
  { category: "Quantity Take-Off", title: "Where take-off errors compound on linear infrastructure", excerpt: "Chainage-based measurement, level data quality and the earthwork balance — three places small errors become large ones.", read: "7 min", image: window.vvAsset("img-coastal-viaduct-aerial","../../assets/imagery/coastal-viaduct-aerial.jpg") },
];

const faqs = [
  { q: "Does VectorValue perform construction?", a: "No. VectorValue delivers engineering estimation, design, analysis, documentation and technical consultancy. We do not carry out construction, installation, contracting, excavation or piling works on site." },
  { q: "What types of projects do you support?", a: "Buildings, industrial facilities, site development and civil infrastructure packages — at feasibility, tender or detailed design stage. The work is engineering and commercial documentation rather than site execution." },
  { q: "Do you work with international clients?", a: "Yes. VectorValue is structured for remote engineering delivery to international project teams, working to the drawing standards, measurement rules and file formats your project already uses." },
  { q: "Can you work from our drawings?", a: "Yes — drawings, specifications, tender documents and geotechnical reports are the usual starting point. Where information is missing we list the assumptions we have made instead of leaving them implicit." },
  { q: "How do I start a project?", a: "Send an enquiry through the contact form with the scope and any drawings you can share, or book a call and we will scope it together." },
  { q: "Can I schedule a technical discussion?", a: "Yes. Book a call and you will speak with an engineer about scope, method and deliverables — not a sales call." },
];

const footerColumns = [
  { title: "Explore", links: [{ label: "Home", href: "/" }, { label: "Core Expertise", href: "/core-expertise" }, { label: "About", href: "/about" }, { label: "Careers", href: "/careers" }, { label: "Contact", href: "/contact" }] },
  { title: "Expertise", links: expertise.map((e) => ({ label: e.title, href: "/core-expertise/" + e.slug })) },
  { title: "Connect", links: [{ label: "Book a Call", href: "/book-a-call" }, { label: "Contact", href: "/contact" }, { label: "Email", href: "mailto:YOUR_EMAIL" }, { label: "LinkedIn", href: "#" }] },
];

const seo = {
  "/": { title: "VectorValue | Engineering Estimation, Design & Technical Expertise", description: "VectorValue provides engineering estimation, design, foundation engineering, quantity take-offs and technical documentation for international project teams." },
  "/core-expertise": { title: "Core Expertise | VectorValue", description: "Civil, structural, foundation, quantity, infrastructure and documentation engineering delivered remotely to international project teams." },
  "/about": { title: "About VectorValue | Engineering Value Before Execution", description: "An engineering partner focused on estimation, design and documentation — the decisions made before construction begins." },
  "/careers": { title: "Careers | VectorValue", description: "Engineering, estimation and documentation roles for engineers who care about precision and clear deliverables." },
  "/contact": { title: "Contact | VectorValue", description: "Send a project enquiry for estimation, quantity take-offs, foundation, structural or documentation support." },
  "/book-a-call": { title: "Book a Call | VectorValue", description: "Schedule a technical conversation about your project scope, estimation or design requirements." },
};

Object.assign(window, { companyConfig, TARGET_MARKETS, MARKET_LINKS, navItems, expertise, megaGroups, pillars, process, deliverables, clientTypes, insights, faqs, footerColumns, seo });
