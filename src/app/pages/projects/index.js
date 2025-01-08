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


    const [checked, setChecked] = useState(false);
    const [target, setTarget] = useState(0);
    const [wrapperTarget, setWrapperTarget] = useState('p-wrapper-0')

    useEffect(() => {
        setWrapperTarget('p-wrapper-' + target);
    }, [target]);

    const hanlderChangeTarget = (e) => {
        setTarget(e)
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
                            <ProjectTable data={project1} />
                        </section>

                        <section className={cx('panel', 'panel_c')}>
                            <ProjectTable data={project1} />
                        </section>

                        <section className={cx('panel', 'panel_d')}>
                            <ProjectTable data={project1} />
                        </section>
                    </div>
                </div>


                <div className={cx('navigation')}>
                    <label htmlFor="button_a" className={cx('label', 'label_a')} title="eWorkstation" onClick={() => hanlderChangeTarget(0)}> <span>1</span> </label>
                    <label htmlFor="button_b" className={cx('label', 'label_b')} title="Report Trade" onClick={() => hanlderChangeTarget(1)}> <span>2</span> </label>
                    <label htmlFor="button_c" className={cx('label', 'label_c')} title="Open Gate API" onClick={() => hanlderChangeTarget(2)}> <span>3</span> </label>
                    <label htmlFor="button_d" className={cx('label', 'label_d')} title="Us Workstation" onClick={() => hanlderChangeTarget(3)}> <span>4</span>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Projects;