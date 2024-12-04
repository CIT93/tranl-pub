# Skin Select

The Skin Select app main targeted demographics are the users who knows nothing about skincare and are looking to build a routine for themselves. It will allow users to put in their inputs based on their own skincare concerns. By answering a few questions, users can get a personalized skincare recommendation to start on a routine and improve their appearance. As we all have different skintypes, such as: dehydrated, oily, combination, acne-proned, etc. With the user's input, it will display a list of steps for the user's needed to start their own skincare routine.

## Global variations
- skinConcern (string) - represents the user's input based on their own skin concerns
- routine (array) - holds the recommended routine based on the user's input.
- isSensitive (boolean) - ask the user's input on whether their skin is sensitive or not.

## Decision Making Process
- The app will prompt the user to select their primary skin concern and whether they have sensitive skin. 
- Based on the user's personalized inputs, it will determine the appropriate skincare routine using a series of statements.
- For example, if the user's skin concern is "acne" and they input in that their skin is sensitive, the app will recommend gentle products. 
- The decision will involve comparisons to create the personalized recommendations based on the user’s inputs.
- The app will recommend products such as cleansers, sunscreens, moisturizer, etc... to help the user create their own routine.
- Some of the variables for the decision making will be
1. acne-proned skin
2. dehydrated skin
3. oily skin
4. combination skin
- Combined those with the sensitive boolean to check if the skin is sensitive or not and adjust the recommendation.

## Output
- Based on the user's input, it will display a recommended skincare routine.

## Conditional Statement
- "If" statement to check the specific skincare concerns
- || or && to comebine conditions for multiple products recommendation
- "If else" in case the user have alternate input for sensitive skins.
- forEach to display the output and recommended routine


## Coding Process
- With the updated instructions, I remove the old conditions and replace them with const and nested all the other else if conditions inside it. 
- I decided to went with 2 main functions for this program, one is "getRoutine" to collect the user's concern. And "displayRoutine" to show the recommendated output. Both will use arrow functions
- For the two functions, i mainly use array and strings to store the value. The arrays are the "baseRoutine" and "getRoutine" and the strings are the additional product recommendation. 
- With your instruction, I created a base routine for easier coding and motifying
- Since i'm unsure how to create a return value function yet, I decided to look up some references: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values and a little bit of chatGPT help.
- Since with my original intention for the app, there are multiple skintypes, unfortunately I have to create more variables to match, such as oily and combination skin. 
- At this point, I'm kinda starting to regret my original objective as there is so much value to input in instead of a simple app.
- Took a while but I finally finish writing the conditions for the decisions.
- I then move onto the 2nd function, the displayRoutine function to call out the decision values. 
- There are no errors so far so I'll do the first commit. 
- Unfortunately, I kinda hit a roadblock here as I don't really know how to display the decision on the page. 
- Doing console.log would be fine but i'm not sure how to actually get the results to show up on the index.html page.
- I tried a variety of ways but it does not show the results on the index.html
- I ended up asking chatGPT for suggestion and it help me created this output to help display the codes, please let me know if it I can use it or not in your feedback and I'll redo it. 
- I ended up asking in the discord and thankfully @dasen.thao managed to suggest me some idea. I was truly overthinking the progress(hence the major brain fart) and when I revisist week 5 again, I manage to create a new and more simple display output without using AI. And I also wrote some variations for options between different skintypes. 

## Step 3 Coding Process
- This process is relatively easy to handle, I just create a new form input and add a couple of values like the ones we did in the carbon projects. 
- I remove the other div to simplify the form appearance
- I finish the form with 2 different inputs, one for skin concern (includes 4 different skintypes) and an input asking if the user's skin is sensitive or not. 

## Event Listener
- I started by adding a new global variable in const FORM
- I create event listener based on our previous codes with an arrow function
- I finish writing the conditions but I was wondering why it didn't show up on the webpage
- After some trial and error, I notice that I did not put a div for the output onto the website itself, so I fix it. 
- I totally forgot to add an id value for my sensitive selection on the form as well, so i kept wondering why it shows up as error on console, i realize that it was because it was not defined. 
- I then move on to readjust the display routine itself.
- After writing and encountering some errors: "Uncaught TypeError: FORM is null
    <anonymous> http://127.0.0.1:5500/my-app/step3/main.js:76"
- I couldn't really figure this out myself after a couple tries, so I ask chatGPT for some help. And it gave me this explanation: "Reasons for the Error: The script tag for main.js is placed in the "head" section of your HTML, causing the JavaScript to run before the "form" element exists in the DOM.
The document.getElementById('form') call returns null because there is no element with the ID form at the time the script runs.
- Turns out, I accidentally left an extra script tag inside the index.html, which explains why it came to up to the error. I remove it and it looks fine now.
- I realize that I'm making really basic errors here and that I should really improve and pay attention to things better. 
- I think I fulfill the requirement, if there's anything missing, please tell me. 

## Step 4 Coding Process
- Starting out, I nested the logic inside the first function so it looks more clean.
- I remove the unnessessary code in the displayOutput, and now included the function calls inside the eventlisteners.
- For the custom form validation, I kinda forgot how to do it so I did some digging into previous week's codes. I manage to find a funtional one in week 11 so I based my current codes out of it. 
- After some tinkering around, I manage to make a successful validation.
- The display output looks really unsatisfying and ugly so I ask for some assistance from chatGPT and it suggests me to add <p> in each of my "outputDiv.innerHTML =" inside the const displayRoutine, to seperate them into paragraphs and not clump into each other. 
- At this point, I think I fulfill most of the requirements, I'll submit what I have and wait for your feedback

## Step 5 Coding Process
- Since I had forgotten a lot of the knowledge in how to code tables, I went back again to look into previous weeks code
- While implementing the global.js module was quite easy, I find myself struggling a lot with creating a table however with the render.js module. 
- While my first iteration was okay with rendering the table, I realize that I did it inside the main.js and not a new module, so I had to redo it.
- After a lot of tries and failing, I ask for some assistant from chatGPT, using some structure of some of our previous week's codes as a foundation for the render.js and combined with my previously established form references from global.js. 
- After some tweaking, the table render works but because there was no styling, it looks really barebone so I create a style.css and add some coloring into it. 
- Since I did use chatGPT, I dive in a little bit further to try to make sense of everything and how it works together:
    - "const tbody = TBL.querySelector('tbody');": this is use to locate the table body, where each new row will be added so that it appears under the table readers.
    - "const row = document.createElement('tr');": this help create new rows, so each time the renderTable is called, a new row is added to the table.
    - "const skinConcernCell = document.createElement('td');: This part sets the cell's content.
    - "const routineCell = document.createElement('td'); routineCell.textContent = routine.join(', ');": This helps display the routine, which is an array of steps.
    - "const editButton = document.createElement('button');": this basically added buttons to the table, which we did previously before on our other projects.
    - The rest are append eafch cell to the row that we created. 
- How it works together:
    - It creates a new row for each cell fill with data
    - The normal "edit" and "delete" button is added
    - After inputing, it will append the row to the table.
- After all is done, I remember you said to add more inputs beside drop down so I did some additional research, using this references: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
- I find that the range input is most appropriate and fun looking so I added that into the index.
    
## Step 6
- Starting from the your last comment, I basically tried to rewrite the entire render.js to make it into smaller functions. I tried to simplify it as much as I can into 2 seperate functions, one to renderHeader and another to renderTable.
- The output manages to render and there's no errors on the devTool so I'll commit what I have for the new render. 
- Following examples from previous codes like in the calculating points, I create a storage.js module for the local storage. 
- I went through the earlier codes and write the storage.js based on week 12 codes.
- I then motify the main.js to accept the new storage.js
- I added functionality to the delete buttons but kinda struggle with the Edits button so I'll have to figure that out.
- At this point, due to time constraint, I could not finish it all, so I had ask some assistant from chatGPT to finalize the codes and help me run everything correctly, it suggest me to fix up some codes and added some smaller functions to help render everything and the local storage works. 

## Step 7
- I managed to fix some of the previous errors I made
- For the new decision making module, I went back and based on your requirements, it sorta looks like the fp.js module within our carbon program, so I created mine based on that structure, copying over and rewriting the new logic, creating a new class of SkincareDecision and a new constructor like the fp.js. I then export it to main.js.
- The real headache gotta comes from fixing all the errors now in main.js, with moving things around and replacing them. 
- I tried importing things around but it comes up as this error:
    "render.js:38 Uncaught ReferenceError: FORM is not defined
    at renderTable (render.js:38:3)
    at main.js:29:3
    at Array.forEach (<anonymous>)
    at main.js:28:14"
- After checking it out, I find out the problem is that I forgot to add the import of TBL from global.js, so I added that and fix it.
- Since the website looks functional and not much error (that I can find), I'll keep what I have at the moment, submit it early and wait for feedback.
- I then start to work on the todo.md, brainstorming ideas for what I can do with the app. 
- Additional notes 
1. Taking it back slowly, instead of trying to incoporate everything all at once, I'm gonna take it one at a time. After messing around in the render.js, I finally realize why the header keeps rendering even when the data isn't submitted, turns out the problem plays within the index.html, I remove the table header element there and modify the render.js to create a header instead.
2. I started to work on the 2nd part of the errors, "The local storage is saving the submitted and calcuated data, but it is not working on page load (or refresh) so check to make sure you are calling the render function in the global on the main.js.". I ended up moving around things inside the main.js, specifically where to place the loadLS() and saveLS(). After a bit of time, I think i manage to get it to work correctly.
3. I admit the last error has stumped stumped me a lot, so I took a gamble and change the the entirety of my buttons within my render.js, based on the structure of the carbon program. Since I'm more familiar with that structure and could hopefully find the solutions to the problem easier. So with the new buttons made, I try to modify the main.js to accept the new values, I mainly modify the FORM.addEventlistener to accept all the new variables (I got stuck along the way so I had to ask chatGPT help). Since the FORM.addEventlister will handle everything now, I find that the old displayFunction is no longer neccessary so I remove that part. I make sure to recheck and fix around everything so hopefully everything is functional now. I will submit and wait for your feedback. 


