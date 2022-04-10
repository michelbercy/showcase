import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";
const App = () => {
  return (
    <>
      <SectionWrapper
        title="You own store of Nifty NFTs.
      Start Selling & Growing"
        description="Buy,store,collect NFTs,exchange & earn crypto. Join  25+ 
      million people using ProNef Markerplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />

      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a buttery Ui of ProNef NFT Marketplace. Smooth cconstant colors of a fluent UI design"
        mockupImg={assets.homeCards}
        reverse
      />

      <Features />

      <SectionWrapper
        title="Deployment"
        description="ProNef is built using Expo which runs natively on all users devices. You can easily 
        get your app into people's hands"
        mockupImg={assets.feature}
        reverse
      />

      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs while th second one shows details of a specific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />

      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with love by <span className="bold">Michel Madzou</span>
        </p>
      </div>
    </>
  );
};

export default App;
