import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "zzvakq3o",
  dataset: "production",         
  apiVersion: "2023-01-01",     
  useCdn: false,          
});
