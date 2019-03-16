import React from 'react';
import './Banner.css';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

class Banner extends React.Component {
    state = {
        currentImagePos: 0,
        loading: true
    }

    decreaseImagePosition() {
        const { images } = this.props; // Object Destructuring
        const { currentImagePos } = this.state;

        let newImagePosition = currentImagePos - 1;

        if (newImagePosition < 0) {
            newImagePosition = images.length - 1;
        }

        this.setState({
            currentImagePos: newImagePosition,
            loading: true
        });
    }

    increaseImagePosition() {
        const { images } = this.props; // Object Destructuring
        const { currentImagePos } = this.state;

        let newImagePosition = currentImagePos + 1;

        if (newImagePosition > images.length - 1) {
            newImagePosition = 0;
        }

        this.setState({
            currentImagePos: newImagePosition,
            loading: true
        });
    }

    render() {
        const { title, subTitle, images } = this.props; // Object Destructuring
        const { currentImagePos, loading } = this.state;

        const img = images[currentImagePos];

        return (
            <div className="banner_root">
                <div className="banner_image_holder">
                    <img className="banner_image" src={img} onLoad={() => {
                        this.setState({ loading: false })
                    }} />
                </div>
                <div className="content_holder">
                    <div className="arrow_button_holder" onClick={() => {
                        this.decreaseImagePosition();
                    }}>
                        <FaChevronLeft className="arrow_button" />
                    </div>
                    <div className="text_holder">
                        <h3>{title}</h3>
                        <p>{subTitle}</p>
                    </div>
                    <div className="arrow_button_holder" onClick={() => {
                        this.increaseImagePosition()
                    }}>
                        <FaChevronRight className="arrow_button" />
                    </div>
                </div>
                {loading && <p className="banner_loading">Loading...</p>}
            </div>
        )
    }
};

export default Banner;