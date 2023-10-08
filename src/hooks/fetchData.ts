import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = (uri : string) => {
   const [loading , setLoading ] = useState(true);
   const [data  , setData ] = useState([]);
   const [error , setError] = useState(null);

   useEffect(() => {
    const fetchData = async (uri : string) => { 
       await axios.get(uri)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then((response : any) => {
          setData(response.data);
          setLoading(false);
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .catch((err : any) => {
          setLoading(false);
          setError(err);
        })
    };
    fetchData(uri);
   },[uri])
   return { loading , data , error };
};


export default useFetchData;