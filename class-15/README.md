# Final Project Kick-off

## Overview

This is the last class of formal lecture. It's time to add authentication to our app, so we know, with some level of confidence, who our users are.

You will be assigned your project teams. For the next module of this course, you will be working with your assigned project team to build out your final project. On the last day of this course, your group will present your project.

## Class Outline

- Authentication
- Code demo
- Lab preview
- Review [final project requirements](./project-guidelines.md)

## Learning Objectives

### Students will be able to

#### Describe and Define

- Authentication
- Authorization
- Auth0
- Understand Authentication - its uses and applications
- Understand the concept of OAuth

#### Execute

- Be able to implement authentication using Auth0 in their React application

## Helpful Resources

[auth0](https://auth0.com/docs/libraries/auth0-react)

## Notes

1. The difference between Authentication and Authorization is...
1. There are different types of authentication. Give an example of being authenticated using OAuth.
1. What is the difference between OAuth and Auth0?
1. What is Auth0? What are the requirements to use Auth0?
1. How does Auth0 make sure you are who you say you are?
1. LoginButton component:

   ```javaScript
   import React from "react";
   import { useAuth0 } from "@auth0/auth0-react";

   const LoginButton = (props) => {
     const { loginWithRedirect } = useAuth0();

     return <button onClick={() => loginWithRedirect()}>Log In</button>;
   };

   export default LoginButton;
   ```

1. LogOutButton component:

   ```javaScript
   import React from "react";
   import { useAuth0 } from "@auth0/auth0-react";

   const LogoutButton = () => {
     const { logout } = useAuth0();

     return (
       <button onClick={() => logout({ returnTo: window.location.origin })}>
         Log Out
       </button>
     );
   };

   export default LogoutButton;
   ```

1. IsLoadingAndError component - this should wrap everything

   ```javaScript
   import React from 'react';
   import { withAuth0 } from '@auth0/auth0-react';

   class IsLoadingAndError extends React.Component {
     render() {
       return(
         this.props.auth0.isLoading ?
           <div> Loading...</div>
           :
           this.props.auth0.error ?
           <div>Oops... {this.props.auth0.error.message}</div>
           :
           this.props.children
       )
     }
   }

   export default withAuth0(IsLoadingAndError);
   ```

1. Profile component - this will show the user's information. There is more that we can display. Details can be found in the docs.

   ```javaScript
   import React from "react";
   import { useAuth0 } from "@auth0/auth0-react";

   const Profile = () => {
     const { user, isAuthenticated, isLoading } = useAuth0();

     if (isLoading) {
       return <div>Loading ...</div>;
     }

     return (
       isAuthenticated && (
         <div>
           <img src={user.picture} alt={user.name} />
           <h2>{user.name}</h2>
           <p>{user.email}</p>
         </div>
       )
     );
   };

   export default Profile;

   ```
