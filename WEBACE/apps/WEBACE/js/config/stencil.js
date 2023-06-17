/*! Rappid v2.1.0 - HTML5 Diagramming Framework - TRIAL VERSION

Copyright (c) 2015 client IO

 2017-09-21 


This Source Code Form is subject to the terms of the Rappid Trial License
, v. 2.0. If a copy of the Rappid License was not distributed with this
file, You can obtain one at http://jointjs.com/license/rappid_v2.txt
 or from the Rappid archive as was distributed by client IO. See the LICENSE file.*/

// const { type } = require("express/lib/response");

 
var App = App || {};

App.config = App.config || {};

(function() {

    'use strict';


    App.config.stencil = {};

    App.config.stencil.groups = {
        gsn: { index: 1, label: 'GSN' },
        sacm: { index: 2, label: 'SACM' },
        Link: {index: 3, label: 'Links'}

    };

    App.config.stencil.shapes = {};

//Notasi GSN
    App.config.stencil.shapes.gsn = [
        {
            type: 'basic.Image',
            size: { width: 6, height: 4 },
            paperSize: { width: 150, height: 70 },
            allowOrthogonalResize: false,
            attrs: {
                '.': {
                    'data-tooltip': 'Goal',
                    'data-tooltip-position': 'left',
                    'data-tooltip-position-selector': '.joint-stencil',

                },
                '.body': {
                    fill: 'transparent',
                    rx: 2,
                    ry: 2,
                    stroke: '#31d0c6',
                    'stroke-width': 1,
                    'stroke-dasharray': '0'
                },
                image: {
                    'xlink:href': 'assets/GSN-goals.svg'
                },
                text: {
                    text: 'Statement',
                    fill: '#000000',
                    fontSize: 12,
                    fontFamily: 'Arial, helvetica, sans-serif',
                    refX: '0%',
                    refY: '-50%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'
                },
                '.title': {
                    text: 'G',
                    fill: '#000000',
                    'font-family': 'Roboto Condensed',
                    fontSize: 12,
                    'font-weight': 'Bold',
                    'text-decoration': 'none',
                    refX: '-43%',
                    refY: '-100%',
                    yAlignment: 'middle',
                    xAlignment: 'middle',
                }
            }, 
        },
    
        {
            type: 'basic.Image',
            size: { width: 15, height: 10 },
            paperSize: { width: 140, height: 80 },
            allowOrthogonalResize: false,

            attrs: {
                '.': {
                    'data-tooltip': 'Context',
                    'data-tooltip-position': 'left',
                    'data-tooltip-position-selector': '.joint-stencil',
                    'z' : 1
                },
                '.body': {
                    fill: 'transparent',
                    rx: 1,
                    ry: 1,
                    stroke: '#31d0c6',
                    'stroke-width': 1,
                    'stroke-dasharray': '0',
                },
                image: {
                    'xlink:href': 'assets/GSN-context.svg'
                },
                text: {
                    text: 'Statement',
                    fill: '#000000',
                    fontSize: 12,
                    fontFamily: 'Arial, helvetica, sans-serif',
                    refX: '0%',
                    refY: '-55%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'
                },
                '.title': {
                    text: 'C',
                    fill: '#000000',
                    'font-family': 'Roboto Condensed',
                    fontSize: 12,
                    'font-weight': 'Bold',
                    'text-decoration': 'none',
                    refX: '-38%',
                    refY: '-97%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'
    
                },
            }
        },
        {
            type: 'basic.Image',
            size: { width: 15, height: 10 },
            paperSize: { width: 150, height: 75 },
            allowOrthogonalResize: false,
            position: {x: 50, y:50},
            attrs: {
                '.': {
                    'data-tooltip': 'Strategy',
                    'data-tooltip-position': 'left',
                    'data-tooltip-position-selector': '.joint-stencil',
                },
                '.body': {
                    fill: 'transparent',
                    rx: 2,
                    ry: 2,
                    stroke: '#31d0c6',
                    'stroke-width': 1,
                    'stroke-dasharray': '0'
                },
                image: {
                    'xlink:href': 'assets/GSN-strategy.svg'
                },
                text: {
                    text: 'Statement',
                    fill: '#000000',
                    fontSize: 12,
                    fontFamily: 'Arial, helvetica, sans-serif',
                    refX: '0%',
                    refY: '-45%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'
                },
                '.title': {
                    text: 'S',
                    fill: '#000000',
                    'font-family': 'Roboto Condensed',
                    fontSize: 12,
                    'font-weight': 'Bold',
                    'text-decoration': 'none',
                    refX: '-30%',
                    refY: '-93%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'
    
                },
            }
        },
        {
            type: 'basic.Image',
            size: { width: 10, height: 10 },
            paperSize: { width: 90, height: 90 },
            allowOrthogonalResize: false,
            attrs: {
                '.': {
                    'data-tooltip': 'Solution',
                    'data-tooltip-position': 'left',
                    'data-tooltip-position-selector': '.joint-stencil'
                },
                '.body': {
                    fill: 'transparent',
                    rx: 2,
                    ry: 2,
                    stroke: '#31d0c6',
                    'stroke-width': 2,
                    'stroke-dasharray': '0'
                },
                image: {
                    'xlink:href': 'assets/GSN-solution.svg'
                },
                text: {
                    text: 'Statement',
                    fill: '#000000',
                    fontSize: 12,
                    fontFamily: 'Arial, helvetica, sans-serif',
                    refX: '0%',
                    refY: '-50%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'
                },
                '.title': {
                    text: 'Sn',
                    fill: '#000000',
                    'font-family': 'Roboto Condensed',
                    fontSize: 12,
                    'font-weight': 'Bold',
                    'text-decoration': 'none',
                    refX: '-30%',
                    refY: '-90%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'
    
                },
            }
        },
        {
            type: 'basic.Image',
            size: { width: 15, height: 10 },
            paperSize: { width: 150, height: 75 },
            allowOrthogonalResize: false,
            attrs: {
                '.': {
                    'data-tooltip': 'Assumptions',
                    'data-tooltip-position': 'left',
                    'data-tooltip-position-selector': '.joint-stencil'
                },
                '.body': {
                    fill: 'transparent',
                    rx: 2,
                    ry: 2,
                    stroke: '#31d0c6',
                    'stroke-width': 2,
                    'stroke-dasharray': '0'
                },
                image: {
                    'xlink:href': 'assets/GSN-assumptions.svg'
                },
                text: {
                    text: 'Statement',
                    fill: '#000000',
                    fontSize: 12,
                    fontFamily: 'Arial, helvetica, sans-serif',
                    refX: '0%',
                    refY: '-50%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'
                },
                '.title': {
                    text: 'A',
                    fill: '#000000',
                    'font-family': 'Roboto Condensed',
                    fontSize: 12,
                    'font-weight': 'Bold',
                    'text-decoration': 'none',
                    refX: '-30%',
                    refY: '-95%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'
    
                },
            }
        },
        {
            type: 'basic.Image',
            size: { width: 15, height: 10 },
            paperSize: { width: 150, height: 75 },
            allowOrthogonalResize: false,
            attrs: {
                '.': {
                    'data-tooltip': 'Justifications',
                    'data-tooltip-position': 'left',
                    'data-tooltip-position-selector': '.joint-stencil'
                },
                '.body': {
                    fill: 'transparent',
                    rx: 2,
                    ry: 2,
                    stroke: '#31d0c6',
                    'stroke-width': 2,
                    'stroke-dasharray': '0'
                },
                image: {
                    'xlink:href': 'assets/GSN-justifications.svg'
                },
                text: {
                    text: 'Statement',
                    fill: '#000000',
                    fontSize: 12,
                    fontFamily: 'Arial, helvetica, sans-serif',
                    refX: '0%',
                    refY: '-50%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'
                },
                '.title': {
                    text: 'J',
                    fill: '#000000',
                    'font-family': 'Roboto Condensed',
                    fontSize: 12,
                    'font-weight': 'Bold',
                    'text-decoration': 'none',
                    refX: '-30%',
                    refY: '-95%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'
    
                },
            }
        },
        {
            type: 'basic.Image',
            size: { width: 15, height: 10 },
            paperSize: { width: 150, height: 85 },
            allowOrthogonalResize: false,
            attrs: {
                '.': {
                    'data-tooltip': 'Undeveloped Goal',
                    'data-tooltip-position': 'left',
                    'data-tooltip-position-selector': '.joint-stencil'
                },
                '.body': {
                    fill: 'transparent',
                    rx: 2,
                    ry: 2,
                    stroke: '#31d0c6',
                    'stroke-width': 1,
                    'stroke-dasharray': '0'
                },
                image: {
                    'xlink:href': 'assets/GSN-undevelopedgoal.svg'
                },
                text: {
                    text: 'Statement',
                    fill: '#000000',
                    fontSize: 12,
                    fontFamily: 'Arial, helvetica, sans-serif',
                    refX: '0%',
                    refY: '-50%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'
                },
                '.title': {
                    text: 'ID',
                    fill: '#000000',
                    'font-family': 'Roboto Condensed',
                    fontSize: 12,
                    'font-weight': 'Bold',
                    'text-decoration': 'none',
                    refX: '-40%',
                    refY: '-95%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'
    
                },
            }
        },
        {
            type: 'basic.Image',
            size: { width: 1, height: 1 },
            paperSize: { width: 30, height: 30 },
            allowOrthogonalResize: false,
            attrs: {
                '.': {
                    'data-tooltip': 'Undeveloped',
                    'data-tooltip-position': 'left',
                    'data-tooltip-position-selector': '.joint-stencil'
                },
                '.body': {
                    fill: 'transparent',
                    rx: 2,
                    ry: 2,
                    stroke: '#31d0c6',
                    'stroke-width': 2,
                    'stroke-dasharray': '0'
                },
                image: {
                    'xlink:href': 'assets/GSN-undeveloped.svg'
                }
            }
        },
        
        {
            type: 'basic.Image',
            size: { width: 10, height: 5 },
            paperSize: { width: 80, height: 10 },
            allowOrthogonalResize: false,
            attrs: {
                '.': {
                    'data-tooltip': 'InContextOf',
                    'data-tooltip-position': 'left',
                    'data-tooltip-position-selector': '.joint-stencil'
                },
                '.body': {
                    fill: 'transparent',
                    rx: 2,
                    ry: 2,
                    stroke: '#31d0c6',
                    'stroke-width': 1,
                    'stroke-dasharray': '0'
                },
                image: {
                    'xlink:href': 'assets/GSN-incontextof.svg'
                },
                text: {
                    text: '',
                    fill: '#000000',
                    fontSize: 12,
                    fontFamily: 'Arial, helvetica, sans-serif',
                    refX: '0%',
                    refY: '-50%',
                    yAlignment: 'middle',
                    xAlignment: 'middle'
                },
            }
        },
    ];


//notasi SACM 
    App.config.stencil.shapes.sacm = [
        
    {
        type: 'basic.Image',
        size: { width: 45, height: 35 },
        paperSize: { width: 150, height: 75 },
        allowOrthogonalResize: false,
        attrs: {
            '.': {
                'data-tooltip': 'Claim',
                'data-tooltip-position': 'left',
                'data-tooltip-position-selector': '.joint-stencil'
            },
            '.body': {
                fill: 'transparent',
                rx: 2,
                ry: 2,
                stroke: '#31d0c6',
                'stroke-width': 1,
                'stroke-dasharray': '0'
            },
            image: {
                'xlink:href': 'assets/s1.svg'
            },
            text: {
                text: 'Statement',
                fill: '#000000',
                fontSize: 12,
                fontFamily: 'Arial, helvetica, sans-serif',
                refX: '0%',
                refY: '-50%',
                yAlignment: 'middle',
                xAlignment: 'middle'
            },
            '.title': {
                text: 'ID',
                fill: '#000000',
                'font-family': 'Roboto Condensed',
                fontSize: 12,
                'font-weight': 'Bold',
                'text-decoration': 'none',
                refX: '-35%',
                refY: '-93%',
                yAlignment: 'middle',
                xAlignment: 'middle'

            },
        }
    },

        {
        type: 'basic.Image',
        size: { width: 45, height: 35 },
        paperSize: { width: 150, height: 75 },
        allowOrthogonalResize: false,
        attrs: {
            '.': {
                'data-tooltip': 'Axiomatic Claim',
                'data-tooltip-position': 'left',
                'data-tooltip-position-selector': '.joint-stencil'
            },
            '.body': {
                fill: 'transparent',
                rx: 2,
                ry: 2,
                stroke: '#31d0c6',
                'stroke-width': 1,
                'stroke-dasharray': '0'
            },
            image: {
                'xlink:href': 'assets/se.svg'
            },
            text: {
                text: 'Statement',
                fill: '#000000',
                fontSize: 12,
                fontFamily: 'Arial, helvetica, sans-serif',
                refX: '0%',
                refY: '-50%',
                yAlignment: 'middle',
                xAlignment: 'middle'
            },
            '.title': {
                text: 'ID',
                fill: '#333333',
                'font-family': 'Roboto Condensed',
                fontSize: 12,
                'font-weight': 'Bold',
                'text-decoration': 'none',
                refX: '-35%',
                refY: '-93%',
                yAlignment: 'middle',
                xAlignment: 'middle'

            },
        }
        // markup :{
        //     tagName: 'text',
        //     selector: '.title'
        // }
    },
    {
        type: 'basic.Image',
        size: { width: 45, height: 35 },
        paperSize: { width: 150, height: 75 },
        allowOrthogonalResize: false,
        attrs: {
            '.': {
                'data-tooltip': 'Defeated Claim',
                'data-tooltip-position': 'left',
                'data-tooltip-position-selector': '.joint-stencil'
            },
            '.body': {
                fill: 'transparent',
                rx: 2,
                ry: 2,
                stroke: '#31d0c6',
                'stroke-width': 2,
                'stroke-dasharray': '0'
            },
            image: {
                'xlink:href': 'assets/df.svg'
            },
            text: {
                text: 'Statement',
                fill: '#000000',
                fontSize: 12,
                fontFamily: 'Arial, helvetica, sans-serif',
                refX: '0%',
                refY: '-50%',
                yAlignment: 'middle',
                xAlignment: 'middle'
            },
            '.title': {
                text: 'ID',
                fill: '#000000',
                'font-family': 'Roboto Condensed',
                fontSize: 12,
                'font-weight': 'Bold',
                'text-decoration': 'none',
                refX: '-35%',
                refY: '-93%',
                yAlignment: 'middle',
                xAlignment: 'middle'

            },
        }
    },

    {
        type: 'basic.Image',
        size: { width: 45, height: 35 },
        paperSize: { width: 150, height: 75 },
        allowOrthogonalResize: false,
        attrs: {
            '.': {
                'data-tooltip': 'NeedsSupport Claim',
                'data-tooltip-position': 'left',
                'data-tooltip-position-selector': '.joint-stencil'
            },
            '.body': {
                fill: 'transparent',
                rx: 2,
                ry: 2,
                stroke: '#31d0c6',
                'stroke-width': 2,
                'stroke-dasharray': '0'
            },
            image: {
                'xlink:href': 'assets/nsc.svg'
            },
            text: {
                text: 'Statement',
                fill: '#000000',
                fontSize: 12,
                fontFamily: 'Arial, helvetica, sans-serif',
                refX: '0%',
                refY: '-50%',
                yAlignment: 'middle',
                xAlignment: 'middle'
            },
            '.title': {
                text: 'ID',
                fill: '#000000',
                'font-family': 'Roboto Condensed',
                fontSize: 12,
                'font-weight': 'Bold',
                'text-decoration': 'none',
                refX: '-35%',
                refY: '-93%',
                yAlignment: 'middle',
                xAlignment: 'middle'

            },
        }
    },
    {
        type: 'basic.Image',
        size: { width: 45, height: 35 },
        paperSize: { width: 150, height: 75 },
        allowOrthogonalResize: false,
        attrs: {
            '.': {
                'data-tooltip': 'Abstract Claim',
                'data-tooltip-position': 'left',
                'data-tooltip-position-selector': '.joint-stencil'
            },
            '.body': {
                fill: 'transparent',
                rx: 2,
                ry: 2,
                stroke: '#31d0c6',
                'stroke-width': 2,
                'stroke-dasharray': '0'
            },
            image: {
                'xlink:href': 'assets/abstr.svg'
            },
            text: {
                text: 'Statement',
                fill: '#000000',
                fontSize: 12,
                fontFamily: 'Arial, helvetica, sans-serif',
                refX: '0%',
                refY: '-50%',
                yAlignment: 'middle',
                xAlignment: 'middle'
            },
            '.title': {
                text: 'ID',
                fill: '#000000',
                'font-family': 'Roboto Condensed',
                fontSize: 12,
                'font-weight': 'Bold',
                'text-decoration': 'none',
                refX: '-35%',
                refY: '-93%',
                yAlignment: 'middle',
                xAlignment: 'middle'

            },
        }
    }, {
        type: 'basic.Image',
        size: { width: 45, height: 35 },
        paperSize: { width: 150, height: 75 },
        allowOrthogonalResize: false,
        attrs: {
            '.': {
                'data-tooltip': 'Ascited Claim',
                'data-tooltip-position': 'left',
                'data-tooltip-position-selector': '.joint-stencil'
            },
            '.body': {
                fill: 'transparent',
                rx: 2,
                ry: 2,
                stroke: '#31d0c6',
                'stroke-width': 2,
                'stroke-dasharray': '0'
            },
            image: {
                'xlink:href': 'assets/ascited.svg'
            },
            text: {
                text: 'Statement',
                fill: '#000000',
                fontSize: 12,
                fontFamily: 'Arial, helvetica, sans-serif',
                refX: '0%',
                refY: '-50%',
                yAlignment: 'middle',
                xAlignment: 'middle'
            },
            '.title': {
                text: 'ID',
                fill: '#000000',
                'font-family': 'Roboto Condensed',
                fontSize: 12,
                'font-weight': 'Bold',
                'text-decoration': 'none',
                refX: '-35%',
                refY: '-93%',
                yAlignment: 'middle',
                xAlignment: 'middle'

            },
        }
    },
    {
        type: 'basic.Image',
        size: { width: 53, height: 42 },
        paperSize: { width: 140, height: 110 },
        allowOrthogonalResize: false,
        attrs: {
            '.': {
                'data-tooltip': 'Assumed Claim',
                'data-tooltip-position': 'left',
                'data-tooltip-position-selector': '.joint-stencil'
            },
            '.body': {
                fill: 'transparent',
                rx: 2,
                ry: 2,
                stroke: '#31d0c6',
                'stroke-width': 2,
                'stroke-dasharray': '0'
            },
            image: {
                width: 70,
                height: 72,
                'xlink:href': 'assets/assumed.svg'
            },
            text: {
                text: 'Statement',
                fill: '#000000',
                fontSize: 12,
                fontFamily: 'Arial, helvetica, sans-serif',
                refX: '0%',
                refY: '-50%',
                yAlignment: 'middle',
                xAlignment: 'middle'
            },
            '.title': {
                text: 'ID',
                fill: '#000000',
                'font-family': 'Roboto Condensed',
                fontSize: 12,
                'font-weight': 'Bold',
                'text-decoration': 'none',
                refX: '-35%',
                refY: '-90%',
                yAlignment: 'middle',
                xAlignment: 'middle'


            }
        }
    },
    {
        type: 'basic.Image',
        size: { width: 53, height: 42 },
        paperSize: { width: 150, height: 75 },
        allowOrthogonalResize: false,
        attrs: {
            '.': {
                'data-tooltip': 'Argument Reasoning',
                'data-tooltip-position': 'left',
                'data-tooltip-position-selector': '.joint-stencil'
            },
            '.body': {
                fill: 'transparent',
                rx: 2,
                ry: 2,
                stroke: '#31d0c6',
                'stroke-width': 2,
                'stroke-dasharray': '0'
            },
            image: {
                width: 70,
                height: 72,
                'xlink:href': 'assets/vec1.svg'
            },
            text: {
                text: 'Statement',
                fill: '#000000',
                fontSize: 12,
                fontFamily: 'Arial, helvetica, sans-serif',
                refX: '35%',
                refY: '-50%',
                yAlignment: 'middle',
                xAlignment: 'middle'
            },
            '.title': {
                text: 'ID',
                fill: '#000000',
                'font-family': 'Roboto Condensed',
                fontSize: 12,
                'font-weight': 'Bold',
                'text-decoration': 'none',
                refX: '7%',
                refY: '-85%',
                yAlignment: 'middle',
                xAlignment: 'middle'


            }
        }
    },
    {
        type: 'basic.Image',
        size: { width: 53, height: 42 },
        paperSize: { width: 120, height: 130 },
        allowOrthogonalResize: false,
        attrs: {
            '.': {
                'data-tooltip': 'Artifact Reference',
                'data-tooltip-position': 'left',
                'data-tooltip-position-selector': '.joint-stencil'
            },
            '.body': {
                fill: 'transparent',
                rx: 2,
                ry: 2,
                stroke: '#31d0c6',
                'stroke-width': 2,
                'stroke-dasharray': '0'
            },
            image: {
                width: 70,
                height: 72,
                'xlink:href': 'assets/SACM-artifactReference.svg'
            },
            text: {
                text: 'Statement',
                fill: '#000000',
                fontSize: 12,
                fontFamily: 'Arial, helvetica, sans-serif',
                refX: '-5%',
                refY: '-42%',
                yAlignment: 'middle',
                xAlignment: 'middle'
            },
            '.title': {
                text: 'ID',
                fill: '#000000',
                'font-family': 'Roboto Condensed',
                fontSize: 12,
                'font-weight': 'Bold',
                'text-decoration': 'none',
                refX: '-35%',
                refY: '-93%',
                yAlignment: 'middle',
                xAlignment: 'middle'


            }
        }
    },
    {
        type: 'basic.Image',
        size: { width: 53, height: 42 },
        paperSize: { width: 120, height: 130 },
        allowOrthogonalResize: false,
        attrs: {
            '.': {
                'data-tooltip': 'Abstract Artifact Reference',
                'data-tooltip-position': 'left',
                'data-tooltip-position-selector': '.joint-stencil'
            },
            '.body': {
                fill: 'transparent',
                rx: 2,
                ry: 2,
                stroke: '#31d0c6',
                'stroke-width': 2,
                'stroke-dasharray': '0'
            },
            image: {
                width: 70,
                height: 72,
                'xlink:href': 'assets/vec8.svg'
            },
            text: {
                text: 'Statement',
                fill: '#000000',
                fontSize: 12,
                fontFamily: 'Arial, helvetica, sans-serif',
                refX: '-5%',
                refY: '-42%',
                yAlignment: 'middle',
                xAlignment: 'middle'
            },
            '.title': {
                text: 'ID',
                fill: '#000000',
                'font-family': 'Roboto Condensed',
                fontSize: 12,
                'font-weight': 'Bold',
                'text-decoration': 'none',
                refX: '-35%',
                refY: '-93%',
                yAlignment: 'middle',
                xAlignment: 'middle'


            }
        }
    },
    {
        type: 'basic.Image',
        size: { width: 53, height: 42 },
        paperSize: { width: 150, height: 75 },
        allowOrthogonalResize: false,
        attrs: {
            '.': {
                'data-tooltip': 'ArgumentPackageInterface',
                'data-tooltip-position': 'left',
                'data-tooltip-position-selector': '.joint-stencil'
            },
            '.body': {
                fill: 'transparent',
                rx: 2,
                ry: 2,
                stroke: '#31d0c6',
                'stroke-width': 2,
                'stroke-dasharray': '0'
            },
            image: {
                width: 70,
                height: 72,
                'xlink:href': 'assets/vec3.svg'
            },
            text: {
                text: 'description',
                fill: '#000000',
                fontSize: 12,
                fontFamily: 'Arial, helvetica, sans-serif',
                refX: '-10%',
                refY: '-45%',
                yAlignment: 'middle',
                xAlignment: 'middle'
            },
            '.title': {
                text: 'ID',
                fill: '#000000',
                'font-family': 'Roboto Condensed',
                fontSize: 12,
                'font-weight': 'Bold',
                'text-decoration': 'none',
                refX: '-35%',
                refY: '-87%',
                yAlignment: 'middle',
                xAlignment: 'middle'


            }
        }
    },
    {
        type: 'basic.Image',
        size: { width: 53, height: 42 },
        paperSize: { width: 150, height: 75 },
        allowOrthogonalResize: false,
        attrs: {
            '.': {
                'data-tooltip': 'ArgumentPackageBinding',
                'data-tooltip-position': 'left',
                'data-tooltip-position-selector': '.joint-stencil'
            },
            '.body': {
                fill: 'transparent',
                rx: 2,
                ry: 2,
                stroke: '#31d0c6',
                'stroke-width': 2,
                'stroke-dasharray': '0'
            },
            image: {
                width: 70,
                height: 72,
                'xlink:href': 'assets/vec4.svg'
            },
            text: {
                text: 'description',
                fill: '#000000',
                fontSize: 12,
                fontFamily: 'Arial, helvetica, sans-serif',
                refX: '-10%',
                refY: '-45%',
                yAlignment: 'middle',
                xAlignment: 'middle'
            },
            '.title': {
                text: 'ID',
                fill: '#000000',
                'font-family': 'Roboto Condensed',
                fontSize: 12,
                'font-weight': 'Bold',
                'text-decoration': 'none',
                refX: '-35%',
                refY: '-87%',
                yAlignment: 'middle',
                xAlignment: 'middle'


            }
        }
    },
    {
        type: 'basic.Image',
        size: { width: 53, height: 42 },
        paperSize: { width: 150, height: 75 },
        allowOrthogonalResize: false,
        attrs: {
            '.': {
                'data-tooltip': 'ArgumentPackage',
                'data-tooltip-position': 'left',
                'data-tooltip-position-selector': '.joint-stencil'
            },
            '.body': {
                fill: 'transparent',
                rx: 2,
                ry: 2,
                stroke: '#31d0c6',
                'stroke-width': 2,
                'stroke-dasharray': '0'
            },
            image: {
                width: 70,
                height: 72,
                'xlink:href': 'assets/vec5.svg'
            },
            text: {
                text: 'description',
                fill: '#000000',
                fontSize: 12,
                fontFamily: 'Arial, helvetica, sans-serif',
                refX: '-10%',
                refY: '-45%',
                yAlignment: 'middle',
                xAlignment: 'middle'
            },
            '.title': {
                text: 'ID',
                fill: '#000000',
                'font-family': 'Roboto Condensed',
                fontSize: 12,
                'font-weight': 'Bold',
                'text-decoration': 'none',
                refX: '-35%',
                refY: '-87%',
                yAlignment: 'middle',
                xAlignment: 'middle'


            }
        }
    },
    {


        type: 'basic.Image',
        size: { width: 45, height: 35 },
        paperSize: { width: 150, height: 75 },
        allowOrthogonalResize: false,
        attrs: {
            '.': {
                'data-tooltip': 'Rectangle with ports',
                'data-tooltip-position': 'left',
                'data-tooltip-position-selector': '.joint-stencil'
            },
            '.body': {
                fill: 'transparent',
                rx: 2,
                ry: 2,
                stroke: '#31d0c6',
                'stroke-width': 1,
                'stroke-dasharray': '0'
            },
            image: {
                'xlink:href': 'assets/line1.svg'
            },
            text: {
                text: '',
                fill: '#000000',
                fontSize: 12,
                fontFamily: 'Arial, helvetica, sans-serif',
                refX: '0%',
                refY: '-60%',
                yAlignment: 'middle',
                xAlignment: 'middle'
            },
        }
    },
    {
        type: 'basic.Image',
        size: { width: 45, height: 35 },
        paperSize: { width: 150, height: 75 },
        allowOrthogonalResize: false,
        attrs: {
            '.': {
                'data-tooltip': 'Rectangle with ports',
                'data-tooltip-position': 'left',
                'data-tooltip-position-selector': '.joint-stencil'
            },
            '.body': {
                fill: 'transparent',
                rx: 2,
                ry: 2,
                stroke: '#31d0c6',
                'stroke-width': 1,
                'stroke-dasharray': '0'
            },
            image: {
                'xlink:href': 'assets/line2.svg'
            },
            text: {
                text: '',
                fill: '#000000',
                fontSize: 12,
                fontFamily: 'Arial, helvetica, sans-serif',
                refX: '0%',
                refY: '-50%',
                yAlignment: 'middle',
                xAlignment: 'middle'
            },
        }
    },
    {
        type: 'basic.Image',
        size: { width: 45, height: 35 },
        paperSize: { width: 150, height: 75 },
        allowOrthogonalResize: false,
        attrs: {
            '.': {
                'data-tooltip': 'Rectangle with ports',
                'data-tooltip-position': 'left',
                'data-tooltip-position-selector': '.joint-stencil'
            },
            '.body': {
                fill: 'transparent',
                rx: 2,
                ry: 2,
                stroke: '#31d0c6',
                'stroke-width': 1,
                'stroke-dasharray': '0'
            },
            image: {
                'xlink:href': 'assets/line3.svg'
            },
            text: {
                text: '',
                fill: '#000000',
                fontSize: 12,
                fontFamily: 'Arial, helvetica, sans-serif',
                refX: '0%',
                refY: '-50%',
                yAlignment: 'middle',
                xAlignment: 'middle'
            },
        }
    },
    {
        type: 'basic.Image',
        size: { width: 45, height: 35 },
        paperSize: { width: 150, height: 75 },
        allowOrthogonalResize: false,
        attrs: {
            '.': {
                'data-tooltip': 'Rectangle with ports',
                'data-tooltip-position': 'left',
                'data-tooltip-position-selector': '.joint-stencil'
            },
            '.body': {
                fill: 'transparent',
                rx: 2,
                ry: 2,
                stroke: '#31d0c6',
                'stroke-width': 1,
                'stroke-dasharray': '0'
            },
            image: {
                'xlink:href': 'assets/line4.svg'
            },
            text: {
                text: '',
                fill: '#000000',
                fontSize: 12,
                fontFamily: 'Arial, helvetica, sans-serif',
                refX: '0%',
                refY: '-50%',
                yAlignment: 'middle',
                xAlignment: 'middle'
            },
        }
    },
    {
        type: 'basic.Image',
        size: { width: 45, height: 35 },
        paperSize: { width: 150, height: 75 },
        allowOrthogonalResize: false,
        attrs: {
            '.': {
                'data-tooltip': 'Rectangle with ports',
                'data-tooltip-position': 'left',
                'data-tooltip-position-selector': '.joint-stencil'
            },
            '.body': {
                fill: 'transparent',
                rx: 2,
                ry: 2,
                stroke: '#31d0c6',
                'stroke-width': 1,
                'stroke-dasharray': '0'
            },
            image: {
                'xlink:href': 'assets/line5.svg'
            },
            text: {
                text: '',
                fill: '#000000',
                fontSize: 12,
                fontFamily: 'Arial, helvetica, sans-serif',
                refX: '-5%',
                refY: '-50%',
                yAlignment: 'middle',
                xAlignment: 'middle'
            },
        }
    },
    {
        type: 'basic.Image',
        size: { width: 45, height: 35 },
        paperSize: { width: 150, height: 75 },
        allowOrthogonalResize: false,
        attrs: {
            '.': {
                'data-tooltip': 'Rectangle with ports',
                'data-tooltip-position': 'left',
                'data-tooltip-position-selector': '.joint-stencil'
            },
            '.body': {
                fill: 'transparent',
                rx: 2,
                ry: 2,
                stroke: '#31d0c6',
                'stroke-width': 1,
                'stroke-dasharray': '0'
            },
            image: {
                'xlink:href': 'assets/line6.svg'
            },
            text: {
                text: '',
                fill: '#000000',
                fontSize: 12,
                fontFamily: 'Arial, helvetica, sans-serif',
                refX: '0%',
                refY: '-50%',
                yAlignment: 'middle',
                xAlignment: 'middle'
            },
        }
    },
    {
        type: 'basic.Image',
        size: { width: 10, height: 1 },
        paperSize: { width: 120, height: 10 },
        allowOrthogonalResize: false,
        attrs: {
            '.': {
                'data-tooltip': 'Asserted Context',
                'data-tooltip-position': 'left',
                'data-tooltip-position-selector': '.joint-stencil'
            },
            '.body': {
                fill: 'transparent',
                rx: 2,
                ry: 2,
                stroke: '#31d0c6',
                'stroke-width': 1,
                'stroke-dasharray': '0'
            },
            image: {
                'xlink:href': 'assets/sacm-assertedContext.svg'
            },
            text: {
                text: '',
                fill: '#000000',
                fontSize: 12,
                fontFamily: 'Arial, helvetica, sans-serif',
                refX: '0%',
                refY: '-50%',
                yAlignment: 'middle',
                xAlignment: 'middle'
            },
        }
    },
    {
        type: 'basic.Image',
        size: { width: 45, height: 35 },
        paperSize: { width: 150, height: 75 },
        allowOrthogonalResize: false,
        attrs: {
            '.': {
                'data-tooltip': 'Rectangle with ports',
                'data-tooltip-position': 'left',
                'data-tooltip-position-selector': '.joint-stencil'
            },
            '.body': {
                fill: 'transparent',
                rx: 2,
                ry: 2,
                stroke: '#31d0c6',
                'stroke-width': 1,
                'stroke-dasharray': '0'
            },
            image: {
                'xlink:href': 'assets/line7.svg'
            },
            text: {
                text: '',
                fill: '#000000',
                fontSize: 12,
                fontFamily: 'Arial, helvetica, sans-serif',
                refX: '0%',
                refY: '-50%',
                yAlignment: 'middle',
                xAlignment: 'middle'
            },
        }
    },
    ];

    //Notasi Others
    App.config.stencil.shapes.Link = [

        {
            type: 'app.Link',
            size: { width: 80, height: 60 }
        },
    ]

})();
