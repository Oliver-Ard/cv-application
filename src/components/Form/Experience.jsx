import { v4 as uuidv4 } from "uuid";

function Experience() {
	const randomId = uuidv4();

	return (
		<>
			<div className="input-wrapper">
				<label htmlFor={`company-name-${randomId}`}>Company Name</label>
				<input
					type="text"
					id={`company-name-${randomId}`}
					name="company-name"
					placeholder="Example Corporation"
				/>
			</div>

			<div className="input-wrapper">
				<label htmlFor={`position-title-${randomId}`}>Position Title</label>
				<input
					type="text"
					id={`position-title-${randomId}`}
					name="position-title"
					placeholder="Senior Software Engineer"
				/>
			</div>

			<div className="input-wrapper">
				<label htmlFor={`responsibilities-${randomId}`}>
					Main Responsibilities
				</label>
				<textarea
					type="text"
					id={`responsibilities-${randomId}`}
					name="responsibilities"
					placeholder="Developed and maintained web applications using React.js and Node.js"
				/>
			</div>

			<div className="input-wrapper">
				<label htmlFor={`period-${randomId}`}>Period In The Company</label>
				<input
					type="text"
					id={`period-${randomId}`}
					name="period"
					placeholder="July 2019 - Present"
				/>
			</div>
		</>
	);
}

export default Experience;
