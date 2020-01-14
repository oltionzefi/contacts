import React, { useCallback } from 'react';
import { ContainerBox } from './ContainerBox';
import { shallow, ShallowWrapper } from 'enzyme';
import { DropTargetMonitor } from 'react-dnd';

describe('Upload ContainerBox', () => {
	let uplaodContainerBox: ShallowWrapper;
	const onDrop = useCallback((item: any, monitor: DropTargetMonitor) => {}, []);

	beforeEach(() => {
		uplaodContainerBox = shallow(<ContainerBox onDrop={onDrop} />);
	});

	it('renders upload container box', () => {
		expect(uplaodContainerBox.children).toContain('ContainerBox');
	});
});
