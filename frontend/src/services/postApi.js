import { apiUtils } from "./apiInstence"; // Make sure you import apiUtils

/**
 * Fetch Tests
 * 
 * This function calls the `/tests` API endpoint to retrieve test data.
 * 
 * @returns {Promise<Object>} The response data containing test details.
 * @throws {Error} Logs and rethrows any errors that occur during the API call.
 */
export const fetchTests = async () => {
  try {
    // Use the get method from apiUtils
    const response = await apiUtils.post('/tests'); 
    console.log(response);
    
    return response.data; 
  } catch (error) {
    console.error("Error fetching tests:", error);
    throw error; 
  }
};


