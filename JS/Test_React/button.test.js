//installation in package
// npm install @testing-library/react react-test-renderer jest-dom --save-dev

//button.js
import React from 'react';

function Button({label}){
return <div data-testid='button' className='buttonstyle'>{label}</div>
}

export default Button;

//button testing
//you now have to create a __test__ folder
//create button.test.js

import React from 'react';
import ReactDom from 'React-dom';
import Button from './component/Button/button';

import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';

import renderer from 'react-test-renderer';

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<Button></Button>, div)
    //ReactDom.ummountComponentAtNode(div);
});

it('render button correctly', () => {
   const { getByTestId } = render(<Button label='Click me Please'></Button>);
   expect(getByTestId('button')).toHaveTextContent('Click me Please');
});

it('render button correctly', () => {
    const { getByTestId } = render(<Button label='Save'></Button>);
    expect(getByTestId('button')).toHaveTextContent('Save');
 });

 it('matches Snapshot 1', () => {
    const tree = renderer.create(<Button label='save'></Button>).toJSON();
    expect(tree).toMatchSnapshot();
 });

 it('matches Snapshot 2', () => {
    const tree = renderer.create(<Button label='save'></Button>).toJSON();
    expect(tree).toMatchSnapshot();
 });


