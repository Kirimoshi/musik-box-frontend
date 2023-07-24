import React from "react";

import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Main from "./components/Main";

import {
  HomeContainer,
  SidebarContainer,
  MainContainer,
  FooterContainer,
} from "./Home.styles";

function Home() {
  return (
    <HomeContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <MainContainer>
        <Main />
      </MainContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </HomeContainer>
  );
}

export default Home;
