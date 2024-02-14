import moment from 'moment';

export const downloadExcel = async (path, type, token ,startDate, endDate) => {
  try {
    const url = `${process.env.apiDomain}${path}${type}${startDate&&endDate?`?start_date=${moment(startDate).format("YYYY-MM-DD")}&end_date=${moment(endDate).format("YYYY-MM-DD")}`:''}`;
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
