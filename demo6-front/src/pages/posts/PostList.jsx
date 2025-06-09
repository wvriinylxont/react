import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { readAll } from "../../utils/postApi";
import Posts from "../../components/posts/Posts";
import Paginations from "../../components/posts/Paginations";
import { Alert, Pagination } from "react-bootstrap";
import LoadingSpinner from "../../components/commons/LoadingSpinner";
import useSWR from "swr";

function PostList() {
  const [params] = useSearchParams();
  let pageno = parseInt(params.get("pageno"));
  if (isNaN(pageno) || pageno < 1) pageno = 1;

  // SWR : 서버에서 데이터를 패칭하고 메모리에서 관리하는 역할
  //       데이터를 읽어오는 사이드이펙트이므로 useEffect를 이용해서 상태를 변경 ->그 작업을 수행해 준다
  // SWR은 수신한 데이터를 메모리에 띄어두고 관리 -> 기본적으로 탭을 다시 선택하면 posts를 갱신해준다
  const { data, error, isLoading } = useSWR(["posts", pageno], () => readAll(pageno), {revalidateOnFocus : false});

  if (isLoading) return <LoadingSpinner />;
  if (error) return <Alert variant="danger">서버가 응답하지 않습니다</Alert>;

  // data : {posts, prev, start, end, next, pageno}에서 posts를 posts에, 나머지들을 pagination란 이름으로
  const {posts, ...pagination} = data;

  return (
    <div>
      <Posts posts={posts} />
      <Paginations pagination={pagination} />
    </div>
  );
}

export default PostList;
