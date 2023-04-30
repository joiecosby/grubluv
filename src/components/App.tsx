import AppHome from './home/AppHome';
import Todo from './core/Todo';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const App = () => {
  return (
    // <AppHome />
    <Todo />
    // <div>
    //   <div
    //     css={css({
    //       margin: 10,
    //       padding: 10,
    //       backgroundColor: '#eee',
    //     })}
    //   >
    //     This is an example of <code>`css`</code> using an object.
    //   </div>
    //   <div
    //     css={css`
    //       margin: 10px;
    //       padding: 10px;
    //       background-color: #235789;
    //     `}
    //   >
    //     This is an example of <code>`css`</code> using a tagged template literal.
    //   </div>
    // </div>
  );
};

export default App;
