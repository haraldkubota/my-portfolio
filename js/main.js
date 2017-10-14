import React from 'react'
import ReactDOM from 'react-dom'

import ExampleWork from './example-work'

const myWork = [{
  'title': "Orange Pi Zero",
  'href': 'https://github.com/haraldkubota/orange_pi_gpio',
  'desc': 'Orange Pi is like Raspberry Pi, but slightly different. Less documentation mainly, so adding a simple and working example was what I looking for. Since I found nothing, I created the example i was looking for.',
  'image': {
    'desc': "Orange Pi Zero",
    'src': "images/opz-colorpins.png",
    'comment': "One Orange Pi Zero"
  }
},{
  'title': "LIFX",
  'href': 'https://github.com/haraldkubota/lifx',
  'desc': 'LIFX was one of the first ones to have Internet controlled LED lamps, so I got 2. While it took long until they offered an API, when they did, I had to test it with NodeJS.',
  'image': {
    'desc': "LIFX lamp",
    'src': "images/lifx.png",
    'comment': "One LIFX LED lamp"
  }
}, {
  'title': "Blog",
  'href': 'http://harald.studiokubota.com/wordpress/',
  'desc': 'My personal blog. Mainly so I don\'t forget things, but it\'s public so it can be useful to someone else.',
  'image': {
    'desc': "My Blog, full of Random Stuff",
    'src': "images/blog.png",
    'comment': "Picture of my blog's front page"
  }
}, {
  'title': "Docker Presentation",
  'href': 'https://docs.google.com/presentation/d/1kjlIH0CN1iWo6PoiXv94lhPUKM2uiOX89KGxKGtk4aY/edit?usp=sharing',
  'desc': 'At work as part of a general knowledge sharing series, I presented a 1h Docker presentation. Since it was created outside of work, it\'s available here. Note that it was up-to-date in 2016, but that\'s of course a long (computer-) time ago.',
  'image': {
    'desc': "Docker",
    'src': "images/docker.png",
    'comment': "Docker Presentation"
  }
}, {
  'title': "FaaS Presentation",
  'href': 'https://docs.google.com/presentation/d/10sZKbyORpOaJWOGNO3tk-hPIk5fDElo4T7n7aix0i0s/edit?usp=sharing',
  'desc': 'Similar to the Docker presentation, I created one for Serverless Compusing AKA FaaS. Mostly because it was fun to try and sharing knowledge is making it even more worthwhile. Beside an overview, it contains some examples plus comparisons between the some FaaS offerings.',
  'image': {
    'desc': "Serverless Computing",
    'src': "images/serverless.png",
    'comment': "Serverless Computing Presentation"
  }
}, {
  'title': "Code Monster",
  'href': 'http://codemonster.qw2.org/',
  'desc': 'Greg Linden created Code Monster which is trying to teach children (about 9-12 years old) how to program in JavaScript. It was available only in English, so I added support for more languages (German, Japanese) to use this in one event my current workplace held to teach children about technology. The merged source code is available on GitHub.',
  'image': {
    'desc': "Code Monster now speaks English, German and Japanese!",
    'src': "images/codemonster.png",
    'comment': "Picture of my Code Monster blog entry"
  }
}]

ReactDOM.render( <ExampleWork work={myWork}/> , document.getElementById('example-work'));