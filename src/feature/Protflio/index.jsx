import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import ProtflioList from "./component/ProtflioList";
import data from "./p.json";
Protflio.propTypes = {};

function Protflio(props) {
  return (
    <Box bg="#191919">
      <Box
        // className="service1"
        height="1100px"
        maxWidth="1400px"
        marginLeft="auto"
        marginRight="auto"
        id="portfolio"
        bg="#191919"
      >
        <Box textAlign="center" paddingTop="3rem">
          <Heading
            color="white"
            className="text1"
            fontSize="60px"
            paddingBottom="1rem"
          >
            My Previous Projects
          </Heading>
          <Box
            color="white"
            paddingBottom="2rem"
            fontSize="22px"
            className="text2"
          >
            Customer satisfaction is my highest priority.
          </Box>
        </Box>
        {<ProtflioList protfliolist={data} />}
      </Box>
    </Box>
  );
}

export default Protflio;
