import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event"
import Card from "./Card"

it ('should expect card to be on screen', async () => {
  await render(<Card />);

  const cards = screen.queryAllByRole("card")

  cards.forEach(card => {
    expect(card).toBeInTheDocument();
})  
});

it ('should render an image on the cards', async () => {
    await render(<Card />);
  
    const cardImages = screen.queryAllByRole("card__image")
  
    cardImages.forEach(image => {
      expect(image).toBeInTheDocument();
  })  
});

it ('should render the beer name on the cards', async () => {
    await render(<Card />);
  
    const cardHeadings = screen.queryAllByRole("card__heading")
  
    cardHeadings.forEach(heading => {
      expect(heading).toBeInTheDocument();
  })  
});

it ('should render the tagline on the cards', async () => {
    await render(<Card />);
  
    const cardTaglines = screen.queryAllByRole("card__tagline")
  
    cardTaglines.forEach(tagline => {
      expect(tagline).toBeInTheDocument();
  })  
});

it ('should render the abv value on the cards', async () => {
    await render(<Card />);
  
    const cardABVs = screen.queryAllByRole("card__abv")
  
    cardABVs.forEach(abvs => {
      expect(abvs).toBeInTheDocument();
  })  
});

it ('should render the description on the cards', async () => {
    await render(<Card />);
  
    const cardDescriptions = screen.queryAllByRole("card__description")
  
    cardDescriptions.forEach(desc => {
      expect(desc).toBeInTheDocument();
  })  
});

