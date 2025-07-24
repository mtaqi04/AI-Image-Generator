import axios from 'axios';

const API = axios.create({
    baseURL: 'ai-image-generator-2-sen1.onrender.com',
});

export const GetPosts = async () => await API.get("/post/");
export const CreatePost = async (data) => await API.post("/post/", data);
export const GenerateAIImage = async (data) => 
    await API.post("/generateImage/", data);