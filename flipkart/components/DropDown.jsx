import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import "./styles.css";
import "./styles/dropdown.css";
import { RiArrowDropDownLine } from "react-icons/ri";

/**
 * @author
 * @function DropDown
 **/

export const DropDown = ({ Categories }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box
      className="hover-button"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Flex textAlign={"center"}>
        {Categories.title}
        <RiArrowDropDownLine
          size={"30"}
          style={
            isHovered
              ? { transform: "rotate(180deg) ", transitionDuration: "0.5s" }
              : { transform: "rotate(0deg)" }
          }
        />
      </Flex>

      {isHovered && (
        <>
          <Flex width={"400px"} className="hover-category">
            <Box className="dropDownList" width={"50%"} size={"lg"}>
              <p>mens clothing</p>
              <p>mens Formal</p>
              <p>mens Western</p>
              <p>mens Ethnic</p>
              <p>mens Designer</p>
              <p>mens Sweaters</p>
              <p>mens Jeans</p>
              <p>mens Shirts</p>
              <p>mens Tshirts</p>
            </Box>
            <Box
              className="dropDownList"
              position={"absolute"}
              bottom={0}
              right={0}
              width={"50%"}
              boxShadow={"lg"}
            >
              <p>Womens Clothing</p>
              <p>womens Formal</p>
              <p>womens Western</p>
              <p>womens Ethnic</p>
              <p>womens Designer</p>
              <p>womens Sweaters</p>
              <p>womens Jeans</p>
              <p>womens Shirts</p>
              <p>womens Tshirts</p>
            </Box>
          </Flex>
        </>
      )}
    </Box>
  );
};
