import { createContext, useState} from "react";

export const PostContext = createContext()

export const PostContextProvider = ({children}) => {

    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState(null)
    const [feed, setFeed] = useState(null)
    const [sidebarData, setSidebarData] = useState({
      stats: { followers: 0, following: 0 },
      suggestions: [],
    });
    const [pendingRequests, setPendingRequests] = useState([]);
    const [user, setUser] = useState(null);


    return(
        <PostContext.Provider value={{loading,setLoading,post,setPost,feed,setFeed,sidebarData,setSidebarData,pendingRequests,setPendingRequests, user, setUser}}>
            {children}
        </PostContext.Provider>
    )
}