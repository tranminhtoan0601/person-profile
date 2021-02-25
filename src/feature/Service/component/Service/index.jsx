import React from "react";
import PropTypes from "prop-types";
import { Box, Heading } from "@chakra-ui/react";
import "./styles.scss";

Service1.propTypes = {
  serviceList: PropTypes.object.isRequired,
};

function Service1({ service }) {
  return (
    <Box
      className="box"
      height="280px"
      width="340px"
      // bgColor="darkgray"
      // padding="30px"
    >
      <>
        <Heading> {service.icon}</Heading> <br></br>
        <Heading fontSize="26px" className="box__text">
          {service.name}
        </Heading>
        <br></br>
        <Heading fontSize="20px" className="box__text1">
          {service.context}
        </Heading>
      </>
    </Box>
  );
}

export default Service1;
