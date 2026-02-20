export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
}

export const articles: Article[] = [
  {
    slug: "tracking-medicaid-spending",
    title: "How We Track $1.09 Trillion in Medicaid Spending",
    description: "Inside OpenMedicaid — the platform turning HHS provider payment data into fraud detection insights across all 50 states.",
    date: "2025-02-20",
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
    date: "2025-02-18",
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
    date: "2025-02-16",
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
    date: "2025-02-15",
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
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
