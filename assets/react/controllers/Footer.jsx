import React from 'react';

export default function () {
  return <>
    <div className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h5>Le Mas de Guinot</h5>
            <p>Le Sambuc Route de Guinot</p>
            <p>13200 Arles</p>
            <p>crozat.nicolas13@gmail.com</p>
            <p>+33 (0)6 73 20 09 63</p>
          </div>
          <div className="col-12 col-md-6">
            <div className="bg-light" style={{ height: '200px', width: '100%' }}>
              <div className="mapouter" style={{ position: 'relative', textAlign: 'right', width: '100%', height: '100%' }}>
                <div className="gmap_canvas" style={{ overflow: 'hidden', background: 'none!important', height: '100%', width: '100%' }}>
                  <iframe
                    title="map"
                    width="100%"
                    height="100%"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Le%20Sambuc%20Route%20de%20Guinot%20%2013200%20Arles&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                  ></iframe>
                  <a href="https://123movies-i.net">shrek 2 123movies</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
}
