import API_URL from "@/apiConfig/api.config";
export const downloadExcel = async (path, type, startDate, endDate, token) => {
  try {
    const url = `${
      process.env.apiDomain
    }${API_URL.EXCEL_DOWNLOAD.GET_EXCEL_FILE(path, type, startDate, endDate)}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = `${type}_${new Date().getTime()}.csv`;
    document.body.appendChild(link);
    link.click();
    window.URL.revokeObjectURL(downloadUrl);
  } catch (error) {
    alert("Download Failed!");
  }
};
