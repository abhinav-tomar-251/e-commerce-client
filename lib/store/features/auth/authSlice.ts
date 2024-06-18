import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Schema } from 'mongoose';
import { WritableDraft } from 'immer';

interface User {
  firstname: string;
  lastname: string;
  email: string;
  mobile: string;
  password: string;
  role?: string;
  isBlocked?: boolean;
  cart?: Array<any>;
  address?: string;
  wishlist?: WritableDraft<Schema.Types.ObjectId>[] | undefined;
  refreshToken?: string;
  passwordChangedAt?: Date;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

interface AuthState {
  user: User | null;
  token: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  status: 'idle',
  error: null,
};

interface RegisterUserResponse {
  user: User;
  token: string;
}

interface LoginUserResponse {
  user: User;
  token: string;
}

interface RejectValue {
  message: string;
}

type LoginCredentials = {
  email: string;
  password: string;
};

export const registerUser = createAsyncThunk<RegisterUserResponse, User, { rejectValue: RejectValue }>(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:7000/api/user/register', userData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk<LoginUserResponse, User, { rejectValue: RejectValue }>(
  'auth/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:7000/api/user/login', userData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<RegisterUserResponse>) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ? action.payload.message : 'An unknown error occurred';
      })
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<LoginUserResponse>) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ? action.payload.message : 'An unknown error occurred';
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
