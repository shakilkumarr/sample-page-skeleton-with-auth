"use client"

import { useEffect } from "react";

import LoginForm from "./LoginForm";
import withAuth from '@/hoc/withAuth';

const Login = ({ user, router, signInError, signInLoading }) => {

  useEffect(() => {
    if (signInError) alert('You are not authorised!');
    if (signInLoading) return;
    if (!!user) router.push('/');
  }, [user, signInLoading, router, signInError]);

  return <LoginForm />;
}

export default withAuth(Login, true);
