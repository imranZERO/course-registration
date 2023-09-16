// import { useState } from 'react'
import Courses from './components/Courses';

function App() {
	return (
		<>
			<div className="bg-[#F3F3F3]">
				<header className="pt-10 pb-6 text-center">
					<h1 className="text-3xl font-bold text-[#1C1B1B]">
						Course Registration
					</h1>
				</header>
			</div>
			<Courses></Courses>
		</>
	);
}

export default App;
