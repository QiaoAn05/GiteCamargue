import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Mazet from '../../images/gite-mazet.jpg';
import Pigeonnier from '../../images/gite-pigeonnier.jpg';
import Bergerie from '../../images/gite-bergerie.jpg';

export default function Gites() {
    const [gites, setGites] = useState([]);

    useEffect(() => {
        axios.get('api/gites')
            .then(response => {
                setGites(response.data);
                // console.log("data :", response.data);
            })
            .catch(error => {
                console.error('Error fetching gites:', error);
            });
    }, []);

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
                    {gites.map(gite => (
                        <div key={gite.id} className='col-12 col-lg-4 mb-4'>
                            <div className='card'>
                                <div className='card-body'>
                                    <img src={gite.image} alt={`photo du ${gite.name}`} className='card-img' />
                                    <h5 className='card-title'>{gite.name}</h5>
                                    <p className='card-text'>{gite.description}</p>
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
                    ))}
                </div>
            </section>
        </>
    );
}
