import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

function BannerBlock() {
    const BannerC = 'banner';
    const BannerContent = (
        <ParallaxBanner
            layers={[
            {
                image: './images/homepage-banner.78eb5efd.jpg',
                speed: -20,
            },
            ]}
            style={{ aspectRatio: '2 / 1' }}
        />
    );
    return (
        <div className="banner">
            {BannerC}
            <div ref={BannerContent.ref} />
        </div>
    );
}

export default BannerBlock;
