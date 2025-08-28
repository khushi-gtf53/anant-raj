import React from "react";

const ComingSoon = () => {
    return (
        <div className="min-h-screen bg-[var(--primary)] flex items-center justify-center text-white font-['Poppins'] px-4">
            <div className="text-center max-w-xl">
                <h1 className="text-5xl md:text-6xl font-['Cormorant'] font-bold mb-4 text-[var(--white)]">
                    Coming Soon
                </h1>
                <p className="text-[var(--[var(--secondary)])] text-lg md:text-xl mb-6">
                    Our website is under construction. We’ll be here soon with our new awesome site.
                </p>

            </div>
        </div>
    );
};

export default ComingSoon;
