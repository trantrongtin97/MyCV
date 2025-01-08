import styles from './TimeLine.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TimeLine = ({ datas }) => {
    if (datas && datas.length > 0) {
        return (
            datas.map((d, index) => {
                return (
                    <div key={d.id} className={cx('wrapper')}>
                        <div className={cx('detail')}>
                            <div className={cx('timeline-block')}>
                                <h1>{d.header}</h1>
                                <p>{d.address}</p>
                                <p>{d.client}</p>
                                <time>{d.time}</time>
                            </div>
                        </div>
                    </div>
                )
            })
        );
    }
}

export default TimeLine;