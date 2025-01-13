import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock";
import "@testing-library/jest-dom";

test("should render RestaurantCard Component data with props", () => {

    render(<RestaurantCard resData = {MOCK_DATA}/>);

    const name = screen.getByText("Chinese Wok");

    expect(name).toBeInTheDocument();
});

// test("should render RestaurantCard Component with Promoted label", () => {

//     render(<RestaurantCardPromoted  resData = {MOCK_DATA}/>);

//     const id = screen.getByLabelText("Promoted");

//     expect(id).toBeInTheDocument();
// });