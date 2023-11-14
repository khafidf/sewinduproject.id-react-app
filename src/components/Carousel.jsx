import React from "react";
import Slider from "react-slick";

export const Carousel = ({ content }) => {
	const setting = {
		infinite: true,
		arrows: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1124,
				settings: {
					centerMode: true,
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					centerMode: true,
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
				},
			},
			{
				breakpoint: 648,
				settings: {
					centerMode: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				},
			},
		],
	};
	return (
		<Slider {...setting}>
			{content.map((item, index) => {
				return (
					<div className="px-4" key={index}>
						{item}
					</div>
				);
			})}
		</Slider>
	);
};
