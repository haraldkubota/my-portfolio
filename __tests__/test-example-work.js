import React from 'react';
import { shallow, mount, render } from 'enzyme';

import ExampleWork, { ExampleWorkBubble } from '../js/example-work';
//import ExampleWorkModal from '../js/example-work-modal';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

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

	void it("should be a section element", () => {
		expect(component.type()).toEqual('span')
	})

	void it("should include as many children as there are work examples", () => {
		expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
	})

	void it("should allow the modal to open", () => {
		component.instance().openModal();
		expect(component.instance().state.modalOpen).toBe(true);
	})
	void it("should allow the modal to close", () => {
		component.instance().closeModal();
		expect(component.instance().state.modalOpen).toBe(false);
	})
})

describe("ExampleWorkBubble component", () => {
	let mockOpenModalFn = jest.fn();

	let component = shallow(<ExampleWorkBubble example={myWork[1]}
		openModal={mockOpenModalFn}/>)
	let images = component.find("img");

	void it("should contain a single img element", () => {
		expect(images.length).toEqual(1)
	})

	void it("should have the image src set correctly", () => {
		expect(images.prop('src')).toEqual(myWork[1].image.src);
	})

	void it("should call the openModal handler when clicked", () => {
		component.find(".section__exampleWrapper").simulate('click');
		expect(mockOpenModalFn).toHaveBeenCalled();
	})
})
