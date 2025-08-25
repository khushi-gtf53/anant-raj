const ProjectOverview = ({ logoSrc, projectName, location, apartmentTypes, status, reraId, reraLogoSrc, patternBgSrc = './assets/pattern-bg.png'}) => {
    return (
        <section className="project_overview relative bg-[#FBF6F6] w-full h-[50vh]">
            <div className="grid grid-cols-12 border-y border-black w-full h-[30vh]">
                <div className="col-span-3 border-r border-black ">
                    <div className="project-logo flex justify-center items-center h-full">
                        <img src={logoSrc} alt="project logo" />
                    </div>
                </div>
                <div className="col-span-9 px-10 py-5">
                    <div className="w-[90%] h-full flex flex-col justify-between">
                        <div className="project_info">
                            <div className="project_name">
                                <h1 className="uppercase tracking-wide mb-2 text-2xl font-sangbleu">
                                    {projectName}
                                </h1>
                            </div>
                            <div className="project_location uppercase tracking-wide">
                                {location}
                            </div>
                        </div>
                        <div className="project-details uppercase tracking-wider flex items-center justify-between">
                            <div className="apartment">{apartmentTypes}</div>
                            <div className="status">{status}</div>
                            <div className="rera flex gap-2 items-center">
                                {reraId}
                                <span>
                                    <img src={reraLogoSrc} alt="RERA logo" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img
                src={patternBgSrc}
                alt="pattern-bg"
                className="h-[70px] bg-[#FBF6F6] absolute bottom-0 w-full object-cover"
            />
        </section>
    );
};

export default ProjectOverview;