import React from "react";

const About = () => {
    return (
        <div>
            <header>
                <h1 className="about-title">A short story about me and this project</h1>
            </header>
            <article className="article">
            It took some brain-crunching and a lot of searching in notes and Internet to get this done, with trial and error. 
               Since we have learned a lot in a short time, the logic still needs to sink in a bit! 
                    I started with writing out what I wanted to do, with the minimum requirements for the assignment. 
                    Then also took in the extra stuff, to reach the desired outcome in points for the assignment. 
                    <br></br><br></br>
                    Set up a fresh React App, added Redux, added React-router-dom, got rid of the version 18 errors by 
                    putting React-app back to version 17.0.2, which helped. Then changed the dir-structure, got rid of some files and started copying parts of old code into the new app, for re-use. and with a lot of trial and error I got to here! 
            <img className="img-testimonial" src="../testimonial.jpg" />
        </article>
     </div>           
    );
}

export default About;
