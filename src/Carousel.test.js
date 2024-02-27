import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("works when you click on the right arrow", function () {
  const { container } = render(
    <Carousel
      photos={ TEST_IMAGES }
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});



test('left arrow should move to the previous image', () => {
  const { getByTestId } = render(<Carousel photos={ photos } />);

  // Assuming your images have data-testid attributes for targeting in tests
  const rightArrow = getByTestId('right-arrow');
  const leftArrow = getByTestId('left-arrow');

  // Move to the second image
  fireEvent.click(rightArrow);

  // Try moving back to the first image
  fireEvent.click(leftArrow);

  const image = getByTestId('image').src;
  expect(image).toBe(photos[0].src); // This will initially fail because left arrow moves to the next image
});

test('left arrow is missing on the first image', () => {
  render(<Carousel photos={ photos } title="Test Carousel" />);
  const leftArrow = screen.queryByTestId('left-arrow'); // Ensure you add data-testid attributes to your elements
  expect(leftArrow).toBeNull();
});

test('right arrow is missing on the last image', () => {
  render(<Carousel photos={ photos } title="Test Carousel" />);
  const rightArrow = screen.queryByTestId('right-arrow');
  // Simulate clicking to the last image
  for (let i = 0; i < photos.length - 1; i++) {
    fireEvent.click(rightArrow);
  }
  expect(screen.queryByTestId('right-arrow')).toBeNull();
});
