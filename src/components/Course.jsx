// import {useEffect, useState} from 'react';
import {BiDollar} from 'react-icons/bi';
import {BsBook} from 'react-icons/bs';

const Course = ({course, handleAddToCourseList}) => {
	const {id, image, title, details, price, credit} = course;

	return (
		<div className="card w-full bg-base-100 shadow-md p-4 pb-0 mx-auto hover:shadow-xl transition">
			<figure className="rounded-b-2xl">
				<img src={image} alt="" className="rounded-xl" />
			</figure>
			<div className="card-body py-4 px-0 justify-start items-start">
				<h2 className="card-title text-lg">{title}</h2>
				<p className="text-[#1C1B1B99]">{details}</p>
				<div className="flex flex-col lg:flex-row w-full justify-between items-center gap-2 mt-1">
					<p className="flex items-center justify-start">
						<BiDollar className="text-xl"></BiDollar>
						Price: {price}
					</p>
					<p className="flex items-center justify-end gap-2">
						<BsBook className="text-xl"></BsBook>
						Credit: {credit}
					</p>
				</div>
			</div>
			<button
				onClick={() => handleAddToCourseList(id, course)}
				className="btn btn-primary mb-4 bg-[#2F80ED] border-0 text-white capitalize text-lg font-semibold">
				Select
			</button>
		</div>
	);
};

export default Course;
