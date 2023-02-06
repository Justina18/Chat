import React from 'react'
import { ChannelList, useChatContext } from 'stream-chat-react'
import Cookies  from 'universal-cookie'
import ChannelSearch from './ChannelSearch'
import CompanyHeader from './CompanyHeader'
import SideBar from './SideBar'
import TeamChannelList from './TeamChannelList'
import TeamChannelPreview from './TeamChannelPreview'


const ChanelListContainer = () => {
  return (
    <>
        <SideBar/>
        <div className='channel-list__list__wrapper'>
            <CompanyHeader/>
            <ChannelSearch/>
            <ChannelList
              filters={{}}
              channelRenderFilterFn={()=>{}}
              List={(listProps)=> (
                <TeamChannelList
                  {...listProps}
                  type="team"
                />
              )}
              Preview={(previewprops)=>(
                <TeamChannelPreview
                  {...previewprops}
                  type="team"
                />
              )}
            />

          <ChannelList
              filters={{}}
              channelRenderFilterFn={()=>{}}
              List={(listProps)=> (
                <TeamChannelList
                  {...listProps}
                  type="messaging"
                />
              )}
              Preview={(previewprops)=>(
                <TeamChannelPreview
                  {...previewprops}
                  type="messaging"
                />
              )}
            />
        </div>
    </>
  )
}

export default ChanelListContainer