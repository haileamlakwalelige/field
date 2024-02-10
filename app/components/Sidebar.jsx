"use client"

import React, {useState} from 'react'

const Sidebar = () => {
    const [show, setShow]=useState(1)
  return (
    <div className=''>
        <div>
            <div>
                <p>Books1</p>
                <div>
                    <p>Book1</p>
                    <p>Book1</p>
                    <p>Book1</p>
                    <p>Book1</p>
                    <p>Book1</p>
                    <p>Book1</p>
                </div>

                {/* Second  */}
                <p>Books2</p>
                <div>
                    <p>Book2</p>
                    <p>Book</p>
                    <p>Book2</p>
                    <p>Book2</p>
                    <p>Book2</p>
                    <p>Book2</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar