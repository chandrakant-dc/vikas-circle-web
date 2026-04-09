import axiosInstance from "@src/config/axios-instance";

export const getAllCategory = async () => {
	return axiosInstance.get(`/api/v1/category`);
};

export const getAllSubCategory = async (categoryId?: string | null) => {
	const path = categoryId ? `/api/v1/subcategory/all?categoryId=${categoryId}` : `/api/v1/subcategory/all`;
	return axiosInstance.get(path);
};

export const getSubCategoryDetails = async (subcategoryId: string) => {
	return axiosInstance.get(`/api/v1/subcategory/details/${subcategoryId}`);
};
