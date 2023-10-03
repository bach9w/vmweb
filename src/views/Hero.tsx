// assets
import homePageImg from '../assets/abstractbackground.jpg';
import homePageImg2 from '../assets/abstractbackground_white.jpg';

import logo from '../assets/logo.png';
import homePageIllustation from '../assets/builderHome.svg';
import downloadIcon from '../assets/download-btn-icon.svg';

// components
import { Button } from '../components';

// react-simple-typewriter
import { Typewriter } from 'react-simple-typewriter';

// framer-motion
import { motion } from 'framer-motion';

// utils
import { transition } from '../utils/transition';
import { fadeIn, scale } from '../utils/variants';

import React, { useState } from 'react';

const Hero = () => {
	const [backgroundImage, setBackgroundImage] = useState(homePageImg);

	const changeBackground = () => {
		setBackgroundImage(
			backgroundImage === homePageImg2 ? homePageImg : homePageImg2,
		);
	};
	return (
		<>
			<div
				id="home"
				className="min-h-screen flex items-top justify-center relative"
				style={{
					background: `url(${backgroundImage})`,
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}
			>
				<div className="right-1 absolute w-1/4 top-2">
					<Button onClick={changeBackground}>Change</Button>
				</div>
				<div className="fixed flex left-5 top-5 ">
					<img src={logo} alt="logo" width={50} height={50} />
				</div>
				<div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12">
					<div className="w-full xl:w-fit">
						<h1 className="w-full xl:w-fit text-center xl:text-start text-4xl sm:text-6xl lg:text-8xl font-bold text-textPrimary uppercase">
							VM-STROY
							<br />
							<span className="text-purple-500 ">
								<Typewriter
									words={['СТРОИТЕЛСТВО', 'КОНСТРУКЦИИ', 'ОБЗАВЕЖДАНЕ']}
									cursor
									cursorStyle="_"
									typeSpeed={100}
									deleteSpeed={50}
									loop
								/>
							</span>
						</h1>

						<div className="my-12 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start">
							<Button secondary>Hire us</Button>
							<Button icon={downloadIcon}>Download PORTFOLIO</Button>
						</div>
					</div>
				</div>

				<div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
			</div>

			<div className="absolute bottom-0">
				<img src={homePageIllustation} alt="home page illustration" />
			</div>
		</>
	);
};

export default Hero;
