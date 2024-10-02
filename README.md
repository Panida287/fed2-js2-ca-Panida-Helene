# Social Media Application - JavaScript 2 Assignment

This project is part of the **Noroff FED2 JavaScript 2 course assignment**. The task was to build a client-side social media application that allows users to perform CRUD operations (Create, Read, Update, and Delete) on their posts. The application leverages a provided API for user authentication, post management, and other optional features such as comments and reactions.

## Site is deployed here:
https://panida-helene-social.netlify.app

## Features Implemented ✅

- **User Registration** - New users can register via the provided form.
- **User Login** - Existing users can log in using their credentials.
- **Create Post** - Logged-in users can create new posts.
- **Edit Post** - Logged-in users can edit their posts.
- **Delete Post** - Logged-in users can delete their posts.
- **View Posts** - Users can view all posts, limited to 12 posts.
- **View Single Post** - Users can click on a post to view its details.
- **View User's Own Posts** - Users can view their own posts by navigating to their profile.

## Site Navigation 🧭

- Users **cannot access the home page** unless they are logged in. If they try, they will be redirected to the login page.
- On the **login page**, users can either:
  - **Log in** to their account.
  - **Register** for a new account if they don't have one.
- **Home Page**: After login, users can:
  - View posts from **all users** (limited to 12).
  - View their **own posts**.
  - Create new posts.
  - Click on a post's **header, body, or picture** to navigate to that post's details.
  - Edit or delete their own posts if they are the post owner.
- Users can also click **"My Profile"** to view their profile information and see a list of their posts.
- **Logout**: Clicking the logout button will log the user out and redirect them to the login page.

## Technical Overview 🛠️

The application is built using **Vanilla JavaScript** and follows the Multi-page Application (MPA) model, adhering to the project template provided by the course. It utilizes **localStorage** to store JWT tokens for authentication.

### API Endpoints Used:

- **POST /register** - Register a new user.
- **POST /login** - Log in a user.
- **POST /posts** - Create a new post.
- **GET /posts/:id** - Retrieve a single post.
- **GET /posts** - Retrieve multiple posts.
- **PUT /posts/:id** - Edit a specific post.
- **DELETE /posts/:id** - Delete a specific post.

### Tools & Technologies 🛠️

- **JavaScript** (Vanilla)
- **Vite** - For development and bundling.
- **localStorage** - For managing JWT tokens and user sessions.
- **GitHub Projects** - To manage tasks and issues.

## Collaborators 🤝
- Panida Paethanom @Panida287
- Helene Flått @Helflaa

## Roadmap 🛤️
In addition to the implemented features, these optional features may be added in future updates:

- Emoji reactions to posts.
- Commenting on posts.
- Pagination system.
- Follow/Unfollow users.
- Post search by keyword.
