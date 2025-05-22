import axios from "axios";
import React, { useEffect, useState } from "react";

// api 서버에서 데이터를 받아와 저장하는 커스텀 훅(상태 + 함수)
function useFetch(url) {
  const [data, setData] = useState(null);
  // useFetch가 시작되었다면 <LoagindSpinner>한다
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetch() {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError(error);
      } finally {
        // 통신이 성공했든 오류가 발생했든 정지하고 결과 출력
        setLoading(false);
      }
    }
    fetch();
  }, [url]);
  return { data, loading, error };
}

export default useFetch;
