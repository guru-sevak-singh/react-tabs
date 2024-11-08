import { NotificationContainer, NotificationManager } from 'react-notifications'

import { useState } from "react"

const Model = () => {
    let [modelStatus, setModelStatus] = useState(false);
    return (
        <div>
            <button onClick={() => { setModelStatus(true) }}>
                Show Model !
            </button>

            <div className={`black-area ${(modelStatus) ? 'show-black-area' : ''}`}>
                <div className={`model ${(modelStatus) ? 'show-model' : ''}`}>
                    <span className='model-cross' onClick={() => { setModelStatus(false) }}>&times;</span>
                    <h3>My Name is guru Sevak Singh</h3>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolorum reiciendis, sunt deserunt laboriosam labore fugiat libero, qui illo debitis mollitia aspernatur nihil corporis natus dolorem praesentium minus cupiditate voluptatibus!
                    </p>
                </div>
            </div>

        </div>
    )
}


const ToDoBase = () => {
    let [tasks, setTasks] = useState([])

    let showNotification = () => {
        NotificationManager.error('Task Already In Your List');
    }

    let saveToDo = (event) => {
        let task_name = event.target.task_name.value;
        if (!tasks.includes(task_name)) {
            const final_to_dos = [...tasks, task_name]

            setTasks(final_to_dos);

        }
        else {
            showNotification()
        }
        event.target.task_name.value = "";
        event.preventDefault();
    }

    let showDeletion = () => {
        NotificationManager.success('Task Removed');
    }

    let showToDo = tasks.map((value, i) => {
        return <ToDoItem value={value} index={i} setTask={setTasks} tasks={tasks} showDeletion={showDeletion} />
    })


    return (
        <div className="orange-big-base">
            <h3 style={{ textAlign: 'center' }}>To Do Application</h3>
            <NotificationContainer />
            <div className="white-tilted-box">
                <div className="white-box">
                    <form onSubmit={saveToDo} className="to-do-form">
                        <input type="text" name="task_name" placeholder="Add New Task" />
                        <button className="add-task">
                            Add Task
                        </button>
                    </form>
                    <ul>
                        {showToDo}
                    </ul>
                </div>
            </div>
        </div>
    )
}


const ToDoItem = ({ value, index, setTask, tasks, showDeletion }) => {

    let [taskStatus, setTaskStatus] = useState(false);


    let delete_task = () => {
        let task_left = tasks.filter((v, i) => i != index)
        setTask(task_left);
        showDeletion();
    }


    return (

        <li onClick={()=>{setTaskStatus(!taskStatus)}} key={index} className={(taskStatus)?"todo-done": ''}>
            {value}
            <span className="endTask" onClick={delete_task}>&times;</span>
        </li>
    )
}

export { ToDoBase, Model }
