import api from ".";

const ENDPOINT = {
	GALLERY: "/gallery",
	PACKAGE: "/package",
};

export const getPhotoByCategory = async (id) => {
	try {
		const photoByCategory = await api.get(`${ENDPOINT.GALLERY}/${id}`);
		return photoByCategory;
	} catch (error) {
		throw Error(error);
	}
};

export const getPackagesByCategory = async (id) => {
	try {
		const packagesByCategory = await api.get(`${ENDPOINT.PACKAGE}/${id}`);
		return packagesByCategory;
	} catch (error) {
		throw Error(error);
	}
};
