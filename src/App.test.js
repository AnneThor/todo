import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from './app.js';

// Not looking at external sources yet, may need later on
// const server = setupServer(
//   rest.get('http://test.com', (req, res, ctx) => {
//     let data = {
//       count: 1,
//       results: {
//         text: 'testing'
//       }
//     }
//     return res(ctx.json(data));
//   })
// )
//
// beforeAll(() => { server.listen() })
//
// afterEach(() => { server.resetHandlers() })
//
// afterAll(() => { server.close() });

test("renders title", () => {
  render(<App />)
  const titleElement = screen.getByTestId("header");
  expect(screen.getByTestId("header")).toBeInTheDocument;
  expect(titleElement.textContent).toBe("5 Tasks Remain!");
})

test("that we can add an item to the list", () => {
  render(<App />);

  const form = screen.getByTestId("form");
  const taskInput = screen.getByTestId("task-input");
  const levelInput = screen.getByTestId("difficulty");
  const personInput = screen.getByTestId("personInput");
  const taskSubmit = screen.getByTestId("task-submit");
  const todoList = screen.getByTestId("todo-list")



  // make all the fake events
  fireEvent.change(taskInput, { target: { name: 'text', value: 'testTask' }});
  fireEvent.change(levelInput, { target: { name: 'difficulty', value: '9' }});
  fireEvent.change(personInput, { target: { name: 'assignee', value: 'John Doe' }});

  // make the fake submit event
  fireEvent.click(taskSubmit);

  // now we should see this in the list
  waitFor( () => {
    expect(screen.getByTestId("todoList")).toHaveTextContent("testTask");
  })

})



// Let's revisit that a little later on
// test("can fetch data", async () => {
//   render(<App />);
//
//   const home = screen.getByTestId("home");
//   fireEvent.click(home);
//
//   const form = screen.getByTestId("urlForm");
//   const url = screen.getByTestId("url");
//   const radioGet = screen.getByTestId("get")
//
//   // make the fake event in the url field
//   fireEvent.change(url, { target: { name: 'url', value: 'http://test.com' }})
//   fireEvent.click(radioGet, { target: { name: 'method', value: 'get' }})
//   fireEvent.submit(form);
//
//   await waitFor( () => {
//     expect(screen.getByTestId('method')).toHaveTextContent('Method: get');
//     expect(screen.getByTestId('json')).toHaveTextContent('testing');
//   })
// })
