
<h1>Full Blog Application</h1>

This is a full blog application built using React, Node.js, Express, and MongoDB. It allows users to create, read, update, and delete blog posts. The application also includes user authentication and authorization features.

# Technical Specialities 
- User registration and login.
- Create, read, update, and delete blog posts.
- User authentication and authorization.
- Responsive design for mobile and desktop.
- File uploads for blog post banners and user profile pictures.
- Secure password hashing and token-based authentication.
- Error handling and validation for user input.
- Separation of concerns (SoC) in the codebase for better maintainability.
- slugifying blog post titles for SEO-friendly URLs.

# Features
- User Registration: Users can create an account by providing their username, email, and password.
- User Login: Registered users can log in to their accounts using their email and password.
- Create Blog Post: Authenticated users can create new blog posts by providing a title, content, and an optional profile & banner image.
- Read Blog Posts: All users can view a list of blog posts and read individual posts in detail.
- Update Blog Post: Authenticated users can edit their own blog posts.
- Delete Blog Post: Authenticated users can delete their own blog posts.
- User Profile: Users can view and update their profile information, including their profile picture.
- User can like or upvote a blog post.

# Technologies Used
- Frontend: EJs, HTML, CSS, JavaScript , Tailwind CSS for styling, and Figma for design, fetch API for making HTTP requests, and DOM manipulation for dynamic content updates.
- Backend: Node.js, Express , Multer for file uploads, slugify for creating slugifying URLs and nodemon for development.
- Database: MongoDB
- Authentication: JWT (JSON Web Tokens), argon2 for password hashing, and cookie-parser for handling cookies.

# Structure
   - Backend: Contains the server-side code, including routes, controllers, models, and middleware.
   - Frontend: Contains the client-side code, Ejs pages, styles, and assets.

# Installation

## Clone the repository

```bash
git clone https://github.com/yourusername/full-blog-application.git
cd full-blog-application
```

## Install Backend Dependencies

```bash
npm install
```

## Install Frontend Dependencies

```bash
cd client
npm install
```

## Run Backend Server

```bash
npm start
```

## Run Frontend Server

```bash
cd client
npm start
```

# Usage
- Open your browser and navigate to `http://localhost:3000` to access the application
- Register a new account or log in with existing credentials.
- Create, read, update, and delete blog posts as needed.

# Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any improvements or bug fixes.

# Acknowledgments
- This project was inspired by various online tutorials and resources on building full-stack applications with React, Node.js, Express, and MongoDB.
- Special thanks to the open-source community for providing valuable tools and libraries that made this project possible.

