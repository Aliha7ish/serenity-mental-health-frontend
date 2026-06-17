import { apiClient } from "./client";


export async function sendVoice(
    audio:Blob
){

 const formData =
    new FormData();


 formData.append(
    "file",
    audio,
    "voice.wav"
 );


 return fetch(
   `${import.meta.env.VITE_API_URL}/voice`,
   {
    method:"POST",
    body:formData,
    credentials:"include"
   }
 ).then(res=>res.json());

}