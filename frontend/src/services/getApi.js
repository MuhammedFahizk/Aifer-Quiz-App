import { apiUtils } from "./apiInstence";

/**
 * Fetch a quiz by its ID
 * 
 * This function calls the `/getQuizById/:quizId` API endpoint to retrieve quiz data based on the quiz ID.
 * 
 * @param {string} quizId - The ID of the quiz to fetch
 * @returns {Promise<Object>} The response data containing quiz details
 * @throws {Error} Logs and rethrows any errors that occur during the API call
 */
export const getQuizById = async (quizId) => {
  try {
    // Use the GET method from apiUtils to fetch quiz data
    const response = await apiUtils.get(`/getQuizById/${quizId}`); 
    console.log(response);
    
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Error fetching quiz:", error);
    throw error; // Propagate the error for further handling
  }
};

/**
 * Fetch a specific question in the quiz by quiz ID and question number
 * 
 * This function calls the `/fetchQuestion/:quizId/:questNum` API endpoint to retrieve a specific question from the quiz.
 * 
 * @param {string} quizId - The ID of the quiz
 * @param {number} questNum - The question number within the quiz
 * @returns {Promise<Object>} The response data containing the question details
 * @throws {Error} Logs and rethrows any errors that occur during the API call
 */
export const fetchQuestion = async (quizId, questNum) => {
  try {
    // Use the GET method from apiUtils to fetch question data
    const response = await apiUtils.get(`/fetchQuestion/${quizId}/${questNum}`);
    console.log(response);
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("Error fetching question:", error);
    throw error; // Propagate the error for further handling
  }
};

/**
 * Check the user's answer for a specific question
 * 
 * This function calls the `/checkAnswer/:quizId/:questionId/:serialNo` API endpoint to check if the user's answer is correct for a given question.
 * 
 * @param {string} quizId - The ID of the quiz
 * @param {string} questionId - The ID of the question
 * @param {string} serialNo - The serial number of the question
 * @param {string} userAnswer - The answer provided by the user
 * @returns {Promise<Object>} The response data containing the result of the answer check
 * @throws {Error} Logs and rethrows any errors that occur during the API call
 */
export const checkAnswer = async (quizId, questionId, serialNo, userAnswer) => {
  try {
    // Use the POST method from apiUtils to send the user's answer
    const response = await apiUtils.post(
      `/checkAnswer/${quizId}/${questionId}/${serialNo}`,
      { userAnswer } // Sending the answer in the request body
    );
    console.log(response);
    return response.data; // Return the API response with the result
  } catch (error) {
    console.error("Error checking answer:", error);
    throw error; // Propagate the error for further handling
  }
};
