import './style.css'
import { Todo } from './modules/todo.js'
import { Project, projects } from './modules/project.js'

// Init default todo to the default project 
let defaultTodo = Todo('Default todo.', '22-05-2022')

// If I don't specify the project a Todo goes in, add it to the project that's set as default? 
// So that means, the project specifying part should go in the Todo declaration
// And that makes sense, since ALL todos have to belong to a project. 
// Scrap the .addTodo functionality and implement it directly in the TODO prototype. 

// Log the projects object 
// console.log(projects)


