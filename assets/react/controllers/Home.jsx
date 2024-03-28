import React from 'react';

export default function (props) {
    
    return (
    
    <div className='card text-dark'>Hello {props.fullName}
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-primary me-md-2" type="button">Button</button>
            <button className="btn btn-dark" type="button">Button</button>
        </div>
    </div>
    
    );
}
