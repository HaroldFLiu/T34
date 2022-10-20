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
        const server_res = await axios.get("/getuser", {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
        const user = server_res.data;
        setUser(user);
    };

    const [url, setURL] = useState('');
    const [query, setQuery] = useState('');
    const currentURL = new URL(window.location.href);
    const queryParams = new URLSearchParams(window.location.search);
    
    {/*method to unpack the data and fetch effect*/ }
    useEffect(() => {
        fetchData();
    }, []);

    //console.log(user.first + ": " + user.user_id);
    
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

    const handleKeyDown = event => {
        if (event.key === 'Enter') {
          event.preventDefault();
          
          queryParams.set('searchBy', query);
          
          setURL(currentURL.pathname + "?" + queryParams.toString());
          //console.log(currentURL.pathname + "?" + queryParams.toString());
        
          //location.pathname = url;
          //console.log(url);
          window.location.replace(currentURL.pathname + "?" + queryParams.toString());
        }
      };


    return (
        <div className="navbar">
            <h1 className="website-title"> Market34</h1>
            <NavLink to="/home-page"> <AiOutlineHome className="icon"/> Home</NavLink>
            <NavLink to={`/sell-page/${user.user_id}`}><HiOutlineShoppingBag className="icon"/> Sell </NavLink>
            {/*<a href={"/sell-page/"+ user.user_id}> <HiOutlineShoppingBag className="icon"/> Sell</a>*/}
            <NavLink to={`/group-page/${user.user_id}`}> <AiOutlineUsergroupAdd className="icon"/> Groups</NavLink>
            {/* can be changed to /my-groups-display TO SEE NEW PAGE TO LINK TO */}
            <NavLink to={`/my-groups-page/${user.user_id}`}> <MdOutlineGroups className="icon"/> My Groups</NavLink>
            <NavLink to={`/wishlist-page/${user.user_id}`}> <AiOutlineHeart className="icon"/> Wishlist </NavLink>
            {/*<a href="/wishlist-page"> <TbStar className="icon"/> Wishlist</a>*/}
            <div className="nav-login">
                {/* search bar*/}
                {/* need to add logout btn, rn just redirects without sign out*/}
                {/* <a href="/login-page"> <AiOutlineLock className="icon"/> Log Out</a>*/}
                <Link to="#" onClick={() => handleLogOut()}> <AiOutlineLock className="icon"/> Log Out </Link>
                <a href="#"><RiBookOpenLine className="icon" /> Welcome: {user.first}</a>
                <NavLink to={`/checkout-page/${user.user_id}`}> <BsCart2 className="icon"/> Cart</NavLink>
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