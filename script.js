const foodInput = document.getElementById('food-input');
const foodImage = document.getElementById('food-image');
const imagePreview = document.getElementById('image-preview');
const explainBtn = document.getElementById('explain-btn');
const thinking = document.getElementById('thinking');
const results = document.getElementById('results');
const friendAText = document.getElementById('friend-a-text');
const friendBText = document.getElementById('friend-b-text');
const finalText = document.getElementById('final-text');

// Handle image preview
foodImage.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            imagePreview.innerHTML = `<img src="${event.target.result}" alt="Food preview">`;
            imagePreview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        imagePreview.style.display = 'none';
    }
});

// Handle explain button click
explainBtn.addEventListener('click', async function() {
    const foodName = foodInput.value.trim();
    const imageFile = foodImage.files[0];

    if (!foodName && !imageFile) {
        alert('Please enter a food name or upload an image!');
        return;
    }

    // Show thinking animation
    thinking.classList.remove('hidden');
    results.classList.add('hidden');
    explainBtn.disabled = true;

    try {
        const formData = new FormData();
        if (imageFile) {
            formData.append('image', imageFile);
        }
        if (foodName) {
            formData.append('foodName', foodName);
        }

        const response = await fetch('/explain-food', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Failed to get explanation');
        }

        const data = await response.json();

        // Simulate a small delay for better UX
        await new Promise(resolve => setTimeout(resolve, 500));

        // Display results
        friendAText.textContent = data.friendA;
        friendBText.textContent = data.friendB;
        finalText.textContent = data.finalAnswer;

        thinking.classList.add('hidden');
        results.classList.remove('hidden');

        // Scroll to results
        results.scrollIntoView({ behavior: 'smooth', block: 'start' });

    } catch (error) {
        console.error('Error:', error);
        alert('Oops! Something went wrong. Please try again.');
        thinking.classList.add('hidden');
    } finally {
        explainBtn.disabled = false;
    }
});

// Allow Enter key to trigger explanation
foodInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        explainBtn.click();
    }
});
