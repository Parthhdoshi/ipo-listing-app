"use client"
import { useState } from "react";

const ipoData = {
  upcoming: [
    {
      id: 1,
      name: "International Gemmological Institute Limited (IGIIL)",
      issueSize: "₹4,225 - 4,438 Cr",
      priceRange: "₹397 - 417",
      minAmount: "₹13,230",
      lotSize: "35 Shares/1 Lot",
      date: "13th Dec - 17th Dec 2024",
    },
  ],
  closed: [
    {
      id: 2,
      name: "Inventurus Knowledge Solutions",
      issueSize: "₹2,378 - 2,498 Cr",
      priceRange: "₹1,265 - 1,329",
      minAmount: "₹14,619",
      lotSize: "11 Shares/1 Lot",
      date: "12th Dec - 16th Dec 2024",
    },
  ],
  listed: [
    {
      id: 3,
      name: "One Mobikwik Systems",
      issueSize: "₹543 - 572 Cr",
      priceRange: "₹265 - 279",
      minAmount: "₹14,787",
      lotSize: "53 Shares/1 Lot",
      date: "11th Dec - 13th Dec 2024",
    },
  ],
};

export default function IPOTabs() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "closed" | "listed">(
    "upcoming"
  );

  const data = ipoData[activeTab];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 ">
      <h2 className="text-3xl font-bold text-center mb-6 ">
        Upcoming & recent <span className="text-orange-500">IPOs</span>
      </h2>

      <div className="border border-1 rounded-xl p-4">

      <div className="flex border-b ">
        {["upcoming", "closed", "listed"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as "upcoming" | "closed" | "listed")}
            className={`py-2 px-4 text-purple-950 font-medium w-full ${
              activeTab === tab
                ? "border-b-2 border-orange-500 text-orange-500"
                : "hover:border-b-2 hover:border-orange-500"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="mt-4 bg-gray-900 overflow-hidden ">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-purple-950 uppercase">
                Company
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-purple-950 uppercase">
                Issue size
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-purple-950 uppercase">
                Price range
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-purple-950 uppercase">
                Min. Amount
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((ipo) => (
              <tr key={ipo.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {ipo.name}
                  </div>
                  <div className="text-sm text-gray-500">{ipo.date}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{ipo.issueSize}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{ipo.priceRange}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{ipo.minAmount}</div>
                  <div className="text-xs text-gray-500">{ipo.lotSize}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      </div>
      <div className="mt-6 text-center">
        <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          View all Upcoming IPOs
        </button>
      </div>
    </div>
  );
}
