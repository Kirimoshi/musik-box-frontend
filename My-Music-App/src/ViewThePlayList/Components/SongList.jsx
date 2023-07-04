import {React,useState} from 'react'
import Songs from './Songs';
import {RiDeleteBin6Line} from 'react-icons/ri'
import '../Styles/songlist.css'
import {BsThreeDotsVertical} from 'react-icons/bs'
export default function SongList() {
    const someThing=()=>{
        console.log('hi')
    }
    const [openModel,setOpenModel]=useState(null);
    const handleClick=(x)=>{
        if (x === openModel) {
            setOpenModel(null);
          } else {
            setOpenModel(x);
          }
        };
  return (
    <div className='SongList'>
        <div className="songsContainer">
            {
                Songs && Songs.map((song,index)=>(
                    <div className="songs" key={song.id}>
                        <div className="song">
                            
                            <div className="imageBox-artistinfo">
                                <img src={song.picture} alt="song preview" className='image1'/>

                                <div className="artistInfo">
                                <p>{song.title}</p>
                                <p>{song.artist}</p>
                            </div>
                            </div>
                            
                            <div className="vertical-menu">
                            <BsThreeDotsVertical className="vertical-menu" 
                            onClick={()=>{
                                handleClick(song.id)
                               }}
                            />
                            {openModel===song.id && <div className='delete-icon-modal'>
                            <a href='#' onClick={someThing}>
                            <RiDeleteBin6Line className='delete-button'/>
                            <i>Remove song from playlist</i>
                            </a>
                            </div>}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
