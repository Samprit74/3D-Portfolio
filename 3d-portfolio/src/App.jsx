import { lazy, Suspense, useEffect, useState } from "react";
import Spacer from "./Spacer"; // ✅ Import the spacer

// Lazy-loaded components
const Hero = lazy(() => import("./components/hiro/Hero"));
const Services = lazy(() => import("./components/services/Services"));
const Education = lazy(() => import("./components/education/Education"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const ToolsAndSkills = lazy(() => import("./components/toolsandskills/ToolsAndSkills"));
const Contact = lazy(() => import("./components/contact/Contact"));

const App = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    document.body.style.overflow = "hidden";

    const timeout = setTimeout(() => {
      document.body.style.overflow = "auto";
      setHeroLoaded(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="container">
      <Suspense fallback={"Loading Hero..."}>
        <section id="home">
          <Hero />
        </section>
      </Suspense>

      {heroLoaded && (
        <>
          {/* Uncomment if using Services */}
          {/* <Suspense fallback={"Loading Services..."}>
            <section id="services">
              <Services />
            </section>
            <Spacer height="80px" />
          </Suspense> */}

          <Suspense fallback={"Loading Education..."}>
            <section id="education">
              <Education />
            </section>
          </Suspense>

          <Spacer height="90px" />

          <Suspense fallback={"Loading Portfolio..."}>
            <Portfolio />
            <Spacer height="100px" />
              <Spacer height="100px" />
              <Spacer height="100px" />
              <Spacer height="100px" />
              <Spacer height="100px" />
              <Spacer height="100px" />
              <Spacer height="100px" />
              <Spacer height="100px" />
              <Spacer height="100px" />
              <Spacer height="100px" />
              <Spacer height="100px" />
              <Spacer height="100px" />
              <Spacer height="100px" />
              <Spacer height="100px" />
          </Suspense>
          <Spacer height="100px" />
              <Spacer height="100px" />
              <Spacer height="100px" />
              <Spacer height="100px" />
              <Spacer height="100px" />

          <Spacer height="100px" />

          <Suspense fallback={"Loading Tools & Skills..."}>
            <section id="skills">
              <ToolsAndSkills />
              
            </section>
            <Spacer height="100px" />
            <Spacer height="100px" />
            <Spacer height="100px" />
          </Suspense>

          <Spacer height="100px" />

          <Suspense fallback={"Loading Contact..."}>
            <section id="contact">
              <Contact />
            </section>
          </Suspense>
        </>
      )}
    </div>
  );
};

export default App;
