import React, {useEffect, useState}from "react";

const SortBy = () => {
    const [display, setDisplay] = useState('');
    const [url, setURL] = useState('');

    const currentURL = new URL(window.location.href);
    const queryParams = new URLSearchParams(window.location.search);

    const getURL = async (sortBy) => {
        if (sortBy == 'newest') {
            queryParams.set('sortBy', 'newest');
        } else if (sortBy == 'oldest') {
            queryParams.set('sortBy', 'oldest');
        } else if (sortBy == 'desc') {
            queryParams.set('sortBy', 'desc');
        } else if (sortBy == 'asc') {
            queryParams.set('sortBy', 'asc');
        }
        
        setURL(currentURL.pathname + '?' + queryParams.toString());

        //console.log(queryParams.toString());
        //console.log(url);
        //.log(display);
    }

    const getDisplay = async () => {
        if (queryParams.get("sortBy") == 'newest') {
            setDisplay('Newest');
        } else if (queryParams.get("sortBy") == 'oldest') {
            setDisplay('Oldest');
        } else if (queryParams.get("sortBy") == 'desc') {
            setDisplay('Highest Price');
        } else if (queryParams.get("sortBy") == 'asc') {
            setDisplay('Lowest Price');
        } else {
            setDisplay('Default');
        }
    }

    useEffect(() => {
        getURL();
        getDisplay();
    }, []);

    return (
        <div className="move-drop-btn">
            <div class="dropdown">
                <button class="dropbtn">Sort by: {display}</button>
                <div class="dropdown-content">
                    <a onClick={() => getURL('newest')} href={url}>Updated: Newest</a>
                    <a onClick={() => getURL('oldest')} href={url}>Updated: Oldest</a>
                    <a onClick={() => getURL('desc')} href={url}>Price: High-Low</a>
                    <a onClick={() => getURL('asc')} href={url}>Price: Low-High</a>       
                </div>
            </div>
        </div> 
    );
}

export default SortBy;