import axiosInstance from "@/lib/axios";
import { setUserProfile } from "@/redux/authSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


const useGetUserProfile = (userId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await axiosInstance.get(`/user/${userId}/profile`, { withCredentials: true });
        console.log(res);
        if (res.data.success) {
          dispatch(setUserProfile(res.data.user));
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchUserProfile();
  }, [userId]);
};
export default useGetUserProfile;