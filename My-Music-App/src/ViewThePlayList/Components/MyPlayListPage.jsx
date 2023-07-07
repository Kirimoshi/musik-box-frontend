import React from 'react';
import LeftMenu from './LeftMenu';
import MainContainer from './MainContainer';
import '../Styles/reset.css';
import '../Styles/myplaylistpage.css'
import Footer from './Footer';

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