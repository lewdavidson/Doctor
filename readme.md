## Planning & Specs
### Lew Davidson

1. Configuration/dependencies
  * This project is dependent on:
  -node/gulp asset pipeline
  -ajax to make and recieve API calls
  -jquery
  -sass for styling

2. Specs
Required functionality:
-User can enter a medical condition/issue and receive a list of local (Portland) doctors who treat that illness.

-User can also just enter a doctor's name and receive a list of Portland doctors who match.

-Each return result should include:
  -dr. first name
  -dr. last name
  -address
  -phone number
  -website
  -if they are accepting new patients

-API call/ ajax request must be able to handle an error for anything not 200 status.

-If no doctors meet the search criteria, the page must return a notification saying that.

3. UX/UI
  * User will have input fields for multiple ways to search the database. Site will return a list of results meeting their search terms to the user.

4. Polish
  * Would love to put ANY styling on it.
  * Make my README more interesting
  * Make it FUNCTIONAL!

5. Setup Instructions
  * Open  Terminal
  * ~ Guest$
  * cd Desktop
  * clone repository " $ git clone https://github.com/lewdavidson/doctormd.git"
  * cd doc-md  
  * npm install
  * bower install
  * npm install babel-core
  * gulp build
  * gulp serve
