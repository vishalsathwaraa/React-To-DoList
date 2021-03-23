import React, { useState } from 'react'
import { Button, Header, Icon, Modal, Input } from 'semantic-ui-react'
import CompletedTodo from './CompletedTodo';

const ToDoList = (props) => {

    const [input, setInput] = useState('');
    const [items, setItems] = useState([]);
    const [completed, setCompleted] = useState([]);
    const [isOpen, setisOpen] = useState(false);
    const [open, setOpen] = useState(false)
    const [newInput, setNewInput] = useState('');
    const [curId, setCurId] = useState('');
    const [showCheck, setShowCheck] = useState(false);
    const [btncontent, setBtnContent] = useState('Completed Task');



    //<--------------------- Add Todo --------------------------->

    const addTodo = (e) => {

        e.preventDefault();

        if (input !== '') {

            const todo = {

                id: null,
                list: input,
                isCheck: false
            }

            setItems([...items].concat(todo));
        }
        setInput('');
    }

    //<--------------------- Delete Todo --------------------------->


    const deleteTodo = (id) => {

        setItems((todo) => {
            return todo.filter((val) => {
                return val.id !== id;
            })
        })
    }



    //<--------------------- Toggle Check Todo --------------------------->

    const checkTodo = (id) => {

        setItems((todo) => {

            return todo.map((val) => {

                if (val.id === id) {

                    val.isCheck = !val.isCheck;

                    setCompleted(() => {
                        return items.filter((todo) => {
                            return todo.isCheck === true;
                        })
                    })
                }
                return val;
            })

        })

        // console.log(completed);
    }

    //<--------------------- Show Check Todo --------------------------->

    const showChecked = () => {

        setShowCheck(!showCheck);
        setBtnContent(btncontent === 'Completed Task' ? 'Show All Todo' : 'Completed Task')
    }


    // <--------------------- Show Todo --------------------------->

    const showTodo = (list, id) => {

        setisOpen(true);
        setNewInput(list)
        setCurId(id);
    }

    const handleNewInput = (e) => {
        setNewInput(e.target.value);
    }

    //<--------------------- Update Todo --------------------------->

    const updateTodo = () => {

        setOpen(false);
        setItems((todo) => {
            return todo.map((val) => {

                if (curId === val.id) {
                    val.list = newInput;
                }
                return val;
            })
        })
    }

    const emptyTodo = () => {
        setCompleted([]);
        setItems([]);

    }
    return (
        <section>

            <div className='container'>


                <form onSubmit={addTodo}>
                    <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Add Items' />
                    <Button content='Add' onClick={addTodo} />
                </form>



                {showCheck ? <CompletedTodo items={items} completed={completed} /> :
                    <div>
                        {items.map((todo, index) =>
                        (
                            <div className="todo-container" key={index}>
                                <div className='todoid'>{todo.id = index}</div>
                                <div className='text' style={{ textDecoration: todo.isCheck ? 'line-through' : 'none' }}>{todo.list}</div>
                                <input type="checkbox" className='icon checkbox' onChange={() => checkTodo(todo.id)} checked={todo.isCheck} />
                                <i className="close circular icon red inverted " onClick={() => deleteTodo(todo.id)}></i>

                                {/*-------------------------  Modal Component  ---------------*/}

                                <Modal
                                    closeIcon
                                    onClose={() => setOpen(false)}
                                    onOpen={() => setOpen(true)}
                                    open={open}
                                    size='small'
                                    trigger={<Icon name='edit outline' className='edit' color='purple' onClick={() => showTodo(todo.list, todo.id)} />}
                                >

                                    <Header content='Update ToDo List' />
                                    <Modal.Content>
                                        <Input fluid value={newInput} onChange={handleNewInput} />
                                    </Modal.Content>
                                    <Modal.Actions>
                                        <Button color='red' onClick={() => setOpen(false)}>
                                            <Icon name='remove' /> Cancel
                                        </Button>
                                        <Button color='green' onClick={() => updateTodo(newInput)}>
                                            <Icon name='checkmark' /> Update
                                        </Button>
                                    </Modal.Actions>

                                </Modal>

                            </div>

                        ))}
                    </div>}


                <div className="btn">
                    {!items[0] || <Button content='Delete All' className='remove-all' size='tiny' circular color='red' invert onClick={emptyTodo} />}
                    {!items[0] || <Button content={btncontent} className='showCheck' size='tiny' circular color='red' onClick={showChecked} />}
                </div>

            </div>

        </section>

    )
}

export default ToDoList