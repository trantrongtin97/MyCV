import styles from './WorkExperience.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import Title from "../../components/Title";
import TimeLine from "../../components/TimeLine";

const cx = classNames.bind(styles);

const WorkExperience = () => {

    const tlDatas = [{
        id: 1,
        header : `TPG Software, Inc`,
        address : `Ho Chi Minh, VietNam`,
        client : `USA`,
        time: `05/2021 - 09/2024`
    },
    {
        id: 2,
        header : `CMC Global`,
        address : `Ho Chi Minh, VietNam`,
        client : `VietNam`,
        time: `10/2024 - Present`
    }];

    return (
        <div className={cx('content')}>
            <Title name="Work Experience" icon={<FontAwesomeIcon icon={faBuilding} />} />
            <TimeLine datas={tlDatas} />
        </div>
    );
}

export default WorkExperience;