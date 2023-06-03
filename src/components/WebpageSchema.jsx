import Head from 'next/head';

export async function getServerSideProps() {
    const aboutData = {
      title: 'About Us',
      description: 'Learn more about our company.',
      // Add more properties as needed
    };
    const jsonLd = {
      '@context': 'http://schema.org',
      '@type': 'WebPage',
      'name': aboutData.title,
      'description': aboutData.description,
      // Add more properties as needed
    };
  
    return {
      props: {
        aboutData,
        jsonLd,
      },
    };
}

const WebpageSchema = () => {
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    "name": "Your Webpage Title",
     
  };

  return (
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  );
};

export default WebpageSchema;