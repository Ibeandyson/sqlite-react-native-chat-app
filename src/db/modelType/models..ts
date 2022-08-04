export type UserModel = {
    id: number;
    firstName: string;
    lastName: string;
}

export type Messages = {
    id: number;
    text: string;
    receiver: boolean
}

export type ChatModel = {
    id: number;
    message: Messages[];
    receiverId: number
    senderId: number;
    senderFirstName: string;
    senderLastName: string;  
}