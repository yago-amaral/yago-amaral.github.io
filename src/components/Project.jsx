import "./css/Project.css";

function Project({ name = "", description = "", technologies = [], link = ""}) {
    return (
        <div className="project">
            
            <p className="project-description">
                <h2>{name}</h2>
                {description}
            </p>
            
            <p>
                <h3>Tecnologias:</h3>
                <ul className="project-technology">
                    {technologies.map(t => <li>{t}</li>)}
                </ul>
            </p>

            <div className="project-link">
                <a href={link} target="_blank" rel="noreferrer">
                    VER PROJETO
                </a>
            </div>
            <hr />
        </div>
    );
}

export default Project;