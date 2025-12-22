import React from 'react'
import Home from './Home'
import ShopByCategory from './ShopByCategory'
import EasyOrderingProcess from './EasryOdringProcess'
import OurBestSeller from './OurBestSeller'
import OurAllProduct from './OurAllProduct'
import Reviews from './Reviews'

const Hero = () => {
    return <>
        <div>
            <Home />
            <ShopByCategory />
            <OurBestSeller />
            <EasyOrderingProcess />
            <OurAllProduct />
            <Reviews />
        </div>
    </>
}

export default Hero