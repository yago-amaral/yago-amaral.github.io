import ContactInfo from "./ContactInfo";
import AboutMe from "./AboutMe";
import "./css/Main.css";

function Main() {
    return (
        <div className="main">
            <ContactInfo/>
            <AboutMe/>
        </div>
    );
}

export default Main;