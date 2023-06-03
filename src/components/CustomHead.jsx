import Head from 'next/head';

const CustomHead = ({ title, description, canonicalUrl }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Head>
  );
};

export default CustomHead;
