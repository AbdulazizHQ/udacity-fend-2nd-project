# Landing Page Project

## Table of Contents

- [Landing Page Project](#landing-page-project)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Project Structure](#project-structure)
  - [Implementation Overview](#implementation-overview)

## Introduction
In this project, we'll use Javascript DOM manuiplation cabapilities to add dynamic styling to a webpage.

## Project Structure
The project is seperated into three files
* `index.html`
  Contains the static content of the webpage.
* `css/styles.css`
  Contains static styles for the webpage and other styles that will be applied dynamically
* `js/app.js`
  Contains Javascript code that will create dynamic content and dynamic styling.

## Implementation Overview
First, to create the navigation menu, we used ```querySelector``` and ```querySelectorAll``` to obtain all sections in the html and then we
used ```createElement``` and ```appendChild``` to add the navigation elements to the DOM.<br>Second, for the scroll effect, we added a 'click'
event on anchor tags that executes ```scrollIntoView``` to the relavent section.<br>Lastly, we used ```Intersection Observer``` API to detect
which section was in view to apply the active style on it.

