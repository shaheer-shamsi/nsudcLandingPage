import About from "../Components/About";
import Banner from "../Components/Banner";
import Events from "../Components/Events";
import NewsLetter from "../Components/NewsLetter";
import OurPartners from "../Components/OurPartners";

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>

            <NewsLetter/>
            <Events/>
            <OurPartners/>
            
        </div>
    );
};

export default Home;