import {screen, render } from "@testing-library/react"
import Contactus from "../Contactus";
import "@testing-library/jest-dom";


test("Test if the conatct us component has header",()=>{

    render(<Contactus/>);

    const header = screen.getByRole('heading');

expect(header).toBeInTheDocument();
});

test("Test if the submit button present in the component", () =>{
    render(<Contactus />);

    const button = screen.getByText('Submit');

    expect(button).toBeInTheDocument();
    

});



