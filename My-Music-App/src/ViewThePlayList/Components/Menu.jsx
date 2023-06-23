import {React,useState} from 'react'

export default function Menu({menuObject}) {
  const [highlightedButton, setHighlightedButton] = useState(null);
  const handleClick = (index) => {
    setHighlightedButton(index);
  };
  return (
    <div className="MenuContainer">
        <ul>
            {
                menuObject && menuObject.map((li,index)=>(
                   <li key={index}>
                    <a href='#' className={highlightedButton === index ? 'highlighted-button' : ''} onClick={() => handleClick(index)}>
                        <i className='list_icon'>{li.icon}</i>
                        <span className='list_name'>{li.name}</span>
                    </a>
                   </li> 
                ))
            }
        </ul>
    </div>
  )
}
