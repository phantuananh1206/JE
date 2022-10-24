import classNames from 'classnames/bind'
import styles from './Login.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
const cx = classNames.bind(styles)

function Login() {
    return (
        <div className={cx('container-login')}>
            <div className={cx('wrap-login')}>
                <form className={cx('login-form')}>
                    <span className={cx('login-form-title')}>
                        Login
                    </span>
                    <div className={cx('wrap-input', 'email')} data-validate="Email is reauired">
                        <span className={cx('label-input')}>Email</span>
                        <input className={cx('input-account')} type="text" name="email" placeholder="Type your email" />
                        <span className="focus-input100" data-symbol="" />
                    </div>
                    <div className={cx('wrap-input')} data-validate="Password is required">
                        <span className={cx('label-input')}>Password</span>
                        <input className={cx('input-account')} type="password" name="pass" placeholder="Type your password" />
                        <span className="focus-input100" data-symbol="" />
                    </div>
                    <div className={cx('forgot-password')}>
                        <a href="#">
                            Forgot password?
                        </a>
                    </div>
                    <div className={cx('container-login-form-btn')}>
                        <div className={cx('wrap-login-form-btn')}>
                            <div className={cx('login-form-bgbtn')} />
                            <button className={cx('login-form-btn')}>
                                Login
                            </button>
                        </div>
                    </div>
                    {/* <div className="txt1 text-center p-t-54 p-b-20">
                        <span>
                            Or Sign Up Using
                        </span>
                    </div>
                    <div className="flex-c-m">
                        <a href="#" className="login100-social-item bg1">
                            <i className="fa fa-facebook" />
                        </a>
                        <a href="#" className="login100-social-item bg2">
                            <i className="fa fa-twitter" />
                        </a>
                        <a href="#" className="login100-social-item bg3">
                            <i className="fa fa-google" />
                        </a>
                    </div>
                    <div className="flex-col-c p-t-155">
                        <span className="txt1 p-b-17">
                            Or Sign Up Using
                        </span>
                        <a href="#" className="txt2">
                            Sign Up
                        </a>
                    </div> */}
                </form>
            </div>
        </div>
    );
}

export default Login;