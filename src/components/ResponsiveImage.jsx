import Image from 'next/image';

export default function ResponsiveImage({ small, big, alt }) {
  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={big} />
      <Image
        src={small}
        alt={alt}
        width={600}
        height={400}
        style={{ width: '90%', height: 'auto', margin: '0 auto' }}
      />
    </picture>
  );
}
