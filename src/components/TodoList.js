import { useState } from 'react';

const ToDoList = () => {
    const [toDo, setToDo] = useState(["8 Stunden schlafen"]);

    const addToDo = () => {
        const inputToDo = document.getElementById('newTodo');
        console.log(inputToDo.value);
        setToDo([...toDo, inputToDo.value])
        inputToDo.value = '';
    }

    const deleteToDo = (index) => {
        const newToDo = [...toDo];
        newToDo.splice(index, 1);
        setToDo(newToDo)
    }

    return (
        <section>

            <article>
                {toDo.map((elt, index) => {
                    return (
                        <div className='outputList'>
                            <div id='checkToDo'>
                                <input type="checkbox" name="" id="check" />
                                <p key={index}>{elt}</p>
                            </div>
                            <button id='trash' onClick={() => deleteToDo(index)}>X</button>
                        </div>
                    )
                }
                )}
            </article>
            <form action="#">
                <input type="text" id='newTodo' placeholder='Add Todo...' />
                <input type="button" value="Submit" id='button' onClick={addToDo} />
            </form>
        </section >
    );
}

export default ToDoList;