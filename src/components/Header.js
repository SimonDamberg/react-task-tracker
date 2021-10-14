import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showTaskForm }) => {

    return (
        <div className='header'>
            <h1>{title}</h1>
            <Button color={showTaskForm ? 'red' : 'steelblue'} text={showTaskForm ? 'Close' : 'Add'} onClick={onAdd}/>
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
