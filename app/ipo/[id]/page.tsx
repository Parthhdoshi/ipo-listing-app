import { notFound } from "next/navigation";
import ipos from "../../data/ipos.json";
import Image from "next/image";
import FinancialTabs from "@/app/components/FinancialTab";
import Link from "next/link";
import { Redirect } from "@/app/components/Redirect";
import BackButton from "@/app/components/BackButton";

export default async function IPOPage({ params }: { params: { id: string } }) {
  const { id } = await params;

  const ipo: any = ipos.find((item: any) => item.id == id);

  if (!ipo) return notFound();

  const timelineData = [
    { title: "Bidding Starts", date: "13/12/2024", completed: true },
    { title: "Bidding Ends", date: "17/12/2024", completed: true },
    { title: "Allotment Finalization", date: "18/12/2024", completed: false },
    { title: "Refund Initiation", date: "19/12/2024", completed: false },
    { title: "Demat Transfer", date: "19/12/2024", completed: false },
    { title: "Listing Date", date: "20/12/2024", completed: false },
  ];



  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      <div className="max-w-7xl mx-auto p-6 bg-white  rounded-xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <BackButton />
           
            <Image
              src={ipo.logo}
              alt={ipo.name}
              width={50}
              height={50}
              className="rounded-full border"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{ipo.name}</h1>
              <p className="text-sm text-gray-500">International IPO Listing</p>
            </div>
          </div>
          <button className="w-10 h-10 rounded-full bg-orange-100 hover:bg-orange-200 flex items-center justify-center">
            <>{}</>
            <Image
              src="https://www.venturasecurities.com/wp-content/uploads/2023/02/document-download.svg"
              alt="Download"
              width={20}
              height={20}
            />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6 border-b pb-6 border border-1 p-4 rounded-xl">
          <div>
            <p className="text-gray-500">Issue Size</p>
            <p className="font-semibold">{ipo.issueSize}</p>
          </div>
          <div>
            <p className="text-gray-500">Price Range</p>
            <p className="font-semibold">{ipo.priceRange}</p>
          </div>
          <div>
            <p className="text-gray-500">Minimum Amount</p>
            <p className="font-semibold">{ipo.minAmount}</p>
          </div>
          <div>
            <p className="text-gray-500">Lot Size</p>
            <p className="font-semibold">{ipo.lotSize}</p>
          </div>
          <div>
            <p className="text-gray-500">Issue Dates</p>
            <p className="font-semibold">{ipo.issueDates}</p>
          </div>
          <div>
            <p className="text-gray-500">Listed Date</p>
            <p className="font-semibold">{ipo.listedDate}</p>
          </div>
        </div>

        <div className="w-full bg-white  border border-1 p-4 rounded-xl ">
          <h2 className="text-lg font-bold mb-4">IPO Timeline</h2>
          <div className="flex items-center relative text-center">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-300 -z-10"></div>

            {timelineData.map((step, index) => (
              <div
                key={index}
                className="relative w-full flex flex-col items-center"
              >
                {index > 0 && (
                  <div
                    className={`absolute top-1/2 left-0 h-1 w-full ${
                      timelineData[index - 1].completed
                        ? "bg-green-500"
                        : "bg-gray-300"
                    } -z-10`}
                  ></div>
                )}

                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full mb-2 ${
                    step.completed ? "bg-green-500" : "bg-gray-300"
                  }`}
                >
                  {step.completed ? (
                    <span className="text-white font-bold">✓</span>
                  ) : (
                    <span className="text-gray-500"></span>
                  )}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800 text-center">
                    {step.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{step.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="my-6 border border-1 p-4 rounded-xl">
          <h2 className="text-lg font-bold mb-2">About the company</h2>
          <p className="text-gray-600">
            Our primary business is the provision of services related to the
            certification and accreditation of natural diamonds,
            laboratory-grown diamonds, and studded jewelry...
          </p>
        </div>

        <FinancialTabs />
      </div>
    </main>
  );
}
