import { v4 as uuidv4 } from "uuid";

function Education({ data, onChange }) {
	function handleChange(index, e) {
		const { name, value } = e.target;

		const updatedEducation = [...data.education];
		updatedEducation[index] = {
			...updatedEducation[index],
			[name]: value,
		};

		onChange({ ...data, education: updatedEducation });
	}

	function handleAdd() {
		const newEducation = {
			id: uuidv4(),
			schoolName: "",
			studyTitle: "",
			studyDate: "",
		};

		onChange({ ...data, education: [...data.education, newEducation] });
	}

	function handleRemove(idToRemove) {
		const updatedEducation = data.education.filter(
			(education) => education.id !== idToRemove
		);

		onChange({ ...data, education: updatedEducation });
	}

	return (
		<>
			{data.education.map((education, index) => (
				<div key={education.id} className="education-entry">
					{/* School Name */}
					<div className="input-wrapper">
						<label htmlFor={`school-name-${index}`}>School Name</label>
						<input
							value={education.schoolName}
							onChange={(e) => handleChange(index, e)}
							type="text"
							id={`school-name-${index}`}
							name={"schoolName"}
							placeholder="Example School"
						/>
					</div>
					{/* Title of Study */}
					<div className="input-wrapper">
						<label htmlFor={`study-title-${index}`}>Title of Study</label>
						<input
							value={education.studyTitle}
							onChange={(e) => handleChange(index, e)}
							type="text"
							id={`study-title-${index}`}
							name={"studyTitle"}
							placeholder="Bachelor in Computer Science"
						/>
					</div>
					{/* Date of Study */}
					<div className="input-wrapper">
						<label htmlFor={`study-date-${index}`}>Date of Study</label>
						<input
							value={education.studyDate}
							onChange={(e) => handleChange(index, e)}
							type="text"
							id={`study-date-${index}`}
							name={"studyDate"}
							placeholder="September 2018 - May 2022"
						/>
					</div>
					{/* Remove Button */}
					<button
						onClick={() => handleRemove(education.id)}
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

export default Education;
