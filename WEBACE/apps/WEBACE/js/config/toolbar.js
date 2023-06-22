/*! Rappid v2.1.0 - HTML5 Diagramming Framework - TRIAL VERSION

Copyright (c) 2015 client IO

 2017-09-21 


This Source Code Form is subject to the terms of the Rappid Trial License
, v. 2.0. If a copy of the Rappid License was not distributed with this
file, You can obtain one at http://jointjs.com/license/rappid_v2.txt
 or from the Rappid archive as was distributed by client IO. See the LICENSE file.*/


var App = App || {};
App.config = App.config || {};

(function() {

    'use strict';

    App.config.toolbar = {
        groups: {
            'undo-redo': { index: 1 },
            'clear': { index: 2 },
            'export': { index: 3 },
            'print': { index: 4 },
            'fullscreen': { index: 5 },
            'zoom': { index: 6 },
            'grid': { index: 7 },
            'save': { index: 8 },
            'tojson': { index: 9 },
            'help': { index: 10 },
        },
        tools: [
            {
                type: 'undo',
                name: 'undo',
                group: 'undo-redo',
                attrs: {
                    button: {
                        'data-tooltip': 'Undo',
                        'data-tooltip-position': 'top',
                        'data-tooltip-position-selector': '.toolbar-container'
                    }
                }
            },
            {
                type: 'redo',
                name: 'redo',
                group: 'undo-redo',
                attrs: {
                    button: {
                        'data-tooltip': 'Redo',
                        'data-tooltip-position': 'top',
                        'data-tooltip-position-selector': '.toolbar-container'
                    }
                }
            },
            {
                type: 'button',
                name: 'clear',
                group: 'clear',
                attrs: {
                    button: {
                        id: 'btn-clear',
                        'data-tooltip': 'Clear Paper',
                        'data-tooltip-position': 'top',
                        'data-tooltip-position-selector': '.toolbar-container'
                    }
                }
            },
            {
                type: 'button',
                name: 'svg',
                group: 'export',
                text: 'Export SVG',
                attrs: {
                    button: {
                        id: 'btn-svg',
                        'data-tooltip': 'Open as SVG in a pop-up',
                        'data-tooltip-position': 'top',
                        'data-tooltip-position-selector': '.toolbar-container'
                    }
                }
            },
            {
                type: 'button',
                name: 'png',
                group: 'export',
                text: 'Export PNG',
                attrs: {
                    button: {
                        id: 'btn-png',
                        'data-tooltip': 'Open as PNG in a pop-up',
                        'data-tooltip-position': 'top',
                        'data-tooltip-position-selector': '.toolbar-container'
                    }
                }
            },
            {
                type: 'button',
                name: 'print',
                group: 'print',
                attrs: {
                    button: {
                        id: 'btn-print',
                        'data-tooltip': 'Open a Print Dialog',
                        'data-tooltip-position': 'top',
                        'data-tooltip-position-selector': '.toolbar-container'
                    }
                }
            },
   
            {
                type: 'zoom-to-fit',
                name: 'zoom-to-fit',
                group: 'zoom',
                attrs: {
                    button: {
                        'data-tooltip': 'Zoom To Fit',
                        'data-tooltip-position': 'top',
                        'data-tooltip-position-selector': '.toolbar-container'
                    }
                }
            },
            {
                type: 'zoom-out',
                name: 'zoom-out',
                group: 'zoom',
                attrs: {
                    button: {
                        'data-tooltip': 'Zoom Out',
                        'data-tooltip-position': 'top',
                        'data-tooltip-position-selector': '.toolbar-container'
                    }
                }
            },
            {
                type: 'label',
                name: 'zoom-slider-label',
                group: 'zoom',
                text: 'Zoom:'
            },
            {
                type: 'zoom-slider',
                name: 'zoom-slider',
                group: 'zoom'
            },
            {
                type: 'zoom-in',
                name: 'zoom-in',
                group: 'zoom',
                attrs: {
                    button: {
                        'data-tooltip': 'Zoom In',
                        'data-tooltip-position': 'top',
                        'data-tooltip-position-selector': '.toolbar-container'
                    }
                }
            },
            // {
            //     type: 'separator',
            //     group: 'grid'
            // },
            {
                type: 'label',
                name: 'grid-size-label',
                group: 'grid',
                text: 'Grid size:',
                attrs: {
                    label: {
                        'data-tooltip': 'Change Grid Size',
                        'data-tooltip-position': 'top',
                        'data-tooltip-position-selector': '.toolbar-container'
                    }
                }
            },
            {
                type: 'range',
                name: 'grid-size',
                group: 'grid',
                text: 'Grid size:',
                min: 1,
                max: 50,
                step: 1,
                value: 10
            },
            {

                type: 'button',
                name: 'tojson',
                group: 'tojson',
                text: 'Load JSON',
                attrs: {
                    button: {
                        'data-tooltip': 'Load JSON',
                        'data-tooltip-position': 'bottom',
                        'data-tooltip-position-selector': '.toolbar-container',
                    }
                }
            },
            {
                type: 'button',
                name: 'save',
                group: 'save',
                text: 'Save as JSON',
                attrs: {
                    button: {
                        'data-tooltip': 'Save as JSON',
                        id: 'btn-save',
                        'data-tooltip-position': 'bottom',
                        'data-tooltip-position-selector': '.toolbar-container',
                    }
                }
            },

            // {
            //     type: 'separator',
            //     group: 'help'
            // },

          // button assurance cases rules
            {
                type: 'button',
                name: 'help',
                group:'help',
                text: 'Assurance cases examples',
                icon: 'help',
                attrs: {
                    button: {
                        'data-tooltip': 'Assurance cases rules',
                        'data-tooltip-position': 'top',
                        'data-tooltip-position-selector': '.toolbar-container',
                        onclick: "window.open('https://nisas-organization.gitbook.io/assurance-cases-rules/', '_blank')"
                        }
                    },
            } 
            
        ]
    };
    // The fullscreen feature is available only if the application is not displayed within an iframe.
    if (window.self === window.top) {
        App.config.toolbar.tools.push({
            type: 'button',
            name: 'fullscreen',
            group: 'fullscreen',
            attrs: {
                button: {
                    id: 'btn-fullscreen',
                    'data-tooltip': 'Toggle Fullscreen Mode',
                    'data-tooltip-position': 'top',
                    'data-tooltip-position-selector': '.toolbar-container'
                }
            }
        });
    }
})();
