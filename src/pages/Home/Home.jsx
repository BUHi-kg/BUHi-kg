import React from 'react';
import Footer from '../../components/BlockFooter/Footer/Footer';
import Faq from '../../components/FAQ/Faq';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import Questions from '../../components/Questions/Questions';
import Tariffs from '../../components/Tariffs/Tariffs';
import BlockTitle from '../../components/BlockTitle/BlockTitle';
import OurServices from '../../components/OurServices/OurServices';

function Home() {
  return (
    <div>
                <BlockTitle/>
                <OurServices id="services"/>
                <Tariffs id="tariffs"/>
                <HowItWorks id="hawitwark"/>
                <Faq/>
                <Questions/>
                <Footer/>
                
          
    </div>
  )
}

export default Home