import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_ADMIN } from "../../../../config";

const ProtectedAdminRoute = ({ children }) => {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        navigate("/admin/login", { replace: true });
        return;
      }

      try {
        const res = await fetch(`${BASE_ADMIN}validate-token`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Invalid token");
        }

        // ✅ valid token
        setChecking(false);
      } catch (err) {
        toast.error("Session expired. Please login again.");
        localStorage.removeItem("adminToken");
        navigate("/admin/login", { replace: true });
      }
    };

    validateToken();
  }, [navigate]);

  if (checking) {
    return <p>Checking authentication...</p>; // optional loader
  }

  return <>{children}</>;
};

export default ProtectedAdminRoute;
