
import axios from 'axios';

 const apiUrl = process.env.VUE_APP_BASE_URL || "/"

export const getEntry = (filename:any) => {
  const url = `${apiUrl}entries_content/entries/${filename}`;
  return axios.get(url).then(response => response.data);
}

const filterHidden = (entries: any) => {
  return entries.filter((entry:any) => entry.tags.indexOf("hidden")<0)
}

export const getEntriesIndex = async (limit:number=10, skip:number=0, includeHidden:boolean = false) => {
  const url = `${apiUrl}entries_content/index.json`;
  const entries: Object[] = await  axios.get(url).then(response => {return response.data.entries});
  if (includeHidden){
    entries.splice(skip, limit)
  }
  return filterHidden(entries).splice(skip, limit)
}

export const getEntriesIndexTag = async (tag:string, limit:number=10, skip:number=0, includeHidden:boolean = false) => {
  const url = `${apiUrl}entries_content/index.json`;
  const entries:any = await axios.get(url).then(response => {return response.data.entries});
  const entriesFilter =  entries.filter((entry:any) =>entry.tags.indexOf(tag)>-1)
  if (includeHidden){
    entriesFilter.splice(skip, limit)
  }
  return filterHidden(entriesFilter).splice(skip, limit)
}

