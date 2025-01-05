import { createSlice } from "@reduxjs/toolkit";

const questSlice = createSlice({
  name: "quest",
  initialState: {
    questNum: 1,
    quizID: '',
    results: [], 
  },
  reducers: {
    setQuestNum: (state, action) => {
      state.questNum = action.payload;
    },
    initializeResults: (state, action) => {   
      if (state.quizID !== action.payload.quizID) { 
        state.results = action.payload.questions.map((question, index) => ({
          serialNo: question.serialNo, 
          status: "default",
          answer: null,
        }));
        state.quizID = action.payload.quizID; 
      }
    },
    setQuizID: (state, action) => {
      state.quizID = action.payload;
    },
    updateResult: (state, action) => {
      const { serialNo, status } = action.payload;
      const result = state.results.find((r) => r.serialNo === serialNo);
      if (result) {
        result.status = status; 
      }
    },
   
  },
});

export const { setQuestNum, setQuizID, resetQuiz, initializeResults, updateResult } = questSlice.actions;

export default questSlice.reducer;
