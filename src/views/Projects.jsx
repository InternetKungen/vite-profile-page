import PictureArticle from "../components/PictureArticle/PictureArticle";
import SoundCloudPlayer from "../components/SoundCloudPlayer/SoundCloudPlayer";
import Title from "../components/Title/Title";
import VideoArticle from "../components/VideoArticle/VideoArticle";

function Projects() {
	return (
    <div>
      <p>Projects</p>
      
      <section className="pc-demos-container">

      <Title title="PC Demo" />
      <VideoArticle videoId="p4hR0xw4eQg" title="Book of Doom" description="Nominated to first place in PC Demo, Edison Party 2017 (edisonparty.com)
Participated as musician/sfx and story writer." />
      <VideoArticle videoId="6hwJ-mPjGCQ" title="Obey" description="Nominated to first place in PC Demo, Edison Party 2019 (edisonparty.com)
Participated as musician/sfx and story writer" />
      </section>
      
      <Title title="Animation & Video" />
      <VideoArticle videoId="K5XhxXi6zvo" title="Slow Move Down Town" description="Nominated to second place in Animation & Video, Edison Party 2022
      (edisonparty.com)" />

      <Title title="Music" />
      <SoundCloudPlayer source="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1563351691&color=%23453f54&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
      <SoundCloudPlayer source="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1563350548&color=%23453f54&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
      <SoundCloudPlayer source="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/475718862&color=%23423d42&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />

      <SoundCloudPlayer source="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/343733862&color=%23423d42&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />

      <SoundCloudPlayer source="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/334749312&color=%23423d42&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
    

    <Title title="Chiptunes" />
    <SoundCloudPlayer source="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/36699496&color=%23423d42&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />

    <SoundCloudPlayer source="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/36701204&color=%23423d42&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />

    <SoundCloudPlayer source="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/36699482&color=%23423d42&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />

    <SoundCloudPlayer source="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/36699483&color=%23423d42&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />

    <SoundCloudPlayer source="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/36699484&color=%23423d42&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />

    <SoundCloudPlayer source="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/36699486&color=%23423d42&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />

    <Title title="Space Memory Game" />
    <PictureArticle 
    imageSrc="/images/space-memory-game/space-memory-game.jpg"
    text="Space Memory Game was made with HTML, CSS and JS"
    appLink="https://internetkungen.github.io/MemoryGame/"
    githubLink="https://github.com/InternetKungen/MemoryGame"
     />
    </div>
  );
}

export default Projects;