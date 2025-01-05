import { Fragment } from 'react';
import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
import images from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone, faLocationDot, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebookF, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

const Profile = () => {
    return (
        <Fragment>
            <div className={cx('sec-title')}>
                <div className={cx('pg-title')}>
                    <FontAwesomeIcon className={cx('m-right20')} icon={faCircleUser} />
                    My Profile</div>
            </div>
            <div className={cx('page-content')}>
                <div className={cx('user-img')}><img src={images.avatar} /></div>
                <div className={cx('user-profile flex-1')}>
                    <div className={cx('user-profile')}>
                        <div className={cx('pro-details')}>
                            <div className={cx('name')}>Tran Trong Tin</div>
                            <div className={cx('role')}>Full Stack Developer</div>
                        </div>
                        <div className={cx('text')}>Experienced .NET Developer with over 3 years of expertise in
                            developing, optimizing performance and maintaining software using .NET with a strong
                            background in the banking industry. My journey in software development has equipped
                            me with a robust skill set in both front-end and back-end technologies</div>
                        <div className={cx('pr-list')}>
                            <ul>
                                <li><FontAwesomeIcon className={cx('m-right10')} icon={faCalendar} /> 11th July, 1997</li>
                                <li><FontAwesomeIcon className={cx('m-right10')} icon={faPhone} /> 0902412793</li>
                                <li><FontAwesomeIcon className={cx('m-right10')} icon={faEnvelope} /> trantrongtin97@gmail.com </li>
                                <li><FontAwesomeIcon className={cx('m-right10')} icon={faLocationDot} /> Ho Chi Minh City, Viet Nam
                                </li>
                            </ul>
                        </div>
                        <div className={cx('social-icons-head')}>
                            <ul>
                                <li><a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                                    <a href=""><FontAwesomeIcon icon={faFacebookF} /></a>
                                    <a href=""><FontAwesomeIcon icon={faGithub} /></a>
                                    <a href=""><FontAwesomeIcon icon={faInstagram} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    );
}

export default Profile;