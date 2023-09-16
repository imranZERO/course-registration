import {useState} from 'react';
import Courses from './components/Courses';
import CourseList from './components/CourseList';

function App() {
	const [courseList, setCourseList] = useState([]);

	const handleAddToCourseList = (id, course) => {
		const newCourseList = [...courseList, course];

		// Check if item already exists
		if (!courseList.find(course => course.id === id)) {
			setCourseList(newCourseList);
		}
	};

	return (
		<div className="bg-[#F3F3F3]">
			<header className="pt-10 pb-4 text-center">
				<h1 className="text-3xl font-bold text-[#1C1B1B]">
					Course Registration
				</h1>
			</header>
			<div className="max-w-[1366px] mx-auto px-4 pt-6 pb-20 grid grid-cols-1 lg:grid-cols-4 gap-y-5">
				<main className="grid grid-cols-1 lg:grid-cols-3 px-4 gap-5 col-span-3">
					<Courses handleAddToCourseList={handleAddToCourseList}></Courses>
				</main>
				<div className="card w-full bg-base-100 shadow-md px-4 hover:shadow-xl transition col-span-1 lg:order-last order-first py-6">
					<h4 className="text-[#2F80ED] text-lg font-bold px-4">
						Credit Hour Remaining 0 hr
					</h4>
					<div className="divider px-4 my-2"></div>
					<CourseList courseList={courseList}></CourseList>
				</div>
			</div>
		</div>
	);
}

export default App;
