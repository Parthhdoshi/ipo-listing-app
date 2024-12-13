import Image from "next/image";
import Link from "next/link";

export default function IPOCard({ ipo }: { ipo: any }) {
    return (
        <Link href={`ipo/${ipo.id}`}>
      <div className="border group  rounded-xl shadow-md  hover:shadow-lg transition-shadow duration-300 ">
        <div className="overflow-hidden whitespace-nowrap mb-4 h-6 m-4 pb-6">
          <div className="text-purple-950  group-hover:animate-marquee text-lg  font-bold">
            {ipo.name}
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-2 px-4">
          {ipo.startDate} - {ipo.endDate}
        </p>
  
        <div className="grid grid-cols-2 gap-2 text-gray-800 text-sm p-4 bg-gray-100">
          <div>
            <p className="font-medium">Issue size</p>
            <p className="font-bold">{ipo.issueSize}</p>
          </div>
          <div>
            <p className="font-medium">Price range</p>
            <p className="font-bold">{ipo.priceRange}</p>
          </div>
          <div>
            <p className="font-medium">Min. Amount</p>
            <p className="font-bold">{ipo.minAmount}</p>
          </div>
          <div>
            <p className="font-medium">Min. Qty</p>
            <p className="font-bold">{ipo.lotSize}</p>
          </div>
        </div>
  
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center space-x-1">
            <span className="w-5 h-5 flex items-center justify-center rounded-full">
            <Image 
            src={"https://www.venturasecurities.com/wp-content/uploads/2023/02/document-download.svg"}
            alt="Ventura Logo"
            width={100}
            height={100}
            />
            </span>
            <span className="text-sm font-medium">IPO note</span>
          </div>
        </div>
          
      </div>
            </Link>
    );
  }
  