import React from 'react';

export const Loading = () => {
    return(
        <div className="container component-container">
            <div className="row">  
                <div className="col-12" style={{paddingTop: '350px'}}>
                    <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
                    <p>Loading . . .</p>
                </div>
            </div>
        </div>
    );
};