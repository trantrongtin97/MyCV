import { Fragment } from "react";
import styles from './Education.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const Education = () => {
    return (
        <Fragment>
            <div className={cx('edu-content')}>
                <div className={cx('detail')}>
                    <div className={cx('detail-section edu')}>
                        <div className={cx('detail-title')}>
                            <div className={cx('title-icon')}>
                                <FontAwesomeIcon className={cx('title-icon-content')} icon={faUserGraduate} />
                            </div>
                            <span className={cx('title-icon-span')}>Education</span>
                        </div>
                        <div className={cx('detail-content')}>
                            <div className={cx('timeline-block')}>
                                <h1>APTECH</h1>
                                <p>Ho Chi Minh City, Viet Nam</p>
                                <time>2018 - 2021</time>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('div-tool-list')}>
                    <ul className={cx('tool-list')}>
                        <li>
                            <svg viewbox="0 0 100 100">
                                <circle cx="50" cy="50" r="45"></circle>
                                <circle className={cx('cbar')} cx="50" cy="50" r="45" style={{ "--percent": "0.8" }}>
                                </circle>
                            </svg>
                            <span className={cx('tl-name')}>GPA</span>
                            <span className={cx('tl-exp')}>8.6</span>
                        </li>
                    </ul>
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