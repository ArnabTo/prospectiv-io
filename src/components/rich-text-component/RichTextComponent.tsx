import Image from 'next/image';
import Link from 'next/link';
import { PortableTextComponents } from '@portabletext/react';
import { urlFor } from '@/sanity/lib/image';

const RichTextComponent: PortableTextComponents = {
  types: {
    image: ({ value }: { value: any }) => (
      <div className="my-4">
        <Image
          width={500}
          height={500}
          src={urlFor(value.asset).url()} // Adjust for asset URL if using urlFor helper
          alt={value.alt || 'Content Image'}
          className="rounded-lg"
        />
      </div>
    ),
    callToAction: ({ value, isInline }: { value: any; isInline: boolean }) =>
      isInline ? (
        <Link href={value.url} className="text-blue-500">
          {value.text}
        </Link>
      ) : (
        <div className="callToAction bg-blue-100 p-4 rounded-md my-4">{value.text}</div>
      ),
  },

  marks: {
    link: ({ children, value }: { children?: React.ReactNode; value?: any }) => {
      const rel = !value?.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <Link href={value?.href} className="text-blue-500" rel={rel}>
          {children}
        </Link>
      );
    },
  },
  
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc list-inside mt-2 mb-4">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal list-inside mt-2 mb-4">{children}</ol>
    ),
    checkmarks: ({ children }: { children?: React.ReactNode }) => (
      <ol className="m-auto text-lg list-none">{children}</ol>
    ),
  },

  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li style={{ listStyleType: 'disc' }} className="ml-4 text-textColorTwo">
        {children}
      </li>
    ),
    checkmarks: ({ children }: { children?: React.ReactNode }) => (
      <li className="ml-4">✅ {children}</li>
    ),
  },

  block: {
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="text-4xl font-bold mt-4 mb-2">{children}</h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-3xl font-semibold mt-4 mb-2">{children}</h2>
    ),
    p: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-4xl text-textColorTwo ">{children}</p>
    ),
    span: ({ children }: { children?: React.ReactNode }) => (
      <span className="text-md text-textColorTwo">{children}</span>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-700 my-4">
        {children}
      </blockquote>
    ),
    customHeading: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-lg text-purple-700 font-medium">{children}</h2>
    ),
  },
};

export default RichTextComponent;
