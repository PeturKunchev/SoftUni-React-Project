const request = async (method, url, data, options = {}) => {
    try {
        if (method !== 'GET') {
            options.method = method;
        }

        if (data) {
            options = {
                ...options,
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers,
                },
                body: JSON.stringify(data),
            };
        }

        const response = await fetch(url, options);
        
        // Check for HTTP error responses (4xx, 5xx)
        if (!response.ok) {
            let errorData;
            try {
                errorData = await response.json(); // Try parsing error message from backend
            } catch (parseError) {
                errorData = { message: "Something went wrong!" };
            }
            throw { status: response.status, message: errorData.message || "Request failed" };
        }

        // Handle cases where response is empty
        const responseContentType = response.headers.get('Content-Type');
        if (!responseContentType || !responseContentType.includes('application/json')) {
            return null;
        }

        return await response.json();

    } catch (error) {
        console.error("Network or API Error:", error);
        throw error; // Rethrow so the calling function (like register) can handle it
    }
};

export default {
    get: request.bind(null, 'GET'),
    post: request.bind(null, 'POST'),
    put: request.bind(null, 'PUT'),
    delete: request.bind(null, 'DELETE'),
    baseRequest: request,
};