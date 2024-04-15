import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper.min.css";
// import "swiper/components/navigation/navigation.min.css";
// import "swiper/components/pagination/pagination.min.css";
import { SimpleGrid, Card, CardBody, Text } from "@chakra-ui/react";
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
  } from "swiper/modules";
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/scrollbar";

const Slider = () => {
  // Array of objects containing data for each card
  const cardsData = [
    {
      id: 1,
      imageSrc:
        "https://rukminim2.flixcart.com/image/420/420/xif0q/mobile/u/h/7/edge-40-neo-payj0004in-motorola-original-imagtkezzam4qxfq.jpeg?q=60",
      text1: "Edge 40 Neo",
      text2: "Motorola",
      
    },
    {
      id: 2,
      imageSrc:
        "https://rukminim2.flixcart.com/image/420/420/xif0q/mobile/g/b/x/-original-imagtt4h4ptmxgwn.jpeg?q=60",
      text1: "Some Phone",
      text2: "Brand",
      
    },
    {
      id: 3,
      imageSrc:
        "https://rukminim2.flixcart.com/image/420/420/xif0q/mobile/d/3/g/-original-imagy2v5ggthbvfe.jpeg?q=60",
      text1: "Another Phone",
      text2: "Brand",
     
    },
    {
      id: 4,
      imageSrc:
        "https://rukminim2.flixcart.com/image/420/420/xif0q/mobile/u/v/h/-original-imagxaqtzmqgtfen.jpeg?q=60",
      text1: "Phone X",
      text2: "Brand",
      
    },
    {
      id: 5,
      imageSrc:
        "https://rukminim2.flixcart.com/image/420/420/xif0q/mobile/p/r/q/x6-neo-5g-mzb0ggrin-poco-original-imagyxngnrhzx96z.jpeg?q=60",
      text1: "X6 Neo 5G",
      text2: "Poco",
      
    },
    {
      id: 6,
      imageSrc:
        "https://rukminim2.flixcart.com/image/420/420/xif0q/mobile/a/c/k/-original-imagtc5fuzkvczr7.jpeg?q=60",
      text1: "Phone Z",
      text2: "Brand",
      
    },
    {
      id: 7,
      imageSrc:
        "https://rukminim2.flixcart.com/image/420/420/xif0q/mobile/w/i/d/-original-imagwzrguaee4pz6.jpeg?q=60",
      text1: "Phone Y",
      text2: "Brand",
      
    },
    {
      id: 8,
      imageSrc:
        "https://rukminim2.flixcart.com/image/420/420/xif0q/mobile/d/3/g/-original-imagy2v5ggthbvfe.jpeg?q=60",
      text1: "Another Phone",
      text2: "Brand",
     
    },
    // Add more objects as needed for each card
  ];

  return (
    <Swiper
  slidesPerView={6}
  spaceBetween={50}
  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
  navigation
  pagination={{ clickable: true }}
  // navigation
>
  {cardsData.map((card) => (
    <SwiperSlide key={card.id}>
      <SimpleGrid spacing={5} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
        <Card padding={0} margin={0}>
          <CardBody>
            <img
              style={{ width: '90%', height: '220px',padding:"8px", margin:"10px" }} // Adjust height and width as needed
              src={card.imageSrc}
              alt=""
            />
            <Text>{card.text1}</Text>
            <Text fontWeight="bold">{card.text2}</Text>
          </CardBody>
        </Card>
      </SimpleGrid>
    </SwiperSlide>
  ))}
</Swiper>
  );
};

export default Slider;
