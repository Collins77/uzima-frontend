import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';
const SERVER_URL = 'https://backend.api.uzima.ai';
// const SERVER_URL = 'http://localhost:5000';

// export const registerUser = createAsyncThunk('auth/register', async (userData) => {
//     const response = await axios.post(`${SERVER_URL}/api/users/register`, userData);
//     return response.data;
// });
export const registerUser = createAsyncThunk(
    'auth/register',
    async (userData, { rejectWithValue }) => {
      try {
        const response = await axios.post(`${SERVER_URL}/api/users/register`, userData);
        return response.data;
      } catch (err) {
        if (err.response && err.response.data && err.response.data.message) {
          return rejectWithValue(err.response.data.message);
        } else {
          return rejectWithValue('An unexpected error occurred. Please try again.');
        }
      }
    }
  );

// export const loginUser = createAsyncThunk('auth/login', async (credentials) => {
//     const response = await axios.post(`${SERVER_URL}/api/users/login`, credentials);
//     return response.data;
// });
export const loginUser = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
      try {
        const response = await axios.post(`${SERVER_URL}/api/users/login`, credentials);
        return response.data;
      } catch (err) {
        if (err.response && err.response.data && err.response.data.message) {
          return rejectWithValue(err.response.data.message);
        } else {
          return rejectWithValue('An unexpected error occurred. Please try again.');
        }
      }
    }
  );
export const loginAdmin = createAsyncThunk('auth/adminLogin', async (credentials) => {
    const response = await axios.post(`${SERVER_URL}/api/admin/login`, credentials);
    return response.data;
});

export const verifyEmail = createAsyncThunk(
    'auth/verifyEmail',
    async (token, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${SERVER_URL}/api/users/verify-email`, { params: { token } });
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data.message);
      }
    }
  );

export const verifyOtp = createAsyncThunk('auth/verifyOtp', async ({ email, otp }) => {
    const response = await axios.post(`${SERVER_URL}/api/users/verify-otp`, { email, otp });
    return response.data;
});

export const disableOtp = createAsyncThunk('auth/disableOtp', async (_, { getState }) => {
    const token = getState().auth.token;
    const response = await axios.post('/disable-otp', {}, {
        headers: { Authorization: token }
    });
    return response.data;
});

// Register Company
export const registerCompany = createAsyncThunk('auth/registerCompany', async (companyData) => {
    const response = await axios.post(`${SERVER_URL}/api/company/create`, companyData);
    return response.data;
});

// register counsellor
export const registerCounsellor = createAsyncThunk('auth/registerCounsellor', async (counsellorData) => {
    const response = await axios.post(`${SERVER_URL}/api/admin/create-counsellor`, counsellorData);
    return response.data;
});

// Register Company User
export const registerCompanyUser = createAsyncThunk('auth/registerCompanyUser', async (userData) => {
    const response = await axios.post(`${SERVER_URL}/api/company/register-user`, userData);
    return response.data;
});
// Register Company User
export const registerAdminUser = createAsyncThunk('auth/registerAdminUser', async (userData) => {
    const response = await axios.post(`${SERVER_URL}/api/admin/create-user`, userData);
    return response.data;
});

// Company Login
export const loginCompany = createAsyncThunk('auth/loginCompany', async (credentials) => {
    const response = await axios.post(`${SERVER_URL}/api/company/login`, credentials);
    return response.data;
});


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: JSON.parse(localStorage.getItem('user')) || null,
        token: localStorage.getItem('token') || null,
        company: JSON.parse(localStorage.getItem('company')) || null,
        admin: JSON.parse(localStorage.getItem('admin')) || null,
        otpRequired: false,
        otpCountdown: 60,
        otpStatus: null,
        emailVerificationStatus: null,
        loading: false,
        error: null
    },
    reducers: {
        resetOtpCountdown: (state) => {
            state.otpCountdown = 60;
        },
        decrementOtpCountdown: (state) => {
            if (state.otpCountdown > 0) {
                state.otpCountdown -= 1;
            }
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.company = null;
            state.admin = null;
            localStorage.removeItem('token');
            localStorage.removeItem('company');
            localStorage.removeItem('admin');
            toast.success('Logged out successfully');
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Action payload contains the custom error message
                toast.error(action.payload); 
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload.otpRequired) {
                    state.otpRequired = true;
                    state.user = { email: action.payload.email };
                } else {
                    state.token = action.payload.token;
                    state.user = action.payload.user; // Save user details
                    localStorage.setItem('token', action.payload.token); // Save token in local storage
                    localStorage.setItem('user', JSON.stringify(state.user)); // Save user details in local storage
                }
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Use action.payload to get the correct error message
                toast.error(action.payload); 
            })
            .addCase(loginAdmin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginAdmin.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.token;
                state.admin = action.payload.admin; // Save user details
                localStorage.setItem('token', action.payload.token); // Save token in local storage
                localStorage.setItem('admin', JSON.stringify(state.admin)); // Save user details in local storage
                
            })
            .addCase(loginAdmin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                toast.error(state.error.message);
            })
            .addCase(verifyEmail.pending, (state) => {
                state.emailVerificationStatus = 'pending';
                state.error = null;
              })
              .addCase(verifyEmail.fulfilled, (state, action) => {
                state.emailVerificationStatus = 'verified';
                state.error = null;
                toast.success('Email verified successfully.');
              })
              .addCase(verifyEmail.rejected, (state, action) => {
                state.emailVerificationStatus = 'failed';
                state.error = action.payload;
                toast.error(`Email verification failed: ${action.payload}`);
              })
            .addCase(verifyOtp.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(verifyOtp.fulfilled, (state, action) => {
                state.loading = false;
                state.otpRequired = true;
                state.token = action.payload.token;
                state.user = jwtDecode(action.payload.token);
                toast.success('OTP verification complete, login successful!');
            })
            .addCase(verifyOtp.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                toast.error(`OTP verification failed: ${action.payload}`);
            })
            .addCase(disableOtp.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(disableOtp.fulfilled, (state) => {
                state.loading = false;
                state.user.otpEnabled = false;
            })
            .addCase(disableOtp.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(registerCompany.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerCompany.fulfilled, (state) => {
                state.loading = false;
                toast.success('Company registered successfully.');
            })
            .addCase(registerCompany.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                toast.error(`Company registration failed: ${action.payload}`);
            })
            .addCase(registerCompanyUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerCompanyUser.fulfilled, (state) => {
                state.loading = false;
                toast.success('User registered under company successfully.');
            })
            .addCase(registerCompanyUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                toast.error(`User registration under company failed: ${action.payload}`);
            })
            .addCase(registerAdminUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerAdminUser.fulfilled, (state) => {
                state.loading = false;
                toast.success('User registered successfully.');
            })
            .addCase(registerAdminUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                toast.error(`User registration failed: ${action.payload}`);
            })
            .addCase(registerCounsellor.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerCounsellor.fulfilled, (state) => {
                state.loading = false;
                toast.success('Counsellor Registered successfully.');
            })
            .addCase(registerCounsellor.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                toast.error(`Counsellor registration failed: ${action.payload}`);
            })
            .addCase(loginCompany.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginCompany.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.token;
                state.company = action.payload.company; // Save company details
                localStorage.setItem('token', action.payload.token); // Save token in local storage
                localStorage.setItem('company', JSON.stringify(state.company));
            })
            .addCase(loginCompany.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                toast.error('Company login failed.');
            });
    }
});

export const { resetOtpCountdown, decrementOtpCountdown, logout } = authSlice.actions;

export default authSlice.reducer;
