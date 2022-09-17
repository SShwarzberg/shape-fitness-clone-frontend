import { useState, useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import Main from '../../components/Main/Main'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Navbar/Sidebar/Sidebar'

export default function Page({ categoryLink }) {
    const categories = [
        'apparel-and-gear',
        'beauty',
        'fitness',
        'food-and-nutrition',
        'health-and-wellness',
        'lifestyle',
        'news-and-trends',
    ]

    const page = categories.map((category) => {
        if (categoryLink === category)
            return (
                <div className={`page ${category}`}>
                    <Navbar />

                    <Main category={category} />
                    {category !== 'home' && <Footer />}
                </div>
            )
    })
    return <>{page}</>
}
