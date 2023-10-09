import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from '../pages/home/Home';
import SignUp from '../widgets/sign-up/SignUp';
import SignIn from '../widgets/sign-In/SignIn';
import Main from '../widgets/main-view/MainView';
import PrivateRoute from './PrivateRoute';
import paths from './paths';
import MyPlaylists from '../widgets/my-playlists/MyPlaylists';
import PlaylistDetails from '../widgets/playlist-details/PlaylistDetails';
import { FETCH_PLAYLISTS_TYPES } from '../store/constants';
import PublicPlaylists from '../widgets/public-playlists/PublicPlaylists';

const {
  home,
  signIn,
  signUp,
  myPlaylists,
  myPlaylistDetails,
  publicPlaylists,
  publicPlaylistDetails,
} = paths;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={home} element={<Home />}>
        <Route path='' element={<Main />} />
        <Route path={signIn} element={<SignIn />} />
        <Route path={signUp} element={<SignUp />} />
        <Route
          path={myPlaylists}
          element={
            <PrivateRoute
              isAuthRequired
              errorMessage={`It looks like you don't have permission to view this page. Please sign in to continue.`}
            >
              <MyPlaylists />
            </PrivateRoute>
          }
        />
        <Route
          path={`${myPlaylistDetails}/:id`}
          element={
            <PrivateRoute
              isAuthRequired
              errorMessage={`This playlist is available for authenticated users only. Please sign in to continue.`}
            >
              <PlaylistDetails
                playlistTypeToDisplay={FETCH_PLAYLISTS_TYPES.MY}
              />
            </PrivateRoute>
          }
        />
        <Route
          path={`${publicPlaylistDetails}/:id`}
          element={
            <PlaylistDetails
              playlistTypeToDisplay={FETCH_PLAYLISTS_TYPES.PUBLIC}
            />
          }
        />
        <Route path={publicPlaylists} element={<PublicPlaylists />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Route>
    </>
  )
);

export default router;
