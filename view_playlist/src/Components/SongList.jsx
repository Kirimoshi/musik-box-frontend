import React from 'react'
import Songs from './Songs';

import '../Styles/songlist.css'
import {BsThreeDotsVertical} from 'react-icons/bs'
export default function SongList() {
  return (
    <div className='SongList'>
        <div className="songsContainer">
            {
                Songs && Songs.map((song,index)=>(
                    <div className="songs" key={song.id}>
                        <div className="song">
                            
                            <div className="imageBox-artistinfo">
                                <img src={song.picture} alt='' className='image1'/>

                                <div className="artistInfo">
                                <p>{song.title}</p>
                                <p>{song.artist}</p>
                            </div>

                            </div>


                            <div className="vertical-menu">
                            <BsThreeDotsVertical className="vertical-menu" />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
