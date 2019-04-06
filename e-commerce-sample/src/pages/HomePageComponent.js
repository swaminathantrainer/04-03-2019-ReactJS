import React, { Component } from 'react';
import Banner from '../common/Banner';
import "./HomePageComponent.css";
import ItemListingComponent from '../components/ItemListingComponent';

const bannerTitle = "SAMPLE TITLE 2";
const bannerSubTitle = "as dasd asd asd asd asd asd as das dasd";
const bannerImages = [
    "https://loremflickr.com/600/240/dog",
    "https://loremflickr.com/g/600/240/paris",
    "https://loremflickr.com/600/240/brazil,rio",
    "https://loremflickr.com/600/240/paris,girl/all",
    "https://loremflickr.com/600/240?random=1"
]

class HomePageComponent extends Component {

    render() {
        return (
            <div className="home_page_cmp_root">
                <div style={{ marginTop: '4px', marginBottom: '4px' }}>
                    <Banner title={bannerTitle} subTitle={bannerSubTitle} images={bannerImages} />
                </div>
                <ItemListingComponent />
            </div>
        );
    }
};

export default HomePageComponent;