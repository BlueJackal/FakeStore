import ProductCarousel from '../components/Carousel';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe('ProductCarousel Component', () => {
  test('renders the correct number of carousel items', () => {
    const mockProducts = [
      { id: 1, image: 'img1.jpg', title: 'Product 1', price: 10 },
      { id: 2, image: 'img2.jpg', title: 'Product 2', price: 20 },
      { id: 3, image: 'img3.jpg', title: 'Product 3', price: 30 },
    ];

    const { container } = render(<ProductCarousel products={mockProducts} />);
    
    const carouselItems = container.querySelectorAll('.carousel-item');
    expect(carouselItems.length).toBe(mockProducts.length);
  });
});
