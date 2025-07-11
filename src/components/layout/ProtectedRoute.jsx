import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../createClient";

export const ProtectedRoute = (props) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then((response) => {
      setSession(response.data.session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, sessionData) => {
      setSession(sessionData);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

 
  if (session) {
    return props.children;
  } else {
    return <Navigate to="/signup" replace />;
  }
};
