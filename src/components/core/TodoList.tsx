import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, update, remove } from 'firebase/database';
import { FormCheck } from 'react-bootstrap';

import firebaseApp from '../../firebase';

import { Todo } from '../../components/types/todo';

const TodoList = () => {
  const db = getDatabase(firebaseApp);
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    const todoRef = ref(db, '/todos');

    onValue(todoRef, (snapshot) => {
      const todos = snapshot.val();
      const newTodoList: Todo[] = [];

      for (let id in todos) {
        newTodoList.push({ id, ...todos[id] });
      }

      setTodoList(newTodoList);
    });
  }, [db]);

  const changeTodoCompletion = (todo: Todo) => {
    const todoRef = ref(db, '/todos/' + todo.id);
    update(todoRef, { done: !todo.done });
  };

  const deleteCompletedItems = () => {
    const recordsToDelete = todoList.filter((todo) => {
      return todo.done;
    });

    console.log('recordsToDelete', recordsToDelete);
    todoList.map((todo) => {
      if (todo.done) {
        const todoRef = ref(db, '/todos/' + todo.id);
        remove(todoRef);
      }
    });
  };

  return (
    <div>
      <h1>Todo List</h1>
      {todoList.map((todo, index) => {
        return <FormCheck key={index} checked={todo.done} onChange={() => changeTodoCompletion(todo)} label={todo.title} />;
      })}
      <button onClick={deleteCompletedItems}> Clear completed</button>
    </div>
  );
};

export default TodoList;
