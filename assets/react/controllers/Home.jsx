import React from 'react';

export default function (props) {
    
    return (
    
    <div className='card text-primary'>Hello {props.fullName}
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn btn-primary me-md-2" type="button">Button</button>
            <button class="btn btn-primary" type="button">Button</button>
        </div>
    </div>
    
    );
}
