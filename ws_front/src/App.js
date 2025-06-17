import { Client } from "@stomp/stompjs";
import { useEffect, useRef } from "react";
import SockJS from "sockjs-client";

// 웹소켓 접속하기
function App() {
  // 웹소켓 연결을 일반 변수로 만들면 재렌더링될 때마다 다시 연결한다
  // userState 사용하는 이유 : 일반 변수는 재렌더링될 때마다 새로 만들어진다(값이 보존되지 X)
  // 만약 보존되야 하는데 화면에 찍을 필요는 없다

  // useRef는 랜더링하지 않는 상태
  const socket = useRef(null);

  useEffect(()=>{
    // STOMP 연결 객체를 설정 정보를 가지고 생성
    const client = new Client({
      // 서버에 연결한 다음 웹소켓 객체를 리턴하는 함수 등록
    webSocketFactory: () => new SockJS("http://localhost:8080/ws"),
    // 서버가 연결되었을 때 실행할 콜백을 등록
    onConnect: () => {
      // /sub/job1을 수신. 서버에서 수신한 message를 console로 출력
      client.subscribe("/sub/job1", (message)=>{console.log(message.body)})
      }
    });

    // 실제 연결을 수행
    client.activate();
    // socket에 저장
    socket.current = client;
  }, [])
  return (
    <div>웹소켓 수신 예제</div>
  );
}

export default App;
