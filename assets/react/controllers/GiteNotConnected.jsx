import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function GiteNotConnected() {
    const [gites, setGites] = useState([]);

    useEffect(() => {
        axios.get('gites/read')
            .then(response => {
                setGites(response.data);
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
                    {gites.map(gite => (
                        <div key={gite.id} className='col-12 col-lg-4 mb-4'>
                            <div className='card'>
                                <div className='card-body'>
                                    <img src={gite.image} alt={`photo du ${gite.name}`} className='card-img' />
                                    <h5 className='card-title'>{gite.name} - {gite.maxPerson} pers.</h5>
                                    <p className='card-text'>{gite.description}</p>
                                    <div className="d-flex justify-content-between">
                                        <a href="/tarifs" className='text-dark'>Voir le tarif</a>
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
