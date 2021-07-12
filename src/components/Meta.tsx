import Head from 'next/head'
import {metadata} from '@data/meta'

const Meta = () => {
  return (
    <Head>
      {/* <meta charset="utf-8"/> */}
      <link rel="icon" href="https://cdn.farmako.in/favicon.ico"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta
              name="description"
              content={metadata.content}
      />
      <link rel="apple-touch-icon" href="https://cdn.farmako.in/favicon-192x192.png"/>
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json"/>
      <title>{metadata.title}</title>
      <meta name="title" content={metadata.title}/>
      <meta name="description" content={metadata.content}/> 
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://farmako.in/"/>
      <meta property="og:title" content={metadata.title}/>
      <meta property="og:description" content={metadata.content}/>
      <meta property="og:image" content={metadata.image}/>
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://farmako.in/"/>
      <meta property="twitter:title" content={metadata.content}/>
      <meta property="twitter:description" content={metadata.content}/>
      <meta property="twitter:image" content={metadata.image}/>
      <title>{metadata.title}</title>
    </Head>
  )
}

export default Meta