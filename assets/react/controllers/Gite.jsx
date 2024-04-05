import React from 'react';

export default function Home() {
    return (
        <>
            <div className="hero-banner d-flex">
                <div className="container-fluid text-white text-center">
                    <h1>Nos Gites</h1>
                </div>
            </div>
            <section className='container py-5'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className='card-title'>Gite 1</h5>
                                <p className='card-text'>Contenu gite 1</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className='card-title'>Gite 2</h5>
                                <p className='card-text'>Contenu gite 2</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className='card-title'>Gite 3</h5>
                                <p className='card-text'>Contenu gite 3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
