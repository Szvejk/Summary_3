import React from 'react'

const footerData = {
  link1: "/link1",
  documents: "/documents",
  documentation: "/documentation",
};

export const Footer = () => {
  return (
    <ul>
      {Object.entries(footerData).map(el=>{
        return <a key={el[0]} href={el[0]}><li>{el[1]}</li></a>
      })}
    </ul>
  )
}

