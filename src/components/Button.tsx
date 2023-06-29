import Link from 'next/link';
import React from 'react'
//props in tsx 
function Button({text,link}:{text:string;link:string}) {
  return (
    <Link href={link} className="button" target='_blank'>{text}</Link>
  )
}

export default Button
