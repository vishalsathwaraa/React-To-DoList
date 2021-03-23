import { logDOM } from '@testing-library/dom';
import React from 'react'

const CompletedTodo = (props) => {

    const { completed } = props;



    return (
        <div>
            <ol>

                {completed.map((val) => {

                    if (val !== '') {
                        return <li>{val.list}</li>;
                    }
                }
                  
                )}
             
            </ol>
        </div>
    )
}

export default CompletedTodo
