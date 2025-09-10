const API_BASE_URL = "http://192.168.0.105:8001/api";

/**
 * Fetches terms content from the API
 * @returns {Promise<Array>} Array of terms objects
 */
export const fetchTermsContent = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/terms/contents/`, {
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
    console.error("Error fetching terms content:", error);
    throw error;
  }
};

/**
 * Formats terms content data for display
 * @param {Array} termsData - Raw terms data from API
 * @returns {Array} Formatted terms content with sorted sections
 */
export const formatTermsContent = (termsData) => {
  if (!termsData || !Array.isArray(termsData)) {
    return [];
  }

  return termsData
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
