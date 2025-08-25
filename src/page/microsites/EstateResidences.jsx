import Banner from "../../components/microsite/Banner"
import AboutProject from "./AboutProject";
import Amenities from "./Amenities";
import FloorPlan from "./FloorPlan";
import Gallery from "./Gallery";
import HighlightsSpecifications from "./HighlightsSpecifications";
import LocationAdvantages from "./LocationAdvantages";
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
            <Amenities />
            <HighlightsSpecifications
                sectionTitle="The High Points of estate residences"
                highlights={[
                    { title: "Triple height grand entrance lobby", imgSrc: "/assets/microsites/estate-residences/overview/project-logo.png" },
                    { title: "Private lift lobby for each unit" },
                    { title: "Green building certified" },
                    { title: "Solar-powered utilities" },
                    { title: "Smart home automation" },
                ]}
                specifications={[
                    { title: "Imported marble flooring in living areas" },
                    { title: "Branded modular kitchen with appliances" },
                    { title: "Laminated wooden flooring in bedrooms" },
                    { title: "Anti-skid tiles in balconies and bathrooms" },
                    { title: "Split ACs in all rooms" },
                    { title: "High-speed elevators" },
                ]}
            />

            <FloorPlan
                heading="Experience Elevated Comfort In Every Detail"
                floorPlans={{
                    "4bhk": [
                        { src: "/assets/microsites/estate-residences/floorplan/1.png", title: "4 BHK + Servant Room", brochure: "/assets/microsites/estate-residences/floorplan/1.png" },
                        { src: "/assets/microsites/estate-residences/floorplan/1.png", title: "4 BHK Type B", },
                    ],
                    "3bhk": [
                        { src: "/assets/microsites/estate-residences/floorplan/1.png", title: "4 BHK + Servant Room", brochure: "/assets/microsites/estate-residences/floorplan/1.png" },
                        { src: "/assets/microsites/estate-residences/floorplan/1.png", title: "4 BHK Type B" },
                    ],
                    "2bhk": [
                        { src: "/assets/microsites/estate-residences/floorplan/1.png", title: "2 BHK Compact", brochure: "/assets/microsites/estate-residences/floorplan/1.png" },
                    ],
                }}
                masterPlan={{
                    src: "/img/masterplan.jpg",
                    title: "Master Plan"
                }}
            />

            <LocationAdvantages
                title="Strategic Location Advantages"
                locationMap="/assets/microsites/estate-residences/location_advantage/locationmap.png"
                onDownload={() => {
                    const link = document.createElement("a");
                    link.href = "/assets/microsites/estate-residences/location_advantage/locationmap.png";
                    link.download = "location-map.png";
                    link.click();
                }}
                tabsData={{
                    school: [
                        { image: "/assets/microsites/estate-residences/location_advantage/1.png", description: "Modern School" },
                        { image: "/assets/microsites/estate-residences/location_advantage/1.png", description: "DPS Gurgaon" },
                    ],
                    metro: [{ image: "/assets/microsites/estate-residences/location_advantage/1.png", description: "Rapid Metro 1.5km" }],
                }}
            />
            <Gallery
                title="Once In A Lifetime Experience"
                galleryPairs={[
                    ["/assets/microsites/estate-residences/gallery/1.png", "/assets/microsites/estate-residences/gallery/2.png"],
                    ["/assets/microsites/estate-residences/gallery/1.png", "/assets/microsites/estate-residences/gallery/2.png"],
                    ["/assets/microsites/estate-residences/gallery/1.png", "/assets/microsites/estate-residences/gallery/2.png"],
                ]}
            />

        </>
    )
}

export default EstateResidences;