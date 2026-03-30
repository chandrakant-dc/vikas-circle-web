import axiosInstance from "@src/config/axios-instance";

export const getAllTopicById = async (subcategoryId: string) => {
	return axiosInstance.get(`/api/v1/topic/all?subcategory=${subcategoryId}`);
};

export const getTopicDetailsById = async (topicId: string) => {
	return axiosInstance.get(`/api/v1/topic/details/${topicId}`);
};

export const getQuestionByTopicId = async (topicId: string) => {
	return axiosInstance.get(`/api/v1/topic/questions/${topicId}`);
};
