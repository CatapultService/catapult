import React from "react";

export default function performance() {
  return (
    <div className=" bg-white px-10 md:px-20 text-[#202020] flex flex-col ">
      {/* <div className="bg-[#021836] w-full text-slate-100 p-10 flex flex-col justify-center"> */}
      <div className="mx-auto max-w-6xl mt-10">
        <p className="mb-6 text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold leading-relaxed mx-auto text-[#202020]">
          Barriers to achieving Performance Excellence
        </p>
        <p className="mb-6 text-left leading-relaxed text-xs sm:text-sm md:text-base  text-[#202020]">
          The reality is that, finance teams are typically characterised as
          overburdened with manual data crunching and consequently inward
          looking with a rear view orientation. They lack the ability to engage
          and provide real time insights & collaboration.
        </p>

        <div className="overflow-x-auto w-full">
          <table className="rounded-lg border-t-4 border-b-4  border-[#FFE600] w-full text-[#202020]">
            <thead>
              <tr>
                <th className="px-2 sm:px-6 py-3 text-left border-b-4 text-xs sm:text-lg font-semibold  border-[#FFE600]  w-1/3">
                  Activity
                </th>
                <th className="px-2 sm:px-6 py-3 text-center border-b-4 text-xs sm:text-lg font-semibold  border-[#FFE600]  w-1/3">
                  Current Bandwidth Consumption
                </th>
                <th className="px-2 sm:px-6 py-3 text-center border-b-4 text-xs sm:text-lg font-semibold border-[#FFE600] w-1/3">
                  Ideal Bandwidth Allocation
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  activity:
                    "Driving outcomes with Real-time insights & forecasts to engage stakeholders",
                  current: 3,
                  ideal: 16,
                },
                {
                  activity:
                    "Budgeting, Financial Performance Reporting & Analytics",
                  current: 14,
                  ideal: 5,
                },
                {
                  activity:
                    "Book close Procedures, Journal Entry, Financial Statements, Audit Schedules",
                  current: 16,
                  ideal: 7,
                },
                {
                  activity:
                    "Transactions Processing (AP, AR, T&E, Tax, etc)",
                  current: 16,
                  ideal: 7,
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td className="border-t border-[#FFE600] px-2 sm:px-6 py-3 w-1/3 text-xs sm:text-lg  p-0.5">
                    {row.activity}
                  </td>
                  <td className="border-t  border-[#FFE600] px-2 sm:px-6 py-3 w-1/3">
                    <div className="grid grid-cols-4 sm:grid-cols-8 gap-1 sm:gap-2 justify-center items-center">
                      {Array(row.current)
                        .fill(0)
                        .map((_, i) => (
                          <span
                            key={i}
                            className="w-2 h-2 sm:w-4 sm:h-4 bg-[#202020] rounded-full inline-block mx-auto"
                          ></span>
                        ))}
                    </div>
                  </td>
                  <td className="border-t border-[#FFE600] px-2 sm:px-6 py-3 w-1/3">
                    <div className="grid grid-cols-4 sm:grid-cols-8 gap-1 sm:gap-2 justify-center items-center">
                      {Array(row.ideal)
                        .fill(0)
                        .map((_, i) => (
                          <span
                            key={i}
                            className="w-2 h-2 sm:w-4 sm:h-4 bg-[#202020] rounded-full inline-block mx-auto"
                          ></span>
                        ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="my-6 text-left leading-relaxed text-xs sm:text-sm md:text-base  text-[#202020]">
          This is because currently CFO downwards is required to focus on
          processing & controlling fragmented data manually.
        </p>
      </div>

      <div style={{ color: "white" }} className=" mx-auto max-w-6xl mb-2">
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-7 gap-4 items-center justify-center mb-8">
          <div className="flex flex-col items-center col-span-1 lg:col-span-1">
            <div className="w-32 h-32 md:w-48 md:h-48 bg-[#090E4A] text-[#FFE600] flex items-center justify-center text-bold rounded-full mb-2">
              <strong className="text-xs md:text-base lg:text-lg ">
                Data Proliferation
              </strong>
            </div>
          </div>
          <span className="text-3xl lg:text-5xl  lg:text-5xl col-span-1 text-center text-[#FFE600]">+</span>
          <div className="flex flex-col items-center col-span-1 lg:col-span-1">
            <div
              className="w-32 h-32 md:w-48 md:h-48 bg-[#090E4A] text-[#FFE600] flex items-center justify-center text-bold rounded-full mb-2"
              style={{ fontSize: "16px", fontWeight: 500 }}
            >
              <strong className="text-xs md:text-base lg:text-lg">
                Data Fragmentation
              </strong>
            </div>
          </div>
          <span className="text-3xl lg:text-5xl col-span-1 text-center text-[#FFE600]">+</span>
          <div className="flex flex-col items-center col-span-1 lg:col-span-1">
            <div
              className="w-32 h-32 md:w-48 md:h-48 bg-[#090E4A] text-[#FFE600] flex items-center justify-center text-bold rounded-full mb-2"
              style={{ fontSize: "16px", fontWeight: 500, textAlign: "center" }}
            >
              <strong className="text-xs md:text-base lg:text-lg">
                Rule based work executed manually through excel
              </strong>
            </div>
          </div>
          <span className="text-3xl lg:text-5xl col-span-1 text-center text-[#FFE600]">=</span>
          <div className="flex flex-col items-center col-span-1 lg:col-span-1">
            <div
              className="w-32 h-32 md:w-48 md:h-48 bg-[#090E4A] text-[#FFE600] flex items-center justify-center text-bold rounded-full mb-2"
              style={{ fontSize: "16px", fontWeight: 500, textAlign: "center" }}
            >
              <strong className="text-xs md:text-base lg:text-lg">
                Poor Finance Outcomes
              </strong>
            </div>
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs sm:text-sm md:text-base font-weight-600 leading-relaxed text-[#202020]">
            <strong className="font-semibold text-[#202020]">
              Data Proliferation:
            </strong>{" "}
            Every company is becoming a data company, with data being generated
            in a ceaselessly expanding array of forms and locations. As per
            McKinsey the amount of data in the world is anticipated to reach 175
            zettabytes (175 billion terabytes) by 2025, an annual growth rate of
            approximately 66 percent over 2018 levels.
          </p>
          <p className="mb-4 text-xs sm:text-sm md:text-base font-weight-600 leading-relaxed text-[#202020]">
            <strong className="font-semibold text-[#202020]">
              Data Fragmentation:
            </strong>{" "}
            While the world has become increasingly digital, it has led to bulk
            of the finance bandwidth being consumed in plumbing of disaggregated
            data using MS Excel. Fragmentation of data is an outcome of:
          </p>
          <ul className="list-disc ml-5 list-inside mb-4 leading-relaxed text-xs sm:text-sm md:text-base text-[#202020]">
            <li className="mb-2 text-[#202020]">
              <strong className="font-semibold text-[#202020]">
                Multiple Data Sources:
              </strong>{" "}
              Today enterprise data resides in multiple systems, both within the
              organisation (HRMS, Inventory, ERP, etc) and outside such as
              Marketplaces, Payment Gateways, Social Media, etc.
            </li>
            <li className="mb-2 text-[#202020]">
              <strong className="font-semibold text-[#202020]">
                Unstructured Data:
              </strong>{" "}
              A substantial part of the data still is unstructured (invoices,
              delivery challans, contracts, e-mail confirmations, etc).
            </li>
            <li className="mb-2 text-[#202020]">
              <strong className="font-semibold text-[#202020]">
                Broken processes & conversations:
              </strong>{" "}
              Processes are executed using e-mails, phone conversations,
              what&apos;sapp, etc, creating fragmentation.
            </li>
          </ul>
          <p className="mb-4 text-xs sm:text-sm md:text-base font-weight-200 text-[#202020]">
            <strong className="font-semibold text-[#202020]">
              Rule Based Work executed Manually-MS Excel Proliferation :
            </strong>{" "}
            Due to fragementation of data, every activity is inevitably
            preceeded by manual aggregation of data using excel. This eleminates
            any opportunity to standardise, automate and embed algorithms,
            leading to poor quality of execution, high turn around times,
            inability to be front end focused, creating poor outcomes.
          </p>
        </div>
      </div>
    </div>
  );
}