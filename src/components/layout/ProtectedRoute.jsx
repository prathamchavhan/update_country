import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../createClient";

export const ProtectedRoute = (props) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    supabase.auth.getSession().then(function(response) {
      setSession(response.data.session);
      setLoading(false);
    });

    const listener = supabase.auth.onAuthStateChange(function(event, sessionData) {
      setSession(sessionData);
    });

    return function() {
      listener.data.subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }


  if (session) {
    return props.children;
  } else {
    return <Navigate to="/login" replace />;
  }
};
