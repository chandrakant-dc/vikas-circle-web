import axiosInstance from "@src/config/axios-instance";

export const getAllCategory = async () => {
	return axiosInstance.get(`/api/v1/category`);
};

export const getAllSubCategory = async (categoryId: string) => {
	return axiosInstance.get(`/api/v1/subcategory/${categoryId}`);
};

export const getSubCategoryDetails = async (subcategoryId: string) => {
	return axiosInstance.get(`/api/v1/subcategory/details/${subcategoryId}`);
};
