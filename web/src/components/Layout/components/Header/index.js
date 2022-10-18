import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
const cx = classNames.bind(styles)

function Header() {
    return (
        <header>
            <div className={cx('infor')}>
                <div className={cx('container-infor')}>
                    <div className={cx('infor-left')}>
                        <div className={cx('center')}>
                            <small><FontAwesomeIcon className={cx('mr-2')} icon={faPhone} />+012 345 6789</small>
                            <small className={cx('px-3')}>|</small>
                            <small><FontAwesomeIcon className={cx('mr-2')} icon={faEnvelope} />info@example.com</small>
                        </div>
                    </div>
                    <div className={cx('infor-right')}>
                        <div className={cx('center')}>
                            <a className={cx('social', 'px-2')} href="">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a className={cx('social', 'px-2')} href="">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a className={cx('social', 'px-2')} href="">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a className={cx('social', 'px-2')} href="">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a className={cx('social', 'px-2')} href="">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('container-nav')}>
                <nav className={cx('navbar')}>
                    <a href="index.html" className={cx('navbar-brand')}>
                        <h1 className={cx('text-primary')}><span className={cx('text-dark')}>JE</span> Ecommerce</h1>
                    </a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className={cx('navbar-collapse')}>
                        <div className={cx('navbar-nav')}>
                            <a href="index.html" className={cx('nav-link', 'nav-link-active')}>Home</a>
                            <a href="about.html" className={cx('nav-link')}>About</a>
                            <a href="service.html" className={cx('nav-link')}>Services</a>
                            <a href="price.html" className={cx('nav-link')}>Pricing</a>
                            <a href="#" className={cx('nav-link')} data-toggle="dropdown">Pages</a>
                            <a href="contact.html" className={cx('nav-link')}>Contact</a>
                        </div>
                        <a href="" className={cx('auth-user')}>Sign up</a>
                        <small className={cx('px-3')}>|</small>
                        <a href="" className={cx('auth-user')}>Sign in</a>
                    </div>
                </nav>
            </div>
        </header >
    );
}

export default Header;