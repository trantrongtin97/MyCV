import styles from './ResponsiveTableIcon.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ResponsiveTable = ({ datas, col1, col2 }) => {
    if (datas && datas.length > 0) {
        return (
            <div>
                <ul className={cx('responsive-table')}>
                    <li className={cx('table-header')}>
                        <div className={cx('col', 'col-1')}>{col1}</div>
                        <div className={cx('col', 'col-2', 'col-temp')}>{col2}</div>
                    </li>
                    {
                        datas.map((d, index1) => {
                            return (
                                <li key={d.id} style={{"animationDelay":(d.id*0.1)+"s"}} className={cx('table-row')}>
                                    {
                                        (d.icons && d.icons.length > 0) ? (
                                            <div className={cx('col', 'col-1')} data-label="">
                                                {
                                                    d.icons.map((i, index2) => {
                                                        return (
                                                            <div key={index2} className={cx('tech-icon')} title={i.title}>
                                                                {i.icon}
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        ) : (
                                            <div className={cx('col', 'col-1')} data-label={d.name}><span className={cx('col-temp')}>{d.name}</span></div>
                                        )
                                    }

                                    <div className={cx('col', 'col-2')} data-label="Level">
                                        <span className={cx('col-temp')}>{d.value}</span> {d.score}
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    };
}

export default ResponsiveTable;