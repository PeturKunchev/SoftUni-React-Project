📚 Book Catalogue App – Documentation
Project Overview
Book Catalogue is a full-stack web application built with React that allows users to browse, add, edit, and manage books. 
It includes user authentication, book listing, form validations, and integrates Google Maps to display the bookstore location. 
The app is deployed on Vercel and uses a backend (e.g., Express + MongoDB Atlas) hosted on a cloud platform (like Render).

Features
✅ User registration and login (with protected routes)
✅ Browse all books
✅ View book details
✅ Add, edit, and delete books (only by the creator)
✅ Responsive design
✅ Context API for global auth state
✅ Google Maps integration (shows bookstore location)
✅ Loader while backend wakes up (cold start handling)
✅ Form validation and error messages
✅ NotFound/Error page for invalid routes

🛠️ Technologies Used
Frontend
React (with Hooks, Context API)
React Router DOM
CSS for styling
Google Maps JavaScript API (for embedded map)

Backend
Node.js + Express
MongoDB Atlas for data storage
JWT for authentication

Environment Variables
You will need the following environment variables:
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
REACT_APP_BASE_URL=https://your-backend-url.com

Deployment
Frontend: Vercel
Backend: Render
Database: MongoDB Atlas


📍 Google Maps Integration
Google Maps is used to show the bookstore location on the About page.
To enable this feature:

You must enable billing in the Google Cloud Console

Add your API key to your environment variables

👤 User Roles
Authenticated Users can:

Add, edit, and delete their own books

View all books and profiles

Guests can:

Browse books

Register or log in
