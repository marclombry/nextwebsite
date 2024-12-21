// pages/contact.tsx

import React from 'react';
import { NavbarComponent } from '../components/NavbarComponent'; // Assurez-vous d'importer votre Navbar
import FooterComponent from '../components/FooterComponent'; // Assurez-vous d'importer votre Footer

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <header>
        <NavbarComponent />
      </header>

      {/* Section principale de contact */}
      <section className="py-16 px-4 sm:px-8 bg-blue-600 text-white text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl">Contactez-nous</h1>
        <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto">
          Nous serions ravis de vous aider ! Vous pouvez nous contacter en utilisant les informations ci-dessous.
        </p>
      </section>

      {/* Section Informations de contact */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
            <div className="flex flex-col items-center">
              <h2 className="text-3xl font-semibold text-blue-600 mb-4">Nos Coordonnées</h2>
              <p className="text-lg text-gray-700">
                <strong>Nom :</strong> Boutique Bijou
              </p>
              <p className="text-lg text-gray-700">
                <strong>Téléphone :</strong> +33 1 23 45 67 89
              </p>
              <p className="text-lg text-gray-700">
                <strong>Email :</strong> contact@boutiquebijou.com
              </p>
              <p className="text-lg text-gray-700">
                <strong>Adresse :</strong> 123 Rue des Bijoux, 75001 Paris, France
              </p>
            </div>

            {/* Carte avec l'image de l'emplacement */}
            <div className="flex justify-center items-center">
              <img
                src="/images/map.png" // Remplacez par l'image de la carte réelle ou une image fictive
                alt="Carte de la boutique"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto">
        <FooterComponent />
      </footer>
    </div>
  );
};

export default Contact;
