import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('id', { ascending: true });

    if (error) console.error(error);
    else setProducts(data);
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">🛍️ Blessings Shop Hub</h1>
      {products.length === 0 && <p className="text-center">No products found</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img src={p.image} alt={p.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{p.name}</h2>
              <p className="text-gray-600 text-sm mb-2">{p.description}</p>
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-xl font-bold text-green-600">${p.price}</span>
                {p.discount > 0 && (
                  <span className="text-sm text-red-500 line-through">
                    ${(p.price / (1 - p.discount / 100)).toFixed(2)}
                  </span>
                )}
                {p.discount > 0 && (
                  <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
                    {p.discount}% OFF
                  </span>
                )}
              </div>
              <a
                href={p.affiliate_link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition"
              >
                Buy Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}