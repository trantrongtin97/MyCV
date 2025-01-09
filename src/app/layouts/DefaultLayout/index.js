import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '../../components/sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';
import { useState, useRef, useEffect } from 'react';

const cx = classNames.bind(styles)

const DefaultLayout = ({ children }) => {
    const [showBtnScrollToTop, setShowBtnScrollToTop] = useState(false);
    const divRef = useRef(null);

    const scrollToTop = () => {
        divRef.current.scroll({
            top: 0,
            behavior: "smooth",
        });
    };

    const hanlderDivScroll = () =>{
        console.log('a')
        if(divRef.current.scrollTop > 0){
            setShowBtnScrollToTop(true);
        }else{
            setShowBtnScrollToTop(false)
        }
    }

    return (
        <div>
            <main className={cx('back-space')}>
                <section className={cx('main-space')}>
                    <div className={cx('wraper')}>
                        <div className={cx('container')}>
                            <div className={cx('left-content')}>
                                <Sidebar></Sidebar>
                            </div>
                            <div ref={divRef} className={cx('main-content')} onScroll={hanlderDivScroll}>
                                {children}
                                <div className={cx('div-scroll-top')}>
                                   {showBtnScrollToTop && <FontAwesomeIcon className={cx('button-scroll-top')} onClick={() => scrollToTop()} icon={faArrowAltCircleUp} />} 
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    );
}

export default DefaultLayout