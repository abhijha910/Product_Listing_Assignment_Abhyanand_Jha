import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Cloudflex Store
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Discover amazing products with just a click.
        </p>

        <Link
          href="/products"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition"
        >
          Browse Products
        </Link>
      </div>
    </div>
  );
}
