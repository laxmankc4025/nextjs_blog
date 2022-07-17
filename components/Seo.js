import React from "react";
import Head from "next/head";
function Seo() {
  return (
    <div>
      <Head>
        <title>Blog Site!</title>
        <meta
          name="description"
          content="We bring you the future as it happens. From the latest in science and technology to the big stories in business and culture, we've got you covered."
        />
        <meta
          property="og:title"
          content="We bring you the future as it happens."
        />
        <meta
          property="og:description"
          content="We bring you the future as it happens. From the latest in science and technology to the big stories in business and culture, we've got you covered."
        />
        <meta property="og:url" content="https://namxal.netlify.app/" />
        <meta property="og:type" content="website" />
      </Head>
    </div>
  );
}

export default Seo;
