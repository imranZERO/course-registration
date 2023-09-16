import {useEffect, useState} from 'react';

const Course = ({course}) => {
	const {image, title, details, price, credit} = course;

	return (
		<div className="card w-full bg-base-100 shadow-md p-4 pb-0 mx-auto hover:shadow-xl transition">
			<figure class="rounded-b-2xl">
				<img src={image} alt="" class="rounded-xl" />
			</figure>
			<div class="card-body items-center py-4 px-0">
				<h2 class="card-title text-lg text-start">{title}</h2>
				<p class="text-sm">{details}</p>
				<div className="flex w-full justify-between items-center">
					<p className='text-start'>Price: {price}</p>
					<p className='text-end'>Credit: {credit}hr</p>
				</div>
			</div>
			<button class="btn btn-primary mb-4 bg-[#2F80ED] border-0">Select</button>
		</div>
	);
};

export default Course;
