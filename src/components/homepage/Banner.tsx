import React from 'react';
import bannerImg from '@/assets/hero.png'
import Image from 'next/image';

const Banner = () => {
    return (
        <div className=' space-y-[30px] pt-8 bg-gray-100 rounded-lg shadow-md text-center'>
            <h2 className=' font-bold text-4xl '>We Build <br/> <span className='text-purple-500'> Productive Apps</span></h2>
            <p className='max-w-[700px] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis veniam consequatur quas adipisci quos dolorem nisi, obcaecati cum ratione suscipit tempora unde, alias ipsam atque laudantium temporibus architecto vitae corporis!</p>
            <div className='flex justify-center items-center gap-2 '>
                <button className="btn btn-success">Google Play</button>
                <button className="btn btn-warning">App Store</button>
            </div>
            <Image src={bannerImg} alt='bannerimge' className='w-[750px] h-auto mx-auto' ></Image>
        </div>
    );
};

export default Banner;