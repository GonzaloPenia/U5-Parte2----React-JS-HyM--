import { render,screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('PRUEBAS EN EL CounterApp.', () => { 

    const title = 'CounterApp';
    
    test('Debe hacer match con el snapshot', () => { 

        const {container} = render( <CounterApp title = {title} /> );
        expect(container).toMatchSnapshot();
     });

        test('Debe mostrar "CounterApp" ', () => { 
            render (<CounterApp title = {title} /> );
            expect ( screen.getByText(title) ).toBeTruthy();
    });

 });
