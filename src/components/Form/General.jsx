function General() {
	return (
		<>
			<div className="input-wrapper">
				<label>
					Name
					<strong>
						<span className="required-label" aria-label="required">
							*
						</span>
					</strong>
					<input
						type="text"
						name="name"
						placeholder="John Doe"
						autoComplete="on"
						required
					/>
				</label>
			</div>
			<div className="input-wrapper">
				<label>
					Email
					<strong>
						<span className="required-label" aria-label="required">
							*
						</span>
					</strong>
					<input
						type="email"
						name="email"
						placeholder="john.doe20@example.com"
						autoComplete="on"
						required
					/>
				</label>
			</div>
			<div className="input-wrapper">
				<label>
					Phone Number
					<strong>
						<span className="required-label" aria-label="required">
							*
						</span>
					</strong>
					<input
						type="tel"
						name="phone-number"
						placeholder="123 456 7890"
						max="10"
						maxLength="18"
						pattern="^(\(\d{3}\)?|\d{3}-?|\d{3}?)?\d{3}?-?\d{4}$"
						required
					/>
				</label>
			</div>
		</>
	);
}

export default General;
