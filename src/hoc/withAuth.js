/* eslint-disable react/display-name */
import { useEffect } from 'react';
import { useRouter } from "next/navigation";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../auth/firebase";

const withAuth = (ComponentToRender, isLogin = false) => props => {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;
    if (!user) return router.push("/login");
  }, [user, loading, router]);

  if (loading) return <div className="flex justify-center align-middle text-lg tracking-wider">LOADING...</div>;
  if (isLogin || !!user) return (
    <ComponentToRender {...props} user={user} router={router} signInloading={loading} signInError={error} />
  )
};

export default withAuth;