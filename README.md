# LayerFive
Sample web application built using Django & Angular 8 with Postgres database.
(Used http://www.elephantsql.com which provides online postgres database instance)

## Requirements:
- Angular 8
- Pipenv ( Dependency manager for Python projects )

## Setup:

 1. Navigate to the project directory in terminal and type:

		$pipenv install

	( Installs all the python related dependencies )
	
2. Then switch to Pipenv environment

	    $pipenv shell

3. Perform database migrations

	    $python manage.py makemigrations && python manage.py migrate
	    
 4. Navigate to frontend directory in terminal and type command:

	    $npm install

## Start servers

 - ### Frontend Server (Angular)
	 the frontend directory inside project folder contains Angular project.
	 Start frontend server by :
	 1. Navigating to frontend directory in terminal
	 2. Enter command:  `$ng serve --open=true`
	 3. Server starts at http://localhost:4200
	 
 - ### Backend Server (Django)
	 Start backend server by:
	 1. Navigate to project directory in terminal
	 2. Enter the pipenv shell: `$pipenv shell`
	 3. Start django server: `$python manage.py runserver`
	 4. Server starts at http://localhost:8000
