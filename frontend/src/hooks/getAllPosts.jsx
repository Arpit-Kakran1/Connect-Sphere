import axiosInstance from "@/lib/axios";
import { setPosts } from "@/redux/postSlice";
import axios from "axios";
import { useEffect } from "react"
import { useDispatch } from "react-redux"

const useGetAllPost = async () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllPost = async () => {
      try {
        const res = await axiosInstance.get("/post/all", { withCredentials: true });
        if (res.data.success) {
          dispatch(setPosts(res.data.posts));
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllPost();
  }, []);
};

export default useGetAllPost;

