
📸 Photo Gallery App
-A React-based Photo Gallery application that fetches and displays images with an infinite scroll feature, built as part of a collaborative project.


🚀 Project Overview
-This Photo Gallery app allows users to:
-Browse an endless stream of photos with infinite scrolling.
-Like photos (favorite functionality included).
-Smoothly load more images as users scroll down.
-Responsive design for desktop and mobile experiences.
-All photos are fetched from a local json-server running on localhost:3000.


✨ Features
-Infinite Scroll: Automatically fetches more images as the user scrolls.
-Like Button: Allows users to like or unlike images.
-Favorites Section (Optional Component): Liked images can be viewed separately.
-Loading State: Displays a loading indicator while fetching data.
-Responsive UI: Adapts seamlessly to different screen sizes.


🛠️ Technologies Used
-React (JavaScript library for building user interfaces)
-Axios (Promise-based HTTP client for API requests)
-CSS (for styling and responsiveness)
-json-server (local mock server to simulate a backend)


🧩 Component Structure
-App: Main parent component housing all others.
-Gallery: Displays the list of photos.
-ImageCard: Renders individual photo items, with like functionality.
-Favorites: (Optional) Displays liked photos.
-Loader: Spinner or loading indicator during API requests.


⚙️ How to Run the Project Locally
-Clone the Repository:

-bash
-Copy
-Edit
-git clone https://github.com/your-username/photo-gallery-app.git
-cd photo-gallery-app
-Install Dependencies:

-bash
-Copy
-Edit
-npm install
-Start the json-server: Assuming you have a db.json file containing the images:

-bash
-Copy
-Edit
-nx json-server --watch db.json --port 3000
-Run the React App:

-bash
-Copy
-Edit
-npm start
-Visit in Browser: Open http://localhost:3000 for the server (json-server), and http://localhost:3001 for the React app (if it defaults there).

📁 Project Folder Structure
pgsql
Copy
Edit
photo-gallery-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Gallery.jsx
│   │   ├── ImageCard.jsx
│   │   ├── Favorites.jsx
│   │   └── Loader.jsx
│   ├── App.jsx
│   ├── index.js
│   └── App.css
├── db.json (Mock Data)
├── package.json
└── README.md
👥 Group Members
Presbury Wamae - Group Lead
Neville Ng'ang'a - Team Member
Rochelle Owuor - Team Member


🧠 Future Improvements
-Add a search functionality to filter images by title or tags.
-Implement lazy loading for better performance.
-Improve error handling for API calls.
-Add animations for image loading transitions.
-Deploy the application online using services like Vercel or Netlify.


📝 License
-This project is for educational purposes only.