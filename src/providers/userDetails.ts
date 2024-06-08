"use server"

import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/authOptions';
import getCurrentLoggedInUser from '@/actions/getCurrentUser';

export const getUserDetails = async () => {
  try {
    const session = await getServerSession(authOptions);
    const loggedInEmail = session?.user?.email;

    if (!loggedInEmail) {
      // If no email is found, return appropriate data or throw an error
      return { error: 'User not authenticated' };
    }

    const currentUser = await getCurrentLoggedInUser(loggedInEmail);

    return {
      email: loggedInEmail,
      user: currentUser,
    };
  } catch (error : any) {
    // Handle any errors that may occur during the process
    return { error: error.message };
  }
};
