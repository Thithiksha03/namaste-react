import { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockCartMenu.json";
import { Provider } from "react-redux";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
}));

test("should load restaurent menu component", async() => {
   await act(async() => render(
    <BrowserRouter>
   <Provider store = {appStore}> 
   <Header />
   <RestaurantMenu /> </Provider>
   </BrowserRouter>));

   const accordionHeader = screen.getByText("Veg Pizza (14)")
   fireEvent.click(accordionHeader);

   expect(screen.getAllByTestId("foodItems").length).toBe(14);

   expect(screen.getByText("Cart - (0)")).toBeInTheDocument();

   const addBtns = screen.getAllByRole("button", {name : "ADD +"});
   fireEvent.click(addBtns[0]);

   expect(screen.getByText("Cart - (1)")).toBeInTheDocument();

   fireEvent.click(addBtns[1]);
   expect(screen.getByText("Cart - (2)")).toBeInTheDocument();

});