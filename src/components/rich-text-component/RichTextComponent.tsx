import Image from 'next/image';
import Link from 'next/link';
import { PortableTextComponents } from '@portabletext/react';
import { urlFor } from '@/sanity/lib/image';
import { slugify } from '@/utils/helper';

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
      <li style={{ listStyleType: 'disc' }} className="ml-4 text-textColorTwo font-light">
        {children}
      </li>
    ),
    checkmarks: ({ children }: { children?: React.ReactNode }) => (
      <li className="ml-4">✅ {children}</li>
    ),
  },

  
  block: {
    h2: ({ value }: any) => (
      <h2
        id={slugify(value.children[0].text)}
        className="text-3xl font-bold mb-3"
      >
        {value.children[0].text}
      </h2>
    ),
    h3: ({ value }: any) => (
      <h3
        id={slugify(value.children[0].text)}
        className="text-2xl font-bold mb-3"
      >
        {value.children[0].text}
      </h3>
    ),
    h4: ({ value }: any) => (
      <h4
        id={slugify(value.children[0].text)}
        className="text-2xl font-bold mb-3"
      >
        {value.children[0].text}
      </h4>
    ),
    h5: ({ value }: any) => (
      <h5
        id={slugify(value.children[0].text)}
        className="text-2xl font-bold mb-3"
      >
        {value.children[0].text}
      </h5>
    ),
    h6: ({ value }: any) => (
      <h6
        id={slugify(value.children[0].text)}
        className="text-xl font-bold mb-3"
      >
        {value.children[0].text}
      </h6>
    ),
    p: ({ value }: any) => (
      <p
        id={slugify(value.children[0].text)}
        className="text-lg font-bold text-textColorTwo"
      >
        {value.children[0].text}
      </p>
    ),
  },
};

export default RichTextComponent;
