import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, Redirect } from 'react-router-dom';
import DefaultInput from '../General/Form/DefaultInput';
import { AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';

const Login = (props) => {

    const [formErrors, setFormErrors] = useState({});

    const handleLogin = async (event, errors, values) => {
        event.preventDefault();
        const fd = new FormData();
        fd.append('email', values.email);
        fd.append('password', values.password);
        fd.append('remember', values.remember);
        var result = await props.loginUser(fd);
        console.log(result)
        /* if (result.errors) setFormErrors(result.errors); */
    }

    const handleLogout = (event) => {
        event.preventDefault();
        props.logoutUser();
    }

    const handleFbLogin = (event) => {
        event.preventDefault();
        props.loginSocialUser(event.target.value);
    }

    if (!props.auth.isAuthenticated) {
        return (
            <React.Fragment>
                <div className="container component-container mob-container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className='App-subtitle'>Login</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row" style={{textAlign: "left"}}>
                        <div className=" col-12 col-md-4 offset-md-4">
                            <AvForm onSubmit={handleLogin}>
                                <DefaultInput name={"email"} id={"email"} label={"Email"} placeholder="brianmay@gmail.com" />
                                {props.auth.errors && props.auth.errors.email ? 
                                    <div className="input-error">{props.auth.errors.email}</div>
                                : ''}
                                <DefaultInput type={"password"} name={"password"} id={"password"} label={"Password"} />
                                <AvGroup check>
                                    <AvInput type="checkbox" name="remember" />
                                    <Form.Label check for="remember">remember</Form.Label>
                                </AvGroup>
                                <Button type="submit" value="submit" color="primary">Login</Button>
                            </AvForm>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    } else {
        return ( <Redirect to="/" /> );
    }
}

export default Login;