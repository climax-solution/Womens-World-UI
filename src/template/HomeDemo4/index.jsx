import {useEffect} from "react";
import {addRemoveClassBody} from '../../utils'

import data from "../../data/static.json"

import ContactArea from "../../components/ContactArea"

import SecAbout from './SecAbout'
import Features2 from './Features2'
import SpreadMap from './SpreadMap'
import SecPrices from './SecPrices'
import TokenDistribution from './TokenDistribution'
// import Roadmap from './Roadmap'
import Faq from './Faq'
import OurTeam from './OurTeam'
import Subscribe from './Subscribe'
import OurServices from "./OurServices"
import OurPlatform from "./OurPlatform"
import WelcomeArea from "./WelcomeArea";
import OurRoadmap from "../../components/OurRoadmap";

const HomeDemo2Container = () => {

    useEffect(() => {
      addRemoveClassBody('darker')
    },[])

    return (
      <>
        <WelcomeArea data={data[0].HomeDemo4.WelcomeArea} />
        <SecPrices
          ClassSec="features section-padding-100-70"
          data={data[0].HomeDemo4.SecPricesInfo}
        />
        <SecAbout
          title="Decentralized Trading Platform"
          text="Connect blockchain to the real world and start crypto tading."
          img="img/svg/trading-strokes.svg"
        />
        <OurServices data={data[0].HomeDemo4.Services} />
        <OurPlatform data={data[0].HomeDemo4.PlatformIco} />
        <SpreadMap
            Wwhitepaper="img/core-img/whitepaper.png"
            SectionIcon11="img/svg/section-icon-11.svg"
        />
        <TokenDistribution data={data[0].HomeDemo4.TokenDistributionInfo} />
        {/* <Roadmap data={data[0].HomeDemo4.RoadmapInfo} /> */}
        <OurRoadmap data={data[0].OurRoadmap} />
        <Features2
            icoCounterClass="ico-counter mb-30"
            Features2InfoTop={data[0].HomeDemo4.Features2InfoTop}
            Features2InfoDown={data[0].HomeDemo4.Features2InfoDown}
        />
        <Faq data={data[0].HomeDemo4.FaqInfo} />
        <OurTeam data={data[0].HomeDemo4.OurTeamInfo} />
        <Subscribe />
        <ContactArea data={data[0].ContactArea} />
      </>
    );
};

export default HomeDemo2Container