🌐 Connect Sphere – Full Stack Social Media Platform

Connect Sphere is a modern, full-stack social media platform built using the MERN stack, designed to provide users with a seamless and interactive social networking experience. The project focuses on real-time communication, secure authentication, responsive UI, and scalable backend architecture, making it suitable as a final-year project and portfolio-grade application.

🚀 Key Features
👤 User Authentication & Authorization

Secure JWT-based authentication

User registration & login

Protected routes with role-based access

Cookie-based session handling

🧑‍🤝‍🧑 Social Networking

Create, edit, and delete posts

Like & dislike posts

Comment on posts in real time

Follow / unfollow users

View user profiles and activity

💬 Real-Time Chat System

One-to-one messaging

Real-time message updates using Socket.IO

Online/offline user status

Responsive chat UI (mobile & desktop friendly)

🖼 Media Management

Image upload using Multer

Image optimization using Sharp

Cloud storage via Cloudinary

🔖 Additional Features

Bookmark posts

Suggested users system

Profile editing

Responsive layout using Tailwind CSS

Optimized API structure

🛠 Tech Stack
Frontend

React.js

Redux Toolkit

Tailwind CSS

Axios

Backend

Node.js

Express.js

MongoDB & Mongoose

Socket.IO

JWT & bcrypt

Cloud & Deployment

MongoDB Atlas

Cloudinary

Render (Backend + Frontend hosting)

📁 Project Structure
Social/
│── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── index.js
│
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── redux/
│   │   └── lib/axios.js
│   └── public/
│
│── package.json
│── README.md

⚙️ Environment Variables

Create a .env file in the backend with the following:

PORT=8000
MONGO_URI=your_mongodb_atlas_uri
SECRET_KEY=your_jwt_secret
CLOUD_NAME=your_cloudinary_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret

▶️ Installation & Run Locally
# Clone repository

# Install dependencies
npm install
npm install --prefix frontend

# Build frontend
npm run build

# Start server
npm start


Server runs at: http://localhost:8000

🌍 Live Demo

🔗 https://connect-sphere-pz79.onrender.com

🎯 Project Highlights

Real-time messaging

Scalable MERN architecture

Cloud-based media handling

Clean, responsive UI

Production-ready deployment

👨‍💻 Author

Arpit Kakran
📌 B.Tech Final Year Project
🔗 LinkedIn

⭐ Feedback

If you like this project, consider giving it a ⭐ on GitHub!
