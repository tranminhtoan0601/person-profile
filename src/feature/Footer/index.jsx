import React from "react";
import PropTypes from "prop-types";
import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import { EmailIcon, InfoIcon, LinkIcon, UpDownIcon } from "@chakra-ui/icons";
import "./styles.scss";

Footer.propTypes = {};

function Footer(props) {
  return (
    <Box bg="#191919">
      <Flex
        bg="#191919"
        height="60px"
        color="white"
        justify="space-between"
        marginLeft="auto"
        marginRight="auto"
        maxWidth="1400px"
        paddingTop="15px"
      >
        <Box className="footer" marginLeft="60px">
          <Link
            className="icon"
            href="https://www.facebook.com/"
            target="_blank"
          >
            <EmailIcon boxSize={8} />
          </Link>
          <Link
            className="icon"
            href="https://www.youtube.com/"
            target="_blank"
          >
            <UpDownIcon boxSize={8} />{" "}
          </Link>
          <Link
            className="icon"
            href="https://www.w3schools.com/"
            target="_blank"
          >
            {" "}
            <InfoIcon boxSize={8} />{" "}
          </Link>
          <Link className="icon" href="#Link" target="_blank">
            {" "}
            <LinkIcon boxSize={6} />{" "}
          </Link>
        </Box>
        <Box>
          <Heading fontSize="20px">
            Copyright © 2020 MTOANNV. All Rights Reserved.{" "}
          </Heading>
        </Box>
      </Flex>
    </Box>
  );
}

export default Footer;
