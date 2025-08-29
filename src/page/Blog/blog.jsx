import React from 'react'
import CommonHeroSec from '../../components/CommonHeroSec'
import BlogCard from './blogCard';
import BlogDataMain from './BlogDataMain';

const Obj = {
    title: "About Us",
    heading: "Our Blogs",
    subtitle: <span>Thoughtfully designed homes that blend comfort, elegance, and modern living,  <span className="lg:block hidden"></span> offering serene spaces that elevate everyday lifestyles.</span>,
    imgUrl: "/assets/blogs/blog.webp",
    linkTo: "discover-blogs",
    tabs: [
        { tabname: "latest blog", tablink: "latest" }
        , { tabname: "old blog", tablink: "old" }
    ]
}

const blogsData = {
    latest: [
        {
            img: '/assets/blogs/blog-1.webp',
            alt: 'blog 1',
            title: 'Anant Raj Manesar: Pioneering Innovation at the Heart of IT  Innovation at the Heart of IT ',
            slug: 'blog-1',
            date: '2025-07-29'
        },
        {
            img: '/assets/blogs/blog-2.webp',
            alt: 'blog 1',
            title: 'Township Living Redefined: The Rise of Integrated Communities',
            slug: 'blog-1',
            date: '2025-07-29'
        },
    ],

    old: [
        {
            img: '/assets/blogs/blog-1.webp',
            alt: 'blog 1',
            title: 'Anant Raj Manesar: Pioneering Innovation at the Heart of IT  Innovation at the Heart of IT ',
            slug: 'blog-1',
            date: '2025-07-29'
        },
        {
            img: '/assets/blogs/blog-2.webp',
            alt: 'blog 1',
            title: 'Township Living Redefined: The Rise of Integrated Communities',
            slug: 'blog-1',
            date: '2025-07-29'
        },
    ]

}

export default function blog() {

    return (
        <div className='blog__page bg-[#FBF6F6] mb-14'>
            <CommonHeroSec ObjData={Obj} />
            <BlogDataMain blogsData={blogsData} />

        </div>
    )
}
