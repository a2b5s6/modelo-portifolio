import { username } from "../../../data/user.js";
import { ButtonsBlue } from "../../ButtonsBlue";
import banner from "../../../assets/banner-img.png";
import styles from "./style.module.css";

export function BannerSection() {
    return (
        <div className="conteiner">
            <section className={styles.flexbox}>
                <div className={styles.userConteiner}>
                    <h3 className="usernameText">{username}</h3>
                    <h1 className="title1">Bem vindo ao meu portfólio</h1>
                    <p className="paragraph">Uma frase interessante sobre mim</p>
                    <ButtonsBlue content="Saiba mais" />
                </div>
                <img src={banner} alt="Banner Logo"></img>
            </section>
        </div>
    );
};