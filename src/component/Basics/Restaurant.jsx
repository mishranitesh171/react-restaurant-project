import React from "react";
import { useState } from "react";
import"./style.css"
import Menu from "./menuAPI";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";
//spread operator this will not return the repeated category of array
const uniqueList= [...new Set(Menu.map((curElem)=>{
     return curElem.category;

})),
"ALL",];

function Restauranat(){
  const[menudata,setmenudata]=useState(Menu);
  const[menuList,setmenulist]=useState(uniqueList);
const filterItem=(category)=>{
     if(category==="ALL"){
          setmenudata(Menu);
          return;
     }
const updatedList=Menu.filter((curElem)=>{
     return curElem.category===category;
})
setmenudata(updatedList);
};
    // other way to incude css is  craeting object
     return(
<>
<Navbar filterItem={filterItem} menuList={menuList}/>
<MenuCard  menudata={menudata}/>
</>

     )
}
export default Restauranat