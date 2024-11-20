The codes we have so far.
My attempt in explaning the  renderTBL:
1. The renderTBLHeading() is responsible for creating the table heading on the index.html website, it is responsible for displaying things such as the "Name" and "Foorprint Points" we want to categorize it under.
2. In the forEach function within, its responsibility is to loop through the data (which is an array that we created) for each objects, things such as the table rows "tr
", and table cells "td". Additionally, it created 2 table cells for the objects that we want to call out on, such as the "obj.firstName" and "obj.cfpTotal"
3. So creating the rows for the objects we want to display, it adds the row to the table through "tbody" 
4. The TBL at the end is responsible for calling everything we have up previously and makes it work on the webpage, which shows up the table on the html. 

Additional notes after watching video: 
1. We need to trigger the Event Listener to listen for the submit to do the call back
2. It prevents Default and references the forms that you set up as a global reference. 
3. Parsing the house values into an interger. 
4. Using a select statement and user's input, the objects that we named will be there. 
5. Declaring the values in the block scope of the callback will passing in all the previous values. 
6. Inside the function, we can call other function such as the houseHoldPTS and houseSizePTS. 
7. for example, passing in the household points, will display that variable.
8. Doing these will help return the calculated results. 
9. Referencing the push will help push the array, the objects inside the array will be display. It is important to format your code correctly so it runs well and prevents display errors. Following the orders of the array and the event listener. 
10. It not only gather inputs from the user but also gather all the other inputs as well, to calculate the values and the totals itself. 
11. Capturing within the objects all the key values pairs, when we push it, will help us display our first calculated result entry. 
12. Rendering the table will help maintain the code and make it functional. 
13. Setting up the table, define the table and rendering the heading, creating the rows, iterate over the arrays are all what helps the code functions. 
14. For each of the erray, it will run through the tr 2 times, the appendChild will help attaches a new element to the DOM dynamically. 
15. The tbody creates the body element of the table, we could have more than 1. 
16. the forEach of the data, the "data" is a reference, a passed by reference. 
17. The passed by reference could be useful in the future in case we need to use it for something else. 
18. forEach object in the data, building the tr and td, rows and columns will help reference all the content that we need. 
19. Appending the name and total into the row through the structure that we built previously. 
20. TBL.appendChild(table); shows the display result of the table through the global reference. 
21. FORM.reset() will help reset the form and be ready for the next submission. 

 How do we do the edit?
We can make the event listener functional and retrieve data from the array, doing so will hopefully update the submit button as well. 

# Discussion Coding Challenge
- Starting out, since we're creating a new form(index), I think we have to create a const for it at the very top so I made one in render.js
- Since the instruction mentions objects values that has already been entered, I assume we have to do the same thing as we did for the forEach function with obj, but this time, replacing it with the form
- I created 4 different forms for each values, first name, house members, house size and points total, based on main.js and the renderTBlheading. 
- Since this is an event listener, I copy down the data.splice from the buttonDel to match the buttonEdit
- I press the Edit button and it came up as error on line 47 of render.js. So I went over to chatGPT for suggestion and it mentions I forgot to put in the number value for the FORM. So I fixed that.
- However, it still came up as underfined so I'll have to figure out what to do next.
- I couldn't really figure out how to solve the table heading so I'll watch the solution video after
- I check the inspect and there wasn't any errors in the console, so I'll submit what I have 

# After Discussion Coding Solution
- TBL.innerHTML = ""; is responsible for clearing the table
- if(data.length !== 0) this is use to check if there is data to display
- the renderTBl function is responsible for clearing any existing content in a table
- the renderTblBtn function is responsible for the Edit and Delete button for the table row.
- the forms we created helps add functionality to it, and it refreshes the table after removing previous data. 

# My understanding of localStorage
- localStorage is easy to use and synchronus.
- However, it is unsafe as it offers no data encryption, and limited to string-based value pairs. 
- Stringify is the process of taking a javascript objects and storing it in local storage. Manipulate the data by parse. 
- We can to store the data in local storage as soon as the user input in their data
- We bring local storage back when the user delete the item or refresh the page. 
- You can access local storage through console.
- We need to stringify a value before we store it in the local storage and then we need to parse it. 
- After we stringafi an object, the display would look different
- localStorage is helpful in storing small pieces of data on your local computer, and it still stay there even if you refresh the page or close it.
- It's useful for saving things like user preferences, settings data.
- Why do we need it? It is to save information that the user might want to access later and keep the data consistance for better user's experience. 

# Form validation
- First off, I decided to went with the first option
I started working on the index.html and work on the alert by creating a span for both last name and last name.
- Then i tried to intergrate the your javascript into the main.js. Starting by creating a new function within it for the validateFields
- I started getting a lot of errors, then i realize I didn't add the event listener form for the first name & last name validate fields, so I added it
- I started working on the function for the submit button, using if statements
- After I write the if statements, I sandwiched the other codes into it. 
- There's still some errors that came up, so i took some time to clean up and remove some codes that we don't need anymore. 
- Will fix my codes after awaiting feedback.

# Naming Functions Coding Challenge
- Since you strictly mention not touching the anonymous function, I leave it be.
- I started checking the other modules, and start naming the other functions to match. 
- I changed most of the functions in render.js to match
- Then I move to the carbonpoints.js to match as well
- The output and render looks fine so I'll commit
- I reviewed the solution video and everything mostly match so I'll update the commit 

# Week 10 Notes
- Some of the functions you mention I understood quite a bit as this has been covered over by my other Javascript class on campus. I've also gotten some help from my professor with writing the decision app too so it was really helpful. 
- From further research, IIFE (stands for Immediately Invoked Function Expression) basically is a function that runs immediately after it is defined.
- the add2 is a function that takes any numbers then add 2 + in increments

# Week 10 Coding Challenge
- After watching the initial instruction, I started tackling every functions I see in each of the modules. Starting from main.js and working towards other modules. 
- I notice that some functions requires it being encased in parenthesis or else it would break the codes so I kept them in. For example, some in render.js
- Doing the arrows was relatively manageable, the hard part was definitely the 2nd and 3rd part of the challenge. 
- Based on the your question, 2 functions that we use quite frequently that I notice are the Household Members, House Size, as it is shown on the form of the website, so I choose those. The main function for those are in the carbonpoints.js so I started working on those. 
- I figured that I had to change the variable in the carbonpoints.js first and foremost to update their parameters. For that I chose the "small" for the house size and the "1" for the number in household since they are the smallest values and should be easy to track. 
- At this point, for part 3 I kinda have a brain fart and unsure of what to do on how to implement the rest operator so I'll submit what I have and wait feedback from classmates. I'll update it again later. 
- I decided to code from the solution videos. 

# Week 11 Coding Challenge
- Based on your hint, I basically move everything inside the const of determineHouseSizePts into the new FP class within fp.js, aside from the let and the return.
- I added this to everything to match the constructor
- there was an error on the console so I recheck what I did
- I can't really figure it out so I'll watch the solution video and update 

# Week 11 Last Coding Challenge
- Since the error on the console is defined as "Uncaught TypeError: this.houseHoldPoints is not a function", I notice in the render.js, the call out is incorrect for the houseHoldPoints, so I changed it. 
- Then I change the houseSizePoints to match as well in the call out. 
- Well the output manage to display but the render is all out of order so I'll have to figure out how to fix that. 
- It's getting really messy so I'll commit what I have and watch the solution video
- I think i accidentally create an error somewhere along the way, as the display is wrong. 
- I realize that I had gotten side track and missed some details so I went back and fix everything i can. 

# Week 11 Pub Coding Challenge
- Staring off, I create a new div based on the the new food choices, and labed it as foodChoice. It consists of all the various food options to calculate the points value. 
- I started giving them id and then head over to fp.js to create a new calculation value.
- I updated the constructor class to accept the new foodChoice variable. Then i started to write the formulation for it 
- I updated the submit button for the EventListener to accept the new food type
- I forgot to update the render for the food row so I updated it in render.js, I insert the new "Food Type" option after the "Footprint Points"
- The render came out wrong then I notice I didn't add a new form in the render for it, so I did it. 
- It still came up as wrong, as the total points value wouldn't render, and the action buttons is listed under footprint points
- It took me forever to notice but I input the values wrong in the fp.js, which explain why it did not function correctly
- I notice that I was missing something in the constructor for the points itself, so I went back and added it
- At this point, everything looks mostly functional, except for some options where it display incorrectly. 
- Most of the input managed to work except it keeps displaying wrong on the medium size house so I went back into the fp.js and notice that I named it incorrectly. So i fix it and it manage to work
- At this point, everything looks functional and there's no error on the console so I'll submit what i have. 

# week 15 Coding Challenge
- First off, between the options of creating a new module or write a new function, i decided to went for the function
- I decided to head to render.js and start to write the calculations for it. Using the total value from all the points together and divited by the data to get the average calculation
- With the calculation function finish, I went below it to create a new function that can render the rows. 
- After some trials and errors, I manage to create a functional row but since I have no idea how to get the result to display further out into the table, I decided to look for some reference and ask chatGPT
- I then basically recall the calculation function to display the result
- I also then call it onto the renderTbl = data to actually make it display properly