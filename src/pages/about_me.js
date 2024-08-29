import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../Components/Footer'; // Import the Footer component
import Herosection_about from '../Components/Herosection_about'; // Import the Herosection_about component
import '../Styles_css/aboutme.css';

export default function AboutMe() {
  return (
    <div>
      {/* Hero section for the About Me page */}
      <Herosection_about />
      {/* New Block Section */}
      <section className="about-block block">
        <div className="about-block-content">
          <div className="about-image">
            <img src={`${process.env.PUBLIC_URL}/img/pic_HD.png`} alt="About Me" />
          </div>
          <div className="about-text">
            <h2>Designing with Passion and Purpose</h2>
            <p>
            I’m David Hervé, a dedicated Senior UX/UI and Product Designer with a passion for creating compelling digital experiences. With extensive experience in user-centered design, I specialize in developing seamless, intuitive interfaces that not only engage and delight users but also contribute to business growth. My goal is to bridge the gap between user needs and business objectives, delivering solutions that are both visually stunning and highly functional.
            </p>
            {/* Add more text content as needed */}
          </div>
        </div>
      </section>

      {/* Quotation_2 */}
      <div className="quotation-box block">
        <hr className="quotation-line"/>
        <div className="quotation">
          <div className="quotation-mark-container top-container">
            <img src={`${process.env.PUBLIC_URL}/img/quot_left_blue.svg`} alt="Left Quote" className="quotation-mark top-quotation" />
          </div>
          <div className="quotation-text">
            <em>A glimpse into my last role:<br /> 
            Discover the essence of my work through <br />
            a sample of my latest work certificate. 
            </em>
          </div>
          <div className="quotation-mark-container bottom-container">
            <img src={`${process.env.PUBLIC_URL}/img/quote_right_blue.svg`} alt="Right Quote" className="quotation-mark bottom-quotation" />
          </div>
        </div>
        <hr className="quotation-line"/>
      </div>

      {/* Sample of last work certificate */}
      <div className="additional-text-box block">
        <p className="title">. Sample of my last work certificate.</p>
        <p>Digital Strom offers an award-winning smart home technology for every home. The company, headquartered in Zurich-Schlieren (Switzerland), distributes its products and services in Germany, Austria, Switzerland, the Netherlands, Belgium, as well as various other European and non-European countries.</p>
        <p>In his role, <strong>David Herve has demonstrated extensive expertise</strong> in managing various user processes and seamlessly collaborating with B2B partners to ensure system installations, commissioning, and continuous support for end users. He has proven abilities in conducting comprehensive user research, enabling him to refine designs based on user needs.</p>
        <p>As a <strong>driving force in conceptualization and daily decision-making</strong>, Mr. David Herve maximizes product value within defined frameworks. Known for his effective verbal and visual communication, he works seamlessly with interdisciplinary R&D teams, navigating diverse backgrounds and nationalities. His strong interest and focus on Human-Computer Interaction (HCI) and smart home/building automation systems further contribute to his success in delivering innovative and user-centered designs.</p>
        <p>Overall, David's role at Digital Strom has significantly contributed to <strong>designing superior user interfaces and experiences</strong> for connected systems, perfectly aligning with the company's vision and objectives.</p>
        <p><em>Full version of work certificate available upon request.</em></p>
      </div>

      {/* Dashed line */}
      <div className="dashed-line"></div>

      {/* UX Design Skills */}
      <div className="additional-text-box block">
        <p className="title">. UX Design Skills</p>
        <img className="theme_anal" src={`${process.env.PUBLIC_URL}/img/UX_skills.png`} alt="Left Quote"/>
      </div>

      {/* Dashed line */}
      <div className="dashed-line"></div>

      {/* Software Skills */}
      <div className="additional-text-box block">
        <p className="title">. Software Skills</p>
        <img className="theme_anal" src={`${process.env.PUBLIC_URL}/img/Software_skills.png`} alt="Left Quote"/>
      </div>

      {/* Dashed line */}
      <div className="dashed-line"></div>

      {/* Testimonial Section */}
      <div className='block'>
        <div className="additional-text-box block">
          <p className="title">. Testimonials</p>
        </div>

        <section className="testimonial-section">
          {/* Testimonial 1 */}
          <a href="https://www.linkedin.com/in/davidh4/" target="_blank" rel="noopener noreferrer" className="testimonial-link">
            <div className="testimonial-block">
              <div className="testimonial-header">
                <div className="testimonial-image">
                  <img src={`${process.env.PUBLIC_URL}/img/Gökhan.png`} alt="Testimonial Avatar" />
                </div>
                <div className="testimonial-info">
                  <strong>Gökhan Sari</strong>
                  <p className="job-description">Senior Software Engineer bei Allianz</p>
                </div>
              </div>
              <p className="testimonial-quote">"I enjoyed working with David when I was a software engineer 
              at Arpage and I have to say his approach to design and 
              problem solving was simply exceptional. He’s really good 
              at finding solutions to problems and making things look 
              nice and user-friendly. He understands all technical things… 
              More on Linked-in…"</p>
            </div>
          </a>

          {/* Testimonial 2 */}
          <a href="https://www.linkedin.com/in/davidh4/" target="_blank" rel="noopener noreferrer" className="testimonial-link">
            <div className="testimonial-block">
              <div className="testimonial-header">
                <div className="testimonial-image">
                  <img src={`${process.env.PUBLIC_URL}/img/Peixoto.png`} alt="Testimonial Avatar" />
                </div>
                <div className="testimonial-info">
                  <strong>André Peixoto</strong>
                  <p className="job-description">Android Engineer</p>
                </div>
              </div>
              <p className="testimonial-quote">"Working alongside David, I’ve witnessed his unwavering 
              commitment to factoring in technical constraints within 
              his UX designs. His ability to ideate innovative solutions 
              while accommodating these constraints is truly remarkable.
              His achievements unequivocally showcase a holistic design 
              approach…
              More on Linked-in…"</p>
            </div>
          </a>

          {/* Testimonial 3 */}
          <a href="https://www.linkedin.com/in/davidh4/" target="_blank" rel="noopener noreferrer" className="testimonial-link">
            <div className="testimonial-block">
              <div className="testimonial-header">
                <div className="testimonial-image">
                  <img src={`${process.env.PUBLIC_URL}/img/Daniel.png`} alt="Testimonial Avatar" />
                </div>
                <div className="testimonial-info">
                  <strong>Daniel Jack</strong>
                  <p className="job-description">Consultant bei Löwenfels Partner</p>
                </div>
              </div>
              <p className="testimonial-quote">"Als langjähriger Vorgesetzter habe ich David stets als top 
              motivierten Mitarbeiter erlebt. David war als Fronten & 
              UX/UI Engineering bei der Arpage tätig. Er hat stets mit 
              Begeisterung und viel Kreativität seine Aufgaben auf 
              höchstem Niveau umgesetzt... 
              More on Linked-in…"</p>
            </div>
          </a>

          {/* Testimonial 4 */}
          <a href="https://www.linkedin.com/in/davidh4/" target="_blank" rel="noopener noreferrer" className="testimonial-link">
            <div className="testimonial-block">
              <div className="testimonial-header">
                <div className="testimonial-image">
                  <img src={`${process.env.PUBLIC_URL}/img/Emre.png`} alt="Testimonial Avatar" />
                </div>
                <div className="testimonial-info">
                  <strong>Emre Avsar</strong>
                  <p className="job-description">Senior IT Software Engineer by UBS</p>
                </div>
              </div>
              <p className="testimonial-quote">"In terms of finding the matching puzzle piece, David is the professional you‘re looking for. One cannot ignore his senior skills in UX and UI design. He‘s just bringing nice designs which match perfectly in the application out of nowhere. I‘d love to work with him again...More on Linked-in"</p>
            </div>
          </a>
        </section>
      </div>

      {/* Hobbies */}
      <div className="additional-text-box block">
        <p className="title">. Hobbies</p>
        <img className="theme_anal" src={`${process.env.PUBLIC_URL}/img/hobbies.png`} alt="Left Quote"/>
      </div>

      <div className="white-space"></div>

      {/* Include the Footer component at the end of the page */}
      <Footer />
    </div>
  );
}

