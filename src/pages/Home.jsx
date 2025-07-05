import { FaArrowRight } from "react-icons/fa";
import './Home.css'
export const Home =()=>{
    return (
        <main className="hero-section main ">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
                <h1 className="heading-xl">
                    explore the world , one country at a time.
                </h1>
                <p className="paragraph">
                    discover the history , culture and beatury of every nation 
                    search and filter through countries to find thee detail need.
                </p>
                <button className="btn btn-darken btn-inline bg-white-box">
                    start exploring<FaArrowRight />
                </button>
                <div className="hero-image">
                    <img src="/images/unnamed.jpg" alt="world beatury"
                    className="banner-image"/>
                </div>
            </div>
            </div>  
        </main>
  

    );
};