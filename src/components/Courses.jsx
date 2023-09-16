import {useEffect, useState} from 'react';

const Courses = () => {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		fetch('courses.json')
			.then(res => res.json())
			.then(data => setCourses(data));
	}, []);

	return (
		<div>
			<h2>Courses: {courses.length}</h2>
		</div>
	);
};

export default Courses;
