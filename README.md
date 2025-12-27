# 🍽️ Two Friends Explain My Food

A friendly, child-friendly web app that explains food in simple terms using three perspectives: two friendly friends and a final summary explained like you're 10 years old!

## ✨ Features

- **Text Input**: Type any food name to get an explanation
- **Image Upload**: Upload a photo of food (AI simulation)
- **Three-Part Explanation**:
  - 👩 Friend A - Why people like this food
  - 👨 Friend B - Why to be careful
  - 🤖 Final Answer - Explained simply for everyone
- **Beautiful UI**: Warm gradients, rounded cards, smooth animations
- **Mobile-Friendly**: Responsive design that works on all devices

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation & Running

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

That's it! The app is now running locally. 🎉

## 📁 Project Structure

```
├── index.html      # Main HTML file
├── style.css       # All styling and animations
├── script.js       # Frontend JavaScript
├── server.js       # Express backend server
├── package.json    # Node.js dependencies
└── README.md       # This file
```

## 🎨 Design Philosophy

- **Warm & Friendly**: Child-friendly language, no medical terms or numbers
- **Visual Appeal**: Soft gradients, rounded cards with shadows, emoji personality
- **Smooth UX**: "Thinking..." animations, hover effects, smooth scrolling
- **Accessibility**: Clean typography (Poppins font), clear visual hierarchy

## 🔧 Technical Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js + Express
- **File Upload**: Multer (for image handling)

## 💡 How It Works

1. User enters a food name or uploads an image
2. Frontend sends request to `/explain-food` endpoint
3. Backend generates a friendly three-part explanation (currently using mock data)
4. Results are displayed in beautiful card format

## 🎯 Hackathon Ready

This prototype is designed to impress judges quickly:
- ✅ Instant visual appeal
- ✅ Clear, understandable concept
- ✅ Polished UI/UX
- ✅ Easy to demo
- ✅ Works immediately

## 📝 Notes

- Currently uses mock AI responses (no real AI API integration)
- Image upload accepts common image formats (jpeg, png, etc.)
- File size limit: 5MB per image
- Pre-configured explanations for: pizza, apple, sushi
- Other foods get friendly generic explanations

## 🚀 Future Enhancements

- Integration with real AI vision API for image recognition
- Integration with nutrition API for more accurate explanations
- Save favorite explanations
- Share explanations with friends
- More food options in database

---

Built with ❤️ for hackathons and food lovers!
