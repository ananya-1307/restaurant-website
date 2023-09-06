import React, { useState } from 'react';
import "./style.css";
import MenuCard from './Basics/MenuCard';
import Menu from './MenuApi';
import NavBar from './Basics/NavBar';

const uniqueList = [
    ...new Set(Menu.map((currEle) => {
        return currEle.category;
    })
    ),
    "All"];
console.log(uniqueList)
const Restaurant = () => {

    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);
    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(Menu);
            return;
        }

        const updatedList = Menu.filter((currEle) => {
            return currEle.category === category;
        })
        setMenuData(updatedList);
    }
    return (
        <>
            <NavBar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    );
};

export default Restaurant;
