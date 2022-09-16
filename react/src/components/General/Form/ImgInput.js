import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';

const ImgInput = (props) => {

    const [image, setImage] = useState(props.image ? props.image : null);

    const handleImg = (event) => {
        setImage(URL.createObjectURL(event.target.files[0]));
    }

    const onButtonClick = () => {
        props.fileInput.current.click();
    }; 

    return (
        <Form.Group>
        {image ? 
            <img src={image} alt={props.alt ? props.alt : ''} height="150" onClick={onButtonClick} style={{minHeight: "150px", backgroundColor: "black"}} />
        :
            <div onClick={onButtonClick} style={{height: "150px", width: "150px", backgroundColor: "black"}}></div>
        }
            <div><input type="file" ref={props.fileInput} accept=".jpg" onChange={handleImg}  style={{display: 'none'}} /></div>
        </Form.Group>
    );
}

export default ImgInput;