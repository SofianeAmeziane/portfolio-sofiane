import useSWR from 'swr' 
export const fetcher = (url) => fetch(url).then(async res=>
  {
   const result = await res.json();
   if (res.status==200) {
     return result;
   } else {
     return Promise.reject(result);
   }
  });
export const useGetPosts= () => {
  const {data,error, ...rest} = useSWR('/api/V1/posts',fetcher);
  return {data,error,loading : !data && !error,...rest}
  }
  export const useGetPost = (id) => {
    const {data,error, ...rest} = useSWR(id?`/api/V1/posts/${id}`:null,fetcher);
    return {data,error,loading : !data && !error,...rest}
    }