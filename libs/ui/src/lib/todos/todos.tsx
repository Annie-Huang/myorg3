import React from 'react';

import './todos.css';
import {Todo} from '@myorg3/data';

/* eslint-disable-next-line */
export interface TodosProps {}

// export const Todos = (props: TodosProps) => {
//   return (
//     <div>
//       <h1>Welcome to todos component!</h1>
//     </div>
//   );
// };

export const Todos = (props: { todos: Todo[] }) => {
  return (
    <ul>
      {props.todos.map((t,i) => (
        <li className={'todo'} key={i}>{t.title}</li>
      ))}
    </ul>
  );
};
export default Todos;
