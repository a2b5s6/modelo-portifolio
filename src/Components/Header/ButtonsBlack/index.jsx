import styles from "../style.module.css";

export function ButtonsBlack() {
    return (
        <div className={styles.buttons__conteiner}>
            <button className="buttonText btnBlack btn">Sobre</button>
            <button className="buttonText btnBlack btn">Stack</button>
            <button className="buttonText btnBlack btn">Projetos</button>
        </div>
    );
};