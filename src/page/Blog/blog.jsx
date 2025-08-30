import React from 'react'
import CommonHeroSec from '../../components/CommonHeroSec'
import BlogDataMain from './BlogDataMain';

const Obj = {
    title: "About Us",
    heading: "Our Blogs",
    subtitle: "Thoughtfully designed homes that blend comfort, elegance, and modern living,  offering serene spaces that elevate everyday lifestyles",
    imgUrl: "/assets/blogs/blog.webp",
    linkTo: "discover-blogs",
    tabs: [
        { tabname: "latest blog", tablink: "latest" }
        , { tabname: "old blog", tablink: "old" }
    ]
}


export default function blog() {

    return (
        <div className='blog__page bg-[#FBF6F6] mb-14'>
            <CommonHeroSec ObjData={Obj} />
            <BlogDataMain />
        </div>
    )
}
