import React,  {useEffect, useState, useRef} from 'react';
import './home.scss';
import kid from './kid.png';
import desktoplogo from './desktoplogo.png';
import mobile from './mobile1.png';
import arrow from './down.png';
import Fader from '../Home/Intro/fader';


const Home = function({setRoute}) {
    const [open, setOpen] = useState(false); // By default the drop down is not open (dropdown open = false)
    /*const [rotate, setRotate] = useState(false);*/

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e)=>{
            if(!menuRef.current.contains(e.target)){
            setOpen(false);
            }
        };

        document.addEventListener('mousedown', handler);
    });

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
        
 
        <Fader>

        </Fader>

        </div> 
        <div className='menu-container1' ref={menuRef}>
            <div className='menu-trigger1' onClick={() =>{setOpen(!open)/*, setRotate(!rotate)*/}}> Select City
        
                <img /*className={`imgrotate ${rotate? 'active' : 'inactive'}`}*/

                    alt='Arrow' 
                    id="down"
                    src={arrow}
                />
            </div>
            <div className={`dropdown-menu1 ${open? 'active' : 'inactive'}`}>
                <ul>
                    <li onClick={() => setRoute('main')}><DropdownItem1 text = {'Reykjavík'} /></li>
                </ul>
            </div>
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

export default Home;
      
