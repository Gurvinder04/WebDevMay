import React from 'react'

function FormatPrice({price}) {
  return (
    Intl.NumberFormat("nl-BE",{
      style:'currency',
      currency:'EUR',
      maximumFractionDigits:2,
    }).format(price /100)
  )
}

export default FormatPrice