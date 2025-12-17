import Header from '../common/Header/Header.jsx'
import Footer from '../common/Footer/Footer.jsx'
import Banner from './Banner.jsx'
import Films from './Films.jsx'
import Top10Films from './Top10Films.jsx'
import PromotionSection from './PromotionSection.jsx'
import MoreInfo from './MoreInfo.jsx'
import CustomRating from './CustomRating.jsx'
import FAQ from './FAQ.jsx'
import ForFurther from './ForFurther.jsx'

function Home() {
    return (
        <div>
            <Header />
            <Banner />
            <Films />
            <Top10Films />
            <PromotionSection />
            <MoreInfo />
            <CustomRating />
            <FAQ />
            <ForFurther />
            <Footer />
        </div>
    )
}

export default Home;