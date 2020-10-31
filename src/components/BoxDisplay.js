import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BoxDisplay = (props) => {

    return (
        <>
        <div class='col-4 d-flex flex-column container-fluid'>
            {
                props.box.map((color,i) => {
                    return <div 
                    class='d-flex container-fluid my-3'
                    key={i} 
                    style={{height:'200px', width:'200px', backgroundColor:color}}>
                    </div>
                })
            }
        </div>
        </>
    )
}

export default BoxDisplay