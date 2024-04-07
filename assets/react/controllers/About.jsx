import React from 'react';
import About from '../../images/photos-accueil-mas.jpg';

export default function () {
    return (
        <>
            <div className="hero-banner d-flex">
                <div className="container-fluid text-white text-center">
                    <h1>A Propos</h1>
                </div>
            </div>
            <section className='container py-1 mt-4'>
              <h2>BIENVENUE AU MAS DE GUINOT</h2>
              <p className='text-justify my-3'>
                La famille Crozat vous accueillent au Mas de Guinot , domaine rizicole de 80 hectares situé au cœur du parc régional de Camargue entre Arles et Salin de Giraud.

Ce véritable mas traditionnel du 18e siècle propose 3 gîtes dans un cadre verdoyant pour un séjour en toute tranquillité.
                </p>
                <img src={ About } alt="Photo de présentation" className='rounded img-about mx-auto d-block'/>
                <p className='text-justify my-3'>
                    Lors de votre séjour vous pourrez vous promener sur l'exploitation et y découvrir une faune et une flore variées. Il vous sera aussi possible de profiter d un terrain de boules ombragé et d'un espace jeux pour les enfants. La famille Crozat sera à votre disposition pour vous orienter à propos des différentes activités à faire dans la région et répondre aux éventuelles questions sur l'agriculture.Enfin, vous disposerez  pour votre plus grand confort, d’un parking, d’une belle terrasse privative équipée d'un salon de jardin et d’un barbecue.
                </p>
            </section>

        </>
    );
}
