import axios from "axios";
import React, { useEffect, useState } from "react";
import Contacts from "../component/Contacts";
import Pagination from "../component/Pagination";
import Loading from "../component/Loading";

function ContactList() {
  const PAGE_SIZE = 10;
  const [pageno, setPageno] = useState(1);
  // pageno=1 -> pageno, pagesize, totalcount, contacts
  const [data, setData] = useState({contacts:[], totalcount:0});

  useEffect(() => {
    async function fetch() {
      try {
        const response = await axios.get(`https://sample.bmaster.kro.kr/contacts?pageno=${pageno}&pagesize=${PAGE_SIZE}`);
        const {contacts, totalcount} = response.data;
        setData({contacts, totalcount});
      } catch (err) {
        console.log(err);
      }
    }
    fetch();
  }, []);

  // 이게 없으면 밑에 pagination 먼저 출력됨
  if(data.contacts.length==0)
    return <Loading />

  return (
    <div>
      <Contacts contacts={data.contacts} />
      <Pagination />
    </div>
  );
}

export default ContactList;
