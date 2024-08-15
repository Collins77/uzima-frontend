import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { verifyEmail } from '../../redux/authSlice';

const VerifyEmail = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const emailVerificationStatus = useSelector(state => state.auth.emailVerificationStatus);

  useEffect(() => {
    if (token) {
      dispatch(verifyEmail(token));
    }
  }, [dispatch, token]);

  return (
    <div>
      {emailVerificationStatus === 'pending' && <p>Verifying your email...</p>}
      {emailVerificationStatus === 'verified' && <p>Email verified successfully!</p>}
      {emailVerificationStatus === 'failed' && <p>Verification failed. Please try again.</p>}
    </div>
  );
};

export default VerifyEmail;
