
# MessageMe README <!-- omit in toc -->

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

I am making a clone of the popular social media site known as Facebook. My clone will only have minimal features that are active on Facebook's Home Page.


<br>

## MVP

> My MVP will have a functional Facebook page with where a user can make a post

<br>

### Goals

- Create Front-End
- Make the Back-End
- Test the Back-End
- Connect the Back-End to the Front End
- Deploy App
- Add PMVP

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Facebook Library for creating versatile applications_ |
|   React Router   | React based package that allows multiple renders components._ |
|  Ruby on Rails   | Backend SQL supporting databse _ |

<br>

### Client (Front End)

#### Wireframes

- Desktop Landing

![Screenshot (362)](https://user-images.githubusercontent.com/50060155/145655863-1c888356-f773-41b3-b64b-f0b035f205a8.png)

- Desktop Home

![Screenshot (363)](https://user-images.githubusercontent.com/50060155/145655897-bd572b75-6088-4081-873e-dd019cb68f7d.png)

- Desktop SignUp

![Screenshot (364)](https://user-images.githubusercontent.com/50060155/145656034-4f24fd2d-77a9-4b2a-b547-605af7648d0b.png)
 

#### Component Tree

![Screenshot (365)](https://user-images.githubusercontent.com/50060155/146370061-dd31afa0-a9b7-413d-9505-43df89320ff4.png)


#### Component Architecture

``` structure

src
|__ assets/
      |__ css
|__ components/
      |__ Header.jsx
|__ screens/

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create Homepage form    |    H     |     10 hrs      |     2 hrs     |    3 hrs    |
| Create Sign In      |    H     |     10 hrs      |     1 hrs     |     10 hrs     |
| Create Sign Up      |    H      |     5 hrs      |     3 hrs     |     10hrs     |
| Create Back-End     |     H     |     20 hrs      |     15 hrs     |     25 hrs     |
| Add User Authentication   |  H        |     20 hrs      |     10 hrs     |     10 hrs     |


<br>

### Server (Back End)

#### ERD Model

![Screenshot (361)](https://user-images.githubusercontent.com/50060155/145606043-9e19bbc5-2dc0-4d59-b801-5a773b66101b.png)
<br>

***

## Post-MVP

> My PMVP will allow users to comment on posts. 

***

## Code Showcase

>   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formData)
  };


## Code Issues & Resolutions

> Most of my issues were 400 - 404 messages that were solved in a timely manner.
