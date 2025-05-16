import axios from "axios";
import React, { useEffect, useState } from "react";

function ContactList() {
  const [contacts, setContacts] = useState(null);
  useEffect(() => {
    async function fetch() {
      try {
        const response = await axios.get("https://mini03.onrender.com/contacts");
        setContacts(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetch();
  }, []);

  if (contacts === null) return;

  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>주소</th>
            <th>전화번호</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr>
                <td>{contact.cno}</td>
                <td>
                  <a href={`/contact/read?cno=${contact.cno}`}>{contact.name}</a>
                </td>
                <td>{contact.address}</td>
                <td>{contact.tel}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <a href="/contact/write" type="button" className="btn btn-primary">
        연락처 추가
      </a>
    </div>
  );
}

export default ContactList;
