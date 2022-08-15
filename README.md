# Course Guide

An app to help students choose suitable courses for them. Users can browse and search for courses, view detailed information on courses (scraped from the university website), rate courses and read the feedback on those courses given by other users.

# Technical Architecture

We are using the MERN stack as our main architecture:

- Frontend : React + Material UI
- Backend : Node.js  (Express.js)
- Database : MongoDB
- Deployment : Heroku
- Data: Scraping Tool from ELAS (https://github.com/ude-soco/ELAS)

# Team Members

Name of team: SmartFinder

- William Kana Tsoplefack
- Fan Ouyang
- Yasmine Taha Mokhtar
- Julius Tietenberg
- Lukas Holtbrink

# Project Features

### 1. Login & Registration

In the current version, when registering the email it has to be the an email address of the University of Duisburg-Essen. That means, the email suffix must contain "**uni-due.de**", such as in course-guide@uni-due.de

![image-20220815042316396](https://user-images.githubusercontent.com/102190949/184554227-3ed21d05-0086-4dc4-b89e-940b5c158313.png)

### 2. Course Overview

- Search for courses based on course name and professor name
- Sort courses by average rating score
- Add course to your dashboard

![image-20220815042739627](https://user-images.githubusercontent.com/102190949/184554241-8781dba4-62b0-4a1d-b4ae-17f73d615a7a.png)

### 3. Course Detail

- View detailed course information
- View other students' ratings and comments on the courses
- Add ratings and comments to the courses

![image-20220815043015566](https://user-images.githubusercontent.com/102190949/184554251-4ffc620b-ad0d-4936-a312-881d0c079d47.png)

### 4. Student Profile

- Edit your personal information
- Access your course selection
- Remove added courses

![image-20220815043643030](https://user-images.githubusercontent.com/102190949/184554259-f977ea0e-365e-45a1-80f6-a506a756c3a9.png)

### 5. Ratings

![image-20220815043716071](https://user-images.githubusercontent.com/102190949/184554268-cf6a97aa-2000-4357-a344-a33a8635732d.png)


### 6. How to run the project?

#### Local Machine

1. Install NodeJS on your machine.
2. Open the Frontend Folder in your Terminal and run the commands:

   yarn install
   yarn start

3. Open the local development server (http://localhost:3000/).
4. You can now test the app, the backend is fully deployed (https://course-guide-ude-server.herokuapp.com/).
5. (Opt.) Use Ctrl+C to terminate the server. 

#### Heroku

Use the following link to view the deployed project on Heroku:
https://course-guide-ude-frontend.herokuapp.com/

<div>
   
   ------------------------------------------------------------------------------------------
   
</div>

# Welcome to Course Guide Project!

<div>
    <h3>Where can you push changes?</h3>
    <p>
    Only the team leader can push changes made by other members
    </p>
</div>

<div>
<h3>Backend: How to run it?</h3>
<ul>
  <li>Make sure you have created the file ".env" and fill up with the variable "ATLAS_URI" and also the "TOKEN_SECRET". Put this file inside backend folder</li>
  <li>Run the command: node  server.js</li>
</ul>  

<h4>Available API Routes: Running local(XXX: http://localhost:9000 with po)</h4>
<ul>
  <li>XXX/user/login</li>
  <li>XXX/user/register</li>
  <li>XXX/course/course_detail?id=x</li>
  <li>XXX/course/search (to get all the course)</li>
  <li>XXX/course/search?page=0&size=5&course_name=x&prof_name=y&sort=desc (filter by courses)</li>
  <li>XXX/ratings/add?id_course=x (to rating)</li>
  <li>XXX/ratings/ratings_by_ic_course?id_course=x&page=y&size=z (to get all ratings by one course_id, y: page number and z: the number of items)</li>
  <li>XXX/user/dashboard/account (to get user profile infos)</li>
  <li>XXX/user/dashboard/account_update (to update user profile)</li>

  <li>XXX/dashboard/add?course_id=x (to a selected course from home page to your dashboard: with x the course id)</li>
  <li>XXX/dashboard/remove?course_id=x (remove a selected course from your dashboard: with x the course id)</li>
  <li>XXX/dashboard/my-courses (to get courses related to the user logged)</li>
</ul>  
</div>
