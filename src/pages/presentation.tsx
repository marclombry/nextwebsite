// pages/presentation.tsx

import React from 'react';
import { NavbarComponent } from '../components/NavbarComponent';
import FooterComponent from '../components/FooterComponent';

const Presentation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <header>
        <NavbarComponent />
      </header>

      {/* Section principale de présentation */}
      <section className="flex flex-col items-center justify-center text-center py-16 bg-gradient-to-r from-indigo-600 via-purple-700 to-indigo-600 text-white">
        <h1 className="text-4xl font-extrabold sm:text-5xl">
          Découvrez l'Art de la Joaillerie de Luxe
        </h1>
        <p className="mt-4 text-lg sm:text-xl max-w-3xl px-4">
          Notre maison de bijoux est un symbole d'élégance intemporelle. Nous créons des pièces d'exception, réalisées avec un savoir-faire unique et une passion pour l'excellence. Chaque bijou raconte une histoire de luxe et d'artisanat raffiné.
        </p>
      </section>

      {/* Section à propos */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between">
          <div className="sm:w-1/2 mb-8 sm:mb-0">
            <h2 className="text-3xl font-semibold text-indigo-700 mb-4">Qui sommes-nous ?</h2>
            <p className="text-lg text-gray-700">
              Nous sommes une maison de haute joaillerie, créant des pièces exceptionnelles qui allient tradition et modernité. Chaque bijou est conçu pour sublimer l'élégance naturelle et incarner le raffinement. Nous sommes fiers de notre héritage et de notre capacité à repousser les limites de l'artisanat.
            </p>
          </div>
          <div className="sm:w-1/2">
            <img
              src="/images/jewelry-boutique.jpeg" // Remplacez par une image représentant votre boutique ou une image élégante de bijoux
              alt="À propos de nous"
              className="rounded-lg shadow-xl w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section Vision et Mission */}
      <section className="bg-gray-100 py-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-indigo-700 mb-4">Notre Vision et Mission</h2>
          <p className="text-lg text-gray-700 mb-8">
            Nous aspirons à redéfinir le luxe à travers des créations audacieuses, alliant sophistication et innovation. Notre mission est de proposer des bijoux qui marient beauté, rareté et valeur émotionnelle, tout en respectant les plus hauts standards de durabilité et de qualité.
          </p>

          <div className="flex justify-center space-x-6">
            <div className="flex flex-col items-center">
              <div className="text-4xl text-indigo-700 mb-2">
                <i className="fas fa-gem"></i>
              </div>
              <h3 className="font-semibold text-xl text-gray-700">Notre Vision</h3>
              <p className="text-gray-500">
                Être la référence mondiale en matière de joaillerie de luxe, en offrant des créations qui éveillent des émotions uniques et intemporelles.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-4xl text-indigo-700 mb-2">
                <i className="fas fa-hand-holding-heart"></i>
              </div>
              <h3 className="font-semibold text-xl text-gray-700">Notre Mission</h3>
              <p className="text-gray-500">
                Créer des bijoux d'une beauté exceptionnelle qui incarnent l'art du raffinement et la délicatesse, tout en restant fidèles à nos valeurs d'innovation et de luxe durable.
              </p>
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

export default Presentation;
