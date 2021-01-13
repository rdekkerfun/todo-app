import React, { useState } from 'react'
import PropTypes from 'prop-types'

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue)
    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

function AddTodo({ onCreate }) {
    const input = useInputValue('')

    function submitHandler(event) {
        event.preventDefault()
        if (input.value().trim()) {
            onCreate(input.value())
            input.clear()
        }
    }

    return (
        <form className="todo-form" onSubmit={submitHandler}>
            <h2 className="title">add new todo:</h2>
            <input
                {...input.bind}
                className="todo-form__input"
            />
            <button type="submit" className="todo-form__submit" >
                +
            </button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo
