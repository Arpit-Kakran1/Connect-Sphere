import { useDispatch, useSelector } from "react-redux";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { setMessages, setSelectedUser } from "@/redux/chatSlice";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { MessageCircleCode, MoveLeft } from "lucide-react";
import Messages from "./Messages";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import axiosInstance from "@/lib/axios";

const ChatPage = () => {
  const [text, setText] = useState("");
  const { user, suggestedUsers } = useSelector(store => store.auth);
  const { selectedUser, onlineUsers, messages } = useSelector(store => store.chat);
  const dispatch = useDispatch();

  const sendMessageHandler = async (recieverId) => {
    if (!text.trim()) return;

    try {
      const res = await axiosInstance.post(
        `/message/send/${recieverId}`,
        { text },
        {
          headers: { "Content-type": "application/json" },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        dispatch(setMessages([...messages, res.data.newMessage]));
        setText("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    return () => dispatch(setSelectedUser(null));
  }, []);

  return (
    <div className="flex w-full pt-16 md:pt-4 md:pl-72">


      <section
        className={`w-full md:w-1/4 border-r ${selectedUser ? "hidden md:flex" : "flex"
          } flex-col`}
      >
        <h1 className="font-bold mb-4 px-3 text-xl">{user?.username}</h1>
        <hr className="mb-4 border-gray-300" />

        <div className="overflow-y-auto">
          {suggestedUsers.map((suggestedUser) => {
            const isOnline = onlineUsers.includes(suggestedUser?._id);
            return (
              <div
                key={suggestedUser._id}
                onClick={() => dispatch(setSelectedUser(suggestedUser))}
                className="flex gap-3 items-center p-3 hover:bg-gray-50 cursor-pointer"
              >
                <Avatar className="w-14 h-14">
                  <AvatarImage src={suggestedUser?.profilePicture} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-medium">{suggestedUser?.username}</span>
                  <span
                    className={`text-xs font-bold ${isOnline ? "text-green-600" : "text-red-600"
                      }`}
                  >
                    {isOnline ? "online" : "offline"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>


      {selectedUser ? (
        <section className="flex-1 relative">


          <div className="flex gap-3 items-center px-4 py-2 border-b bg-white">
            <Link to="/"><MoveLeft />
            </Link>
            <Avatar>
              <AvatarImage src={selectedUser?.profilePicture} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="font-medium">{selectedUser?.username}</span>
          </div>


          <Messages selectedUser={selectedUser} />


          <div className="fixed bottom-0 left-0 md:left-72 right-0 flex items-center p-4 border-t bg-white z-50">
            <Input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="flex-1 mr-2"
              placeholder="Message..."
            />
            <Button onClick={() => sendMessageHandler(selectedUser?._id)}>
              Send
            </Button>
          </div>
        </section>
      ) : (
        <div className="flex flex-col items-center justify-center mx-auto">
          <MessageCircleCode className="w-32 h-32 my-4" />
          <h1 className="font-medium">Your messages</h1>
          <span>Send a message to start a chat.</span>
        </div>
      )}
    </div>
  );
};

export default ChatPage;
