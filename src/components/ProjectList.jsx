function ProjectList({ children }) {
    return (
        <div className="projects box">
            <ul className="project-list">
                {children}
            </ul>
        </div>
    );
} 

export default ProjectList;