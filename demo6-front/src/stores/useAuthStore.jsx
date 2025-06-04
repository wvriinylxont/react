import React from "react";
import { create } from "zustand";
import api from "../utils/api";

const useAuthStore = create((set) => ({
  // 로그인했으면 아이디가, 비로그인이면 null
  // undefined는 뭐지? 아직 미확인
  username: undefined,

  // authStore에 로그인 정보가 들어있는데.. 이 상태는 F5누르면 사라진다
  // 앱이 리로딩되면 로그인 상태를 확인해 아이디를 set하는 함수
  checkAuth: async () => {
    try {
      const response = await api.get("/api/auth/check");
      set(state => ({ ...state, username: response.data.username }));
    } catch (err) {
      console.log(err);
      set(state => ({ ...state, username: null }));
    }
  },

  // 로그인 성공했을 때 아이디를 set
  setUsername: (param) => set(state => ({ ...state, username: param })),

  resetUsername: () => {
    set(state => ({ ...state, username: null }));
  }
}));

export default useAuthStore;
