import Banner from "../../components/microsite/Banner"
import AboutProject from "./AboutProject";
import Amenities from "./Amenities";
import HighlightsSpecifications from "./HighlightsSpecifications";
import ProjectOverview from "./ProjectOverview"

const EstateResidences = () => {
    const bannerslides = [
        [
            "/assets/microsites/estate-residences/banner/1.png",
            "/assets/microsites/estate-residences/banner/2.png",
            "/assets/microsites/estate-residences/banner/3.png"
        ],
        [
            "/assets/microsites/estate-residences/banner/1.png",
            "/assets/microsites/estate-residences/banner/2.png"
        ],
        [
            "/assets/microsites/estate-residences/banner/1.png",
            "/assets/microsites/estate-residences/banner/3.png"
        ]
    ];
    return (
        <>
            <Banner slides={bannerslides} />
            <ProjectOverview
                logoSrc="/assets/microsites/estate-residences/overview/project-logo.png"
                projectName="The Estate Residences"
                location="Sector 63A, Gurgaon"
                apartmentTypes="2, 3 & 4 BHK Apartments"
                status="Ready Move In"
                reraId="DEMORERAPRJ591510"
                reraLogoSrc="/assets/microsites/estate-residences/overview/rera.png"
            />
            <AboutProject
                heading="The luxury of uninterrupted vistas, the joy of boundless living."
                description="The Estate Residences by Anant Raj Limited is a unique condominium complex, offering apartments designed with Indian values in mind and boasting unobstructed views of the protected Aravalli Range. It features 4 towers with 30+ floors each, 248 bespoke units with 750 car parking spaces designed to give you a better quality of life."
                counters={[
                    { label: "towers", value: 4 },
                    { label: "floors each", value: 30, suffix: "+" },
                    { label: "exclusive units", value: 248 },
                ]}
                brochureLink="/assets/brochures/estate-residences.pdf"
            />
            <Amenities/>
            <HighlightsSpecifications/>

        </>
    )
}

export default EstateResidences