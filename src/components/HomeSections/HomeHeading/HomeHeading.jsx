import './homeHeading.scss'
import featuredImage from '../../../assets/featured.png'
import TrendingArticles from './TrendingArticles/TrendingArticles'

export default function HomeHeading() {
    return (
        <div className="home-heading">
            <div className="featured-article">
                <img className="featured-image" src={featuredImage} alt="" />
                <div className="featured-category">MENTAL HEALTH</div>
                <h1 className="featured-title">
                    Why Ketamine Is Being Used As an Antidepressant
                </h1>
                <h2 className="featured-subtitle">
                    Research suggests the "club drug" shows promise as a
                    fast-acting antidepressant for those with
                    treatment-resistant depression.
                </h2>
                <p className="featured-author">By Amanda Chatel</p>
            </div>
            <TrendingArticles />
        </div>
    )
}
