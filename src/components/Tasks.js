import PropTypes from 'prop-types'
import Task from './Task'


const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
        {tasks.map((task) => (<Task key={task.id} task={task} onToggle={onToggle} onDelete={onDelete}></Task>))}
        </>
    )
}

Tasks.propTypes = {
    tasks: PropTypes.array,
}

export default Tasks
