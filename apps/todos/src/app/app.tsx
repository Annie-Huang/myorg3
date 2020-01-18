import React, {useEffect, useState} from 'react';
import { Todo } from '@myorg3/data';

import './app.css';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';

import { Route, Link } from 'react-router-dom';
import { Todos } from '@myorg3/ui';


// interface Todo {
//   title: string;
// }


export const App = () => {
  // const [todos, setTodos] = useState<Todo[]>([
  //   { title: 'Todo 1' },
  //   { title: 'Todo 2' }
  // ]);
  //
  // function addTodo() {
  //   setTodos([
  //     ...todos,
  //     {
  //       title: `New todo ${Math.floor(Math.random() * 1000)}`
  //     }
  //   ]);
  // }

  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('/api/todos')
      .then(_ => _.json())
      .then(setTodos);
  }, []);

  function addTodo() {
    fetch('/api/addTodo', {
      method: 'POST',
      body: ''
    })
      .then(_ => _.json())
      .then(newTodo => {
        setTodos([...todos, newTodo]);
      });
  }


  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.css file.
   */
  return (
    <>
      <h1>Todos</h1>

      {/*<ul>*/}
      {/*{todos.map((t, i) => (*/}
      {/*    <li className={'todo'} key={i}>{t.title}</li>*/}
      {/*  ))}*/}
      {/*</ul>*/}

      <Todos todos={todos} />
      <button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </button>


      <div className="app">
        <header className="flex">
          <Logo width="75" height="75" />
          <h1>Welcome to todos!</h1>
        </header>
        <main>
          <h2>Resources &amp; Tools</h2>
          <p>Thank you for using and showing some ♥ for Nx.</p>
          <div className="flex github-star-container">
            <a
              href="https://github.com/nrwl/nx"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              If you like Nx, please give it a star:
              <div className="github-star-badge">
                <img src={star} className="material-icons" alt="" />
                Star
              </div>
            </a>
          </div>
          <p>Here are some links to help you get started.</p>
          <ul className="resources">
            <li className="col-span-2">
              <a
                className="resource flex"
                href="https://connect.nrwl.io/app/courses/nx-workspaces/intro"
              >
                Nx video course
              </a>
            </li>
            <li className="col-span-2">
              <a
                className="resource flex"
                href="https://nx.dev/react/getting-started/what-is-nx"
              >
                Nx video tutorial
              </a>
            </li>
            <li className="col-span-2">
              <a
                className="resource flex"
                href="https://nx.dev/react/tutorial/01-create-application"
              >
                Interactive tutorial
              </a>
            </li>
            <li className="col-span-2">
              <a className="resource flex" href="https://connect.nrwl.io/">
                <img
                  height="36"
                  alt="Nrwl Connect"
                  src="https://connect.nrwl.io/assets/img/CONNECT_ColorIcon.png"
                />
                <span className="gutter-left">Nrwl Connect</span>
              </a>
            </li>
          </ul>
          <h2>Next Steps</h2>
          <p>Here are some things you can do with Nx.</p>
          <details open>
            <summary>Add UI library</summary>
            <pre>{`# Generate UI lib
    nx g @nrwl/react:lib ui

    # Add a component
    nx g @nrwl/react:component xyz --project ui`}</pre>
          </details>
          <details>
            <summary>View dependency graph</summary>
            <pre>{`nx dep-graph`}</pre>
          </details>
          <details>
            <summary>Run affected commands</summary>
            <pre>{`# see what's been affected by changes
    nx affected:dep-graph

    # run tests for current changes
    nx affected:test

    # run e2e tests for current changes
    nx affected:e2e
    `}</pre>
          </details>
        </main>

        {/* START: routes */}
        {/* These routes and navigation have been generated for you */}
        {/* Feel free to move and update them to fit your needs */}
        <br />
        <hr />
        <br />
        <div role="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page-2">Page 2</Link>
            </li>
          </ul>
        </div>
        <Route
          path="/"
          exact
          render={() => (
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          )}
        />
        <Route
          path="/page-2"
          exact
          render={() => (
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          )}
        />
        {/* END: routes */}
      </div>
    </>
  );
};

export default App;
