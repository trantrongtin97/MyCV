import { Fragment } from 'react';
import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';
import routesConfig from '../../configs/route';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faFacebookF, faGithub,faInstagram} from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles)

const Sidebar = () => {
    return (
        <Fragment>
            <div className={cx('logo')}>
                <a href={routesConfig.profile}>
                    <span>My</span>
                    <span>Resume</span>
                </a>
            </div>
            <div className={cx('nav')}>
                <ul>
                    <li><a href={routesConfig.professionalSummary}>Professional Summary</a></li>
                    <li><a href={routesConfig.education}>Education</a></li>
                    <li><a href={routesConfig.workexperience}>Work Experience</a></li>
                    <li><a href={routesConfig.technology}>Technology And Skills</a></li>
                    <li><a href={routesConfig.projects}>Projects</a></li>
                </ul>
            </div>
            <div className={cx('left-footer')}>
                <div className={cx('social-icons')}>
                    <ul>
                        <li><a href=""><FontAwesomeIcon className={cx('i-primary')} icon={faLinkedin} /></a></li>
                        <li><a href=""><FontAwesomeIcon className={cx('i-primary')}  icon={faFacebookF} /></a></li>
                        <li><a href="https://github.com/trantrongtin97"><FontAwesomeIcon className={cx('i-primary')}  icon={faGithub} /></a></li>
                        <li><a href=""><FontAwesomeIcon className={cx('i-primary')}  icon={faInstagram} /></a></li>
                    </ul>
                </div>
                <div className={cx('foot-contact')}>
                    <ul>
                        <li>trantrongtin97@gmail.com</li>
                        <li>0902412793</li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
}

export default Sidebar;