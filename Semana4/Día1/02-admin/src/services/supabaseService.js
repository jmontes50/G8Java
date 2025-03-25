import supabase from "../config/supabaseConfig";
import { v4 as uuidv4 } from 'uuid';

const BUCKET_NAME = "products";
const FOLDER_NAME = "public";


const uploadFile = async (file) => {
  
  try {
    const extension = file.name.split(".")[1]; //.png .jpg
    // console.log({extension})
    const newFileName = `${uuidv4()}.${extension}`;
    // console.log({ newFileName });
    const name_file = `${FOLDER_NAME}/${newFileName}`;
    const { data, error } = await supabase.storage.from(BUCKET_NAME).upload(name_file, file)
    if(error){
      console.log(error);
    }else{
      console.log(data);
    }

  } catch (error) {
    throw error;
  }
}

export {
  uploadFile
}