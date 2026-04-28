import axiosInstance from "@src/config/axios-instance";

export const getAllCategory = async () => {
	return axiosInstance.get(`/api/v1/category`);
};

export const getAllSubCategory = async (
	categoryId?: string | null,
	search?: string,
) => {
	const params = new URLSearchParams();
	if (categoryId) params.append("categoryId", categoryId);
	if (search) params.append("search", search);

	const path = params.toString()
		? `/api/v1/subcategory/all?${params.toString()}`
		: `/api/v1/subcategory/all`;
	return axiosInstance.get(path);
};

export const getSubCategoryDetails = async (subcategoryId: string) => {
	return axiosInstance.get(`/api/v1/subcategory/details/${subcategoryId}`);
};

export const getActiveCourses = async () => {
	return axiosInstance.get(`/api/v1/subcategory/active-courses`);
};
