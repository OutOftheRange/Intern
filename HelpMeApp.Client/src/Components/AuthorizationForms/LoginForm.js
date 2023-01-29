import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { routes } from '../../Constants/routes';
import 'bootstrap/dist/css/bootstrap.css';
import './AuthorizationForms.css';

const {
    pathToLoginPage,
    pathToSignUpPage
} = routes;



const LoginForm = () => {

    return (
        <div className='auth-form'>
            <div className="header-button-wrapper">
                <Link to={pathToLoginPage}><button className="current-form-type normal-button header-button left-button">login</button></Link>
                <Link to={pathToSignUpPage}><button className="other-form-type normal-button header-button right-button">registration</button></Link>
            </div>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={async (values) => {

                    alert(JSON.stringify(values, null, 2));

                }}
            >
                <Form className='form'>
                    <div className='mb-3 row'>
                        <label htmlFor="email" className='col-sm-2 col-form-label up'>Email</label>
                        <br />

                        <Field
                            id="email"
                            name="email"
                            placeholder="name@gmail.com"
                            type="email"
                            className="form-control up"
                            required
                        />

                    </div>

                    <div className='mb-3 row'>
                        <label htmlFor="password" className='col-sm-2 col-form-label up'>Password</label>
                        <Field
                            id="password"
                            name="password"
                            type="password"
                            className="form-control up"
                            required
                        />
                    </div>
                    <br />
                    <button className='submit-button horizontal-center btn btn-primary mb-3 up' type="submit">Submit</button>

                </Form>
            </Formik>
        </div >
    );
}

export default LoginForm;