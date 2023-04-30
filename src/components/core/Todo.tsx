import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { getDatabase, ref, push } from 'firebase/database';
import TodoList from './TodoList';

// Import firebase configuration from firebase.ts file
import firebaseApp from '../../firebase';

const Todo = () => {
  const db = getDatabase(firebaseApp);
  const [title, setTitle] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const addTodo = () => {
    const todoRef = ref(db, '/todos');
    const todo = {
      title,
      done: false,
    };
    push(todoRef, todo);
  };

  return (
    <div>
      <header>
        <h1>Create Todo</h1>
      </header>

      <Form>
        <Form.Control onChange={handleChange} />
        <Button type="submit" onClick={addTodo}>
          Submit
        </Button>
      </Form>

      <TodoList />
    </div>
  );
};

export default Todo;
