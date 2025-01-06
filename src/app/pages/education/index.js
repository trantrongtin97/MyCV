import { Fragment } from "react";
import styles from './Education.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import Title from "../../components/Title";
import TimeLine from "../../components/TimeLine";

const cx = classNames.bind(styles);

const Education = () => {
    return (
        <Fragment>
            <div className={cx('edu-content')}>
                <Title name="Education" icon={<FontAwesomeIcon icon={faUserGraduate} />} />
                <div className={cx('line1')}>
                    <TimeLine />
                    <div className={cx('circle-block')}>
                        <svg>
                            <circle cx="50" cy="50" r="45"></circle>
                            <circle className={cx('cbar')} cx="50" cy="50" r="45" style={{ "--percent": "0.86" }}>
                            </circle>
                            
                        </svg>
                        <span className={cx('tl-name')}>GPA</span>
                        <span className={cx('tl-exp')}>8.6</span>
                    </div>

                </div>
            </div>
            <div>
                <ul className={cx('responsive-table')}>
                    <li className={cx('table-header')}>
                        <div className={cx('col col-1')}>Language</div>
                        <div className={cx('col col-2 col-temp')}>Level</div>
                    </li>
                    <li className={cx('table-row')}>
                        <div className={cx('col col-1')} data-label="English"><span className={cx('col-temp')}>English</span></div>
                        <div className={cx('col col-2')} data-label="Level">Intermediate</div>
                    </li>
                </ul>
            </div>
        </Fragment>

    );
}

export default Education;