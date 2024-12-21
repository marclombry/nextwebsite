import React from 'react';
import { NavbarComponent } from '../components/NavbarComponent';
import FooterComponent from '../components/FooterComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem } from '@fortawesome/free-solid-svg-icons';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <header>
        <NavbarComponent />
      </header>
      
      {/* Main content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-24 text-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-extrabold sm:text-6xl">
              Bienvenue dans l'univers du luxe
            </h1>
            <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto">
              Explorez nos collections de bijoux exceptionnels créés avec passion et savoir-faire.
            </p>
            <a href="/products" className="mt-6 inline-block px-8 py-3 bg-indigo-700 text-white font-semibold rounded-lg hover:bg-indigo-800 transition">
              Découvrez nos produits
            </a>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-20 px-4 sm:px-8 bg-gray-100">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-indigo-700 mb-8">Notre histoire</h2>
            <p className="text-lg text-gray-700 mb-8">
              Depuis plusieurs générations, notre maison crée des bijoux d'exception alliant élégance, raffinement et qualité. Chaque pièce de notre collection est le fruit d'un savoir-faire artisanal de haute précision.
            </p>
            <a href="/presentation" className="text-indigo-700 font-semibold hover:text-indigo-900 transition">
              En savoir plus sur notre histoire
            </a>
          </div>
        </section>

        {/* Featured Jewelry Section */}
        <section className="py-20 px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-indigo-700 mb-4">Nos Bijoux Exceptionnels</h2>
            <p className="text-lg text-gray-700">Chaque bijou est une œuvre d'art unique, conçue pour sublimer votre beauté et votre élégance.</p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Featured Jewelry Item */}
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <img src="/images/bague_or3.jpeg" alt="Bague de Luxe" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-700">Bague en Or</h3>
                <p className="text-gray-700 mt-2">Une bague sertie de diamants étincelants, symbolisant l'amour éternel.</p>
                <a href="/products" className="mt-4 text-indigo-700 font-semibold hover:text-indigo-900 transition">
                  Découvrez cette pièce
                </a>
              </div>
            </div>
            {/* Featured Jewelry Item */}
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <img src="/images/tigre2.jpeg" alt="Pendentif de Luxe" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-700">Pendentif Élégant</h3>
                <p className="text-gray-700 mt-2">Un pendentif sophistiqué qui ajoutera une touche de glamour à toutes vos occasions.</p>
                <a href="/products" className="mt-4 text-indigo-700 font-semibold hover:text-indigo-900 transition">
                  Découvrez cette pièce
                </a>
              </div>
            </div>
            {/* Featured Jewelry Item */}
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <img src="/images/bracelet2.jpeg" alt="Bracelet de Luxe" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-700">Bracelet en Or</h3>
                <p className="text-gray-700 mt-2">Un bracelet en or massif, parfait pour les occasions spéciales.</p>
                <a href="/products" className="mt-4 text-indigo-700 font-semibold hover:text-indigo-900 transition">
                  Découvrez cette pièce
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 px-4 sm:px-8 bg-indigo-700 text-white text-center">
          <h2 className="text-3xl font-semibold mb-4">Prêt à découvrir l'élégance suprême ?</h2>
          <p className="text-lg mb-6">Explorez nos collections et laissez-vous séduire par la beauté de nos créations.</p>
          <a href="/products" className="inline-block px-8 py-3 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-gray-100 transition">
            Découvrez notre collection
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <FooterComponent />
      </footer>
    </div>
  );
};

export default Home;
