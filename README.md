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
