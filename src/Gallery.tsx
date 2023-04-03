import React from 'react'

interface GalleryProps{
    children: React.ReactNode
}

export const Gallery = ({children}:GalleryProps) => {

    return (
    <div>{children}</div>
  )
}
