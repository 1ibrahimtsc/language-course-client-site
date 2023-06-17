#### Project Name : Summer Camp School

#### Description

Summer Camp School is a web application that allows users to select classes and to pay the classes price .

#### Key Features

1. Feature 1: [Describe a notable feature or functionality of the website]
2. Feature 2: [Describe another key feature or functionality]
3. Feature 3: [Add another important feature]
4. Feature 4: [Include more features as needed]
5. Feature 5: [Highlight additional features that make your website unique]

6. Feature 1: Homepage:
   Top Slider Section showcasing relevant images and messages.
   Popular Classes Section displaying the top 6 classes based on student enrollment.
   Popular Instructors Section highlighting the top 6 instructors based on student enrollment.
   Extra Section with attractive animations and effects.

7. Feature 2: Instructors Page:
   List of all instructors with their images, names, and email addresses.
   (Optional) Number of classes taken by each instructor.
   (Optional) Name of the classes taken by each instructor.
   "See Classes" button to view classes taught by each instructor.

8. Feature 3: Classes Page:
   Display of all approved classes.
   Each class includes an image, name, instructor name, available seats, and price.
   Select button to enroll in a class (disabled for admins/instructors or when no seats are available).
   Class card background turns red if no seats are available.

9. Feature 4: Student Dashboard:
   Private dashboard accessible only to students.
   "My Selected Classes" section showing all classes booked by the student.
   Relevant information, along with "Delete" and "Pay" buttons for each selected class.
   "Delete" button to remove a selected class.
   "My Enrolled Classes" section displaying all classes the student has successfully paid for.

10. Feature 5 Payment (Student Dashboard):
    "Pay" button redirects students to the payment page.
    After successful payment, available seats for the class are reduced by 1.
    Class information is shown on the "My Enrolled Classes" page and removed from the "My Selected Classes" page.
    Payment history page for students, sorted in descending order.

11. Feature 5Instructor Dashboard:
    Private dashboard accessible only to instructors.
    "Add a Class" page with a form to create new classes.
    Fields include class name, image, instructor name (read-only), instructor email (read-only), available seats, price, and an "Add" button.
    Newly added classes have a pending status.
    "My Classes" section displaying all classes added by the instructor.
    Relevant information, including pending/approved/denied status, total enrolled students, feedback, and update button for each class.

12. Feature 7 Admin Dashboard:
    Private dashboard accessible only to admins.
    "Manage Classes" page displaying all classes added by instructors.
    Information includes class image, name, instructor name, instructor email, available seats, price, and status (pending/approved/denied).
    Buttons to approve, deny, and send feedback for each class.
    Modal to write and send feedback to instructors.
    "Manage Users" page to view registered users' information and update their roles.
    "Make Instructor" button to update a user's role as an instructor.
    "Make Admin" button to update a user's role as an admin.

#### Technology Stack

Summer Camp School is built using the following technologies and packages:

- Front-end:

  - React.js: JavaScript library for building user interfaces
  - React Router: Routing library for handling navigation
  - Tailwind CSS: Utility-first CSS framework for responsive designs
  - Axios: Promise-based HTTP client for making API requests

- Back-end:
  - Node.js
  - Express.js
  - MongoDB
  - Stripe (for payment processing)
  - JSON Web Tokens (JWT) for authentication and authorization
  - CORS for cross-origin resource sharing

#### Live site link

Check out the live site: [Summer Camp School](https://assignment12-696c4.web.app/)
