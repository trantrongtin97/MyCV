import { Fragment } from 'react';
import styles from './Pfs.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const ProfessionalSummary = () => {
    return (
        <Fragment>
            <div className={cx('sec-title')}>
                <div className={cx('pg-title')}>
                    <div className={cx('title-icon')}>
                        <FontAwesomeIcon className={cx('title-icon-content')} icon={faList} />
                    </div> 
                    <span className={cx('title-icon-span')}>Professional Summary</span>
                </div>
            </div>
            <div className={cx('page-content')}>
                <div className={cx('flex-1')}>
                    <div className={cx('user-profile')}>
                        <ol className={cx('pfs-ol')} style={{ "--length": 6, "role": "list" }}>
                            <li style={{ "--i": "1" }}>
                                <h3>Experience</h3>
                                <p>Highly skilled .NET Developer with over 3 years of experience. I have worked
                                    with application types such as window applications, web applications and
                                    cloud applications as well as in microservice systems.</p>
                            </li>
                            <li style={{ "--i": "2" }}>
                                <h3>Back End</h3>
                                <p>Proficient in C#, .NET 7+, ASP.NET Core, ASP.NET MVC, and WinForms, with
                                    extensive knowledge of Entity Framework Core, RESTful APIs, and
                                    authentication/authorization mechanisms including JWT and SSO (OAuth2,
                                    OpenID).</p>
                            </li>
                            <li style={{ "--i": "3" }}>
                                <h3>Front End</h3>
                                <p>Experienced in frontend technologies such as ReactJS, Angular and can use
                                    HTML, CSS, Javascript independently</p>
                            </li>
                            <li style={{ "--i": "4" }}>
                                <h3>Database</h3>
                                <p>Adept at working with SQL Server, MySQL, and MongoDB.</p>
                            </li>
                            <li style={{ "--i": "5" }}>
                                <h3>Microservice</h3>
                                <p>Knowledgeable in microservices architecture, including the use of Queue
                                    Messaging, Saga pattern, CQRS, API Gateway, Kafka, Docker, and Kubernetes.
                                </p>
                            </li>
                            <li style={{ "--i": "6" }}>
                                <h3>Orther</h3>
                                <p>Strong background in object-oriented programming (OOP) and design patterns.
                                </p>
                                <p>Demonstrated expertise in the banking sector, developing financial
                                    applications that enhance operational efficiency and security</p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ProfessionalSummary;