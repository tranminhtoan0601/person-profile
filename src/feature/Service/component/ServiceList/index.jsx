import React from "react";
import PropTypes from "prop-types";
import Service1 from "../Service";
import "./styles.scss";
import { Flex } from "@chakra-ui/react";

ServiceList.propTypes = {
  serviceList: PropTypes.array.isRequired,
};

function ServiceList({ serviceList }) {
  return (
    <Flex className="service-list" wrap="wrap" justify="center">
      {serviceList.map((service) => (
        <Service1 service={service} />
      ))}
    </Flex>
  );
}

export default ServiceList;
