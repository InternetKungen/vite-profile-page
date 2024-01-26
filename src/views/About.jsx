import Experience from "../components/Experience/Experience";
import Title from "../components/Title/Title";

function About() {
    return (
      <div>
        <p> About</p>

        <Title title="Experience"/>
        <Experience 
          title="Kafkaf" 
          city="Stockholm" 
          description="Advertising Designer"
          dateFrom="2011"
          dateTo="2013"
          info="Made advertising for a Café" 
          />
          <Experience 
          title="Fireprotection Sweden AB" 
          city="Solna" 
          description="Fire protection painter"
          dateFrom="2009"
          dateTo="2009"
          info="Painted girders to be rust- and fire-resistant" 
          />
          <Experience 
          title="FLOG" 
          city="Stockholm" 
          description="Roofer"
          dateFrom="2008"
          dateTo="2008"
          info="Installed outer and inner roof." 
          />

          <Title title="Education"/>
          <Experience 
          title="FLOG" 
          city="Stockholm" 
          description="Roofer"
          dateFrom="2008"
          dateTo="2008"
          info="Installed outer and inner roof." 
          />

      </div>
    );
  }
  
  export default About;