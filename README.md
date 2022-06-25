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

<h4>Available API Routes: Running local</h4>
<ul>
  <li>http://localhost:port_number/user/login</li>
  <li>http://localhost:port_number/user/register</li>
  <li>http://localhost:port_number/course/course_detail?id=x</li>
  <li>http://localhost:port_number/course/search (to get all the course)</li>
  <li>http://localhost:port_number/course/search?page=0&size=5&course_name=x&prof_name=y&sort=desc (filter by courses)</li>
</ul>  
</div>
