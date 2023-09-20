import React from "react";

import Sidebar from "../../entities/home/ui/Sidebar";
import Footer from "../../entities/home/ui/Footer";

import {
  HomeContainer,
  SidebarContainer,
  MainContainer,
  FooterContainer,
} from "./Home.styles";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <HomeContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <MainContainer>
        <Outlet /> {/* All other content */}
      </MainContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </HomeContainer>
  );
}

export default Home;
