import { FaGithub, FaLinkedin } from "react-icons/fa";
import ResumeLink from "./ResumeLink";
import "./css/ContactInfo.css";

function ContactInfo() {
    return (
        <div className="contact-info box">
            <h2>Meu nome é Yago</h2>
            <h3>Sou Desenvolvedor Backend</h3>
            
            <ul className="contact-list">
                <li className="social">
                    <a href="https://github.com/yago-amaral" target="_blank" rel="noreferrer" className="social-link github">
                        <FaGithub/>
                    </a>
                </li>
                <li className="social">
                    <a href="https://www.linkedin.com/in/yago-moraes-do-amaral-a23abb241" target="_blank" rel="noreferrer" className="social-link linkedin">
                        <FaLinkedin/>
                    </a>
                </li>
            </ul>

            <ResumeLink/>
        </div>
    );
}

export default ContactInfo;