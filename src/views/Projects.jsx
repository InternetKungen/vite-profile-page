import { IPInfoAPI } from "../components/IPInfoAPI/IPInfoAPI";
import SoundCloudPlayer from "../components/SoundCloudPlayer/SoundCloudPlayer";
import Title from "../components/Title/Title";
import VideoArticle from "../components/VideoArticle/VideoArticle";

function Projects() {
	return (
    <div>
      <p>Projects</p>
      <IPInfoAPI />
      
      <section className="pc-demos-container">

      <Title title="PC Demo" />
      <VideoArticle videoID="p4hR0xw4eQg" title="Book of Doom" description="Nominated to first place in PC Demo, Edison Party 2017 (edisonparty.com)
Participated as musician/sfx and story writer." />
      <VideoArticle videoID="6hwJ-mPjGCQ" title="Obey" description="Nominated to first place in PC Demo, Edison Party 2019 (edisonparty.com)
Participated as musician/sfx and story writer" />
      </section>
      
      <Title title="Animation & Video" />
      <VideoArticle videoID="K5XhxXi6zvo" title="Slow Move Down Town" description="Nominated to second place in Animation & Video, Edison Party 2022
      (edisonparty.com)" />

      <Title title="Music" />
      <SoundCloudPlayer source="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1563351691&color=%23453f54&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
      <SoundCloudPlayer source="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1563350548&color=%23453f54&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
      <SoundCloudPlayer source="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/475718862&color=%23423d42&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
    </div>
    
  );
}

export default Projects;