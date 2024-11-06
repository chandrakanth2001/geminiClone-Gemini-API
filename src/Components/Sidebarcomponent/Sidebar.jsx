import React ,{useState,useContext} from 'react';
import './Sidebar.css';
import {assets} from '../../assets/assets.js'
import {Context} from '../../context/Context'

const Sidebar = () => {
  //hooks
  const[extended,setExtended] = useState(false);
  const{onSent,prevPrompts,setRecentPrompt,newChat} = useContext(Context)

  const loadPrompt = async(prompt)=>{
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  //functions

  const menuIcon=()=>{
    setExtended(extended?false:true);
  }

  return (
    <div className={`sidebar ${extended ? '' : 'collapsed'}`}>

        {/* top section */}

        <div className="top">
            
            <img className="menu"  src={assets.menu_icon} onClick={menuIcon} />
            <div onClick={()=>newChat()} className="new-chat">
                <img src={assets.plus_icon} alt="" />
               {extended?<p>New Chat</p>:null} 
            </div>
            {extended?

                  <div className="recent">
                        <p className="recent-title">Recent</p>
                        {prevPrompts.map((item,index)=>{
                          return(
                            <div onClick={()=>{loadPrompt(item)}} className="recent-entry">
                            <img src={assets.message_icon} alt="" />
                            <p>{item.slice(0,18)}...</p>
                        </div>
                          )
                        })}
                        
                  </div>
                    :null

               }
            
      </div>

         {/* top section */}


        {/* bottom section */}

      <div className="bottom">

           <div className="bottom-item recent-entry">
                <img src={assets.question_icon} />
              {extended?<p>Help</p>:null}  
           </div>
           <div className="bottom-item recent-entry">
                <img src={assets.history_icon} />
                {extended?<p>Activity</p>:null}
           </div> 
           <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} />
                {extended?<p>Settings</p>:null}
           </div> 

      </div>

      {/* bottom section */}


    </div>
  )
}


export default Sidebar
