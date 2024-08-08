import React from "react";
// import RoleList from './RoleList';

export default function role() {
  return (
    <div className=" bg-[#001A40] px-10 md:px-20 text-white flex">
      <div className="mx-auto max-w-6xl my-20 ">
        <p className="mb-6 text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold leading-relaxed mx-auto text-white">
          Role of Finance in Linking Growth to Shareholder Value Creation
        </p>

        <p className="mb-6 text-left leading-relaxed text-xs sm:text-sm md:text-base  font-light text-[#d9d9d9]">
          For an organisation to be sustainable and create value, it needs to go
          beyond Product Market Fit & Revenue Growth and build a system that
          Bridges Revenue Growth with Profitability, Capital Efficiency & Free
          Cash Flow. To enable this, the finance function needs to go beyond
          merely accounting & reporting, and take leadership in designing an
          enterprise performance management framework, for financial value
          creation & preservation. The building blocks typically include:
        </p>

        <RoleList items={listItems} />
      </div>
    </div>
  );
}

// Define the list items data
const listItems = [
  {
    title: "Investor Relations:",
    content:
      " The old adage goes that you never get a second chance to make the first impression. It is a well-established fact that companies that can demonstrate reliable financial data integrity.",
  },
  {
    title: "Data Integrity & transparency:",
    content:
      " Reliability of processes for capturing, recoding, validating & reporting financial data for Reporting, Audit & Dilligence purposes is critical. Singular dependancy on manual effort can create delays & errors, arising due to staffing levels, bandwidth and skill & domain knowledge. Augmenting human effort with the right data architecture & technology, overlayed with the proprietary algorithms can enable this.",
  },
  {
    title: "Clear Equity Story:",
    content:
      " Businesses that have a clear narrative that distills its positioning within a category, growth & profitability drivers and intricacies of it&apos;s right to win, in a framework comprehensible by investor community, command superior investor interest.",
  },
  {
    title: "Cash Conversion Excellence:",
    content:
      " Charlie Munger had infamously dismissed EBITDA as an unreliable metric. The reason being, high EBITDA is no assurance of value creation, as capital can be blocked in Receivables and Inventory. Poor Working Capital management chokes up growth, as businesses require additional working capital, but also dilute Enterprise Value. For example an additional 15 Days of Working Capital blocked in Receivables can dilute PBT Margins by 0.75 - 1%. At a typical 15 - 18% PBT across most industries, this means a dilution in Enterprise Valuation by 5-7.5%. So moving your DSO from 75 days to 60 Days cana potentially impact valuation by 5%. Augmenting human effort with the right data architecture & technology, ovrlayed with the proprietory algorithms can enable this. Click here to knw more.",
  },
  {
    title: "Capital Efficiency:",
    content:
      " A growth stagae business is simply a race against time of converting capital raised into free cash before running out of capital. However, our experience suggests that mst of growth stage companines under invest in aa formal capital allocation prcess. This is typically because while most management teams have strong domain knowledge, they are new to capital allocation themselves and customer outreach and sales take preceedence over setting up a formala capital allocation process is both scientific and eliminates biases or intutive decision making. augmenting human effort with the right data architecture & technology, overlayed with the proprietory algorithm can enable this. Click here to know more.",
    subItems: [
      {
        title: "Steering Performance:",
        content:
          " Monthly performance reviews should go beyond headlines of Budget vs Actuals and broad brushed averages, to understand granularity of sources & Revenue & Margin growth and misses:",
      },
      {
        title: "\"De-averaging\" Revenue performance:",
        content:
          " Averages often conceal the true source of growth & de-growth. It is imperative to get a granular view of trends, future growth rates, and market structures. Insights into Use Cases, Customer cohorts, Categories, Channels and Micromarkets are essential building blocks of making the right decisions about where to compete. Agility in where to compete is critical as empirical data suggests a high correlation between outperformance and market growth rates.",
      },
      {
        title: "Customer Life Time Value Analytics:",
        content:
          " No business is built by continuous acquisition of new customers. Focus on customer lifetime value by building a loyal customer base is non-negotiable. Building a sustainable process requires leveraging technology to aggregate, mine & analyze data to segment customers into customer personas, vintage, repeat and frequency. Click here to know more.",
      },
      {
        title: " Margin Management:",
        content:
          " Breaking data and operational silos and creating an integrated data and analytics architecture for Pricing, Inventory, Discounts & Leakages, overlayed with dimensions of Category, Use Cases, Channels, Customers and Micromarkets can create a 2-3% improvement in margins. Click here to know more.",
      },
    ],
  },
];

// Define the structure of each list item
interface ListItem {
  title: string;
  content: string;
  subItems?: ListItem[]; // Optional for nested lists
}

// Props for the RoleList component
interface RoleListProps {
  items: ListItem[];
}

const RoleList: React.FC<RoleListProps> = ({ items }) => {
  return (
    <ul className="list-disc list-inside space-y-6 leading-loose text-xs sm:text-sm md:text-base text-[#c6c3c3]">
      {items.map((item, index) => (
        <li key={index}>
          <span className="font-semibold text-[#e9e4e4]">{item.title} </span>
          {item.content}
          {item.subItems && (
            <ul className="list-disc list-inside space-y-4 mt-4 ml-6">
              {item.subItems.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <span className="font-semibold text-[#e9e4e4]">
                    {subItem.title}
                  </span>
                  {subItem.content}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};