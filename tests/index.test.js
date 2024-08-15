import Home from '../pages/index';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

// Mock the problematic components
jest.mock('../components/Carousel', () => () => <div>Mocked Carousel</div>);
jest.mock('../components/Intro2', () => () => <div>Mocked Intro2</div>);
jest.mock('../components/RandomProducts', () => () => <div>Mocked RandomProducts</div>);

describe('Home Page', () => {
  test('renders the Intro component with correct text', () => {
    const { getByText } = render(<Home products={[]} />);

    // Check for the h1 element with the text "Welcome to FakeStore!"
    const headingElement = getByText(/Welcome to FakeStore!/i);
    expect(headingElement).toBeInTheDocument();

    // Check for the paragraph element with the expected text
    const paragraphElement = getByText(/Your one-stop-shop for all the best fake products/i);
    expect(paragraphElement).toBeInTheDocument();
  });
});