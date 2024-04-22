function General({ data, onChange }) {
	function handleChange(e) {
		const { name, value } = e.target;

		const updatedGeneral = { ...data.general, [name]: value };

		onChange({
			...data,
			general: updatedGeneral,
		});
	}

	return (
		<>
			<div className="input-wrapper">
				<label htmlFor="name">
					Name
					<strong>
						<span className="required-label" aria-label="required">
							*
						</span>
					</strong>
				</label>
				<input
					value={data.general.name}
					onChange={handleChange}
					type="text"
					id="name"
					name="name"
					placeholder="John Doe"
					autoComplete="on"
					required
				/>
			</div>
			<div className="input-wrapper">
				<label htmlFor="email">
					Email
					<strong>
						<span className="required-label" aria-label="required">
							*
						</span>
					</strong>
				</label>
				<input
					value={data.general.email}
					onChange={handleChange}
					type="email"
					id="email"
					name="email"
					placeholder="john.doe20@example.com"
					autoComplete="on"
					required
				/>
			</div>
			<div className="input-wrapper">
				<label htmlFor="phone-number">
					Phone Number
					<strong>
						<span className="required-label" aria-label="required">
							*
						</span>
					</strong>
				</label>
				<input
					value={data.general.phoneNumber}
					onChange={handleChange}
					type="tel"
					id="phone-number"
					name="phoneNumber"
					placeholder="123-456-7890"
					max="10"
					maxLength="18"
					pattern="^(\(\d{3}\)?|\d{3}-?|\d{3}?)?\d{3}?-?\d{4}$"
					required
				/>
			</div>
		</>
	);
}

export default General;
