import styles from './ProjectTable.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const ProjectTable = ({ data }) => {
    if (data) {
        return (
            <div>
                <ul className={cx('responsive-table')}>
                    <li className={cx('table-header')}>
                        <div className={cx('col','col-4','col-temp')}><FontAwesomeIcon icon={faCodeBranch} /></div>
                        <div className={cx('col','col-1')}>{data.header}</div>
                        <div className={cx('col','col-2','col-temp')}></div>
                    </li>
                    <li className={cx('table-row')}>
                        <div className={cx('col','col-4','col-temp')}><FontAwesomeIcon icon={faCaretRight} /></div>
                        <div className={cx('col','col-2')} data-label="Project Description"><span
                            className={cx('col-temp')}>Project Description</span></div>
                        <div className={cx('col','col-1')} data-label="">
                            {data.projectDescription}
                        </div>
                    </li>
                    <li className={cx('table-row')}>
                        <div className={cx('col','col-4','col-temp')}><FontAwesomeIcon icon={faCaretRight} /></div>
                        <div className={cx('col','col-2')} data-label="Team Size"><span
                            className={cx('col-temp')}>Team Size</span></div>
                        <div className={cx('col','col-1')} data-label="">
                            {data.teamSize}
                        </div>
                    </li>
                    <li className={cx('table-row')}>
                        <div className={cx('col','col-4','col-temp')}><FontAwesomeIcon icon={faCaretRight} /></div>
                        <div className={cx('col','col-2')} data-label="Position"><span
                            className={cx('col-temp')}>Position</span></div>
                        <div className={cx('col','col-1')} data-label="">
                            {data.position}
                        </div>
                    </li>
                    <li className={cx('table-row')}>
                        <div className={cx('col','col-4','col-temp')}><FontAwesomeIcon icon={faCaretRight} /></div>
                        <div className={cx('col','col-2')} data-label="Responsibilities"><span
                            className={cx('col-temp')}>Responsibilities</span></div>
                        <div className={cx('col','col-1')} data-label="">
                            <div className={cx('col-text-content')}>
                                {
                                    (data.responsibilities && data.responsibilities.length > 0) ? (
                                        <div>
                                            {
                                                data.responsibilities.map((i,index)=>{
                                                    return(
                                                        <p key={index}>- {i}</p>
                                                    )
                                                })
                                            }
                                        </div>
                                    ) : (<div></div>)
                                }

                            </div>
                        </div>
                    </li>
                    <li className={cx('table-row')}>
                        <div className={cx('col','col-4','col-temp')}><FontAwesomeIcon icon={faCaretRight} /></div>
                        <div className={cx('col','col-2')} data-label="Programming Languages"><span
                            className={cx('col-temp')}>Programming Languages</span></div>
                        <div className={cx('col','col-1')} data-label="">
                            {data.programmingLang}
                        </div>
                    </li>
                    <li className={cx('table-row')}>
                        <div className={cx('col','col-4','col-temp')}><FontAwesomeIcon icon={faCaretRight} /></div>
                        <div className={cx('col','col-2')} data-label="Used Technologies"><span
                            className={cx('col-temp')}>Used Technologies</span></div>
                        <div className={cx('col','col-1')} data-label="">
                            <div className={cx('col-text-content')}>
                                <p>Back End: <i>{data.tech.be}</i></p>
                                <p>Front End: <i>{data.tech.fe}</i></p>
                                <p>Databases: <i>{data.tech.db}</i></p>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        );
    };
}

export default ProjectTable;