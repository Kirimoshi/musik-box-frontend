import Sidebar from "../../Home/components/Sidebar";
import Footer from "../../Home/components/Footer";
import { default as PublicPlaylists } from "../../widgets/public-playlists/PublicPlaylists";

import {
  HomeContainer,
  SidebarContainer,
  MainContainer,
  FooterContainer,
} from "../../Home/Home.styles";

function PublicPlaylistsPage() {
  return (
    <HomeContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <MainContainer>
        <PublicPlaylists />
      </MainContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </HomeContainer>
  );
}

export default PublicPlaylistsPage;
