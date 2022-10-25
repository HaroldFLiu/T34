import React, { useEffect, useState } from "react"
import "./PageNext.css"

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    // function to set next page
    const nextPage = () => {
        if(currentPage !== nPages) setCurrentPage(currentPage + 1)
    }

    // function to set previous page
    const prevPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }

    // get url
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const currentUrl = window.location.href;

        if (currentUrl[currentUrl.length - 1] == '#') {
            setUrl(currentUrl);
        } else {
            setUrl(currentUrl + '#');
        }
    }, [])

    return (
        <nav className="center-next">
            <ul className='pagination justify-content-center'>
                <li className="page-item">
                    <a className="page-link" 
                        onClick={prevPage} 
                        href={url}>
                        Back    
                    </a>
                </li>
                {pageNumbers.map(pgNumber => (
                    <li key={pgNumber} 
                        className= {`page-item ${currentPage == pgNumber ? 'active' : ''} `} >

                        <a onClick={() => setCurrentPage(pgNumber)}  
                            className='page-link' 
                            href={url}>
                            {pgNumber}
                        </a>
                    </li>
                ))}
                <li className="page-item">
                    <a className="page-link" 
                        onClick={nextPage}
                        href={url}>
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination