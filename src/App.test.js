import React from 'react';
import { render, fireEvent, screen, getAllByText } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

test('renders all categories and rewards', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/Rewards/i)).toBeInTheDocument();
  expect(getByText(/C1/i)).toBeInTheDocument();
  expect(getByText(/C2/i)).toBeInTheDocument();
  expect(getByText(/C3/i)).toBeInTheDocument();
  expect(getByText(/C4/i)).toBeInTheDocument();
  expect(getByText(/C5/i)).toBeInTheDocument();
  expect(getByText(/R1/i)).toBeInTheDocument();
  expect(getByText(/R2/i)).toBeInTheDocument();
  expect(getByText(/R3/i)).toBeInTheDocument();
  expect(getByText(/R4/i)).toBeInTheDocument();
  expect(getByText(/R5/i)).toBeInTheDocument();
});

test('drags and drops properly', () => {
  const { getAllByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  act(() => {
    fireEvent.dragStart(screen.getByText('R1'));
    fireEvent.drop(screen.getByText('C1'));
    fireEvent.dragEnd(screen.getByText('R1'));
  })

  expect(getAllByText(/R1/i).length).toBe(2);
});

test('redoes and undoes properly', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  act(() => {
    fireEvent.dragStart(screen.getByText('R1'));
    fireEvent.drop(screen.getByText('C1'));
    fireEvent.click(screen.getByText(/Undo/i));
  })

  expect(getByText(/R1/i)).toBeInTheDocument();
})