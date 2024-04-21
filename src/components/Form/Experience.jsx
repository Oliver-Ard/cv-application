function Experience() {
	return (
		<>
			<div className="input-wrapper">
				<label>
					Company Name
					<input
						type="text"
						name="company-name"
						placeholder="Example Corporation"
					/>
				</label>
			</div>
			<div className="input-wrapper">
				<label>
					Position Title
					<input
						type="text"
						name="position-title"
						placeholder="Senior Software Engineer"
					/>
				</label>
			</div>
			<div className="input-wrapper">
				<label>
					Main Responsibilities
					<textarea
						type="text"
						name="responsibilities"
						placeholder="Developed and maintained web applications using React.js and Node.js"
					/>
				</label>
			</div>
			<div className="input-wrapper">
				<label>
					Period In The Company
					<input type="text" name="period" placeholder="July 2019 - Present" />
				</label>
			</div>
		</>
	);
}

export default Experience;
