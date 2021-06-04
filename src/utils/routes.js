import BaseApparelComingSoonMaster from "../pages/BaseApparelComingSoonMaster";
import SocialMediaDashboardWithThemeSwitcherMaster from "../pages/SocialMediaDashboardWithThemeSwitcherMaster";
import IntroComponentWithSignupFormMaster from "../pages/IntroComponentWithSignupFormMaster";
import BlogrLandingPageMain from "../pages/BlogrLandingPageMain";
import CodingBootcampTestimonialsSliderMaster from "../pages/CodingBootcampTestimonialsSliderMaster";
import HuddleLandingPageWithCurvedSectionsMaster from "../pages/HuddleLandingPageWithCurvedSectionsMaster";
import PingComingSoonPageMaster from "../pages/PingComingSoonPageMaster";
import ArticlePreviewComponentMaster from "../pages/ArticlePreviewComponentMaster";
import FourCardFeatureSectionMaster from "../pages/FourCardFeatureSectionMaster";

const routes = [
  { component: BaseApparelComingSoonMaster, path: "/projects/BACSM", id:"BACSM"},
  { component: SocialMediaDashboardWithThemeSwitcherMaster, path: "/projects/SMDWTSM", id:"SMDWTSM"},
  { component: IntroComponentWithSignupFormMaster, path: "/projects/ICWSFM", id:"ICWSFM"},
  { component: BlogrLandingPageMain, path: "/projects/BLPM", id:"BLPM"},
  { component: CodingBootcampTestimonialsSliderMaster, path: "/projects/CBTSM", id:"CBTSM"},
  { component: HuddleLandingPageWithCurvedSectionsMaster, path: "/projects/HLPWCSM", id:"HLPWCSM"},
  { component: PingComingSoonPageMaster, path: "/projects/PCSPM", id:"PCSPM"},
  { component: ArticlePreviewComponentMaster, path: "/projects/APCM", id:"APCM"},
  { component: FourCardFeatureSectionMaster, path: "/projects/FCFSM", id:"FCFSM"},
];

export default routes;