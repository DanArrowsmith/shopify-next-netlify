module.exports = {
	env: {
		NETLIFY_URL:
			process.env.NODE_ENV !== "production"
				? "http://localhost:8888"
				: "https://frosty-ptolemy-057699.netlify.app/",
	},
};
