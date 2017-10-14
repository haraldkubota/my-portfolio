import React from 'react'
import ReactDOM from 'react-dom'

import ExampleWork from './example-work'

const myWork = [{
  'title': "Cats",
  'href': 'https://example.com',
  'desc': 'cats Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  'image': {
    'desc': "Cats",
    'src': "images/example2.png",
    'comment': "example screenshot of a project involving cats"
  }
}, {
  'title': "Dragons",
  'href': 'https://example.com',
  'desc': 'dragons Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  'image': {
    'desc': "Here be Dragons",
    'src': "images/example1.png",
    'comment': "example screenshot of a project involving code"
  }
}, {
  'title': "Blog",
  'href': 'https://example.com',
  'desc': 'blog Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  'image': {
    'desc': "My Blog, full or Random Stuff",
    'src': "images/blog.png",
    'comment': "example screenshot of a project involving blogs"
  }
}]

ReactDOM.render( < ExampleWork work={myWork}/> , document.getElementById('example-work'));