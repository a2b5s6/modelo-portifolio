import { TechnologyCard } from "./TechnologyCard";
import styles from "./style.module.css";

export function TechnologiesSection() {
    return (
        <div className="conteiner">
            <section className={styles.flexbox}>
                <h2 className="title2">Tecnologias</h2>
                <TechnologyCard />
            </section>
        </div>
    );
};