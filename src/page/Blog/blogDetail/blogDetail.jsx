import React from 'react'
import CommonHeroSec from '../../../components/CommonHeroSec'
import BlogContent from './blogContent'

const Obj = {
    title: "About Us",
    heading: "Blog Detail",
    subtitle: "The demand for secure, scalable, and future-ready IT infrastructure is reshaping the real estate landscape across India.",
    imgUrl: "/assets/blogs/blog-detail.webp",
    linkTo: "discover-blogs",
    tabs: [
        { tabname: "latest blog", tablink: "latest" }
        , { tabname: "old blog", tablink: "old" }
    ]
}




export default function BlogDetail() {
    return (
        <div className='blog__page bg-[#FBF6F6] mb-14'>
            <CommonHeroSec ObjData={Obj} />
            <BlogContent />
        </div>
    )
}
