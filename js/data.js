/* ============================================================
   Pinnacle Agribusiness Co. Ltd — site data
   Edit this file to update company info, services, team,
   projects, solutions and insights across the whole site.
   ============================================================ */

const CONFIG = {
  company: {
    name: "Pinnacle Agribusiness Co. Ltd",
    tagline: "Sustainable Solutions, Profitable Futures",
    phone: "+256 780 692 311",
    phoneHref: "+256780692311",
    whatsapp: "+256 758 539 758",
    whatsappHref: "256758539758",
    email: null, // no company email supplied in the source profile — team member emails only
    address: "Kungu A, Kampala District, Uganda",
    hours: "7 days a week, 8:00 AM – 6:00 PM",
    founded: "8 July 2019",
    profileDoc: "assets/documents/pinnacle-company-profile.pdf",
    social: {
      x: "https://x.com/pinnacle_agrib_co_ltd",
      facebook: "https://facebook.com/PinnacleAgriBusinessCoLtd",
      instagram: "https://instagram.com/pinnacle_agrib_co_ltd"
    }
  },
  serviceCategories: ["Consulting","Crop Production","Livestock","Agricultural Engineering","Farm Development","Marketing","Training","Agricultural Inputs","Agritourism"],
  services: [
    { id:"consultancy", cat:"Consulting", icon:"chat", title:"Agribusiness Consultancy", short:"Guidance across every part of running a farm as a business.", detail:"Our consultants help with all aspects of your agribusiness — from seedling production and livestock management through to market research and business plan development.", benefits:["Support tailored to farm size and goals","Access to agronomists, vets and engineers under one roof","Ongoing advisory rather than one-off visits"] },
    { id:"training", cat:"Training", icon:"book", title:"Agribusiness Training &amp; Coaching", short:"Programmes that build the skills to run a profitable farm.", detail:"Our agribusiness trainings and coaching programmes equip farmers with the skills and knowledge needed to succeed, covering both agronomic practice and business fundamentals.", benefits:["Group and on-farm training options","Practical, farmer-first curriculum","Delivered by qualified agribusiness specialists"] },
    { id:"scouting", cat:"Consulting", icon:"search", title:"Farm Scouting &amp; Inspection", short:"On-the-ground review to spot problems before they cost you.", detail:"We offer farm scouting services to identify areas for improvement and recommend solutions to increase productivity and profitability.", benefits:["Early identification of crop and livestock issues","Actionable, written recommendations","Available on and off farm"] },
    { id:"planning", cat:"Consulting", icon:"doc", title:"Business Plan &amp; Proposal Writing", short:"Bankable documents to support funding and growth.", detail:"We help farmers and agribusinesses develop clear, fundable business plans and proposals, drawing on real market research and farm data.", benefits:["Structured for lenders, investors and grant-makers","Grounded in market research","Aligned to your farm's actual capacity"] },
    { id:"structures", cat:"Agricultural Engineering", icon:"build", title:"Farm Structure Construction", short:"Design and construction of the structures a working farm needs.", detail:"Agricultural engineering services covering the construction of farm structures, along with management, repair and maintenance of farm machinery.", benefits:["Structures suited to Ugandan climate and terrain","Engineering oversight from a qualified agricultural engineer","Ongoing maintenance and repair support"] },
    { id:"agronomy", cat:"Crop Production", icon:"leaf", title:"Agronomy Advisory", short:"Crop-focused guidance to lift yield and quality.", detail:"Hands-on agronomic advisory covering crop choice, husbandry and field management, delivered by our agronomist and field team.", benefits:["Season-by-season crop planning","Practical field visits","Advice matched to local soil and climate"] },
    { id:"livestock", cat:"Livestock", icon:"animal", title:"Livestock Management Advisory", short:"Veterinary-informed guidance for healthier, more productive herds.", detail:"Livestock management advisory led by our veterinary manager, covering herd health, housing, feeding and productivity.", benefits:["Veterinary-informed guidance","Covers poultry, piggery and larger livestock","Feed and housing recommendations"] },
    { id:"marketing", cat:"Marketing", icon:"chart", title:"Commodity Marketing &amp; Digital Market Linkages", short:"Connecting produce to buyers, on and offline.", detail:"Agricultural commodity digital marketing and market linkages that connect farmers to buyers and up-to-date market trend information.", benefits:["Digital marketing of farm produce","Market linkage support","Ongoing market trend updates"] },
    { id:"soil", cat:"Consulting", icon:"soil", title:"Soil Sampling &amp; Testing", short:"Know your soil before you plant.", detail:"Soil sampling and testing to inform fertiliser choice, crop selection and land management decisions.", benefits:["Data-led planting decisions","Reduces wasted input spend","Pairs with our agronomy advisory"] },
    { id:"seedlings", cat:"Crop Production", icon:"seed", title:"Seedling Production", short:"Vegetables, spices, herbs and fruit tree seedlings, on order.", detail:"Supply of vegetables, spices, herbs and fruit tree seedlings arranged on order, supporting farmers from the very start of the growing cycle.", benefits:["Order-based supply arrangement","Wide range of crop types","Quality-checked planting material"] },
    { id:"urban", cat:"Farm Development", icon:"city", title:"Urban &amp; Peri-Urban Mini Farm Gardening", short:"Productive growing in small backyard and peri-urban spaces.", detail:"Backyard gardening and urban/peri-urban mini farm setup for households and small landholders looking to grow their own food or a small business.", benefits:["Designed for limited space","Good entry point for new farmers","Can scale into commercial production"] },
    { id:"engineering", cat:"Agricultural Engineering", icon:"gear", title:"Agricultural Engineering &amp; Machinery", short:"Design, repair and maintenance of farm machinery and equipment.", detail:"Agricultural engineering services covering machinery management, repair and maintenance, delivered by a BSc-qualified agricultural engineer.", benefits:["Reduces machinery downtime","Engineer-led design and inspection","Covers construction and mechanical work"] },
    { id:"agritourism", cat:"Agritourism", icon:"camera", title:"Agritourism", short:"Opening farms to visitors to educate, inspire and generate revenue.", detail:"We organise and open up farms to tourists and visitors, generating additional revenue for the firm while educating and inspiring people to join agriculture through live field experience.", benefits:["New revenue stream for host farms","Builds public interest in agriculture","Hands-on visitor experiences"] },
    { id:"inputs", cat:"Agricultural Inputs", icon:"box", title:"Agro-Input Dealership", short:"Fertilisers, pesticides, herbicides, machinery and equipment on order.", detail:"Supply and distribution of agricultural inputs ranging from fertilisers, pesticides and herbicides to farm machinery and equipment, based on order.", benefits:["Single source for key inputs","Order-based, so no guesswork on stock","Paired with agronomic advice"] },
    { id:"realestate", cat:"Farm Development", icon:"land", title:"Farm Real Estate Agency Services", short:"Help finding land for agricultural production, for hire or sale.", detail:"Assistance with land acquisition for agricultural production, whether the client is looking to hire or purchase land.", benefits:["Land sourcing support","Suited to new and expanding farms","Coordinated with farm setup services"] }
  ],
  solutions: [
    { title:"Smallholder Farmers", desc:"Farmers growing for the household and local market.", points:["Backyard and urban mini-farm setup","Seedling supply and basic agronomy advisory","Entry-level training and coaching"] },
    { title:"Commercial Farmers", desc:"Established farms scaling production and revenue.", points:["Farm scouting and productivity reviews","Livestock and agronomy advisory","Machinery maintenance and farm structures"] },
    { title:"Agribusinesses &amp; SMEs", desc:"Businesses trading in or around agriculture.", points:["Business plan and proposal writing","Commodity marketing and market linkages","Agro-input supply arrangements"] },
    { title:"NGOs &amp; Development Projects", desc:"Organisations running farmer-facing programmes.", points:["Farmer training and coaching delivery","Field scouting and monitoring support","Agronomy and livestock advisory at scale"] },
    { title:"Companies &amp; Investors", desc:"Capital or corporate partners entering agriculture.", points:["Farm real estate and land acquisition support","Business planning grounded in market research","Farm structure construction and setup"] },
    { title:"Agricultural Projects", desc:"Multi-partner or donor-funded agricultural initiatives.", points:["Agricultural engineering and infrastructure","Soil sampling and testing","Agritourism and community engagement"] }
  ],
  eac: ["Uganda","South Sudan","Kenya","Tanzania","Rwanda","Burundi"],
  team: [
    { name:"Sam Kundu", role:"Co-Founder — Agriculture", loc:"Kampala District, Uganda", photo:"assets/images/team/sam-kundu.jpg", email:"kundusam32@gmail.com", whatsapp:"256780692311", linkedin:"https://www.linkedin.com/in/sam-kundu", twitter:"https://twitter.com/sam_kundu", facebook:"https://facebook.com/KunduSam",
      bio:"Co-founder of Pinnacle Agribusiness Co. Ltd with over five years of experience in agriculture. Holds a bachelor's degree in Agribusiness Management from Makerere University, and is currently enrolled for a Master of Science in Agricultural and Applied Economics at the same institution.",
      more:"Has worked with Hortifresh Fresh Fruits and Vegetables Association, KK Fresh Produce Exporters Limited, Roohaz Agro-Farm Limited, Youths Development Association and Empower East Africa Limited." },
    { name:"Moro Oscar Cassius", role:"Co-Founder — Agribusiness", loc:"Yabus, Sudan", photo:"assets/images/team/moro-oscar-cassius.jpg", email:"moro.cassius@yahoo.com", whatsapp:"211922016002", linkedin:"https://www.linkedin.com/in/moro-c-oscar-71057718b/", twitter:"https://twitter.com/moro_coscar", facebook:"https://facebook.com/MoroCOscar", instagram:"https://instagram.com/moroc.oscar",
      bio:"An experienced, dynamic agribusiness professional with over four years in the agribusiness and food industry, with interests in agritech, digital marketing, research, small business management and community development. Holds a Bachelor of Agribusiness Management (Hons.) from the College of Agriculture and Environmental Sciences, Makerere University.",
      more:"A philanthropist who has interned and worked with KK Fresh Produce Exporters Limited, Roohaz Agro-Farm Limited and Empower East Africa Limited. Currently a humanitarian worker with the National Christian Development Organization (NCDO) in Blue Nile, Sudan." },
    { name:"Banyendera Robinah", role:"Agribusiness", loc:"Kampala District, Uganda (from Kisoro District)", photo:"assets/images/team/banyendera-robinah.jpg", email:"rbanyendera@gmail.com", whatsapp:"256787270265", linkedin:"https://www.linkedin.com/in/Banyendera-robinah", facebook:"https://facebook.com/RobinahRobi",
      bio:"Holds a Bachelor's degree in Agribusiness Management from Makerere University's College of Agricultural and Environmental Sciences. Self-motivated, reliable and adaptable, with a strong work ethic across her assignments.",
      more:"Gained experience through internships with Bukalasa Agricultural Farm, Empower East Africa Co. Ltd, and KK Fresh Produce Exporters Ltd." },
    { name:"Eng. Fred Mark Abigaba", role:"Agricultural Engineer", loc:"Uganda", photo:"assets/images/team/fred-mark-abigaba.jpg", email:"fredmarkabigaba@gmail.com", whatsapp:"256778857363", phone:"+256751713649", linkedin:"https://www.linkedin.com/in/abigaba-fredmark", twitter:"https://twitter.com/AbigabaFredmark", instagram:"https://instagram.com/interlaxmark",
      bio:"Holds a BSc in Agricultural Engineering from Makerere University. Has worked with Roofings Limited (Lubowa Estate, Entebbe Road) in maintenance and machine design, and completed graduate training with MAAIF's Department of Agricultural Infrastructure, Mechanization and Water for Agricultural Production.",
      more:"Currently with IntelliSys Limited Uganda on the MakSol Cooker innovation in collaboration with Makerere University's Department of Agriculture and Bio-systems Engineering. Holds a Diploma in Construction Project Management and has managed commercial, residential and farm structure projects; also an agriculturalist in vegetables and cash crops." }
  ],
  projectCategories: ["All","Farm Structures","Field Work","Post-Harvest","Training"],
  projects: [
    { title:"Farm Structure Construction", cat:"Farm Structures", desc:"Design and construction of farm structures for client farms, led by our agricultural engineering team.", location:"Central Uganda", services:"Agricultural Engineering, Farm Structure Construction", placeholder:false },
    { title:"Farm Scouting &amp; Inspection Visit", cat:"Field Work", desc:"On-site scouting to assess crop condition and flag improvement areas for a partner farm.", location:"Central Uganda", services:"Farm Scouting, Agronomy Advisory", image:"assets/images/gallery/field-scouting-visit.jpg", placeholder:false },
    { title:"Pack House Operations", cat:"Post-Harvest", desc:"Staff sorting and grading produce, including chilli, at a partner pack house facility.", location:"Central Uganda", services:"Post-Harvest Handling, Commodity Marketing", image:"assets/images/gallery/pack-house-sorting.jpg", placeholder:false },
    { title:"Chilli Sorting &amp; Grading", cat:"Post-Harvest", desc:"Team members sorting harvested chilli for market, part of ongoing commodity marketing work.", location:"Central Uganda", services:"Commodity Marketing", image:"assets/images/gallery/chilli-sorting-crates.jpg", placeholder:false },
    { title:"Seedling Production Cycle", cat:"Field Work", desc:"Placeholder project entry — add details of a completed seedling production project here.", location:"To be added", services:"Seedling Production", image:"assets/images/gallery/urban-garden-beds.jpg", placeholder:true },
    { title:"Farmer Training Session", cat:"Training", desc:"Placeholder project entry — add details of a completed farmer training programme here.", location:"To be added", services:"Training &amp; Coaching", image:"assets/images/gallery/farmer-training-session.jpg", placeholder:true }
  ],
  gallery: [
    { src:"assets/images/gallery/pack-house-sorting.jpg", caption:"Pack house team sorting and grading produce" },
    { src:"assets/images/gallery/chilli-sorting-crates.jpg", caption:"Chilli sorting and grading for market" },
    { src:"assets/images/gallery/field-scouting-visit.jpg", caption:"Field scouting on a partner farm" },
    { src:"assets/images/gallery/farmer-training-session.jpg", caption:"Farmer training session in the field" },
    { src:"assets/images/gallery/urban-garden-beds.jpg", caption:"Raised-bed urban garden setup" },
    { src:"assets/images/gallery/avocado-produce.jpg", caption:"Produce from a client farm" },
    { src:"assets/images/gallery/grain-and-planning.jpg", caption:"Grain stock and farm business planning" },
    { src:"assets/images/gallery/produce-harvest-bowl.jpg", caption:"Fresh harvest ready for market" }
  ],
  articleCategories: ["All","Farm Guides","Market Info","Training","News"],
  articles: [
    { title:"Reading a Soil Test Report", cat:"Farm Guides", date:"2026-01", excerpt:"What the key figures in a soil test — pH, nitrogen, phosphorus and potassium — actually mean for what you plant next." },
    { title:"Preparing Land for the Next Planting Season", cat:"Farm Guides", date:"2025-12", excerpt:"A step-by-step look at clearing, ploughing and bed preparation ahead of the rains." },
    { title:"Understanding Commodity Price Trends", cat:"Market Info", date:"2025-11", excerpt:"Why produce prices move through the season, and how to plan sales around them." },
    { title:"Getting Started with Drip Irrigation", cat:"Farm Guides", date:"2025-10", excerpt:"The basics of setting up a simple drip system for a smallholder plot." },
    { title:"What Makes a Farm Business Plan Bankable", cat:"Training", date:"2025-09", excerpt:"The sections lenders and grant-makers actually look for in an agribusiness plan." },
    { title:"Backyard Gardening in Urban Kampala", cat:"Farm Guides", date:"2025-08", excerpt:"Making the most of small spaces for vegetables, herbs and fruit trees." }
  ]
};

const ICONS = {
  chat:'<path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/>',
  book:'<path d="M4 4h11a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3Z"/><path d="M4 4v13"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  doc:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h6"/>',
  build:'<path d="m14.7 6.3 3 3L7 20l-4 1 1-4Z"/><path d="M13 4l3 3"/>',
  leaf:'<path d="M11 20A7 7 0 0 1 4 13a13 13 0 0 1 13-13c0 7-4 9-6 10-2 1-2 5 0 10Z"/>',
  animal:'<circle cx="12" cy="13" r="6"/><path d="M9 8V5M15 8V5M7 13h.01M17 13h.01"/>',
  chart:'<path d="M4 20V10M12 20V4M20 20v-7"/>',
  soil:'<path d="M3 12h18M3 12a9 4 0 0 0 18 0M3 12a9 4 0 0 1 18 0"/>',
  seed:'<path d="M12 22c5-4 8-8 8-13a8 8 0 0 0-16 0c0 5 3 9 8 13Z"/>',
  city:'<path d="M4 21V9l6-4 6 4v12"/><path d="M16 21V13l4 2v6"/>',
  gear:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',
  camera:'<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2Z"/><circle cx="12" cy="13" r="4"/>',
  box:'<path d="M21 8 12 3 3 8v8l9 5 9-5Z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
  land:'<path d="M3 21h18M5 21V9l7-5 7 5v12"/><path d="M9 21v-6h6v6"/>'
};
