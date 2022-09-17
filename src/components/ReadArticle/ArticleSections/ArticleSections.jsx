import './articleSections.scss'
import { nanoid } from 'nanoid'

export default function ArticleSections({ articleSections, scrollToHeading }) {
    const articleTitles = articleSections.map((sectionTitle) => {
        return (
            <div
                key={nanoid()}
                className="article-sections-title"
                onClick={(e) => scrollToHeading(e, sectionTitle)}
            >
                {sectionTitle.replaceAll('>>h1', '').replaceAll('<', '')}
            </div>
        )
    })
    return (
        <div className="article-sections">
            <h1 className="article-sections-header">In This Article</h1>
            <div className="article-sections-list">{articleTitles}</div>
        </div>
    )
}
