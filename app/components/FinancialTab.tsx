"use client"
import { useState } from "react";

const data = {
  revenue: [
    { year: "2021", value: 17.15, color: "bg-gray-700" },
    { year: "2022", value: 24.43, color: "bg-purple-500" },
    { year: "2023", value: 32.97, color: "bg-orange-500" },
  ],
  assets: [
    { year: "2021", value: 15.2, color: "bg-gray-700" },
    { year: "2022", value: 22.1, color: "bg-purple-500" },
    { year: "2023", value: 30.5, color: "bg-orange-500" },
  ],
  profit: [
    { year: "2021", value: 10.1, color: "bg-gray-700" },
    { year: "2022", value: 14.2, color: "bg-purple-500" },
    { year: "2023", value: 20.3, color: "bg-orange-500" },
  ],
};

export default function FinancialTabs() {
  const [activeTab, setActiveTab] = useState<"revenue" | "assets" | "profit">(
    "profit"
  );

  const activeData = data[activeTab];

  return (
    <div className="p-6 border border-1  rounded-xl">
      <div className="flex border-b mb-6">
        <button
          onClick={() => setActiveTab("revenue")}
          className={`w-full px-4 py-2 text-sm font-medium ${
            activeTab === "revenue"
              ? "text-white bg-gray-800"
              : "text-gray-600 hover:text-gray-800"
          } rounded-t-md`}
        >
          Revenue
        </button>
        <button
          onClick={() => setActiveTab("assets")}
          className={`w-full px-4 py-2 text-sm font-medium ${
            activeTab === "assets"
              ? "text-white bg-gray-800"
              : "text-gray-600 hover:text-gray-800"
          } rounded-t-md`}
        >
          Total Assets
        </button>
        <button
          onClick={() => setActiveTab("profit")}
          className={`w-full px-4 py-2 text-sm font-medium ${
            activeTab === "profit"
              ? "text-white bg-gray-800"
              : "text-gray-600 hover:text-gray-800"
          } rounded-t-md`}
        >
          Profit
        </button>
      </div>

      <div>
        {activeData.map((item) => (
          <div key={item.year} className="mb-4 flex items-center">
            <p className="w-12 font-medium">{item.year}</p>
            <div className="w-full h-4 bg-gray-100 rounded">
              <div
                className={`h-4 ${item.color} rounded`}
                style={{ width: `${(item.value / 35) * 100}%` }}
              ></div>
            </div>
            <p className="ml-4 font-semibold">{item.value}Cr</p>
          </div>
        ))}
      </div>
    </div>
  );
}
