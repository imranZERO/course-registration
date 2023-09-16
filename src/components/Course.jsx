import {useEffect, useState} from 'react';
import { BiDollar } from 'react-icons/bi';
import { BsBook } from 'react-icons/bs';

const Course = ({course}) => {
	const {image, title, details, price, credit} = course;

	return (
		<div className="card w-full bg-base-100 shadow-md p-4 pb-0 mx-auto hover:shadow-xl transition">
			<figure className="rounded-b-2xl">
				<img src={image} alt="" className="rounded-xl" />
			</figure>
			<div className="card-body items-center py-4 px-0">
				<h2 className="card-title text-lg">{title}</h2>
				<p className="text-sm">{details}</p>
				<div className="flex flex-col lg:flex-row w-full justify-between items-center gap-2">
					<p className="flex items-center justify-start">
						<BiDollar className='text-xl'></BiDollar>
						Price: {price}
					</p>
					<p className="flex items-center justify-end gap-2">
						<BsBook className='text-xl'></BsBook>
						Credit: {credit}
					</p>
				</div>
			</div>
			<button className="btn btn-primary mb-4 bg-[#2F80ED] border-0 text-white capitalize text-lg font-semibold">
				Select
			</button>
		</div>
	);
};

export default Course;
