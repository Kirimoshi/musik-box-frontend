import React from "react";

import Sidebar from "./components/Sidebar";

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
      <MainContainer>Home</MainContainer>
      <FooterContainer>footer</FooterContainer>
    </HomeContainer>
  );
}

export default Home;
