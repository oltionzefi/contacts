import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { Message } from './Message';

describe('Message', () => {
	let message: ShallowWrapper;

	const status = true;

	beforeEach(() => {
		message = shallow(<Message status={status} />);
	});

	it('should show successful message', () => {});

	describe('Message failed', () => {
		const status = false;

		beforeEach(() => {
			message = shallow(<Message status={status} />);
		});

		it('should show failed message', () => {});
	});
});
