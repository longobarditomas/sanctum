import React from 'react';

export const Error = (props) => {
    return(
        <div className="container component-container">
            <div className="row"> 
                <div className="col-12">
                    <h4>{props.artists.errMess}</h4>
                </div>
            </div>
        </div>
    );
};