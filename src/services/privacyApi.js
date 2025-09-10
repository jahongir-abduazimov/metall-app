const API_BASE_URL = "http://192.168.0.105:8001/api";

/**
 * Fetches privacy policy content from the API
 * @returns {Promise<Array>} Array of privacy policy content objects
 */
export const fetchPrivacyContent = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/privacy/contents/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching privacy content:", error);
        throw error;
    }
};

/**
 * Formats privacy content data for display
 * @param {Array} privacyData - Raw privacy data from API
 * @returns {Array} Formatted privacy content with sorted sections
 */
export const formatPrivacyContent = (privacyData) => {
    if (!privacyData || !Array.isArray(privacyData)) {
        return [];
    }

    return privacyData
        .filter(item => item.is_active)
        .map(item => ({
            id: item.id,
            title: item.title,
            message: item.message,
            sections: item.sections
                ? item.sections
                    .filter(section => section.is_active)
                    .sort((a, b) => a.order - b.order)
                    .map(section => ({
                        id: section.id,
                        title: section.title,
                        message: section.message,
                        order: section.order
                    }))
                : [],
            createdAt: item.created_at,
            updatedAt: item.updated_at
        }))
        .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)); // Sort by most recent first
};
