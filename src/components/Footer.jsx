import Link from 'next/link'
import React from 'react'
 
const Footer = () => {
  return (
<div className="card mt-3">
  <div className="card-header text-center">
    Footer Section
  </div>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <Link href='/'>Go somewhere</Link>
  </div>
</div>
  )
}

export default Footer