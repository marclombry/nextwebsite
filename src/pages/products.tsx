import React, { useEffect, useState } from 'react';
import { NavbarComponent } from '../components/NavbarComponent';
import FooterComponent from '../components/FooterComponent';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/data/products.json');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Erreur lors du chargement des produits:', error);
      }
    };

    fetchProducts();
  }, []); 

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <header>
        <NavbarComponent />
      </header>

      {/* Section products */}
      <section className="py-16 px-4 sm:px-8 bg-blue-600 text-white text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl">Nos Produits</h1>
        <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto">
          Découvrez notre gamme de bijoux de haute qualité, conçus pour répondre à vos besoins.
        </p>
      </section>

      {/* List of products */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
                  <p className="text-lg text-gray-600 mt-2">{product.description}</p>
                  <p className="text-xl font-bold text-blue-600 mt-4">{product.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Chargement des produits...</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto">
        <FooterComponent />
      </footer>
    </div>
  );
};

export default Products;
