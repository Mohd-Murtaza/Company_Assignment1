import React from 'react'
import { Box, Flex,Image, Text } from '@chakra-ui/react'
import { DropDown } from './DropDown';
/**
* @author
* @function Categories
**/
const data=[
    {
        title:"Grocery",
        image:"https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
    },
   {
    title:"Mobiles",
    image:"https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
   },
   {
    title:"Fashion",
    image:"https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100",
   },
   {
    title:"Electronics",
    image:"https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
   },
   {
    title:"Home",
    image:"https://rukminim2.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100",
   },
   {
    title:"Beauty,Toys & More",
    image:"https://rukminim2.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100",
   },
   {
    title:"Appliances",
    image:"https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0139228b2f7eb413.jpg?q=100",
   },
   {
    title:"Two-Wheeler",
    image:"https://rukminim2.flixcart.com/fk-p-flap/64/64/image/05d708653beff580.png?q=100",
   },
  ]

export const Categories = () => {
    const [isHovered, setIsHovered] = React.useState(false);
    
    const handleMouseEnter = (category) => {
        setIsHovered(true);
        
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }   
  return(
    <Flex p={5} margin={"auto"} justifyContent={"space-between"} marginTop={"20px"} marginBottom={"20px"} boxShadow={"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"}>
        {
            data.map((category) => {
                return (
                    <Box className='category'  >
                        <Box margin={"auto"} width={"50%"}><Image src={category.image} alt="" /></Box>
                        <DropDown Categories={category} />
                    </Box>
                )
            })
        }
    </Flex>
   )
  }
