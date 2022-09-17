import Socials from '../../Socials/Socials'
import './articleHeader.scss'

export default function ArticleHeader({ article }) {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]
    const mongoDate = article.created_at?.substr(0, 10).replaceAll('-', ' ')
    const mongoMonth = parseInt(mongoDate?.substr(4, 4))
    const mongoDay = parseInt(mongoDate?.substr(8, 6))
    const mongoYear = parseInt(mongoDate)
    const currentMonth = months[mongoMonth]
    return (
        <div className="article-header">
            <div className="article-header-top">
                <p className="article-category">BEAUTY</p>
                <h1 className="article-title">{article.title}</h1>
                <h2 className="article-subtitle">
                    Experienced injectors weigh in on the prevalence of
                    migrating lip filler and what you should do if you're
                    dealing with the issue.
                </h2>
            </div>
            <div className="article-header-bottom">
                <div className="article-header-bottom-left">
                    <div className="article-header-author">
                        By {article.author.replace('By', '')}
                    </div>
                    <div className="line"></div>
                    <div className="article-header-publish-date">
                        Published on {currentMonth} {mongoDay}, {mongoYear}
                    </div>
                </div>
                <Socials socialsSize={'17px'} />
            </div>
        </div>
    )
}
