import styles from './Tech.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import Title from "../../components/Title";
import ResponsiveTable from "../../components/ResponsiveTable";
import icons from '../../assets/icon';

const cx = classNames.bind(styles);

const TechnologyAndSkills = () => {

    const tables = [
        {
            id: 1,
            col1: "Programming Language",
            col2: "Level",
            datas: [{
                id: 1,
                icons: [{
                    title: `C#`,
                    icon: icons.csharp
                }],
                value: `Proficient`,
                score: 8
            },
            {
                id: 2,
                icons: [{
                    title: `Typescript`,
                    icon: icons.typescript
                },
                {
                    title: `Javascript`,
                    icon: icons.javascript
                }],
                value: `Knowledgeable`,
                score: 7
            },
            {
                id: 3,
                icons: [{
                    title: `HTML5`,
                    icon: icons.html
                },
                {
                    title: `CSS`,
                    icon: icons.css
                }],
                value: `Knowledgeable`,
                score: 7
            },
            {
                id: 4,
                icons: [{
                    title: `SQL`,
                    icon: icons.sql
                }],
                value: `Proficient`,
                score: 8
            },
            {
                id: 5,
                icons: [{
                    title: `VB .NET`,
                    icon: icons.vb
                }],
                value: `Knowledgeable`,
                score: 7
            }]
        },
        {
            id: 2,
            col1: "Technology & Framework",
            col2: "Level",
            datas: [{
                id: 1,
                name: `.NET`,
                icons: undefined,
                value: `Proficient`,
                score: 8
            },
            {
                id: 2,
                name: `Asp .Net Core, Asp .Net MVC`,
                icons: undefined,
                value: `Proficient`,
                score: 8
            },
            {
                id: 3,
                name: `EF, EF Core`,
                icons: undefined,
                value: `Proficient`,
                score: 8
            },
            {
                id: 4,
                name: `Authentication/Authorization, SSO (JWT, OAuth2, OpenID)`,
                icons: undefined,
                value: `Knowledgeable`,
                score: 7
            },
            {
                id: 5,
                name: `ReactJS, Redux`,
                icons: undefined,
                value: `Knowledgeable`,
                score: 7
            },
            {
                id: 6,
                name: `AngularJS`,
                icons: undefined,
                value: `Knowledgeable`,
                score: 7
            },
            {
                id: 7,
                name: `Redis, RabbitMQ, CQRS, Saga Pattern`,
                icons: undefined,
                value: `Knowledgeable`,
                score: 7
            },
            {
                id: 8,
                name: `Kafka, API Gate Ways, K8s`,
                icons: undefined,
                value: `Knowledgeable`,
                score: 6
            },
            {
                id: 9,
                name: `xUnit, SonarQue`,
                icons: undefined,
                value: `Knowledgeable`,
                score: 7
            },
            {
                id: 10,
                name: `OOP, SOLID, Restful API`,
                icons: undefined,
                value: `Proficient`,
                score: 8
            }]
        },
        {
            id: 3,
            col1: "Database System",
            col2: "Level",
            datas: [{
                id: 1,
                name: `MySQL, MSSQL Server`,
                icons: undefined,
                value: `Proficient`,
                score: 8
            },
            {
                id: 2,
                name: `MongoDB`,
                icons: undefined,
                value: `Knowledgeable`,
                score: 6
            }]
        },
        {
            id: 4,
            col1: "Software Design",
            col2: "Level",
            datas: [{
                id: 1,
                name: `Design patterns`,
                icons: undefined,
                value: `Proficient`,
                score: 8
            },
            {
                id: 2,
                name: `Analysis and design`,
                icons: undefined,
                value: `Proficient `,
                score: 8
            }]
        },
        {
            id: 5,
            col1: "Development Tool",
            col2: "Level",
            datas: [{
                id: 1,
                name: `IDE : Visual Studio, Visual Studio Code`,
                icons: undefined,
                value: `Proficient`,
                score: 8
            },
            {
                id: 2,
                name: `GIT`,
                icons: undefined,
                value: `Proficient `,
                score: 8
            },
            {
                id: 3,
                name: `Docker`,
                icons: undefined,
                value: `Knowledgeable `,
                score: 7
            },
            {
                id: 4,
                name: `CICD: Jenkin, GitlabCI, Microsoft Devops`,
                icons: undefined,
                value: `Knowledgeable `,
                score: 7
            }]
        },
        {
            id: 6,
            col1: "Operating System",
            col2: "Level",
            datas: [{
                id: 1,
                name: `Windows`,
                icons: undefined,
                value: `Proficient`,
                score: 8
            },
            {
                id: 2,
                name: `Linux`,
                icons: undefined,
                value: `Knowledgeable`,
                score: 7
            }]
        },
        {
            id: 7,
            col1: "Leadership and Project Management Skill",
            col2: "Level",
            datas: [{
                id: 1,
                name: `Communication`,
                icons: undefined,
                value: `Proficient`,
                score: 9
            },
            {
                id: 2,
                name: `Teamwork`,
                icons: undefined,
                value: `Proficient`,
                score: 9
            },
            {
                id: 3,
                name: `Management skills`,
                icons: undefined,
                value: `Proficient`,
                score: 8
            }]
        }
    ];

    return (
        <div className={cx('content')}>
            <Title name="Technology And Skills" icon={<FontAwesomeIcon icon={faLaptopCode} />} />
            {
                tables.map((t) => {
                    return (
                        <ResponsiveTable key={t.id} col1={t.col1} col2={t.col2} datas={t.datas} />
                    )
                })
            }
        </div>
    );
}

export default TechnologyAndSkills;