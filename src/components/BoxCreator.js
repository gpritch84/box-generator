import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BoxCreator = (props) => {
    const [boxCreator, setBoxCreator] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewBox(boxCreator)
    }

    return (
        <>
            <form class="form-group col-4 d-flex flex-column container-fluid" onSubmit={handleSubmit}>
                <h1 class='d-flex justify-content-center'>Add a box of any color</h1>
                <textarea 
                    class='form-control' 
                    placeholder="Enter a color"
                    onChange={(e) => setBoxCreator(e.target.value)}
                    value={boxCreator}>
                </textarea>
                <input class='form-control my-3' type="submit" value="Add Box" />
            </form>
        </>
    )
}

export default BoxCreator