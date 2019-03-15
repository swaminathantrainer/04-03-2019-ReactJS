import React from 'react';
import './Banner.css';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

class Banner extends React.Component {
    render() {
        const { title, subTitle, images } = this.props; // Object Destructuring

        const image1 = images[0];

        return (
            <div className="banner_root">
                <img className="banner_image" src={image1} />
                <div className="arrow_button_holder">
                    <FaChevronLeft className="arrow_button" />
                </div>
                <div className="text_holder">
                    <h3>{title}</h3>
                    <p>{subTitle}</p>
                </div>
                <div className="arrow_button_holder">
                    <FaChevronRight className="arrow_button" />
                </div>
            </div>
        )
    }
};

export default Banner;