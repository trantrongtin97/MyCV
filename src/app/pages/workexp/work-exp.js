import { Fragment } from "react";
import styles from './WorkExp.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const WorkExperience = () => {
    return (
        <div className={cx('detail')}>
            <div className={cx('detail-section')}>
                <div className={cx('detail-title')}>
                    <div className={cx('title-icon')}>
                        <i className={cx('fas fa-building')}></i>
                    </div>
                    <span>Work Experience</span>
                </div>
                <div className={cx('detail-content')}>
                    <div className={cx('timeline-block')}>
                        <h1>TPG Software, Inc</h1>
                        <p>Ho Chi Minh City, VietNam</p>
                        <p>USA</p>
                        <time>05/2021 - 09/2024</time>
                    </div>
                    <div className={cx('timeline-block')}>
                        <h1>CMC Global</h1>
                        <p>Ho Chi Minh City, VietNam</p>
                        <p>VietNam</p>
                        <time>10/2024 - present</time>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkExperience;