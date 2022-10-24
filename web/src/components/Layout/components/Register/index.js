import classNames from 'classnames/bind'
import styles from './Register.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { useState, useEffect } from 'react'
const cx = classNames.bind(styles)

function Register() {
    const initialValues = {
        email: "",
        password: "",
        passwordConfirm: ""
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true)
    }

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors])

    const validate = (values) => {
        const errors = {}
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required!";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters!";
        }
        if (!values.passwordConfirm) {
            errors.passwordConfirm = "Password confirm is required!";
        } else if (values.passwordConfirm !== values.password) {
            errors.passwordConfirm = "Password confirm does not match password!";
        }
        return errors;
    }

    return (
        <div className={cx('container-register')}>
            <div className={cx('wrap-register')}>
                {Object.keys(formErrors).length === 0 && isSubmit ? alert('Signed in successfully') : ""}
                <form className={cx('register-form')} onSubmit={handleSubmit}>
                    <span className={cx('register-form-title')}>
                        Sign up
                    </span>
                    <div className={cx('wrap-input', 'email')} data-validate="Email is required">
                        <span className={cx('label-input')}>Email</span>
                        <input className={cx('input-account')} type="text" name="email" placeholder="Type your email" value={formValues.email} onChange={handleChange} />
                        <span className="focus-input100" data-symbol="" />
                    </div>
                    <p class>{formErrors.email}</p>
                    <div className={cx('wrap-input')} data-validate="Password is required">
                        <span className={cx('label-input')}>Password</span>
                        <input className={cx('input-account')} type="password" name="password" placeholder="Type your password" value={formValues.password} onChange={handleChange} />
                        <span className="focus-input100" data-symbol="" />
                    </div>
                    <p>{formErrors.password}</p>
                    <div className={cx('wrap-input')} data-validate="Password is required">
                        <span className={cx('label-input')}>Confirm Password</span>
                        <input className={cx('input-account')} type="password" name="passwordConfirm" placeholder="Type your confirm password" value={formValues.passwordConfirm} onChange={handleChange} />
                        <span className="focus-input100" data-symbol="" />
                    </div>
                    <p>{formErrors.passwordConfirm}</p>
                    <div className={cx('container-register-form-btn')}>
                        <div className={cx('wrap-register-form-btn')}>
                            <div className={cx('register-form-bgbtn')} />
                            <button className={cx('register-form-btn')}>
                                Register
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;