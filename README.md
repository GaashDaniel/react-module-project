# EasyBusi - Business Card Management System

## About the Project
EasyBusi is a web application that allows business users to create and manage digital business cards. 
The app includes an advanced permission system, ensuring that each user accesses only the features relevant to them.

## Key Features
✅ **Business Card Management** - Create, edit, delete, and mark favorite business cards.

✅ **User Permissions System** - Three user levels: Guest, Regular, Business.

✅ **Dynamic Search Interface** - Easily find business cards with smart search.

✅ **Dark Mode Support** - Switch display modes with one click.

✅ **Advanced Form Validation** - Using Formik and Yup for data integrity.

✅ **Secure User Authentication with JWT** - Manage permissions via JSON Web Token.

✅ **Responsive Interface** - Designed for various screen sizes.

✅ **React Router Integration** - Smooth navigation between pages.

## Technologies Used
- **React 18** + Vite
- **React Router DOM** for dynamic navigation
- **Formik + Yup** for form validation
- **JWT Decode** for user authentication
- **React-Bootstrap** for UI components
- **React-Toastify** for notifications
- **Fetch API** for backend communication
- **Modular CSS with Dark Mode support**

## Installation & Local Setup
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/easybusi.git
   cd easybusi
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the local server**:
   ```bash
   npm run dev
   ```
4. **Open the app in your browser**: `http://localhost:5173`

## How to Use the App
1. **New user?** Register using the register modal.
2. **Log in** to access personalized features.
3. **Business user?** Create and manage digital business cards.
4. **Save favorite cards** for quick access.
5. **Toggle between Dark Mode and Light Mode.**

## Project Structure
```
EasyBusi/
│── public/          # Static assets
│── src/
│   ├── components/  # Reusable components
│   ├── pages/       # Application pages
│   ├── services/    # API calls to the backend
│   ├── hooks/       # Custom React hooks
│   ├── modals/      # Modal components
│   ├── styles/      # CSS files
│   ├── utils/       # Utility functions
│   ├── App.jsx      # Main app component
│   ├── main.jsx     # Application entry point
│── package.json     # Project dependencies
│── vite.config.js   # Configuration file
```

## Credits
- Developed by [**Gaash Web Solutions**](https://gaashdaniel.github.io/Gaash-Web-Solutions/), as part of an advanced React project for a full-stack development course.
- Built with **React, Vite, and Bootstrap**.