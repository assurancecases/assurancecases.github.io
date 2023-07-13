/*! Rappid v2.1.0 - HTML5 Diagramming Framework - TRIAL VERSION

Copyright (c) 2015 client IO

 2017-09-21 


This Source Code Form is subject to the terms of the Rappid Trial License
, v. 2.0. If a copy of the Rappid License was not distributed with this
file, You can obtain one at http://jointjs.com/license/rappid_v2.txt
 or from the Rappid archive as was distributed by client IO. See the LICENSE file.*/


var App = window.App || {};
var gdAuth = window.gdAuth;
var gdSave = window.gdSave;
var gdLoad = window.gdLoad;

(function(_, joint) {

    'use strict';

    var graphg = new joint.dia.Graph({ type: 'basic' }).on({

        // this is happening before the view of the model is actually added into the paper
        'add': function(cell, collection, opt) {

            if (!opt.stencil) return;

            var type = cell.get('type');

            // some types of the elements need resizing after they are dropped
            var sizeMultiplier = { 'basic': 1, 'basic': 2 }[type];

            if (sizeMultiplier) {
                var originalSize = cell.get('size');
                cell.set('size', {
                    width: originalSize.width * sizeMultiplier,
                    height: originalSize.height * sizeMultiplier
                }, { silent: true });
            }
        }

    });

    App.MainView = joint.mvc.View.extend({

        className: 'app',

        events: {
            'focus input[type="range"]': function(evt) { evt.target.blur(); }
        },

        init: function() {

            this.initializePaper();
            this.initializeStencil();
            this.initializeSelection();
            this.initializeHaloAndInspector();
            this.initializeNavigator();
            this.initializeToolbar();
            this.initializeKeyboardShortcuts();
            this.initializeTooltips();
        },

        // Create a graph, paper and wrap the paper in a PaperScroller.
        initializePaper: function() {

            var graph = this.graph = new joint.dia.Graph;

            graph.on('add', function(cell, collection, opt) {
                if (opt.stencil) this.createInspector(cell);
            }, this);

            this.commandManager = new joint.dia.CommandManager({ graph: graph });

            var paper = this.paper = new joint.dia.Paper({
                width: 1000,
                height: 1000,
                gridSize: 20,
                drawGrid: { name: "mesh"},
                async: true,
                // sorting: joint.dia.Paper.sorting.APPROX,
                clickThreshold: 10,
                interactive: {
                    stopDelegation: false
                },
                model: graph,
                //defaultLink: new joint.shapes.app.Link
                defaultLink: function(cellView, magnet) {
                    return new joint.shapes.app.Link({
                        attrs: {
                          line: {
                            stroke: "blue",
                            // stroke: V(magnet).attr('port-group') === "blue-ports" ? "blue" : "red"
                          }
                        }
                    })
                }
            });

            paper.on('blank:mousewheel', _.partial(this.onMousewheel, null), this);
            paper.on('cell:mousewheel', this.onMousewheel, this);

            this.snaplines = new joint.ui.Snaplines({ paper: paper });

            var paperScroller = this.paperScroller = new joint.ui.PaperScroller({
                paper: paper,
                autoResizePaper: true,
                cursor: 'grab'
            });

            this.$('.paper-container').append(paperScroller.el);
            paperScroller.render().center();

        },

        // Create and populate stencil.
   
        initializeStencil: function() {

            var stencil = this.stencil = new joint.ui.Stencil({
                paper: this.paperScroller,
                snaplines: this.snaplines,
                scaleClones: true,
                width: 240,
                groups: App.config.stencil.groups,
                dropAnimation: true,
                groupsToggleButtons: true,
                search: {
                    '*': ['type', 'attrs/text/text', 'attrs/label/text', 'attrs/title/text', 'attrs/root/dataTooltip'],
                    'basic.Image': ['type', 'attrs/./data-tooltip', 'attrs/text/text', 'attrs/.title/text'],

                },
                // Use default Grid Layout
                layout: true,
                // resize element when drop
                dragStartClone: function(cell) {
                    var clone = cell.clone();
                    var paperSize = cell.get('paperSize');
                    if (paperSize) {
                      clone.resize(paperSize.width, paperSize.height);
                      clone.unset('paperSize');
                    }
                    return clone; 
                },
                //Remove tooltip definition from clone
                dragEndClone: function(cell) {
                    return cell.clone().removeAttr('./data-tooltip');
                },
                
            });
            this.$('.stencil-container').append(stencil.el);
            stencil.render().load(App.config.stencil.shapes);

            $(function() {
                // Initialize the dialog
                $("#dialog").dialog({
                  autoOpen: false, // Dialog will not open automatically
                  modal: true, // Dialog will be displayed as a modal
                  buttons: {
                    "Submit": function() {
                      // Get the user's input from the input field
                      var userInput = $("#inputText").val();
                      
                      // Perform any necessary actions with the user's input
                      // For example, update the dropped element with the userInput
                      
                      // Close the dialog box
                      $(this).dialog("close");
                    },
                    "Cancel": function() {
                      // Close the dialog box without taking any action
                      $(this).dialog("close");
                    }
                  }
                });
              
                // Event listener for the drop event on the paper
                // Open the dialog when the drop event occurs
                paper.on("cell:pointerup", function(cellView) {
                  // Check if the dropped element is the specific element you want to trigger the dialog
                  // You can use cellView.model to access the dropped element's model or attributes
                  if (cellView.model.get("type") === "basic.Image") {
                    $("#dialog").dialog("open");
                  }
                });
              });
              

        },

        initializeKeyboardShortcuts: function() {

            this.keyboard = new joint.ui.Keyboard();
            this.keyboard.on({

                'ctrl+c': function() {
                    // Copy all selected elements and their associated links.
                    this.clipboard.copyElements(this.selection.collection, this.graph);
                },

                'ctrl+v': function() {

                    var pastedCells = this.clipboard.pasteCells(this.graph, {
                        translate: { dx: 20, dy: 20 },
                        useLocalStorage: true
                    });

                    var elements = _.filter(pastedCells, function(cell) {
                        return cell.isElement();
                    });

                    // Make sure pasted elements get selected immediately. This makes the UX better as
                    // the user can immediately manipulate the pasted elements.
                    this.selection.collection.reset(elements);
                },

                'ctrl+x shift+delete': function() {
                    this.clipboard.cutElements(this.selection.collection, this.graph);
                },

                'delete backspace': function(evt) {
                    evt.preventDefault();
                    this.graph.removeCells(this.selection.collection.toArray());
                },

                'ctrl+z': function() {
                    this.commandManager.undo();
                    this.selection.cancelSelection();
                },

                'ctrl+y': function() {
                    this.commandManager.redo();
                    this.selection.cancelSelection();
                },

                'ctrl+a': function() {
                    this.selection.collection.reset(this.graph.getElements());
                },

                'ctrl+plus': function(evt) {
                    evt.preventDefault();
                    this.paperScroller.zoom(0.2, { max: 5, grid: 0.2 });
                },

                'ctrl+minus': function(evt) {
                    evt.preventDefault();
                    this.paperScroller.zoom(-0.2, { min: 0.2, grid: 0.2 });
                },

                'keydown:shift': function(evt) {
                    this.paperScroller.setCursor('crosshair');
                },

                'keyup:shift': function() {
                    this.paperScroller.setCursor('grab');
                }

            }, this);
        },

       initializeSelection: function() {

            this.clipboard = new joint.ui.Clipboard();
            this.selection = new joint.ui.Selection({
                paper: this.paper,
                handles: App.config.selection.handles
            });

            // Initiate selecting when the user grabs the blank area of the paper.
            // Otherwise, initiate paper pan.
            this.paper.on('blank:pointerdown', this.selection.startSelecting);

            this.paper.on('element:pointerdown', function(elementView, evt) {

                // Select an element if CTRL/Meta key is pressed while the element is clicked.
                if (this.keyboard.isActive('ctrl meta', evt)) {
                    this.selection.collection.add(elementView.model);
                }

            }, this);

            this.selection.on('selection-box:pointerdown', function(elementView, evt) {

                // Unselect an element if the CTRL/Meta key is pressed while a selected element is clicked.
                if (this.keyboard.isActive('ctrl meta', evt)) {
                    this.selection.collection.remove(elementView.model);
                }

            }, this);

            
        },

        createInspector: function(cell) {

            return joint.ui.Inspector.create('.inspector-container', _.extend({
                cell: cell
            }, App.config.inspector[cell.get('type')]));
        },

        initializeHaloAndInspector: function() {

            this.paper.on('element:pointerup link:options', function(cellView) {

                var cell = cellView.model;

                if (!this.selection.collection.contains(cell)) {

                    if (cell.isElement()) {

                        new joint.ui.FreeTransform({
                            cellView: cellView,
                            allowRotation: false,
                            preserveAspectRatio: !!cell.get('preserveAspectRatio'),
                            allowOrthogonalResize: cell.get('allowOrthogonalResize') !== false
                        }).render();

                        new joint.ui.Halo({
                            cellView: cellView,
                            handles: App.config.halo.handles
                        }).render();

                        this.selection.collection.reset([]);
                        this.selection.collection.add(cell, { silent: true });
                    }

                    this.createInspector(cell);
                }
            }, this);
        },

        initializeNavigator: function() {

            var navigator = this.navigator = new joint.ui.Navigator({
                width: 240,
                height: 115,
                paperScroller: this.paperScroller,
                zoom: false
            });

            this.$('.navigator-container').append(navigator.el);
            navigator.render();
        },

        initializeToolbar: function() {

            var toolbar = this.toolbar = new joint.ui.Toolbar({
                groups: App.config.toolbar.groups,
                tools: App.config.toolbar.tools,
                references: {
                    paperScroller: this.paperScroller,
                    commandManager: this.commandManager
                }
            });
            var toolbarCommands = {
                toJSON: function() {
                    let input = document.createElement('input');
                    input.type = 'file';
                    input.onchange = _this => {
                        var file = input.files[0];
                        var textType = /json.*/;
                        if (file.type.match(textType)) {
                            var reader = new FileReader();
                            reader.onload = function(e) {
                                var content = reader.result;
                                joint.shapes.custom = {}
                                joint.shapes.custom.dummy = joint.shapes.basic.Image.extend({
                                    defaults: _.defaultsDeep({
                                        type: 'custom.dummy',
                                        size: { height: 42, width: 42 }
                                    }, joint.shapes.basic.Image.prototype.defaults)
                                });
                                app.graph.fromJSON(JSON.parse(content))
                            }
                            reader.readAsText(file);
                        } else {
                            fileDisplayArea.innerText = "File not supported!"
                        }
                    };
                    input.click();
                },
 
                saveGraph: function() {
                    var jsonObject = app.graph.toJSON();
                    var id = _.uniqueId('webace_');
                    var snippet = '';
                    snippet += '' + id + JSON.stringify(jsonObject);
                    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(jsonObject));
                    var downloadAnchorNode = document.createElement('a');
                    downloadAnchorNode.setAttribute("href", dataStr);
                    downloadAnchorNode.setAttribute("download", id + ".json");
                    document.body.appendChild(downloadAnchorNode);
                    downloadAnchorNode.click();

                },

            };
            toolbar.on({
                'svg:pointerclick': _.bind(this.openAsSVG, this),
                'png:pointerclick': _.bind(this.openAsPNG, this),
                'fullscreen:pointerclick': _.bind(joint.util.toggleFullScreen, joint.util, document.body),
                'to-front:pointerclick': _.bind(this.selection.collection.invoke, this.selection.collection, 'toFront'),
                'to-back:pointerclick': _.bind(this.selection.collection.invoke, this.selection.collection, 'toBack'),
                'layout:pointerclick': _.bind(this.layoutDirectedGraph, this),
                'snapline:change': _.bind(this.changeSnapLines, this),
                'clear:pointerclick': _.bind(this.graph.clear, this.graph),
                'print:pointerclick': _.bind(this.paper.print, this.paper),
                'grid-size:change': _.bind(this.paper.setGridSize, this.paper),
                'load:pointerclick': toolbarCommands.loadGraph,
                'tojson:pointerclick': toolbarCommands.toJSON,
                'save:pointerclick': _.bind(toolbarCommands.saveGraph, this.graph)
            });

            this.$('.toolbar-container').append(toolbar.el);
            toolbar.render();
        },

        changeSnapLines: function(checked) {

            if (checked) {
                this.snaplines.startListening();
                this.stencil.options.snaplines = this.snaplines;
            } else {
                this.snaplines.stopListening();
                this.stencil.options.snaplines = null;
            }
        },

        initializeTooltips: function() {

            new joint.ui.Tooltip({
                rootTarget: document.body,
                target: '[data-tooltip]',
                direction: 'auto',
                padding: 10
            });
        },


        openAsSVG: function() {

            this.paper.toSVG(function(svg) {
                new joint.ui.Lightbox({
                    title: '(Right-click, and use "Save As" to save the diagram in SVG format)',
                    image: 'data:image/svg+xml,' + encodeURIComponent(svg)
                }).open();
            }, { preserveDimensions: true, convertImagesToDataUris: true });
        },

        openAsPNG: function() {

            this.paper.toPNG(function(dataURL) {
                new joint.ui.Lightbox({
                    title: '(Right-click, and use "Save As" to save the diagram in PNG format)',
                    image: dataURL
                }).open();
            }, { padding: 10 });
        },

        onMousewheel: function(cellView, evt, x, y, delta) {

            if (this.keyboard.isActive('alt', evt)) {
                evt.preventDefault();
                this.paperScroller.zoom(delta * 0.2, { min: 0.2, max: 5, grid: 0.2, ox: x, oy: y });
            }
        },

        layoutDirectedGraph: function() {

            joint.layout.DirectedGraph.layout(this.graph, {
                setLinkVertices: true,
                rankDir: 'TB',
                marginX: 100,
                marginY: 100
            });

            this.paperScroller.centerContent();
        },

        
    });
    

})(_, joint);
