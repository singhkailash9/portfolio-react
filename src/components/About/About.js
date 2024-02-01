import "./About.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function About() {
    return <div className="about-container">
        <video id="about-video" autoPlay muted loop playsInline>
            <source src={process.env.PUBLIC_URL + "/about-me.mp4"} itemType="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div id="about-text" data-aos="zoom-in-up">I am a passionate and adaptable fresher in web development, constantly seeking to stay abreast of evolving technologies. With a solid foundation in both front-end and back-end skills, I am eager to tackle new challenges and contribute to innovative web solutions in a collaborative environment.
        </div>
        <h3>
            Studied from Atharva College of Engineering
        </h3>
        <p>
            EXTC branch <span className="highlight">2019 - 2023</span>
        </p>
        <div>
            <ul className="about-list" data-aos="slide-up">
                <li>
                    <strong><span className="animation-text">✓ </span>Role: </strong>Full Stack Web Developer
                </li>
                <li>
                    <strong><span className="animation-text">✓ </span>Degree: </strong>B. Tech
                </li>
                <li>
                    <strong><span className="animation-text">✓ </span>City: </strong>Mumbai
                </li>
                <li>
                    <strong><span className="animation-text">✓ </span>Email: </strong>singhkailash.sk9@gmail.com
                </li>
            </ul>
        </div>

    </div>
}

export default About;