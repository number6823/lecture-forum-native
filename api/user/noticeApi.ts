import axiosInstance from "@/api/axiosInstance";
import { PaginationResponseType } from "@/types/common";
import { Notice } from "@/types/notice";

export const getNoticeList = async (
    page: number = 1,
    size: number = 20,
): Promise<PaginationResponseType<Notice>> => {
    const response = await axiosInstance.get("/notice/list", {
        params: {
            page: 1,
            size: 20,
        },
    });
    return response.data.data;
};

const getNoticeById = async (id: number): Promise<Notice> => {
    const response = await axiosInstance.get(`/notice/${id}`);
    return response.data.data;
};

export default {
    getNoticeList,
    getNoticeById,
};
