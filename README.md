**Two Friends Explain My Food**

Two Friends Explain My Food is a simple and friendly web application that explains food in an easy and understandable way.
Instead of using technical or complicated terms, the app explains food like a casual conversation between two friends, followed by a simple final explanation that anyone can understand.
This project is designed to be intuitive, visually pleasant, and easy to demo during hackathons.

**What the App Does**

Allows users to type a food name or upload an image of food

Explains the food using three simple perspectives:
Friend A explains why people like the food
Friend B explains why one should be careful

A final explanation summarizes everything in very simple language

Displays explanations in a clean and responsive user interface

Works smoothly on both desktop and mobile devices

**Why This Project**

Most food or nutrition apps feel overly technical or boring.

This project focuses on:
- Simple language
- Friendly explanations
- Clear understanding

The goal is to make food explanations feel natural and approachable rather than instructional.

**Live Demo :** https://food-buddy-ai.onrender.com/

**Getting Started**

**Requirements**
- Node.js (version 14 or higher)
- npm

**Run the Project Locally**
- Install dependencies
- Copy code
- Bash
- npm install
- Start the server
- Copy code
- Bash
- npm start
- Open your browser and visit : http://localhost:3000

**Project Structure**
Copy code

- index.html      // Main UI
- style.css       // Styling and animations
- script.js       // Frontend logic
- server.js       // Express backend server
- package.json    // Project dependencies
- README.md       // Project documentation

**Technologies Used**
- HTML, CSS, JavaScript for frontend
- Node.js and Express for backend
- Multer for handling image uploads

**How It Works**
The user enters a food name or uploads an image
The frontend sends a request to the backend
The backend returns a three-part explanation
The explanation is displayed in structured cards on the UI
Currently, the app uses mock responses to simulate AI behavior for demonstration purposes.

**Notes**
No real AI or vision API is integrated yet
Supports common image formats such as JPG and PNG
Maximum image size allowed is 5MB
Some foods like pizza, apple, and sushi have predefined explanations

**Future Improvements**
Integrate real AI-based image recognition
Use nutrition APIs for better food understanding
Add save and share features
Expand the food database

**Final Note**
This project prioritizes clarity, simplicity, and user experience.
It is built as a functional prototype that is easy to understand, easy to demo, and visually appealing
