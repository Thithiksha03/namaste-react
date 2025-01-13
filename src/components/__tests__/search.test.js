import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResData.json";
import Body from "../Body";
import { act } from "react";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});

it("should search res List for burger test input", async () => {
    await act(async () => render(<BrowserRouter> <Body /> </BrowserRouter>));

    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(8);

    const searchbtn = screen.getByRole("button", {name:"search"});

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {target : {value:"burger"}});

    fireEvent.click(searchbtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(1);
});

it("should filter Top Rated Restaurants", async () => {
    await act(async () => render(<BrowserRouter> <Body /> </BrowserRouter>));

    const cardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(8);

    const TopRatedBtn = screen.getByRole("button", {name : "Top Rated Restaurants"});
    fireEvent.click(TopRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(8);

});