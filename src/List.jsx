import React from 'react'

const List = ({ input, setInput, handleSubmit }) => {

    return (
        <>

            <form onSubmit={handleSubmit}>
                <h3>To-Do List</h3>
                <div className="input-add">
                    <input type="text" required placeholder='add items' autoComplete='off' value={input}
                        onChange={(e) => setInput(e.target.value)} />
                <i class="fa fa-plus-circle" onClick={handleSubmit} aria-hidden="true"></i>
                </div>
                <ul className='item'></ul>
            </form>

        </>
    )
}

export default List