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
        </header >
    );
}

export default Header;