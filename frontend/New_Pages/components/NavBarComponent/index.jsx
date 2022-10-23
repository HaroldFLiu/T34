import React, {useEffect, useState}from "react";
import logo from "../../dist/img/t34-logo.jpg";
import axios from "../../api/axios";
import {Link} from "react-router-dom"
import {NavLink} from "react-router-dom"
import Cookie from 'universal-cookie';

/* icon imports */
import {AiOutlineHome} from 'react-icons/ai';
import {HiOutlineShoppingBag} from 'react-icons/hi';
import {MdOutlineGroups} from 'react-icons/md';
import {AiOutlineUsergroupAdd} from 'react-icons/ai';
import {TbStar} from 'react-icons/tb';
import {AiOutlineLock} from 'react-icons/ai';
import {RiBookOpenLine} from 'react-icons/ri';
import {BsCart2} from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

const NavBar = () => {
    // get user info
    var coookie = new Cookie();
    const [user, setUser] = useState([]);
    const fetchData = async () => {
        const server_res = await axios.get("/getuser", 
            {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
        const user = server_res.data;
        setUser(user);
    };

    useEffect(() => {
        fetchData();
    }, []);

    // handle url
    const [url, setURL] = useState('');
    const [query, setQuery] = useState('');
    const currentURL = new URL(window.location.href);
    const queryParams = new URLSearchParams(window.location.search);
    
    // log OUT HERE
    const handleLogOut = async () => {
        await axios.put("/logout", {} ,{withCredentials:true, headers:{'Authorization':coookie.get("token")}})
        .then(response => {
            if (response.status === 200) {
                location.pathname='/login-page';
            }
        })
        .catch(error => {
            console.log("Error signing out", error);
        });
    };

    // handle search bar query
    const handleKeyDown = event => {
        if (event.key === 'Enter') {
          event.preventDefault();
          
          queryParams.set('searchBy', query);
          
          setURL(currentURL.pathname + "?" + queryParams.toString());

          window.location.replace(currentURL.pathname + "?" + queryParams.toString());
        }
    };

    return (
        <div className="navbar">
            <h1 className="website-title"> Market34</h1>
            <NavLink to="/home-page"> <AiOutlineHome className="icon-nav"/> Home</NavLink>
            <NavLink to={`/sell-page/${user.user_id}`}><HiOutlineShoppingBag className="icon-nav"/> Sell </NavLink>
            <NavLink to={`/group-page/${user.user_id}`}> <AiOutlineUsergroupAdd className="icon-nav"/> Groups</NavLink>
            <NavLink to={`/my-groups-page/${user.user_id}`}> <MdOutlineGroups className="icon-nav"/> My Groups</NavLink>
            <NavLink to={`/wishlist-page/${user.user_id}`}> <AiOutlineHeart className="icon-nav"/> Wishlist </NavLink>
            <div className="nav-login">
                <Link to="#" onClick={() => handleLogOut()}> <AiOutlineLock className="icon-nav"/> Log Out </Link>
                <a href="#"><RiBookOpenLine className="icon-nav" /> Welcome: {user.first}</a>
                <NavLink to={`/checkout-page/${user.user_id}`}> <BsCart2 className="icon-nav"/> Cart</NavLink>

                 {/* search bar */}
                <input 
                    type="text"
                    id="query"
                    name="query"
                    placeholder="Search.."
                    value = {query}
                    onChange={event => setQuery(event.target.value)}
                    onKeyDown={handleKeyDown}
                    href={url}
                    ></input>
            </div>
        </div>
    )
}

export default NavBar;