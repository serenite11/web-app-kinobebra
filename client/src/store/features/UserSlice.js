import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  name : '',
  email : '',
  }

const MyDistrictSlice = createSlice({
  name: 'User',
  initialState,
  reducers : {
  }
})

export const NewDistrictReducer = MyDistrictSlice.reducer

export const {addBuiltDistrict, addLayDistrict} = MyDistrictSlice.actions
// export const selectBuiltDistrictCount = (state) => state.researchedDistricts.builtDistrict.count
// export const selectLayDistrictCount = (state) => state.researchedDistricts.layDistrict.count
// export const selectResearchedDistricts = (state) => state.researchedDistricts.districts