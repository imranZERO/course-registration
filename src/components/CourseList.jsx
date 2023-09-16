const CourseList = ({courseList}) => {
	return (
		<div className="px-4">
			<h3 className="text-xl font-bold mb-2 text-[#1C1B1B]">Course Name</h3>
			<ol className="list-decimal pl-5 text-[#1C1B1B99] leading-7 font-medium">
				{courseList.map((course, idx) => (
					<li key={idx}>{course.title}</li>
				))}
			</ol>
		</div>
	);
};

export default CourseList;
