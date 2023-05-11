let jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why don't skeletons fight each other? They don't have the guts!",
  "What's brown and sticky? A stick!",
  "Why do programmers prefer dark mode? Because light attracts bugs!",
  "Why did the programmer quit his job? Because he didn't get arrays!",
  "Why did the programmer go broke? Because he lost his domain in a bet!",
  "Why don't programmers like nature? It has too many bugs!",
  "Why was the JavaScript developer sad? Because he didn't get any class!",
  "Why did the doctor always bring a red pen to work? In case they needed to draw blood!",
  "Why did the doctor go to art school? To learn how to draw blood!",
  "Why was the doctor always calm? Because they had a lot of patients!",

  "Why did the doctor become a musician? Because they had a lot of patients to drum up!",
  "Why did the doctor bring a mirror to work? To reflect on their patients!",
  "Why was the JavaScript developer sad? Because he didn't get any class!",
  "Why did the programmer always mix up Christmas and Halloween? Because Oct 31 == Dec 25!",
  "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25!",
  "Why do programmers always get Christmas and Halloween mixed up? Because Oct 31 == Dec 25!",
  "Why did the programmer put on weight? Because he had too many byte-sized snacks!",
  "Why did the developer go broke? Because he lost his domain in a bet!",
  "Why don't developers like nature? It has too many bugs!",
  "Why did the doctor carry a ladder? In case they needed to see patients on a higher level!",
  "Why did the doctor become a chef? Because they wanted to cure hunger pains!",
  "Why did the doctor always have a pen in their pocket? To write prescriptions, of course!",
  "Why was the Java developer sad? Because he didn't get any class!",
  "Why did the developer put on weight? Because he had too",
  "Why did the doctor join a band? Because they had a great bedside manner!",
  "Why did the doctor become a gardener? Because they wanted to have patients in the waiting room!",
  "Why did the programmer always mix up Christmas and Halloween? Because Oct 31 == Dec 25!",
  "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25!",
  "Why do programmers always get Christmas and Halloween mixed up? Because Oct 31 == Dec 25!",
  "Why did the programmer put on weight? Because he had too many byte-sized snacks!",
  "Why did the programmer go broke? Because he lost his domain in a bet!",
  "Why don't programmers like nature? It has too many bugs!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "Why couldn't the bicycle stand up by itself? It was two-tired!",
  "What's orange and sounds like a parrot? A carrot!",
  "What do you call fake spaghetti? An impasta!",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "Why don't you ever see elephants hiding in trees? Because they're really good at it!",
  "Why couldn't the leopard play hide and seek? Because he was always spotted!",
  "Why did the math book look sad? Because it had too many problems!",
  "What do you call a snowman with a six-pack? An abdominal snowman!",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "What do you call a bear with no teeth? A gummy bear!",
  "Why don't skeletons fight each other? They don't have the guts!",
  "Why don't scientists trust atoms? Because they make up everything!",
  "What did one wall say to the other wall? I'll meet you at the corner!",
  "What did one plate say to the other plate? Dinner is on me!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why did the bicycle fall over? It was two-tired!",
  "What do you get if you cross a snowman and a vampire? Frostbite!",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
  "What's brown and sticky? A stick!",
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why don't skeletons fight each other? They don't have the guts!",
  "What's orange and sounds like a parrot? A carrot!",
  "What do you call fake spaghetti? An impasta!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "Why couldn't the bicycle stand up by itself? It was two-tired!",
  "What's orange and sounds like a parrot? A carrot!",
  "What do you call fake spaghetti? An impasta!",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "Why don't you ever see elephants hiding in trees? Because they're really good at it!",
  "Why couldn't the leopard play hide and seek? Because he was always spotted!",
  "Why did the math book look sad? Because it had too many problems!",
  "What do you call a snowman with a six-pack? An abdominal snowman!",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "What do you call a bear with no teeth? A gummy bear!",
  "Why don't skeletons fight each other? They don't have the guts",
];

let index = Math.floor(Math.random() * jokes.length - 1);
console.log(index);
joke.innerHTML = jokes[index];

// Array of colors to choose from
var colors = [
  "#354B5E", // Steel Blue
  "#4E6E81", // Cadet Blue
  "#2C3E50", // Midnight Blue
  "#6C7A89", // Light Steel Blue
  "#FF5E3A", // Tomato
  "#FFA41B", // Orange
  "#FFC300", // Goldenrod
  "#FF5733", // Dark Salmon
  "#C70039", // Crimson
  "#DAF7A6", // Pastel Green
  "#1B98E0", // Dodger Blue
  "#5D6D7E", // Slate Blue
  "#9AECDB", // Aquamarine
  "#B9770E", // Dark Orange
  "#F4D03F", // Saffron
  "#6AB04A", // Green Apple
  "#FFECDB", // Peach
  "#2475B0", // Cerulean
  "#FFA07A", // Light Salmon
  "#2E86C1", // Royal Blue
  "#E74C3C", // Alizarin
  "#F9E79F", // Corn Silk
  "#B03A2E", // Rust
  "#FFD700", // Gold
  "#546E7A", // Slate Gray
  "#455A64", // Blue Gray
  "#607D8B", // Light Blue Gray
  "#34495E", // Dark Blue Gray
  "#78909C", // Blue Gray
  "#3F5F7F", // Cadet Gray
];

// Get a random color from the array
var randomColor = colors[Math.floor(Math.random() * colors.length)];

// Apply the random color as the background color of the body
document.body.style.backgroundColor = randomColor;
var textColor = document.getElementsByTagName("span");
textColor = randomColor;
