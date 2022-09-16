import React from 'react';
import apiClient from '../../services/api';
import { baseUrl } from '../../shared/baseUrl';

const Callback = () => {
    const code = new URLSearchParams(window.location.search).get('code');
    /* console.log(code) */
    /* if (code) {
        apiClient.get(baseUrl + 'spotify-user?code='+code)
        .then(response => {
            console.log('loginWithSpotify');
            console.log(response.data);
            return response.data;
        })
    } */

    const makeCall = () => {
        apiClient.get(baseUrl + 'spotify-user?code='+code)
        .then(response => {
            console.log('loginWithSpotify');
            console.log(response.data);
            return response.data;
        })
    }

    return(
        <div className="container component-container">
            <div className="row"> 
                <div className="col-12">
                    <h4 style={{color: "white"}}>Callback</h4>
                    <h6 style={{color: "white"}}>{code}</h6>
                    <button onClick={e => makeCall() }></button>
                </div>
            </div>
        </div>
    );
}

export default Callback;