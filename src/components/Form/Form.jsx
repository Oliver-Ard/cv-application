import General from "./General.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";

function Form({ onChange, formData, onSubmit }) {
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				onSubmit();
			}}
			className="cv-form"
			action="#"
			method="POST">
			{/* General Info */}
			<fieldset>
				<legend>General Information</legend>
				<General data={formData} onChange={onChange} />
			</fieldset>

			{/* Education Info */}
			<fieldset>
				<legend>Education</legend>
				<Education data={formData} onChange={onChange} />
			</fieldset>

			{/* Experience Info */}
			<fieldset>
				<legend>Experience</legend>
				<Experience data={formData} onChange={onChange} />
			</fieldset>

			<button className="submit-btn form-btn">Generate CV</button>
		</form>
	);
}

export default Form;
