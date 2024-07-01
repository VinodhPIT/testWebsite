import { create } from "zustand";
import API_URL from "@/apiConfig/api.config";
import { axiosInstance } from "@/apiConfig/axios.instance";

const useDownloadExcel = create((set) => ({
  downloadExcel: async (path, type, startDate, endDate) => {
    try {
      const response = await axiosInstance.get(API_URL.EXCEL_DOWNLOAD.GET_EXCEL_FILE(path, type, startDate, endDate), {
        responseType: 'blob'
      });
      
      if (response.status === 200) {
        const blob = new Blob([response.data], { type: response.data.type });
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = `${type}_${new Date().getTime()}.csv`;
        document.body.appendChild(link);
        link.click();
        window.URL.revokeObjectURL(downloadUrl);
        document.body.removeChild(link); // Clean up
      } else {
        ///console.error('Unexpected response status:', response.status);
      }
    } catch (error) {
      //console.error('Error downloading file:', error);
    }
  },
}));

export default useDownloadExcel;
