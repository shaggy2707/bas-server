import React from 'react';
import Feature from './Feature';

function FeatureBlocks(props) {
    const feature = props.features.map((feat) =>
        <Feature
            widthFraction={feat.widthFraction}
            imgLink={feat.imgLink}
            headerText={feat.headerText}
            featureText={feat.featureText}
        />
    );
    return (
        <div className='container my-6'>
            <div className="w-full">
                <div className="md:flex md:items-center mb-6 text-center flex-wrap" >
                    {feature}
                </div>
            </div>
        </div>
    );
}

export default FeatureBlocks;
