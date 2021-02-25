import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import "./styles.scss";

function About() {
  return (
    <Box bg="#191919">
      <Box className="About" id="about">
        <Box className="About__image">
          <Image
            // htmlHeight="700px"
            // htmlWidth="500px"
            boxSize="450px"
            objectFit="cover"
            src="https://i.imgur.com/m03lKJ1.jpg"
            alt="khong co mang"
          />
        </Box>
        <Box className="About__context">
          <h1>About Me</h1>
          <h2>
            I'm an experienced full-stack web app developer with specialization
            in MERN <br></br>Stack. Also a self-starter and passionate about
            code and eager to learn new <br></br>things. I can work
            independently as well as a team member. I always do my <br></br>{" "}
            best to deliver great work with clean, reusable and testable code.
          </h2>

          <Box>
            <Tabs>
              <TabList>
                <Tab>Main skill</Tab>
                <Tab>Experience</Tab>
                <Tab>Education & Certification</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <p>User interface & experience design - UI/UX </p>
                  <p> Delight the user and make it work.</p> <br></br>
                  <p>Payment gateway, Third-party service - API interation</p>
                  <p>I like to move it move it.</p> <br></br>
                  <p>Modern web app with newest technologies - Development</p>
                  <p>Turn your idea into reality .</p>
                </TabPanel>
                <TabPanel>
                  <p>
                    Web & App Developer - Freelancer <br></br>
                    2018 - Present
                  </p>{" "}
                  <br></br>
                  <p>
                    Full-stack Engineer & Team Leader - PSCD Co., LTD <br></br>
                    2017 - 2020
                  </p>
                </TabPanel>
                <TabPanel>
                  <p>
                    Good Degree in Information Technology - Danang University of
                    Technology (DUT)
                    <br></br>
                    2015-2019
                  </p>{" "}
                  <br></br>
                  <p>
                    Band score of 880 in TOEIC Certification - Educational
                    Testing Service (ETS) 2019
                  </p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
