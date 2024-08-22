import React from 'react'
import AboutUsIntro from '../Components/AboutUs/AboutUsIntro'
import AboutUsHistorySection from '../Components/AboutUs/AboutUsHistorySection'
import KFCMitaoBhook from './../Components/AboutUs/KFCMitaoBhook';
import KFCPartnership from '../Model/KFCPartnership';
import FactSection from '../Components/AboutUs/AboutUsFact/FactSection';

const AboutUs = () => {
  return (
    <div>
      <AboutUsIntro/>
      <AboutUsHistorySection/>
       <FactSection/>
      <KFCMitaoBhook/>
      <KFCPartnership/>

    </div>
  )
}

export default AboutUs
