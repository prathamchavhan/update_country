import CountryFacts from"../api/CountryData.json";
import "./About.css";
export const About =()=>{
    return(
    
    <section className="section-about container">
     <h2 className="container-title">
        Here are the interesting facts
        <br/>
     </h2>
     <div className="gradient-cards">
        {CountryFacts.map((country)=>{
            const{name,capital, region, population}=
           country;
            return(
                <div className="card" key={name}>
               <div className="container bg-blue-box ">
                <div className="card-title">
                  
                   <p>
                    <span className=" class-discription">capital:{capital}
                    </span>
                      <p>
                    <span className=" class-discription">name:{name}
                    </span>
                   </p>
                   </p>
                    <p>
                    <span className=" class-discription">region:{region}
                    </span>
                   </p> <p>
                    <span className=" class-discription">population:{population}
                    </span>
                   </p>
                </div>
                </div> 
             </div>

            )
        })}


     </div>
     </section>
    );
};