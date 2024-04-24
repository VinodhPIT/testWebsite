async function handleResponse(response) {
  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message || "An error occurred.");
  }
  return await response.json();
}

export async function postApiCall(endpoint, requestData) {
  try {
    const response = await fetch(`${process.env.apiDomain}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });
    return handleResponse(response);
  } catch (error) {
    throw error;
  }
}

export async function getApiCall(endpoint) {
  try {
    const response = await fetch(`${process.env.apiDomain}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return handleResponse(response);
  } catch (error) {
    throw error;
  }
}

export async function analyticsGetApiCall(endpoint, token) {
  try {
    const response = await fetch(`${process.env.apiDomain}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,

      },
    });
    return handleResponse(response);
  } catch (error) {
    throw error;
  }
}


export async function styleListGetApiCall(endpoint, lng) {
  try {
    const response = await fetch(`${process.env.apiDomain}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": lng, 
      },
    });
    return handleResponse(response);
  } catch (error) {
    throw error;
  }
}

