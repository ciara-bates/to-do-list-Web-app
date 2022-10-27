### Learning basic web-app design 
## Project Aims
*Make a to do list web-app where the user can add tasks along with a time that they would like to allocate to them.
The user can cross off tasks (they're still displayed, but with a line through) and delete them altogether.
When the user adds a task to the list, a gif is displayed at the bottom of the screen.*

## End Product: 

![web-app-image](https://user-images.githubusercontent.com/73170171/198347702-79903b46-834e-478e-8315-494d66762276.png)


## Coding
*Highlight your approach to coding in this project.*
- write the basic html with input box, button and list items
- style the html in css
- write main.js code to allow the user to cross out tasks, detele tasks and add tasks.
- Add in html and css for extra inputs (time input dropdown boxes)
- update main.js code with new inputs
- Add validation of user inputs in main.js (if user has not written a task or chosen a time before clicking the add button, a message will appear)
- Add server side functions

## UX/UI
My UX/UI is minimal, using a limited colour scheme with hierarchical shades to highlight the most important information. I used shades of teal for the majority of the elements, with a pink colour for the close buttons to make their purpose stand out.
In order to show what parts of the web app can be interacted with, I changed the style of the buttons and list items when the curor hovered over them.
I used Century Gothic throughout my design as it is very clean and readable. 

## Data
My web app takes in data in the from of strings/numbers from the task inputbox and the time dropdown boxes, and outputs it in the form of new html elements (list items). There are also event listeners on the close/add buttons, which activeate functions which alter the html of the web app. 
The server side of my web app sends a string from the inputbox. It then receives a gif that corresponds to the first search result of that string using the giphy API.

## Debugging
When first setting up my html and css, I checked what html elements had been created/changed using 'inspect' in Firefox Developer.
When coding functions I used console.log() to check the values of variables as the code ran. 
I checked what errors had occoured in the console section on Firefox Developer.
I used breakpoints to check that my server side code had collected the correct data from the API.

## Best Practice
1. Code simplicity
    I tried to avoid repetition by making a function for any processes that occour multiple times in my code.
    I also avoided declaring too many unnecessary variables.
2. Linting
    I used js.lint to make sure that the style of my code is consisent. I corrected any errors that it flagged up, where possible.
3. Code checking
    I got feedback on my code from my coursemates and the UTAs. They suggested changes to make my code more readable and functional.
4. Structure and commenting 
    To make my code as readable as possible for both myself and others, I added comments to show what each part of the code does.
    I also tried to structure it so that most varables are declared at the start of the code. 
