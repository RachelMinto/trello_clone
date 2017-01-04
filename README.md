# trello_clone
Deployed app can be found here: https://trello-board-clone.herokuapp.com/

This is a clone of a Trello Board, a project management app. This version uses Backbone.js to organize the client-side code. Drag & drop features are implemented using jQuery UI, and Handlebars provides the templating. A simple express/node.js server is used for the server-side code. Cards (list items) can be created, archived, labelled, commented on, moved, etc, and lists can be created. All comments are tracked and displayed in the side menu bar. Cards can be searched by keyword. Data is stored in a json file, and is bootstrapped in order to limit HTTP requests on page load. 
