import React from 'react';
import accueil from "../../images/photos-accueil-mas.jpg";

export default function () {
    
    return <>
    
    <div className='text-dark mb-5'>
        <div className="hero-banner d-flex">
            <div className="container-fluid text-white text-center">
                <p className='text-center'>Venez découvrir la Camargue au</p>
                <h1>Mas de Guinot</h1>
            </div>
        </div>

        <section className="py-5 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="d-flex flex-column justify-content-center h-100">
                            <h2 className="text-center mb-5 text-dark">Bienvenue au Mas de Guinot</h2>
                            <p className="mb-5 mx-5">
                            La famille Crozat vous accueillent au Mas de Guinot , domaine rizicole de 80 hectares situé au cœur du parc régional de Camargue entre Arles et Salin de Giraud.
                            </p>
                            <button className="btn btn-dark text-white mx-auto">A propos</button>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src={accueil} alt="Description de l'image" className="img-fluid img-section" />
                    </div>
                </div>
            </div>
        </section>

        <section className="py-5 bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <img src={accueil} alt="Description de l'image" className="img-fluid img-section" />
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex flex-column justify-content-center h-100">
                            <h2 className="text-center mb-5">Gîtes en location</h2>
                            <p className="mb-5 mx-5">
                            Venez découvrir nos gîtes en plein coeur d'une Camargue resplendissante !</p>
                            <div className="d-flex justify-content-center">
                                <a href="/gite"><button className="btn btn-light mx-2">Nos gîtes</button></a>
                                <a href="/tarifs"><button className="btn btn-light mx-2">Nos tarifs</button></a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='py-5 container'>
            <h2 className='text-center mb-4'>Nous contacter</h2>
            <p className='text-center mb-3'>N'hésitez pas à nous contacter pour plus d'information !</p>
            <div className="d-flex justify-content-center">
                <a href="/contact"><button className="btn btn-dark text-white">Formulaire de contact</button></a>
            </div>
        </section>

    </div>
    
    </>
}
