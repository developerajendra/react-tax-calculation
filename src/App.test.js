import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import {Forms} from './components/forms/forms';
// import {add} from './sum';

 

test('render correctly app component', () => {  
  const appComponent = renderer.create(<App />).toJSON();
  expect(appComponent).toMatchSnapshot();
});

test('renders without creashing',()=>{
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
});

test('rener correctly form component',()=>{
  const formComponent = renderer.create(<Forms/>).toJSON();
  expect(formComponent).toMatchSnapshot();
});
 
// test('adding the two numbers', ()=>{
//   expect(add(1,2)).toBe(3);
// });

// it('check form component should have title props',()=>{
//   const props = {
//     title:'test'
//   }, FormsComponent = mount(<Forms/>);
//   expect((FormsComponent).prop('title')).toEqual('test');
// });

 