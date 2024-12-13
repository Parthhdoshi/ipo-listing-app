import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto  flex justify-between items-center px-6 py-4 shadow-sm">
      <div className="flex items-center">
        <Link href="/">
          <div className="flex items-center">
            <Image
              src="https://d14zm0hu08yytt.cloudfront.net/wp-content/uploads/2023/03/darklogo.png" // Replace with your logo URL
              alt="Ventura Logo"
              width={200}
              height={300}
            />
          </div>
        </Link>
      </div>

      <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
        <li className="hover:text-orange-500 cursor-pointer">
          <Link href="#">Invest ▾</Link>
        </li>
        <li className="hover:text-orange-500 cursor-pointer">
          <Link href="#">Trade ▾</Link>
        </li>
        <li className="hover:text-orange-500 cursor-pointer">
          <Link href="#">Spotlight</Link>
        </li>
        <li className="hover:text-orange-500 cursor-pointer">
          <Link href="#">Pricing</Link>
        </li>
        <li className="hover:text-orange-500 cursor-pointer">
          <Link href="#">Platform</Link>
        </li>
        <li className="hover:text-orange-500 cursor-pointer">
          <Link href="#">Learn ▾</Link>
        </li>
      </ul>

      <div className="flex items-center space-x-4">
        <Link
          href="#"
          className="border-2 border-blue-900 text-blue-900 px-4 py-2 rounded-lg hover:bg-blue-50"
        >
          Login
        </Link>
        <Link
          href="#"
          className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Create Account
        </Link>
      </div>
    </nav>
  );
}
