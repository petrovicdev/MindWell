import React from 'react';
import ProfilePic from '../profilePic/profilePic';
import VerifiedIcon from '@mui/icons-material/Verified';

export default function Posts() {
    return (
        <>
            <div className='px-3 pt-5 flex gap-2'>
                <div className=''>
                    <ProfilePic width={50} height= {50}/>

                    {/* <div className='border-l-[2px] border-gray-700 h-[120px] ml-7 my-2'/> */}

                    <div className='w-[1px] h-[83%] bg-gray-500 relative left-1/2'/>

                    {/* <div className='border-l-[2px] border-gray-700 h-[120px] ml-7 my-2'/> */}

                    {/* <span className='relative left-[0.28rem]'>
                        <ProfilePic  width={42} height= {42}/>
                    </span> */}
                </div>
                
                
                

                <div className='ml-2'>
                    <div className='cursor-pointer'>
                        <span className='gap-8'>
                            Samuel😊 
                            <VerifiedIcon 
                                fontSize="small" 
                                sx={{ color: 'red-[#1D9BF0]' }}
                            />
                        </span>
                        <span className='opacity-50 text-sm'> 
                            @getsomemaidens . 13h
                        </span> 
                    </div>
                    <div className='mt-1 text-[0.9rem]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum!. Provident similique accusantium nemo autem. Veritatis
                        obcaecati tenetur iure eius earum ut molestias architecto 
                    </div>
                    <div>
                        hehe
                    </div>
                </div>
            </div>
            <div className='px-[1.20rem] flex items-center pb-5 mt-0'>
                <ProfilePic  width={38} height= {38}/>
                <div className='px-5 text-[#1D9BF0] text-sm leading-tight cursor-pointer mt-1'>
                    Show this thread
                </div>
            </div>
            <hr className='w-full border-gray-700' />
        </>
    );
}
