import { useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './article.scss'

export default function Article({ article, articleStyle, handleClick }) {
    // const [brokenArticleImages, setBrokenArticleImages] = useState([])
    async function handleError() {
        await window.DOMContentLoaded
        // setBrokenArticleImages((prevImages) => {
        //     return [...prevImages, article.img]
        // })
    }
    // useEffect(() => {
    //     fetch('http://localhost:3000/broken-article', {
    //         method: 'POST',
    //         body: JSON.stringify({ img: brokenArticleImages }),
    //         headers: { 'content-type': 'application/json' },
    //         mode: 'cors',
    //     })

    //     console.log(brokenArticleImages)
    // }, [brokenArticleImages])

    const linkStyles = {
        textDecoration: 'inherit',
        color: 'inherit',
    }
    return (
        <NavLink style={linkStyles} to={`/readarticle/${article._id}`}>
            <div
                className={`article article-${articleStyle}`}
                onClick={handleClick}
            >
                <img
                    className="article-image"
                    src={article.img}
                    onError={() => handleError()}
                    alt=""
                />
                <div className="info">
                    {articleStyle !== 'trending' && (
                        <p className="category">
                            {article.category.toUpperCase()}
                        </p>
                    )}
                    <h1 className="title">{article.title}</h1>
                    <p className="author">{article.author}</p>
                </div>
            </div>
        </NavLink>
    )
}
