import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ShallowWrapper, shallow } from 'enzyme';

describe('App', () => {
	let app: ShallowWrapper;

	beforeEach(() => {
		app = shallow(<App />);
	});

	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
