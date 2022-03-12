# Contacts Manager App

## Steps to run the application

1. First of all, ensure that you have the latest version NodeJS, NPM and MongoDB installed on your system.

2. Clone the github repository on your local system using the command :  
``` 
git clone https://github.com/harshit053/ContactsManagerApp.git
```
3. Locate the root folder of the application on your terminal using the command. 
``` 
cd ContactsManagerApp 
``` 
4. Install all the dependencies using the following command:  
``` 
npm install
```
5. Ensure that you have a running MongoDB server on a different terminal tab. For information on how to setup and run a MongoDB server refer the following documentation https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database (goto "Install MongoDB").

6. Now run this command on your terminal
``` 
npm start 
``` 


7. Open a brower tab and type the following command on the search bar and press enter. You can see the application running on your browser.
``` 
localhost:3000/signup 
``` 


Alternatively you can also visit https://contacts-management.herokuapp.com/signup to see the deployed application.

## Description of various code blocks 

* The routes folder contains two files. 

    * auth.js - Contains the code that handles all the requests relating to the authentication i.e. Sign In, Sign Up and Sign out.

    * index.js - Contains the code that handles storing the contacts into the database as well as displaying the appropriate contacts according to the signed in user.

    * The index.js file also conatins this middleware function which is used to check if any user is currently signed in or not. If a user is currently signed in then the function redirects to carries on to display the required page else it redirects to the sign in page
    ``` 
    function isLoggedIn(req, res, next){
        if(req.isAuthenticated()){
            return next();
        }
        res.redirect("/signin");
    } 
    ```
* The models folder contains two files. 

    * contact.js - contains the mongoose schema for the stored contact details.

    * user.js - contains mongoose schema for the users of this application.

* The views/index directory contains the HTML markup for showing the Sign In, Sign Up and Contacts form and Contacts List pages

* The views/partials directory contains the header and footer sections of the HTML boilerplate.

* The app.js file is the entry point of this application which is used to setup all the frameworks used in this application.

## Screenshots

![Contact Form and Contact List Page](https://drive.google.com/uc?export=view&id=1Ppsdnk6nmlMX5LeYoL4TzxWaxeOvSnW6)

![Sign In Page](https://drive.google.com/uc?export=view&id=1rfeRGs4xPpk1gy2J3FUYbh__GTmKSV0D)

![Sign Up Page](https://drive.google.com/uc?export=view&id=16MuMvX4iuqbYeyxcDQ3Jo87Wq1aPxE7m)
