import React from 'react'
import { MdMusicNote} from 'react-icons/md'
import {BiShareAlt } from 'react-icons/bi'
import { RiPlayListFill} from 'react-icons/ri'
import {FaUserFriends } from 'react-icons/fa'

const MenuList=[
  {
    id:1,
    icon:<MdMusicNote/>,
    name:"My Playlists",
  },
  {
    id:2,
    icon:<BiShareAlt/>,
    name:"Shared Playlists",
  },
  {
    id:3,
    icon:<RiPlayListFill/>,
    name:"Public Playlists",
  },
  {
    id:4,
    icon:<FaUserFriends/>,
    name:"Friends",
  },
]

export default MenuList;