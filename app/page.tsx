export default function Home() {
  const products = [
    {
      id: 1,
      name: "Stylish Sunglasses",
      price: "$4.99",
      discount: "20%",
      image: "https://via.placeholder.com/300x300.png?text=Sunglasses",
      link: "#",
      tag: "Best Seller"
    },
    {
      id: 2,
      name: "Trendy Cap",
      price: "$3.49",
      discount: "15%",
      image: "https://via.placeholder.com/300x300.png?text=Cap",
      link: "#",
      tag: "New"
    },
    {
      id: 3,
      name: "Casual T-Shirt",
      price: "$5.00",
      discount: "10%",
      image: "https://via.placeholder.com/300x300.png?text=T-Shirt",
      link: "#",
      tag: "Limited Offer"
    }
  ];

  return (
    <main className="p-6">
      {/* Hero Section */}
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Luxurious Items Store</h1>
        <p className="text-gray-600">Affordable fashion with exclusive deals</p>
      </section>

      {/* Product Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg shadow hover:shadow-lg transition p-4 text-center">
            <div className="relative">
              <img src={product.image} alt={product.name} className="rounded-lg mb-2" />
              {product.tag && (
                <span className="absolute top-2 left-2 bg-pink-500 text-white text-xs px-2 py-1 rounded">
                  {product.tag}
                </span>
              )}
            </div>
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-500 line-through mr-2 inline">{product.price}</p>
            <span className="text-green-600 font-bold">{product.discount} OFF</span>
            <div>
              <a
                href={product.link}
                target="_blank"
                className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Buy Now
              </a>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
