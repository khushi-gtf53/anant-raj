import React from 'react'
import { Link } from 'react-router-dom';

const truncateTitle = (title, maxWords = 5) => {
    const words = title.split(' ');
    if (words.length > maxWords) {
        return words.slice(0, maxWords).join(' ') + '...';
    }
    return title;
};



export default function BlogCard({ blogsData }) {
    const truncatedTitle = truncateTitle(blogsData?.title, 9);

    return (
        <div className='blog__card w-full group'>
            <Link
                to={blogsData?.slug}
                className='block'
            >
                <figure className='fig__img'>
                    <img
                        src={blogsData?.img}
                        alt={blogsData?.alt || "blog img"}
                        className='max-w-full w-full lg:max-h-[470px] object-cover'
                    />
                </figure>
                <div className='content__div'>
                    <div className='py-8'>
                        <h3 className='inline-block font-lato text-[20px] font-[400] tracking-[1px] leading-[30px]'>
                            {truncatedTitle}
                            <span className='inline-flex items-center pl-6 text-[15px] relative bottom-[3px]'>
                                <span className='block w-[80px] bg-gray-300 h-[2px] mr-5'></span>
                                <span>{blogsData.date}</span>
                            </span>
                        </h3>
                    </div>
                </div>
                <button className='text-primaryblue block py-[9px] px-12 border-y uppercase font-[600]'>Explore more</button>
            </Link>
        </div>
    )
}
