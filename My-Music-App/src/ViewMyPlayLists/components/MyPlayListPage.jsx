import React from 'react';
import LeftMenu from './LeftMenu';
import MainContainer from './MainContainer';
import '../styles/myplaylistpage.css'
import Footer from './Footer';
import '../styles/reset.css'
const MyPlayListPage=()=>{
    return (
        <div className='myplaylist-container'>
            <LeftMenu/>
            <MainContainer/>
            <div className='background'></div>
            <Footer/>
        </div>
    )
    }
export default MyPlayListPage;