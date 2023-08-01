import Main from './components/Main';
import ProjectList from './components/ProjectList';
import Project from  "./components/Project";
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
                    name="Jogo da Velha"
                    description="Jogo da velha feito com JavaScript puro onde o usuário joga contra o computador"
                    technologies={["JavaScript", "HTML/CSS"]}
                    link="https://yago-amaral.github.io/jogo-da-velha"
                />
                <Project
                    name="CRUD PHP"
                    description="Sistema CRUD simples feito em PHP"
                    technologies={["PHP", "MySQL", "HTML/CSS"]}
                    link="https://github.com/yago-amaral/crud-php"
                />
            </ProjectList>
        </div>
    );
}

export default App;