// import { useState } from 'react'
import Courses from './components/Courses';

function App() {
	return (
		<div className='bg-[#F3F3F3]'>
			<header className="pt-10 pb-6 text-center">
				<h1 className="text-3xl font-bold text-[#1C1B1B]">
					Course Registration
				</h1>
			</header>
			<div className="max-w-[1366px] mx-auto px-4 pt-6 pb-20 grid grid-cols-1 lg:grid-cols-4">
				<main className="grid grid-cols-1 lg:grid-cols-3 px-4 gap-5 col-span-3">
					<Courses></Courses>
				</main>
				<div className="card w-full bg-base-100 shadow-md p-4 pb-0 mx-auto hover:shadow-xl transition col-span-1 lg:order-last order-first">
					<h4>asdfasdfaad</h4>
				</div>
			</div>
		</div>
	);
}

export default App;
