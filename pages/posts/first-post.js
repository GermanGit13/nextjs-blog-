import Link from 'next/link'; //Importamos Link para poder realizar llamadas desde otras pages
import Head from 'next/head'; 
//import Script from 'next/script'; //es una extensión del <script>elemento HTML y optimiza cuando se obtienen y ejecutan scripts adicionales.
import Layout from '../../components/layouts';

export default function FirstPost() {
    return (
    
      <Layout>
        <Head>
            <title>First Post</title>
        </Head>
        {/* <Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
            }
        /> */}
        <h1>First Post</h1> 
        <h2>
          <Link href="/">Back to home desde first-post</Link>
        </h2>
      </Layout>
    );
  }