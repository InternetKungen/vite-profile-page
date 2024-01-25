import Experience from "../components/Experience/Experience";

function About() {
    return (
      <div>
        <p> About</p>
        <Experience 
          title="Kafkaf" 
          city="Stockholm" 
          description="Skyltdesigner"
          dateFrom="2011"
          dateTo="2013"
          info="Designade skyltar och hjälpte till med tunga lyft" 
          />
      </div>
    );
  }
  
  export default About;