import React from "react";
import Particles from "react-tsparticles";
import "./styles.scss";

Home.propTypes = {};

function Home(props) {
  return (
    <div className="home" id="home">
      <div class="home__text">
        <h4>WELCOME TO MY WORLD</h4>
        <h1>Hi,i'm Toan.</h1>
        <div>
          <h2 class="rw-sentence">
            <div class="rw-words rw-words-2">
              <span>Product Designer</span>
              <span>JS Develop</span>
              <span>UX/UI Designer</span>
            </div>
          </h2>
        </div>
        <br></br> <br></br> <br></br>
        <h2>Based in Viet Nam</h2>
      </div>
      <div className="tsparticles">
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "#0d47a1",
              },
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    </div>
  );
}

export default Home;
