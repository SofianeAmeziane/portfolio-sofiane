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
export const useGetUser= () => {
  const {data,error, ...rest} = useSWR('/api/V1/me',fetcher);
  return {data,error,loading : !data && !error,...rest}
  }
