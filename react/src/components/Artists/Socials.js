import React from 'react';

const Socials = (props) => {
	var socials  = ['instagram', 'facebook', 'spotify', 'soundcloud'];
	var hrefLink = props.name === 'instagram' ? "https://www.instagram.com/"+props.code : props.name === 'facebook' ? props.code : props.name === 'spotify' ? "https://open.spotify.com/artist/"+props.code : props.name === 'soundcloud' ? props.code : '';
	var faIcon   = socials.includes(props.name) ? ("fa fa-"+props.name+" fa-2x") : '';
	return (
		<a href={hrefLink} style={{ textDecoration: "none", color:"white", paddingRight:"10px" }}><i className={faIcon} aria-hidden="true"></i> </a>
	);
};

export default Socials;