# React + Vite


- User login form
- Conditional rendering - chunk of the website only available if you're logged in


## Components


- UserLoginForm
	- state for:
		- email
		- password
	- make the fetch request to the backend when the form is submitted
	- save the JWT from the response and share it to the rest of the app 

- ProfilePage
	- only available if JWT is available 
	- redirect to login form if JWT is not available
		- React Router hooks!! \
	- Hypothetical:
		- Show user profile data - stored in database via backend
		- Show user profile photo - stored in Amazon S3
		- Show user's latest article posts - stored in database via backend 
	- When page loads:
		- API request to get profile data
		- When profile data is returned, use that to retrieve the profile photo
		- API request to get articles where authorID == userID


## Sitemap

- Home
- Login Page
- Profile Page 