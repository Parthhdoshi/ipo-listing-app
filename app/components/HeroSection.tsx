export default function HeroSection() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Apply and invest in{" "}
            <span className="text-orange-500">Upcoming IPOs</span>
          </h1>
          <p className="mt-4 text-gray-600">
            Identify the right IPOs to invest in with our research notes
          </p>
          <div className="mt-6 flex items-center justify-center lg:justify-start">
            <div className="relative">
              <input
                type="text"
                placeholder="Enter mobile number"
                className="border p-3 pl-12 rounded-l-md w-64 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <span className="absolute top-3 left-4 text-gray-500">+91</span>
            </div>
            <button className="bg-orange-500 text-white px-4 py-[14px] rounded-r-md">
              →
            </button>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://d14zm0hu08yytt.cloudfront.net/wp-content/uploads/2023/04/IPO-Cropped.png"
            alt="User"
            className="w-64 h-64 rounded-full object-cover border border-1 border-gray-300 p-3"
          />
          <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-md flex items-center px-3 py-1">
            <span className="bg-green-500 w-5 h-5 flex items-center justify-center rounded-full text-white text-sm">
              ✓
            </span>
            <p className="ml-2 text-sm font-medium text-gray-600">IPO allotted</p>
          </div>
          <div className="absolute bottom-20 -left-4 bg-purple-600 text-white rounded-full p-2">
            ⭐
          </div>
        </div>
      </div>
    </section>
  );
}
