import {
  CheckCircleIcon,
  EditIcon,
  Search2Icon,
  SettingsIcon,
  TimeIcon,
  WarningTwoIcon,
} from "@chakra-ui/icons";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import ServiceList from "./component/ServiceList";

Service.propTypes = {};

function Service(props) {
  const serviceList = [
    {
      id: 1,
      icon: <Search2Icon w={8} h={8} />,
      name: "Business Stratagy",
      context: "Design a complete prod8uct from your amazing idea",
    },
    {
      id: 2,
      icon: <CheckCircleIcon w={8} h={8} />,
      name: "Website Development",
      context: "Build highly-engaging wwebdites with perfect UI/UX",
    },
    {
      id: 3,
      icon: <EditIcon w={8} h={8} />,
      name: "Marking",
      context: "Promote your product to worldwide community",
    },
    {
      id: 4,
      icon: <SettingsIcon w={8} h={8} />,
      name: "Mobile Development",
      context: "Buile awesome Android/IOS applications",
    },
    {
      id: 5,
      icon: <TimeIcon w={8} h={8} />,
      name: "Enhance your product",
      context: "Fix & improve your current product",
    },
    {
      id: 6,
      icon: <WarningTwoIcon w={8} h={8} />,
      name: "SEO",
      context: "Best practices in Search Engine Optimization",
    },
  ];
  return (
    <Box bg="black">
      <Box
        // className="service1"
        id="service"
        height="900px"
        maxWidth="1400px"
        marginLeft="auto"
        marginRight="auto"
        bg="black"
      >
        <Box textAlign="center" paddingTop="3rem">
          <Heading
            color="white"
            className="text1"
            fontSize="60px"
            paddingBottom="1rem"
          >
            My Awesome Services
          </Heading>
          <Box
            color="white"
            paddingBottom="2rem"
            fontSize="22px"
            className="text2"
          >
            If you have an interesting start-up web project or you want to
            improve your <br></br>existing web app then I'm ready to help you!
          </Box>
        </Box>

        <ServiceList serviceList={serviceList} />
      </Box>
    </Box>
  );
}

export default Service;
