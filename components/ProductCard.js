export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
        <p className="text-gray-600 mb-2">{product.price}</p>
        <a
          href={`/products/${product.id}`}
          className="text-blue-600 hover:underline text-sm"
        >
          View Details
        </a>
      </div>
    </div>
  );
}
