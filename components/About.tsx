import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://user-images.githubusercontent.com/100506719/224532502-99a089cf-921a-4e70-89a4-90d186f92b8b.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[450px] xl:h-[450px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          <span className="underline decoration-[#f7ab0a]/50">
            프론트엔드 개발자
          </span>{" "}
          박지영 입니다.
        </h4>
        <p className="leading-relaxed text-lg">
          저는 현재 IT 교육 플랫폼 회사 코딩허브에서 CMS 툴을 개발하여 강사와
          어드민 간의 효율적인 컨텐츠 공유를 돕고 있습니다. 기존 파일 전달
          방식에서 사이트 등록 및 데이터베이스 저장으로의 전환으로 불필요한 업무
          프로세스를 제거하고 웹을 이용한 데이터 공유로 업무 효율성과 안정성을
          향상시키고자 노력하고 있습니다.
        </p>
        <p className="text-base leading-relaxed text-lg">
          이 과정에서 Next-Auth, Shadcn과 같이 다양한 라이브러리를 익히면서
          경험을 확장해 나가고 있습니다. 그리고 디자이너, 백엔드 개발자와 긴밀히
          소통하며 서로의 이견을 좁혀 모두가 만족하는 프로덕트를 만들었습니다.
          저는 앞으로도 직관적이고 세련된 UI/UX를 구축하여 사용자들에게 더 나은
          인터랙티브한 환경을 제공하는 것을 목표로 삼고 있습니다.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
