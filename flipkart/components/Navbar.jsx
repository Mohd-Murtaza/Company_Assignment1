import { Box, Button, Flex, Input } from "@chakra-ui/react";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoHeartOutline } from "react-icons/io5";
import { LiaGiftSolid } from "react-icons/lia";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiUserCircleLight } from "react-icons/pi";
import { RiCustomerService2Fill } from "react-icons/ri";
import "./styles/dropdown.css";
import "./styles/threedot.css";
import { GrOrderedList } from "react-icons/gr";
import { BsCart3 } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgSoftwareDownload } from "react-icons/cg";
import { BsThreeDotsVertical } from "react-icons/bs";
const Navbar = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <Flex
        color={"black"}
        p={2}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
            alt=""
          />
        </Box>
        <Flex position={"relative"} width={"35%"}>
          <Box position={"absolute"} top={2} left={2}>
            <IoSearchOutline color={"gray"} size={28} />
          </Box>
          <Input
            paddingLeft={"10%"}
            size={"md"}
            width={"100%"}
            type="text"
            placeholder="Search for products, brands and more"
          />
        </Flex>
        <Box className="category">
          <Flex
            gap={2}
            fontSize={"lg"}
            size={"lg"}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <PiUserCircleLight fontSize={"28"} />
            <h3 style={{ fontSize: "18px", fontWeight: "500" }}>Login</h3>
            <RiArrowDropDownLine
              size={"35"}
              style={
                isHovered
                  ? { transform: "rotate(180deg) ", transitionDuration: "0.5s" }
                  : { transform: "rotate(0deg)" }
              }
            />
          </Flex>

          {isHovered && (
            <Box
              color={"black"}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="dropdown-menu dropDownList"
              style={{ color: "black" }}
              width={"20%"}
              size={"lg"}
            >
              <p style={{ fontSize: "18px" }}>
                <PiUserCircleLight style={{ fontSize: "28px" }} /> My Profile
              </p>

              <p style={{ fontSize: "18px" }}>
                {" "}
                <FaArrowTrendUp /> Flipkart Plus Zone
              </p>
              <p>
                {" "}
                <GrOrderedList /> Orders
              </p>
              <p style={{ fontSize: "18px" }}>
                {" "}
                <IoHeartOutline style={{ fontSize: "26px" }} /> Wishlist
              </p>
              <p style={{ fontSize: "18px" }}>
                <LiaGiftSolid style={{ fontSize: "23px" }} />
                Rewards
              </p>
              <p style={{ fontSize: "18px" }}>
                <RiCustomerService2Fill /> Gift Cards
              </p>
            </Box>
          )}
        </Box>
        <Button marginLeft="0px" backgroundColor={"white"}>
          <BsCart3 style={{ fontSize: "20px" }} />
          <h3 style={{ fontSize: "18px", marginLeft: "3px" }}>Cart</h3>
        </Button>
        <Button backgroundColor={"white"}>
          <LiaGiftSolid style={{ fontSize: "23px" }} />
          <h3 style={{ fontSize: "18px", marginLeft: "3px" }}>
            Become a Seller
          </h3>
        </Button>
        <Box className="category">
          <Flex
            size={"lg"}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <BsThreeDotsVertical />
          </Flex>

          {isHovered && (
            <Box
              color={"black"}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="dropdown-menu dropDownList"
              style={{ color: "black" }}
              width={"20%"}
              size={"lg"}
            >
              <p>
                <IoIosNotificationsOutline style={{ fontSize: "30px" }} />{" "}
                Notification Preference
              </p>
              <p>
                <RiCustomerService2Fill /> 24x7 Customer Care
              </p>
              <p>
                {" "}
                <FaArrowTrendUp /> Advertize
              </p>
              <p>
                {" "}
                <CgSoftwareDownload /> Download App
              </p>
            </Box>
          )}
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
