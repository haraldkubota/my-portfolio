import React from 'react';
import { shallow, mount, render } from 'enzyme';

import ExampleWork, { ExampleWorkBubble } from '../js/example-work';
//import ExampleWorkModal from '../js/example-work-modal';

const myWork = [{
  'title': "Cats",
  'href': 'https://example.com',
  'image': {
    'desc': "Cats",
    'src': "images/example2.png",
    'comment': "example screenshot of a project involving cats"
  }
}, {
  'title': "Dragons",
  'href': 'https://example.com',
  'image': {
    'desc': "Here be Dragons",
    'src': "images/example1.png",
    'comment': "example screenshot of a project involving code"
  }
}];

describe("ExampleWork component", () => {
	let component = shallow(<ExampleWork work={myWork}/>);

	it("should be a section element", () => {
		expect(component.type()).toEqual('span')
	})

	it("should include as many children as there are work examples", () => {
		expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
	})

	it("should allow the modal to open", () => {
		component.instance().openModal();
		expect(component.instance().state.modalOpen).toBe(true);
	})
	it("should allow the modal to close", () => {
		component.instance().closeModal();
		expect(component.instance().state.modalOpen).toBe(false);
	})
})

describe("ExampleWorkBubble component", () => {
	let mockOpenModalFn = jest.fn();

	let component = shallow(<ExampleWorkBubble example={myWork[1]}
		openModal={mockOpenModalFn}/>)
	let images = component.find("img");

	it("should contain a single img element", () => {
		expect(images.length).toEqual(1)
	})

	it("should have the image src set correctly", () => {
		expect(images.node.props.src).toEqual(myWork[1].image.src);
	})

	it("should call the openModal handler when clicked", () => {
		component.find(".section__exampleWrapper").simulate('click');
		expect(mockOpenModalFn).toHaveBeenCalled();
	})
})