import React, { useEffect, useState } from 'react'

function TodoCount({todos}) {
    const [activeCount, setActiveCount] = useState(0);

    useEffect(()=>{
        let active = 0;
        for(const todo of todos) {
            if(todo.active)
                active++;
        }
        setActiveCount(active);
    }, [todos]);

  return (
    <div>
        총 할일개수:{todos.length}개, 완료된 할일:{activeCount}개
    </div>
  )
}

export default TodoCount