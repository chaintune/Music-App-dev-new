import { Layout, PlaylistTable, PlaylistCard } from "@components";
import { VotingCard } from "@components";

const Song_Page = () => {
      return (
            <Layout>
                  <div className="h-[70vh] overflow-y-scroll scroll-smooth">
                        <PlaylistCard />
                        <VotingCard />
                        <PlaylistTable />
                  </div>
            </Layout>
      );
}

export default Song_Page;