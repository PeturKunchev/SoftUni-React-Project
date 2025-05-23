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

        if (!response.ok) {
            let errorData;
            try {
                errorData = await response.json(); 
            } catch (parseError) {
                errorData = { message: "Something went wrong!" };
            }
            throw { status: response.status, message: errorData.message || "Request failed" };
        }


        const responseContentType = response.headers.get('Content-Type');
        if (!responseContentType || !responseContentType.includes('application/json')) {
            return null;
        }

        return await response.json();

    } catch (error) {
        console.error("Network or API Error:", error);
        throw error;
    }
};

export default {
    get: request.bind(null, 'GET'),
    post: request.bind(null, 'POST'),
    put: request.bind(null, 'PUT'),
    delete: request.bind(null, 'DELETE'),
    baseRequest: request,
};