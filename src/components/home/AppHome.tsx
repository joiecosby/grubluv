// import { Fragment } from 'react';
// import { Link } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { DOMAttributes } from 'react';

declare namespace React {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: any;
  }
}
const HOME_ITEMS = [
  {
    title: 'Popular Movie',
  },
  {
    title: 'Query',
  },
  {
    title: 'Load',
  },
];

const AppHome = () => {
  return (
    // <div> {/* This is where I get the error message */}

    <div
      className="slds-m-top_small"
      css={css`
        max-width: calc(33em * 3);
        margin-left: auto;
        margin-right: auto;
      `}
    >
      <div
        css={css`ç
            display: grid;
            gap: 1em;
            grid-template-columns: repeat(auto-fit, minmax(5em, 30em));
            justify-content: center;
          `}
      >
        {HOME_ITEMS?.map((card) => (
          <div
            key={card.title}
            className="slds-box slds-box_x-small"
            css={css`
              background-color: #235789;
            `}
          >
            <p>{card.title}</p>
          </div>
        ))}
      </div>
    </div>
  );

  //   const titleStyle = css({
  //     boxSizing: 'border-box',
  //     width: 300,
  //     height: 2000,
  //   });

  //   return (
  //     <div>
  //       <div
  //         css={css({
  //           margin: 10,
  //           padding: 10,
  //           backgroundColor: '#eee',
  //         })}
  //       >
  //         This is an example of <code>`css`</code> using an object.
  //       </div>
  //       <div
  //         css={css`
  //           margin: 10px;
  //           padding: 10px;
  //           background-color: #235789;
  //         `}
  //       >
  //         This is an example of <code>`css`</code> using a tagged template literal.
  //       </div>
  //     </div>
  //   );
};

export default AppHome;
