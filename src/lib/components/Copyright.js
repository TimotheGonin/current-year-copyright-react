import React from "react";

const Copyright = ({ nameEntry }) => {
	const currentYear = new Date().getFullYear();
	return (
		<p>
			Copyright © {currentYear} - {nameEntry}
		</p>
	);
};

export default Copyright;
