// context/SocketContext.js
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';

const SocketContext = createContext();
const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL;

export const SocketProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);
    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = io(SOCKET_URL);
        console.log('socketRef.current', socketRef.current)

        socketRef.current.on('chat_message', (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        return () => {
            socketRef.current.disconnect();
        };
    }, []);

    const sendMessage = (msg) => {
        socketRef.current.emit('chat message', msg);
    };

    return (
        <SocketContext.Provider value={{ messages, sendMessage }}>
            {children}
        </SocketContext.Provider>
    );
};

export const useSocket = () => {
    return useContext(SocketContext);
};
