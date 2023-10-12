import api from ".";

const ENDPOINT = {
	GALLERY: "/gallery",
};

export const getPhotoByCategory = async (id) => {
	try {
		const photoByCategory = await api.get(`${ENDPOINT.GALLERY}/${id}`);
		return photoByCategory;
	} catch (error) {
		throw Error(error);
	}
};
