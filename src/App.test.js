import fetchMock from 'jest-fetch-mock';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import App from './App';

beforeEach(() => {
  fetchMock.resetMocks();
});

test('renders loading page', () => {
  render(<App />);
  const loadingElement = screen.getByText(/loading/i);
  expect(loadingElement).toBeInTheDocument();
});

test('displays image seed', () => {
  render(<App seed="hello" />);
  const linkElement = screen.getByText(/seed: hello/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders an image', async () => {
  const mockResponseData = {
    counter: 1,
    status: 200,
    statusText: 'ok',
    url: 'http://img.com/hi',
  };
  fetchMock.mockResponse('', mockResponseData);
  render(<App seed="hello" />);
  await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
  const image = screen.getByRole('img');
  expect(image.src).toEqual(mockResponseData.url);
});
