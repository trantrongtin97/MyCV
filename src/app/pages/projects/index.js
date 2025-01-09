import styles from './Projects.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import Title from '../../components/Title';
import ProjectTable from './project-table';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

const Projects = () => {
    const project1 = {
        id: 1,
        header: `eWorkstation`,
        projectDescription: `The Bank's internal system serves employees in internal tasks such as human resources and process request of customers. Customers can view information about assets that can be purchased and place buy or sell orders`,
        teamSize: 10,
        position: `Full Stack Developer`,
        responsibilities: [`Perform the DI pattern to manage dependencies between objects.`,
            `Propose and implement solutions for the development team, aimed at improving efficiency and reducing operational expenses.`,
            `Develop services to record transactions asynchronously.`,
            `Define and implement unit tests.`,
            `Apply strictly the SOLID principles to serve scalable and maintainable needs.`,
            `Optimize retrieve and persist actions by leveraging LINQ and Entity Framework core.`],
        programmingLang: `C#, SQL, HTML, CSS, Javascript, Typescript`,
        tech: {
            be: `Asp .Net Core, Entity Framework, Redis, K8s, Docker`,
            fe: `ReactJS, Bootstrap, SCSS`,
            db: `MSSQL, MySQL`
        }
    }
    const project2 = {
        id: 1,
        header: `Report Trade`,
        projectDescription: `The application reports changes in the value of customer assets over a period of time. Then export the file in the given format`,
        teamSize: 10,
        position: `Full Stack Developer`,
        responsibilities: [`Develop services to record transactions asynchronously.`,
            `Integrate API with front-end.`,
            `Write unit-test.`,
            `Fix bugs.`,
            `Apply strictly the SOLID principles to serve scalable and maintainable needs.`,
            `Optimize retrieve and persist actions by leveraging LINQ and Entity Framework core.`],
        programmingLang: `C#, SQL, HTML, CSS, Javascript, Typescript`,
        tech: {
            be: `Asp .Net Core, Entity Framework`,
            fe: `AngularJS, Bootstrap`,
            db: `MySQL`
        }
    }
    const project3 = {
        id: 1,
        header: `Open Gate API`,
        projectDescription: `Design API to provide data as well as aggregated data for cross-platform use.Web tool used to get raw data from apis and CRUD data`,
        teamSize: 5,
        position: `Full Stack Developer`,
        responsibilities: [`Propose and implement solutions for the development team, aimed at improving efficiency and reducing operational expenses.`,
            ` Perform the DI pattern to manage dependencies between objects.`,
            `Apply strictly the SOLID principles to serve scalable and maintainable needs.`,
            `Create a responsive and user-friendly interface using ReactJS to enhance user experience and engagement.`,
            `Integrate and test Backend API.`,
            `Optimize code.`,
            `Develop services to record transactions asynchronously`,
            `Write unit-test`],
        programmingLang: `C#, SQL, HTML, CSS, Javascript, Typescript`,
        tech: {
            be: `Asp .Net Core, Entity Framework, Redis, Kafka`,
            fe: `ReactJS, Bootstrap`,
            db: `MSSQL, MySQL`
        }
    }
    const project4 = {
        id: 1,
        header: `US Workstation`,
        projectDescription: `Internal winform application used in banking. Perform task such as conducting asset purchase and sale transactions and managing user information for the sales department`,
        teamSize: 5,
        position: `Full Stack Developer`,
        responsibilities: [`Perform 3 layers architecture to the project with ABO.NET, Winform and SQL Server.`,
            `Create database schema, store data of product, order, payments by using SQL Server.`,
            `UI design suggestions and using .NET Winform to perform UI implementation.`,
            `Developing services and behavior of events by using C# language and .NET Winform.`,
            `Write unit-test`],
        programmingLang: `C#, SQL, VB. NET`,
        tech: {
            be: `Window Form, Entity Framework`,
            db: `MSSQL`
        }
    }

    const [target, setTarget] = useState(0);
    const [wrapperTarget, setWrapperTarget] = useState('p-wrapper-0');
    const [labelTarget, setLableTarget] = useState(0);


    useEffect(() => {
        setWrapperTarget('p-wrapper-' + target);
    }, [target]);

    const hanlderChangeTarget = (e) => {
        setTarget(e);
        setLableTarget(e);
    }

    return (
        <div className={cx('content')}>
            <Title name="Projects" icon={<FontAwesomeIcon icon={faDiagramProject} />} />
            <div className={cx('proj-container')}>
                <div className={cx('carousel')}>
                    <div className={cx('p-wrapper', wrapperTarget)}>
                        <section className={cx('panel', 'panel_a')}>
                            <ProjectTable data={project1} />
                        </section>

                        <section className={cx('panel', 'panel_b')}>
                            <ProjectTable data={project2} />
                        </section>

                        <section className={cx('panel', 'panel_c')}>
                            <ProjectTable data={project3} />
                        </section>

                        <section className={cx('panel', 'panel_d')}>
                            <ProjectTable data={project4} />
                        </section>
                    </div>
                </div>


                <div className={cx('navigation')}>
                    <label htmlFor="button_a" className={cx('label', 'label_a', ((labelTarget === 0) ? 'label-check' : ''))} title="eWorkstation" onClick={() => hanlderChangeTarget(0)}> <span>1</span> </label>
                    <label htmlFor="button_b" className={cx('label', 'label_b', ((labelTarget === 1) ? 'label-check' : ''))} title="Report Trade" onClick={() => hanlderChangeTarget(1)}> <span>2</span> </label>
                    <label htmlFor="button_c" className={cx('label', 'label_c', ((labelTarget === 2) ? 'label-check' : ''))} title="Open Gate API" onClick={() => hanlderChangeTarget(2)}> <span>3</span> </label>
                    <label htmlFor="button_d" className={cx('label', 'label_d', ((labelTarget === 3) ? 'label-check' : ''))} title="Us Workstation" onClick={() => hanlderChangeTarget(3)}> <span>4</span>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Projects;