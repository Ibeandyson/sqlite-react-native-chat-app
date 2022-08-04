import { getChatData, getUserData, saveChat, saveUser, createChatTable, createUserTable, getDBConnection, updateChat } from "../db/db-service"
import chat from "../db/mock/chat"
import user from "../db/mock/user"

const useDBFunction = () => {

    const initUser = async () => {
        try {
            const db = await getDBConnection();
            await createUserTable(db);
            const storedUser = await getUserData(db);
            if (storedUser.length) {
                // console.log("==USER==", storedUser)
            } else {
                await saveUser(db, user);
                console.log('user table created')
            }
        } catch (error) {
            console.error(error);
        }
    }

    const initChat = async ()  => {
        try {
            const db = await getDBConnection();
            await createChatTable(db);
            const storedChat = await getChatData(db);
            if(storedChat.length){

            }else {
                await saveChat(db, chat);
                console.log('chat table created')
            }
                
        } catch (error) {
            console.error(error);
        }
    }

    const saveChatMessaagesToDB = async (data: any, id: any) => {
        try {
            const db = await getDBConnection();
            await createChatTable(db);
            await updateChat(db, JSON.stringify(data), id);
            const storedChat = await getChatData(db);
            console.log('chat message saved', storedChat)
        } catch (error) {
            console.error(error);
        }
    }

    const getChats = async (): Promise<any>  => {
        try {
            const db = await getDBConnection();
            await createChatTable(db);
            const storedChat = await getChatData(db);
            return storedChat 
        } catch (error) {
            console.error(error);
        }
    }

    return {
        initUser,
        initChat,
        getChatData,
        getDBConnection,
        saveChatMessaagesToDB,
        getChats
    }

}

export default useDBFunction



