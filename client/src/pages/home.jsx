import React from 'react';
import './home.css';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Tweet from '../conponents/createTweet/createTweet';
import Posts from '../conponents/posts/posts';
import Searchbar from '../conponents/searchbar/searchbar';
import Trending from '../conponents/trending/trending';
import ProfilePic from '../conponents/profilePic/profilePic';

export default function Home() {

    return (
        <>
            <div className=' w-full flex overflow-hidden bg-black m-auto h-screen lg:w-[90%]'>
                <div className='py-4 px-6 bg-black hidden w-[20%] sm:block'>
                    <h1>
                        Zapnode
                    </h1>     
                </div>
                <div className=' h-screen overflow-y-scroll bg-black border-gray-700 border-x-[0.1px] feed lg:w-1/2'>  
                    <div className='font-bold flex justify-between items-center bg-black px-5 py-2'>
                        <div className='flex items-center gap-2 justify-center'>
                            <ProfilePic width={42} height={42}/>
                            <h1 className='px-3 text-xl'> 
                                Home
                            </h1>
                        </div>

                        <AutoAwesomeIcon/>
                    </div>
                    <div className='hidden sm:block'>
                        <Tweet/>
                    </div>   
                    <Posts/>
                    <Posts/>
                    <Posts/>
                    <Posts/>
                    <Posts/>
                    <Posts/>
                    <Posts/>
                    <Posts/>
                    <Posts/>
                    <Posts/>
                    <Posts/>
                    <Posts/>
                    <Posts/>
                    <Posts/>
                    <Posts/>
                </div>
                <div className='bg-black overflow-y-scroll hidden lg:block w-[30%] px-5 feed'>
                    <Searchbar />
                    <Trending/>
                </div>
            </div>
        </>
    );
}
