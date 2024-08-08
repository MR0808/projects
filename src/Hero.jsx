import heroImg from './assets/hero.svg';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-center">
                <div className="hero-title">
                    <h1>Contentful CMS</h1>
                    <p>
                        Gluten-free heirloom pinterest, kitsch blackbird
                        spyplane disrupt flannel green juice cronut four dollar
                        toast pabst tbh 8-bit stumptown quinoa. Street art marfa
                        selfies unicorn, microdosing snackwave tonx Brooklyn
                        iceland jawn. Church-key adaptogen sriracha, meggings 3
                        wolf moon small batch kickstarter aesthetic palo santo
                        normcore blog shaman.
                    </p>
                </div>
                <div className="img-container">
                    <img
                        src={heroImg}
                        alt="woman and the browser"
                        className="img"
                    />
                </div>
            </div>
        </section>
    );
};
export default Hero;
