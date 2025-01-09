import styles from './TimeLine.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TimeLine = ({ datas }) => {
    if (datas && datas.length > 0) {
        return (
            <div className={cx('wrapper')}>
                <div className={cx('detail')}>
                    {
                        datas.map((d, index) => {
                            return (
                                <div key={d.id} style={{"animationDelay":(d.id*0.1)+"s"}} className={cx('timeline-block')}>
                                    <h1>{d.header}</h1>
                                    <p>{d.address}</p>
                                    <p>{d.client}</p>
                                    <time>{d.time}</time>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default TimeLine;