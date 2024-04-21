import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import General from "./General.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";

function Section({ title, children }) {
	return (
		<fieldset>
			<legend>{title}</legend>
			{children}
		</fieldset>
	);
}

function Form() {
	const [educationFields, setEducationFields] = useState([
		{ id: uuidv4(), component: <Education /> },
	]);

	const [experienceFields, setExperienceFields] = useState([
		{ id: uuidv4(), component: <Experience /> },
	]);

	function addFields(section) {
		switch (section) {
			case "education": {
				setEducationFields([
					...educationFields,
					{
						id: uuidv4(),
						component: <Education />,
					},
				]);
				break;
			}
			case "experience": {
				setExperienceFields([
					...experienceFields,
					{
						id: uuidv4(),
						component: <Experience />,
					},
				]);
				break;
			}
			// no default
		}
	}

	function removeFields(section, idToRemove) {
		switch (section) {
			case "education": {
				const updatedFields = educationFields.filter(
					(field) => field.id !== idToRemove
				);
				setEducationFields(updatedFields);
				break;
			}
			case "experience": {
				const updatedFields = experienceFields.filter(
					(field) => field.id !== idToRemove
				);
				setExperienceFields(updatedFields);
				break;
			}
			// no default
		}
	}

	return (
		<form className="cv-form" action="#" method="POST">
			{/* General Info */}
			<Section title="General Information" className="general">
				<General />
			</Section>

			{/* Education Info */}
			<Section title="Education">
				{educationFields.map(({ id, component }) => (
					<div key={id} className="fields-container">
						{component}
						<button
							onClick={() => {
								removeFields("education", id);
							}}
							className="remove-btn"
							type="button"
							aria-label="Remove fields">
							<i className="fa-solid fa-trash-can"></i>
						</button>
					</div>
				))}

				<button
					onClick={() => addFields("education")}
					className="add-btn"
					type="button"
					aria-label="Add fields">
					<i className="fa-solid fa-plus"></i>
				</button>
			</Section>

			{/* Experience Info  */}
			<Section title="Experience">
				{experienceFields.map(({ id, component }) => (
					<div key={id} className="fields-container">
						{component}
						<button
							onClick={() => {
								removeFields("experience", id);
							}}
							className="remove-btn"
							type="button"
							aria-label="Remove fields">
							<i className="fa-solid fa-trash-can"></i>
						</button>
					</div>
				))}

				<button
					onClick={() => {
						addFields("experience");
					}}
					className="add-btn"
					type="button"
					aria-label="Add fields">
					{" "}
					<i className="fa-solid fa-plus"></i>
				</button>
			</Section>

			<button className="submit-btn">Generate CV</button>
		</form>
	);
}

export default Form;
