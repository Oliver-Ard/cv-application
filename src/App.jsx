import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Form from "./components/Form/Form.jsx";
import Output from "./components/Output.jsx";

function App() {
	const data = {
		general: {
			name: "",
			email: "",
			phoneNumber: "",
		},
		education: [
			{
				id: uuidv4(),
				schoolName: "",
				studyTitle: "",
				studyDate: "",
			},
		],
		experience: [
			{
				id: uuidv4(),
				companyName: "",
				positionTitle: "",
				responsibilities: "",
				period: "",
			},
		],
	};

	const [formData, setFormData] = useState(data);
	const [section, setSection] = useState("form");

	return (
		<>
			<h1>CV Maker</h1>
			<main className="content">
				{section === "form" ? (
					<Form
						formData={formData}
						onSubmit={() => {
							setSection("output");
						}}
						onChange={setFormData}
					/>
				) : (
					<Output
						data={formData}
						onEdit={() => {
							setSection("form");
						}}
					/>
				)}
			</main>
		</>
	);
}

export default App;
