
# URL Shortener Application

## Overview
The **URL Shortener Application** is a simple and efficient web app built using **Angular** and styled with **Bootstrap**. It allows users to input long URLs and generate shortened links instantly. The app also features a copy button for convenient one-click copying of the shortened URL.

---

## Features

- **Enter Long URL**: Input a valid URL to shorten.
- **Shorten URL**: Generate a shortened version of the URL with a single click.
- **Copy URL**: Easily copy the shortened URL to your clipboard.
- **Responsive Design**: Optimized for all screen sizes with a modern UI.

---

## Technology Stack

- **Frontend Framework**: Angular
- **Styling**: Bootstrap 5
- **Clipboard Functionality**: ClipboardJS

---

## Installation

### Prerequisites
- Node.js (v14 or later)
- Angular CLI
- npm

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/url-shortener.git
   cd url-shortener
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   ng serve
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:4200
   ```

---

## Usage

1. Enter the long URL in the input field.
2. Click the **Shorten** button to generate a shortened link.
3. Copy the shortened URL using the **Copy** button.

---

## File Structure

```
url-shortener/
├── src/
│   ├── app/
│   │   ├── shortener/
│   │   │   ├── shortener.component.html
│   │   │   ├── shortener.component.ts
│   │   │   ├── shortener.component.css
│   │   └── app.module.ts
│   ├── assets/
│   └── styles.css
├── angular.json
├── package.json
└── README.md
```

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---
