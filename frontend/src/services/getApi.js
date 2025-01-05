import { apiUtils } from "./apiInstence";

/**
 * Fetch Tests
 * 
 * This function calls the `/tests` API endpoint to retrieve test data.
 * 
 * @returns {Promise<Object>} The response data containing test details.
 * @throws {Error} Logs and rethrows any errors that occur during the API call.
 */
export const getQuizById = async (quizId) => {
  try {
    // Use the get method from apiUtils
    const response = await apiUtils.get(`/getQuizById/${quizId}`); 
    console.log(response);
    
    return response.data; 
  } catch (error) {
    console.error("Error fetching quiz:", error);
    throw error; 
  }
};

export const fetchQuestion = async (quizId, questNum) => {
  try {
    const response = await apiUtils.get(`/fetchQuestion/${quizId}/${questNum}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching question:", error);
    throw error; 
   }
};



export const checkAnswer = async (quizId, questionId, serialNo, userAnswer) => {
  try {
    const response = await apiUtils.post(
      `/checkAnswer/${quizId}/${questionId}/${serialNo}`,
      { userAnswer } // Sending the answer in the request body
    );
    console.log(response);
    return response.data; // Return the API response
  } catch (error) {
    console.error("Error checking answer:", error);
    throw error; // Propagate the error for further handling
  }
};

