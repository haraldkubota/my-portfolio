import React from 'react';
import { shallow, mount, render } from 'enzyme';

import ExampleWork, { ExampleWorkBubble } from '../js/example-work';

const myWork = [{
  'title': "Cats",
  'image': {
    'desc': "Cats",
    'src': "images/example2.png",
    'comment': "example screenshot of a project involving cats"
  }
}, {
  'title': "Dragons",
  'image': {
    'desc': "Here be Dragons",
    'src': "images/example1.png",
    'comment': "example screenshot of a project involving code"
  }
}];

describe("ExampleWork component", () => {
	let component = shallow(<ExampleWork work={myWork}/>);

	it("should be a section element", () => {
		expect(component.type()).toEqual('section')
	})

	it("should include as many children as there are work examples", () => {
		expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
	})
})

describe("ExampleWorkBubble component", () => {
	let component = shallow(<ExampleWorkBubble example={myWork[1]}/>)
	let images = component.find("img");

	it("should contain a single img element", () => {
		expect(images.length).toEqual(1)
	})

	it("should have the image src set correctly", () => {
		expect(images.node.props.src).toEqual(myWork[1].image.src);
	})
})