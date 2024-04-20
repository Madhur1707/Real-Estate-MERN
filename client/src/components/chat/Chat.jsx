import { useState } from 'react';
import './chat.scss';

const Chat = () => {
    const [chat,setchat] = useState(true)
  return (
    <div className='chat'>
        <div className="messages">
            <h1>Messages</h1>
            <div className="message">
            <img
                src="https://insertface.com/fb/1492/black-goku-wallpaper-face-1492179-yztb2-fb.jpg"
                alt=""
              />
                <span>Madhur Pathak</span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="message">
            <img
                src="https://insertface.com/fb/1492/black-goku-wallpaper-face-1492179-yztb2-fb.jpg"
                alt=""
              />
                <span>Madhur Pathak</span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="message">
            <img
                src="https://insertface.com/fb/1492/black-goku-wallpaper-face-1492179-yztb2-fb.jpg"
                alt=""
              />
                <span>Madhur Pathak</span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="message">
            <img
                src="https://insertface.com/fb/1492/black-goku-wallpaper-face-1492179-yztb2-fb.jpg"
                alt=""
              />
                <span>Madhur Pathak</span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="message">
            <img
                src="https://insertface.com/fb/1492/black-goku-wallpaper-face-1492179-yztb2-fb.jpg"
                alt=""
              />
                <span>Madhur Pathak</span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
     {chat &&  ( <div className="chatBox">
            <div className="top">
                <div className="user">
                <img
                src="https://insertface.com/fb/1492/black-goku-wallpaper-face-1492179-yztb2-fb.jpg"
                alt=""
              />
                    Madhur Pathak
                </div>
                <span className="close" onClick={() => setchat(null)}>X</span>
            </div>
            <div className="center">
                <div className="chatMessage">
                    <p>Lorem ipsum, dolor sit amet consectetur!</p>
                    <span>5 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Lorem ipsum, dolor sit amet consectetur!</p>
                    <span>5 hour ago</span>
                </div>
                <div className="chatMessage">
                    <p>Lorem ipsum, dolor sit amet consectetur!</p>
                    <span>5 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Lorem ipsum, dolor sit amet consectetur!</p>
                    <span>5 hour ago</span>
                </div>
                <div className="chatMessage">
                    <p>Lorem ipsum, dolor sit amet consectetur!</p>
                    <span>5 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Lorem ipsum, dolor sit amet consectetur!</p>
                    <span>5 hour ago</span>
                </div>
                <div className="chatMessage">
                    <p>Lorem ipsum, dolor sit amet consectetur!</p>
                    <span>5 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Lorem ipsum, dolor sit amet consectetur!</p>
                    <span>5 hour ago</span>
                </div>
            </div>
            <div className="bottom">
                <textarea></textarea>
                <button>Send</button>
            </div>
        </div>)}
    </div>
  )
}

export default Chat