import { Helmet } from 'react-helmet'

import * as React from 'react'

const ImageBack = ( {image} ) => {
  return (
    <Helmet>
         <div>{ `${image}` }</div>
  </Helmet>
  )
}

export default ImageBack
