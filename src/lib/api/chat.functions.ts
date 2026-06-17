import { apiClient } from "./client";


export interface ChatMessage {
    message:string;
}



export function sendMessage(
    data:ChatMessage
){

 return apiClient(
   "/chat",
   {
    method:"POST",
    body:JSON.stringify(data)
   }
 );

}