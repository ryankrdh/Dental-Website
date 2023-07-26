import '@fontsource/josefin-sans';
import { Col, Row } from 'react-bootstrap';
import React, { useEffect } from 'react';
import AOS from 'aos';
import leftHand from '../../../Images/a-left-hand.png';
import rowTeeth from '../../../Images/a-row-teeth.png';
import rightHand from '../../../Images/a-right-hand.png';
import './HomeBanner.css';

const Banner = () => {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
		AOS.refresh();
	}, []);
	return (
		<section className="single-hero-slide ">
			<Row className="align-items-center">
				<Col xs={4} md={4} sm={4} lg={4}>
					<div className="hero-slide-right">
						<div className="animate-img">
							<img
								src={rightHand}
								alt=""
								className="img-fluid right-hand"
								data-aos="zoom-in"
							/>
						</div>
					</div>
				</Col>
				<Col xs={4} md={4} sm={4} lg={4}>
					<div className="hero-slide-phrase" data-aos="zoom-in">
						<h2>Look forward to the dentist</h2>
						<p>Your Smile Deserves Our Highest Attention</p>
					</div>
				</Col>
				<Col xs={4} md={4} sm={4} lg={4}>
					<div className="hero-slide-right">
						<div className="animate-img">
							<img
								src={leftHand}
								alt=""
								className="img-fluid left-hand"
								data-aos="zoom-in"
							/>
						</div>
					</div>
				</Col>

				<Col xs={12} md={12} sm={12} lg={12}>
					<div className="">
						<img src={rowTeeth} alt="" className="img-fluid heroRowTeeth" />
					</div>
				</Col>
			</Row>
		</section>
	);
};

export default Banner;
