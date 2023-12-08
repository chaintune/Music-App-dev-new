import { Layout ,SongCard, PlaylistTable} from "@components";
import VotingCard from "@components/VotingCard/VotingCard";

const Song_Page = () => {
    return ( 
       <Layout>
             <SongCard/>
             <VotingCard/>
             <PlaylistTable/>
       </Layout>
     );
}
 
export default Song_Page;