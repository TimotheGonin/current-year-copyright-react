import React from "react";

const Copyright = ({ nameEntry, customStyles }) => {
	const currentYear = new Date().getFullYear();
	const paragraphStyle = {
		...customStyles,
	};
	return (
		<p style={paragraphStyle}>
			Copyright © {currentYear} - {nameEntry}
		</p>
	);
};

export default Copyright;
