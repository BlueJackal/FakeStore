import Intro2 from '../components/Intro2';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe('Intro2 Component', () => {
  test('renders heading and paragraph', () => {
    const { getByText } = render(<Intro2 />);

    const headingElement = getByText(/Check out our current sales!/i);
    expect(headingElement).toBeInTheDocument();

    const paragraphElement = getByText(/The hottest seasonal merch./i);
    expect(paragraphElement).toBeInTheDocument();
  });
});