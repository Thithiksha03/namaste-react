import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router";
import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";


test("Should render Header component with login button", () => {

    render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button");

    expect(loginButton).toBeInTheDocument();
});

test("Should render Header component with cart items", () => {

    render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart - (0)");

    expect(cartItems).toBeInTheDocument();
});

test("Should render Header component with cart", () => {

    render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
    );

    const cart = screen.getByText(/Cart/);

    expect(cart).toBeInTheDocument();
});

test("Should change Login button to logout on click", () => {

    render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"});

    expect(logoutButton).toBeInTheDocument();
});
