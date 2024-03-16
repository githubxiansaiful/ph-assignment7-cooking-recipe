const HeroSection = () => {
    return (
        <div>
            <div className="container">
                <div className="hero rounded-[24px] overflow-hidden" style={{ backgroundImage: 'url(https://i.ibb.co/g9s6CQC/hero-bg.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-[840px] pt-[80px] pb-[80px]">
                            <h1 className="mb-8 text-[32px] leading-10 lg:text-5xl font-bold">Uncover a unique cooking class perfectly customized to suit your tastes and preferences!</h1>
                            <p className="mb-8">Indulge in a personalized culinary journey with our tailored cooking classes. Explore flavors, techniques, and recipes customized to your preferences and skill level for an unforgettable culinary adventure.</p>
                            <a href="#" className="bg-[#0BE58A]  font-bold color-recipe rounded-[100px] px-6 py-4 mr-2">Explore Now</a>
                            <a href="#" className="border font-bold text-white rounded-[100px] px-6 py-4">Our Feedback</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;