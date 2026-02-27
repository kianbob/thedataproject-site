export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
}

export const articles: Article[] = [
  {
    slug: "launching-openmedicare",
    title: "Launching OpenMedicare: AI-Powered Medicare Fraud Detection Across $854B in Payments",
    description: "How we built a machine learning pipeline to analyze 96 million Medicare payment records, flag 500 high-risk providers, and uncover $2.8B in COVID-era anomalies.",
    date: "2026-02-23",
    content: `
      <p class="text-lg text-gray-600 mb-8">Today we're launching <a href="https://www.openmedicare.us" class="text-teal-700 hover:underline font-medium">OpenMedicare</a> — a free, searchable platform covering <strong>ten years of Medicare physician payment data</strong> from the Centers for Medicare &amp; Medicaid Services. The dataset spans 2014–2023, encompasses <strong>96 million rows</strong> of provider-level payment records, and represents <strong>$854.8 billion</strong> in total Medicare spending. For the first time, anyone can explore where Medicare dollars go, compare providers, and see which ones our fraud model flags as high-risk.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">The Scale of Medicare Spending</h2>
      <p class="text-gray-600 mb-4">Medicare is the federal health insurance program covering 65 million Americans — primarily seniors and people with disabilities. The physician payment data we've indexed reveals striking patterns in how that money flows.</p>
      <p class="text-gray-600 mb-4">Across the decade, <strong>1.72 million unique providers</strong> billed Medicare. The average markup ratio — what Medicare paid versus what providers charged — stands at <strong>3.77x</strong>, meaning providers routinely charge nearly four times what they actually receive. While this is standard practice in medical billing, the variation across providers and specialties tells a more nuanced story.</p>
      <p class="text-gray-600 mb-4">Our analysis also identified <strong>4,636 "impossible" providers</strong> — practitioners whose billing patterns defy normal medical practice. These include providers billing for an implausible number of patients per day, billing across incompatible specialties simultaneously, or showing geographic patterns inconsistent with a single practice location.</p>

      <div class="bg-teal-50 border-l-4 border-teal-700 p-6 my-8 rounded-r-lg">
        <p class="text-2xl font-bold text-teal-800">$854.8 billion in payments analyzed</p>
        <p class="text-teal-700">96 million records across 1.72 million providers over ten years — every dollar searchable and explorable.</p>
      </div>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Machine Learning Fraud Detection</h2>
      <p class="text-gray-600 mb-4">The centerpiece of OpenMedicare is our ML fraud detection model. We trained a classifier using the HHS Office of Inspector General's <strong>List of Excluded Individuals and Entities (LEIE)</strong> — a database of providers who have been officially sanctioned for fraud, abuse, or other misconduct.</p>
      <p class="text-gray-600 mb-4">By matching <strong>8,300+ confirmed fraudsters</strong> from the LEIE against their historical Medicare billing patterns, we built a model that learns what fraudulent billing looks like: unusually high volumes, suspicious procedure mixes, billing spikes, and geographic anomalies.</p>
      <p class="text-gray-600 mb-4">The model achieves an <strong>AUC of 0.83</strong> — meaning it correctly distinguishes between fraudulent and legitimate providers 83% of the time. Applied to the full Medicare dataset, it has flagged <strong>approximately 500 providers</strong> as high-risk for potential fraud, waste, or abuse. Each flagged provider's profile on OpenMedicare includes the risk score and the contributing factors.</p>
      <p class="text-gray-600 mb-4">To be clear: a fraud flag is not an accusation. It indicates statistical patterns consistent with known fraud cases and warrants further investigation. Our goal is to surface leads, not render verdicts.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Key Findings</h2>
      <p class="text-gray-600 mb-4">Beyond the fraud model, our analysis of ten years of Medicare data has surfaced several significant patterns:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><strong>$2.8 billion in COVID-era anomalies:</strong> During 2020–2021, certain providers and specialties showed dramatic billing spikes inconsistent with their historical patterns — some legitimate (telehealth expansion), others suspicious (billing for services unlikely to have been delivered during lockdowns).</li>
        <li><strong>$5.5 billion wound care cluster:</strong> A concentrated group of wound care providers collectively billed $5.5 billion, with billing patterns that diverge sharply from the specialty's norms. Wound care has been flagged by the OIG as a high-fraud specialty, and our data confirms the concern at scale.</li>
        <li><strong>3.77x average markup ratio:</strong> While standard in medical billing, the variance is enormous — some providers charge 10x or more what Medicare pays, raising questions about list pricing practices.</li>
        <li><strong>4,636 impossible providers:</strong> Billing patterns that defy the constraints of time, geography, or medical plausibility — strong candidates for further investigation.</li>
      </ul>

      <div class="bg-teal-50 border-l-4 border-teal-700 p-6 my-8 rounded-r-lg">
        <p class="text-2xl font-bold text-teal-800">500 providers flagged by ML model</p>
        <p class="text-teal-700">Trained on 8,300+ LEIE-confirmed fraudsters with an AUC of 0.83 — surfacing high-risk billing patterns for further investigation.</p>
      </div>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Part of TheDataProject Portfolio</h2>
      <p class="text-gray-600 mb-4">OpenMedicare joins our growing suite of government transparency platforms:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><a href="https://www.openmedicaid.org" class="text-teal-700 hover:underline font-medium">OpenMedicaid</a> — $1.09 trillion in Medicaid provider payments across all 50 states</li>
        <li><a href="https://www.openfeds.org" class="text-teal-700 hover:underline font-medium">OpenFeds</a> — 2.07 million federal employees, DOGE tracking, brain drain analysis</li>
        <li><a href="https://www.openspending.us" class="text-teal-700 hover:underline font-medium">OpenSpending</a> — $11.2 trillion in federal contracts, grants, and agency expenditures</li>
      </ul>
      <p class="text-gray-600 mb-4">Together, these platforms represent the most comprehensive open-access window into federal healthcare and government spending available anywhere. Medicare and Medicaid alone account for over $1.9 trillion annually — nearly a third of all federal spending. Making this data searchable and analyzable isn't just a technical project; it's an accountability project.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Explore OpenMedicare</h2>
      <p class="text-gray-600 mb-4">Visit <a href="https://www.openmedicare.us" class="text-teal-700 hover:underline font-medium">openmedicare.us</a> to search any Medicare provider, view their billing history and peer comparisons, check fraud risk scores, and explore ten years of payment data. Everything is free, open, and requires no account.</p>
      <p class="text-gray-600">OpenMedicare is built by <a href="/" class="text-teal-700 hover:underline font-medium">TheDataProject.AI</a> — making public data usable, searchable, and accessible to everyone.</p>
    `,
  },
  {
    slug: "tracking-medicaid-spending",
    title: "How We Track $1.09 Trillion in Medicaid Spending",
    description: "Inside OpenMedicaid — the platform turning HHS provider payment data into fraud detection insights across all 50 states.",
    date: "2026-02-20",
    content: `
      <p class="text-lg text-gray-600 mb-8">Medicaid is the largest source of federal funding to states, covering over 90 million Americans. In fiscal year 2023, the program distributed <strong>$1.09 trillion</strong> in provider payments. Yet until now, there has been no single, searchable public platform to explore where that money goes. That's why we built <a href="https://www.openmedicaid.org" class="text-teal-700 hover:underline font-medium">OpenMedicaid</a>.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">The Data Behind the Platform</h2>
      <p class="text-gray-600 mb-4">OpenMedicaid ingests provider-level spending data published by the U.S. Department of Health and Human Services (HHS). This dataset covers every provider who billed Medicaid — doctors, hospitals, pharmacies, clinics, and specialists — across all 50 states, D.C., and U.S. territories.</p>
      <p class="text-gray-600 mb-4">We process <strong>227 million+ records</strong> spanning multiple years, linking provider identities, specialties, geographic regions, procedure codes, and payment amounts into a unified, searchable database.</p>
      <p class="text-gray-600 mb-4">The raw HHS data arrives as massive flat files — difficult to query, impossible to visualize, and practically unusable for journalists, researchers, or concerned citizens. Our pipeline normalizes this data, resolves provider identities across years, and builds the indexes that make instant search possible.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Fraud Detection: Statistical and ML Approaches</h2>
      <p class="text-gray-600 mb-4">Medicaid fraud costs taxpayers an estimated $80–100 billion per year. OpenMedicaid doesn't just display data — it actively flags anomalies.</p>
      <p class="text-gray-600 mb-4">Our fraud detection system uses a layered approach:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><strong>Statistical outlier detection:</strong> Providers billing significantly above peer averages for the same procedures in the same state are flagged. We use z-score analysis and interquartile range methods to identify billing patterns that deviate from the norm.</li>
        <li><strong>Specialty-based benchmarking:</strong> A cardiologist billing 10x the national average for echocardiograms isn't necessarily fraudulent — but it warrants scrutiny. We benchmark within specialty and geography.</li>
        <li><strong>Machine learning classification:</strong> Using historical patterns of confirmed fraud cases, we train models to recognize suspicious billing combinations — things like unusually high volumes of expensive procedures, billing for incompatible services, or sudden spikes in claims.</li>
        <li><strong>Network analysis:</strong> Some fraud involves rings of providers referring patients to each other. We map referral networks and flag unusually dense clusters.</li>
      </ul>

      <div class="bg-teal-50 border-l-4 border-teal-700 p-6 my-8 rounded-r-lg">
        <p class="text-2xl font-bold text-teal-800">1,860 providers flagged</p>
        <p class="text-teal-700">These flagged providers collectively billed <strong>$229.6 billion</strong> — representing potential fraud, waste, or abuse that deserves investigation.</p>
      </div>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Key Findings</h2>
      <p class="text-gray-600 mb-4">Our analysis has uncovered striking patterns:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li>The top 1% of providers by billing volume account for a disproportionate share of total Medicaid spending</li>
        <li>Certain procedure codes show extreme geographic variation — suggesting either different medical practices or different billing practices</li>
        <li>Provider turnover rates in some states correlate with higher fraud flag rates, suggesting "pop-up" billing operations</li>
        <li>1,860 providers have been flagged across our detection systems, collectively billing $229.6 billion</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">What You Can Do With OpenMedicaid</h2>
      <p class="text-gray-600 mb-4">The platform is built for multiple audiences:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><strong>Journalists</strong> can search any provider, see their billing history, compare them to peers, and identify stories</li>
        <li><strong>Researchers</strong> can analyze spending patterns by state, specialty, procedure, or year</li>
        <li><strong>Policy makers</strong> can see where Medicaid dollars flow and identify areas for reform</li>
        <li><strong>Citizens</strong> can look up their own providers and understand how public money is spent</li>
      </ul>
      <p class="text-gray-600 mb-4">Every search, every filter, every visualization is free and open to everyone. No paywall, no login required.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Explore the Data</h2>
      <p class="text-gray-600 mb-4">Visit <a href="https://www.openmedicaid.org" class="text-teal-700 hover:underline font-medium">openmedicaid.org</a> to start exploring. Search by provider name, state, specialty, or procedure. View fraud risk scores, billing trends, and peer comparisons. All data is sourced directly from HHS and updated regularly.</p>
      <p class="text-gray-600">OpenMedicaid is one of 134 data platforms built by <a href="/" class="text-teal-700 hover:underline font-medium">TheDataProject.AI</a> — all dedicated to making public data usable, searchable, and accessible to everyone.</p>
    `,
  },
  {
    slug: "federal-brain-drain",
    title: "The Federal Brain Drain: What OPM Data Reveals",
    description: "How OpenFeds tracks 2.07 million federal employees, the DOGE impact, and the looming retirement cliff across 128 agencies.",
    date: "2026-02-18",
    content: `
      <p class="text-lg text-gray-600 mb-8">The federal workforce is experiencing a seismic shift. Mass layoffs, hiring freezes, early retirement incentives, and political restructuring are reshaping the government at an unprecedented pace. <a href="https://www.openfeds.org" class="text-teal-700 hover:underline font-medium">OpenFeds</a> tracks it all — <strong>2.07 million employees</strong> across <strong>128 agencies</strong> — using data from the Office of Personnel Management (OPM).</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">The $49,000 Salary Gap</h2>
      <p class="text-gray-600 mb-4">One of the most striking findings from our analysis of OPM data is the salary gap between employees who leave federal service and their replacements.</p>
      <p class="text-gray-600 mb-4">On average, departing federal employees earned <strong>$49,000 more</strong> than the new hires brought in to replace them. This isn't just about saving money — it represents a massive loss of institutional knowledge and expertise.</p>
      <p class="text-gray-600 mb-4">Senior GS-14 and GS-15 employees with decades of experience in areas like procurement, policy analysis, and program management are being replaced — when they're replaced at all — by entry-level staff who will take years to develop equivalent competency.</p>

      <div class="bg-teal-50 border-l-4 border-teal-700 p-6 my-8 rounded-r-lg">
        <p class="text-2xl font-bold text-teal-800">$49K average salary gap</p>
        <p class="text-teal-700">Between departing federal employees and their replacements — representing institutional knowledge loss that can't be measured in dollars alone.</p>
      </div>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">The Retirement Cliff</h2>
      <p class="text-gray-600 mb-4">The federal workforce has a demographics problem that predates any political administration. Across many agencies, a staggering percentage of the workforce is approaching retirement eligibility.</p>
      <p class="text-gray-600 mb-4">The numbers are alarming:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><strong>54.5% of the Selective Service System</strong> workforce is near retirement eligibility</li>
        <li>Multiple agencies have 30%+ of their workforce within five years of retirement</li>
        <li>Technical agencies (NASA, DOE national labs, NIST) face the steepest cliffs in specialized roles</li>
        <li>The problem compounds: as senior staff retire, mid-career employees are promoted, creating gaps at every level</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">DOGE Impact: 10,721 RIFs in 2025</h2>
      <p class="text-gray-600 mb-4">The Department of Government Efficiency (DOGE) initiative has accelerated workforce reduction through Reductions in Force (RIFs). In 2025 alone, <strong>10,721 RIFs</strong> have been executed across the federal government.</p>
      <p class="text-gray-600 mb-4">OpenFeds tracks these in real-time, mapping which agencies are most affected, which job series are being eliminated, and what the downstream effects look like. Our DOGE impact tracker shows:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li>Which agencies have seen the largest percentage workforce reductions</li>
        <li>The geographic distribution of layoffs — which communities are most affected</li>
        <li>How RIFs compare to natural attrition and voluntary separations</li>
        <li>The skill sets being lost and whether they can realistically be replaced</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">What the Data Shows</h2>
      <p class="text-gray-600 mb-4">Beyond the headline numbers, OpenFeds provides granular analysis that tells a more nuanced story:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><strong>Salary explorer:</strong> Compare compensation across agencies, job series, and locations. See how federal pay compares to private sector equivalents.</li>
        <li><strong>Brain drain analysis:</strong> Track which agencies are losing the most experienced employees and whether hiring is keeping pace.</li>
        <li><strong>Workforce trends:</strong> See how agency sizes have changed over time — some agencies have grown while others have contracted dramatically.</li>
        <li><strong>Agency profiles:</strong> Deep dives into each of the 128 agencies we track, including demographics, pay distributions, and turnover rates.</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Why This Matters</h2>
      <p class="text-gray-600 mb-4">The federal workforce isn't abstract — these are the people who process Social Security checks, inspect food safety, manage air traffic control, conduct medical research, and maintain national defense. When institutional knowledge walks out the door, the effects ripple through every program and service the government provides.</p>
      <p class="text-gray-600 mb-4">OpenFeds makes this visible. Visit <a href="https://www.openfeds.org" class="text-teal-700 hover:underline font-medium">openfeds.org</a> to explore the data, track DOGE impacts, and understand what's happening to the federal workforce in real-time.</p>
    `,
  },
  {
    slug: "federal-spending-breakdown",
    title: "Where $11.2 Trillion in Federal Spending Actually Goes",
    description: "OpenSpending tracks every contract, grant, and agency expenditure — revealing contractor monopolies, the DOGE reality check, and where your tax dollars end up.",
    date: "2026-02-16",
    content: `
      <p class="text-lg text-gray-600 mb-8">The federal government spent <strong>$11.2 trillion</strong> in recent fiscal years. That number is so large it loses meaning. <a href="https://www.openspending.us" class="text-teal-700 hover:underline font-medium">OpenSpending</a> breaks it down into something you can actually understand — every contract, every grant, every agency, searchable and explorable.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">The Contractor Monopoly Problem</h2>
      <p class="text-gray-600 mb-4">One of the most eye-opening findings from our analysis: <strong>just 10 companies receive $183 billion</strong> in federal contracts. The concentration of taxpayer money in a handful of defense and technology contractors raises serious questions about competition, pricing, and accountability.</p>
      <p class="text-gray-600 mb-4">OpenSpending lets you explore the full contractor landscape:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li>Search any company to see their total federal contract value</li>
        <li>Compare contractors within the same industry or agency</li>
        <li>Track how contract values have changed year over year</li>
        <li>Identify sole-source contracts vs. competitive bids</li>
      </ul>

      <div class="bg-teal-50 border-l-4 border-teal-700 p-6 my-8 rounded-r-lg">
        <p class="text-2xl font-bold text-teal-800">10 companies → $183 billion</p>
        <p class="text-teal-700">The top 10 federal contractors receive more than the GDP of most countries. OpenSpending makes this concentration visible.</p>
      </div>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Interest Exceeds Defense: $952 Billion</h2>
      <p class="text-gray-600 mb-4">Here's a number that should concern every American: the federal government now spends <strong>$952 billion per year on interest payments</strong> alone. That exceeds the entire defense budget.</p>
      <p class="text-gray-600 mb-4">OpenSpending visualizes this in context — showing how interest payments have grown over time, how they compare to discretionary spending categories, and what it means for the programs Americans depend on. When nearly a trillion dollars goes to servicing debt before a single road is paved or a single student receives a loan, the fiscal picture becomes starkly clear.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">The DOGE Reality Check</h2>
      <p class="text-gray-600 mb-4">The Department of Government Efficiency has claimed <strong>$55 billion in savings</strong>. But our analysis of actual spending data tells a different story: federal spending <strong>grew by $390 billion</strong> during the same period.</p>
      <p class="text-gray-600 mb-4">OpenSpending's DOGE tracker compares claimed savings against actual expenditures, providing a reality check grounded in data rather than press releases. Users can:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li>See claimed savings vs. actual spending changes by agency</li>
        <li>Track whether "efficiency" measures actually reduced expenditures</li>
        <li>Compare DOGE-targeted agencies to non-targeted ones</li>
        <li>View the net fiscal impact after accounting for all changes</li>
      </ul>

      <div class="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
        <p class="text-2xl font-bold text-red-800">DOGE claimed $55B saved</p>
        <p class="text-red-700">Meanwhile, federal spending grew by $390B. The data tells a story the headlines don't.</p>
      </div>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">The Interactive Tax Calculator</h2>
      <p class="text-gray-600 mb-4">One of OpenSpending's most popular features is the tax calculator. Enter your annual income, and we'll show you exactly where your federal tax dollars go — broken down by category, agency, and program.</p>
      <p class="text-gray-600 mb-4">It's one thing to know the government spends $11.2 trillion. It's another to see that $1,247 of <em>your</em> taxes went to interest payments, $983 went to defense, and $42 went to NASA. Making spending personal makes it real.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Every Dollar, Searchable</h2>
      <p class="text-gray-600 mb-4">OpenSpending processes data from USASpending.gov, the Federal Procurement Data System, and agency financial reports to create a unified, searchable platform. Every contract, every grant, every intergovernmental transfer — indexed, categorized, and made accessible.</p>
      <p class="text-gray-600 mb-4">Visit <a href="https://www.openspending.us" class="text-teal-700 hover:underline font-medium">openspending.us</a> to explore federal spending, check DOGE claims against reality, calculate your tax breakdown, and see where $11.2 trillion actually goes.</p>
    `,
  },
  {
    slug: "building-with-ai",
    title: "Building 134 Data Platforms with AI",
    description: "How TheDataProject.AI uses Claude, Python, and Next.js to turn massive government datasets into free, searchable platforms at unprecedented scale.",
    date: "2026-02-15",
    content: `
      <p class="text-lg text-gray-600 mb-8">TheDataProject.AI operates <strong>134 data platforms</strong> across <strong>17 domains</strong>, containing over <strong>375 million searchable records</strong>. Building this at any traditional pace would require years and a large engineering team. We did it with AI.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">The Mission</h2>
      <p class="text-gray-600 mb-4">Government data is technically "public" — but practically inaccessible. It's buried in massive CSV files, locked behind clunky query interfaces, spread across dozens of agency websites, and formatted in ways that require technical expertise to parse.</p>
      <p class="text-gray-600 mb-4">Our mission is simple: take every significant public dataset and turn it into something a normal person can actually use. Search it, filter it, understand it, share it. No data science degree required.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">The Stack</h2>
      <p class="text-gray-600 mb-4">Every platform in our portfolio follows a similar architecture, refined over dozens of iterations:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><strong>Data ingestion:</strong> Python scripts download, parse, and normalize raw data from government sources (HHS, OPM, USASpending, FEC, FDA, Census, and more)</li>
        <li><strong>Processing pipeline:</strong> We clean, deduplicate, link entities across datasets, calculate derived metrics, and build search indexes</li>
        <li><strong>Frontend:</strong> Next.js with TypeScript provides fast, SEO-friendly interfaces with instant search, filtering, and data visualization</li>
        <li><strong>AI assistance:</strong> Claude helps write data pipelines, generate analysis code, build UI components, and draft content — accelerating development by 10-20x</li>
      </ul>

      <div class="bg-teal-50 border-l-4 border-teal-700 p-6 my-8 rounded-r-lg">
        <p class="text-2xl font-bold text-teal-800">134 sites. 375M+ records. 17 domains.</p>
        <p class="text-teal-700">From healthcare to elections, education to transportation — every platform is free and open to everyone.</p>
      </div>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">How AI Changes the Equation</h2>
      <p class="text-gray-600 mb-4">The traditional approach to building a data platform involves months of work: understanding the data schema, writing ETL pipelines, designing the database, building the API, creating the frontend, and writing documentation. For 134 platforms, that's years of engineering time.</p>
      <p class="text-gray-600 mb-4">AI collapses this timeline dramatically:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><strong>Schema understanding:</strong> Feed Claude a data dictionary and sample records, and it can generate the entire ingestion pipeline in minutes</li>
        <li><strong>Code generation:</strong> Standard patterns (search, filtering, pagination, visualization) are generated from templates and customized per dataset</li>
        <li><strong>Analysis:</strong> AI can identify interesting patterns, outliers, and story-worthy findings in datasets we might not have time to manually explore</li>
        <li><strong>Content:</strong> Each platform needs explanatory content — what the data means, how to use it, what to look for. AI drafts this, humans refine it</li>
      </ul>
      <p class="text-gray-600 mb-4">The result is that a platform that might take a team of engineers 3-6 months can be built in days. Not because AI replaces engineering judgment — but because it handles the repetitive 80% while humans focus on the critical 20%.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">The Scale of the Data</h2>
      <p class="text-gray-600 mb-4">Our platforms span an extraordinary range of public data:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><strong>Healthcare:</strong> Medicaid payments, Medicare data, FDA approvals, hospital quality metrics</li>
        <li><strong>Government:</strong> Federal workforce data, spending records, contract awards, grant distributions</li>
        <li><strong>Elections:</strong> Campaign contributions, donor records, PAC spending, lobbying disclosures</li>
        <li><strong>Education:</strong> School performance, university data, student outcomes, funding distribution</li>
        <li><strong>Transportation:</strong> FAA data, vehicle safety records, infrastructure spending</li>
        <li><strong>Finance:</strong> SEC filings, FDIC bank data, CFPB complaints, economic indicators</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Why It Matters</h2>
      <p class="text-gray-600 mb-4">Democracy depends on informed citizens. But information isn't useful if it's inaccessible. When Medicaid fraud detection data sits in HHS flat files that only data scientists can parse, the public can't hold providers accountable. When federal spending data requires SQL expertise to query, taxpayers can't see where their money goes.</p>
      <p class="text-gray-600 mb-4">Every platform we build removes a barrier between the public and their own data. That's not just a technical achievement — it's a democratic one.</p>
      <p class="text-gray-600">Explore all 134 platforms at <a href="/sites" class="text-teal-700 hover:underline font-medium">TheDataProject.AI</a>.</p>
    `,
  },
  {
    slug: "healthcare-data",
    title: "Mapping America's Healthcare Infrastructure: 1.5M+ Clinicians and Counting",
    description: "How NationalHealthRatings.com turns fragmented CMS and HHS data into searchable profiles for every doctor, hospital, nursing home, and treatment facility in the country.",
    date: "2026-02-20",
    content: `
      <p class="text-lg text-gray-600 mb-8">Where is the nearest dialysis center? Which nursing homes in your county have the best quality ratings? How many substance treatment facilities exist in your state? These are questions that should be easy to answer — but until now, the data was scattered across dozens of federal and state websites, each with its own interface, its own format, and its own limitations. <a href="https://www.nationalhealthratings.com" class="text-teal-700 hover:underline font-medium">NationalHealthRatings.com</a> brings it all together into a single, searchable platform spanning <strong>18 sites</strong> and hundreds of thousands of healthcare facilities.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">The Clinician Database: 1.5 Million Providers</h2>
      <p class="text-gray-600 mb-4">At the heart of NationalHealthRatings is the <a href="https://www.nationalhealthratings.com/doctors" class="text-teal-700 hover:underline font-medium">doctors directory</a> — a comprehensive database of over <strong>1.5 million clinicians</strong> practicing across the United States. Every record includes the provider's specialty, practice location, credentials, and affiliations.</p>
      <p class="text-gray-600 mb-4">This data originates from the Centers for Medicare & Medicaid Services (CMS) National Plan and Provider Enumeration System (NPPES). We ingest the raw NPI registry files, cross-reference them with Medicare participation data, and build searchable profiles that anyone can access. Whether you're a patient looking for a cardiologist in your ZIP code or a researcher studying provider distribution across rural counties, the data is there — instant, filterable, and free.</p>
      <p class="text-gray-600 mb-4">Beyond individual clinician profiles, the directory exposes patterns in the healthcare workforce. Users can see which specialties are concentrated in urban areas, which rural regions face physician shortages, and how the distribution of providers compares to the distribution of population need.</p>

      <div class="bg-teal-50 border-l-4 border-teal-700 p-6 my-8 rounded-r-lg">
        <p class="text-2xl font-bold text-teal-800">1.5M+ clinicians searchable</p>
        <p class="text-teal-700">Every doctor, nurse practitioner, and specialist in the CMS database — searchable by name, specialty, and location.</p>
      </div>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Hospitals, Nursing Homes, and Beyond</h2>
      <p class="text-gray-600 mb-4">NationalHealthRatings doesn't stop at clinicians. The platform covers the full spectrum of healthcare facilities:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><a href="https://www.nationalhealthratings.com/hospitals" class="text-teal-700 hover:underline font-medium">Hospitals</a> — <strong>5,425</strong> facilities with quality ratings, readmission rates, and patient satisfaction scores sourced from CMS Hospital Compare</li>
        <li><a href="https://www.nationalhealthratings.com/nursing-homes" class="text-teal-700 hover:underline font-medium">Nursing Homes</a> — <strong>14,964</strong> facilities with inspection results, staffing levels, and overall quality star ratings</li>
        <li><a href="https://www.nationalhealthratings.com/home-health-care-agencies" class="text-teal-700 hover:underline font-medium">Home Health Care Agencies</a> — <strong>11,824</strong> agencies with quality of patient care metrics and outcomes data</li>
        <li><a href="https://www.nationalhealthratings.com/hospice-care" class="text-teal-700 hover:underline font-medium">Hospice Care</a> — <strong>7,013</strong> providers with family satisfaction surveys and care quality indicators</li>
        <li><a href="https://www.nationalhealthratings.com/dialysis-centers" class="text-teal-700 hover:underline font-medium">Dialysis Centers</a> — <strong>7,638</strong> facilities with clinical outcomes and patient survival metrics</li>
      </ul>
      <p class="text-gray-600 mb-4">Each facility type has its own dedicated search interface, tuned to the metrics that matter most. For nursing homes, that means staffing ratios and inspection deficiencies. For hospitals, it means readmission penalties and mortality rates. The goal is always the same: give people the information they need to make the best decision for themselves or their loved ones.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Behavioral Health and Substance Treatment</h2>
      <p class="text-gray-600 mb-4">America's behavioral health crisis demands better access to information about available treatment options. NationalHealthRatings indexes two critical categories:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><a href="https://www.nationalhealthratings.com/mental-health-facilities" class="text-teal-700 hover:underline font-medium">Mental Health Facilities</a> — <strong>9,037</strong> facilities offering psychiatric services, counseling, and crisis intervention, sourced from SAMHSA</li>
        <li><a href="https://www.nationalhealthratings.com/substance-treatment-facilities" class="text-teal-700 hover:underline font-medium">Substance Treatment Facilities</a> — <strong>12,744</strong> facilities providing detox, residential, outpatient, and medication-assisted treatment programs</li>
      </ul>
      <p class="text-gray-600 mb-4">For someone in crisis — or a family member searching on their behalf — finding the right facility quickly can be lifesaving. These directories allow filtering by treatment type, payment options accepted, and special populations served. The data comes from SAMHSA's Behavioral Health Treatment Services Locator and is updated regularly to reflect facility openings and closures.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Community Health and Preventive Care</h2>
      <p class="text-gray-600 mb-4">Rounding out the platform are directories focused on community health resources:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><a href="https://www.nationalhealthratings.com/health-centers" class="text-teal-700 hover:underline font-medium">Health Centers</a> — <strong>17,607</strong> federally qualified health centers (FQHCs) and look-alikes that provide primary care regardless of ability to pay</li>
        <li><a href="https://www.nationalhealthratings.com/std-clinics" class="text-teal-700 hover:underline font-medium">STD Clinics</a> — <strong>13,890</strong> testing and treatment locations across the country</li>
      </ul>
      <p class="text-gray-600 mb-4">The platform also includes child care licensing data for specific states — covering facilities in California, Texas, Ohio, and Minnesota — which helps parents verify that providers are properly licensed and in compliance with state regulations.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Why a Unified Healthcare Directory Matters</h2>
      <p class="text-gray-600 mb-4">Healthcare data in the United States is notoriously fragmented. CMS publishes hospital data in one place, SAMHSA publishes treatment facility data in another, and state licensing boards maintain their own separate databases. A patient trying to compare options across facility types faces a maze of incompatible websites and data formats.</p>
      <p class="text-gray-600 mb-4">NationalHealthRatings solves this by normalizing data from all of these sources into consistent, searchable formats. The result is a single platform where you can search for any type of healthcare provider or facility in any location, compare quality metrics, and make informed decisions — all without navigating government bureaucracy.</p>
      <p class="text-gray-600">NationalHealthRatings is one of the healthcare platforms built by <a href="/" class="text-teal-700 hover:underline font-medium">TheDataProject.AI</a> — part of our mission to make every significant public dataset free, searchable, and accessible to everyone.</p>
    `,
  },
  {
    slug: "government-salaries",
    title: "15 Million Government Salary Records, Fully Searchable",
    description: "GovernmentSalaries.org opens the books on public employee compensation — from federal GS scales to every city payroll in New York, California, and beyond.",
    date: "2026-02-20",
    content: `
      <p class="text-lg text-gray-600 mb-8">How much does a New York City firefighter earn? What's the highest-paid position in the California state government? How do federal salaries compare across agencies? These questions have answers buried in public payroll data — but until now, finding them required FOIA requests, data wrangling, or expensive premium databases. <a href="https://www.governmentsalaries.org" class="text-teal-700 hover:underline font-medium">GovernmentSalaries.org</a> makes <strong>15 million+ salary records</strong> instantly searchable across <strong>21 dedicated sites</strong>.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Federal Employee Compensation</h2>
      <p class="text-gray-600 mb-4">The <a href="https://www.governmentsalaries.org/federal" class="text-teal-700 hover:underline font-medium">federal salaries</a> section covers <strong>1.5 million employees</strong> across every federal agency. The data, sourced from the Office of Personnel Management (OPM), includes base pay, locality adjustments, bonus pay, and total compensation. Users can search by agency, job title, location, or salary range.</p>
      <p class="text-gray-600 mb-4">This is the same dataset that powers our <a href="/articles/federal-brain-drain" class="text-teal-700 hover:underline font-medium">Federal Brain Drain analysis</a> — but presented as a searchable directory rather than an analytical tool. Want to know what a GS-13 program analyst at the Department of Energy earns in Washington, D.C. versus Denver? The data is there, filterable and sortable in seconds.</p>
      <p class="text-gray-600 mb-4">The federal dataset also enables macro-level analysis: which agencies pay the most on average, how compensation varies by location, and how federal pay compares to private-sector equivalents for similar roles.</p>

      <div class="bg-teal-50 border-l-4 border-teal-700 p-6 my-8 rounded-r-lg">
        <p class="text-2xl font-bold text-teal-800">15M+ salary records</p>
        <p class="text-teal-700">Federal, state, and municipal employee compensation data — searchable by name, title, agency, and location.</p>
      </div>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">New York City: The Largest Municipal Payroll</h2>
      <p class="text-gray-600 mb-4">The <a href="https://www.governmentsalaries.org/nyc" class="text-teal-700 hover:underline font-medium">NYC payroll database</a> is one of our most comprehensive, containing <strong>5.6 million records</strong> spanning multiple fiscal years. This covers every city employee — from police officers and teachers to sanitation workers and administrators — with detailed breakdowns of base salary, overtime pay, and other compensation.</p>
      <p class="text-gray-600 mb-4">Overtime data is particularly revealing. In some years, individual officers or firefighters earn more in overtime than their base salary. The platform lets journalists, watchdog groups, and citizens explore these patterns and ask hard questions about workforce management and cost control.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">State and Major City Coverage</h2>
      <p class="text-gray-600 mb-4">Beyond the federal government and NYC, GovernmentSalaries.org covers the major states and cities where public payroll data is available:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><a href="https://www.governmentsalaries.org/california" class="text-teal-700 hover:underline font-medium">California</a> — <strong>1 million</strong> state employee records including the UC and CSU systems</li>
        <li><a href="https://www.governmentsalaries.org/new-jersey" class="text-teal-700 hover:underline font-medium">New Jersey</a> — <strong>1.2 million</strong> records spanning state, county, and municipal employees</li>
        <li><a href="https://www.governmentsalaries.org/la-county" class="text-teal-700 hover:underline font-medium">LA County</a> — <strong>1.1 million</strong> records from the nation's largest county government</li>
        <li><a href="https://www.governmentsalaries.org/san-francisco" class="text-teal-700 hover:underline font-medium">San Francisco</a> — <strong>1 million</strong> records from one of America's highest-cost cities</li>
        <li><a href="https://www.governmentsalaries.org/philadelphia" class="text-teal-700 hover:underline font-medium">Philadelphia</a> — <strong>808,000</strong> records across city departments</li>
        <li><a href="https://www.governmentsalaries.org/texas" class="text-teal-700 hover:underline font-medium">Texas</a>, <a href="https://www.governmentsalaries.org/florida" class="text-teal-700 hover:underline font-medium">Florida</a>, <a href="https://www.governmentsalaries.org/los-angeles" class="text-teal-700 hover:underline font-medium">Los Angeles</a>, <a href="https://www.governmentsalaries.org/chicago" class="text-teal-700 hover:underline font-medium">Chicago</a>, <a href="https://www.governmentsalaries.org/boston" class="text-teal-700 hover:underline font-medium">Boston</a>, and <a href="https://www.governmentsalaries.org/washington-dc" class="text-teal-700 hover:underline font-medium">Washington, D.C.</a></li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Why Salary Transparency Matters</h2>
      <p class="text-gray-600 mb-4">Government employees are paid with taxpayer money. That makes their compensation a matter of public interest — not to shame individual workers, but to ensure accountability in how public resources are allocated.</p>
      <p class="text-gray-600 mb-4">Salary transparency serves multiple important functions:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><strong>Accountability:</strong> Citizens can verify that compensation aligns with the responsibilities of each role and that pay practices are fair and equitable</li>
        <li><strong>Equity analysis:</strong> Researchers can examine pay gaps by gender, race, and job classification within government workforces</li>
        <li><strong>Recruitment:</strong> Prospective government employees can understand realistic compensation before applying, improving hiring outcomes</li>
        <li><strong>Budget oversight:</strong> Elected officials and budget analysts can identify compensation trends that drive budget growth</li>
      </ul>
      <p class="text-gray-600 mb-4">When a city's overtime spending doubles in two years, that's a story. When a state agency's average salary significantly exceeds comparable positions elsewhere, that deserves scrutiny. GovernmentSalaries.org provides the raw data to support this kind of analysis at every level of government.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Explore the Data</h2>
      <p class="text-gray-600 mb-4">Visit <a href="https://www.governmentsalaries.org" class="text-teal-700 hover:underline font-medium">GovernmentSalaries.org</a> to search any of the 21 payroll databases. Every search is free, every record is public, and the data is updated as new payroll releases become available.</p>
      <p class="text-gray-600">GovernmentSalaries.org is one of the government transparency platforms built by <a href="/" class="text-teal-700 hover:underline font-medium">TheDataProject.AI</a> — making public data usable, searchable, and accessible to everyone.</p>
    `,
  },
  {
    slug: "food-agriculture",
    title: "From Nutrition Labels to FDA Recalls: Inside America's Food Data",
    description: "FoodInsider.org puts 2 million+ nutrition records, restaurant grades, FDA recalls, and agricultural data at your fingertips across 9 specialized sites.",
    date: "2026-02-20",
    content: `
      <p class="text-lg text-gray-600 mb-8">What's actually in the food you eat? Which restaurants in your neighborhood have health code violations? Has a product you bought been recalled by the FDA? The answers exist in federal databases — but good luck finding them. <a href="https://www.foodinsider.org" class="text-teal-700 hover:underline font-medium">FoodInsider.org</a> consolidates data from the USDA, FDA, and local health departments into <strong>9 searchable platforms</strong> covering everything from nutrition facts to farmers markets.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">2 Million Nutrition Records</h2>
      <p class="text-gray-600 mb-4">The <a href="https://www.foodinsider.org/nutrition-facts" class="text-teal-700 hover:underline font-medium">nutrition facts</a> database is the largest component of FoodInsider, containing over <strong>2 million records</strong> sourced from the USDA FoodData Central database. Every entry includes detailed macro and micronutrient breakdowns — calories, protein, fat, carbohydrates, fiber, vitamins, and minerals — for branded products, generic foods, and restaurant items.</p>
      <p class="text-gray-600 mb-4">Unlike the USDA's own interface, which is designed for researchers, our platform is built for everyday consumers. Search for any food item and get an instant, readable nutritional profile. Compare foods side by side. Filter by dietary criteria. Whether you're managing a medical condition, tracking macros, or simply curious about what you're eating, the data is presented clearly and accessibly.</p>
      <p class="text-gray-600 mb-4">The database covers everything from raw ingredients like "chicken breast, skinless, raw" to branded products like specific breakfast cereals, frozen meals, and snack foods. It's the most comprehensive free nutrition lookup tool available online.</p>

      <div class="bg-teal-50 border-l-4 border-teal-700 p-6 my-8 rounded-r-lg">
        <p class="text-2xl font-bold text-teal-800">2M+ nutrition records</p>
        <p class="text-teal-700">Every food item in the USDA FoodData Central database — searchable, sortable, and free to access.</p>
      </div>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Restaurant Safety and FDA Oversight</h2>
      <p class="text-gray-600 mb-4">Food safety is one of those topics people don't think about until something goes wrong. FoodInsider aims to change that by making inspection and recall data proactively accessible:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><a href="https://www.foodinsider.org/nyc-restaurant-grades" class="text-teal-700 hover:underline font-medium">NYC Restaurant Grades</a> — <strong>281,000 inspection records</strong> covering every restaurant, bar, and food establishment in New York City. Search by name, cuisine, borough, or grade. See the full inspection history including specific violations cited.</li>
        <li><a href="https://www.foodinsider.org/fda-recalls" class="text-teal-700 hover:underline font-medium">FDA Recalls</a> — <strong>96,000 recall records</strong> covering food, drugs, medical devices, and cosmetics. Find out if products you've purchased have been recalled and why.</li>
        <li><a href="https://www.foodinsider.org/fda-approved-drugs" class="text-teal-700 hover:underline font-medium">FDA-Approved Drugs</a> — <strong>49,000 drug approvals</strong> with application details, active ingredients, and approval dates. An essential reference for healthcare providers and patients alike.</li>
      </ul>
      <p class="text-gray-600 mb-4">The NYC restaurant grades dataset is particularly powerful for consumers. Every restaurant in the city receives letter grades based on health inspections, and our platform makes the full history searchable. You can see not just a restaurant's current grade, but its track record over time — how many critical violations it has accumulated, whether it's improving or declining, and how it compares to other establishments in the same neighborhood.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">America's Agricultural Landscape</h2>
      <p class="text-gray-600 mb-4">FoodInsider also maps the agricultural side of the food system through several specialized directories:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><a href="https://www.foodinsider.org/alcohol-producers" class="text-teal-700 hover:underline font-medium">Alcohol Producers</a> — <strong>28,000</strong> licensed breweries, wineries, and distilleries from TTB permits data</li>
        <li><a href="https://www.foodinsider.org/agritourism" class="text-teal-700 hover:underline font-medium">Agritourism</a> — <strong>13,000</strong> farms and ranches that offer public experiences like U-picks, corn mazes, and farm tours</li>
        <li><a href="https://www.foodinsider.org/farmers-markets" class="text-teal-700 hover:underline font-medium">Farmers Markets</a> — <strong>7,000</strong> markets across the country with location, schedule, and product information sourced from the USDA directory</li>
        <li><a href="https://www.foodinsider.org/on-farm-markets" class="text-teal-700 hover:underline font-medium">On-Farm Markets</a> — <strong>4,000</strong> farm stands and on-site retail locations where consumers can buy directly from producers</li>
        <li><a href="https://www.foodinsider.org/food-last" class="text-teal-700 hover:underline font-medium">Food Storage Guide</a> — <strong>770</strong> items with shelf life information from the USDA, helping consumers reduce food waste</li>
      </ul>
      <p class="text-gray-600 mb-4">These directories connect consumers directly to producers and local food sources. As interest in farm-to-table dining, local food systems, and food provenance continues to grow, having a comprehensive map of agricultural resources becomes increasingly valuable.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Connecting Food Data to Public Health</h2>
      <p class="text-gray-600 mb-4">The datasets in FoodInsider aren't just consumer conveniences — they're public health tools. Researchers studying the relationship between food access and health outcomes can cross-reference farmers market locations with food desert maps. Epidemiologists tracking foodborne illness outbreaks can use recall data to identify patterns. Nutritionists can use the comprehensive food database to design dietary interventions for specific populations.</p>
      <p class="text-gray-600 mb-4">By making this data accessible, we're enabling the kind of analysis that was previously restricted to academics with institutional data access or government analysts with internal tools.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Explore the Full Platform</h2>
      <p class="text-gray-600 mb-4">Visit <a href="https://www.foodinsider.org" class="text-teal-700 hover:underline font-medium">FoodInsider.org</a> to search nutrition facts, check restaurant grades, browse FDA recalls, or find farmers markets near you. Every dataset is free, updated regularly, and designed to be useful for both everyday consumers and professional researchers.</p>
      <p class="text-gray-600">FoodInsider is one of the data platforms built by <a href="/" class="text-teal-700 hover:underline font-medium">TheDataProject.AI</a> — making America's food data open, searchable, and accessible to everyone.</p>
    `,
  },
  {
    slug: "transportation-data",
    title: "185K+ Vehicle Recalls and the Data Behind America's Transportation Systems",
    description: "DriveData.org tracks aircraft registrations, vehicle recalls, EV charging stations, fuel economy, and car safety ratings across 13 specialized platforms.",
    date: "2026-02-20",
    content: `
      <p class="text-lg text-gray-600 mb-8">Every day, millions of Americans get behind the wheel, board a plane, or charge an electric vehicle — trusting that the systems around them are safe, inspected, and properly maintained. The data behind that trust exists in federal databases scattered across the FAA, NHTSA, DOE, and CPSC. <a href="https://www.drivedata.org" class="text-teal-700 hover:underline font-medium">DriveData.org</a> brings it all together across <strong>13 dedicated platforms</strong> covering everything from aircraft tail numbers to EV charging networks.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Vehicle Safety: Recalls and Ratings</h2>
      <p class="text-gray-600 mb-4">The <a href="https://www.drivedata.org/vehicle-recalls" class="text-teal-700 hover:underline font-medium">vehicle recalls</a> database contains over <strong>185,000 recall records</strong> from the National Highway Traffic Safety Administration (NHTSA). Every recall ever issued — from minor software glitches to critical safety defects affecting millions of vehicles — is searchable by make, model, year, and defect type.</p>
      <p class="text-gray-600 mb-4">This matters more than most people realize. NHTSA estimates that approximately 25% of recalled vehicles never get repaired. That means tens of millions of cars on American roads right now have unaddressed safety defects. Our platform makes it trivially easy to check whether your vehicle has any outstanding recalls and what steps to take.</p>
      <p class="text-gray-600 mb-4">Complementing the recall database is our <a href="https://www.drivedata.org/car-safety-ratings" class="text-teal-700 hover:underline font-medium">car safety ratings</a> directory, which covers <strong>11,000 vehicles</strong> with crash test results, rollover ratings, and overall safety scores from the NHTSA 5-Star Safety Ratings program. For car buyers, this is essential comparison data — presented in a more accessible format than the government's own tools.</p>

      <div class="bg-teal-50 border-l-4 border-teal-700 p-6 my-8 rounded-r-lg">
        <p class="text-2xl font-bold text-teal-800">185K+ vehicle recalls tracked</p>
        <p class="text-teal-700">Every NHTSA recall ever issued — searchable by make, model, year, and defect component.</p>
      </div>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Aviation Data: Every Aircraft in the Sky</h2>
      <p class="text-gray-600 mb-4">DriveData's aviation section draws from FAA databases to provide comprehensive information about every registered aircraft in the United States:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><a href="https://www.drivedata.org/aircraft-tail" class="text-teal-700 hover:underline font-medium">Aircraft Tail Numbers</a> — <strong>306,000 registered aircraft</strong> with ownership, manufacturer, model, and registration details from the FAA Aircraft Registry</li>
        <li><a href="https://www.drivedata.org/aircraft-reference" class="text-teal-700 hover:underline font-medium">Aircraft Reference</a> — <strong>92,000 aircraft type certificates</strong> providing detailed specifications for every certified aircraft model</li>
        <li><a href="https://www.drivedata.org/aircraft-engine-reference" class="text-teal-700 hover:underline font-medium">Aircraft Engine Reference</a> — <strong>4,000 engine type certificates</strong> covering every certified aircraft engine</li>
        <li><a href="https://www.drivedata.org/repair-stations" class="text-teal-700 hover:underline font-medium">Repair Stations</a> — <strong>5,000 FAA-certified repair stations</strong> with their ratings and capabilities</li>
      </ul>
      <p class="text-gray-600 mb-4">Aviation enthusiasts use these databases to look up aircraft they spot. Journalists use them to trace aircraft ownership for investigative reporting. Mechanics and pilots use them as professional references. The data serves a surprisingly wide range of users — all from publicly available FAA records that were previously difficult to query.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">The Electric Vehicle Transition</h2>
      <p class="text-gray-600 mb-4">As America transitions to electric vehicles, charging infrastructure is a critical concern. The <a href="https://www.drivedata.org/ev-charging-stations" class="text-teal-700 hover:underline font-medium">EV charging stations</a> directory maps <strong>97,000 stations</strong> from the Department of Energy's Alternative Fuels Station Locator.</p>
      <p class="text-gray-600 mb-4">Each listing includes the station's location, connector types, network affiliation, access hours, and pricing model. EV owners can search by location to find nearby charging options, while researchers can analyze charging infrastructure density relative to population and EV registration rates. The data reveals significant disparities — urban areas are well-covered, while many rural stretches of highway remain charging deserts.</p>
      <p class="text-gray-600 mb-4">The <a href="https://www.drivedata.org/fuel-economy" class="text-teal-700 hover:underline font-medium">fuel economy</a> database rounds out the picture with <strong>45,000 vehicle records</strong> from the EPA, covering MPG ratings, emissions data, and annual fuel costs for vehicles dating back decades. This historical perspective shows how dramatically fuel efficiency has improved — and how far we still have to go.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Training the Next Generation</h2>
      <p class="text-gray-600 mb-4">DriveData also supports career development in transportation with directories covering training and education:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><a href="https://www.drivedata.org/pilot-schools" class="text-teal-700 hover:underline font-medium">Pilot Schools</a> — <strong>651 FAA-certified pilot training programs</strong> with location, certifications offered, and contact details</li>
        <li><a href="https://www.drivedata.org/flight-training" class="text-teal-700 hover:underline font-medium">Flight Training</a> — additional flight training resources and programs</li>
        <li><a href="https://www.drivedata.org/mechanics-schools" class="text-teal-700 hover:underline font-medium">Mechanics Schools</a> — FAA-certified aviation maintenance technician schools</li>
      </ul>
      <p class="text-gray-600 mb-4">With the aviation industry facing a well-documented pilot shortage, making flight school information more accessible helps aspiring aviators find the right training program. The same applies to aviation mechanics, where demand consistently outpaces supply.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Consumer Product Safety</h2>
      <p class="text-gray-600 mb-4">Beyond vehicles and aircraft, DriveData also tracks <a href="https://www.drivedata.org/product-safety-recalls" class="text-teal-700 hover:underline font-medium">product safety recalls</a> from the Consumer Product Safety Commission (CPSC) — over <strong>9,000 recall records</strong> covering everything from children's toys to household appliances. These recalls often receive less media attention than vehicle recalls but can be equally important for consumer safety.</p>
      <p class="text-gray-600 mb-4">Visit <a href="https://www.drivedata.org" class="text-teal-700 hover:underline font-medium">DriveData.org</a> to search vehicle recalls, look up aircraft, find EV charging stations, or explore any of our 13 transportation data platforms.</p>
      <p class="text-gray-600">DriveData is one of the transportation platforms built by <a href="/" class="text-teal-700 hover:underline font-medium">TheDataProject.AI</a> — turning federal safety and infrastructure data into tools everyone can use.</p>
    `,
  },
  {
    slug: "business-finance",
    title: "1.8M Nonprofits, 2.4M SEC Filings, and the Business Data You Didn't Know Was Public",
    description: "CompanyInsights.org decodes SEC Form D filings, nonprofit financials, H-1B data, and venture capital activity across 13 specialized platforms.",
    date: "2026-02-20",
    content: `
      <p class="text-lg text-gray-600 mb-8">Every private securities offering filed with the SEC. Every nonprofit's financial disclosures. Every company that sponsored an H-1B visa. This data is public — required by law to be disclosed — yet it sits in formats and systems that make it nearly impossible for the average person to access. <a href="https://www.companyinsights.org" class="text-teal-700 hover:underline font-medium">CompanyInsights.org</a> changes that, organizing business and finance data across <strong>13 searchable platforms</strong> with millions of records.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">SEC Form D: The Private Capital Market Revealed</h2>
      <p class="text-gray-600 mb-4">When a company raises private capital — venture funding, private equity, or angel investments — it typically files a Form D with the SEC under Regulation D. These filings are a goldmine of information about private capital markets, yet the SEC's own EDGAR system makes them difficult to search and analyze at scale.</p>
      <p class="text-gray-600 mb-4">CompanyInsights organizes Form D data across four interconnected databases:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><a href="https://www.companyinsights.org/form-d" class="text-teal-700 hover:underline font-medium">Form D Filings</a> — the core filing database with offering amounts, exemptions claimed, and filing dates</li>
        <li><a href="https://www.companyinsights.org/form-d-related-persons" class="text-teal-700 hover:underline font-medium">Related Persons</a> — <strong>2.4 million records</strong> of directors, officers, and promoters named in Form D filings</li>
        <li><a href="https://www.companyinsights.org/form-d-offerings" class="text-teal-700 hover:underline font-medium">Offerings</a> — <strong>619,000</strong> individual securities offerings with amounts raised and investor counts</li>
        <li><a href="https://www.companyinsights.org/form-d-issuers" class="text-teal-700 hover:underline font-medium">Issuers</a> — <strong>628,000</strong> companies that have filed Form D, with industry classification and location data</li>
        <li><a href="https://www.companyinsights.org/form-d-recipients" class="text-teal-700 hover:underline font-medium">Recipients</a> — <strong>358,000</strong> entities and individuals receiving proceeds from these offerings</li>
      </ul>
      <p class="text-gray-600 mb-4">Together, these databases provide an unprecedented window into private capital formation. Researchers can track funding trends by industry and geography. Journalists can identify who's behind new ventures. Entrepreneurs can study comparable offerings before raising their own rounds.</p>

      <div class="bg-teal-50 border-l-4 border-teal-700 p-6 my-8 rounded-r-lg">
        <p class="text-2xl font-bold text-teal-800">1.8M nonprofits indexed</p>
        <p class="text-teal-700">Every IRS-registered tax-exempt organization — with revenue, assets, and classification data.</p>
      </div>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">The Nonprofit Sector: 1.8 Million Organizations</h2>
      <p class="text-gray-600 mb-4">The <a href="https://www.companyinsights.org/nonprofits" class="text-teal-700 hover:underline font-medium">nonprofits database</a> indexes <strong>1.8 million tax-exempt organizations</strong> registered with the IRS. Every record includes the organization's name, EIN, classification code (NTEE), ruling date, revenue, and asset figures drawn from IRS Business Master Files and Form 990 data.</p>
      <p class="text-gray-600 mb-4">This database serves donors, researchers, journalists, and grant makers alike. Donors can verify that a charity is legitimately registered before contributing. Researchers can analyze the nonprofit sector by type, size, and geography. Journalists can quickly look up an organization's financial profile when covering stories about charitable spending or executive compensation.</p>
      <p class="text-gray-600 mb-4">The scale of the nonprofit sector is itself a revelation — 1.8 million organizations representing an enormous share of economic activity, employment, and community services that often flies under the radar of public attention.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Labor Market Intelligence</h2>
      <p class="text-gray-600 mb-4">CompanyInsights provides two valuable labor market datasets:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><a href="https://www.companyinsights.org/job-salaries" class="text-teal-700 hover:underline font-medium">Job Salaries</a> — <strong>414,000 records</strong> from the Bureau of Labor Statistics covering median wages, employment levels, and job outlooks by occupation and metropolitan area</li>
        <li><a href="https://www.companyinsights.org/h1b-employers" class="text-teal-700 hover:underline font-medium">H-1B Employers</a> — <strong>350,000 records</strong> from the Department of Labor showing which companies sponsor H-1B visas, how many, and at what salary levels</li>
      </ul>
      <p class="text-gray-600 mb-4">The H-1B data is particularly valuable in ongoing policy debates about immigration and the tech workforce. Users can search any company to see how many H-1B workers they employ, what roles they're filling, and how the offered salaries compare to market rates. The data often challenges simplistic narratives on both sides of the immigration debate by showing the actual patterns of employer demand and compensation.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Venture Capital and Private Equity</h2>
      <p class="text-gray-600 mb-4">For those tracking the institutional investment landscape, CompanyInsights offers specialized directories:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><a href="https://www.companyinsights.org/vc-firms" class="text-teal-700 hover:underline font-medium">VC Firms</a> — <strong>2,000</strong> venture capital firms with investment focus, location, and portfolio data</li>
        <li><a href="https://www.companyinsights.org/pe-firms" class="text-teal-700 hover:underline font-medium">PE Firms</a> — <strong>1,100</strong> private equity firms with fund size and strategy details</li>
        <li><a href="https://www.companyinsights.org/investment-banks" class="text-teal-700 hover:underline font-medium">Investment Banks</a> — <strong>386</strong> investment banking firms</li>
        <li><a href="https://www.companyinsights.org/naics-codes" class="text-teal-700 hover:underline font-medium">NAICS Codes</a> — <strong>86,000</strong> industry classification records for cross-referencing business types</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Making Business Data Democratic</h2>
      <p class="text-gray-600 mb-4">Professional investors and large corporations have always had access to this kind of data through expensive Bloomberg terminals, PitchBook subscriptions, and proprietary databases. CompanyInsights levels the playing field by making the same underlying public data available to independent researchers, small business owners, journalists, and curious citizens at no cost.</p>
      <p class="text-gray-600 mb-4">Visit <a href="https://www.companyinsights.org" class="text-teal-700 hover:underline font-medium">CompanyInsights.org</a> to explore SEC filings, nonprofit data, labor market statistics, and the full landscape of American business activity.</p>
      <p class="text-gray-600">CompanyInsights is one of the business and finance platforms built by <a href="/" class="text-teal-700 hover:underline font-medium">TheDataProject.AI</a> — making public business data free, searchable, and accessible to everyone.</p>
    `,
  },
  {
    slug: "genealogy-records",
    title: "87 Million Vital Records: The Largest Free Genealogy Database Online",
    description: "VitalRecordsIndex.com provides free access to 87M+ death records, marriage indexes, birth records, and historical data that commercial genealogy sites charge hundreds for.",
    date: "2026-02-20",
    content: `
      <p class="text-lg text-gray-600 mb-8">Genealogy is one of America's most popular hobbies — and one of its most expensive. Commercial platforms charge $200 or more per year for access to vital records that are, by law, public data. <a href="https://www.vitalrecordsindex.com" class="text-teal-700 hover:underline font-medium">VitalRecordsIndex.com</a> offers a free alternative: <strong>87 million+ vital records</strong> across <strong>12 searchable databases</strong>, covering death records, marriages, births, and historical events spanning more than 150 years.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">87 Million Death Records</h2>
      <p class="text-gray-600 mb-4">The <a href="https://www.vitalrecordsindex.com/death-records" class="text-teal-700 hover:underline font-medium">death records</a> database is the cornerstone of VitalRecordsIndex, containing <strong>87.8 million records</strong> sourced primarily from the Social Security Death Index (SSDI) and supplemented with state-level vital statistics. Each record typically includes name, date of birth, date of death, last known residence, and Social Security number issue state.</p>
      <p class="text-gray-600 mb-4">For genealogists, death records are often the key that unlocks an entire branch of family history. They confirm dates, establish locations, and provide the starting point for backward research into marriage records, birth records, and immigration documents. Our database makes this research accessible without a subscription paywall.</p>
      <p class="text-gray-600 mb-4">The records span from the early 20th century through recent years, with the densest coverage from the 1960s onward. Users can search by name, date range, and location to find specific individuals or explore patterns across families and communities.</p>

      <div class="bg-teal-50 border-l-4 border-teal-700 p-6 my-8 rounded-r-lg">
        <p class="text-2xl font-bold text-teal-800">87M+ vital records</p>
        <p class="text-teal-700">The largest free collection of searchable death records, marriage indexes, and birth records available online.</p>
      </div>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Texas Vital Records: Marriages and Divorces</h2>
      <p class="text-gray-600 mb-4">Texas has some of the most comprehensive publicly available vital records in the country, and VitalRecordsIndex provides full searchable access:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><a href="https://www.vitalrecordsindex.com/texas-marriage-records" class="text-teal-700 hover:underline font-medium">Texas Marriage Records</a> — <strong>9.2 million records</strong> from the Texas Department of State Health Services, covering marriages across the state dating back decades</li>
        <li><a href="https://www.vitalrecordsindex.com/texas-divorce-records" class="text-teal-700 hover:underline font-medium">Texas Divorce Records</a> — <strong>4 million records</strong> providing a comprehensive index of divorces filed in Texas counties</li>
      </ul>
      <p class="text-gray-600 mb-4">These datasets are invaluable for genealogical research, legal proceedings, and historical analysis. Marriage records establish family connections and often provide maiden names, parents' names, and witnesses — all critical data points for building family trees. Divorce records, while less commonly used in genealogy, can fill gaps in family narratives and explain name changes or relocations.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">New York City: A Century of Vital Records</h2>
      <p class="text-gray-600 mb-4">New York City's vital records are among the most sought-after in American genealogy, reflecting the city's role as the primary gateway for immigration to the United States. VitalRecordsIndex provides access to three extraordinary NYC datasets:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><a href="https://www.vitalrecordsindex.com/nyc-marriage-records-1866-1937" class="text-teal-700 hover:underline font-medium">NYC Marriage Records 1866–1937</a> — <strong>5 million records</strong> from the era of peak immigration, covering marriages across all five boroughs</li>
        <li><a href="https://www.vitalrecordsindex.com/nyc-death-records-1862-1948" class="text-teal-700 hover:underline font-medium">NYC Death Records 1862–1948</a> — <strong>3.7 million records</strong> spanning the Civil War through the post-WWII era</li>
        <li><a href="https://www.vitalrecordsindex.com/nyc-birth-records-1855-1909" class="text-teal-700 hover:underline font-medium">NYC Birth Records 1855–1909</a> — <strong>2.6 million records</strong> capturing generations born in the city during its most transformative period</li>
        <li><a href="https://www.vitalrecordsindex.com/nyc-marriages-1950-2017" class="text-teal-700 hover:underline font-medium">NYC Marriages 1950–2017</a> — <strong>1.9 million records</strong> from the modern era, bridging the gap to contemporary records</li>
      </ul>
      <p class="text-gray-600 mb-4">These NYC records are particularly significant for genealogists tracing immigrant ancestry. Millions of European immigrants who passed through Ellis Island married, had children, and died in New York City. Their records, now digitized and searchable, connect modern Americans to ancestors who arrived with nothing but hope and a name — sometimes spelled differently at every government encounter.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Names, History, and Cultural Heritage</h2>
      <p class="text-gray-600 mb-4">Beyond vital records, the platform includes databases that support cultural and historical research:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><a href="https://www.vitalrecordsindex.com/surnames" class="text-teal-700 hover:underline font-medium">Surnames</a> — <strong>162,000 surname entries</strong> with origin, meaning, and frequency data from Census records</li>
        <li><a href="https://www.vitalrecordsindex.com/baby-names" class="text-teal-700 hover:underline font-medium">Baby Names</a> — <strong>113,000 records</strong> from the Social Security Administration tracking name popularity across decades</li>
        <li><a href="https://www.vitalrecordsindex.com/historical-events" class="text-teal-700 hover:underline font-medium">Historical Events</a> — <strong>82,000 event records</strong> providing historical context for genealogical timelines</li>
      </ul>
      <p class="text-gray-600 mb-4">The surname database is especially popular, allowing users to trace the geographic distribution and historical prevalence of their family name across the United States. Combined with the vital records, it paints a picture of how families moved, settled, and contributed to American life.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Why Free Access Matters</h2>
      <p class="text-gray-600 mb-4">Vital records are public documents. They're created by government agencies, maintained with taxpayer funds, and exist to serve the public interest. Yet the genealogy industry has built a multi-billion-dollar business by digitizing these records and placing them behind paywalls.</p>
      <p class="text-gray-600 mb-4">VitalRecordsIndex.com takes a different approach. We believe that access to your own family history shouldn't depend on your ability to pay a monthly subscription fee. By indexing and organizing these records into a free, searchable platform, we're returning public data to the public.</p>
      <p class="text-gray-600 mb-4">Visit <a href="https://www.vitalrecordsindex.com" class="text-teal-700 hover:underline font-medium">VitalRecordsIndex.com</a> to begin your research — search death records, marriage indexes, birth records, and more across 87 million records at no cost.</p>
      <p class="text-gray-600">VitalRecordsIndex is one of the genealogy platforms built by <a href="/" class="text-teal-700 hover:underline font-medium">TheDataProject.AI</a> — making vital records free, searchable, and accessible to everyone.</p>
    `,
  },
  {
    slug: "housing-finance",
    title: "8.3 Million Consumer Complaints and the Data Behind America's Financial System",
    description: "CredioHub.com makes CFPB complaints, FDIC bank data, affordable housing inventories, and public pension data searchable across 7 specialized platforms.",
    date: "2026-02-20",
    content: `
      <p class="text-lg text-gray-600 mb-8">When a bank wrongly forecloses on a home, when a credit card company charges unauthorized fees, when a mortgage servicer loses your paperwork — the Consumer Financial Protection Bureau (CFPB) is where Americans file complaints. Those complaints, along with bank data, housing records, and pension information, are public. <a href="https://www.crediohub.com" class="text-teal-700 hover:underline font-medium">CredioHub.com</a> makes all of it searchable across <strong>7 specialized platforms</strong> containing millions of records about America's financial system.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">8.3 Million Consumer Complaints</h2>
      <p class="text-gray-600 mb-4">The <a href="https://www.crediohub.com/consumer-complaints" class="text-teal-700 hover:underline font-medium">consumer complaints</a> database is the largest component of CredioHub, containing <strong>8.3 million records</strong> from the CFPB Consumer Complaint Database. Every complaint filed against a financial institution since 2011 is here — searchable by company, product type, issue, state, and date.</p>
      <p class="text-gray-600 mb-4">Each record includes the company named, the financial product involved (mortgage, credit card, student loan, debt collection, etc.), the specific issue raised, the company's response, and whether the consumer disputed the resolution. While individual complaint narratives are sometimes redacted for privacy, the structured data alone reveals powerful patterns.</p>
      <p class="text-gray-600 mb-4">The value of this data goes far beyond individual grievances. In aggregate, consumer complaints are an early warning system for systemic problems in the financial industry. When complaints about a specific company or product type spike, it often foreshadows enforcement actions, policy changes, or market corrections. Researchers, journalists, and regulators have used CFPB complaint data to identify predatory lending patterns, document unfair debt collection practices, and hold financial institutions accountable.</p>

      <div class="bg-teal-50 border-l-4 border-teal-700 p-6 my-8 rounded-r-lg">
        <p class="text-2xl font-bold text-teal-800">8.3M consumer complaints</p>
        <p class="text-teal-700">Every CFPB complaint since 2011 — searchable by company, product, issue, and state.</p>
      </div>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Banking Data: Every FDIC-Insured Institution</h2>
      <p class="text-gray-600 mb-4">CredioHub provides comprehensive banking data through two interconnected databases:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><a href="https://www.crediohub.com/banks" class="text-teal-700 hover:underline font-medium">Banks</a> — <strong>27,000 FDIC-insured institutions</strong> including active banks, savings associations, and historical records of banks that have merged, failed, or changed charters. Each record includes the institution's regulatory profile, asset size, and FDIC certificate number.</li>
        <li><a href="https://www.crediohub.com/bank-branches" class="text-teal-700 hover:underline font-medium">Bank Branches</a> — <strong>77,000 branch locations</strong> with addresses, deposit data, and parent institution details. This dataset reveals the physical banking landscape — where banks are investing in branch presence and where they're closing locations.</li>
      </ul>
      <p class="text-gray-600 mb-4">Branch closure data is particularly relevant as the banking industry continues its shift toward digital services. Communities losing their last bank branch face real consequences — reduced access to financial services, difficulty depositing cash, and fewer options for in-person banking assistance. CredioHub's branch directory makes it possible to track these trends at the local level.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Affordable Housing: LIHTC and Section 8</h2>
      <p class="text-gray-600 mb-4">America's affordable housing crisis affects millions of families. CredioHub makes two critical housing datasets searchable:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><a href="https://www.crediohub.com/LIHTC-properties" class="text-teal-700 hover:underline font-medium">LIHTC Properties</a> — <strong>53,000 properties</strong> developed under the Low-Income Housing Tax Credit program, the federal government's primary tool for financing affordable rental housing. Each record includes the number of units, credit type, placed-in-service date, and location.</li>
        <li><a href="https://www.crediohub.com/section-8-housing" class="text-teal-700 hover:underline font-medium">Section 8 Housing</a> — <strong>23,000 properties</strong> participating in HUD's Housing Choice Voucher program and project-based rental assistance, with contract details and unit counts.</li>
      </ul>
      <p class="text-gray-600 mb-4">These directories serve housing advocates, policy researchers, and tenants. Advocates can map affordable housing relative to need. Researchers can study how LIHTC development patterns correlate with neighborhood changes. And tenants searching for affordable options can find properties that accept housing vouchers in their preferred areas.</p>
      <p class="text-gray-600 mb-4">The LIHTC data is especially valuable because the tax credit program has been responsible for virtually all affordable rental housing construction in the United States for the past three decades. Understanding where these properties exist — and where they don't — is essential for anyone working on housing policy.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Public Pension Plans</h2>
      <p class="text-gray-600 mb-4">The <a href="https://www.crediohub.com/public-pension-plans" class="text-teal-700 hover:underline font-medium">public pension plans</a> database tracks <strong>7,300 pension plans</strong> operated by state and local governments across the country. Each record includes plan membership, asset levels, benefit structures, and funded ratios — the critical metric that shows whether a plan has enough money to pay its promised benefits.</p>
      <p class="text-gray-600 mb-4">Public pension underfunding is one of the largest and least-understood fiscal challenges facing American governments. Many plans have funded ratios below 70%, meaning they have committed to paying benefits they may not be able to afford. CredioHub makes this data accessible so that employees, retirees, taxpayers, and journalists can understand the financial health of the pension plans that affect them.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Financial Transparency for Everyone</h2>
      <p class="text-gray-600 mb-4">The financial system affects every American — whether through mortgages, bank accounts, credit cards, affordable housing, or public pensions. Yet the data about these systems has traditionally been accessible only to industry insiders, regulators, and researchers with specialized tools.</p>
      <p class="text-gray-600 mb-4">CredioHub changes this equation. Visit <a href="https://www.crediohub.com" class="text-teal-700 hover:underline font-medium">CredioHub.com</a> to search consumer complaints against any financial company, explore banking data, find affordable housing, or examine the health of public pension plans in your state.</p>
      <p class="text-gray-600">CredioHub is one of the financial data platforms built by <a href="/" class="text-teal-700 hover:underline font-medium">TheDataProject.AI</a> — making financial data transparent, searchable, and accessible to everyone.</p>
    `,
  },
  {
    slug: "elections-political-money",
    title: "Following the Money: 26M+ Individual Contributions in American Elections",
    description: "DonorSecrets.com traces every dollar in federal politics — from individual donors and employer networks to campaign committees and vendor payments across 9 specialized platforms.",
    date: "2026-02-20",
    content: `
      <p class="text-lg text-gray-600 mb-8">American elections run on money. In every cycle, billions of dollars flow from individual donors to campaigns, from PACs to super PACs, and from campaign committees to vendors who produce ads, run phone banks, and organize rallies. This money is disclosed — the Federal Election Commission requires it — but the raw FEC data is notoriously difficult to navigate. <a href="https://www.donorsecrets.com" class="text-teal-700 hover:underline font-medium">DonorSecrets.com</a> transforms this data into <strong>9 searchable platforms</strong> that make political money transparent, traceable, and understandable.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">26 Million Individual Contributions</h2>
      <p class="text-gray-600 mb-4">The <a href="https://www.donorsecrets.com/individual-contributions" class="text-teal-700 hover:underline font-medium">individual contributions</a> database is the engine of DonorSecrets, containing over <strong>26 million records</strong> of contributions made by individuals to federal candidates, PACs, and party committees. Every record includes the donor's name, city, state, employer, occupation, contribution amount, and the recipient committee or candidate.</p>
      <p class="text-gray-600 mb-4">This is the dataset that reveals who funds American politics at the grassroots level. Search any name and see their full contribution history — which candidates they've supported, how much they've given, and how their giving has changed over time. Search any ZIP code and see the political leanings of a neighborhood measured in dollars. The data paints an extraordinarily detailed portrait of political engagement across every community in the country.</p>
      <p class="text-gray-600 mb-4">For journalists, the individual contributions database is a primary research tool. When a politician claims to be funded by small donors, the data either confirms or contradicts that narrative. When a public figure's political affiliations are questioned, contribution records provide documentary evidence. And when patterns emerge — a cluster of executives at one company all maxing out to the same candidate — the data raises questions worth investigating.</p>

      <div class="bg-teal-50 border-l-4 border-teal-700 p-6 my-8 rounded-r-lg">
        <p class="text-2xl font-bold text-teal-800">26M+ individual contributions tracked</p>
        <p class="text-teal-700">Every individual political contribution reported to the FEC — searchable by donor name, employer, location, and recipient.</p>
      </div>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Campaign Spending and the Vendor Economy</h2>
      <p class="text-gray-600 mb-4">Where does campaign money go once it's raised? DonorSecrets tracks the outflow as thoroughly as the inflow:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><a href="https://www.donorsecrets.com/campaign-spending" class="text-teal-700 hover:underline font-medium">Campaign Spending</a> — <strong>10.6 million disbursement records</strong> showing exactly where campaigns spend their money, from media buys and consulting fees to travel and catering</li>
        <li><a href="https://www.donorsecrets.com/vendors" class="text-teal-700 hover:underline font-medium">Vendors</a> — <strong>597,000 vendor records</strong> identifying the companies and individuals who receive campaign payments. This reveals the political consulting industry — the ad makers, pollsters, direct mail firms, and digital strategists who profit from campaign season</li>
      </ul>
      <p class="text-gray-600 mb-4">The vendor data is especially revealing. A relatively small number of firms dominate the political consulting industry, collecting hundreds of millions across election cycles. By tracking vendor payments across campaigns, DonorSecrets exposes the business networks that connect seemingly independent political operations. When five different candidates all pay the same consulting firm, it suggests coordination — or at least shared strategic DNA — that voters deserve to know about.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Contributions, Donors, and Employers</h2>
      <p class="text-gray-600 mb-4">DonorSecrets provides multiple angles for analyzing who funds American politics:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><a href="https://www.donorsecrets.com/campaign-contributions" class="text-teal-700 hover:underline font-medium">Campaign Contributions</a> — <strong>3.2 million records</strong> aggregating contributions at the committee-to-committee level, including PAC contributions to candidates and party transfers</li>
        <li><a href="https://www.donorsecrets.com/donors" class="text-teal-700 hover:underline font-medium">Donors</a> — <strong>1.2 million unique donor profiles</strong> with aggregated giving histories, allowing users to see a donor's total political footprint across all recipients and cycles</li>
        <li><a href="https://www.donorsecrets.com/employers" class="text-teal-700 hover:underline font-medium">Employers</a> — <strong>1.2 million employer records</strong> that aggregate contributions by workplace, revealing which companies' employees are most politically active and where their money goes</li>
      </ul>
      <p class="text-gray-600 mb-4">The employer aggregation is one of DonorSecrets' most powerful features. While corporations cannot contribute directly to federal candidates, their employees certainly do — and the patterns are illuminating. Search any major company and see the total contributions from its employees, the partisan split, and the top recipient candidates. This data often tells a more honest story about corporate political alignment than lobbying disclosures or PAC contributions alone.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Committees and Candidates</h2>
      <p class="text-gray-600 mb-4">Rounding out the platform are directories of the organizational infrastructure of American elections:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><a href="https://www.donorsecrets.com/campaign-committees" class="text-teal-700 hover:underline font-medium">Campaign Committees</a> — <strong>46,000 registered committees</strong> including candidate committees, PACs, super PACs, and party committees with their FEC filing details</li>
        <li><a href="https://www.donorsecrets.com/federal-election-candidates" class="text-teal-700 hover:underline font-medium">Federal Election Candidates</a> — <strong>24,000 candidate records</strong> covering everyone who has run for federal office, with their committee affiliations, party, office sought, and election results</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Why Political Money Transparency Matters</h2>
      <p class="text-gray-600 mb-4">Money in politics is not inherently corrupt — but it is inherently influential. When voters can see who funds their representatives, they can make more informed judgments about whose interests those representatives are likely to serve. When journalists can trace the flow of political money, they can hold powerful actors accountable. When researchers can analyze contribution patterns at scale, they can identify systemic issues in how campaigns are financed.</p>
      <p class="text-gray-600 mb-4">DonorSecrets exists because this data should be easy to access, not buried in FEC bulk downloads that require database expertise to query. Visit <a href="https://www.donorsecrets.com" class="text-teal-700 hover:underline font-medium">DonorSecrets.com</a> to search contributions, trace spending, look up any donor, and follow the money in American politics.</p>
      <p class="text-gray-600">DonorSecrets is one of the political transparency platforms built by <a href="/" class="text-teal-700 hover:underline font-medium">TheDataProject.AI</a> — making election finance data free, searchable, and accessible to everyone.</p>
    `,
  },
  {
    slug: "software-reviews",
    title: "Comparing 844 Software Products Across 13 Categories",
    description: "TopSoftwareProducts.com provides unbiased, data-driven comparisons of business software — from cybersecurity and marketing tools to AI writing assistants and CRM platforms.",
    date: "2026-02-20",
    content: `
      <p class="text-lg text-gray-600 mb-8">Choosing the right software for your business shouldn't require wading through sponsored blog posts, affiliate-driven "reviews," and comparison sites that rank products based on who pays the most. <a href="https://www.topsoftwareproducts.com" class="text-teal-700 hover:underline font-medium">TopSoftwareProducts.com</a> takes a different approach — organizing software across <strong>13 categories</strong> with structured, data-driven comparisons that help businesses make informed decisions based on features, pricing, and capabilities rather than marketing budgets.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">The Problem with Software Reviews</h2>
      <p class="text-gray-600 mb-4">The software review industry has a credibility problem. Most "best of" lists are pay-to-play — vendors pay for placement, and the rankings reflect advertising spend rather than product quality. Affiliate links create incentives to recommend expensive products over better-fitting alternatives. And user reviews are easily manipulated through incentivized reviews, fake accounts, and selective moderation.</p>
      <p class="text-gray-600 mb-4">TopSoftwareProducts.com doesn't accept payments from software vendors for placement. Every product is evaluated on the same criteria within its category, and comparisons are structured around the features and specifications that actually matter to buyers — not vague superlatives about "ease of use" or "customer satisfaction."</p>

      <div class="bg-teal-50 border-l-4 border-teal-700 p-6 my-8 rounded-r-lg">
        <p class="text-2xl font-bold text-teal-800">13 software categories compared</p>
        <p class="text-teal-700">From cybersecurity to AI writing tools — structured, unbiased comparisons of the products businesses actually need.</p>
      </div>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Security and Infrastructure</h2>
      <p class="text-gray-600 mb-4">The largest category on the platform is <a href="https://www.topsoftwareproducts.com/cybersecurity" class="text-teal-700 hover:underline font-medium">cybersecurity</a>, covering <strong>207 products</strong> across sub-categories including endpoint protection, SIEM, vulnerability management, identity and access management, email security, and network security. For IT leaders evaluating security tools, having a comprehensive catalog of options in one place — with consistent feature comparisons — dramatically simplifies the procurement process.</p>
      <p class="text-gray-600 mb-4">Each product listing includes core capabilities, deployment model (cloud, on-premises, hybrid), target company size, and pricing structure. Rather than reading five separate vendor websites and trying to compare apples to oranges, buyers can see all options side by side within a consistent framework.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Marketing, Sales, and Growth</h2>
      <p class="text-gray-600 mb-4">For businesses focused on growth, TopSoftwareProducts covers the tools that drive customer acquisition and retention:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><a href="https://www.topsoftwareproducts.com/marketing" class="text-teal-700 hover:underline font-medium">Marketing</a> — <strong>119 products</strong> spanning email marketing, marketing automation, social media management, SEO tools, and analytics platforms</li>
        <li><a href="https://www.topsoftwareproducts.com/crm-tools" class="text-teal-700 hover:underline font-medium">CRM Tools</a> — <strong>30 products</strong> from enterprise platforms to lightweight solutions designed for small teams and startups</li>
        <li><a href="https://www.topsoftwareproducts.com/ecommerce-platforms" class="text-teal-700 hover:underline font-medium">Ecommerce Platforms</a> — <strong>57 products</strong> for businesses selling online, from hosted storefronts to headless commerce solutions</li>
      </ul>
      <p class="text-gray-600 mb-4">The marketing category alone highlights how fragmented the software landscape has become. With 119 products competing for attention, businesses — especially small ones without dedicated IT teams — need structured guidance to identify which tools actually fit their needs and budget. TopSoftwareProducts provides that structure without the conflicts of interest that plague the review industry.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Operations and Finance</h2>
      <p class="text-gray-600 mb-4">Running a business requires operational infrastructure, and TopSoftwareProducts covers the back-office tools that keep organizations functioning:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><a href="https://www.topsoftwareproducts.com/construction-management" class="text-teal-700 hover:underline font-medium">Construction Management</a> — <strong>77 products</strong> for project planning, field management, estimating, and collaboration in the construction industry</li>
        <li><a href="https://www.topsoftwareproducts.com/accounting" class="text-teal-700 hover:underline font-medium">Accounting</a> — <strong>50 products</strong> from simple bookkeeping tools to full-featured ERP systems with accounting modules</li>
        <li><a href="https://www.topsoftwareproducts.com/hr-payroll" class="text-teal-700 hover:underline font-medium">HR &amp; Payroll</a> — <strong>49 products</strong> covering payroll processing, benefits administration, time tracking, and compliance management</li>
        <li><a href="https://www.topsoftwareproducts.com/project-management" class="text-teal-700 hover:underline font-medium">Project Management</a> — <strong>46 products</strong> ranging from kanban boards and task trackers to full portfolio management suites</li>
        <li><a href="https://www.topsoftwareproducts.com/invoicing" class="text-teal-700 hover:underline font-medium">Invoicing</a> — <strong>42 products</strong> for billing, invoicing, and payment collection tailored to freelancers, agencies, and growing businesses</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">AI and Data Tools</h2>
      <p class="text-gray-600 mb-4">The fastest-growing categories on the platform reflect the AI revolution reshaping business software:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><a href="https://www.topsoftwareproducts.com/data-analysis" class="text-teal-700 hover:underline font-medium">Data Analysis</a> — <strong>74 products</strong> for business intelligence, data visualization, and analytics, from self-service BI tools to enterprise data platforms</li>
        <li><a href="https://www.topsoftwareproducts.com/ai-writing-tools" class="text-teal-700 hover:underline font-medium">AI Writing Tools</a> — <strong>51 products</strong> that use large language models for content creation, editing, summarization, and copywriting</li>
        <li><a href="https://www.topsoftwareproducts.com/ai-detectors" class="text-teal-700 hover:underline font-medium">AI Detectors</a> — <strong>41 products</strong> designed to identify AI-generated content in academic submissions, published articles, and other text — a category that barely existed two years ago</li>
      </ul>
      <p class="text-gray-600 mb-4">The emergence of AI detectors as a standalone software category illustrates how rapidly the technology landscape is evolving. TopSoftwareProducts aims to keep pace with these changes, adding new categories as market segments mature and consolidating categories as products converge.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Browse the Full Catalog</h2>
      <p class="text-gray-600 mb-4">Visit <a href="https://www.topsoftwareproducts.com" class="text-teal-700 hover:underline font-medium">TopSoftwareProducts.com</a> to browse all 13 categories, compare products, and find the right software for your business without the noise of sponsored content and affiliate marketing.</p>
      <p class="text-gray-600">TopSoftwareProducts is one of the research platforms built by <a href="/" class="text-teal-700 hover:underline font-medium">TheDataProject.AI</a> — making software evaluation data-driven, unbiased, and accessible to everyone.</p>
    `,
  },
  {
    slug: "education-data",
    title: "6,000+ Colleges and 229K Fields of Study: America's Education Data, Searchable",
    description: "ExploreBestColleges.com turns Department of Education data into searchable platforms for colleges, degree programs, and K-12 public schools across 3 specialized sites.",
    date: "2026-02-20",
    content: `
      <p class="text-lg text-gray-600 mb-8">Choosing a college is one of the highest-stakes decisions a young person makes — and one of the most data-poor. Glossy brochures and campus tours tell you what a school wants you to see. Federal data tells you what actually happens after students enroll: graduation rates, loan default rates, earning outcomes, and how programs compare to peers across the country. <a href="https://www.explorebestcolleges.com" class="text-teal-700 hover:underline font-medium">ExploreBestColleges.com</a> turns this data into <strong>3 searchable platforms</strong> that give students, parents, and educators the facts they need.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">6,000+ Colleges Ranked and Compared</h2>
      <p class="text-gray-600 mb-4">The <a href="https://www.explorebestcolleges.com" class="text-teal-700 hover:underline font-medium">main college directory</a> profiles over <strong>6,000 colleges and universities</strong> across the United States, drawing from the Department of Education's Integrated Postsecondary Education Data System (IPEDS) and the College Scorecard. Every institution — from Ivy League research universities to community colleges to trade schools — is represented with consistent, comparable data.</p>
      <p class="text-gray-600 mb-4">Each college profile includes admissions data (acceptance rate, test scores, application deadlines), enrollment figures (total students, demographics, full-time vs. part-time), financial information (tuition, fees, room and board, average financial aid), and outcomes data (graduation rate, retention rate, median earnings after graduation, and loan repayment rates). These metrics allow for genuine apples-to-apples comparisons that marketing materials deliberately obscure.</p>
      <p class="text-gray-600 mb-4">The outcomes data is particularly powerful. The College Scorecard tracks what graduates actually earn — broken down by institution and field of study — creating accountability that didn't exist a decade ago. When a school charges $60,000 per year but its graduates earn a median of $35,000, that's information prospective students desperately need before taking on six figures of debt.</p>

      <div class="bg-teal-50 border-l-4 border-teal-700 p-6 my-8 rounded-r-lg">
        <p class="text-2xl font-bold text-teal-800">6,000+ colleges ranked</p>
        <p class="text-teal-700">Every accredited institution in the country — with admissions, financial, and outcomes data from the Department of Education.</p>
      </div>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">229,000 Fields of Study</h2>
      <p class="text-gray-600 mb-4">Choosing the right school is only half the equation — choosing the right program matters just as much. The <a href="https://www.explorebestcolleges.com/degrees" class="text-teal-700 hover:underline font-medium">degrees database</a> catalogs <strong>229,000 fields of study</strong> offered across American colleges and universities, providing program-level data that the main college profiles can't capture.</p>
      <p class="text-gray-600 mb-4">For every program, users can see the number of completions, the types of degrees offered (certificate, associate's, bachelor's, master's, doctorate), and — where available — earnings outcomes specific to that program at that institution. This granularity is critical because outcomes vary enormously by field of study. A computer science degree from a mid-tier state university may produce better earnings outcomes than a humanities degree from an elite private university, but you'd never know that from a school's overall ranking.</p>
      <p class="text-gray-600 mb-4">The database also reveals which programs are growing and which are contracting. Over the past decade, certain fields — data science, nursing, cybersecurity — have seen explosive growth in program offerings, while others have quietly disappeared from college catalogs. Tracking these trends helps students align their education with labor market demand rather than pursuing fields with shrinking opportunities.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">99,000 Public Schools</h2>
      <p class="text-gray-600 mb-4">Education data doesn't start at the college level. The <a href="https://www.explorebestcolleges.com/public-schools" class="text-teal-700 hover:underline font-medium">public schools directory</a> covers <strong>99,000 K-12 public schools</strong> across the country, drawing from the National Center for Education Statistics (NCES) Common Core of Data. Each school profile includes enrollment, student-teacher ratio, grade levels served, Title I status, and demographic breakdowns.</p>
      <p class="text-gray-600 mb-4">For parents evaluating where to live, school quality is often the deciding factor. While our platform doesn't assign subjective "ratings" that oversimplify complex realities, it provides the raw data that empowers parents to make informed comparisons. How does the student-teacher ratio at your neighborhood school compare to others in the district? What percentage of students qualify for free or reduced lunch — a proxy for the socioeconomic diversity of the student body? These are questions the data can answer.</p>
      <p class="text-gray-600 mb-4">Researchers and policy analysts also use the public schools database to study educational equity. By mapping school characteristics against demographic and economic data, patterns emerge: which districts are investing in smaller class sizes, which communities have experienced enrollment decline, and how school resources correlate with student outcomes.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Data-Driven Education Decisions</h2>
      <p class="text-gray-600 mb-4">The education industry spends billions on marketing — every college wants to be perceived as selective, prestigious, and career-launching. Rankings from commercial publications add another layer of noise, using opaque methodologies that reward wealth and reputation over educational quality and student outcomes.</p>
      <p class="text-gray-600 mb-4">ExploreBestColleges cuts through this noise by presenting federal data directly. No proprietary rankings, no sponsored placements, no hidden methodologies. Just the data the Department of Education collects from every institution that receives federal financial aid — which is virtually all of them.</p>
      <p class="text-gray-600 mb-4">Visit <a href="https://www.explorebestcolleges.com" class="text-teal-700 hover:underline font-medium">ExploreBestColleges.com</a> to search colleges, compare degree programs, and explore public school data. Every search is free, and every metric is sourced directly from federal education databases.</p>
      <p class="text-gray-600">ExploreBestColleges is one of the education platforms built by <a href="/" class="text-teal-700 hover:underline font-medium">TheDataProject.AI</a> — making education data transparent, searchable, and accessible to everyone.</p>
    `,
  },
  {
    slug: "heritage-infrastructure",
    title: "100K+ Historic Places and the Infrastructure Data Hiding in Plain Sight",
    description: "HeritageIndex.org maps America's historic places, dams, fire stations, and museums — turning overlooked federal infrastructure datasets into searchable public tools across 5 platforms.",
    date: "2026-02-20",
    content: `
      <p class="text-lg text-gray-600 mb-8">There are over 100,000 places in the United States listed on the National Register of Historic Places — yet most Americans couldn't name five of them outside their own state. There are 88,000 dams across the country, many of them aging and in need of repair, but the data about their condition is buried in Army Corps of Engineers databases that few people know exist. <a href="https://www.heritageindex.org" class="text-teal-700 hover:underline font-medium">HeritageIndex.org</a> brings these overlooked infrastructure and heritage datasets into the open across <strong>5 searchable platforms</strong>.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">100,000+ Historic Places</h2>
      <p class="text-gray-600 mb-4">The <a href="https://www.heritageindex.org/historic-places" class="text-teal-700 hover:underline font-medium">historic places</a> database contains over <strong>100,000 listings</strong> from the National Register of Historic Places, maintained by the National Park Service. This includes everything from architecturally significant buildings and archaeological sites to historic districts and cultural landscapes that tell the story of American history.</p>
      <p class="text-gray-600 mb-4">Each listing includes the property name, location, date of listing, significance criteria, and the period of significance — the era from which the property derives its historical importance. Users can search by state, county, or city, making it easy to discover historic resources in their own community or in places they plan to visit.</p>
      <p class="text-gray-600 mb-4">The National Register is more than a tourist guide. Listing on the register qualifies property owners for federal preservation tax incentives and grants, makes properties eligible for consideration in federal project planning, and provides a formal recognition of historical significance that can influence local zoning and development decisions. Yet the National Park Service's own database interface makes it difficult to search, filter, or analyze this data at scale. HeritageIndex changes that by providing modern search capabilities and geographic browsing.</p>

      <div class="bg-teal-50 border-l-4 border-teal-700 p-6 my-8 rounded-r-lg">
        <p class="text-2xl font-bold text-teal-800">100K+ historic places mapped</p>
        <p class="text-teal-700">Every listing on the National Register of Historic Places — searchable by name, location, and period of significance.</p>
      </div>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">88,000 Dams: America's Aging Infrastructure</h2>
      <p class="text-gray-600 mb-4">The <a href="https://www.heritageindex.org/dams" class="text-teal-700 hover:underline font-medium">dams database</a> indexes <strong>88,000 dams</strong> from the National Inventory of Dams (NID), maintained by the U.S. Army Corps of Engineers. Every dam in the country — from massive hydroelectric installations on the Columbia River to small earthen dams on private land — is cataloged with its location, owner, purpose, height, storage capacity, and hazard classification.</p>
      <p class="text-gray-600 mb-4">The hazard classification is perhaps the most important data point. Dams are classified as high hazard (failure would cause loss of life), significant hazard (failure would cause economic damage), or low hazard. The American Society of Civil Engineers has repeatedly given America's dam infrastructure a near-failing grade, citing the thousands of high-hazard dams that are deficient and the billions of dollars needed for repairs.</p>
      <p class="text-gray-600 mb-4">HeritageIndex makes this data accessible to communities living downstream of aging dams. When a dam's condition data is buried in an Army Corps database that requires specialist knowledge to navigate, communities can't advocate effectively for repairs or emergency planning. When the same data is searchable by location with clear hazard classifications, residents can find dams near their homes and understand the risks they face. This is infrastructure transparency at its most fundamental — helping people understand threats to their safety that exist in plain sight.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">51,000 Fire Stations</h2>
      <p class="text-gray-600 mb-4">The <a href="https://www.heritageindex.org/fire-stations" class="text-teal-700 hover:underline font-medium">fire stations directory</a> catalogs <strong>51,000 fire stations</strong> across the United States from FEMA's National Fire Department Registry. Each listing includes the department name, station address, type of department (career, volunteer, combination), and contact information.</p>
      <p class="text-gray-600 mb-4">This data serves multiple audiences. Homeowners and insurance companies use fire station proximity as a factor in property insurance ratings — the closer a home is to a fire station, the lower the insurance premium. Home buyers evaluating neighborhoods can check fire protection coverage. Researchers studying public safety infrastructure can analyze the distribution of fire services relative to population density, identifying communities that may be underserved.</p>
      <p class="text-gray-600 mb-4">The volunteer vs. career distinction is particularly telling. In many rural areas, fire protection depends entirely on volunteer departments, which face growing recruitment challenges as demographics shift and working patterns change. Mapping these departments helps communities and policymakers understand where volunteer fire protection may be at risk and where professional services might need to expand.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">30,000 Museums</h2>
      <p class="text-gray-600 mb-4">The <a href="https://www.heritageindex.org/museums" class="text-teal-700 hover:underline font-medium">museums directory</a> indexes <strong>30,000 museums</strong> across the country, sourced from the Institute of Museum and Library Services (IMLS) Museum Universe Data File. The collection encompasses art museums, history museums, science centers, children's museums, botanical gardens, zoos, nature centers, and historic houses — the full spectrum of institutions dedicated to preserving and presenting cultural, scientific, and historical heritage.</p>
      <p class="text-gray-600 mb-4">Each listing includes the museum's name, type, location, revenue, and income information. Users can search by type and location to find museums near them, discover institutions they didn't know existed, or plan cultural excursions when traveling. The data also supports research into the museum sector — how institutions are distributed across urban and rural areas, how revenue varies by type and region, and which communities have the richest cultural infrastructure.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Making Infrastructure Visible</h2>
      <p class="text-gray-600 mb-4">The datasets in HeritageIndex share a common thread: they all describe physical infrastructure — built, maintained, and often neglected — that shapes daily life in communities across America. Historic places anchor community identity. Dams control flood waters and store drinking water. Fire stations provide emergency response. Museums preserve collective memory. Yet the data about these assets is scattered across federal agencies, formatted for specialists, and effectively invisible to the public they serve.</p>
      <p class="text-gray-600 mb-4">Visit <a href="https://www.heritageindex.org" class="text-teal-700 hover:underline font-medium">HeritageIndex.org</a> to explore historic places in your state, check dam safety data near your home, find fire stations and museums, and discover the infrastructure data hiding in plain sight.</p>
      <p class="text-gray-600">HeritageIndex is one of the infrastructure data platforms built by <a href="/" class="text-teal-700 hover:underline font-medium">TheDataProject.AI</a> — making heritage and infrastructure data searchable, visible, and accessible to everyone.</p>
    `,
  },
  {
    slug: "ppp-loan-lookup",
    title: "11.4 Million PPP Loans: Where Pandemic Relief Money Actually Went",
    description: "PPPLoanLookup.com makes every Paycheck Protection Program loan searchable — revealing how $800 billion in emergency funds were distributed across American businesses.",
    date: "2026-02-20",
    content: `
      <p class="text-lg text-gray-600 mb-8">In 2020 and 2021, the federal government distributed over <strong>$800 billion</strong> through the Paycheck Protection Program (PPP), the largest emergency business lending program in American history. The program was designed to keep workers on payroll during COVID-19 shutdowns — but the speed of distribution, the volume of applications, and the limited oversight created conditions ripe for fraud, misallocation, and abuse. <a href="https://www.ppploanlookup.com" class="text-teal-700 hover:underline font-medium">PPPLoanLookup.com</a> makes all <strong>11.4 million+ PPP loan records</strong> searchable, giving the public the tools to see where the money went.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">The Scale of the Program</h2>
      <p class="text-gray-600 mb-4">The PPP operated in multiple rounds, first under the CARES Act and then under subsequent legislation. The Small Business Administration (SBA) approved over 11.4 million individual loans to businesses across every industry, every state, and nearly every ZIP code in the country. Loan amounts ranged from a few hundred dollars for sole proprietors to millions for large companies with hundreds of employees.</p>
      <p class="text-gray-600 mb-4">PPPLoanLookup.com indexes every one of these loans with data sourced directly from the SBA's public disclosure files. Each record includes the borrower's business name, address, industry code (NAICS), loan amount, lender name, number of jobs reported, loan approval date, and forgiveness amount. Users can search by business name, lender, location, industry, or loan amount range — finding specific businesses or analyzing patterns across the entire program.</p>

      <div class="bg-teal-50 border-l-4 border-teal-700 p-6 my-8 rounded-r-lg">
        <p class="text-2xl font-bold text-teal-800">11.4M+ PPP loans searchable</p>
        <p class="text-teal-700">Every Paycheck Protection Program loan approved by the SBA — searchable by business name, lender, location, and amount.</p>
      </div>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Following the Money</h2>
      <p class="text-gray-600 mb-4">The PPP data tells multiple stories, depending on how you explore it. At the macro level, it reveals how emergency funds were distributed across industries, geographies, and business sizes. Did the money reach the small businesses it was designed to help? Or did larger, better-connected companies capture a disproportionate share? The data allows users to investigate these questions directly.</p>
      <p class="text-gray-600 mb-4">Key patterns that emerge from the data include:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><strong>Industry concentration:</strong> Certain industries — hospitality, food service, healthcare — received a large share of loans, reflecting the sectors most affected by pandemic shutdowns. But the data also reveals loans to industries that were less obviously affected, raising questions about targeting.</li>
        <li><strong>Geographic distribution:</strong> Loan distribution by ZIP code shows significant variation in how effectively the program reached different communities. Some areas received far more per capita than others, correlating with access to banking relationships and awareness of the application process.</li>
        <li><strong>Lender patterns:</strong> The data reveals which banks and fintech lenders processed the most loans, how average loan sizes varied by lender, and which lenders specialized in particular business sizes or industries.</li>
        <li><strong>Forgiveness rates:</strong> The vast majority of PPP loans were forgiven — meaning taxpayers absorbed the cost. The forgiveness data shows which loans were fully forgiven, partially forgiven, or required repayment.</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">The Fraud Problem</h2>
      <p class="text-gray-600 mb-4">PPP fraud became one of the biggest financial crime stories in American history. The Department of Justice has charged thousands of individuals with PPP fraud, recovering billions in stolen funds — yet prosecutors acknowledge they've only scratched the surface. Estimates suggest that between $64 billion and $117 billion in PPP loans were fraudulent.</p>
      <p class="text-gray-600 mb-4">PPPLoanLookup.com doesn't make fraud determinations — that's the job of federal investigators and prosecutors. But the platform provides the transparency that makes public scrutiny possible. Journalists have used PPP loan data to identify businesses that received loans but appeared to have no employees. Community members have flagged loans to addresses that turned out to be vacant lots. Researchers have analyzed patterns consistent with organized fraud rings operating across multiple states.</p>
      <p class="text-gray-600 mb-4">The ability to search any business and see its PPP loan details creates a basic layer of accountability that the program originally lacked. When loan recipients know that anyone can look up their loan, there's at least a deterrent against the most brazen forms of abuse.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">A Historical Record</h2>
      <p class="text-gray-600 mb-4">Beyond its immediate accountability function, the PPP loan database serves as a historical record of an unprecedented moment in American economic policy. Future researchers studying the pandemic response, emergency lending programs, or small business economics will need access to this data. By making it permanently searchable and accessible, PPPLoanLookup.com ensures that the lessons of the PPP — both its successes in saving businesses and its failures in preventing fraud — remain available for study and analysis.</p>
      <p class="text-gray-600 mb-4">The PPP experiment also offers critical lessons for future emergency programs. When the next crisis demands rapid fund distribution, policymakers can study the PPP data to understand what worked, what was exploited, and how to design better safeguards without sacrificing the speed that emergencies require.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Search the Database</h2>
      <p class="text-gray-600 mb-4">Visit <a href="https://www.ppploanlookup.com" class="text-teal-700 hover:underline font-medium">PPPLoanLookup.com</a> to search any business, lender, or location. See loan amounts, forgiveness status, jobs reported, and industry classification for every PPP loan approved in the United States.</p>
      <p class="text-gray-600">PPPLoanLookup is one of the government transparency platforms built by <a href="/" class="text-teal-700 hover:underline font-medium">TheDataProject.AI</a> — making pandemic relief data searchable, transparent, and accessible to everyone.</p>
    `,
  },
  {
    slug: "california-unclaimed-property",
    title: "82 Million Unclaimed Property Records: Is California Holding Your Money?",
    description: "CAUnclaimedProperty.com indexes 82M+ unclaimed property records from the California State Controller — helping residents find forgotten bank accounts, insurance payments, and other assets.",
    date: "2026-02-20",
    content: `
      <p class="text-lg text-gray-600 mb-8">Right now, the State of California is holding over <strong>$10 billion</strong> in unclaimed property — forgotten bank accounts, uncashed checks, insurance payouts, security deposits, stock dividends, and other financial assets that have been turned over to the state because their rightful owners couldn't be located. <a href="https://www.caunclaimedproperty.com" class="text-teal-700 hover:underline font-medium">CAUnclaimedProperty.com</a> indexes <strong>82 million+ records</strong> from the California State Controller's Office, making it dramatically easier to search for property that might belong to you or your family.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">How Property Becomes "Unclaimed"</h2>
      <p class="text-gray-600 mb-4">The concept of unclaimed property is straightforward but poorly understood by most Americans. When a financial institution — a bank, insurance company, brokerage, employer, or utility — holds money or assets that the owner hasn't interacted with for a specified dormancy period (typically three to five years in California), the institution is required by law to turn that property over to the state through a process called escheatment.</p>
      <p class="text-gray-600 mb-4">The state then holds the property indefinitely, waiting for the rightful owner or their heirs to claim it. The most common types of unclaimed property include:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><strong>Bank accounts:</strong> Savings and checking accounts that became dormant after the owner moved, forgot about the account, or passed away without the heirs knowing the account existed</li>
        <li><strong>Insurance payments:</strong> Life insurance proceeds, refund checks, and policy payouts that were never claimed by beneficiaries who didn't know the policy existed</li>
        <li><strong>Payroll and wages:</strong> Final paychecks, uncashed commission checks, and expense reimbursements from former employers</li>
        <li><strong>Securities:</strong> Stock certificates, dividends, and mutual fund distributions for investors who lost track of their holdings, often through mergers and name changes</li>
        <li><strong>Utility deposits:</strong> Security deposits from apartments, utilities, and telecommunications providers that were never returned after the customer moved</li>
      </ul>

      <div class="bg-teal-50 border-l-4 border-teal-700 p-6 my-8 rounded-r-lg">
        <p class="text-2xl font-bold text-teal-800">82M+ unclaimed property records</p>
        <p class="text-teal-700">Forgotten bank accounts, insurance payouts, and other assets held by the State of California — searchable by name.</p>
      </div>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Why 82 Million Records?</h2>
      <p class="text-gray-600 mb-4">The sheer volume of unclaimed property records in California reflects both the state's massive population and the accumulation of decades of escheatment. Every year, thousands of financial institutions report new dormant accounts to the State Controller, adding millions of records to the database. Many records are for small amounts — a $15 utility deposit, a $50 uncashed check — but others represent substantial sums: forgotten retirement accounts, life insurance policies worth tens of thousands of dollars, and stock portfolios that appreciated significantly while sitting unclaimed.</p>
      <p class="text-gray-600 mb-4">The 82 million figure also reflects the fact that a single individual may have multiple records — one for each separate account, policy, or asset that was escheated. Searching for a common name might return hundreds of results across different holders and property types, so the platform includes filtering tools to help users narrow results by location and property type.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">The Search Process</h2>
      <p class="text-gray-600 mb-4">CAUnclaimedProperty.com provides a fast, user-friendly search interface for the State Controller's unclaimed property database. Users can search by name — including maiden names, former names, and business names — to find potential matches. The search results show the reported owner name, property type, the company that reported the property, and the amount (when available).</p>
      <p class="text-gray-600 mb-4">The platform is designed to be the fastest and most accessible way to search California's unclaimed property records. While the State Controller's office maintains its own search tool, CAUnclaimedProperty.com offers enhanced search capabilities, faster results for common queries, and a cleaner interface that makes it easier for users to identify potential matches and understand what they're looking at.</p>
      <p class="text-gray-600 mb-4">It's worth noting that finding a potential match is just the first step. To actually claim property, owners must file a claim through the State Controller's official process, which may require documentation proving identity and ownership. CAUnclaimedProperty.com helps with the discovery phase — finding property you didn't know existed — and then directs users to the official claims process.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">A Family Research Tool</h2>
      <p class="text-gray-600 mb-4">Unclaimed property searches are especially valuable for families dealing with the estate of a deceased relative. When a parent or grandparent passes away, surviving family members often don't have a complete picture of their financial accounts. Insurance policies may have been purchased decades ago, bank accounts at institutions that have since merged may have been forgotten, and stock certificates may be sitting in a drawer without any indication of their current value.</p>
      <p class="text-gray-600 mb-4">Searching for a deceased relative's name in the unclaimed property database can surface assets that the estate would otherwise never recover. Life insurance policies are a particularly common find — a policy purchased in the 1970s may have been paid up and forgotten, with the benefits escheating to the state after the insured person's death when the insurance company couldn't locate the beneficiary.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Beware of Scams</h2>
      <p class="text-gray-600 mb-4">The unclaimed property space has unfortunately attracted a cottage industry of "finders" and "heir hunters" who charge fees — often 10% to 35% of the recovered amount — to locate and claim property on behalf of owners. While some of these services are legitimate, many exploit the fact that most people don't know they can search for and claim unclaimed property themselves at no cost.</p>
      <p class="text-gray-600 mb-4">CAUnclaimedProperty.com is free to search and always will be. We believe that helping people find their own property shouldn't come with a price tag. The state holds this money in trust for its rightful owners, and accessing information about it should be as simple as typing a name into a search box.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Start Your Search</h2>
      <p class="text-gray-600 mb-4">Visit <a href="https://www.caunclaimedproperty.com" class="text-teal-700 hover:underline font-medium">CAUnclaimedProperty.com</a> to search your name, your family members' names, and any former names you or your relatives may have used. With 82 million records in the database, the odds are surprisingly good that the State of California is holding something that belongs to you.</p>
      <p class="text-gray-600">CAUnclaimedProperty is one of the public records platforms built by <a href="/" class="text-teal-700 hover:underline font-medium">TheDataProject.AI</a> — making government-held data free, searchable, and accessible to everyone.</p>
    `,
  },
  {
    slug: "launching-openlobby",
    title: "Launching OpenLobby: $37.7 Billion in Federal Lobbying, Exposed",
    description: "We built the most comprehensive free lobbying database on the internet. 726,000+ Senate filings, 46,000 clients, 240 government agencies, and 25 original investigations — all searchable and open.",
    date: "2026-02-25",
    content: `
      <p class="text-lg text-gray-600 mb-8">Today we're launching <a href="https://www.openlobby.us" class="text-teal-700 hover:underline font-medium">OpenLobby</a> — a free, searchable platform that tracks <strong>$37.7 billion in federal lobbying spending</strong> across eight years of Senate Lobbying Disclosure Act filings. Every client, every firm, every lobbyist, every dollar — all from public records, all open to everyone.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">The Scale of Lobbying in America</h2>
      <p class="text-gray-600 mb-4">Federal lobbying is a massive industry hiding in plain sight. The data is technically public — filed quarterly with the Senate Office of Public Records — but it's buried in PDFs and clunky government interfaces that make meaningful analysis nearly impossible for ordinary people.</p>
      <p class="text-gray-600 mb-4">We changed that. OpenLobby processes <strong>726,268 filings</strong> spanning 2018 through 2025, covering:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><strong>46,145 lobbying clients</strong> — from Fortune 500 companies to trade associations to foreign governments</li>
        <li><strong>7,757 lobbying firms</strong> — the K Street firms that sell access to power</li>
        <li><strong>23,545 individual lobbyists</strong> — including thousands of former government officials</li>
        <li><strong>240 government agencies</strong> targeted by lobbying activity</li>
        <li><strong>79 issue categories</strong> — from healthcare to defense to cryptocurrency</li>
      </ul>

      <div class="bg-teal-50 border-l-4 border-teal-700 p-6 my-8 rounded-r-lg">
        <p class="text-2xl font-bold text-teal-800">$37.7 billion in lobbying spending tracked</p>
        <p class="text-teal-700">726K+ filings across 46K clients — every dollar searchable, every connection mapped.</p>
      </div>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">What Makes OpenLobby Different</h2>
      <p class="text-gray-600 mb-4">There are other lobbying databases out there. What makes OpenLobby unique is what we do with the data:</p>
      <p class="text-gray-600 mb-4"><strong>Cross-dataset intelligence.</strong> We link lobbying filings to federal contracts, Medicare spending, and government workforce data. When a defense contractor spends $2 million lobbying and receives $4.4 billion in contracts, we show you that connection. Nobody else does this.</p>
      <p class="text-gray-600 mb-4"><strong>ROI calculations.</strong> We calculated the actual return on lobbying investment. The results are staggering — academic research suggests a 22,000% ROI on lobbying, and our data confirms it. Our <a href="https://www.openlobby.us/investigations/the-22000-percent-roi" class="text-teal-700 hover:underline">ROI investigation</a> breaks it down.</p>
      <p class="text-gray-600 mb-4"><strong>Revolving door tracking.</strong> Over 5,000 former government officials are now registered lobbyists. Our <a href="https://www.openlobby.us/revolving-door" class="text-teal-700 hover:underline">Revolving Door tracker</a> shows who they are, where they came from, and how much more they charge compared to lobbyists without government experience.</p>
      <p class="text-gray-600 mb-4"><strong>Government agency pressure analysis.</strong> Every lobbying filing discloses which agencies were contacted. Our <a href="https://www.openlobby.us/agencies" class="text-teal-700 hover:underline">agency pressure page</a> reveals which parts of government face the most lobbying — the White House Office alone appears in 109,000+ lobbying activities.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">25 Original Investigations</h2>
      <p class="text-gray-600 mb-4">OpenLobby isn't just a database — it's a platform for data-driven journalism. We've published 25 original investigations, including:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><a href="https://www.openlobby.us/investigations/the-22000-percent-roi" class="text-teal-700 hover:underline"><strong>The 22,000% ROI</strong></a> — How lobbying became America's best investment</li>
        <li><a href="https://www.openlobby.us/investigations/doge-vs-lobbying" class="text-teal-700 hover:underline"><strong>DOGE vs. The Lobbying Machine</strong></a> — $5.2 billion in lobbying fights government efficiency efforts</li>
        <li><a href="https://www.openlobby.us/investigations/big-pharma-lobbying" class="text-teal-700 hover:underline"><strong>Big Pharma's Lobbying Empire</strong></a> — The healthcare industry's multi-billion dollar influence operation</li>
        <li><a href="https://www.openlobby.us/investigations/tariff-lobbying-surge" class="text-teal-700 hover:underline"><strong>The Tariff Lobbying Surge</strong></a> — A 560% spike as companies scramble for exemptions</li>
        <li><a href="https://www.openlobby.us/investigations/defense-contractor-lobbying" class="text-teal-700 hover:underline"><strong>Defense Contractor Lobbying</strong></a> — How $2M in lobbying turns into $4.4B in contracts</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Key Findings</h2>
      <p class="text-gray-600 mb-4">Our analysis of eight years of lobbying data has surfaced several striking patterns:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><strong>2025 is on track to shatter records:</strong> With $6.0 billion already reported, lobbying spending is surging — driven by tariff fights, AI regulation battles, and government restructuring.</li>
        <li><strong>The US Chamber of Commerce dominates:</strong> At $607.9 million in lobbying spend, the Chamber outpaces every other client by a factor of three.</li>
        <li><strong>The revolving door commands a premium:</strong> Former government officials charge significantly more as lobbyists than those without government experience. Access has a price.</li>
        <li><strong>Congress gets lobbied the most (by far):</strong> The House and Senate appear in over 1.2 million lobbying activities each. But the White House Office is the most-targeted executive branch entity.</li>
        <li><strong>Healthcare leads all issue areas:</strong> More lobbying dollars flow to healthcare than any other category — driven by pharmaceutical companies, hospital systems, and insurance giants.</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Interactive Tools</h2>
      <p class="text-gray-600 mb-4">Beyond browsing and searching, OpenLobby includes several interactive analysis tools:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><strong>Lobbying ROI Calculator</strong> — Compare what companies spend on lobbying vs. what they receive in federal contracts</li>
        <li><strong>Influence Score</strong> — Our composite ranking of the most influential lobbying clients across 5 dimensions</li>
        <li><strong>Spending Trend Analysis</strong> — Track how lobbying spending has evolved year by year</li>
        <li><strong>Compare Tool</strong> — Put any two clients or firms side by side</li>
        <li><strong>Lookup Your Rep</strong> — See which companies are lobbying from your state</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Free, Open, No Strings</h2>
      <p class="text-gray-600 mb-4">OpenLobby has no paywall, no login requirement, and no ads. The data comes from the Senate Office of Public Records and is processed entirely by our own pipeline. We believe transparency about who's lobbying your government shouldn't cost anything.</p>
      <p class="text-gray-600 mb-4">The platform also includes downloadable data exports, embeddable widgets for journalists, and an RSS feed of our latest investigations.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Explore OpenLobby</h2>
      <p class="text-gray-600">Visit <a href="https://www.openlobby.us" class="text-teal-700 hover:underline font-medium">openlobby.us</a> to search clients, firms, and lobbyists — or start with our <a href="https://www.openlobby.us/investigations" class="text-teal-700 hover:underline font-medium">investigations</a> to see what the data reveals. OpenLobby is part of the <a href="/" class="text-teal-700 hover:underline font-medium">TheDataProject.AI</a> family of free public data platforms.</p>
    `,
  },
  {
    slug: "launching-vaccinewatch",
    title: "Launching VaccineWatch: 1.98 Million VAERS Reports, Exposed and Explained",
    description: "We built the most comprehensive free VAERS analysis platform on the internet. 1.98M reports, 104 vaccines, signal detection, reporting rate calculators, and 23 original analysis articles.",
    date: "2026-02-25",
    content: `
      <p class="text-lg text-gray-600 mb-8">Today we're launching <a href="https://www.vaccinewatch.org" class="text-teal-700 hover:underline font-medium">VaccineWatch</a> — a free, transparent platform for exploring vaccine adverse event data from the CDC/FDA's VAERS database. <strong>1,983,260 reports</strong> spanning 35 years, 104 vaccines, and 500+ symptoms — all searchable, all contextualized, all open to everyone.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Why We Built This</h2>
      <p class="text-gray-600 mb-4">VAERS (Vaccine Adverse Event Reporting System) is the nation's early warning system for vaccine safety. The raw data is publicly available, but it's notoriously difficult to access, understand, and interpret correctly. Existing tools are either outdated, academically hostile, or lack the context needed to understand what the numbers actually mean.</p>
      <p class="text-gray-600 mb-4">VaccineWatch fills that gap. We're neither pro-vaccine nor anti-vaccine — we're pro-transparency. Our goal is to make vaccine safety data accessible, understandable, and properly contextualized so researchers, journalists, and the public can make informed decisions.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">What's Inside</h2>
      <p class="text-gray-600 mb-4">VaccineWatch processes every VAERS report from 1990 through February 2026:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-6 space-y-1">
        <li><strong>1,983,260</strong> total adverse event reports</li>
        <li><strong>104</strong> vaccine types tracked</li>
        <li><strong>500+</strong> symptom categories</li>
        <li><strong>27,732</strong> death reports (with extensive context on what this means)</li>
        <li><strong>143,653</strong> hospitalization reports</li>
        <li><strong>65</strong> jurisdictions (all 50 states + territories)</li>
        <li><strong>46</strong> manufacturers</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">What Makes VaccineWatch Different</h2>
      <p class="text-gray-600 mb-4">There are other VAERS tools out there. Here's what sets VaccineWatch apart:</p>
      <p class="text-gray-600 mb-4"><strong>Reporting Rate Calculator.</strong> The single most important context missing from raw VAERS numbers — how many adverse events per million doses administered. We combine VAERS data with CDC dose estimates for <a href="https://www.vaccinewatch.org/tools/reporting-rates" class="text-teal-700 hover:underline">16 vaccine types</a>. No other public VAERS tool offers this.</p>
      <p class="text-gray-600 mb-4"><strong>Signal Detection Dashboard.</strong> FDA-style Proportional Reporting Ratio (PRR) analysis across all 1.98M reports. We detected <a href="https://www.vaccinewatch.org/tools/signal-detection" class="text-teal-700 hover:underline">5,225 safety signals</a> — and the analysis validates known signals like myocarditis after mRNA vaccines and intussusception after rotavirus vaccines.</p>
      <p class="text-gray-600 mb-4"><strong>Context everywhere.</strong> Every data page includes disclaimers, methodology notes, and explanations of what VAERS data can and cannot tell you. We lead with <a href="https://www.vaccinewatch.org/analysis/denominator-problem" class="text-teal-700 hover:underline">The Denominator Problem</a> — the most critical limitation most people miss.</p>
      <p class="text-gray-600 mb-4"><strong>15 interactive tools.</strong> From onset timing calculators to lot number lookups, dose comparison tools, age explorers, and severity profiles — all built to help users explore the data responsibly.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">23 Original Analysis Articles</h2>
      <p class="text-gray-600 mb-4">VaccineWatch isn't just a database — it's a platform for data-driven health journalism:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-6 space-y-1">
        <li><a href="https://www.vaccinewatch.org/analysis/denominator-problem" class="text-teal-700 hover:underline"><strong>The Denominator Problem</strong></a> — Why raw VAERS numbers are meaningless without dose context</li>
        <li><a href="https://www.vaccinewatch.org/analysis/covid-impact" class="text-teal-700 hover:underline"><strong>The COVID-19 Impact</strong></a> — How the pandemic changed vaccine reporting forever</li>
        <li><a href="https://www.vaccinewatch.org/analysis/myocarditis" class="text-teal-700 hover:underline"><strong>Myocarditis Deep Dive</strong></a> — The confirmed signal, who's at risk, and what outcomes look like</li>
        <li><a href="https://www.vaccinewatch.org/analysis/death-reports" class="text-teal-700 hover:underline"><strong>Death Reports in Context</strong></a> — What 27,732 death reports actually mean</li>
        <li><a href="https://www.vaccinewatch.org/analysis/reporting-bias" class="text-teal-700 hover:underline"><strong>Reporting Bias</strong></a> — Understanding the limitations of voluntary reporting</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">14 Vaccine Side Effects Guides</h2>
      <p class="text-gray-600 mb-4">Dedicated pages for the most-searched vaccines — <a href="https://www.vaccinewatch.org/side-effects/covid" class="text-teal-700 hover:underline">COVID-19</a>, <a href="https://www.vaccinewatch.org/side-effects/flu" class="text-teal-700 hover:underline">Flu</a>, <a href="https://www.vaccinewatch.org/side-effects/mmr" class="text-teal-700 hover:underline">MMR</a>, <a href="https://www.vaccinewatch.org/side-effects/hpv" class="text-teal-700 hover:underline">HPV</a>, <a href="https://www.vaccinewatch.org/side-effects/shingles" class="text-teal-700 hover:underline">Shingles</a>, and more — each with VAERS data breakdowns, manufacturer comparisons, and medical context.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Free and Open</h2>
      <p class="text-gray-600 mb-4">VaccineWatch has no paywall, no login requirement, and no ads. The data comes directly from the CDC/FDA VAERS public data files and is updated quarterly. We believe transparent access to vaccine safety data shouldn't cost anything.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Explore VaccineWatch</h2>
      <p class="text-gray-600">Visit <a href="https://www.vaccinewatch.org" class="text-teal-700 hover:underline font-medium">vaccinewatch.org</a> to explore vaccines, symptoms, and safety signals — or start with our <a href="https://www.vaccinewatch.org/analysis" class="text-teal-700 hover:underline font-medium">analysis articles</a> to see what the data reveals. VaccineWatch is part of the <a href="/" class="text-teal-700 hover:underline font-medium">TheDataProject.AI</a> family of free public data platforms.</p>
    `,
  },
  {
    slug: "launching-openimmigration",
    title: "Launching OpenImmigration: 9.6 Million Court Cases, 1,409 Judges, and the Full Picture of U.S. Immigration",
    description: "How we turned 4.2GB of DOJ immigration court records into a free, searchable platform covering the full spectrum — from border encounters to court outcomes to deportation.",
    date: "2026-02-26",
    content: `
      <p class="text-lg text-gray-600 mb-8">Today we're launching <a href="https://www.openimmigration.us" class="text-teal-700 hover:underline font-medium">OpenImmigration</a> — a free platform that makes U.S. immigration data accessible to everyone. Built on <strong>4.2GB of DOJ Executive Office for Immigration Review (EOIR) data</strong>, supplemented by CBP border encounter records, ICE enforcement data, and USCIS statistics, OpenImmigration covers the full immigration spectrum: <strong>9.6 million court cases</strong>, <strong>16.2 million proceedings</strong>, <strong>12 million border encounters</strong>, and much more.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Why Immigration Data Matters</h2>
      <p class="text-gray-600 mb-4">Immigration is one of the most debated topics in America, but the underlying data is scattered across government agencies, buried in dense FOIA downloads, and almost impossible for a normal person to explore. TRAC at Syracuse University has done important work here, but their tools are dated and paywalled for most features.</p>
      <p class="text-gray-600 mb-4">We built OpenImmigration to change that. Every number on the site links back to its source. Every chart is interactive. Every court, nationality, and judge has a dedicated detail page you can explore.</p>

      <div class="bg-teal-50 border-l-4 border-teal-700 p-6 my-8 rounded-r-lg">
        <p class="text-2xl font-bold text-teal-800">1.9 million cases pending</p>
        <p class="text-teal-700">The immigration court backlog has reached historic levels — with some courts averaging over 1,000 days per case.</p>
      </div>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">What's Inside</h2>
      <p class="text-gray-600 mb-4">OpenImmigration isn't just court data. It covers the full journey:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><strong>Border Encounters:</strong> 12 million CBP encounters (FY2020–2026), broken down by nationality, region, and encounter type.</li>
        <li><strong>Immigration Courts:</strong> 88 courts with case volumes, asylum grant rates, top nationalities, and average wait times.</li>
        <li><strong>1,409 Judges:</strong> Individual profiles showing decision patterns, grant rates, and caseloads — revealing dramatic variation in outcomes.</li>
        <li><strong>258 Nationalities:</strong> How cases play out differently for people from different countries.</li>
        <li><strong>ICE Enforcement:</strong> Deportation and removal data from FY2014 through FY2026.</li>
        <li><strong>Drug Seizures:</strong> 1.9 million pounds seized at the border, including 65,000 lbs of fentanyl.</li>
        <li><strong>Legal Pathways:</strong> Green cards, naturalization, refugees, DACA, TPS, and visa overstays.</li>
        <li><strong>Appeals &amp; Bonds:</strong> 1.46 million BIA appeals and 1.59 million bond hearings with outcome analysis.</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Key Findings</h2>
      <p class="text-gray-600 mb-4">Processing 9.6 million cases reveals patterns that rarely make the headlines:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><strong>Judge roulette is real:</strong> Asylum grant rates vary from under 5% to over 80% depending on the judge assigned — same case, wildly different odds.</li>
        <li><strong>Representation changes everything:</strong> Immigrants with legal representation are far more likely to win their cases, yet the majority go unrepresented.</li>
        <li><strong>Geography is destiny:</strong> Where your case is heard matters as much as the facts. Some courts grant asylum at 5x the rate of others.</li>
        <li><strong>The backlog compounds:</strong> 1.9 million pending cases, with average wait times approaching 400 days — and some courts over 1,000.</li>
        <li><strong>Fentanyl dominates seizures:</strong> 65,000 lbs of fentanyl seized at the border since FY2023, overwhelmingly at ports of entry.</li>
      </ul>

      <div class="bg-teal-50 border-l-4 border-teal-700 p-6 my-8 rounded-r-lg">
        <p class="text-2xl font-bold text-teal-800">1,800+ pages of immigration data</p>
        <p class="text-teal-700">Every court, nationality, and judge gets a dedicated profile page with charts, stats, and cross-references.</p>
      </div>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">14 Data-Driven Analysis Articles</h2>
      <p class="text-gray-600 mb-4">Beyond the raw data, we published 14 original analysis articles exploring the system's biggest questions:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><a href="https://www.openimmigration.us/analysis/backlog-crisis" class="text-teal-700 hover:underline">The Immigration Court Backlog Crisis</a></li>
        <li><a href="https://www.openimmigration.us/analysis/judge-variation" class="text-teal-700 hover:underline">Judge Roulette: How Your Judge Determines Your Fate</a></li>
        <li><a href="https://www.openimmigration.us/analysis/fentanyl-pipeline" class="text-teal-700 hover:underline">The Fentanyl Pipeline: What Border Seizure Data Really Shows</a></li>
        <li><a href="https://www.openimmigration.us/analysis/representation-gap" class="text-teal-700 hover:underline">The Representation Gap</a></li>
        <li><a href="https://www.openimmigration.us/analysis/bond-system" class="text-teal-700 hover:underline">The Price of Freedom: Inside the Bond System</a></li>
        <li>...and 9 more covering asylum patterns, deportation, children in court, geographic disparities, and the TPS system.</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Interactive Tools</h2>
      <p class="text-gray-600 mb-4">OpenImmigration includes tools that go beyond static charts:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><strong>Compare Courts &amp; Judges:</strong> Select up to 5 courts or judges for side-by-side comparison with bar charts and data tables.</li>
        <li><strong>Search:</strong> Full-text search across all courts, nationalities, and judges — with keyboard shortcut (press /).</li>
        <li><strong>Statistics at a Glance:</strong> Every key number in one page with 7 data sections.</li>
        <li><strong>Glossary:</strong> 34 immigration court terms defined, with structured data for search engines.</li>
        <li><strong>Downloads:</strong> 18 free JSON datasets for researchers and journalists.</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Part of TheDataProject Portfolio</h2>
      <p class="text-gray-600 mb-4">OpenImmigration is the eighth platform in our growing family of free government data tools:</p>
      <ul class="list-disc pl-6 text-gray-600 mb-4 space-y-2">
        <li><a href="https://www.openmedicaid.org" class="text-teal-700 hover:underline">OpenMedicaid</a> — $1.09 trillion in Medicaid payments</li>
        <li><a href="https://www.openmedicare.us" class="text-teal-700 hover:underline">OpenMedicare</a> — $854.8 billion in Medicare payments with ML fraud detection</li>
        <li><a href="https://www.openspending.us" class="text-teal-700 hover:underline">OpenSpending</a> — $6.75 trillion in federal contracts</li>
        <li><a href="https://www.openfeds.org" class="text-teal-700 hover:underline">OpenFeds</a> — 2 million federal employees</li>
        <li><a href="https://www.openlobby.us" class="text-teal-700 hover:underline">OpenLobby</a> — $37.7 billion in lobbying data</li>
        <li><a href="https://www.vaccinewatch.org" class="text-teal-700 hover:underline">VaccineWatch</a> — 1.98 million VAERS reports</li>
        <li><strong>OpenImmigration</strong> — 9.6 million immigration court cases</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Explore OpenImmigration</h2>
      <p class="text-gray-600">Visit <a href="https://www.openimmigration.us" class="text-teal-700 hover:underline font-medium">openimmigration.us</a> to explore courts, judges, nationalities, border data, and more — or start with our <a href="https://www.openimmigration.us/analysis" class="text-teal-700 hover:underline font-medium">14 analysis articles</a> for data-driven insights into the U.S. immigration system. OpenImmigration is part of the <a href="/" class="text-teal-700 hover:underline font-medium">TheDataProject.AI</a> family of free public data platforms.</p>
    `,
  },
  {
    slug: "launching-opensubsidies",
    title: "Launching OpenSubsidies: $40 Billion in Farm Subsidies — Every Dollar, Every Recipient",
    description: "We processed 8.1 million USDA payment records to build the most accessible farm subsidy database on the internet. Here's what the data reveals.",
    date: "2026-02-27",
    content: `
      <p class="text-lg text-gray-600 mb-8">Today we're launching <a href="https://www.opensubsidies.us" class="text-teal-700 hover:underline font-medium">OpenSubsidies</a> — a free, searchable platform tracking <strong>$40 billion in USDA farm subsidy payments</strong> across every state, county, and program. Built from <strong>8.1 million payment records</strong> spanning 2023–2025, OpenSubsidies makes it easy to see exactly where taxpayer dollars go in American agriculture.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">The Scale of Farm Subsidies</h2>
      <p class="text-gray-600 mb-4">The federal government distributes billions every year through the USDA Farm Service Agency — payments for crop insurance, conservation, disaster relief, commodity support, and more. But <strong>69% of American farms receive zero federal subsidy payments</strong>. The money that does flow is staggeringly concentrated among the largest operations.</p>
      <p class="text-gray-600 mb-4">Our dataset covers <strong>107 distinct programs</strong>, <strong>59 states and territories</strong>, and <strong>21,895 counties</strong>. The largest single program is the Emergency Commodity Assistance Program at $9.36 billion — nearly a quarter of all farm subsidies in our dataset.</p>

      <div class="bg-teal-50 border-l-4 border-teal-700 p-6 my-8 rounded-r-lg">
        <p class="text-2xl font-bold text-teal-800">$40 billion across 8.1 million payments</p>
        <p class="text-teal-700">107 programs, 59 states, 21,895 counties — every dollar searchable and explorable.</p>
      </div>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Geographic Concentration</h2>
      <p class="text-gray-600 mb-4">Texas leads all states with <strong>$3.81 billion</strong> in farm subsidies, followed by Iowa ($2.97B), Kansas ($2.81B), Minnesota ($2.61B), and Nebraska ($2.34B). But the per-capita view tells a different story: North Dakota receives over <strong>$6,000 per person</strong> in farm subsidies, while California receives under $100.</p>
      <p class="text-gray-600 mb-4">This geographic concentration reflects the structure of American agriculture — corn, soybeans, wheat, and cotton attract the most subsidy dollars, and the states that grow them dominate the funding.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Emergency Spending Dominates</h2>
      <p class="text-gray-600 mb-4">Perhaps the most striking finding is that <strong>emergency and disaster programs now account for the majority of farm spending</strong>. What were designed as safety nets have become the primary mechanism for federal agricultural support. With climate change increasing extreme weather events, this trend shows no signs of reversing.</p>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">What You Can Explore</h2>
      <ul class="list-disc pl-6 text-gray-600 mb-4">
        <li>Every state's subsidy totals with county-level breakdowns and top recipients</li>
        <li>All 107 USDA programs ranked by spending with per-state distribution</li>
        <li>Top 1,000 individual recipients with amounts and locations</li>
        <li>Interactive dashboard with yearly trends and charts</li>
        <li>6 data-driven analysis articles on concentration, disaster spending, geography, and more</li>
        <li>Downloadable JSON datasets for your own analysis</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">The Accountability Question</h2>
      <p class="text-gray-600 mb-4">Farm subsidies are one of the largest categories of federal spending, yet they receive far less scrutiny than defense or healthcare budgets. The data raises legitimate questions: Are payment limits working? Is emergency spending being abused? Are subsidies supporting family farms or accelerating consolidation?</p>
      <p class="text-gray-600 mb-4">OpenSubsidies doesn't answer these questions — it provides the data so citizens, journalists, and policymakers can answer them for themselves.</p>

      <p class="text-gray-600">Visit <a href="https://www.opensubsidies.us" class="text-teal-700 hover:underline font-medium">opensubsidies.us</a> to explore the data, or start with our <a href="https://www.opensubsidies.us/analysis" class="text-teal-700 hover:underline font-medium">analysis articles</a>. OpenSubsidies is part of the <a href="/" class="text-teal-700 hover:underline font-medium">TheDataProject.AI</a> family of free public data platforms.</p>
    `,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
