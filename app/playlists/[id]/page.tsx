import { Layout ,SongCard, PlaylistTable, PlaylistCard} from "@components";
import {VotingCard} from "@components";

const Song_Page = () => {
    return ( 
       <Layout>
             <PlaylistCard />
             <VotingCard/>
             <PlaylistTable/>
       </Layout>
     );
}
 
export default Song_Page;