import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';
import { ChatModel, UserModel } from "./modelType/models."

const userTableName = 'userTable';
const chatTableName = 'chatTable';

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({ name: 'chat-app.db', location: 'default' });
};

export const createUserTable = async (db: SQLiteDatabase) => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${userTableName}(
    id INTEGER PRIMARY KEY NOT NULL, firstName VARCHAR(30), lastName VARCHAR(30)
    );`;

  await db.executeSql(query);
};

export const createChatTable = async (db: SQLiteDatabase) => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${chatTableName} (
    id INTEGER PRIMARY KEY NOT NULL, message VARCHAR(30), receiverId INTEGER, senderId INTEGER, senderFirstName VARCHAR(30), senderLastName VARCHAR(30)
    );`;

  await db.executeSql(query);
};


export const getChatData = async (db: SQLiteDatabase): Promise<ChatModel[]> => {
  try {
    const chatData: ChatModel[] = [];
    const results = await db.executeSql(`SELECT * FROM ${chatTableName}`);
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        chatData.push(result.rows.item(index))
      }
    });
    return chatData;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get chat data !!!');
  }
};


export const getUserData = async (db: SQLiteDatabase): Promise<UserModel[]> => {
  try {
    const userData: UserModel[] = [];
    const results = await db.executeSql(`SELECT * FROM ${userTableName}`);
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        userData.push(result.rows.item(index))
      }
    });
    return userData;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get user data !!!');
  }
};


export const saveUser = async (db: SQLiteDatabase, userData: UserModel[]) => {


  let insertQuery = `INSERT INTO ${userTableName} (id, firstName, lastName) VALUES `
  for (let i = 0; i < userData.length; ++i) {

    insertQuery = insertQuery + "('"
      + userData[i].id
      + "','"
      + userData[i].firstName
      + "','"
      + userData[i].lastName
      + "')";
    if (i != userData.length - 1) {
      insertQuery = insertQuery + ",";
    }
  }
  return db.executeSql(insertQuery, []);
};



export const saveChat = async (db: SQLiteDatabase, chatData: ChatModel[]) => {
  let insertQuery = `INSERT INTO ${chatTableName} (id , message, receiverId, senderId, senderFirstName, senderLastName) VALUES `
  for (let i = 0; i < chatData.length; ++i) {
    insertQuery = insertQuery + "('"
      + chatData[i].id
      + "','"
      + "" + JSON.stringify(chatData[i].message) + ""
      + "','"
      + chatData[i].receiverId
      + "','"
      + chatData[i].senderId
      + "','"
      + chatData[i].senderFirstName
      + "','"
      + chatData[i].senderLastName
      + "')";
    if (i != chatData.length - 1) {
      insertQuery = insertQuery + ",";
    }
  }
  return db.executeSql(insertQuery, []);
};


export const updateChat = async (db: SQLiteDatabase, chatData: any, chatId: any) => {
  let insertQuery = `UPDATE ${chatTableName} SET message = ? WHERE id = ? `
  return db.executeSql(insertQuery, [chatData, chatId]);
};