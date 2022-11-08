
# Support Desk

Support Desk is a MERN stack project which I created with the thought of learning React.js, Redux (used Redux Toolkit) and combining it with the backend side of the application written with Express.js and MongoDB as database.

The application allows the user to registration (registration without the need to confirm the e-mail, more about it in "Features") and login. After logging in, the user has the option to add tickets about the broken devices. After adding a ticket, it can also add notes to a specific ticket to better communicate with the alleged technical support.

When creating an account (and logging in), I added a validation process and the account is added to the database (password is hashed using bcrypt.js and then saved to the database). Of course, not only the account is added to database but also tickets etc. I used also a JWT with a specific expiry time and localStorage to handle the login.

## Live

<p>Will be added in the future!</p>
<p>Moving from Heroku to another hosting website...</p>
<p>Check the screenshots for now.</p>

## Tech Stack

![javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![mongodb](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![react-router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)

## Features

- Registration with validation and saving user to the database (real registration with email confirmation, etc., it is possible that it will be added in the future, at the moment I preferred to focus on other aspects of the application)
- Password hashing using bcrypt.js
- Logging in using JWT (expiration time included) and saving to localStorage
- Logging out with deletion of data from localStorage
- Protected routes for the backend api
- Protected routes for the frontend side of the application
- Validation and creation of tickets and saving to the database for a specific user
- Modification and deletion of tickets by specific user (in progress to implement for frontend, backend api written)
- The possibility of closing tickets completely (e.g. due to resolving the case)
- Displaying tickets only for the user who created them
- Adding notes using modal and saving them to the database

## Screenshots

![App Screenshot](https://thumbs2.imgbox.com/f7/81/DGIojhNb_t.png)
<br>
![App Screenshot](https://thumbs2.imgbox.com/89/38/1totzq72_t.png)
<br>
![App Screenshot](https://thumbs2.imgbox.com/30/78/w7TbOZgt_t.png)
<br>
![App Screenshot](https://thumbs2.imgbox.com/28/83/t3dL0ZFA_t.png)
<br>
![App Screenshot](https://thumbs2.imgbox.com/07/18/IgpJdV7c_t.png)
<br>
![App Screenshot](https://thumbs2.imgbox.com/c2/98/ZkQ6Yp84_t.png)
<br>
![App Screenshot](https://thumbs2.imgbox.com/34/67/Lc9UXnrm_t.png)

## Project Structure

```bash
.
└── support-desk/
    ├── backend/
    │   ├── config/
    │   │   └── db.js
    │   ├── controllers/
    │   │   ├── noteController.js
    │   │   ├── ticketController.js
    │   │   └── userController.js
    │   ├── middleware/
    │   │   ├── authMiddleware.js
    │   │   └── errorMiddleware.js
    │   ├── models/
    │   │   ├── noteModel.js
    │   │   ├── ticketModel.js
    │   │   └── userModel.js
    │   ├── routes/
    │   │   ├── noteRoutes.js
    │   │   ├── ticketRoutes.js
    │   │   └── userRoutes.js
    │   └── server.js
    ├── frontend/
    │   ├── node_modules/
    │   ├── public/
    │   │   ├── favicon.ico
    │   │   └── index.html
    │   ├── src/
    │   │   ├── app/
    │   │   │   └── store.js
    │   │   ├── components/
    │   │   │   ├── BackButton.jsx
    │   │   │   ├── Header.jsx
    │   │   │   ├── NoteItem.jsx
    │   │   │   ├── PrivateRoute.jsx
    │   │   │   ├── Spinner.jsx
    │   │   │   └── TicketItem.jsx
    │   │   ├── features/
    │   │   │   ├── auth/
    │   │   │   │   ├── authService.js
    │   │   │   │   └── authSlice.js
    │   │   │   ├── notes/
    │   │   │   │   ├── noteService.js
    │   │   │   │   └── noteSlice.js
    │   │   │   └── tickets/
    │   │   │       ├── ticketService.js
    │   │   │       └── ticketSlice.js
    │   │   ├── hooks/
    │   │   │   └── useAuthStatus.js
    │   │   ├── pages/
    │   │   │   ├── Home.jsx
    │   │   │   ├── Login.jsx
    │   │   │   ├── NewTicket.jsx
    │   │   │   ├── Register.jsx
    │   │   │   ├── Ticket.jsx
    │   │   │   └── Tickets.jsx
    │   │   ├── App.js
    │   │   ├── index.css
    │   │   └── index.js
    │   ├── package-lock.json
    │   └── package.json
    ├── node_modules/
    ├── .env
    ├── .gitignore
    ├── package-lock.json
    └── package.json
```

#### Important
[I created this project as part of the Brad Traversy course on Udemy - React Front To Back 2022](https://www.udemy.com/course/react-front-to-back-2022/)
<br>
[Brad's account on GitHub](https://github.com/bradtraversy)

