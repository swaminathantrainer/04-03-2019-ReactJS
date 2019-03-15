import React, { Component } from 'react';
import HeaderComponent from '../common/HeaderComponent';
import Banner from '../common/Banner';
import "./HomePageComponent.css";

const bannerTitle = "SAMPLE TITLE 2";
const bannerSubTitle = "as dasd asd asd asd asd asd as das dasd";
const bannerImages = [
    "https://picsum.photos/300/200",
    "https://picsum.photos/300/200",
    "https://picsum.photos/300/200",
    "https://picsum.photos/300/200",
    "https://picsum.photos/300/200"
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