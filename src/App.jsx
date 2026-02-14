import { useEffect } from "react";
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Photography } from "./components/Photography/Photography";
import { Updates } from "./components/Updates/Updates";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

function App() {
    // Scroll to section on hash change
    useEffect(() => {
        // Scroll to the section if there's a hash in the URL (e.g., #about)
        if (window.location.hash) {
            const element = document.getElementById(window.location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [window.location.hash]); // Re-run the effect on hash change

    return (
        <Router>
            <div className={styles.App}>
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Hero />
                                <About id="about" />
                                <Experience id="experience" />
                                <Projects id="projects" />
                                <Updates id="updates" />
                                <Contact id="contact" />
                            </>
                        }
                    />
                    <Route
                        path="/photography"
                        element={
                            <>
                                <Helmet>
                                    <title>Photography</title>
                                </Helmet>
                                <Photography />
                            </>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;