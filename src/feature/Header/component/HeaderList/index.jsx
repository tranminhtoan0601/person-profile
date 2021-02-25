import { EmailIcon, InfoIcon, LinkIcon, UpDownIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";
import "./styles.scss";
HeaderList.propTypes = {
  headerList: PropTypes.array,
};

HeaderList.defaultProps = {
  headerList: [],
};

function HeaderList({ headerList }) {
  return (
    <Box
      bg="black"
      width="100%"
      height="50px"
      zIndex="3"
      position="fixed"
      marginRight="auto"
      marginLeft="auto"
    >
      <div className="header-list">
        <ul className="header-list__headerlist1">
          {headerList.map((header) => (
            <li className="header-list__text">{header.title}</li>
          ))}
        </ul>

        <div className="header-list__headerlist2">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            without
            rel="noreferrer"
          >
            <EmailIcon boxSize={8} />{" "}
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            without
            rel="noreferrer"
          >
            <UpDownIcon boxSize={8} />{" "}
          </a>
          <a
            href="https://www.w3schools.com/"
            target="_blank"
            without
            rel="noreferrer"
          >
            {" "}
            <InfoIcon boxSize={8} />{" "}
          </a>
          <a href="#a" target="_blank">
            {" "}
            <LinkIcon boxSize={8} />{" "}
          </a>
          <a href="#hireme">
            <Button
              marginTop="0px"
              paddingBottom="2px"
              variant="outline"
              size="md"
              colorScheme="white"
            >
              Contact
            </Button>
          </a>
        </div>
      </div>
    </Box>
  );
}

export default HeaderList;
