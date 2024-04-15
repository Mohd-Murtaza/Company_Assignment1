import React from "react";
import { Image, Grid, GridItem } from "@chakra-ui/react";

/**
 * @author
 * @function Grid
 **/

export const GridBanner = (props) => {
	return <Grid templateColumns="repeat(3, 1fr)" gap={6} marginTop={"20px"}>
        <GridItem>
            <Image src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/38b9889b3507a4dc.jpg?q=20" />
        </GridItem>
        <GridItem>
            <Image src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/82dbeaf3672cc748.jpg?q=20" />
        </GridItem>
        <GridItem>
            <Image src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/275ddfbcac77620d.jpg?q=20" />
        </GridItem>
        <GridItem>
            <Image src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/4d24acf7af61c8cb.jpg?q=80" />
        </GridItem>
        <GridItem>
            <Image src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/38b9889b3507a4dc.jpg?q=20" />
        </GridItem>
        <GridItem>
            <Image src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/1d9e687e243fa9cc.jpg?q=80" />
        </GridItem>
    </Grid>;
};
