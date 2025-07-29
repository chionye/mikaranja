/** @format */

"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import ApiRoutes from "@/services/api/api-routes";
import { AuthContextType, LoginResult, UserInfo } from "@/types";
import { setAuthToken } from "@/services/api/api-clients";
import { Requests } from "@/services/api";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const loadAuthState = () => {
      if (typeof window !== "undefined") {
        try {
          const storedUser = localStorage.getItem("userInfo");
          const storedToken = localStorage.getItem("userToken");

          if (storedUser && storedToken) {
            const parsedUser: UserInfo = JSON.parse(storedUser);
            setUser(parsedUser);
            setAuthToken(storedToken);
          }
        } catch (error) {
          console.error("Failed to load auth state from storage:", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };

    loadAuthState();
  }, []);

  const login = async (
    username: string,
    password: string
  ): Promise<LoginResult> => {
    setIsLoading(true);
    try {
      const response = await Requests.postTodo(ApiRoutes.Login, {
        data: { username, password },
      });

      const data: UserInfo = response.data;

      console.log(data);

      if (response.status === 200 && data.accessToken) {
        const token = data.accessToken;
        if (typeof window !== "undefined") {
          localStorage.setItem("userInfo", JSON.stringify(data));
          localStorage.setItem("userToken", token);
        }

        setUser(data);
        setAuthToken(token);
        return { success: true, error: null };
      } else {
        return { success: false, error: "Unexpected API response." };
      }
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Invalid credentials. Please try again.";
      console.error("Login error:", error);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      if (typeof window !== "undefined") {
        localStorage.removeItem("userInfo");
        localStorage.removeItem("userToken");
      }
      setUser(null);
      setAuthToken(null);
      router.push("/");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const value = { user, isLoading, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};