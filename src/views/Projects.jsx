import { IPInfoAPI } from "../components/IPInfoAPI/IPInfoAPI";
import VideoArticle from "../components/VideoArticle/VideoArticle";

function Projects() {
	return (
    <div>
      <p>Projects</p>
      <IPInfoAPI />
      <VideoArticle videoID="p4hR0xw4eQg" title="Book of Doom" description="Me and my friends colaborated and made this music video for the demoscene party Edison 2017. I made the music and directed parts of the scenes." />
    </div>
  );
}

export default Projects;