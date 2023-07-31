How to run this project task

Install dependencies by looking up into package.json file, "npm install" will do it for you.
Open the terminal in VS Code and enter the command "npm install" and it will run the application in browser.
To run unit test cases open another terminal and enter the command "npm run test" or "npm test" and you can watch the results in terminal itself.
To watch the coverage of unit test cases of the application, open another terminal and enter the command "npm run test:coverage" and you can watch the coverage table in the terminal itself.

Notice:
sometimes for correct operation, npm commands must be run from the My-Music-App folder level, since the repository is initialized in the "frontend-music-app" folder, and the application itself is located in the "My-Music-App" folder.

Front-End Testing End Points:

1. Default Page is the Home Page.
2. /signin : to enter into sign in page.
3. /signup : to enter into sign up page.
4. /viewmyplaylists : to enter into view my playlists page.
5. /ViewMyPlaylists/ViewThePlaylist/:id : to enter into a playlist page when clicked on a playlist in viewmyplaylist page for authenticated users only.
