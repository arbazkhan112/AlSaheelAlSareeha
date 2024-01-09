# AlSaheelAlSareeha


IMPORTANT NOTE -
This project does not have a mongoDB connection setup. 

------------------------------------------------------------------------------------------------------

File structure -


my-project - Holds the client application

public - This holds all of our static files
src
assets - This folder holds assets such as images, docs, and fonts
components - This folder holds all of the different components that will make up our views
index.js - This is what renders the react app by rendering App.js, should not change
package.json - Defines npm behaviors and packages for the client

Email Backend - Holds the server application

Index.js - This holds our Email sending API files
DB.js - This hold the Database connection code
package.json - Defines npm behaviors like the scripts defined in the next section of the README
.gitignore - Tells git which files to ignore
README - This file!

------------------------------------------------------------------------------------------------------

Available Scripts
In the project directory, you can run:

npm run-script dev
Runs both the client app and the server app in development mode.
Open http://localhost:3000 to view the client in the browser.

npm run-script client
Runs just the client app in development mode.
Open http://localhost:3000 to view the client in the browser.

npm run-script server
Runs just the server in development mode.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

