
Portifolio webpage
Using Flexbox for Components + Grid for Layout
Exercise Overview
Create a single portfolio webpage that demonstrates both Flexbox and Grid by using:

Flexbox for the navigation bar and card components
Grid for the main page layout and image gallery
1. Create Your Files
Create two files in a folder:

index.html
style.css
2. HTML Structure
Type this HTML code into your index.html:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Navigation Bar (Use FLEXBOX here) -->
    <nav class="navbar">
        <div class="logo">Portfolio</div>
        <ul class="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div class="nav-social">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
        </div>
    </nav>

    <!-- Main Content Container (Use GRID here) -->
    <div class="page-container">
        
        <!-- Hero Section -->
        <section class="hero" id="home">
            <h1>Sonam</h1>
            <p>Frontend Developer & UI Designer</p>
            <button class="cta-button">View My Work</button>
        </section>

        <!-- About Section -->
        <section class="about" id="about">
            <h2>About Me</h2>
            <p>I'm a passionate web developer student who loves creating beautiful and functional websites. I love working with modern technologies and solving complex problems.</p>
        </section>

        <!-- Skills Cards (Use FLEXBOX for the cards) -->
        <section class="skills">
            <h2>My Skills</h2>
            <div class="skills-container">
                <div class="skill-card">
                    <h3>HTML & CSS</h3>
                    <p>Expert in semantic HTML and modern CSS</p>
                </div>
                <div class="skill-card">
                    <h3>JavaScript</h3>
                    <p>Proficient in vanilla JavaScript</p>
                </div>
                <div class="skill-card">
                    <h3>React</h3>
                    <p>Building interactive user interfaces with React and hooks</p>
                </div>
            </div>
        </section>

        <!-- Portfolio Gallery (Use GRID here) -->
        <section class="portfolio" id="portfolio">
            <h2>My Work</h2>
            <div class="gallery">
                <div class="project project-1">
                    <img src="https://via.placeholder.com/300x200/4CAF50/white?text=Project+1" alt="Project 1">
                    <h3>E-commerce Site</h3>
                </div>
                <div class="project project-2">
                    <img src="https://via.placeholder.com/300x200/2196F3/white?text=Project+2" alt="Project 2">
                    <h3>Weather App</h3>
                </div>
                <div class="project project-3">
                    <img src="https://via.placeholder.com/300x200/FF9800/white?text=Project+3" alt="Project 3">
                    <h3>Portfolio Site</h3>
                </div>
                <div class="project project-4">
                    <img src="https://via.placeholder.com/300x200/9C27B0/white?text=Project+4" alt="Project 4">
                    <h3>Blog Platform</h3>
                </div>
                <div class="project project-5">
                    <img src="https://via.placeholder.com/300x200/F44336/white?text=Project+5" alt="Project 5">
                    <h3>Mobile App</h3>
                </div>
                <div class="project project-6">
                    <img src="https://via.placeholder.com/300x200/607D8B/white?text=Project+6" alt="Project 6">
                    <h3>Dashboard</h3>
                </div>
            </div>
        </section>

    </div>
</body>
</html>
Your Tasks
Task 1: Setup Basic Styles
Add this starter CSS to your style.css file:

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
}

/* You'll add your Flexbox and Grid styles below */
Task 2: Navigation Bar with Flexbox
Use Flexbox to create the navigation bar layout:

.navbar {
    /* TODO: Make this a flex container */
    /* TODO: Space items across the navbar */
    /* TODO: Center items vertically */
    background: #333;
    color: white;
    padding: 1rem 2rem;
}

.nav-menu {
    /* TODO: Make this a flex container */
    /* TODO: Remove list styles */
    /* TODO: Add space between menu items */
}

.nav-social {
    /* TODO: Make this a flex container */
    /* TODO: Add space between social links */
}
What you need to do:

Make .navbar a flex container
Use justify-content: space-between to spread logo, menu, and social links
Make .nav-menu and .nav-social flex containers
Add gaps between navigation items
Remove list bullets from the menu
Task 3: Main Layout with Grid
Use Grid to create the main page layout:

.page-container {
    /* TODO: Make this a grid container */
    /* TODO: Define grid areas for each section */
    /* TODO: Set up appropriate row sizes */
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}
What you need to do:

Make .page-container a grid container
Create grid areas for: hero, about, skills, portfolio, contact
Use grid-template-areas to define the layout
Make each section span the full width
Task 4: Skills Cards with Flexbox
Use Flexbox for the skills cards:

.skills-container {
    /* TODO: Make this a flex container */
    /* TODO: Allow cards to wrap */
    /* TODO: Add space between cards */
}

.skill-card {
    /* TODO: Set flex properties for responsive sizing */
    /* TODO: Add styling for the cards */
    background: #f4f4f4;
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
}
What you need to do:

Make .skills-container a flex container that wraps
Set each .skill-card to have a minimum width but grow to fill space
Add gaps between cards
Make cards equal height
Task 5: Portfolio Gallery with Grid
Use Grid for the project gallery:

.gallery {
    /* TODO: Make this a grid container */
    /* TODO: Create responsive columns */
    /* TODO: Add gaps between projects */
}

.project {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    padding: 1rem;
    text-align: center;
}

.project img {
    width: 100%;
    border-radius: 4px;
}
What you need to do:

Make .gallery a grid container
Use repeat(auto-fit, minmax(280px, 1fr)) for responsive columns
Add grid gaps
Make sure images fit properly in their containers
Task 6: Make it Responsive
Add responsive behavior for mobile devices:

@media (max-width: 768px) {
    .navbar {
        /* TODO: Stack navbar items vertically */
    }
    
    .skills-container {
        /* TODO: Make cards stack on mobile */
    }
    
    .gallery {
        /* TODO: Adjust grid columns for mobile */
    }
}
Expected Results
Desktop View:
Navigation bar with logo on left, menu in center, social links on right
Hero section spanning full width
Skills cards in a row (3 across)
Portfolio gallery in a responsive grid (2-3 columns)
All sections properly spaced
Mobile View:
Navigation stacked vertically or hamburger menu
Skills cards stacked in single column
Portfolio projects in single column
Everything remains readable and accessible