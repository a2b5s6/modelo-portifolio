import { ButtonsBlue } from "../ButtonsBlue";
import { ButtonsBlack } from "./ButtonsBlack";
import logo from "../../assets/portfolio.png";
import styles from "./style.module.css";

export function Header() {
    return (
        <header className={styles.flexbox}>
            <img src={logo} alt="Logo"></img>
            <ButtonsBlack />
            <ButtonsBlue content="Contato" />
        </header>
    );
};