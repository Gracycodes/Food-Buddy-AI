const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Configure multer for file uploads
const upload = multer({ 
    dest: 'uploads/',
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

// Create uploads directory if it doesn't exist
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

// Serve static files
app.use(express.static('.'));

// Mock AI responses based on food name
const getFoodExplanation = (foodName) => {
    const foodLower = foodName.toLowerCase();
    
    // Sample explanations for common foods
    const explanations = {
        pizza: {
            friendA: "Pizza is like a happy party in your mouth! The warm, gooey cheese melts perfectly, and the crispy crust gives you that satisfying crunch. It's super fun to eat with friends because everyone can share slices and pick their favorite toppings. Plus, it comes in so many yummy combinations - you can have it with vegetables, meat, or just plain cheese!",
            friendB: "Sometimes pizza can have lots of oil and salt, which isn't great if you eat it all the time. And if you eat too much, it might make your tummy feel heavy. Also, some pizzas have really spicy toppings that might not feel good if you're not used to them!",
            finalAnswer: "Think of pizza like a fun snack that's perfect for special times with friends! It tastes amazing and makes everyone happy, but it's like having a birthday cake - best when you don't have it every single day. Enjoy it, share it with people you love, and your body will be happy!"
        },
        apple: {
            friendA: "Apples are nature's crunchy, sweet snacks! They're super fresh and juicy, and the best part is you can eat them anytime, anywhere - no need to cook or prepare anything. They come in lots of fun colors like red, green, and yellow, and each one tastes a little different. Plus, that satisfying 'crunch' sound is so fun!",
            friendB: "Sometimes the outside of apples might have a waxy coating, so it's good to wash them. And if you eat too many apples in one go, your tummy might feel a bit full. Some apples can be really sour, which might make your face pucker up!",
            finalAnswer: "Apples are like nature's perfect snacks - they're ready to eat, taste great, and make your body feel good! They're like a little energy boost wrapped in a colorful package. Just wash them before you eat, and you're all set for a yummy treat!"
        },
        sushi: {
            friendA: "Sushi is like a beautiful art piece you can eat! It's super fresh and light, and you get to try lots of different flavors in tiny, cute bites. The rice is soft and slightly sweet, and when combined with fish or vegetables, it creates this amazing taste adventure. It's also fun because you get to use chopsticks!",
            friendB: "Sushi needs to be really fresh, so it's important to get it from a place that knows what they're doing. Sometimes the raw fish might not agree with everyone's tummy, especially if you're not used to it. And some people might not like the texture or the seaweed wrapping.",
            finalAnswer: "Sushi is like trying a new adventure in food form! It's fresh, fun, and each piece is a little surprise. But just like any adventure, make sure you're trying it from a good place that knows how to make it safely. If you're new to it, maybe start with the cooked kinds first!"
        }
    };

    // Try to find a match
    for (const [key, value] of Object.entries(explanations)) {
        if (foodLower.includes(key)) {
            return value;
        }
    }

    // Default generic explanation
    return {
        friendA: `People love ${foodName} because it's something that brings joy and makes meals special! It has flavors that tickle your taste buds and makes eating fun. Many people enjoy sharing it with family and friends, creating happy memories around the table.`,
        friendB: `Like most foods, ${foodName} is best enjoyed in balance. Sometimes eating too much of one thing might not make your body feel its best. And everyone's body is different - what works great for one person might feel different for another!`,
        finalAnswer: `${foodName} is like a friend - it can be wonderful when you enjoy it at the right times! The best way to enjoy food is to listen to your body, eat when you're hungry, and have fun trying different things. Food is meant to be enjoyed and shared with people you care about!`
    };
};

// Main endpoint
app.post('/explain-food', upload.single('image'), (req, res) => {
    try {
        let foodName = req.body.foodName || '';
        
        // If image was uploaded, simulate AI guessing the food
        if (req.file) {
            // In a real app, you'd use AI vision API here
            // For this mock, we'll use a default or the provided name
            if (!foodName) {
                foodName = 'this delicious food'; // Generic placeholder
            }
            
            // Clean up uploaded file
            fs.unlinkSync(req.file.path);
        }

        if (!foodName) {
            return res.status(400).json({ error: 'Please provide a food name or image' });
        }

        // Get explanation
        const explanation = getFoodExplanation(foodName);

        // Simulate a small processing delay
        setTimeout(() => {
            res.json({
                friendA: explanation.friendA,
                friendB: explanation.friendB,
                finalAnswer: explanation.finalAnswer
            });
        }, 1000);

    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({ error: 'Something went wrong. Please try again.' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`🍽️  Server is running on http://localhost:${PORT}`);
    console.log(`✨ Two Friends Explain My Food is ready!`);
});
