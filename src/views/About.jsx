import Experience from "../components/Experience/Experience";
import TextSection from "../components/TextSection/TextSection";
import Title from "../components/Title/Title";

function About() {
    return (
      <div>
        <p> About</p>
        <Title title="About me" />
        <TextSection 
        introduction="Hi! I'm Kim Andersson, a multifaceted individual weaving through the realms of craftsmanship, anthropology, and the intricate world of demoscene music. Currently immersing myself in the dynamic field of front-end development, I find joy in merging diverse interests like graphics, music, and systems within this digital landscape."
        
        textPart1="My background in carpentry serves as another facet of artistic expression. Working with hands is where a significant part of artistic expression manifests. Designing within carpentry shares similarities with structuring web applications, breaking them down into sections, much like the blocks of a piece of furniture. The design principles in carpentry, dividing structures into parts, echo the styling in CSS/HTML."

        textPart2="My anthropological understanding of human behavior influences my approach to front-end development. I don't view a customer's behavior as 'wrong,' but rather seek to understand and adapt to the truth of how people act in different circumstances."
        
        textPart3="The significance of music in front-end development is evident. Web applications can incorporate sound, such as game music or menu effects. If someone needs a specific sound, my training and experience enable me to assist with that." />
        
        {/* <section className="about-introduction-container" >
        <p>

        Hi! I'm Kim Andersson, and my journey into front-end development has been driven by a passion for graphics, craftsmanship, animation, computers, systems, coding, music, and interaction. These diverse interests converge seamlessly in the world of front-end development.
        
        My background in carpentry serves as another facet of artistic expression. Working with hands is where a significant part of artistic expression manifests. Designing within carpentry shares similarities with structuring web applications, breaking them down into sections, much like the blocks of a piece of furniture. The design principles in carpentry, dividing structures into parts, echo the styling in CSS/HTML.

My anthropological understanding of human behavior influences my approach to front-end development. I don't view a customer's behavior as 'wrong,' but rather seek to understand and adapt to the truth of how people act in different circumstances.

The significance of music in front-end development is evident. Web applications can incorporate sound, such as game music or menu effects. If someone needs a specific sound, my training and experience enable me to assist with that.

In my musical endeavors, I've gained insights into the creation of sounds and the charm of difficulty in sound production. This dualism is a recurring theme in the demoscene, where understanding the background adds depth, but beauty can still be found in simplicity. This parallels front-end development, where striving for simplicity coexists with the acceptance of complexity.

The parallels continue with tracking music, providing insights into coding music. Each row in a track is an update in the code, mirroring the tree structures in both music creation and React development. Coding, graphic creation, and community are integral aspects of both the demoscene and the front-end development world.

One notable project that reignited my passion for the demoscene was the collaboration on the "Book of Doom" demo. Collaborating with Qlint and Farah, we created a demo that won at the Edison 2017 demoscene party, beating the seasoned Fairlight. This achievement, coupled with personal joy as I had just entered into a relationship with my current partner and mother of my child, made it one of the best days of my life.

</p> */}
{/* Hi! My name is Kim Andersson! I often assist family and friends with technical configurations and advice. In addition, I have training in carpentry, anthropology, film and game music, as well as film studies. Currently, I am also diving into the world of front-end development, finding that many of my diverse interests seamlessly come together in this field. My passions extend to sound and music production, image, and film. I also have experience in design, painting, and construction. As a musician involved in the demoscene, I create chiptunes and actively contribute to the music creation scene. Looking forward to sharing and exploring more within these realms!</p> */}
        {/* </section> */}

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
          title="Stockholm University" 
          city="Stockholm" 
          description="Social Antropology III"
          dateFrom="January 2022"
          dateTo="June 2022"
          info="
          Education in contemporary research in anthropology. Wrote an essay on 'Structural Expectancy' - addressing the problem of assumptions about universal human abilities, resourses or knowledge, and rejecting real solutions under the principle of 'free will' or 'responsibility'." 
          />

          <Experience 
          title="Stockholm University" 
          city="Stockholm" 
          description="Cinema Studies II"
          dateFrom="January 2019"
          dateTo="August 2019"
          info="
          Education in contemporary film and media research. Wrote an Essay about the duality of advertising which sees the human as something that can be manipulated and controlled, but also advocate capitalism which ideology rests on the idea that humans have free will." 
          />

          <Experience 
          title="Stockholm University" 
          city="Stockholm" 
          description="Cinema Studies I"
          dateFrom="August 2018"
          dateTo="January 2019"
          info="
          Learning about the history of film as developed in relation to its contemporaries technology, art, social science and psychology." 
          />
          <Experience 
          title="Stockholm University" 
          city="Stockholm" 
          description="Social Anthropology II"
          dateFrom="August 2017"
          dateTo="February 2018"
          info='
          Consisted of 4 sub-courses; "Theory History", "Communication and aesthetics", "Migration, culture and diversity" and "Gender and Sexuality".' 
          />
          <Experience 
          title="Stockholm University" 
          city="Stockholm" 
          description="Social Anthropology I"
          dateFrom="January 2017"
          dateTo="June 2017"
          info='
          Basic knowledge in social anthropology. Consisted of 4 partial courses; "Culture and Society", "The World of Thought: Symbols, Stability and Change", "Economy: Values, Resources and the Environment", and "Politics, conflict and transnationalism"' 
          />
          <Experience 
          title="Stockholm University" 
          city="Stockholm" 
          description="Music, music technology and media"
          dateFrom="January 2017"
          dateTo="April 2017"
          info='
          I learned about the connection between the music technology the development and construction of music and culture.' 
          />
          <Experience 
          title="Stockholm University" 
          city="Stockholm" 
          description="Game Music"
          dateFrom="August 2016"
          dateTo="January 2017"
          info='
          I learned how to analyze the impact of game music on the experience, how this is arranged in games, as well as about its historical development.' 
          />
          <Experience 
          title="Stockholm University" 
          city="Stockholm" 
          description="Film Music"
          dateFrom="August 2016"
          dateTo="January 2017"
          info='
          Learning about the importance and narrative effects of film music.' 
          />

      </div>
    );
  }
  
  export default About;