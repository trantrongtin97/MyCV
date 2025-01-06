import styles from './TimeLine.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TimeLine = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('detail')}>
                <div className={cx('timeline-block')}>
                    <h1>APTECH</h1>
                    <p>Ho Chi Minh City, Viet Nam</p>
                    <time>2018 - 2021</time>
                </div>
            </div>

        </div>
    );
}

export default TimeLine;