import React from 'react';
import { Loading } from '../Loading';

	const Profile = (props) => {

        const handleLogout = () => {
            props.logoutUser();
        }

        /* if (props.user.isLoading) {
            return( <Loading /> );
        }
        else if (props.user.errMess) {  
            return(
                <div className="container component-container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{props.user.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else */
			return (
				<div className="container component-container">
                    <br/>
                    <img top src="https://i.pinimg.com/550x/17/d0/8d/17d08d27fa82c825ba0152d8008b6e51.jpg" style={{backgroundColor: "black", borderRadius: "50%", paddingLeft: "4%", paddingRight: "4%"}} width="30%" />
					<div className="row">
						<div className="col-12">
                            <br/>
                            <br/>
                            <h6>Settings</h6>
                            <hr/>
                            <h6 onClick={handleLogout}>Logout</h6>
                            <hr/>
                        </div>
					</div>
				</div>
			);
	}


export default Profile;