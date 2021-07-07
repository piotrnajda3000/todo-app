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

    /*
    const flying = o => {
        let isFlying = false;
        return Object.assign({}, o, {
            fly () {
                isFlying = true;
                return this;
            },
            isFlying: () => isFlying,
            land () {
                isFlying = false;
                return this;
            }
        );
    };
    */ 
    const defaultMethods = methodsObj => {
        return Object.assign({}, methodsObj, {
            addTodo (todo) {
                this.todos[todo.title] = todo;
                todo.project = this.name
            },
            removeTodo (todo) {
                delete this.todos[todo.title]
            }
        })
    }

    const editMethods =  {
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

    /*
    const quacking = quack => o => Object.assign({}, o, {
        quack: () => quack
    });
    */
    const Project = name => methodsObj => Object.assign({}, methodsObj, {
        name,
        todos: {},
    })

    // const createDuck = quack => quacking(quack)(flying({}));
    const createDefaultProject = name => Project(name)(defaultMethods({})); 

    // const duck = createDuck('Quack!');
    const defaultProject = createDefaultProject('Inbox')

    const createNonDefaultProject =  name => Project(name)(defaultMethods(editMethods)); 
    const sampleProject = createNonDefaultProject('Sample Project');

})();

export { Project, projects }