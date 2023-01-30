import React from 'react'

function FormatPrice({price}) {
  return (
    Intl.NumberFormat("en-IN",{
      //style:'currency',
      //currency:'RUPEES',
      maximumFractionDigits:2,
    }).format(price)
  )
}

export default FormatPrice