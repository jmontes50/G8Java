import supabase from "../config/supabaseConfig";
import { v4 as uuidv4 } from 'uuid';

const BUCKET_NAME = "products";
const FOLDER_NAME = "public";


const uploadFile = async (file) => {
  
  try {
    const originalName = file.name.split(".");
    const extension = originalName[originalName.length - 1]; //.png .jpg
    // console.log({extension})
    const newFileName = `${uuidv4()}.${extension}`;
    // console.log({ newFileName });
    const name_file = `${FOLDER_NAME}/${newFileName}`;
    const { data, error } = await supabase.storage.from(BUCKET_NAME).upload(name_file, file)
    if(error){
      console.log(error);
    }else{
      // console.log("respuesta subida", data);
      const fileUrlPublic = supabase.storage.from(BUCKET_NAME).getPublicUrl(data.path);
      // console.log({ fileUrlPublic });
      // console.log(fileUrlPublic.data.publicUrl);
      return fileUrlPublic.data.publicUrl; //urlPublica ya lista
    }
  } catch (error) {
    throw error;
  }
}

export {
  uploadFile
}