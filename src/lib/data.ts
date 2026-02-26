// Site data parsed from CSV

export interface Site {
  id: number | null;
  name: string;
  domain: string;
  url: string;
  records: number | null;
  category: string;
}

export interface Category {
  slug: string;
  name: string;
  icon: string;
  description: string;
  domain: string;
}

export const categories: Category[] = [
  { slug: "healthcare", name: "Healthcare", icon: "🏥", description: "Compare hospitals, doctors, nursing homes, mental health providers and more across the U.S.", domain: "nationalhealthratings.com" },
  { slug: "government-salaries", name: "Government Salaries", icon: "💰", description: "Search public employee salary databases for federal, state, and city governments.", domain: "governmentsalaries.org" },
  { slug: "food", name: "Food & Agriculture", icon: "🥗", description: "Nutrition facts, FDA recalls, restaurant grades, farmers markets and more.", domain: "foodinsider.org" },
  { slug: "transportation", name: "Transportation", icon: "✈️", description: "Vehicle safety, fuel economy, EV charging, aircraft data, and flight schools.", domain: "drivedata.org" },
  { slug: "business", name: "Business & Finance", icon: "📊", description: "Company filings, nonprofits, H-1B employers, VC firms, and SEC Form D data.", domain: "companyinsights.org" },
  { slug: "genealogy", name: "Genealogy", icon: "🌳", description: "Birth, death, and marriage records for family history and genealogy research.", domain: "vitalrecordsindex.com" },
  { slug: "housing", name: "Housing & Finance", icon: "🏠", description: "Affordable housing, consumer complaints, banks, and public pension data.", domain: "crediohub.com" },
  { slug: "elections", name: "Elections & Political Money", icon: "🗳️", description: "Campaign contributions, donor lookup, political spending, and candidate finance.", domain: "donorsecrets.com" },
  { slug: "software", name: "Software Reviews", icon: "💻", description: "Compare top software products across CRM, accounting, HR, cybersecurity and more.", domain: "topsoftwareproducts.com" },
  { slug: "education", name: "Education", icon: "🎓", description: "College rankings, degree earnings data, and public school directories.", domain: "explorebestcolleges.com" },
  { slug: "heritage", name: "Heritage & Infrastructure", icon: "🏛️", description: "Historic places, museums, dams, and fire stations across the United States.", domain: "heritageindex.org" },
];

export const sites: Site[] = [
  // Healthcare - nationalhealthratings.com
  { id: 116, name: "National Health Ratings", domain: "nationalhealthratings.com", url: "https://www.nationalhealthratings.com", records: null, category: "healthcare" },
  { id: 76, name: "Find Doctors & Clinicians", domain: "nationalhealthratings.com", url: "https://www.nationalhealthratings.com/doctors", records: 1522257, category: "healthcare" },
  { id: 77, name: "Find U.S. Health Centers", domain: "nationalhealthratings.com", url: "https://www.nationalhealthratings.com/health-centers", records: 17607, category: "healthcare" },
  { id: 56, name: "U.S. Hospitals Directory", domain: "nationalhealthratings.com", url: "https://www.nationalhealthratings.com/hospitals", records: 5425, category: "healthcare" },
  { id: 46, name: "Best Nursing Homes", domain: "nationalhealthratings.com", url: "https://www.nationalhealthratings.com/nursing-homes", records: 14964, category: "healthcare" },
  { id: 55, name: "Home Health Care Agencies", domain: "nationalhealthratings.com", url: "https://www.nationalhealthratings.com/home-health-care-agencies", records: 11824, category: "healthcare" },
  { id: 48, name: "Best Hospice Care Facilities", domain: "nationalhealthratings.com", url: "https://www.nationalhealthratings.com/hospice-care", records: 7013, category: "healthcare" },
  { id: 44, name: "Best Dialysis Centers", domain: "nationalhealthratings.com", url: "https://www.nationalhealthratings.com/dialysis-centers", records: 7638, category: "healthcare" },
  { id: 16, name: "Mental Health Providers", domain: "nationalhealthratings.com", url: "https://www.nationalhealthratings.com/mental-health-facilities", records: 9037, category: "healthcare" },
  { id: 32, name: "Substance Abuse Treatment Centers", domain: "nationalhealthratings.com", url: "https://www.nationalhealthratings.com/substance-treatment-facilities", records: 12744, category: "healthcare" },
  { id: 3, name: "Confidential STD Testing Clinics", domain: "nationalhealthratings.com", url: "https://www.nationalhealthratings.com/std-clinics", records: 13890, category: "healthcare" },
  { id: 165, name: "Opioid Treatment Program Providers", domain: "nationalhealthratings.com", url: "https://www.nationalhealthratings.com/opioid-treatment-programs", records: 1512, category: "healthcare" },
  { id: 57, name: "Inpatient Rehabilitation Centers", domain: "nationalhealthratings.com", url: "https://www.nationalhealthratings.com/inpatient-rehab", records: 1211, category: "healthcare" },
  { id: 58, name: "Long-Term Care Hospitals", domain: "nationalhealthratings.com", url: "https://www.nationalhealthratings.com/long-term-hospitals", records: 337, category: "healthcare" },
  { id: 156, name: "Licensed California Day Care Centers", domain: "nationalhealthratings.com", url: "https://www.nationalhealthratings.com/ca-day-care-centers", records: 19416, category: "healthcare" },
  { id: 182, name: "Texas Child Care Data & Provider Directory", domain: "nationalhealthratings.com", url: "https://www.nationalhealthratings.com/texas-child-care", records: 14631, category: "healthcare" },
  { id: 183, name: "Ohio Early Care & Education Directory", domain: "nationalhealthratings.com", url: "https://www.nationalhealthratings.com/ohio-child-care", records: 5144, category: "healthcare" },
  { id: 181, name: "Minnesota Child Care & Daycare Directory", domain: "nationalhealthratings.com", url: "https://www.nationalhealthratings.com/minnesota-child-care", records: 7886, category: "healthcare" },

  // Government Salaries - governmentsalaries.org
  { id: 93, name: "Government Salaries", domain: "governmentsalaries.org", url: "https://www.governmentsalaries.org", records: null, category: "government-salaries" },
  { id: 120, name: "Federal Employee Salaries", domain: "governmentsalaries.org", url: "https://www.governmentsalaries.org/federal", records: 1515848, category: "government-salaries" },
  { id: 94, name: "NYC Employee Salaries", domain: "governmentsalaries.org", url: "https://www.governmentsalaries.org/nyc", records: 5662713, category: "government-salaries" },
  { id: 102, name: "California State Employee Salaries", domain: "governmentsalaries.org", url: "https://www.governmentsalaries.org/california", records: 1071381, category: "government-salaries" },
  { id: 95, name: "Texas State Employee Salaries", domain: "governmentsalaries.org", url: "https://www.governmentsalaries.org/texas", records: 148085, category: "government-salaries" },
  { id: 97, name: "Florida State Employee Salaries", domain: "governmentsalaries.org", url: "https://www.governmentsalaries.org/florida", records: 105940, category: "government-salaries" },
  { id: 96, name: "Iowa State Employee Salaries", domain: "governmentsalaries.org", url: "https://www.governmentsalaries.org/iowa", records: 1039784, category: "government-salaries" },
  { id: 99, name: "Minnesota State Employee Salaries", domain: "governmentsalaries.org", url: "https://www.governmentsalaries.org/minnesota", records: 74813, category: "government-salaries" },
  { id: 98, name: "Washington State Employee Salaries", domain: "governmentsalaries.org", url: "https://www.governmentsalaries.org/washington", records: 470307, category: "government-salaries" },
  { id: 105, name: "New Jersey Government Employee Salaries", domain: "governmentsalaries.org", url: "https://www.governmentsalaries.org/new-jersey", records: 1222243, category: "government-salaries" },
  { id: 103, name: "Los Angeles City Employee Salaries", domain: "governmentsalaries.org", url: "https://www.governmentsalaries.org/los-angeles", records: 549398, category: "government-salaries" },
  { id: 104, name: "Los Angeles County Employee Salaries", domain: "governmentsalaries.org", url: "https://www.governmentsalaries.org/la-county", records: 1189325, category: "government-salaries" },
  { id: 173, name: "San Francisco Government Employee Salaries", domain: "governmentsalaries.org", url: "https://www.governmentsalaries.org/san-francisco", records: 1053560, category: "government-salaries" },
  { id: 176, name: "City of Philadelphia Employee Earnings", domain: "governmentsalaries.org", url: "https://www.governmentsalaries.org/philadelphia", records: 808653, category: "government-salaries" },
  { id: 167, name: "City of Chicago Employee Salaries", domain: "governmentsalaries.org", url: "https://www.governmentsalaries.org/chicago", records: 32325, category: "government-salaries" },
  { id: 178, name: "City of Boston Employee Salaries", domain: "governmentsalaries.org", url: "https://www.governmentsalaries.org/boston", records: 25530, category: "government-salaries" },
  { id: 179, name: "City of Nashville Employee Salaries", domain: "governmentsalaries.org", url: "https://www.governmentsalaries.org/nashville", records: 304832, category: "government-salaries" },
  { id: 172, name: "City of San Jose Public Pay Transparency", domain: "governmentsalaries.org", url: "https://www.governmentsalaries.org/san-jose", records: 8829, category: "government-salaries" },
  { id: 166, name: "Washington DC Employee Salaries", domain: "governmentsalaries.org", url: "https://www.governmentsalaries.org/washington-dc", records: 38881, category: "government-salaries" },
  { id: 170, name: "State of South Carolina Government Salaries", domain: "governmentsalaries.org", url: "https://www.governmentsalaries.org/south-carolina", records: 43234, category: "government-salaries" },
  { id: 171, name: "North Carolina State Employee Salary Database", domain: "governmentsalaries.org", url: "https://www.governmentsalaries.org/north-carolina", records: 83509, category: "government-salaries" },
  { id: 180, name: "State of Kansas Government Employee Pay", domain: "governmentsalaries.org", url: "https://www.governmentsalaries.org/kansas", records: 188315, category: "government-salaries" },

  // Food & Agriculture - foodinsider.org
  { id: 135, name: "Food Insider", domain: "foodinsider.org", url: "https://www.foodinsider.org", records: null, category: "food" },
  { id: 137, name: "Nutrition Facts Database", domain: "foodinsider.org", url: "https://www.foodinsider.org/nutrition-facts", records: 2064912, category: "food" },
  { id: 136, name: "NYC Restaurant Health Grades", domain: "foodinsider.org", url: "https://www.foodinsider.org/nyc-restaurant-grades", records: 281964, category: "food" },
  { id: 101, name: "FDA Recalls Database", domain: "foodinsider.org", url: "https://www.foodinsider.org/fda-recalls", records: 96193, category: "food" },
  { id: 155, name: "FDA-Approved Drugs", domain: "foodinsider.org", url: "https://www.foodinsider.org/fda-approved-drugs", records: 49688, category: "food" },
  { id: 185, name: "U.S. Alcohol Producers Directory", domain: "foodinsider.org", url: "https://www.foodinsider.org/alcohol-producers", records: 28942, category: "food" },
  { id: 175, name: "U.S. Agritourism Directory", domain: "foodinsider.org", url: "https://www.foodinsider.org/agritourism", records: 13559, category: "food" },
  { id: 174, name: "U.S. Farmers Market Directory", domain: "foodinsider.org", url: "https://www.foodinsider.org/farmers-markets", records: 7083, category: "food" },
  { id: 177, name: "On-Farm Market Directory", domain: "foodinsider.org", url: "https://www.foodinsider.org/on-farm-markets", records: 4668, category: "food" },
  { id: 141, name: "How Long Does Food Last?", domain: "foodinsider.org", url: "https://www.foodinsider.org/food-last", records: 770, category: "food" },

  // Transportation - drivedata.org
  { id: 124, name: "DriveData", domain: "drivedata.org", url: "https://www.drivedata.org", records: null, category: "transportation" },
  { id: 132, name: "FAA Aircraft Lookup", domain: "drivedata.org", url: "https://www.drivedata.org/aircraft-tail", records: 306719, category: "transportation" },
  { id: 126, name: "Vehicle Safety Recalls", domain: "drivedata.org", url: "https://www.drivedata.org/vehicle-recalls", records: 185126, category: "transportation" },
  { id: 130, name: "Vehicle Charging Stations", domain: "drivedata.org", url: "https://www.drivedata.org/ev-charging-stations", records: 97684, category: "transportation" },
  { id: 133, name: "Aircraft Specs Lookup", domain: "drivedata.org", url: "https://www.drivedata.org/aircraft-reference", records: 92121, category: "transportation" },
  { id: 127, name: "Best Fuel Economy Cars", domain: "drivedata.org", url: "https://www.drivedata.org/fuel-economy", records: 45179, category: "transportation" },
  { id: 125, name: "Vehicle Safety Ratings", domain: "drivedata.org", url: "https://www.drivedata.org/car-safety-ratings", records: 11744, category: "transportation" },
  { id: 169, name: "Consumer Product Safety Recalls", domain: "drivedata.org", url: "https://www.drivedata.org/product-safety-recalls", records: 9593, category: "transportation" },
  { id: 140, name: "FAA Part 145 Aircraft Repair Stations", domain: "drivedata.org", url: "https://www.drivedata.org/repair-stations", records: 5792, category: "transportation" },
  { id: 134, name: "Aircraft Engine Specs", domain: "drivedata.org", url: "https://www.drivedata.org/aircraft-engine-reference", records: 4687, category: "transportation" },
  { id: 131, name: "FAA Part 141 Flight Schools Directory", domain: "drivedata.org", url: "https://www.drivedata.org/pilot-schools", records: 651, category: "transportation" },
  { id: 139, name: "Flight Training Centers", domain: "drivedata.org", url: "https://www.drivedata.org/flight-training", records: 201, category: "transportation" },
  { id: 138, name: "Aircraft Mechanic Schools", domain: "drivedata.org", url: "https://www.drivedata.org/mechanics-schools", records: 213, category: "transportation" },

  // Business & Finance - companyinsights.org
  { id: 118, name: "Company Insights", domain: "companyinsights.org", url: "https://www.companyinsights.org", records: null, category: "business" },
  { id: 78, name: "Form D Filings Database", domain: "companyinsights.org", url: "https://www.companyinsights.org/form-d", records: null, category: "business" },
  { id: 82, name: "Form D Related Persons", domain: "companyinsights.org", url: "https://www.companyinsights.org/form-d-related-persons", records: 2441722, category: "business" },
  { id: 49, name: "Nonprofit Organizations", domain: "companyinsights.org", url: "https://www.companyinsights.org/nonprofits", records: 1858251, category: "business" },
  { id: 80, name: "Form D Offerings", domain: "companyinsights.org", url: "https://www.companyinsights.org/form-d-offerings", records: 619379, category: "business" },
  { id: 79, name: "Form D Issuers", domain: "companyinsights.org", url: "https://www.companyinsights.org/form-d-issuers", records: 628809, category: "business" },
  { id: 160, name: "U.S. Jobs & Salary Data Explorer", domain: "companyinsights.org", url: "https://www.companyinsights.org/job-salaries", records: 414437, category: "business" },
  { id: 81, name: "Form D Recipients", domain: "companyinsights.org", url: "https://www.companyinsights.org/form-d-recipients", records: 358782, category: "business" },
  { id: 92, name: "H-1B Employer Database", domain: "companyinsights.org", url: "https://www.companyinsights.org/h1b-employers", records: 350915, category: "business" },
  { id: 68, name: "U.S. NAICS Codes Directory", domain: "companyinsights.org", url: "https://www.companyinsights.org/naics-codes", records: 86526, category: "business" },
  { id: 123, name: "Global VC & Accelerator Directory", domain: "companyinsights.org", url: "https://www.companyinsights.org/vc-firms", records: 2105, category: "business" },
  { id: 128, name: "Private Equity Firms Directory", domain: "companyinsights.org", url: "https://www.companyinsights.org/pe-firms", records: 1198, category: "business" },
  { id: 129, name: "Global Investment Banks Directory", domain: "companyinsights.org", url: "https://www.companyinsights.org/investment-banks", records: 386, category: "business" },

  // Genealogy - vitalrecordsindex.com
  { id: 117, name: "U.S. Vital Records Search", domain: "vitalrecordsindex.com", url: "https://www.vitalrecordsindex.com", records: null, category: "genealogy" },
  { id: 69, name: "Birth and Death Records", domain: "vitalrecordsindex.com", url: "https://www.vitalrecordsindex.com/death-records", records: 87872018, category: "genealogy" },
  { id: 112, name: "Texas Marriage Records", domain: "vitalrecordsindex.com", url: "https://www.vitalrecordsindex.com/texas-marriage-records", records: 9213263, category: "genealogy" },
  { id: 66, name: "NYC Marriage Records 1866–1937", domain: "vitalrecordsindex.com", url: "https://www.vitalrecordsindex.com/nyc-marriage-records-1866-1937", records: 5086990, category: "genealogy" },
  { id: 113, name: "Texas Divorce Records", domain: "vitalrecordsindex.com", url: "https://www.vitalrecordsindex.com/texas-divorce-records", records: 4059948, category: "genealogy" },
  { id: 74, name: "NYC Death Records 1862–1948", domain: "vitalrecordsindex.com", url: "https://www.vitalrecordsindex.com/nyc-death-records-1862-1948", records: 3702147, category: "genealogy" },
  { id: 67, name: "NYC Birth Records 1855–1909", domain: "vitalrecordsindex.com", url: "https://www.vitalrecordsindex.com/nyc-birth-records-1855-1909", records: 2614956, category: "genealogy" },
  { id: 62, name: "NYC Marriage Index 1950–2017", domain: "vitalrecordsindex.com", url: "https://www.vitalrecordsindex.com/nyc-marriages-1950-2017", records: 1978804, category: "genealogy" },
  { id: 63, name: "Surnames Database", domain: "vitalrecordsindex.com", url: "https://www.vitalrecordsindex.com/surnames", records: 162252, category: "genealogy" },
  { id: 59, name: "Best Baby Names", domain: "vitalrecordsindex.com", url: "https://www.vitalrecordsindex.com/baby-names", records: 113882, category: "genealogy" },
  { id: 144, name: "On This Day in History", domain: "vitalrecordsindex.com", url: "https://www.vitalrecordsindex.com/historical-events", records: 82545, category: "genealogy" },
  { id: 60, name: "NYC Vital Records", domain: "vitalrecordsindex.com", url: "https://www.vitalrecordsindex.com/nyc-vital-records", records: null, category: "genealogy" },

  // Housing & Finance - crediohub.com
  { id: 119, name: "CredioHub", domain: "crediohub.com", url: "https://www.crediohub.com", records: null, category: "housing" },
  { id: 121, name: "Consumer Complaints", domain: "crediohub.com", url: "https://www.crediohub.com/consumer-complaints", records: 8392776, category: "housing" },
  { id: 109, name: "Banks in the United States", domain: "crediohub.com", url: "https://www.crediohub.com/banks", records: 27824, category: "housing" },
  { id: 110, name: "Bank Branch Offices", domain: "crediohub.com", url: "https://www.crediohub.com/bank-branches", records: 77796, category: "housing" },
  { id: 122, name: "LIHTC Properties", domain: "crediohub.com", url: "https://www.crediohub.com/LIHTC-properties", records: 53665, category: "housing" },
  { id: 90, name: "Low-Income & Section 8 Housing", domain: "crediohub.com", url: "https://www.crediohub.com/section-8-housing", records: 23478, category: "housing" },
  { id: 157, name: "U.S. Public Pension Insights", domain: "crediohub.com", url: "https://www.crediohub.com/public-pension-plans", records: 7300, category: "housing" },

  // Elections & Political Money - donorsecrets.com
  { id: 188, name: "U.S. Election Money Explorer", domain: "donorsecrets.com", url: "https://www.donorsecrets.com", records: null, category: "elections" },
  { id: 192, name: "U.S. Individual Campaign Contributions", domain: "donorsecrets.com", url: "https://www.donorsecrets.com/individual-contributions", records: 26113727, category: "elections" },
  { id: 193, name: "U.S. Campaign Spending Tracker", domain: "donorsecrets.com", url: "https://www.donorsecrets.com/campaign-spending", records: 10670381, category: "elections" },
  { id: 191, name: "U.S. Campaign Contribution Tracker", domain: "donorsecrets.com", url: "https://www.donorsecrets.com/campaign-contributions", records: 3296056, category: "elections" },
  { id: 194, name: "U.S. Political Donor Directory", domain: "donorsecrets.com", url: "https://www.donorsecrets.com/donors", records: 1248220, category: "elections" },
  { id: 196, name: "U.S. Employer Political Giving Directory", domain: "donorsecrets.com", url: "https://www.donorsecrets.com/employers", records: 1202736, category: "elections" },
  { id: 195, name: "U.S. Political Vendor & Consultant Directory", domain: "donorsecrets.com", url: "https://www.donorsecrets.com/vendors", records: 597511, category: "elections" },
  { id: 190, name: "U.S. Campaign Committees & Finance Directory", domain: "donorsecrets.com", url: "https://www.donorsecrets.com/campaign-committees", records: 46927, category: "elections" },
  { id: 189, name: "U.S. Election Finance & Candidate Directory", domain: "donorsecrets.com", url: "https://www.donorsecrets.com/federal-election-candidates", records: 24745, category: "elections" },

  // Software Reviews - topsoftwareproducts.com
  { id: 142, name: "Top Software Products", domain: "topsoftwareproducts.com", url: "https://www.topsoftwareproducts.com", records: null, category: "software" },
  { id: 154, name: "Top Cybersecurity Software", domain: "topsoftwareproducts.com", url: "https://www.topsoftwareproducts.com/cybersecurity", records: 207, category: "software" },
  { id: 148, name: "Top Marketing Software", domain: "topsoftwareproducts.com", url: "https://www.topsoftwareproducts.com/marketing", records: 119, category: "software" },
  { id: 151, name: "Top Construction Management Tools", domain: "topsoftwareproducts.com", url: "https://www.topsoftwareproducts.com/construction-management", records: 77, category: "software" },
  { id: 143, name: "Compare Data Analysis Software", domain: "topsoftwareproducts.com", url: "https://www.topsoftwareproducts.com/data-analysis", records: 74, category: "software" },
  { id: 153, name: "Top E-commerce Platforms", domain: "topsoftwareproducts.com", url: "https://www.topsoftwareproducts.com/ecommerce-platforms", records: 57, category: "software" },
  { id: 149, name: "Top AI Writing Tools", domain: "topsoftwareproducts.com", url: "https://www.topsoftwareproducts.com/ai-writing-tools", records: 51, category: "software" },
  { id: 150, name: "Top Accounting Software", domain: "topsoftwareproducts.com", url: "https://www.topsoftwareproducts.com/accounting", records: 50, category: "software" },
  { id: 147, name: "Top HR & Payroll Platforms", domain: "topsoftwareproducts.com", url: "https://www.topsoftwareproducts.com/hr-payroll", records: 49, category: "software" },
  { id: 146, name: "Best Project Management Software", domain: "topsoftwareproducts.com", url: "https://www.topsoftwareproducts.com/project-management", records: 46, category: "software" },
  { id: 152, name: "Top Invoicing Software", domain: "topsoftwareproducts.com", url: "https://www.topsoftwareproducts.com/invoicing", records: 42, category: "software" },
  { id: 158, name: "AI Detectors", domain: "topsoftwareproducts.com", url: "https://www.topsoftwareproducts.com/ai-detectors", records: 41, category: "software" },
  { id: 145, name: "Best CRM Platforms", domain: "topsoftwareproducts.com", url: "https://www.topsoftwareproducts.com/crm-tools", records: 30, category: "software" },

  // Education - explorebestcolleges.com
  { id: 106, name: "Best U.S. Colleges", domain: "explorebestcolleges.com", url: "https://www.explorebestcolleges.com", records: 6044, category: "education" },
  { id: 114, name: "U.S. College Fields of Study", domain: "explorebestcolleges.com", url: "https://www.explorebestcolleges.com/degrees", records: 229188, category: "education" },
  { id: 184, name: "U.S. Public School Directory", domain: "explorebestcolleges.com", url: "https://www.explorebestcolleges.com/public-schools", records: 99283, category: "education" },

  // Heritage & Infrastructure - heritageindex.org
  { id: 162, name: "Heritage Index", domain: "heritageindex.org", url: "https://www.heritageindex.org", records: null, category: "heritage" },
  { id: 161, name: "U.S. Historic Places", domain: "heritageindex.org", url: "https://www.heritageindex.org/historic-places", records: 100056, category: "heritage" },
  { id: 186, name: "U.S. Dam Safety & Infrastructure Directory", domain: "heritageindex.org", url: "https://www.heritageindex.org/dams", records: 88243, category: "heritage" },
  { id: 187, name: "U.S. Fire Stations Directory", domain: "heritageindex.org", url: "https://www.heritageindex.org/fire-stations", records: 51964, category: "heritage" },
  { id: 163, name: "Museums in the United States", domain: "heritageindex.org", url: "https://www.heritageindex.org/museums", records: 30176, category: "heritage" },

  // Government Transparency
  { id: null, name: "OpenMedicare", domain: "openmedicare.us", url: "https://www.openmedicare.us", records: null, category: "government" },
  { id: null, name: "OpenMedicaid", domain: "openmedicaid.org", url: "https://www.openmedicaid.org", records: null, category: "government" },
  { id: null, name: "OpenFeds", domain: "openfeds.org", url: "https://www.openfeds.org", records: null, category: "government" },
  { id: null, name: "OpenSpending", domain: "openspending.us", url: "https://www.openspending.us", records: null, category: "government" },
  { id: null, name: "OpenLobby", domain: "openlobby.us", url: "https://www.openlobby.us", records: 726268, category: "government" },
  { id: null, name: "VaccineWatch", domain: "vaccinewatch.org", url: "https://www.vaccinewatch.org", records: 1983260, category: "healthcare" },

  // Standalone sites
  { id: 43, name: "PPP Loan Lookup", domain: "ppploanlookup.com", url: "https://www.ppploanlookup.com", records: 11468299, category: "standalone" },
  { id: 41, name: "Free NPI Lookup & Registry Search", domain: "npi-lookup-db.com", url: "https://www.npi-lookup-db.com", records: 8361118, category: "standalone" },
  { id: 10, name: "Compare Dog Breeds", domain: "compare-dog-breeds.com", url: "https://www.compare-dog-breeds.com", records: 1846, category: "standalone" },
  { id: 115, name: "California Unclaimed Property Search", domain: "caunclaimedproperty.com", url: "https://www.caunclaimedproperty.com", records: 82046706, category: "standalone" },
  { id: 168, name: "Texas Unclaimed Property Search", domain: "txunclaimedproperty.com", url: "https://www.txunclaimedproperty.com", records: 3459543, category: "standalone" },
];

export function formatRecords(count: number | null): string {
  if (count === null) return "—";
  if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  if (count >= 1_000) return `${(count / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  return count.toLocaleString();
}

export function getCategorySites(slug: string): Site[] {
  return sites.filter(s => s.category === slug);
}

export function getCategoryStats(slug: string): { siteCount: number; totalRecords: number } {
  const catSites = getCategorySites(slug);
  return {
    siteCount: catSites.length,
    totalRecords: catSites.reduce((sum, s) => sum + (s.records || 0), 0),
  };
}

export function getAllSitesFlat(): Site[] {
  return sites;
}
