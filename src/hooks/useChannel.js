//获取频道列表的数据
import {useEffect,useState} from'react'
import { getChannelAPI } from "@/apis/article";
function useChannel(){
 //获取频道列表
 const [channelList, setChannelList] = useState([]);

 useEffect(() => {
   //1.封装函数，在函数体内调用接口
   const getChannelList = async () => {
     const res = await getChannelAPI();
     setChannelList(res.data.channels);
   };
   //2.调用函数
   getChannelList();
 }, []);
 return {
    channelList
 }
}

export  {useChannel}