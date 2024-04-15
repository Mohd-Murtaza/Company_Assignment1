import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Image } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const BannerSlider = () => {
	return (
		<Swiper
		style={{"marginBottom":"2%"}}

			// install Swiper modules
			modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
			spaceBetween={50}
			slidesPerView={1}
			navigation
			pagination={{ clickable: true }}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			  }}
			
			onSwiper={(swiper) => console.log(swiper)}
			onSlideChange={() => console.log("slide change")}
		>
			<SwiperSlide>
				<Image
					src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/07e1b1bafa69088c.jpg?q=20"
					alt=""
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image
					src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/ed4591126ff69acb.png?q=80"
					alt=""
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image
					src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/d8d588a48aa73e4e.jpg?q=20"
					alt=""
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Image
					src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/25e306273d3609bc.jpg?q=80"
					alt=""
				/>
			</SwiperSlide>
            <SwiperSlide>
				<Image
					src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f51ebba6c7453058.jpg?q=80"
					alt=""
				/>
			</SwiperSlide>
			
		</Swiper>
	);
};
