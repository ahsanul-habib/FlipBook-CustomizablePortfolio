import React from 'react';
import {Helmet, HelmetProvider} from 'react-helmet-async'

const HeadTag=()=> {
  return (
    <HelmetProvider>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
    </Helmet>
    </HelmetProvider>
  )
}

export default HeadTag
