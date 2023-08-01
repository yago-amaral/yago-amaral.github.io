import "./css/ContactInfo.css";

function ContactInfo() {
    return (
        <div className="contact-info box">
            <h2>Meu nome é Yago</h2>
            <h3>Sou desenvolvedor frontend</h3>
            
            <ul className="contact-list">
                <li className="social">
                    <a href="https://github.com/yago-amaral" target="_blank" rel="noreferrer" className="social-link">
                        GitHub
                    </a>
                </li>
                <li className="social">
                    <a href="https://www.linkedin.com/in/yago-moraes-do-amaral-a23abb241" target="_blank" rel="noreferrer" className="social-link">
                        LinkedIn
                    </a>
                </li>
                <li className="social">
                    <a href="" target="_blank" rel="noreferrer" className="social-link">
                        Currículo
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default ContactInfo;