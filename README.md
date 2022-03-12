# Contacts Manager App

## Steps to run the application

1. First of all, ensure that you have the latest version NodeJS, NPM and MongoDB installed on your system.
2. Clone the github repository on your local system using the command :  
``` git clone https://github.com/harshit053/ContactsManagerApp.git```
3. Locate the root folder of the application on your terminal using the ` cd ContactsManagerApp ` command.
4. Install all the dependencies using the following command:  
``` npm install body-parser ejs express express-session mongoose passport passport-local passport-local-mongoose ```
5. Ensure that you have a running MongoDB server on a different terminal tab. For information on how to setup and run a MongoDB server refer the following documentation https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database (goto "Install MongoDB").
6. Now run ` npm start ` on your terminal.
7. Open a brower tab and type ` localhost:3000/signup ` on the search bar and press enter. You can see the application running on your browser.