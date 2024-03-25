import { BannerSection } from "../../Components/Sections/BannerSection";
import { AboutMe } from "../../Components/Sections/AboutMeSection";
import { TechnologiesSection } from "../../Components/Sections/TechnologiesSection";
import { ProjectsSection } from "../../Components/Sections/ProjectsSection";
import { DefaultTemplate } from "../../Components/DefaultTemplate";

export function LadingPage() {
    return (
        <>
            <DefaultTemplate>
                <BannerSection />
                <AboutMe />
                <TechnologiesSection />
                <ProjectsSection />
            </DefaultTemplate>
        </>

    );
};