import { ProjectCard } from "./ProjectCard";
import styles from "./style.module.css";

export function ProjectsSection() {
    return (
        <div className="conteiner">
            <section className={styles.flexbox}>
                <h2 className="title2">Projetos</h2>
                <ProjectCard />
            </section>
        </div>
    );
};