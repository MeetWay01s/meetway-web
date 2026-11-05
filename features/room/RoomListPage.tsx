/**
 * 채팅방 리스트 페이지
 */
"use client";

import { useRouter } from "next/navigation";

export function RoomListPage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/room/detail");
  };

  return <div onClick={handleClick}>채팅방리스트 페이지~</div>;
}
