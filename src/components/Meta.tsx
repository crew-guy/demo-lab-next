import Head from 'next/head'
import {metadata} from '@data/meta'
const favicon_ico = "https://cdn.farmako.in/favicon.ico"
const favicon_png = "https://cdn.farmako.in/favicon-192x192.png"
const farmako_website = "https://farmako.in/"


const Meta = () => {
  return (
    <Head>
      <link rel="icon" href={favicon_ico} />
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta
              name="description"
              content={metadata.content}
      />
      <link rel="apple-touch-icon" href={favicon_png} />
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json"/>
      <title>{metadata.title}</title>
      <meta name="title" content={metadata.title}/>
      <meta name="description" content={metadata.content}/> 
      <meta property="og:type" content="website"/>
      <meta property="og:url" content={farmako_website} />
      <meta property="og:title" content={metadata.title}/>
      <meta property="og:description" content={metadata.content}/>
      <meta property="og:image" content={metadata.image}/>
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content={farmako_website} />
      <meta property="twitter:title" content={metadata.content}/>
      <meta property="twitter:description" content={metadata.content}/>
      <meta property="twitter:image" content={metadata.image}/>
      <title>{metadata.title}</title>
    </Head>
  )
}

export default Meta