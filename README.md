Welcome to the ASEC Project

ASEC is web application that it provides a user interface to explore the characters of the Star Wars universe as well as the details related to each one of them such as movies where they appear, home world, race, etc.

Tech Stack:
 - IDE: Visual Studio Code
 - Front-end: HTML, CSS, JavaScript, Bootstrap, jQuery
 - Back-end: Node.js, Express

Installation Guilde:
1. Install Node (https://nodejs.org/en/)
2. Clone the github repository to a file location of your choice
3. Install the following packages:
  - express (npm install express)
  - ejs (npm install ejs)
  - axios (npm install axios)
  
Run Locally:
1. Start the server, enter the following command in terminal - node app.js
2. Open http://localhost:3000 to view it in the browser

Test Plan:
1. Pagination - make sure "Previous" and "Next" are displayed properly
2. Search function (by name) - enter character name to search corresponding data
3. Details button (modal) - make sure "Home World" info is displayed 
4. API
 - Get http://localhost:3000/
 - Get http://localhost:3000/page/:id (for example, http://localhost:3000/page/5)
 - Get http://localhost:3000/search?name=:name (for example, http://localhost:3000/search?name=r2)
 - Get http://localhost:3000/name/:name/page/:page (for example, http://localhost:3000/name/d/page/2)

Home Page
![image](https://user-images.githubusercontent.com/3538018/205907067-17bc0952-5403-463f-9b84-572d7bc5d737.png)

Modal
![image](https://user-images.githubusercontent.com/3538018/205910237-1af4372e-24fe-40e4-a8af-ee7a9d5fdd42.png)

