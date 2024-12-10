# All-Around-Rent

# Project Build Steps for All Around Rent
## Requirements:
	- Node.js (v16+)
	- MySQL database
	- React.js (frontend)
	- SQL for backend

## Steps to Set Up the Project:

  1. Install Node.js
	  Node.js is required for running the frontend and backend servers.

    Steps:
	  Go to the Node.js official website.
	  Download the LTS version (recommended for most users).
    Run the installer:
	  Follow the installation prompts and accept the terms.
	  Ensure the option "Add to PATH" is selected during installation.
	  Verify the installation:
	  Open a terminal (Command Prompt, PowerShell, or terminal in macOS/Linux).

		Run - node -v
		Show - v22.5.1

  2. Install MySQL
	MySQL is used to manage the database for this project.

    Steps:
	  Download MySQL from the MySQL Community Server.
    Install MySQL:
	  Choose the appropriate installer for your system.
	  During installation, set up a root password and remember it.
	  Open the MySQL Workbench or your preferred database management tool.
    Verify MySQL is running:
	  Open the terminal or MySQL command-line client.

		Run - mysql -u root -p

  3. Install React.js
	  React.js is required for building the frontend.

		  1. Open a terminal in the desired project folder.

		  2. Install React globally (optional):
			npx create-react-app my-app

		  3. Navigate to your project folder:
			cd my-app

		  4. Verify React setup by starting the development server:
			npm start

		  5. Open http://localhost:5173/ in a browser to view the default React page.
			
  4.  Install Project Dependencies
	    Dependencies are required to run the React.js frontend and backend.

  Steps:

	  1. Clone the project repository or extract the provided ZIP file.
	  2. Open the terminal and navigate to the project folder containing the frontend:
		    cd frontend

	  3. Install dependencies:
		  npm install

  This will install all packages listed in the package.json file.


  5. Set Up the MySQL Database

	  1. Open MySQL Workbench or another database management tool.

	  2. Create a new database:
		    CREATE DATABASE all_around_rent;

	3. Import the database schema:
		  1. Locate the all_around_rent.sql file in the project.
		  2. Use the "Import" feature in MySQL Workbench or run:

			    SOURCE path/to/all_around_rent.sql;

 
	4. Update the backend configuration:
		  1. Open the backend folder and locate the configuration file (config.js or .env).
		  2. Set the database credentials (e.g., username, password, database name).


  6. Start the Backend Server

	  1. Navigate to the backend folder:
		  cd backend
	  2. Install dependencies:
		  npm install
	  3. Start the server:
		  node server.js

  7. Start the Frontend Server

	  1. Navigate to the frontend folder:
		  cd frontend
	  2. Start the React development server:
		  npm start
	  3. The frontend server will open at http://localhost:5173/

  8. Verify the Project
	  1. Ensure both servers (frontend and backend) are running without errors.
	  2. Open the browser and navigate to http://localhost:3000 to interact with the website.


  9. Team Details Recap:

		  Team ID: CP3-096
		  Team Member 1 : Ayush Kashyap Jha (21012011035)
 		  Team Member 2 : Ronak A Savdharia (21012011168)
 		  Team Member 3 : Reet Shah (21012011132)
