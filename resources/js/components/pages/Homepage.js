import React from "react";
import FeatureBlocks from "../pageparts/FeatureBlocks";

export default function Homepage() {
    const featureBlocks = [
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
    ];
    return (
        <div>
            <div className="container my-3">
                <h3 className="text-xl bold text-center font-bold">Hoe werkt het</h3>
                <FeatureBlocks features={featureBlocks} />
            </div>
        </div>
    )
}

