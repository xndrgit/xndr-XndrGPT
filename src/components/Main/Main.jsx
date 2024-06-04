import React from "react";
import './Main.css'
import {assets} from "../../assets/assets.js";
function Main() {
    return (
        <div className='main'>
            <div className='nav'>
                <p>XndrGPT</p>
                <img src={assets.user_icon} alt=''/>
            </div>
            <div className='main-container'>
                <div className='greet'>
                    <p><span>Hello, Xndr.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className='cards'>
                    <div className='card'>
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} alt=''/>
                    </div>
                    <div className='card'>
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} alt=''/>
                    </div>
                    <div className='card'>
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} alt=''/>
                    </div>
                    <div className='card'>
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} alt=''/>
                    </div>
                </div>

                <div className='main-bottom'>
                    <div className='search-box'>
                        <input type='text' placeholder='Enter a prompt here'/>
                        <div>
                            <img src={assets.gallery_icon} alt=''/>
                            <img src={assets.mic_icon} alt=''/>
                            <img src={assets.send_icon} alt=''/>
                        </div>
                    </div>
                    <p className='bottom-info'>
                        XndrGPT may display inaccurate info, including about peple, do double-check its responses. Your privacy and XndrGPT Apps
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Main
