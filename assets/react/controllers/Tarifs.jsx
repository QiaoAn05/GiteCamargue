import React from 'react';

export default function () {
    return (
        <>
            <div className="hero-banner d-flex">
                <div className="container-fluid text-white text-center">
                    <h1>Nos Tarifs</h1>
                </div>
            </div>
            <section className='container py-1 mt-4'>
                <table class="table">
                    <thead className='table-dark'>
                        <tr>
                        <th scope="col">Le Mazet - 4pers.</th>
                        <th scope="col">Nuit</th>
                        <th scope="col">7j</th>
                        <th scope="col">15j</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Juillet-Août</th>
                            <td>160€</td>
                            <td>600€</td>
                            <td>1000€</td>
                        </tr>
                        <tr>
                            <th scope="row">Vacances scolaires</th>
                            <td>120€</td>
                            <td>500€</td>
                            <td>800€</td>
                        </tr>
                        <tr>
                            <th scope="row">Basse Saison</th>
                            <td>80€</td>
                            <td>350€</td>
                            <td>600€</td>
                        </tr>
                    </tbody>
                </table>
                <table class="table">
                    <thead className='table-dark'>
                        <tr>
                        <th scope="col">Le Piegonnier - 5pers.</th>
                        <th scope="col">Nuit</th>
                        <th scope="col">7j</th>
                        <th scope="col">15j</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Juillet-Août</th>
                            <td>160€</td>
                            <td>600€</td>
                            <td>1000€</td>
                        </tr>
                        <tr>
                            <th scope="row">Vacances scolaires</th>
                            <td>120€</td>
                            <td>500€</td>
                            <td>800€</td>
                        </tr>
                        <tr>
                            <th scope="row">Basse Saison</th>
                            <td>80€</td>
                            <td>350€</td>
                            <td>600€</td>
                        </tr>
                    </tbody>
                </table>
                <table class="table">
                    <thead className='table-dark'>
                        <tr>
                        <th scope="col">La Bergerie - 6pers.</th>
                        <th scope="col">Nuit</th>
                        <th scope="col">7j</th>
                        <th scope="col">15j</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Juillet-Août</th>
                            <td>180€</td>
                            <td>650€</td>
                            <td>1100€</td>
                        </tr>
                        <tr>
                            <th scope="row">Vacances scolaires</th>
                            <td>140€</td>
                            <td>550€</td>
                            <td>860€</td>
                        </tr>
                        <tr>
                            <th scope="row">Basse Saison</th>
                            <td>100€</td>
                            <td>410€</td>
                            <td>660€</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className='container py-1'>
                <h2>OPTIONS</h2>
                <p>Location linge de maison (draps et serviettes): 10€/pers.</p>
                <p>Ménage fin de séjour: 40€</p>
            </section>
        </>
    );
}
