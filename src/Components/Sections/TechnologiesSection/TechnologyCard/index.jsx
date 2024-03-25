import { technologies } from "../../../../data/technologies.js";
import styles from "../style.module.css";

export function TechnologyCard() {
  const listItens = technologies.map(technology => {
    return (
      <li className={styles.techCard} key={technology.id}>
        <img src={technology.img} alt={technology.name} />
        <h3 className="title3">{technology.name}</h3>
      </li>
    )
  });
  return (
    <ul className={styles.techList}>{listItens}</ul>
  );
};