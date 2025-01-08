import styles from './CircleProcess.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const CircleProcess = ({data}) => {
    return (
        <div className={cx('circle-block')}>
            <svg>
                <circle cx="50" cy="50" r="45"></circle>
                <circle className={cx('cbar')} cx="50" cy="50" r="45" style={{ "--percent": "0.86" }}>
                </circle>

            </svg>
            <span className={cx('tl-name')}>{data.content}</span>
            <span className={cx('tl-exp')}>{data.score}</span>
        </div>
    );
};

export default CircleProcess;