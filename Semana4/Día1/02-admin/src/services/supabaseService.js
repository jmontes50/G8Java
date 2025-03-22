import supabase from "../config/supabaseConfig";

const BUCKET_NAME = "products";
const FOLDER_NAME = "public";

const uploadFile = async (file) => {
  try {
    const name_file = `${FOLDER_NAME}/prueba`;
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