import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  email: '',
  password: '',
  loading: false,
  success: false,
  error: null,
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value; // Update form fields
    },
    registerStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    registerSuccess: (state) => {
      state.loading = false;
      state.success = true;
    },
    registerFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload; // Set error message
    },
  },
});

export const { setField, registerStart, registerSuccess, registerFailure } = registerSlice.actions;

export const registerAsync = (formData) => async (dispatch) => {
  try {
    dispatch(registerStart());
    // Simulate API call for registration
    setTimeout(() => {
      // If success
      dispatch(registerSuccess());
    }, 1500);
  } catch (error) {
    dispatch(registerFailure('Registration failed! Please try again.' , error));
  }
};

export default registerSlice.reducer;
