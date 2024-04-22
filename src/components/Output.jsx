function Output({ data, onEdit }) {
	return (
		<>
			{/* General Info */}
			<section className="info-section">
				<h2 className="info-title">General Information</h2>
				<p className="info-field">
					<span className="highlighted-text">Name</span>: {data.general.name}
				</p>
				<p className="info-field">
					<span className="highlighted-text">Email</span>: {data.general.email}
				</p>
				<p className="info-field">
					<span className="highlighted-text">Phone Number</span>:{" "}
					{data.general.phoneNumber}
				</p>
			</section>

			{/* Education Info */}
			{data.education[0] && (
				<section className="info-section">
					<h2 className="info-title">Education</h2>

					{data.education.map((education, index) => (
						<div key={index} className="info-wrapper">
							{education.schoolName && (
								<p className="info-field">
									<span className="highlighted-text">School Name</span>:{" "}
									{education.schoolName}
								</p>
							)}

							{education.studyTitle && (
								<p className="info-field">
									<span className="highlighted-text">Title of Study</span>:{" "}
									{education.studyTitle}
								</p>
							)}

							{education.studyDate && (
								<p className="info-field">
									<span className="highlighted-text">Date of Study</span>:{" "}
									{education.studyDate}
								</p>
							)}
						</div>
					))}
				</section>
			)}

			{/* Experience Info */}
			{data.experience[0] && (
				<section className="info-section">
					<h2 className="info-title">Experience</h2>

					{data.experience.map((experience, index) => (
						<div key={index} className="info-wrapper">
							{experience.companyName && (
								<p className="info-field">
									<span className="highlighted-text">Company Name</span>:{" "}
									{experience.companyName}
								</p>
							)}

							{experience.positionTitle && (
								<p className="info-field">
									<span className="highlighted-text">Position Title</span>:{" "}
									{experience.positionTitle}
								</p>
							)}

							{experience.responsibilities && (
								<p className="info-field">
									<span className="highlighted-text">
										Main Responsibilities
									</span>
									: {experience.responsibilities}
								</p>
							)}

							{experience.period && (
								<p className="info-field">
									<span className="highlighted-text">
										Period in the Company
									</span>
									: {experience.period}
								</p>
							)}
						</div>
					))}
				</section>
			)}
			<button onClick={onEdit} className="edit-btn" aria-label="Edit form">
				<i className="fa-regular fa-pen-to-square fa-lg"></i>
			</button>
		</>
	);
}

export default Output;
