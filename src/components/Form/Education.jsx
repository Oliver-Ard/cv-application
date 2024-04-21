import { v4 as uuidv4 } from "uuid";

function Education() {
	const randomId = uuidv4();

	return (
		<>
			<div className="input-wrapper">
				<label htmlFor={`school-name-${randomId}`}>School Name</label>
				<input
					type="text"
					id={`school-name-${randomId}`}
					name="school-name"
					placeholder="Example University"
				/>
			</div>
			<div className="input-wrapper">
				<label htmlFor={`study-title-${randomId}`}>Title of study</label>
				<input
					type="text"
					id={`study-title-${randomId}`}
					name="study-title"
					placeholder="Bachelor in Computer Science"
				/>
			</div>
			<div className="input-wrapper">
				<label htmlFor={`study-date-${randomId}`}>Date of study</label>
				<input
					type="text"
					id={`study-date-${randomId}`}
					name="study-date"
					placeholder="September 2018 - May 2022"
				/>
			</div>
		</>
	);
}

export default Education;
