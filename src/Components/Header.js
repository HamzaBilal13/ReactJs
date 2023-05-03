import React from 'react'
import Navbar from './Navbar'
import Button from './Button'


export const Header = () => {
  return (
    <div class="banner">
        <Navbar />
        <div class="banner-content">
            <div class="container">
                <div class="bannertext p-45">
                    <h3>Pizza Delivery</h3>
                    <h1>MAESTRO PIZINNI</h1>
                    <p>
                        Lorem Ipsum dolor sit amet consectetur adipisicing elit. Excepturi minus ut mollitia error molestiae quia.
                    </p>
                   <Button />
                </div>
            </div>


        </div>
        
        
    </div>
  )
}

export default Header;