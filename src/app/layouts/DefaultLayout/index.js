import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '../../components/sidebar';

const cx = classNames.bind(styles)

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <main className={cx('back-space')}>
                <section className={cx('main-space')}>
                    <div className={cx('wraper')}>
                        <div className={cx('container')}>
                            <div className={cx('left-content')}>
                                <Sidebar></Sidebar>
                            </div>
                            <div className={cx('main-content')}>
                                {children}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    );
}

export default DefaultLayout