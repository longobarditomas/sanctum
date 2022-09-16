import React from 'react';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { publicUrl } from '../../shared/publicUrl';

	const ArtistCard = (props) => {

		const editArtist = () => {
			props.setEdit(props.artist);
			props.toggle();
		}

		const deleteArtist = () => {
			console.log('not ready yet');
		}

		return(
			<Card key={`artist-${props.artist.id}`} className="artist-card" /* style={{minHeight: "266px", maxHeight: "266px"}} */>
				<div className="artist-card-content">
				{props.profile ?
					<Card.Header style={{padding: "0px"}}>
						<div className="float-right">
							<Dropdown tag="div">
								<Dropdown.Toggle as="span">
									<i className="fa fa-ellipsis-v" aria-hidden="true"></i>
								</Dropdown.Toggle>
								<Dropdown.Menu variant="dark">
									<Dropdown.Item onClick={editArtist}>Edit</Dropdown.Item>
									<Dropdown.Item onClick={deleteArtist}>Delete</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
					</Card.Header>
				: ''}
					<Link to={`/artists/${props.artist.id}`}>
						<Card.Img top src={`${publicUrl}images/artists/${props.artist.id}`} alt={props.artist.id} style={{backgroundColor: "black", borderRadius: "50%"}} />
						{/* <Card.Img top src="http://192.168.1.6:3000/logo192.png" alt={props.artist.id} style={{backgroundColor: "black", borderRadius: "50%"}} /> */}
						<Card.Body className="artist-card-body-2">
							<Card.Text tag="div" style={{textAlign: "center"}}>
								<h6 style={{fontSize: "12px", padding:"0px"}}>{props.artist.name}</h6>
								{/* <span>{props.artist.skills ? props.artist.skills[0].name : ''}</span><br/> */}
								
								{/* <span>{(props.artist.skills ? props.artist.skills[0].name : '')+" | "+(props.artist.country ? props.artist.country.name : '')}</span><br/> */}
							</Card.Text>
						</Card.Body>
						<Card.Footer className="artist-card-footer-2">
							<Card.Text tag="div" style={{textAlign: "center"}}>
							<span>{props.artist.skills ? props.artist.skills[0].name : ''}</span>
							</Card.Text>
						</Card.Footer>
					</Link>
				</div>
			</Card>
		);
	}

export default ArtistCard;