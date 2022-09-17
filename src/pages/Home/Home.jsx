import HomeHeading from '../../components/HomeSections/HomeHeading/HomeHeading'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './home.scss'
import HomeCategoryList from '../../components/HomeSections/HomeCategoryList/HomeCategoryList'

export default function Home() {
    return (
        <div className="home">
            <Navbar />
            <div className="home-content">
                <HomeHeading />
                <HomeCategoryList header="Sweat Equity" category="motivation" />
                <HomeCategoryList
                    header="Modify This Move"
                    category="strength-training"
                />
                <HomeCategoryList
                    header="The Latest"
                    category="strength-training"
                />
                <HomeCategoryList
                    header="Health And Nutrition"
                    category="health-and-wellness"
                />
                <HomeCategoryList
                    header="Celebrity Workouts"
                    category="celebrity-workouts"
                />
                <HomeCategoryList header="Skin Care" category="skin-care" />
                <HomeCategoryList
                    header="Mental Health"
                    category="mental-health"
                />
                <HomeCategoryList
                    header="Workout And Gear"
                    category="apparel-and-gear"
                />
                <HomeCategoryList header="Astrology" category="astrology" />
                <HomeCategoryList header="The Latest" category="astrology" />
            </div>
            <Footer />
        </div>
    )
}
