import events from "./pubsub";

const UI = (() => {

    const init = () => {

        // Available options: Inbox (default project), All projects, Specific project

        const topNav = (() => {
            const container = document.createElement('div')
            container.setAttribute('id', 'top')
            document.body.appendChild(container)
        })
        
        const projectsView = (() => {

            const container = (() => {
                const projectsDiv = document.createElement('div')
                projectsDiv.setAttribute('id', 'projects')
                document.body.appendChild(projectsDiv);
                return projectsDiv;
            })();

            const control = (() => {
                const div = document.createElement('div');
                div.innerHTML = `
                    <div class="UI-control">
                        <form id="newProject">
                            <label for="project">Project name: </label>
                            <input type="text" name="project" id="project" required>
                            <button type="submit">Add</button>
                        </form>
                    </div>
                `;
                document.body.appendChild(div);
            })();

            return {
                container
            }

        })();

        const displayProjects = (() => {

            const project = ({ projectName }) => {
                const projectDiv = document.createElement('div')
                projectDiv.classList.add('project')
                projectDiv.setAttribute('data-projectName', projectName);
                projectDiv.textContent = projectName;
                projectsView.container.appendChild(projectDiv)
            }

            const todo = ({ projectName, todo }) => {
                let projectDiv = document.querySelector(`div[data-projectName="${projectName}"]`);
                for (const information in todo) {
                    let para = document.createElement('p');
                    let content = todo[information];
                    para.textContent = content;
                    projectDiv.appendChild(para);
                }
            }

            events.subscribe('projectAdded', project);
            events.subscribe('todoAdded', todo);

        })();

    }

    return {
        init
    }

})();


export { UI }