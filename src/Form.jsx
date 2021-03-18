import React from 'react'

const Form = ({ input, setInput, handleSubmit }) => {

    return (
        <>

            <form onSubmit={handleSubmit}>
                <h3>To-Do List</h3>
                <div className="input-add">
                    <input type="text" id='input' autoComplete='off' required value={input}
                        onChange={(e) => setInput(e.target.value)} />
                    <button>+</button>
                </div>
                <ul className='item'></ul>
            </form>

        </>
    )
}

export default Form