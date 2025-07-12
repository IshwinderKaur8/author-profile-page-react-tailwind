# Author Profile Page

A modern, responsive author profile page built with React and styled entirely using Tailwind CSS, showcasing various sections like a profile header, action bar, content tabs, sidebar widgets, and an activity feed.

## Features

* **Responsive Design:** Optimized for seamless viewing across various devices (mobile, tablet, desktop).
* **Profile Header:** Displays author's avatar, name, handle, dynamic badges with tooltips, expandable bio, and social media links.
* **Action Bar:** Includes buttons for "Request Collaboration", "Send Message", and a toggleable "Follow/Unfollow" button.
* **Content Tabs:** Interactive tabs for "Stories", "Forks", "Stars", "Followers", and "Comments", each displaying relevant dummy data.
    * **Stories/Forks/Stars:** Displays `StoryCard` components with title, excerpt, forks, and stars count.
    * **Followers:** Shows `FollowerAvatar` components with follower's name and an interactive bio tooltip on hover.
    * **Comments:** Lists `CommentItem` components with author, avatar, timestamp, and comment content.
* **Sidebar Widgets:** Features a "Favorite Quotes" widget that rotates through inspirational quotes.
* **Recent Activity Feed:** Displays a chronological list of recent author activities (e.g., forking a story, earning a badge, commenting, uploading a new story).

## Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
* **react-icons:** A library that provides popular icons as React components.
* **CodeSandbox:** Online IDE for rapid web development.

## Project Structure
├── public/
├── src/
│   ├── components/
│   │   ├── ActionBar.jsx
│   │   ├── ActivityFeed.jsx
│   │   ├── ActivityFeedItem.jsx
│   │   ├── CommentItem.jsx
│   │   ├── FollowerAvatar.jsx
│   │   ├── ProfileHeader.jsx
│   │   ├── QuoteWidget.jsx
│   │   ├── StoryCard.jsx
│   │   └── TabButton.jsx
│   ├── App.js
│   ├── index.css
│   └── main.jsx (or index.js, depending on your React setup)
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── README.md
└── ...other config files

## Setup and Installation (For Local Development)

Although this project was developed using CodeSandbox, you can easily run it locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/IshwinderKaur8/author-profile-page-react-tailwind.git
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or if you use yarn
    # yarn install
    ```

3.  **Start the development server:**
    ```bash
    npm start
    # or
    # yarn start
    ```

    The application will typically open in your browser at `http://localhost:3000`.

## Live Demo

Explore the live project directly on CodeSandbox:

(https://codesandbox.io/p/github/IshwinderKaur8/author-profile-page-react-tailwind/draft/cool-cannon?workspaceId=ws_RxUGj5MBnngeHW8o48Q4VJ)

## Contributing

While this project is primarily for demonstration/assignment purposes, feel free to fork the repository, experiment with the code, and suggest improvements.

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).
