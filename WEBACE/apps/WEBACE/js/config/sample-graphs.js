// /*! Rappid v2.1.0 - HTML5 Diagramming Framework - TRIAL VERSION

// Copyright (c) 2015 client IO

//  2017-09-21 


// This Source Code Form is subject to the terms of the Rappid Trial License
// , v. 2.0. If a copy of the Rappid License was not distributed with this
// file, You can obtain one at http://jointjs.com/license/rappid_v2.txt
//  or from the Rappid archive as was distributed by client IO. See the LICENSE file.*/


 var App = App || {};
 App.config = App.config || {};

 (function() {

    'use strict';

    App.config.sampleGraphs = {
    emergencyProcedure: '{"cells":[{"type":"basic.Image","position":{"x":370,"y":215},"size":{"width":150,"height":70},"angle":0,"allowOrthogonalResize":false,"id":"4559fb01-fda5-4798-ab88-d0250a73e168","z":1,"attrs":{"text":{"text":"control system is\nacceptably safe to\noperate.","fontSize":10,"fontFamily":"Arial, helvetica, sans-serif","refX":"0%","refY":"-65%","yAlignment":"middle","xAlignment":"middle"},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"},".body":{"fill":"transparent","rx":2,"ry":2,"stroke":"#31d0c6","stroke-width":1,"stroke-dasharray":"0"},"image":{"xlink:href":"assets/GSN-goals.svg"},".title":{"text":"G1","fill":"#000000","font-family":"Roboto Condensed","fontSize":10,"font-weight":"Bold","text-decoration":"none","refX":"-40%","refY":"-95%","yAlignment":"middle","xAlignment":"middle"}}},{"type":"basic.Image","position":{"x":618,"y":205},"size":{"width":140,"height":80},"angle":0,"allowOrthogonalResize":false,"id":"f0280177-ba29-4ea2-a0e9-12b938163c79","z":2,"attrs":{"text":{"text":"Control system\ndefinition","fontSize":10,"fontFamily":"Arial, helvetica, sans-serif","refX":"0%","refY":"-65%","yAlignment":"middle","xAlignment":"middle"},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil","z":1},".body":{"fill":"transparent","rx":1,"ry":1,"stroke":"#31d0c6","stroke-width":1,"stroke-dasharray":"0"},"image":{"xlink:href":"assets/GSN-context.svg"},".title":{"text":"C2","fill":"#000000","font-family":"Roboto Condensed","fontSize":12,"font-weight":"Bold","text-decoration":"none","refX":"-30%","refY":"-85%","yAlignment":"middle","xAlignment":"middle"}}},{"type":"basic.Image","position":{"x":120,"y":205},"size":{"width":140,"height":80},"angle":0,"allowOrthogonalResize":false,"id":"fffe35c0-8739-4e8c-99e8-033eede00b51","z":3,"attrs":{"text":{"text":"Statement","fontSize":12,"fontFamily":"Arial, helvetica, sans-serif","refX":"0%","refY":"-65%","yAlignment":"middle","xAlignment":"middle"},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil","z":1},".body":{"fill":"transparent","rx":1,"ry":1,"stroke":"#31d0c6","stroke-width":1,"stroke-dasharray":"0"},"image":{"xlink:href":"assets/GSN-context.svg"},".title":{"text":"C-","fill":"#000000","font-family":"Roboto Condensed","fontSize":12,"font-weight":"Bold","text-decoration":"none","refX":"-30%","refY":"-85%","yAlignment":"middle","xAlignment":"middle"}}},{"type":"basic.Image","position":{"x":170,"y":350},"size":{"width":150,"height":70},"angle":0,"allowOrthogonalResize":false,"id":"1e153a52-2667-4426-b47a-b09d37320657","z":4,"attrs":{"text":{"text":"Statement","fontSize":12,"fontFamily":"Arial, helvetica, sans-serif","refX":"0%","refY":"-65%","yAlignment":"middle","xAlignment":"middle"},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"},".body":{"fill":"transparent","rx":2,"ry":2,"stroke":"#31d0c6","stroke-width":1,"stroke-dasharray":"0"},"image":{"xlink:href":"assets/GSN-goals.svg"},".title":{"text":"G-","fill":"#000000","font-family":"Roboto Condensed","fontSize":12,"font-weight":"Bold","text-decoration":"none","refX":"-40%","refY":"-95%","yAlignment":"middle","xAlignment":"middle"}}},{"type":"basic.Image","position":{"x":555,"y":350},"size":{"width":150,"height":70},"angle":0,"allowOrthogonalResize":false,"id":"db2d5860-ed00-42e7-b73c-f417fc8871a2","z":5,"attrs":{"text":{"text":"Statement","fontSize":12,"fontFamily":"Arial, helvetica, sans-serif","refX":"0%","refY":"-65%","yAlignment":"middle","xAlignment":"middle"},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"},".body":{"fill":"transparent","rx":2,"ry":2,"stroke":"#31d0c6","stroke-width":1,"stroke-dasharray":"0"},"image":{"xlink:href":"assets/GSN-goals.svg"},".title":{"text":"G-","fill":"#000000","font-family":"Roboto Condensed","fontSize":12,"font-weight":"Bold","text-decoration":"none","refX":"-40%","refY":"-95%","yAlignment":"middle","xAlignment":"middle"}}},{"type":"basic.Image","position":{"x":375,"y":345},"size":{"width":140,"height":80},"angle":0,"allowOrthogonalResize":false,"id":"92afae82-de0e-4438-9ee1-b54c7dddf74e","z":6,"attrs":{"text":{"text":"Statement","fontSize":12,"fontFamily":"Arial, helvetica, sans-serif","refX":"0%","refY":"-65%","yAlignment":"middle","xAlignment":"middle"},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil","z":1},".body":{"fill":"transparent","rx":1,"ry":1,"stroke":"#31d0c6","stroke-width":1,"stroke-dasharray":"0"},"image":{"xlink:href":"assets/GSN-context.svg"},".title":{"text":"C-","fill":"#000000","font-family":"Roboto Condensed","fontSize":12,"font-weight":"Bold","text-decoration":"none","refX":"-30%","refY":"-85%","yAlignment":"middle","xAlignment":"middle"}}},{"type":"basic.Image","position":{"x":770,"y":345},"size":{"width":140,"height":80},"angle":0,"allowOrthogonalResize":false,"id":"a565e7f9-289a-436a-9c43-a1dbaadd6952","z":7,"attrs":{"text":{"text":"Statement","fontSize":12,"fontFamily":"Arial, helvetica, sans-serif","refX":"0%","refY":"-65%","yAlignment":"middle","xAlignment":"middle"},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil","z":1},".body":{"fill":"transparent","rx":1,"ry":1,"stroke":"#31d0c6","stroke-width":1,"stroke-dasharray":"0"},"image":{"xlink:href":"assets/GSN-context.svg"},".title":{"text":"C-","fill":"#000000","font-family":"Roboto Condensed","fontSize":12,"font-weight":"Bold","text-decoration":"none","refX":"-30%","refY":"-85%","yAlignment":"middle","xAlignment":"middle"}}},{"type":"basic.Image","position":{"x":-10,"y":345},"size":{"width":140,"height":80},"angle":0,"allowOrthogonalResize":false,"id":"946c0b53-8e60-4ad4-a295-afe49cca5c0e","z":8,"attrs":{"text":{"text":"Statement","fontSize":12,"fontFamily":"Arial, helvetica, sans-serif","refX":"0%","refY":"-65%","yAlignment":"middle","xAlignment":"middle"},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil","z":1},".body":{"fill":"transparent","rx":1,"ry":1,"stroke":"#31d0c6","stroke-width":1,"stroke-dasharray":"0"},"image":{"xlink:href":"assets/GSN-context.svg"},".title":{"text":"C-","fill":"#000000","font-family":"Roboto Condensed","fontSize":12,"font-weight":"Bold","text-decoration":"none","refX":"-30%","refY":"-85%","yAlignment":"middle","xAlignment":"middle"}}},{"type":"basic.Image","position":{"x":-95,"y":480},"size":{"width":150,"height":75},"angle":0,"allowOrthogonalResize":false,"id":"176029be-2a69-4ce1-b544-be0fa4d642a1","z":9,"attrs":{"text":{"text":"All hazard have\nbeen identified","fontSize":12,"fontFamily":"Arial, helvetica, sans-serif","refX":"0%","refY":"-70%","yAlignment":"middle","xAlignment":"middle"},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"},".body":{"fill":"transparent","rx":2,"ry":2,"stroke":"#31d0c6","stroke-width":2,"stroke-dasharray":"0"},"image":{"xlink:href":"assets/GSN-assumptions.svg"},".title":{"text":"A1","fill":"#000000","font-family":"Roboto Condensed","fontSize":12,"font-weight":"Bold","text-decoration":"none","refX":"-30%","refY":"-85%","yAlignment":"middle","xAlignment":"middle"}}},{"type":"basic.Image","position":{"x":170,"y":480},"size":{"width":150,"height":75},"angle":0,"allowOrthogonalResize":false,"id":"47dbc04b-f08b-40b4-907f-c9bfb5358af0","z":10,"attrs":{"text":{"text":"Argument   over  each\nidentified hazard","fontSize":12,"fontFamily":"Arial, helvetica, sans-serif","refX":"0%","refY":"-65%","yAlignment":"middle","xAlignment":"middle"},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"},".body":{"fill":"transparent","rx":2,"ry":2,"stroke":"#31d0c6","stroke-width":1,"stroke-dasharray":"0"},"image":{"xlink:href":"assets/GSN-strategy.svg"},".title":{"text":"ID","fill":"#000000","font-family":"Roboto Condensed","fontSize":12,"font-weight":"Bold","text-decoration":"none","refX":"-30%","refY":"-85%","yAlignment":"middle","xAlignment":"middle"}}},{"type":"basic.Image","position":{"x":395,"y":480},"size":{"width":150,"height":75},"angle":0,"allowOrthogonalResize":false,"id":"3b935dc1-48af-4af9-979c-82c4c83b559a","z":11,"attrs":{"text":{"text":"Statement","fontSize":12,"fontFamily":"Arial, helvetica, sans-serif","refX":"0%","refY":"-70%","yAlignment":"middle","xAlignment":"middle"},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"},".body":{"fill":"transparent","rx":2,"ry":2,"stroke":"#31d0c6","stroke-width":2,"stroke-dasharray":"0"},"image":{"xlink:href":"assets/GSN-justifications.svg"},".title":{"text":"ID","fill":"#000000","font-family":"Roboto Condensed","fontSize":12,"font-weight":"Bold","text-decoration":"none","refX":"-30%","refY":"-85%","yAlignment":"middle","xAlignment":"middle"}}},{"type":"basic.Image","position":{"x":613,"y":480},"size":{"width":150,"height":75},"angle":0,"allowOrthogonalResize":false,"id":"a72c1794-c65e-4b37-b2b3-1f59f284e922","z":12,"attrs":{"text":{"text":"Statement","fontSize":12,"fontFamily":"Arial, helvetica, sans-serif","refX":"0%","refY":"-65%","yAlignment":"middle","xAlignment":"middle"},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"},".body":{"fill":"transparent","rx":2,"ry":2,"stroke":"#31d0c6","stroke-width":1,"stroke-dasharray":"0"},"image":{"xlink:href":"assets/GSN-strategy.svg"},".title":{"text":"ID","fill":"#000000","font-family":"Roboto Condensed","fontSize":12,"font-weight":"Bold","text-decoration":"none","refX":"-30%","refY":"-85%","yAlignment":"middle","xAlignment":"middle"}}},{"type":"basic.Image","position":{"x":833,"y":475},"size":{"width":140,"height":80},"angle":0,"allowOrthogonalResize":false,"id":"fbbd9d68-03f0-4231-ac16-8d6e18ceb449","z":13,"attrs":{"text":{"text":"Statement","fontSize":12,"fontFamily":"Arial, helvetica, sans-serif","refX":"0%","refY":"-65%","yAlignment":"middle","xAlignment":"middle"},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil","z":1},".body":{"fill":"transparent","rx":1,"ry":1,"stroke":"#31d0c6","stroke-width":1,"stroke-dasharray":"0"},"image":{"xlink:href":"assets/GSN-context.svg"},".title":{"text":"C-","fill":"#000000","font-family":"Roboto Condensed","fontSize":12,"font-weight":"Bold","text-decoration":"none","refX":"-30%","refY":"-85%","yAlignment":"middle","xAlignment":"middle"}}},{"type":"basic.Image","position":{"x":-65,"y":623},"size":{"width":150,"height":70},"angle":0,"allowOrthogonalResize":false,"id":"0a1fe513-0fc8-476e-8e93-65a833cb0cd1","z":14,"attrs":{"text":{"text":"Statement","fontSize":12,"fontFamily":"Arial, helvetica, sans-serif","refX":"0%","refY":"-65%","yAlignment":"middle","xAlignment":"middle"},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"},".body":{"fill":"transparent","rx":2,"ry":2,"stroke":"#31d0c6","stroke-width":1,"stroke-dasharray":"0"},"image":{"xlink:href":"assets/GSN-goals.svg"},".title":{"text":"G-","fill":"#000000","font-family":"Roboto Condensed","fontSize":12,"font-weight":"Bold","text-decoration":"none","refX":"-40%","refY":"-95%","yAlignment":"middle","xAlignment":"middle"}}},{"type":"basic.Image","position":{"x":115,"y":623},"size":{"width":150,"height":70},"angle":0,"allowOrthogonalResize":false,"id":"764a1477-e634-490e-aa77-3d6a8261032f","z":15,"attrs":{"text":{"text":"Statement","fontSize":12,"fontFamily":"Arial, helvetica, sans-serif","refX":"0%","refY":"-65%","yAlignment":"middle","xAlignment":"middle"},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"},".body":{"fill":"transparent","rx":2,"ry":2,"stroke":"#31d0c6","stroke-width":1,"stroke-dasharray":"0"},"image":{"xlink:href":"assets/GSN-goals.svg"},".title":{"text":"G-","fill":"#000000","font-family":"Roboto Condensed","fontSize":12,"font-weight":"Bold","text-decoration":"none","refX":"-40%","refY":"-95%","yAlignment":"middle","xAlignment":"middle"}}},{"type":"basic.Image","position":{"x":300,"y":623},"size":{"width":150,"height":70},"angle":0,"allowOrthogonalResize":false,"id":"663690b3-6caa-4450-a25c-6d4f8baf6361","z":16,"attrs":{"text":{"text":"Statement","fontSize":12,"fontFamily":"Arial, helvetica, sans-serif","refX":"0%","refY":"-65%","yAlignment":"middle","xAlignment":"middle"},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"},".body":{"fill":"transparent","rx":2,"ry":2,"stroke":"#31d0c6","stroke-width":1,"stroke-dasharray":"0"},"image":{"xlink:href":"assets/GSN-goals.svg"},".title":{"text":"G-","fill":"#000000","font-family":"Roboto Condensed","fontSize":12,"font-weight":"Bold","text-decoration":"none","refX":"-40%","refY":"-95%","yAlignment":"middle","xAlignment":"middle"}}},{"type":"basic.Image","position":{"x":555,"y":623},"size":{"width":150,"height":70},"angle":0,"allowOrthogonalResize":false,"id":"b8e39381-2c23-4c9c-a11c-073dbcfc3b63","z":17,"attrs":{"text":{"text":"Statement","fontSize":12,"fontFamily":"Arial, helvetica, sans-serif","refX":"0%","refY":"-65%","yAlignment":"middle","xAlignment":"middle"},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"},".body":{"fill":"transparent","rx":2,"ry":2,"stroke":"#31d0c6","stroke-width":1,"stroke-dasharray":"0"},"image":{"xlink:href":"assets/GSN-goals.svg"},".title":{"text":"G-","fill":"#000000","font-family":"Roboto Condensed","fontSize":12,"font-weight":"Bold","text-decoration":"none","refX":"-40%","refY":"-95%","yAlignment":"middle","xAlignment":"middle"}}},{"type":"basic.Image","position":{"x":738,"y":623},"size":{"width":150,"height":70},"angle":0,"allowOrthogonalResize":false,"id":"e9f99283-0190-4c98-99e3-0800cf9bec1d","z":18,"attrs":{"text":{"text":"Statement","fontSize":12,"fontFamily":"Arial, helvetica, sans-serif","refX":"0%","refY":"-65%","yAlignment":"middle","xAlignment":"middle"},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"},".body":{"fill":"transparent","rx":2,"ry":2,"stroke":"#31d0c6","stroke-width":1,"stroke-dasharray":"0"},"image":{"xlink:href":"assets/GSN-goals.svg"},".title":{"text":"G-","fill":"#000000","font-family":"Roboto Condensed","fontSize":12,"font-weight":"Bold","text-decoration":"none","refX":"-40%","refY":"-95%","yAlignment":"middle","xAlignment":"middle"}}},{"type":"basic.Image","position":{"x":585,"y":746},"size":{"width":90,"height":90},"angle":0,"allowOrthogonalResize":false,"id":"b4b34ee0-eb5a-4f3c-87be-6d00eb3d0a0f","z":19,"attrs":{"text":{"text":"Statement","fontSize":12,"fontFamily":"Arial, helvetica, sans-serif","refX":"0%","refY":"-60%","yAlignment":"middle","xAlignment":"middle"},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"},".body":{"fill":"transparent","rx":2,"ry":2,"stroke":"#31d0c6","stroke-width":2,"stroke-dasharray":"0"},"image":{"xlink:href":"assets/GSN-solution.svg"},".title":{"text":"ID","fill":"#000000","font-family":"Roboto Condensed","fontSize":12,"font-weight":"Bold","text-decoration":"none","refX":"-30%","refY":"-85%","yAlignment":"middle","xAlignment":"middle"}}},{"type":"basic.Image","position":{"x":770,"y":746},"size":{"width":90,"height":90},"angle":0,"allowOrthogonalResize":false,"id":"c9b9a506-a3ac-4e0d-8228-dc5371c92b04","z":20,"attrs":{"text":{"text":"Statement","fontSize":12,"fontFamily":"Arial, helvetica, sans-serif","refX":"0%","refY":"-60%","yAlignment":"middle","xAlignment":"middle"},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"},".body":{"fill":"transparent","rx":2,"ry":2,"stroke":"#31d0c6","stroke-width":2,"stroke-dasharray":"0"},"image":{"xlink:href":"assets/GSN-solution.svg"},".title":{"text":"ID","fill":"#000000","font-family":"Roboto Condensed","fontSize":12,"font-weight":"Bold","text-decoration":"none","refX":"-30%","refY":"-85%","yAlignment":"middle","xAlignment":"middle"}}},{"type":"basic.Image","position":{"x":260,"y":771},"size":{"width":90,"height":90},"angle":0,"allowOrthogonalResize":false,"id":"f795b88a-b415-4a1e-a5f9-c7046e400a8c","z":21,"attrs":{"text":{"text":"Fault tree\nanalysis","fontSize":12,"fontFamily":"Arial, helvetica, sans-serif","refX":"0%","refY":"-60%","yAlignment":"middle","xAlignment":"middle"},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"},".body":{"fill":"transparent","rx":2,"ry":2,"stroke":"#31d0c6","stroke-width":2,"stroke-dasharray":"0"},"image":{"xlink:href":"assets/GSN-solution.svg"},".title":{"text":"Sn2","fill":"#000000","font-family":"Roboto Condensed","fontSize":12,"font-weight":"Bold","text-decoration":"none","refX":"-30%","refY":"-85%","yAlignment":"middle","xAlignment":"middle"}}},{"type":"basic.Image","position":{"x":-35,"y":771},"size":{"width":90,"height":90},"angle":0,"allowOrthogonalResize":false,"id":"26851b22-7264-49a4-a920-9a00c9824a76","z":22,"attrs":{"text":{"text":"Statement","fontSize":12,"fontFamily":"Arial, helvetica, sans-serif","refX":"0%","refY":"-60%","yAlignment":"middle","xAlignment":"middle"},".":{"data-tooltip-position":"left","data-tooltip-position-selector":".joint-stencil"},".body":{"fill":"transparent","rx":2,"ry":2,"stroke":"#31d0c6","stroke-width":2,"stroke-dasharray":"0"},"image":{"xlink:href":"assets/GSN-solution.svg"},".title":{"text":"ID","fill":"#000000","font-family":"Roboto Condensed","fontSize":12,"font-weight":"Bold","text-decoration":"none","refX":"-30%","refY":"-85%","yAlignment":"middle","xAlignment":"middle"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"4559fb01-fda5-4798-ab88-d0250a73e168"},"target":{"id":"fffe35c0-8739-4e8c-99e8-033eede00b51"},"id":"d16cb2a6-480d-4918-a3de-43d5958303b5","z":23,"labels":[],"attrs":{"line":{"stroke":"blue"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"4559fb01-fda5-4798-ab88-d0250a73e168"},"target":{"id":"f0280177-ba29-4ea2-a0e9-12b938163c79"},"id":"27f01070-0cb7-4be0-94ed-01126a7a5c07","z":24,"labels":[],"attrs":{"line":{"stroke":"blue"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"smooth"},"source":{"id":"4559fb01-fda5-4798-ab88-d0250a73e168"},"target":{"id":"1e153a52-2667-4426-b47a-b09d37320657"},"id":"1867c46a-8f6c-47de-8443-c260a96fa9cf","z":25,"labels":[],"attrs":{"line":{"stroke":"blue"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"smooth"},"source":{"id":"4559fb01-fda5-4798-ab88-d0250a73e168"},"target":{"id":"db2d5860-ed00-42e7-b73c-f417fc8871a2"},"id":"69e0de83-dbec-4cd4-9cf4-7150ef4377dd","z":26,"labels":[],"attrs":{"line":{"stroke":"blue"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"db2d5860-ed00-42e7-b73c-f417fc8871a2"},"target":{"id":"a565e7f9-289a-436a-9c43-a1dbaadd6952"},"id":"b8461708-f530-43ee-af04-8ac2c4b6f652","z":27,"vertices":[],"labels":[],"attrs":{"line":{"stroke":"blue"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"db2d5860-ed00-42e7-b73c-f417fc8871a2"},"target":{"id":"92afae82-de0e-4438-9ee1-b54c7dddf74e"},"id":"3da185f5-d369-4afb-a1f5-b5c9728e22ec","z":28,"labels":[],"attrs":{"line":{"stroke":"blue"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"1e153a52-2667-4426-b47a-b09d37320657"},"target":{"id":"92afae82-de0e-4438-9ee1-b54c7dddf74e"},"id":"45fbd84a-9fd1-4d4e-ab0a-2354f230da94","z":29,"labels":[],"attrs":{"line":{"stroke":"blue"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"1e153a52-2667-4426-b47a-b09d37320657"},"target":{"id":"946c0b53-8e60-4ad4-a295-afe49cca5c0e"},"id":"47cc63f0-06e6-40be-b6b8-aeeee284ca0c","z":30,"labels":[],"attrs":{"line":{"stroke":"blue"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"1e153a52-2667-4426-b47a-b09d37320657"},"target":{"id":"47dbc04b-f08b-40b4-907f-c9bfb5358af0"},"id":"6a187947-f2e1-4309-a10d-eb7562f1a32b","z":31,"attrs":{"line":{"stroke":"blue"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"smooth"},"source":{"id":"47dbc04b-f08b-40b4-907f-c9bfb5358af0"},"target":{"id":"0a1fe513-0fc8-476e-8e93-65a833cb0cd1"},"id":"460230e8-38b3-4786-8849-37e1edd6cee2","z":32,"labels":[],"attrs":{"line":{"stroke":"blue"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"smooth"},"source":{"id":"47dbc04b-f08b-40b4-907f-c9bfb5358af0"},"target":{"id":"764a1477-e634-490e-aa77-3d6a8261032f"},"id":"1b9a8d97-70e2-4516-b1df-90a079319821","z":33,"labels":[],"attrs":{"line":{"stroke":"blue"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"smooth"},"source":{"id":"47dbc04b-f08b-40b4-907f-c9bfb5358af0"},"target":{"id":"663690b3-6caa-4450-a25c-6d4f8baf6361"},"id":"268a0371-8738-42be-8594-11f752d3ba26","z":34,"labels":[],"attrs":{"line":{"stroke":"blue"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"a72c1794-c65e-4b37-b2b3-1f59f284e922"},"target":{"id":"fbbd9d68-03f0-4231-ac16-8d6e18ceb449"},"id":"31af34e1-410c-4cab-8262-1eb3c6ad79d9","z":35,"labels":[],"attrs":{"line":{"stroke":"blue"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"a72c1794-c65e-4b37-b2b3-1f59f284e922"},"target":{"id":"3b935dc1-48af-4af9-979c-82c4c83b559a"},"id":"1e6e28a8-c812-4f1f-bcba-5f185aeb5f1c","z":36,"labels":[],"attrs":{"line":{"stroke":"blue"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"47dbc04b-f08b-40b4-907f-c9bfb5358af0"},"target":{"id":"176029be-2a69-4ce1-b544-be0fa4d642a1"},"id":"a84fbb7b-347d-42a0-898a-f6703cb66c0f","z":37,"labels":[],"attrs":{"line":{"stroke":"blue"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"smooth"},"source":{"id":"764a1477-e634-490e-aa77-3d6a8261032f"},"target":{"id":"f795b88a-b415-4a1e-a5f9-c7046e400a8c"},"id":"57cebc5c-3982-4ca3-a771-93c065d740ab","z":38,"labels":[],"attrs":{"line":{"stroke":"blue"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"smooth"},"source":{"id":"663690b3-6caa-4450-a25c-6d4f8baf6361"},"target":{"id":"f795b88a-b415-4a1e-a5f9-c7046e400a8c"},"id":"62f9f9ed-047e-4e4b-8234-551d2353ed42","z":39,"labels":[],"attrs":{"line":{"stroke":"blue"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"0a1fe513-0fc8-476e-8e93-65a833cb0cd1"},"target":{"id":"26851b22-7264-49a4-a920-9a00c9824a76"},"id":"5ae62cab-aa16-4984-97ca-a93dddb145a0","z":40,"attrs":{"line":{"stroke":"blue"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"db2d5860-ed00-42e7-b73c-f417fc8871a2"},"target":{"id":"a72c1794-c65e-4b37-b2b3-1f59f284e922"},"id":"be3f5e19-7f16-4983-a304-5a47ec4a35f4","z":41,"attrs":{"line":{"stroke":"blue"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"smooth"},"source":{"id":"a72c1794-c65e-4b37-b2b3-1f59f284e922"},"target":{"id":"b8e39381-2c23-4c9c-a11c-073dbcfc3b63"},"id":"b61ba8b4-63db-4b60-ae0f-fd7b8943af50","z":42,"labels":[],"attrs":{"line":{"stroke":"blue"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"smooth"},"source":{"id":"a72c1794-c65e-4b37-b2b3-1f59f284e922"},"target":{"id":"e9f99283-0190-4c98-99e3-0800cf9bec1d"},"id":"6b0eba1a-8581-4ff8-b618-681d47f2c9ce","z":43,"labels":[],"attrs":{"line":{"stroke":"blue"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"e9f99283-0190-4c98-99e3-0800cf9bec1d"},"target":{"id":"c9b9a506-a3ac-4e0d-8228-dc5371c92b04"},"id":"73d70359-6a31-4f13-b794-70a01d9d6ae3","z":44,"attrs":{"line":{"stroke":"blue"}}},{"type":"app.Link","router":{"name":"normal"},"connector":{"name":"normal"},"source":{"id":"b8e39381-2c23-4c9c-a11c-073dbcfc3b63"},"target":{"id":"b4b34ee0-eb5a-4f3c-87be-6d00eb3d0a0f"},"id":"78330201-4a28-45a9-94a9-8e81d9fc3af6","z":45,"attrs":{"line":{"stroke":"blue"}}}]}'   
    };

})();
