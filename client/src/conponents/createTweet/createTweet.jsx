import PublicIcon from '@mui/icons-material/Public';
import CollectionsIcon from '@mui/icons-material/Collections';
import GifBoxIcon from '@mui/icons-material/GifBox';
import PollIcon from '@mui/icons-material/Poll';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ScheduleIcon from '@mui/icons-material/Schedule';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React, { useState } from 'react';
import ProfilePic from '../profilePic/profilePic';
import './createTweet.css';


export default function Tweet() {
    
    const [displayOptions, setDisplayOptions] = useState(false);

    const [tweetInput, setTweetInput] = useState('');

    const displayOptionsBTN = (e) => {
        setDisplayOptions(true);
    }

    const enableBTN = (e) => {
        setTweetInput(e.target.value)
    }

    return (
        
        <>
        <div className='px-5'>
            

            <div className='flex mt-4 gap-2'>
                <ProfilePic width={56} height= {56}/>
                
                <div className='w-full'>
                    <textarea 
                        className='ml-2 w-full h-12 py-3 bg-black text-lg resize-none' 
                        onClick={displayOptionsBTN} 
                        onChange={enableBTN}
                        placeholder="What's happening?"
                    />

                    <div className='ml-2 flex'>
                        {   
                            displayOptions &&
                            <>
                                <PublicIcon 
                                    color="primary"    
                                    fontSize="small"
                                /> 
                            
                                
                                <span className='ml-2 text-sm font-bold text-twitterBlue cursor-pointer'>
                                    Everyone can reply
                                </span>
                            </>
                        }
                    </div>

                    {
                        displayOptions && <hr className='w-full mt-3 border-gray-700' />
                    }
                    
                    <div className='w-full mt-3 flex justify-between items-center overflow-clip'>
                        <div>
                            <CollectionsIcon className='mr-2 cursor-pointer' color="primary"/>
                            <PublicIcon className='mr-2 cursor-pointer' color="primary"/>
                            <GifBoxIcon className='mr-2 cursor-pointer' color="primary"/>
                            <PollIcon className='mr-2 cursor-pointer' color="primary"/>
                            <EmojiEmotionsIcon className='mr-2 cursor-pointer' color="primary"/>
                            <ScheduleIcon className='mr-2 cursor-pointer' color="primary"/>
                            <LocationOnIcon className='mr-2 cursor-pointer' color="primary"/>
                        </div>
                    
                        <button disabled={!tweetInput} className={`py-2 px-5 bg-twitterBlue text-2.5rem rounded-3xl ${tweetInput ? 'opacity-100' : 'opacity-50'}`} >
                            Tweet
                        </button>
                        
                    </div>
                </div>
            </div>
            
            </div>
        <hr className='w-full mt-3 border-gray-700' />
        </>
    );
}
