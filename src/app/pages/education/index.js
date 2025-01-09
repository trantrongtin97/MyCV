import { Fragment } from "react";
import styles from './Education.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import Title from "../../components/Title";
import TimeLine from "../../components/TimeLine";
import CircleProcess from "../../components/CircleProcess";
import ResponsiveTable from "../../components/ResponsiveTable";

const cx = classNames.bind(styles);

const Education = () => {

    const tlDatas = [{
        id: 1,
        header: `APTECH`,
        address: `Ho Chi Minh, Viet Nam`,
        time: `2018 - 2020`
    }];

    const ciData = {
        id: 1,
        content: `GPA`,
        score: 8.6
    }

    const tables = [{
        id: 1,
        name: `English`,
        value: `Intermediate`
    }];

    return (
        <div className={cx('edu-content')}>
            <Title name="Education" icon={<FontAwesomeIcon icon={faUserGraduate} />} />
            <div className={cx('line1')}>
                <TimeLine datas={tlDatas} />
                <div className={cx('circle-area')}>
                    <CircleProcess data={ciData} />
                </div>
            </div>
            <div>
                <ResponsiveTable col1="Language" col2="Level" datas={tables} />
            </div>
        </div>
    );
}

export default Education;