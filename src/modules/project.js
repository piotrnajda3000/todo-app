const projects = {
    storage: {},
    addProject: (project) => {
        projects.storage[project.name] = project
        return projects.storage[project.name]
    },
    removeProject: (project) => {
        delete projects.storage[project.name];
    },
    displayProjects: (...projectNames) => {
        if (projectNames[0] == 'All') {
            console.log('Logging all projects: ')
            for (const projectName in projects.storage) {
                console.log(projects.storage[projectName])
            }
        }
        else {
            console.log('Loggin desired projects: ')
            for (const projectName of projectNames) {
                console.log(projects.storage[projectName])
            }
        }
    },
}

const Project = (() => {

    const projectBasics = {
        addTodo(todo) {
            this.todos[todo.title] = todo;
            todo.project = this.name
        },
        removeTodo(todo) {
            delete this.todos[todo.title]
        },
    }

    const projectRename = {
        setName(newName) {
            delete projects.storage[this.name]
            this.name = newName;
            projects.storage[newName] = this;

            // Update the project name in project's todos. 
            for (const todo in this.todos) {
                this.todos[todo].project = newName;
            }
        }
    }

    function BaseProject(specification) {

        let projectInfo = {
            name: specification.name,
            todos: {}
        }

        let projectObj = {...projectBasics, projectInfo}; 

        return projects.addProject(projectObj);
    }

    function EditableProject(specification) {
        
        let that = BaseProject(specification); 

        let projectObj = {...that, ...projectRename}

        return projects.addProject(projectObj); 

    }

    return {
        BaseProject,
        EditableProject
    }

})(); 

export { Project, projects }