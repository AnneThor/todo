// import react and necessary testing utils
import React from "react";
import { act } from 'react-dom/test-utils';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

// import mock API utilities from Mock Service Worker
import { rest } from 'msw';
import { setupServer } from 'msw/node';

// import components to test
import App from './App.js'

let tasks = [{
  task: "Walk the dog", difficulty: 2, person: "Annie", completed: false
}];

const server = setupServer(
  rest.get('*/task', (req, res, ctx) => {
    return res(ctx.json(tasks));
  }),

  rest.post(`*/task`, (req, res, ctx) => {
    const task = req.body;
    task._id = Math.random();
    tasks.push(item);
    return res(ctx.json(task));
  }),

  rest.put(`*/task/:id`, (req, res, ctx) => {
    const task = req.body;
    const id = parseFloat(req.params.id);
    tasks = tasks.map(i => i._id === id ? item : i);
    return res(ctx.json(task));
  }),

  rest.delete(`*/task/:id`, (req, res, ctx) => {
    const id = parseFloat(req.params.id);
    tasks = tasks.filter(task => task._id !== id);
    return res(null);
  })

)

beforeAll(() => {
  server.listen()
});

afterEach(() => {
  server.resetHandlers()
});

afterAll(() => {
  server.close();
})

test("that we can toggle item status", async () => {
    render(<App />)
    const container = screen.findByTestId("todo-wrapper")
    const list = screen.findByTestId("todo-list")
    const button = await screen.findByTestId("completed")
    fireEvent.click(button);

    await waitFor( async() => {
      expect(button.className).toBe("btn btn-danger")
    })

})
