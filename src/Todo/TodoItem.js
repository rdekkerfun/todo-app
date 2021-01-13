import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../Context'

function TodoItem({ todo, index, onChange }) {
    console.log('todo', todo)
    const classes = ['todo-item__text']
    const { removeTodo } = useContext(Context)
    if (todo.completed) {
        classes.push('done')
    }
    return (
        <div className="todo-item">
            <div className="todo-item__todo">
                <input
                    className="todo-item__todo-checkbox"
                    checked={todo.completed}
                    type="checkbox"
                    onChange={() => onChange(todo.id)} />
                <p className="todo-item__todo-index">{index + 1}.</p>
            </div>
            <p className={classes.join(' ')}>{todo.title}</p>
            <button
                className="todo-item__btn"
                onClick={() => removeTodo(todo.id)}>{/* removeTodo.bind(null, todo.id)*/}
                &times;
            </button>
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem