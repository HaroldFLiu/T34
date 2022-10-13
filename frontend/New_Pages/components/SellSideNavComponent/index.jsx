/* category icons */
import {FaCar} from 'react-icons/fa';
import {FaTshirt} from 'react-icons/fa';
import {BsPlugFill} from 'react-icons/bs';
import {MdFamilyRestroom} from 'react-icons/md';
import {IoIosLeaf} from 'react-icons/io';
import {FaChessKnight} from 'react-icons/fa';
import {GiSofa} from 'react-icons/gi';
import {FaHammer} from 'react-icons/fa';
import {FaGuitar} from 'react-icons/fa';
import {FaPenFancy} from 'react-icons/fa';
import {FaDog} from 'react-icons/fa';
import {MdSportsFootball} from 'react-icons/md';
import {MdSmartToy} from 'react-icons/md';

import { useParams } from "react-router-dom";
import React, {useEffect, useState}from "react";
import {Link} from "react-router-dom"
import axios from "../../api/axios";
import Cookie from 'universal-cookie';

const SellSideNav = () => {
    {/* options for category menu */}
    const icons = [
        FaCar,
        FaTshirt,
        BsPlugFill,
        MdFamilyRestroom,
        IoIosLeaf,
        FaChessKnight,
        GiSofa,
        FaHammer,
        FaGuitar,
        FaPenFancy,
        FaDog,
        MdSportsFootball,
        MdSmartToy,
    ];
    const [categories, setCategories] = useState('');

    const getCatergories = () => {
        axios.get('/category')
        .then(res => {
        setCategories(res.data);
        }).catch(err => {
        console.log(err);
        })
    }

    const categoryOptions = [];
    
    for (var i=0; i<categories.length; i++) {
        categoryOptions.push({id: categories[i]._id, name: categories[i].name, icon: icons[i]});
    }

    //console.log(categoryOptions);

    const [firstRender, setFirstRender] = useState(false);
    useEffect(() => {
        if (!firstRender) {
        getCatergories();
        setFirstRender(true);
        }
    }, [firstRender]);

    const {sellerId} = useParams()
    console.log(sellerId);

    return (
        <div className="sidenav">
            <div className="header">
                Categories 
            </div>
            {categoryOptions.map((category) => (
                <Link onClick={() => window.location.href="/sell-page/" + sellerId + "/?cat_id=" + category.id}> <category.icon className="icon"/> {category.name}</Link>
            ))}
        </div>
    );
}

export default SellSideNav;