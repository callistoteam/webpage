import React from "react";

const Privacy = () => {
  return (
    <div>
      <h1 id="개인정보취급방침">개인정보취급방침</h1>
      <blockquote>
        <p>
          <code>Team. Callisto</code>가 여러분의 개인정보를 취급하는 방침입니다!
        </p>
      </blockquote>
      <p>
        <code>Team. Callisto</code> (이하 '회사는)는 유저의 개인정보를 중요시
        하며,
      </p>
      <p>"정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다.</p>
      <p>
        회사는 개인정보취급방침으로 유저가 제공하는 개인정보가 어떠한 용도와
        방식으로 이용되고 있는지,
      </p>
      <p>개인정보보호를 위해 어떠한 조치가 취해지는지 알려드립니다.</p>
      <p>
        회사는 개인정보취급방침을 개정하는 경우 서버 공지 및 웹사이트 공지등으로
        알려드립니다.
      </p>
      <h2 id="수집하는-개인정보-항목">수집하는 개인정보 항목</h2>
      <p>
        회사는 명령어 이용, 버그 픽스 및 악용 방지 등등을 위해 아래와 같은
        개인정보를 수집하고 있습니다.
      </p>
      <h3 id="보관되는-항목">보관되는 항목</h3>
      <ul>
        <li>유저 : 아이디, 가입일, 사용언어, 명령어 사용 기록</li>
        <li>
          서버 : 아이디, 경고 데이터, 기타 설정 정보(로깅 채널, 경고 한도 등)
        </li>
        <li>결제 : 결제 시간, 결제 처리번호, 결제 수단, 금액, 환불 링크 등</li>
        <li>문의 : 이메일, 문의 기록 (이메일로 문의시)</li>
      </ul>
      <h3 id="열람-가능한-정보">열람 가능한 정보</h3>
      <p>
        디스코드에서 제공하는 API를 이용하여, 정보를 열람할 수 있습니다. 따로
        사설 DB에 저장되지는 않습니다.
      </p>
      <ul>
        <li>
          유저 : 디스코드에서 열람 가능한 모든 정보 (아이디, 유저명, 태그,
          공통서버, 디스코드 가입일 등등)
        </li>
        <li>
          서버 : 디스코드에서 열람 가능한 모든 정보 (아이디, 서버명, 소유자,
          초대링크, 서버 생성일 등등)
        </li>
      </ul>
      <h2 id="개인정보-수집방법">개인정보 수집방법</h2>
      <p>
        봇이 포함된 유저/서버에게 디스코드 API를 이용하거나, 봇이 서버에
        추가되거나, 유저가 봇을 처음 사용할때, 명령어를 이용하여 수집합니다.
        최초 이용시, 이용자에게 개인정보약관을 표시하며, 개인정보 수집 및 이용에
        대한 동의를 얻습니다.
      </p>
      <h2 id="개인정보의-수집-및-이용목적">개인정보의 수집 및 이용목적</h2>
      <p>회사는 다음과 같은 목적으로 개인정보를 사용합니다.</p>
      <ul>
        <li>과도한 명령어 도배 및 악용방지</li>
        <li>빠른 이슈/버그 수정</li>
        <li>원활한 서비스 제공</li>
      </ul>
      <h3 id="개인정보의-보유-및-이용기간">개인정보의 보유 및 이용기간</h3>
      <ul>
        <li>서비스 종료시까지</li>
        <li>이용자의 파기 요청시</li>
      </ul>
      <h3 id="개인정보의-제공-및-위탁">개인정보의 제공 및 위탁</h3>
      <p>
        회사는 원칙적으로 이용자의 동의없이 제3자에게 개인정보를 제공하지
        않습니다. 관계 법령에 의해 예외적으로 제3자에게 제공 의무가 발생하는
        경우 해당 법령을 엄격히 준수하며, 개인정보 침해가 최소화되도록
        노력합니다.
      </p>
      <h3 id="개인정보의-파기">개인정보의 파기</h3>
      <p>
        개인정보의 수집 및 이용 목적이 달성 되면, 수집한 개인정보를 신속하고
        안전한 방법으로 파기합니다.
        <br />
        사용 기록(명령어 로그)와 같은 유저 자체의 정보가 아닌 경우, 언제든지
        삭제될 수 있습니다. 원칙적으로는 1달간 보관합니다.
        <br />
        '개인정보 유효기간제'에 의거하여, 1년간 서비스를 이용하지 않은 회원의
        개인정보는 별도로 분리하여 보관 및 관리합니다.
      </p>
      <h3 id="이용자-및-법정-대리인의-권리와-행사-방법">
        이용자 및 법정 대리인의 권리와 행사 방법
      </h3>
      <h4 id="이용자">이용자</h4>
      <p>
        회사는 정보통신망법 및 개인정보 보호법 등 관계 법령에서 규정하고 있는
        이용자의 권리를 충실히 보장합니다.
        <br />
        이용자는 언제든지 자신의 개인정보 및 이용 현황을 상시 확인할 수 있으며,
        동의 철회 및 정정을 요청할 수 있습니다.
      </p>
      <h4 id="법정-대리인">법정 대리인</h4>
      <p>
        만 14세 미만 아동에 대한 법정 대리인의 권리 또한 법령에 따라 보장됩니다.
        또한 다음 권리를 행사할 수 있습니다.
      </p>
      <ul>
        <li>동의 철회 및 개인정보 파기 요청</li>
        <li>개인정보 열람 요청</li>
      </ul>
      <p>기타 결제 관련 권리는 결제방침에 설명되어있습니다.</p>
      <h3 id="개인정보-처리방침-변경-시-고지-의무">
        개인정보 처리방침 변경 시 고지 의무
      </h3>
      <p>개인정보 처리방침의 변경이 있는 경우 사전에 이용자에게 고지합니다.</p>
    </div>
  );
};

export default Privacy;
