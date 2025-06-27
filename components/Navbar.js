import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 mb-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <h1 className="text-xl font-bold text-blue-600">Cloudflex Store</h1>
        <div className="space-x-4">
          <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/products" className="text-gray-700 hover:text-blue-600">Products</Link>
        </div>
      </div>
    </nav>
  );
}
