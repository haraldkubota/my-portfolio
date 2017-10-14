import React from 'react'
import ReactDOM from 'react-dom'

import ExampleWork from './example-work'

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
}, {
  'title': "Blog",
  'image': {
    'desc': "My Blog, full or Random Stuff",
    'src': "images/blog.png",
    'comment': "example screenshot of a project involving blogs"
  }
}]

ReactDOM.render( < ExampleWork work={myWork}/> , document.getElementById('example-work'));