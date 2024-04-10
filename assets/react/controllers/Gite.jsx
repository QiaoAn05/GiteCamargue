import React from 'react';
import Mazet from '../../images/gite-mazet.jpg';
import Pigeonnier from '../../images/gite-pigeonnier.jpg';
import Bergerie from '../../images/gite-bergerie.jpg';

export default function () {
    return (
        <>
            <div className="hero-banner d-flex">
                <div className="container-fluid text-white text-center">
                    <h1>Nos Gites</h1>
                </div>
            </div>
            <section className='container py-5'>

                <div className='row'>
                    <div className="d-flex mb-3">
                        <button className='btn btn-dark'>Ajouter un gite</button>
                    </div>   
                </div>

                <div className='row'>
                    <div className='col-12 col-lg-4 mb-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <img src={ Mazet } alt="photo du Mazet" className='card-img' />
                                <h5 className='card-title'>Le Mazet</h5>
                                <p className='card-text'>Contenu gite 1</p>
                                <div className="d-flex justify-content-between">
                                    <a href="/tarifs" className='text-dark'>Voir le tarif</a>
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-pencil-square text-success  me-2"></i>
                                        <i className="bi bi-trash text-danger"></i>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-4 mb-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <img src={ Pigeonnier } alt="photo du Pigeonnier" className='card-img' />
                                <h5 className='card-title'>Le Pigeonnier</h5>
                                <p className='card-text'>Contenu gite 2</p>
                                <div className="d-flex justify-content-between">
                                    <a href="/tarifs" className='text-dark'>Voir le tarif</a>
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-pencil-square text-success  me-2"></i>
                                        <i className="bi bi-trash text-danger"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-4 mb-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <img src={ Bergerie } alt="photo de la Bergerie" className='card-img' />
                                <h5 className='card-title'>La Bergerie</h5>
                                <p className='card-text'>Contenu gite 3</p>
                                <div className="d-flex justify-content-between">
                                    <a href="/tarifs" className='text-dark'>Voir le tarif</a>
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-pencil-square text-success  me-2"></i>
                                        <i className="bi bi-trash text-danger"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
