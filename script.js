function makeChoice(choice) {
    const storyText = document.getElementById('story-text');
    if (choice === 'explore') {
        storyText.innerHTML = 'You found a key! But what does it open?';
        // Update buttons for the next part of the story
        document.querySelector('button').style.display = 'none'; // Hide buttons for simplicity
        // In a full app, you would update button actions to continue the story
    } else if (choice === 'window') {
        storyText.innerHTML = 'Outside the window, you see a garden. There seems to be a way out!';
        document.querySelector('button').style.display = 'none'; // Hide buttons for simplicity
    }
}
