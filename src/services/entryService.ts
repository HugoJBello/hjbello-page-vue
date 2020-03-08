
import axios from 'axios';

 const apiUrl = process.env.VUE_APP_BASE_URL || "/"

export const getEntry = (filename:any) => {
  const url = `${apiUrl}entries_content/entries/${filename}`;
  return axios.get(url).then(response => response.data);
}

export const getEntriesIndex = () => {
  const url = `${apiUrl}entries_content/index.json`;
  return axios.get(url).then(response => {return response.data});
}

export const getEntriesIndexTag = async (tag:string) => {
  const url = `${apiUrl}entries_content/index.json`;
  const entries:any = await axios.get(url).then(response => {return response.data.entries});
  return entries.filter((entry:any) =>entry.tags.indexOf(tag)>-1)
}
