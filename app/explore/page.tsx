//import { WalletProvider } from '@app/WalletContext'
import { Layout, CommunityPlaylist, ArtistMix, BestOf, Recommended, BrowseAll, Community, MixedCard } from '@components'
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
        <div style={{padding: '0vh 2.8vw', display: 'flex', justifyContent: 'space-between'}}>
            <div className="flex justify-between flex-col" style={{ width: '70.769vw', height: '70vh', overflowY: 'auto', gap: '1.860vh', scrollBehavior: 'smooth'}}>
                <Community component={<MixedCard />} title='Top Charts' />
                <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                    <ArtistMix/><BestOf/>
                </div>
                <Recommended/>
                <BrowseAll/>
            </div>
        </div>
    </Layout>
  )
}