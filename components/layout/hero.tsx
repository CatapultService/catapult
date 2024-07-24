import React from 'react';

export default function Hero() {
    return (
        <>
            <div 
                className='relative w-full text-white h-40 sm:h-72 md:h-80 lg:h-88 xl:h-[40rem] flex items-center justify-center'
            >
                <video 
                    className='absolute top-0 left-0 w-full h-full object-cover z-0'
                    autoPlay
                    loop
                    muted
                >
                    <source src="assets/Catapult.mp4" type="video/mp4" />
                </video>
                <div className='relative text-left z-10'>
                    <p className='tracking-widest px-32 text-xl sm:text-2xl md:text-4xl lg:text-8xl xl:text-8xl font-bold'>
                        We make the complex, human
                    </p>
                </div>
            </div>

            <div className='text-center bg-[#021836]'>
                <p className='tracking-widest text-white py-20 px-40 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold'>
                    Across the Pond is a global, independent creative agency helping technology companies create a better world.
                </p>

                <p className='tracking-widest text-white pb-20 px-40 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold'>
                    We make the complex, human <br/>
                    by building emotional connections and finding meaning between people and tech.
                </p>
            </div>
        </>
    );
}