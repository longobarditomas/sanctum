import React, {useState} from 'react';
import {connect} from 'react-redux';
import {CardGroup, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import OffcanvasHeader from 'react-bootstrap/Offcanvas';
import OffcanvasBody from 'react-bootstrap/Offcanvas';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { Loading } from '../General/Loading';
import { Error } from '../General/Error';
import ArtistCard from './ArtistCard';
import ScrollNav from '../Home/ScrollNav';
import { postUserAlbum } from '../../redux/user/actionCreators';

	const mapStateToProps = state => {
		return {
			artists: state.artists,
			general: state.general,
		}
	}

	const Artists = (props) => {

        if (props.artists.isLoading) {
			return( <Loading /> );
		}
        else if (props.artists.errMess) {
			return( <Error artists={props.artists} /> );
        }
        else
			return (
				<div className="container component-container">
					<div className="row">
						<Breadcrumb>
							<BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
							<BreadcrumbItem active>Artists</BreadcrumbItem>
						</Breadcrumb>
						<br/>
						<div>
							<ScrollNav items={skills ? skills : []} />
						</div>
						<div className="col-12">
							<h3 className='App-subtitle'>Artists</h3>
							<hr />
						</div>                
					</div>
				</div>
			);
	}


export default connect(mapStateToProps)(Artists);