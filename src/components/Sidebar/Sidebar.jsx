import React, {useState} from "react";
import './Sidebar.css';
import {assets} from "../../assets/assets.js";
function sidebar() {

    const [Extended,setExtended] = useState(false)

    return (
        <div className='sidebar'>
            <div className='top'>
                <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt=""/>
                <div className='new-chat'>
                    <img src={assets.plus_icon} alt=""/>
                    {Extended?<p>New Chat</p>:null}
                </div>
                {Extended
                    ?
                    <div className='recent'>
                        <p className='recent-title'>Recent</p>
                        <div className='recent-entry'>
                            <img src={assets.message_icon} alt=""/>
                            <p>What is react...</p>

                        </div>
                    </div>
                    :
                    null
                }

            </div>

            <div className='bottom'>
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt=""/>
                    {Extended?<p>Help</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt=""/>
                    {Extended?<p>Activity</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt=""/>
                    {Extended?<p>Settings</p>:null}
                </div>
            </div>
        </div>
    )
}
export default sidebar

