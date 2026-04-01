# Currency Convert

A lightweight and responsive **currency converter** built with **HTML, CSS and Vanilla JavaScript**.

The application allows users to convert values between currencies quickly through a clean and intuitive interface.

## Preview

![Preview](./readme.md/preview.png)

## Live Demo

You can deploy this project using **GitHub Pages** to create a live version of the application.

Example:

https://yourusername.github.io/currency-convert

## Features

Real time currency conversion
Currency swap functionality
Automatic recalculation
Clean and modern interface
Responsive layout
Lightweight implementation using pure JavaScript

## Technologies

HTML5
CSS3
Vanilla JavaScript

## Project Structure

```
currency-convert
│
├── index.html
├── style.css
├── script.js
├── README.md
├── preview.png
│
└── img
    ├── bg.png
    └── logo.png
```

## Installation

Clone the repository

```
git clone https://github.com/yourusername/currency-convert.git
```

Open the project folder

```
cd currency-convert
```

Open `index.html` in your browser.

No dependencies or build tools are required.

## Background Image Setup

The background image must be placed inside the `img` folder.

Step 1
Create the folder structure:

```
project-folder
│
├── index.html
├── style.css
├── script.js
│
└── img
```

Step 2
Add the image inside the folder with the exact name:

```
img/bg.png
```

Step 3
The CSS references the image like this:

```
body{
background: url("./img/bg.png") no-repeat center center;
background-size: cover;
}
```

If the background does not appear, check:

* file name spelling
* correct folder structure
* browser cache

## How to Use

Enter a value in the amount field
Select the source currency
Select the target currency
Click convert

The result will be displayed automatically.

You can also use the **invert currencies** button to swap the selected currencies instantly.

## JavaScript Logic

The JavaScript layer handles the main application behavior:

Input value processing
Currency selection handling
Conversion calculation
Dynamic interface updates
Currency swap functionality
Automatic result refresh

Event listeners capture user interaction and update the result without page reload.

## Deployment (GitHub Pages)

1. Open the repository on GitHub
2. Go to **Settings**
3. Click **Pages**
4. In **Branch**, select `main`
5. Save

Your project will be available at:

```
https://yourusername.github.io/repository-name
```

## Possible Improvements

Integration with a real exchange rate API
More currencies
Input formatting
Theme switcher (dark / light)
Better mobile layout

## License

MIT License
