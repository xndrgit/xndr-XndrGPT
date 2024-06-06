import React, {useContext} from "react";
import './Main.css'
import {assets} from "../../assets/assets.js";
import {Context} from "../../context/Context.jsx";

function Main() {

    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onSent(input);
        }
    };

    return (
        <div className='main'>
            <div className='nav'>
                <p>XndrGPT</p>
                <img src={assets.user_icon} alt=''/>
            </div>
            <div className='main-container'>

                {!showResult
                    ? <>
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
                    </>
                    :
                    <div className="result">
                        <div className="result-title">
                            <img src={assets.user_icon} alt=""/>
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />

                            {resultData
                                ?
                                <>
                                    {loading
                                        ?<div className="loader">
                                            <hr/>
                                            <hr/>
                                            <hr/>
                                        </div>

                                        :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                                    }
                                </>

                                :<a href="https://console.cloud.google.com/billing"><p>You can't use me without a billing account linked.</p></a>
                            }



                        </div>
                    </div>

                }



                <div className='main-bottom'>
                    <div className='search-box'>
                        <input onKeyPress={handleKeyPress} onChange={(e) => setInput(e.target.value)} value={input}
                               type='text' placeholder='Enter a prompt here'/>
                        <div>
                            {/*<img src={assets.gallery_icon} alt=''/>*/}
                            {/*<img src={assets.mic_icon} alt=''/>*/}
                            {input
                                ? <img onClick={() => onSent()} src={assets.send_icon} alt=''/>
                                : null
                            }
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
