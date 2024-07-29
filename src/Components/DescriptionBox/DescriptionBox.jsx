import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionBox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>

            <div className="descriptionbox-description">
                <p>
                    Providing goods and services isn't as easy as it may seem. It requires a lot of research about the products and services you wish to sell, the market, audience, competition, as well as expected business costs.
                </p>
                <p>
                    An ecommerce business uses digital methods to sell products and services to customers. Ecommerce businesses can be online-only or have a physical presence as well. Selling to customers online typically requires a website or digital storefront, plus a way to process payments digitally and ship orders to customers.
                </p>
            </div>

        </div>
    )
}

export default DescriptionBox
