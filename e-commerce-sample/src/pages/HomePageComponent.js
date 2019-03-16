import React, { Component } from 'react';
import HeaderComponent from '../common/HeaderComponent';
import Banner from '../common/Banner';
import "./HomePageComponent.css";

const bannerTitle = "SAMPLE TITLE 2";
const bannerSubTitle = "as dasd asd asd asd asd asd as das dasd";
const bannerImages = [
    "https://loremflickr.com/320/240/dog",
    "https://loremflickr.com/g/320/240/paris",
    "https://loremflickr.com/320/240/brazil,rio",
    "https://loremflickr.com/320/240/paris,girl/all",
    "https://loremflickr.com/320/240?random=1"
]

class HomePageComponent extends Component {

    render() {
        return (
            <div className="home_page_cmp_root">
                <HeaderComponent />
                <Banner title={bannerTitle} subTitle={bannerSubTitle} images={bannerImages} />
            </div>
        );
    }
};

export default HomePageComponent;