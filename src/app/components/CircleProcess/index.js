import styles from './CircleProcess.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

const CircleProcess = ({data}) => {
    const [percent,setPercent] = useState(0);

    useEffect(()=>{
        setPercent(0.86)
    },[percent])

    return (
        <div className={cx('circle-block')}>
            <svg>
                <circle cx="50" cy="50" r="45"></circle>
                <circle className={cx('cbar')} cx="50" cy="50" r="45" style={{ "--percent": percent }}>
                </circle>
            </svg>
            <span className={cx('tl-name')}>{data.content}</span>
            <span className={cx('tl-exp')}>{data.score}</span>
        </div>
    );
};

export default CircleProcess;