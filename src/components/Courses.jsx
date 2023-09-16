import {useEffect, useState} from 'react';
import Course from './Course';

const Courses = () => {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		fetch('courses.json')
			.then(res => res.json())
			.then(data => setCourses(data));
	}, []);

	return (
		<>
			{courses.map((course, idx) => (
				<Course key={idx} course={course}></Course>
			))}
		</>
	);
};

export default Courses;
