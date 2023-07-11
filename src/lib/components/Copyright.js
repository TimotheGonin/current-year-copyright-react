import React from "react";

const Copyright = () => {
	const currentYear = new Date().getFullYear();
	return <p>Copyright © {currentYear}</p>;
};

export default Copyright;
