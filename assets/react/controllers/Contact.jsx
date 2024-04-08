import React from 'react';

export default function () {
    return (
        <>
            <div className="hero-banner d-flex">
                <div className="container-fluid text-white text-center">
                    <h1>Contact</h1>
                </div>
            </div>
            <section className='container-md p-5 my-5 col-6 col-sm-12'>
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
            </section>

        </>
    );
}
