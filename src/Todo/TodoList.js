import React from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

function TodoList(props) {
    return (
        <div>
            <h2 className="title">my todo list:</h2>
            {props.todos.map((todo, index) => <TodoItem key={todo.id} todo={todo} index={index} onChange={props.onToggle} />)}
        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default TodoList
