import React from 'react';
import {Card} from 'reactstrap';

const NewCard = (props) => {

    const newConcert = () => {
        props.setEdit(null);
        props.toggle();
    }

    return(
        <div className="col-12 col-md-3 mt-5" style={{padding:"14px"}} onClick={newConcert}>
            <Card className="artist-card content-center" onClick={props.toggle} style={{minHeight: "25.8rem"}}>
                <i className="fa fa-plus fa-2x plus-icon" aria-hidden="true"></i>
            </Card>
        </div>
    );
}

export default NewCard;