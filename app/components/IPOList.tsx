import IPOCard from "./IPOCard";

const ipoData = [
  {
    id: 1,
    name: "International Gemmological Ltd.",
    issueSize: "₹4,225 - 4,438 cr",
    priceRange: "₹397 - 417",
    minAmount: "₹14,595",
    lotSize: "35 shares",
    startDate: "13 Dec 2024",
    endDate: "17 Dec 2024",
    subscribed: "33.43x",
  },
  {
    id: 2,
    name: "Inventurus Knowledge Solutions",
    issueSize: "₹2,378 - 2,498 cr",
    priceRange: "₹1,265 - 1,329",
    minAmount: "₹14,619",
    lotSize: "11 shares",
    startDate: "12 Dec 2024",
    endDate: "16 Dec 2024",
    subscribed: "11.21x",
  },
];

export default function IPOList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-8">
      {ipoData.map((ipo) => (
        <IPOCard key={ipo.id} ipo={ipo} />
      ))}
    </div>
  );
}
