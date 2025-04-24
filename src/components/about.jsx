import React from "react";
import "../component css/About.css"
import NavBar from "./NavBar";

function About(){
    return(
        <section
            className="about-section">
                <div className="navbar-about">
                    <NavBar/>
                    </div>
                    <div className="about-title">
                    <h2>About Us</h2>
                    </div>
                <div className="about-container">
                    <div className="about-card"> 
                        <h3> Who We Are</h3>
                        <p> PhoGalleria was founded in 2020 with one goal: to celebrate and share beautiful moments captured through the lenses of photographers from all over the world. We are a global community of photography lovers—creators, curators, and storytellers—brought together by a shared passion for visual storytelling. From breathtaking landscapes to intimate portraits, we showcase images that spark emotion, preserve memories, and reflect the diversity of human experience.</p>
                    </div> 
            
                <div className="about-card">
                        <h3>Our mission</h3>
                        <p>
                        At PhoGalleria, we believe that every photograph tells a unique story. Our mission is to bring these stories to the forefront, connecting people through the universal language of imagery. We are passionate about showcasing the diverse perspectives and creative talents of photographers from all corners of the globe, while inspiring others to capture and appreciate the beauty in the world around us. 
                        </p>
                    </div>
                

                    <div className="about-card">
                        <h3>Our Features</h3>
                        <ul>
                            <li>Endless Scrolling - Never run out images to view with our endless site scrolling</li>
                            <li>Favourites - Store all your favourite images with the simple click of a heart</li>
                            <li>Responsive Layout - A responsvie grid layout adjusts itself and seamlessly displays our sites images </li>
                            <li>Image Search - Filter through the endless imaging using our search bar to search for specific images</li>
                        </ul>
                    </div>
            
                    <div className="about-card">
                        <h3>Quick and Fast</h3>
                        <p>Built using react + vite for instant loading, seamless browsing and a cleaner interface</p>
                    </div>
            
            
                    <div className="about-card">
                        <h3>Meet The Creators</h3>
                        <p> PhoGalleria is proudly crafted by Presbury Wamae, Rochelle Awuor, and Neville Ng'ang'a</p>
                    </div>
                </div>
                <div className="about-footer">
                    <h5>PhoGalleria</h5>
                    <p>© {new Date().getFullYear()} All Rights Reserved</p>
                <p>Created by Presbury, Rochelle and Neville Ng'ang'a</p>
            </div>
    </section>
    )
 }


export default About