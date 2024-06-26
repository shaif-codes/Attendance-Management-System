
# Attendance Management System

## Overview

The Attendance Management System is a web application designed to streamline and automate the process of managing student attendance. The system includes functionalities for teachers to mark attendance, view student details, and manage classes. It also supports secure authentication and data storage using MongoDB.

## Features

- **Teacher Dashboard:** View and manage student details and attendance.
- **Class Management:** Add, update, and delete class information.
- **Student Management:** Add and view student details.
- **Attendance Marking:** Easily mark students as present or absent.
- **User Authentication:** Secure login for teachers.
- **Future Enhancements:** Plans to integrate an announcement system for better communication.

## Technologies Used

- **Frontend:** React, Bootstrap, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Other Libraries:** Mongoose (for MongoDB interactions)

## Installation

### Prerequisites

- Node.js
- MongoDB

### Steps

1. **Clone the repository:**
    ```sh
    git clone https://github.com/shaif-codes/Attendance-Management-System.git
    cd Attendance-Management-System
    ```

2. **Backend Setup:**

    - Navigate to the backend directory:
        ```sh
        cd backend
        ```
    - Install dependencies:
        ```sh
        npm install
        ```
    - Start the backend server:
        ```sh
        npm start
        ```
    - The backend will run on `http://localhost:5000`.

3. **Frontend Setup:**

    - Navigate to the frontend directory:
        ```sh
        cd frontend
        ```
    - Install dependencies:
        ```sh
        npm install
        ```
    - Start the frontend server:
        ```sh
        npm start
        ```
    - The frontend will run on `http://localhost:3000`.

## Usage

1. **Login:**
   - Use the provided login credentials to access the teacher dashboard.

2. **Manage Classes:**
   - Add, edit, or delete class information.

3. **View Students:**
   - View the list of students in a class.

4. **Mark Attendance:**
   - Use the toggle switch to mark students as present or absent.
   - Submit the attendance using the provided button.

## Future Enhancements

In future, integrate an announcement system for seamless communication among teachers, students, and administrators.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.

---
