import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // 기본 Swiper 스타일
import "swiper/css/navigation"; // 내비게이션 추가 시 필요
import "swiper/css/pagination"; // 페이지네이션 추가 시 필요
import { Navigation, Pagination } from "swiper/modules"; // Swiper 모듈
import Image from "next/image";

const Home: NextPage = () => {
  const [copied, setCopied] = useState(false);
  const [stageD, setStageD] = useState("2D");
  const video_links = [
    [
      "하영지민",
      "https://www.youtube.com/playlist?list=PLCF1IDqY6pqD_AidcfLNEp6c7v40ip_Ds",
    ],
    [
      "희정지환",
      "https://www.youtube.com/playlist?list=PLCF1IDqY6pqB3rqH7nGrqO9dkj2sZjG3Y",
    ],
    [
      "지용지훈",
      "https://www.youtube.com/playlist?list=PLCF1IDqY6pqCcRC_FBch0L3kTV0pTDIgN",
    ],
    [
      "민준지효",
      "https://www.youtube.com/playlist?list=PLCF1IDqY6pqDnhnGX-_aiX8kism8qF6vF",
    ],
    [
      "수미서현",
      "https://www.youtube.com/playlist?list=PLCF1IDqY6pqAwwqrIWovUcfsiMvTQRtIS",
    ],
  ];


  return (
    <div className="grid gap-10 py-10">
      {/* <div className="grid gap-4 mx-10">
        <h3 className="text-xl">스케쥴 구글 스프레드시트</h3>
        <div className="flex flex-col gap-2 text-center mx-4">
          <a
            href="https://docs.google.com/spreadsheets/d/1wNkUul0e7yvD1PfCDFpF9WCxeMcaXjjnf1nDv9o1oLA/edit?usp=drivesdk"
            className="border py-2"
          >
            들어가기
          </a>
        </div>
      </div> */}
      <div className="grid gap-4 mx-10">
        <h3 className="text-xl">연습일지</h3>
        <div className="flex flex-col gap-2 text-center mx-4">
          <a href="https://drive.google.com/drive/folders/1JOUhVaZ0szFSo6mHoDIsi6fSp7SGRRDJ?usp=drive_link" className="border py-2">
            들어가기
          </a>
        </div>
      </div>
      {/* <div className="grid gap-4 mx-10">
        <h3 className="text-xl">사진 드라이브</h3>
        <div className="flex flex-col gap-2 text-center mx-4">
          <a
            href="https://drive.google.com/drive/folders/1LjtTXQ456yPOo9p3a46bauxvuPcyt0Cl"
            className="border py-2"
          >
            들어가기
          </a>
        </div>
      </div> */}
      {/* <div className="grid gap-4 mx-10">
        <h3 className="text-xl">연습일지</h3>
        <div className="flex flex-col gap-2 text-center mx-4">
          <a
            href="https://drive.google.com/drive/folders/1gwjeYe9GgpwuLhYDnZs3B_pm2z_TZ58H?usp=drive_link"
            className="border py-2"
          >
            들어가기
          </a>
        </div>
      </div> */}
      {/* <div className="grid gap-4 mx-10">
        <h3 className="text-xl">디스코드</h3>
        <div className="flex flex-col gap-2 mx-4">
          <a
            href="https://discord.com/channels/1340898866496802867/1340898866496802870"
            className="border py-2 text-center"
          >
            디스코드 바로가기
          </a>
          <span
            onClick={() =>
              (window.location.href = "https://discord.gg/rWFpYgyH")
            }
          >
            초대링크 :
            <span className="text-blue-700">https://discord.gg/rWFpYgyH</span>
          </span>
        </div>
      </div> */}
      <div className="grid gap-4 mx-10">
        <h3 className="text-xl">연습 영상</h3>

        <div className="grid gap-1">
          <span className="mx-4 flex flex-col gap-2 text-center">
            {video_links.map((video_link, j) => (
              <a
                href={video_link[1]}
                className="border py-2"
                key={video_link[0]}
              >
                {video_link[0]}
              </a>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
