import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './index.scss';
export default class ConceptVideos extends Component {
    render = () => {
        const multipleItems = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            arrows: true,
            slidesToScroll: 1,
            className: 'slides',
            centerMode:true,
            centerPadding:'70',
        };
        return (
            <Slider {...multipleItems} style={{ background: '#c2c7c2',padding:'100px',margin:'10px 100px 10px 100px'}} class="for_slick_slider">
                    <div className="items">
                        <img src={"https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg"}  alt="" />
                    </div>
                    <div className="items" >
                        <img src={"https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg"}  alt="" />
                    </div>
                    <div className="items">
                        <img src={"https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg"}  alt="" />
                    </div>
                    <div className="items">
                        <img src={"https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg"}  alt="" />
                    </div>
                    <div >
                        <img src={"https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg"}  alt="" />
                    </div>
                    <div className="items">
                        <img src={"https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg"}  alt="" />
                    </div>
                    <div className="items">
                        <img src={"https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg"}  alt="" />
                    </div>
                    <div >
                        <img src={"https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg"}  alt="" />
                    </div>
                </Slider>
        )
    }
}