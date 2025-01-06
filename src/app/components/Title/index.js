import styles from './Title.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Title = ({
    name,
    icon
}) => {

    const ComIcon = {
        ...icon,
        classNames : cx('title-icon-content')
    };

    return (
        <div className={cx('detail')}>
            <div className={cx('detail-section')}>
                <div className={cx('detail-title')}>
                    <div className={cx('title-icon')}>
                        {ComIcon}
                    </div>
                    <span className={cx('title-icon-span')}>{name}</span>
                </div>
            </div>
        </div>
    );
}

export default Title;