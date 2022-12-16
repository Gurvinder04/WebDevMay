import React from 'react'

function FormatPrice({price}) {
  return (
    Intl.NumberFormat("nl-BE",{
      style:'currency',
      currency:'EUR',
      maximumFractionDigits:2,
    }).format(price)
  )
}

export default FormatPrice