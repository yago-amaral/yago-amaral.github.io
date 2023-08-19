import Main from './components/Main';
import ProjectList from './components/ProjectList';
import Project from  "./components/Project";
import SourceLink from './components/SourceLink';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Olá! :)</h1>
            <hr />

            <Main/>

            <h2>Alguns de meus projetos</h2>
            <ProjectList>
                <Project
                    name="Todo-React"
                    description="Lista de tarefas feita com React"
                    technologies={["React", "JavaScript", "HTML/CSS"]}
                    link="https://yago-amaral.github.io/todo-react"
                />
                <Project
                    name="REST API (em produção)"
                    description="API RESTful feita com Node.js para ser consumida por projetos futuros"
                    technologies={["Node.js", "MongoDB", "JSON", "HTML"]}
                    link="https://github.com/yago-amaral/myapi"
                />
                <Project
                    name="CRUD PHP"
                    description="Sistema CRUD simples feito em PHP"
                    technologies={["PHP", "MySQL", "HTML/CSS"]}
                    link="https://github.com/yago-amaral/crud-php"
                />
            </ProjectList>

            <SourceLink/>
        </div>
    );
}

export default App;