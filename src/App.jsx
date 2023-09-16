import {useState} from 'react';

import toast, {Toaster} from 'react-hot-toast';

import Courses from './components/Courses';
import CourseList from './components/CourseList';

function App() {
	const [courseList, setCourseList] = useState([]);
	const [creditHours, setCreditHours] = useState(0);

	const handleAddToCourseList = (id, course) => {
		const newCourseList = [...courseList, course];

		const newCreditHours = creditHours + course.credit;

		// Check if item already exists
		if (newCreditHours > 20) {
			toast('Not enough remaining credit');

			// if (newCreditHours <= 20) {
			// 	setCreditHours(newCreditHours);
			// } else {
			// 	toast('Not enough remaining credit');
			// }

			// if (!courseList.find(course => course.id === id)) {
			// 	toast('This course is already added.');
			// } else if (newCreditHours <= 20) {
			// 	toast('Not enough remaining credit');
			// }
		} else if (courseList.find(course => course.id === id)) {
			toast('This course is already added.');
		} else {
			setCourseList(newCourseList);
			setCreditHours(newCreditHours);
		}
	};

	return (
		<div className="bg-[#F3F3F3]">
			<Toaster />
			<header className="pt-10 pb-4 text-center">
				<h1 className="text-3xl font-bold text-[#1C1B1B]">
					Course Registration
				</h1>
			</header>
			<div className="max-w-[1366px] mx-auto px-4 pt-6 pb-20 grid grid-cols-1 lg:grid-cols-4 gap-y-5">
				<main className="grid grid-cols-1 lg:grid-cols-3 px-4 gap-5 col-span-3">
					<Courses handleAddToCourseList={handleAddToCourseList}></Courses>
				</main>
				<div className="card w-full h-fit bg-base-100 shadow-md px-4 hover:shadow-xl transition col-span-1 lg:order-last order-first py-6">
					<h4 className="text-[#2F80ED] text-lg font-bold px-4">
						Credit Hour Remaining 0 hr
					</h4>
					<div className="divider px-4 my-2"></div>
					<CourseList courseList={courseList}></CourseList>
					<div className="divider px-4 my-2"></div>
					<h4 className="text-[#1C1B1BCC] px-4 font-medium">
						Total Credit Hour : {creditHours}
					</h4>
				</div>
			</div>
		</div>
	);
}

export default App;
