import { Fragment } from 'react';
import styles from './Pfs.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

import Title from '../../components/Title';

const cx = classNames.bind(styles);

const ProfessionalSummary = () => {

    const datas = [{
        id: 1,
        header: `Experience`,
        content: [`Highly skilled .NET Developer with over 3 years of experience. I have worked
                                    with application types such as window applications, web applications and
                                    cloud applications as well as in microservice systems.`]
    },
    {
        id: 2,
        header: `Back End`,
        content: [`Proficient in C#, .NET 7+, ASP.NET Core, ASP.NET MVC, and WinForms, with
                                    extensive knowledge of Entity Framework Core, RESTful APIs, and
                                    authentication/authorization mechanisms including JWT and SSO (OAuth2,
                                    OpenID).`]
    },
    {
        id: 3,
        header: `Front End`,
        content: [`Experienced in frontend technologies such as ReactJS, Angular and can use
                                    HTML, CSS, Javascript independently.`]
    },
    {
        id: 4,
        header: `Database`,
        content: [`Adept at working with SQL Server, MySQL, and MongoDB.`]
    },
    {
        id: 5,
        header: `Microservice`,
        content: [`Knowledgeable in microservices architecture, including the use of Queue
                                    Messaging, Saga pattern, CQRS, API Gateway, Kafka, Docker, and Kubernetes.`]
    },
    {
        id: 6,
        header: `Orther`,
        content: [`Strong background in object-oriented programming (OOP) and design patterns.`,
            `Demonstrated expertise in the banking sector, developing financial
                     applications that enhance operational efficiency and security`]
    }]

    return (
        <div>
            <div className={cx('sec-title')}>
                <Title name="Professional Summary" icon={<FontAwesomeIcon icon={faList} />} />
            </div>
            <div className={cx('page-content')}>
                <div className={cx('flex-1')}>
                    <div className={cx('user-profile')}>
                        <ol className={cx('pfs-ol')} style={{ "--length": datas.length, "role": "list" }}>
                            {
                                datas.map((t) => {
                                    return (
                                        <li key={t.id} style={{ "--i": t.id, "animationDelay":(t.id*0.1)+"s" }}>
                                            <h3>{t.header}</h3>
                                            {
                                                (t.content && t.content.length > 0)?(
                                                    t.content.map((c,index)=>(<p key={index}>{c}</p>))
                                                ):(<Fragment/>)
                                            }
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfessionalSummary;