import ContactForm from "./ContactForm";

const problems = [
  { t: "복잡한 선택", d: "너무 많은 정보 속에서 무엇이 나에게 맞는지 알기 어렵습니다." },
  { t: "믿기 어려운 설명", d: "과장된 문구에 지쳐, 진짜 가치를 가려내기 힘듭니다." },
  { t: "일관되지 않은 경험", d: "구매 전과 후의 경험이 다르다고 느낀 적이 있습니다." },
];

const products = [
  { t: "대표 상품 01", d: "상품 설명을 입력하세요." },
  { t: "대표 상품 02", d: "상품 설명을 입력하세요." },
  { t: "대표 상품 03", d: "상품 설명을 입력하세요." },
];

const reviews = [
  { n: "고객 A", r: "후기 문구를 입력하세요." },
  { n: "고객 B", r: "후기 문구를 입력하세요." },
  { n: "고객 C", r: "후기 문구를 입력하세요." },
];

const faqs = [
  { q: "문의 후 답변은 얼마나 걸리나요?", a: "영업일 기준 1일 이내 회신드립니다." },
  { q: "진행 절차는 어떻게 되나요?", a: "문의 → 상담 → 진행 → 사후 관리 순서로 진행됩니다." },
  { q: "비용은 어떻게 되나요?", a: "상담 후 상황에 맞춰 안내드립니다." },
];

export default function Home() {
  return (
    <>
      <header className="header">
        <a href="#top" className="logo">Blanche</a>
        <nav>
          <a href="#about">소개</a>
          <a href="#products">제품</a>
          <a href="#reviews">후기</a>
          <a href="#contact" className="btn small">문의</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <p className="eyebrow">BLANCHE</p>
          <h1>가장 순수한 시작,<br />블랑쉬</h1>
          <p className="sub">덜어낼수록 분명해집니다. 꼭 필요한 것만 정성껏 담았습니다.</p>
          <a href="#contact" className="btn">문의하기</a>
        </section>

        <section className="section glass-section">
          <h2>이런 불편, 겪어보셨나요?</h2>
          <div className="grid">
            {problems.map((p, i) => (
              <div className={`glass tint-${i}`} key={p.t}>
                <div className="chip-row">
                  <span className="icon-chip" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      {i === 0 && <><circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 2" /></>}
                      {i === 1 && <><path d="M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.5 6.7 19.4l1.2-6L3.4 9.3l6-.7z" /></>}
                      {i === 2 && <><path d="M4 7h16M4 12h16M4 17h10" /></>}
                    </svg>
                  </span>
                  <span className="pill-chip" aria-hidden="true" />
                </div>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
                <span className="tag">0{i + 1}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="products" className="section">
          <h2>블랑쉬의 해결 방식</h2>
          <div className="grid">
            {products.map((p) => (
              <div className="card" key={p.t}>
                <div className="thumb" />
                <h3>{p.t}</h3><p>{p.d}</p>
              </div>
            ))}
          </div>
          <div className="center"><a href="#contact" className="btn">상담 신청</a></div>
        </section>

        <section id="about" className="section alt">
          <h2>브랜드 스토리</h2>
          <p className="lead">
            블랑쉬는 프랑스어로 ‘하얀’을 뜻합니다. 가장 깨끗한 상태에서 시작해
            본질만 남기는 것, 그것이 블랑쉬가 일하는 방식입니다.
          </p>
          <div className="stats">
            <div><b>00+</b><span>누적 고객</span></div>
            <div><b>00년</b><span>운영 경력</span></div>
            <div><b>00%</b><span>재방문율</span></div>
          </div>
        </section>

        <section id="reviews" className="section">
          <h2>고객 후기</h2>
          <div className="grid">
            {reviews.map((r) => (
              <div className="card" key={r.n}><p>“{r.r}”</p><span className="who">{r.n}</span></div>
            ))}
          </div>
          <div className="center"><a href="#contact" className="btn">나도 시작하기</a></div>
        </section>

        <section className="section alt">
          <h2>자주 묻는 질문</h2>
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <h2>지금 문의해 주세요</h2>
          <p className="lead center">남겨주신 내용으로 빠르게 연락드립니다.</p>
          <ContactForm />
        </section>
      </main>

      <footer className="footer">
        <p>© Blanche. 사업자 정보 · 대표자 · 연락처를 입력하세요.</p>
        <p><a href="#">이용약관</a> · <a href="#">개인정보처리방침</a></p>
      </footer>

      <a href="#contact" className="sticky-cta">문의하기</a>
    </>
  );
}
