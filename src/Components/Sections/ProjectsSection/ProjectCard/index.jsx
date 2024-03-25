import { projects } from "../../../../data/projects.js";
import gitIcon from "../../../../assets/git-icon.png";
import styles from "../style.module.css";

export function ProjectCard() {
    const projectsList = projects.map(project => {
        return (
            <li className={styles.projectCard} key={project.id}>
                <div className={styles.projectContent}>
                    <h3 className="title3">{project.name}</h3>
                    <p className="paragraph">{project.description}</p>
                    <a className="aboutMeButton btnProject btn">Saiba mais</a>
                </div>
                <img src={gitIcon} alt="Github icon" />
            </li>
        )
    });
    return (<ul className={styles.projectList}>{projectsList}</ul>);
};