import { v4 as uuidv4 } from "uuid";

function Experience({ data, onChange }) {
	function handleChange(index, e) {
		const { name, value } = e.target;

		const updatedExperience = [...data.experience];
		updatedExperience[index] = {
			...updatedExperience[index],
			[name]: value,
		};

		onChange({ ...data, experience: updatedExperience });
	}

	function handleAdd() {
		const newExperience = {
			id: uuidv4(),
			companyName: "",
			positionTitle: "",
			responsibilities: "",
			period: "",
		};

		onChange({ ...data, experience: [...data.experience, newExperience] });
	}

	function handleRemove(idToRemove) {
		const updatedExperience = data.experience.filter(
			(info) => info.id !== idToRemove
		);

		onChange({ ...data, experience: updatedExperience });
	}

	return (
		<>
			{data.experience.map((experience, index) => (
				<div key={experience.id} className="experience-entry">
					{/* Company Name */}
					<div className="input-wrapper">
						<label htmlFor={`company-name-${index}`}>Company Name</label>
						<input
							value={experience.companyName}
							onChange={(e) => handleChange(index, e)}
							type="text"
							id={`company-name-${index}`}
							name={"companyName"}
							placeholder="Example Company"
						/>
					</div>
					{/* Position Title */}
					<div className="input-wrapper">
						<label htmlFor={`position-title-${index}`}>Position Title</label>
						<input
							value={experience.positionTitle}
							onChange={(e) => handleChange(index, e)}
							type="text"
							id={`position-title-${index}`}
							name={"positionTitle"}
							placeholder="Senior Software Engineer"
						/>
					</div>
					{/* Main Responsibilities */}
					<div className="input-wrapper">
						<label htmlFor={`responsibilities-${index}`}>
							Main Responsibilities
						</label>
						<textarea
							value={experience.responsibilities}
							onChange={(e) => handleChange(index, e)}
							type="text"
							id={`responsibilities-${index}`}
							name={"responsibilities"}
							placeholder="Developed and maintained web applications using React.js and Node.js"
						/>
					</div>
					{/* Period */}
					<div className="input-wrapper">
						<label htmlFor={`period-${index}`}>Period In The Company</label>
						<input
							value={experience.period}
							onChange={(e) => handleChange(index, e)}
							type="text"
							id={`period-${index}`}
							name={"period"}
							placeholder="July 2019 - Present"
						/>
					</div>
					{/* Remove Button */}
					<button
						onClick={() => handleRemove(experience.id)}
						className="remove-btn form-btn"
						type="button"
						aria-label="Remove fields">
						<i className="fa-solid fa-trash-can"></i>
					</button>
				</div>
			))}
			{/* Add Button */}
			<button
				onClick={handleAdd}
				className="add-btn form-btn"
				type="button"
				aria-label="Add fields">
				<i className="fa-solid fa-plus"></i>
			</button>
		</>
	);
}

export default Experience;
