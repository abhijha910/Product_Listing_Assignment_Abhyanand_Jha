import { useRouter } from "next/router";
import products from "../../data/products";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div className="p-6 text-center">Product not found</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white rounded shadow p-6">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded" />
        <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
        <p className="text-gray-600 mt-2">{product.price}</p>
        <p className="mt-4 text-gray-700">
          This is a placeholder description for {product.name}. You can customize it later.
        </p>
        <button
          onClick={() => router.push("/products")}
          className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Back to Products
        </button>
      </div>
    </div>
  );
}
