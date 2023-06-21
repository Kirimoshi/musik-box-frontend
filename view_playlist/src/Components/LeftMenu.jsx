import React from 'react';
 import '../Styles/leftmenu.css';

import {RiPencilFill} from "react-icons/ri";


import Menu from './Menu';

import MenuList from './MenuList';

const LeftMenu=()=>{
  return (
    <div className='leftmenu'>
      <div className="logocontainer">
        <span>Music Box</span>
      </div>

      
      <div className="divider"></div>

      <div className="account_setting">
        <div className='account_image_details'>
        <div className="account_image">
          <img src={require('../images/image1.jpg')} alt='' className='img1' ></img>
        </div>
        <div className="account_details">
            <div className="account_name">user1</div>
            <div className="account_email">user1epam.com</div>
        </div>
        <div className="account_edit"><RiPencilFill className='icon-edit'/></div>
        </div>
        
      </div>

      <Menu menuObject={MenuList}/>

      <div className="divider"></div>

      <div className="about_the_app">
        <p>About the app</p>
      </div>

      <div className="about_us">
        <p>About us</p>
      </div>

      
      <div className="divider"></div>

      <div className="logout">
        <p>Log out</p>
      </div>
        
    </div>
  )
}
export default LeftMenu;