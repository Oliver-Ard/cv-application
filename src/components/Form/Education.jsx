function Education() {
	return (
		<>
			<div className="input-wrapper">
				<label>
					School Name
					<input
						type="text"
						name="school-name"
						placeholder="Example University"
					/>
				</label>
			</div>
			<div className="input-wrapper">
				<label>
					Title of study
					<input
						type="text"
						name="study-title"
						placeholder="Bachelor in Computer Science"
					/>
				</label>
			</div>
			<div className="input-wrapper">
				<label>
					Date of study
					<input
						type="text"
						name="study-date"
						placeholder="September 2018 - May 2022"
					/>
				</label>
			</div>
		</>
	);
}

export default Education;
