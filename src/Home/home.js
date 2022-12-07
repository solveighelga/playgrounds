import React,  {useEffect, useState} from 'react';
import './home.scss';

import kid from './kid.png';
import desktoplogo from './desktoplogo.png';
import mobile from './mobile1.png';
import logo from './logo.png';
import arrow from './down.png';

const Home = function() {

const [open, setOpen] = useState(false); // By default the drop down is not open (dropdown open = false)
    setOpen(!open);   
    

    return (
    <div id="main">
    <div id="container">
        <img
            alt='kid'
            id="image1"  
            src={kid}
        />
      
        <img  
            alt='desktop'
            id="image3"
            src={desktoplogo}
         
        />
      
    </div>
    
    <div id="intro">
        <img  
            alt='mobile'
            id="image2"
            src={mobile}
        />
        <img
            alt='Logo' 
            id="logo"
            src={logo}
        />    
      
        <div className='menu-container1'>
          <div className='menu-trigger1' onClick={()=>{setOpen(!open)}}> 
            {"Reykjavík"}
          </div>
        
          <div className={`dropdown-menu1 ${open? 'active' : 'inactive'}`}>
            <ul>
              <li onClick={()=>{}}><DropdownItem1 text = {'Reykjavík'}/></li> 
            </ul>
          </div> 
        </div>
      
            <img
                alt='Arrow' 
                id="down"
                src={arrow}
            />
      
      
    </div>
  </div>
    );
}

function DropdownItem1(props){
    return(
      <li className='dropdownItem1'>
        <a>{props.text}</a>
      </li>
    );
  }

/*<button class="start">       
            Select City*/

export default Home;