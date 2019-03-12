# GroceryListApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

# Description
**This is a very basic app which takes user input from the <input> text box and appends each entry into an array and displays the array below. It uses bootstrap for styling. The input from user is stored via formControl (from ReactiveForms, FormsModules) of Angular, stores whatever was in the form after a debounce time of 1s and stores it in a variable task. Upon clicking a button, this variable task is appended to an array "tasks", an array of objects with single attribute (name) and tasks is set as the value of  this key. For future storage, the variable task is then set clean. Meanwhile, a NgFor loop, shows the name attributes of all objects in the tasks array **

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
