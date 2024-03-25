import { user } from "../../data/user.js";
import whatssapIcon from "../../assets/whatsapp-icon.png";
import linkedinIcon from "../../assets/linkedin-icon.png";
import githubIcon from "../../assets/github-icon.png";
import styles from "./style.module.css";

export function Contact() {
    return (
        <footer className={styles.flexbox}>
            <div className={styles.contactConteiner}>
                <h2 className="title2">Contato</h2>
                <div className={styles.buttonConteiner}>
                    <img src={whatssapIcon} alt="Logo Whatssap" />
                    <img src={linkedinIcon} alt="Logo Linkedin" />
                    <img src={githubIcon} alt="Logo Githubu" />
                </div>
            </div>
            <p className="paragraph">Todos os direitos reservados - {user}</p>
        </footer>
    );
};