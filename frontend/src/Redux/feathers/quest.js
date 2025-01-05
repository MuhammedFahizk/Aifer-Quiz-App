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
      state.results = action.payload.map((question, index) => ({
        serialNo: question.serialNumber || index + 1, 
        status: "default",
      }));
    },
    setQuizID: (state, action) => {
      state.quizID = action.payload; // Update the quiz ID
    },
    updateResult: (state, action) => {
      const { serialNo, status } = action.payload;
      const result = state.results.find((r) => r.serialNumber === serialNo);
      if (result) {
        result.status = status;
      }
    },
  },
});

export const { setQuestNum,setQuizID, initializeResults, updateResult } = questSlice.actions;

export default questSlice.reducer;
