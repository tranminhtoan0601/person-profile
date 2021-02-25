import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Heading } from "@chakra-ui/react";
import "./styles.scss";

Protflio1.propTypes = {
  protflio: PropTypes.object.isRequired,
};

function Protflio1({ protflio }) {
  return (
    <Box
      className="box1"
      height="380px"
      width="340px"
      bgImage={`url("${protflio.thumbnail}")`}
      padding="30px"
      bgSize="cover"
    >
      <Box className="box1__text">
        <Heading color="white" fontSize="22px">
          {protflio.name}
        </Heading>
        <br></br>
        {/* <Button  fontSize="20px">{protflio.button}</Button>   */}
        <a href={protflio.url} without rel="noreferrer" target="_blank">
          <Button li variant="outline" color="black" fontSize="20px">
            <a href={protflio.button} target="_blank" rel="noreferrer">
              View detail
            </a>
          </Button>
        </a>
      </Box>
    </Box>
  );
}

export default Protflio1;
