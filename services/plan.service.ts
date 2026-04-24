import axiosInstance from "@src/config/axios-instance";

export const getAllPlans = async () => {
    return axiosInstance.get(`/api/v1/plan`);
};

export const buyPlan = async (formData: FormData) => {
    return axiosInstance.post(`/api/v1/user-subscription`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
};