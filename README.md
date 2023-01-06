# DynamicFilterPipe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.1.This is an example of a pipe developed to allow filtering using Angular, regardless of the model.

### Use Case
---
- Exported From: **DynamicFilterModule** 

**TS**
```javascript  
 //Example Model
 export interface ExampleModel {
     id: number,
     title: string,
     description: string,
     status: string,
     owner:{
         firstName: string,
         lastName: string,
         email: string,
         address:{
            country: string
            city: string,
            district: string 
         }
     }
 }
 // Here, the filterText should be bound to an input via ngModel or formControl and its value should be read from that input.
 filterText:string = ""
 // define array of ExampleModel
 models : ExampleModel[] = [] //Pass element into Array.
```
**Filter Pipe Parameters**

| Parameters  | Type | Decsription |
| :------------ |:---------------| -----|
| args      | **object** | Contains the fields of the object to be filtered and the filter text. |
| filterText | **string**|  Filter Text  |
| field | **string**| Any Object fields name |

**Filter for a basic field**

"To filter based on a single field, we should pass the name of the field we want to filter on as the field parameter of the pipe."

`*ngFor="let model of models | dynamicFilter: {filterText: filterText,field:'title'} "`

**Filter for multiple fields**

"We need to pass the field names separated by commas as the field parameter in order to filter based on multiple fields."

`*ngFor="let model of models | dynamicFilter: {filterText: filterText,field:'title,description'} "`

**Filter for nested and multiple fields**

When filtering nested objects based on multiple fields, we should use dots to access deeply nested fields and separate the fields with commas in order to filter based on multiple fields.

`*ngFor="let model of models | dynamicFilter: {filterText: filterText,field:'title,owner.firstName,owner.lastName,owner.address.country,owner.address.city'} "`



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
