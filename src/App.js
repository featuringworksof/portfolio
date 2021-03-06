import React, { useEffect } from "react";
import Routes from "./router/Routes";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
// import { jarallax } from "jarallax";
import AnimatedCursor from "react-animated-cursor";
import { render } from "node-sass";
import { HashRouter, Route, Link } from "react-router-dom";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Rizza Louise Sy</title>
        <meta name="description" content="Rizza Louise Sy - Design Systems, ING" />
        <meta
          name="keywords"
          content="User Experience, Design Operations, Design Systems, Human-Centered Design, Components Design and Documentation, Systems Design, Frontend Development, Prototypes, Design Language"
        />
      </Helmet>
      {/* End React Helmet for SEO */}

      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="220, 53, 69"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      />
      {/* End Animated Cursor */}

      <ScrollToTop />
      {/* End Scroll To Top */}

      <Routes />
      {/* End All Routes */}
    </>
  );
};



export default App;
