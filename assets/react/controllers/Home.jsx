import React from 'react';
import accueil from "../../images/photos-accueil-mas.jpg";

export default function () {
    
    return (
    
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
                        <img src={accueil} alt="Description de l'image" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>

        <section className="py-5 bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <img src={accueil} alt="Description de l'image" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex flex-column justify-content-center h-100">
                            <h2 className="text-center mb-5">Gîtes en location</h2>
                            <p className="mb-5 mx-5">
                            Venez découvrir nos gîtes en plein coeur d'une Camargue resplendissante !</p>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-light mx-2">Nos gîtes</button>
                                <button className="btn btn-light mx-2">Nos tarifs</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section  className="py-5">
            <div className="container-md">
                <h2 id="contact" className='text-center mb-5'>Contact</h2>
                <form action="submit" className="mx-auto" style={{ maxWidth: "500px" }}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nom :</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="Entrez votre nom" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email :</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Entrez votre email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message :</label>
                        <textarea className="form-control" id="message" name="message" rows="5" placeholder="Entrez votre message" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-dark text-white w-100">Envoyer</button>
                </form>
            </div>
        </section>


    </div>
    
    );
}
