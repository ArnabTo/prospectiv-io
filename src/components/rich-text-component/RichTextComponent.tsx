import Image from 'next/image';
import Link from 'next/link';
import { PortableTextComponents } from '@portabletext/react';
import { urlFor } from '@/sanity/lib/image';
import { slugify } from '@/utils/helper';

export const RichTextComponent = {
  types: {
   image: ({value}: any) => {
      return (
       <div className='relative w-full h-96 m-10 mx-auto'>
             <Image
             className='object-contain'
             src={urlFor(value.asset).url()}
             alt='blog_thumbnail'
             fill
             />
       </div>
      );
},
},
list: {
  bullet: ({children}: any) => (
    <ul className="ml-10 py-5 list-disc text-lg">{children}</ul>
  ),
  number: ({children}: any) => (
    <ol className="mt-lg list-decimal">{children}</ol>
  ),
},
block:{
  h1: ({children}: any) => (
    <h1 className='text-5xl py-10 font-bold'>{children}</h1>
  ),
  h2: ({value}: any) => (
    <h2 
    id={slugify(value.children[0].text)}
    className='text-3xl pt-10 pb-1 font-bold text-secondary'>{value.children[0].text}</h2>
  ),
  h3: ({value}: any) => (
    <h3 
    id={slugify(value.children[0].text)}
    className='text-2xl py-10 font-bold'>{value.children[0].text}</h3>
  ),
  h4: ({value}: any) => (
    <h4 
    id={slugify(value.children[0].text)}
    className='text-xl py-10 font-bold'>{value.children[0].text}</h4>
  ),
  blockqote: ({children}: any) => (
    <blockquote className='border-l-4 border-gradientColorTwo pl-5 py-5 my-5'>
      {children}
      </blockquote>
  ),
  normal: ({children}: any) => (
    <p className='text-xl text-textColorTwo'>{children}</p>
  ),
},
marks:{
  link: ({children, value}: any) => {
    const rel = !value?.href.startsWith('/') ? 'noreferrer noopener' : undefined;
    return (
      <Link href={value?.href} 
      className='underline text-gradientColorOne decoration-gradientColorOne hover:decoration-black' 
      rel={rel}>{children}</Link>
    );
  }
}

}

