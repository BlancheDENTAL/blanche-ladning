"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: 실제 접수 채널(API, 메일, 구글시트 등) 연결
    setSent(true);
  }

  if (sent) {
    return <p className="sent">문의가 접수되었습니다. 빠르게 연락드리겠습니다.</p>;
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <input name="name" placeholder="이름" required />
      <input name="phone" placeholder="연락처" required />
      <textarea name="message" placeholder="문의 내용" rows={4} required />
      <label className="agree">
        <input type="checkbox" required /> 개인정보 수집·이용에 동의합니다.
      </label>
      <button type="submit" className="btn">문의하기</button>
    </form>
  );
}
