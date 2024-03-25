import { Contact } from "../Footer";
import { Header } from "../Header";

export function DefaultTemplate({ children }) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Contact />
        </>
    );
};