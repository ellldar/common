const data = {
	'tickets': ['JWT_KEY', 'MONGO_URI', 'NATS_CLUSTER_ID', 'NATS_CLIENT_ID', 'NATS_URL'],
	'orders': ['JWT_KEY', 'MONGO_URI', 'NATS_CLUSTER_ID', 'NATS_CLIENT_ID', 'NATS_URL'],
	'expiration': ['NATS_CLUSTER_ID', 'NATS_CLIENT_ID', 'NATS_URL'],
};

// Need to come back here and make a more generic Env Variable Checker

export const CheckEnvVariables = () => {

	if (!process.env.JWT_KEY) {
		throw new Error("JWT_KEY must be defined");
	}

	if (!process.env.MONGO_URI) {
		throw new Error("MONGO_URI must be defined");
	}

	if (!process.env.NATS_CLUSTER_ID) {
		throw new Error("NATS_CLUSTER_ID must be defined");
	}

	if (!process.env.NATS_CLIENT_ID) {
		throw new Error("NATS_CLIENT_ID must be defined");
	}

	if (!process.env.NATS_URL) {
		throw new Error("NATS_URL must be defined");
	}
};