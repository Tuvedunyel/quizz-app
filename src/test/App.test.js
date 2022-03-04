import { render } from "@testing-library/react";
import App from "./../App";

describe( 'App Component', () => {

    //test if App component renders
    it( 'renders', () => {
        render( <App /> );
    });
} )