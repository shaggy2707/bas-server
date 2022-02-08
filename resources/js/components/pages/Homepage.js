import React from "react";
import BannerBlock from "../pageparts/BannerBlock";
import FeatureBlocks from "../pageparts/FeatureBlocks";

export default function Homepage() {
    const featuringBlocks = [
        {
            widthFraction: '1/4',
            imgLink: './images/locatie.png',
            headerText: 'Voer jouw locatie in',
            featureText: 'Vind alle klinieken en artsen bij jou in de buurt.'
        },
        {
            widthFraction: '1/4',
            imgLink: './images/behandeling.png',
            headerText: 'Voer jouw locatie in',
            featureText: 'Vind alle klinieken en artsen bij jou in de buurt.'
        },
        {
            widthFraction: '1/4',
            imgLink: './images/kiezen.png',
            headerText: 'Voer jouw locatie in',
            featureText: 'Vind alle klinieken en artsen bij jou in de buurt.'
        },
        {
            widthFraction: '1/4',
            imgLink: './images/afspraak.png',
            headerText: 'Voer jouw locatie in',
            featureText: 'Vind alle klinieken en artsen bij jou in de buurt.'
        }
        /*<FeatureBlocks features={featuringBlocks} />*/
    ];
    return (
        <div>
            <BannerBlock />
            <div className="home-features container my-3">
                <h3 className="text-xl bold text-center font-bold">Hoe werkt het</h3>

            </div>
        </div>
    )
}

