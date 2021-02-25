import { Box, Button, Flex, Heading, Image, Link } from "@chakra-ui/react";
import React from "react";
import "./styles.scss";

Hireme.propTypes = {};

function Hireme(props) {
  return (
    <Box bg="black" id="hireme">
      <Flex className="hire-me" bgColor="black">
        <Box paddingTop="4rem" paddingLeft="9rem">
          <Box>
            <Heading color="white" fontSize="60px">
              Hire Me
            </Heading>{" "}
            <br></br>
            <Heading color="white" fontSize="18px">
              I am available for freelance work. Connect with me via <br></br>{" "}
              Telegram: Toannv or email: contact@toan.dev
            </Heading>
          </Box>
          <Box
            className="hire-me__border"
            position="relative"
            bg="darkgray"
            marginTop="3rem"
            width="380px"
            height="240px"
          >
            <Image
              position="absolute"
              marginTop="10px"
              marginLeft="10px"
              htmlHeight="80px"
              htmlWidth="80px"
              objectFit="cover"
              borderRadius="full"
              src="https://scontent.fdad3-2.fna.fbcdn.net/v/t1.0-9/67795032_2455643914658465_5029199127846584320_n.jpg?_nc_cat=101&ccb=3&_nc_sid=09cbfe&_nc_ohc=ZrChYR3ydJkAX-50sio&_nc_ht=scontent.fdad3-2.fna&oh=7962a6641d801cb55bfaa6463839411b&oe=60597E6E"
              alt="Không có mạng"
            />
            <Box paddingTop="25px" paddingLeft="100px">
              <Heading color="white" fontSize="20px">
                Trần Minh Toàn
              </Heading>
              <Heading color="white" fontSize="14px">
                Learn at University of Economic Đà Nẵng{" "}
              </Heading>
            </Box>
            <Flex paddingTop="30px" paddingLeft="25px">
              <Image
                htmlHeight="30px"
                htmlWidth="30px"
                objectFit="cover"
                src="https://media-exp1.licdn.com/dms/image/C560BAQFFFu06Nx9m4A/company-logo_200_200/0/1594224715266?e=1622073600&v=beta&t=p5zx2AKaQZUlzTQ-YDAMKoegUOFpfnhgd3AnEMVQ-XE"
                alt="Không có mạng"
              />
              <Heading color="white" fontSize="14px" paddingLeft="28px">
                {" "}
                Upwork
              </Heading>
            </Flex>
            <Flex paddingTop="20px" paddingLeft="25px">
              <Image
                htmlHeight="30px"
                htmlWidth="30px"
                objectFit="cover"
                src="https://upload.wikimedia.org/wikipedia/commons/2/25/Logo_Kinh_t%E1%BA%BF_%C4%90%C3%A0_N%E1%BA%B5ng.jpg"
                alt="Không có mạng"
              />
              <Heading color="white" fontSize="14px" paddingLeft="28px">
                Danang Univetsity of economic
              </Heading>
            </Flex>
            <Box paddingTop="20px" paddingLeft="24px">
              <Link href="https://www.facebook.com/" target="_blank">
                <Button colorScheme="blue" size="sm">
                  View profile
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
        <Box paddingTop="5rem" paddingLeft="4rem">
          <Image
            htmlHeight="600px"
            htmlWidth="550px"
            objectFit="cover"
            src="https://phung.dev/assets/images/about/5.jpg"
            alt="Không có mạng"
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default Hireme;
