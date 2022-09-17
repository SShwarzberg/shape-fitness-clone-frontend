// import { useEffect, useState } from 'react'
// import Page from './Page/Page'

// export default function Pages({ categoryLink }) {
//     const [displaySideBar, setDisplaySideBar] = useState(false)
//     const [overflowHidden, setOverflowHidden] = useState()
//     const [windowWidth, setWindowWidth] = useState()
//     const categories = [
//         'apparel-and-gear',
//         'beauty',
//         'fitness',
//         'food-and-nutrition',
//         'health-and-wellness',
//         'lifestyle',
//         'news-and-trends',
//     ]

//     useEffect(() => {
//         function watchWidth() {
//             setWindowWidth(window.innerWidth)
//         }

//         window.addEventListener('resize', watchWidth)

//         return () => {
//             window.removeEventListener('resize', watchWidth)
//         }
//     }, [])

//     useEffect(() => {
//         if (overflowHidden === true) document.body.style.overflow = 'hidden'
//         else document.body.style.overflow = 'auto'
//     }, [overflowHidden])

//     function handleSidebarOpen() {
//         setOverflowHidden((prevState) => !prevState)
//         setDisplaySideBar((prevState) => !prevState)
//     }
//     const page = categories.map((category) => {
//         if (categoryLink === category)
//             return (
//                 <Page
//                     handleSidebarOpen={() => handleSidebarOpen()}
//                     category={category}
//                     displaySideBar={displaySideBar}
//                 />
//             )
//     })
//     return <>{page}</>
// }
