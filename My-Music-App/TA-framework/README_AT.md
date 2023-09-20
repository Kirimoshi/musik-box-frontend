# Test Automation Framework for testing My Music App 
This framework is based on WebdriverIO and Cucumber.
Also we use some libraries for reports: 'wdio-cucumberjs-json-reporter' and 'multiple-cucumber-html-reporter', assertion library 'chai' and library for working with API 'axios'.

## Step-by-step guide for Windows 10
### Installing:
1.	Ask for providing access to repositories (write to Anastasiya Utsiuryna)
2.	Copy frontend and backend  repositories into one folder on your PC
3.	Set up backend and frontend parts following this guide (https://kb.epam.com/display/RD/Music+App)
4.	When backend and frontend parts are installed, open folder TA_framework in integrated terminal (right click on folder -> Open in Integrated Terminal)
5. Write the command one of this command:
•	`npm run wdio` – you will run all tests for user;
•	`npm run wdio @001` – you will run only first test case for user;
•	`npm run wdio_admin` - you will run all tests for admin;
•	`npm run wdio_admin @001_admin` – you will run only first test case for admin;
All scripts are stored in package.json file. We have common package.json file with frontend team, so be careful and don't change any libraries or scripts without discussing it with QA and FE teams.
6. Open report: reports/html_report -> right click on index.html -> Reveal in File Explorer -> open index.html in Chrome browser.
 
### Structure
TAF is stored in TA_framework folder in frontend-music-app repository. There are 2 types of feature files for now: for user and for admin. They are stored in different folders (AdminTest for admin tests and UItest for user tests) with necessary page objects and step definitions. Step definitions are divided to action_steps and validation_steps. There are 2 configuration files for WDIO for testing user and admin part separately.

### Branch strategy
We use GitLab Flow.
There are main branch, develop branch and feature branches for every test case or technical task. Branch name is equal to your short feature name. All feature branches are merge in to develop branch. Every merge request should be approved by the major of teammates (they should leave their comments or thumb ups in your merge request). After fixing all comments your MR will be merged in to develop branch.

### Notes
1.	Currently all tests are running locally, we don't have any space for running them and storing reports.
2.	Every time, when backend or frontend team will add their features or fixes, you should re-run your Ubuntu servers and re-build frontend part as well. After this checkout to frontend develop branch, pull changes, open My-Music-App folder in integrated terminal and run `npm install`, then `npm run build` and `npm run start`. You should run `npm install` every time when you pull changes from your teammates to install all new packages and libraries that they may add.

Find more information on KB page
https://kb.epam.com/display/RD/Automation+Testing.+Team1.MA













