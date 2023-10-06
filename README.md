
# Support Desk

Support Desk is a MERN stack project designed to learn React.js, Redux Toolkit and combine this with a backend side of the application written using Express.js and MongoDB as the database.

The app allows the user to register (registration without having to confirm an email, more about this in the "Features" tab) and log in. Once logged in, the user can add tickets regarding broken devices. After adding a ticket, one can also add notes to a specific ticket to better communicate with the supposed technical support.

When creating an account (and logging in), I added a validation process. Also account is added to the database (password is hashed using bcrypt.js and then saved to the database) - not only is the account added to the database, but also tickets etc. I also used a JWT with a specific expiry time and localStorage to handle the login.

## Tech Stack

[![My Skills](https://skillicons.dev/icons?i=js,react,redux,nodejs,express,mongodb,html,css)](https://skillicons.dev)

## Features

- Registration with validation and saving user to the database (real registration with email confirmation, etc., is possible to be added in the future, at the moment I preferred to focus on other aspects of the application)
- Password hashing using bcrypt.js
- Logging with JWT (including expiry time) and saving to localStorage
- Logout with deletion of data from localStorage
- Protected routes for the backend api
- Protected routes for the frontend side of the application
- Validation and creation of tickets and saving to the database for a specific user
- Modification and deletion of tickets by specific user (in progress to implement for frontend, backend api written)
- The possibility of closing tickets completely (e.g. due to case resolution)
- Display of tickets only for the user who created them
- Adding notes via modal and saving them to the database

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
