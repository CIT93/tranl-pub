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

// How do we do the edit?
We can make the event listener functional and retrieve data from the array, doing so will hopefully update the submit button as well. 