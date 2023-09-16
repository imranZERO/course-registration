# Course Registration Assignment
## Answers to Questions

### 1. Add at least 3 Project features
### Answer :
1. Component based architecture built with the React.js library.
2. Dynamic data loading implemented with react hooks.
3. Modern and fully responsive UI built with TailwindCSS.

### 2. Discuss how you managed the state in your assignment project.
### Answer :
In this application I managed state by using the `useState` hook to initialize key pieces of information. I used the `CourseList` component to keep track of the courses chosen by the user and stored it in an object.

 To populate the `courseList` array, I used the `useEffect` hook with the `fetch` API to load the necessary data.
 
 The `useState` hook also helped me to keep track of other details such as `creditHours` and `creditHoursRemaining` variables which are crucial to the application.
