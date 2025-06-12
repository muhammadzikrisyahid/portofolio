/* Reset & Font */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
  background-color: #fdfdfd;
  color: #222;
  transition: background-color 0.3s, color 0.3s;
}

body.dark-mode {
  background-color: #121212;
  color: #f1f1f1;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #00a86b;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 10;
}

.logo {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
}

.nav-list {
  display: flex;
  gap: 1.5rem;
}

.nav-list a {
  color: #fff;
  font-weight: bold;
  transition: color 0.2s;
}

.nav-list a:hover {
  color: #e0ffe8;
}

.controls {
  display: flex;
  gap: 0.5rem;
}

select, button {
  padding: 0.4rem 0.6rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* Hero Section */
.hero {
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url('images/hero.jpg') center/cover;
  color: white;
  text-align: center;
  padding: 6rem 2rem;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-buttons {
  margin-top: 1.5rem;
}

.btn-primary, .btn-secondary {
  padding: 0.7rem 1.2rem;
  margin: 0.5rem;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  transition: background 0.3s;
}

.btn-primary {
  background-color: #00a86b;
  color: white;
}

.btn-primary:hover {
  background-color: #008655;
}

.btn-secondary {
  background-color: #ffffff;
  color: #00a86b;
  border: 2px solid #00a86b;
}

.btn-secondary:hover {
  background-color: #e0ffe8;
}

/* Highlight Section */
.highlight {
  display: flex;
  justify-content: space-around;
  padding: 2rem 1rem;
  background-color: #f2fdf6;
  flex-wrap: wrap;
}

.highlight-item {
  flex: 1;
  margin: 1rem;
  padding: 1rem;
  border-left: 4px solid #00a86b;
  background-color: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
}

/* Info Section */
.info-section {
  padding: 3rem 2rem;
}

.info-section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

input[type="text"] {
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 60%;
  max-width: 400px;
  margin-bottom: 1rem;
}

/* Gallery */
.gallery-section {
  background-color: #f5f5f5;
  padding: 3rem 2rem;
}

.gallery-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.gallery-item {
  width: 200px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.gallery-item img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
}

.gallery-item:hover {
  transform: scale(1.05);
}

/* Map */
.map-section iframe {
  width: 100%;
  border: 0;
  border-radius: 10px;
}

/* Join Form */
.join-section {
  padding: 3rem 2rem;
  background-color: #eafff3;
}

.join-section form {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: auto;
}

.join-section input,
.join-section textarea {
  padding: 0.7rem;
  margin: 0.5rem 0;
  border: 1px solid #aaa;
  border-radius: 6px;
}

/* Footer */
.footer {
  text-align: center;
  padding: 1rem;
  background-color: #00a86b;
  color: white;
  margin-top: 2rem;
}

/* Dark Mode */
body.dark-mode {
  background-color: #111;
  color: #eee;
}

body.dark-mode .header {
  background-color: #222;
}

body.dark-mode .btn-primary {
  background-color: #00c47a;
}

body.dark-mode .highlight-item {
  background-color: #1e1e1e;
  color: #eee;
}

body.dark-mode .gallery-section {
  background-color: #181818;
}

body.dark-mode input,
body.dark-mode textarea {
  background-color: #222;
  color: white;
  border: 1px solid #444;
}
