import SongCard from "@components/SongCard/songCard";
import NFTSongContainer from "@components/NFTDialog/nftSongContainer";
import NFTDialog from "@components/NFTDialog/NftDialog";
import {Layout} from "@components";


export default function Home() {

    return (
        <Layout>
            <SongCard/>
            <NFTDialog/>
        </Layout>
    );
}