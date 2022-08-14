# Course Guide

An app to help students choose the suitable course. Users can search for courses, view courses detail information, rate courses and view the feedback on courses from other users.

# Technical Architecture

We are using MERN stack as our main architecture:

- Frontend : React + Material UI
- Backend : Node.js  (Express.js)
- Database : MongoDB
- Deployment : Heroku

# Team Members

name of team: SmartFinder

- William Kana Tsoplefack
- Fan Ouyang
- Yasmine Taha Mokhtar
- Julius Tietenberg
- Lukas Holtbrink

# Project Features

### 1. Login & Registration

In the current version, When registering the email must be the a email address of the University of Duisburg-Eisen. That means, the email suffix must contain "**uni-due.de**", such as course-guide@uni-due.de

![image-20220815042316396](https://user-images.githubusercontent.com/102190949/184554227-3ed21d05-0086-4dc4-b89e-940b5c158313.png)

### 2. Course Overview

- Search for courses by course name and professor name
- Sort courses by rating score
- Add course to dashboard.

![image-20220815042739627](https://user-images.githubusercontent.com/102190949/184554241-8781dba4-62b0-4a1d-b4ae-17f73d615a7a.png)

### 3. Course Detail

- View course information
- View other students' ratings and comments on the course
- Add rating and comment on the course

![image-20220815043015566](https://user-images.githubusercontent.com/102190949/184554251-4ffc620b-ad0d-4936-a312-881d0c079d47.png)

### 4. Student Profile

- edit own information
- remove added courses

![image-20220815043643030](https://user-images.githubusercontent.com/102190949/184554259-f977ea0e-365e-45a1-80f6-a506a756c3a9.png)

### 5. Ratings

![image-20220815043716071](https://user-images.githubusercontent.com/102190949/184554268-cf6a97aa-2000-4357-a344-a33a8635732d.png)

# Welcome to Course Guide Project!

<div>
    <h3>Where can push changes</h3>
    <p>
    Only the team leader can push changes made by another members
    </p>
</div>

<div>
    <h3>Creating Branch for Issue ticket</h3>
    <p>
    Please always make sure that the branch you created have 
    the same name (short name) for the issue ticket you are working on.
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
