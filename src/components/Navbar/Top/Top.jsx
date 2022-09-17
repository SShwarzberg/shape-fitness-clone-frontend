import './top.scss'
import search from '../../../assets/search.png'
import close from '../../../assets/close.png'
import SiteLogo from '../../SiteLogo/SiteLogo'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import menu from '../../../assets/menu.png'
import Sidebar from '../Sidebar/Sidebar'

export default function Top() {
    const inputRef = useRef()
    const [openSearch, setOpenSearch] = useState(false)
    const [searchInput, setSearchInput] = useState('')
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        inputRef.current?.focus()
    }, [openSearch])

    function handleClick() {
        setOpenSearch((prevResult) => !prevResult)
        setSearchResults([])
    }

    function fetchSearchResults(value) {
        fetch('http://localhost:3000/search', {
            method: 'POST',
            body: JSON.stringify({ data: (value && value) || searchInput }),
            headers: { 'content-type': 'application/json' },
            mode: 'cors',
        })
            .then((res) => res.json())
            .then((data) => setSearchResults(data))
    }

    function submitSearch(e) {
        e.preventDefault()
        fetchSearchResults()
    }

    function handleChange(e) {
        const { value } = e.target
        setSearchInput(value)

        setTimeout(() => {
            fetchSearchResults(value)
        }, 500)
    }
    const searchResultTitles = searchResults.titles?.map((result, i) => {
        console.log(result)
        if (i < 9)
            return (
                <Link
                    to={`/readarticle/${result.id}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    key={Math.random()}
                >
                    <li>{result.title}</li>
                </Link>
            )
    })

    const [displaySideBar, setDisplaySideBar] = useState(false)
    const [overflowHidden, setOverflowHidden] = useState()
    const [windowWidth, setWindowWidth] = useState()

    useEffect(() => {
        function watchWidth() {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', watchWidth)

        return () => {
            window.removeEventListener('resize', watchWidth)
        }
    }, [])

    useEffect(() => {
        if (overflowHidden === true) document.body.style.overflow = 'hidden'
        else document.body.style.overflow = 'auto'
    }, [overflowHidden])

    function handleSidebarOpen() {
        setOverflowHidden((prevState) => !prevState)
        setDisplaySideBar((prevState) => !prevState)
    }

    return (
        <div className="top">
            {displaySideBar === true && <Sidebar />}
            <div className="left">
                {window.innerWidth < 1300 && (
                    <img
                        className="menu-button"
                        src={displaySideBar ? close : menu}
                        onClick={handleSidebarOpen}
                    />
                )}
                <SiteLogo />
            </div>
            <div className="right">
                {!openSearch ? (
                    <>
                        <img src={search} alt="" onClick={handleClick} />
                        <div className="line"></div>
                        <h3>Newsletter</h3>
                    </>
                ) : (
                    <>
                        <div className="search-input-wrapper">
                            <form
                                className="search-bar-wrapper"
                                onSubmit={submitSearch}
                            >
                                <input
                                    ref={inputRef}
                                    className="search-website-input"
                                    type="text"
                                    name="search"
                                    value={searchInput}
                                    onChange={handleChange}
                                    placeholder="What are you looking for?"
                                />
                                <button className="submit-search-wrapper">
                                    <img
                                        src={search}
                                        className="submit-search"
                                        alt="submit-search"
                                    />
                                </button>
                                <div className="search-dropdown">
                                    {searchResultTitles
                                        ? searchResultTitles
                                        : 'Type something...'}
                                </div>
                            </form>
                        </div>
                        <img
                            src={close}
                            className="close-search"
                            alt="closeSearch"
                            onClick={handleClick}
                        />
                    </>
                )}
            </div>
        </div>
    )
}
