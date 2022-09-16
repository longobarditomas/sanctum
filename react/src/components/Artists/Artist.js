import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Loading } from '../General/Loading';
import { Error } from '../General/Error';
import { baseUrl } from '../../shared/baseUrl';
import Socials from './Socials';

function RenderArtist({artist, user, auth}) {
	if (artist != null) {

		return(
			<div key={'artist-'+artist.id} className="artist">
				<div className="artist-info">
					<Row>
						<Col md="4">
							<img src={`${baseUrl}ensembles/${artist.id}/show-image`} className="detail-img" alt={artist.name} />
							<br/>
						</Col>
						<Col md="8" style={{paddingTop: "40px"}}>
							<h3>{artist.name}</h3>
							<br/>
							<h6 style={{padding:"0 80px 0 0"}}>{artist.about}</h6>
							<br/>
						{artist.skills && artist.skills.length > 0 ?
							<div>
								<h5>Primary Skills</h5>
								{artist.skills.map(x => {
									return (<span className="artist-skill">{x.name}</span>);
								})}
								<br/>
							</div>
						: ''}
						{artist.socials && artist.socials.length > 0 ?
							<div>
								{artist.socials.map((social) => {
									return(
										<Socials name={social.social ? social.social.name : ''} code={social.code} />
										);
									})}
							</div>
						: ''}
						</Col>
					</Row>
				</div>
			</div>
		);
	} 
	else {
		return(<div></div>);
	} 
}

const Artist = (props) => {
	if (props.isLoading) {
		return( <Loading /> );
	}
	else if (props.errMess) {
		return( <Error artists={props.artists} /> );
	}
	else if (props.artist != null) {
		return (
			<div className="container">
				<RenderArtist artist={props.artist} user={props.user} auth={props.auth} setSpotifyAlbum={props.setSpotifyAlbum} />
			</div>
		);
	}
	else {
		return (<div></div>)
	}
}

export default Artist;