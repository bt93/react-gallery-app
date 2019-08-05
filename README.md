# React Gallery App

Seventh project for the Treehouse Full-Stack JavaScript Techdegree. A React app that creates an image gallery. Instead of using the Flickr API, I chose to use the [Unsplash API](https://unsplash.com/). You can create an access key [here](https://unsplash.com/developers).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Get Started

To get started, follow the following instructions:

### Copy Files

Copy the project files.

### Create Unsplash Profile

Go to [https://unsplash.com/developers](https://unsplash.com/developers) and click on `Register as a Developer`.
Fill in the form and follow the instructions given to you.

### New Application

Once you've successfully logged in, click on `New Application`. Agree to the terms of service, and click `Accept Terms`.
Fill out the form info. Give any name you'd like and description. 

### Copy Key

When you get to the app dashboard, scroll down to the `Key` section. Copy the Access key.

### Create Config

Go to the `/src` directory and create a file called `config.js`. 

Use this code block:

```javascript
const apiKey = '<YOUR-KEY-HERE>';
export default apiKey;
```
Fill in the `apiKey` variable with the key you obtained.

Then in your command line type:

### `npm init`

This will initiate node files and unpack everything for you.

Then type:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.