import { StreamChat } from 'stream-chat';
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';
import './App.css'
import Auth from './Components/Auth';
import ChanelContainer from './Components/ChanelContainer';
import ChanelListContainer from './Components/ChanelListContainer';
import ChannelSearch from './Components/ChannelSearch';



const cookies = new Cookies();
const apiKey = '23d2sm9dq589';
const authToken = cookies.get("token");
const client = StreamChat.getInstance(apiKey);

if(authToken) {
  client.connectUser({
      id: cookies.get('userId'),
      name: cookies.get('username'),
      fullName: cookies.get('fullName'),
      image: cookies.get('avatarURL'),
      hashedPassword: cookies.get('hashedPassword'),
      phoneNumber: cookies.get('phoneNumber'),
  }, authToken)
}

function App() {

  if (!authToken) return <Auth/>

  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light" >
       <ChanelListContainer
       
       />
       
        <ChanelContainer
        
        />
      </Chat>
    </div>
  )
}

export default App
