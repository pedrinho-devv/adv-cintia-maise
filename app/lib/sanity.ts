
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "txuahjvv",  
  dataset: "production",         
  apiVersion: "2023-01-01",     
  useCdn: false,          
});
