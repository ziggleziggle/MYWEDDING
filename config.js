/**
 * Nature Green Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "김현석",
    nameEn: "신랑",
    father: "김진본",
    mother: "장연수",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "김세리",
    nameEn: "신부",
    father: "김창성",
    mother: "박귀숙",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-09-12",
    time: "12:30",
    venue: "여수히든베이호텔",
    hall: "B2F 그랜드블룸",
    address: "여수시 신월로 496-25",
    tel: "061-680-3000",
    mapLinks: {
      kakao: "https://place.map.kakao.com/17429246?referrer=daumsearch_local",
      naver: "https://naver.me/5vcH4iyQ"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "함께 맞이하는 다섯 번째 가을,\n우리라는 이름으로 시작하는 날\n\n그 기쁨의 순간을 소중한 분들과 함께 나누고 싶습니다."
  },

  // ── 오시는 길 ──
  // (mapLinks와 캘린더는 location 섹션 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "김현석", bank: "국민은행", number: "000-000-000000" },
      { role: "아버지", name: "김진본", bank: "신한은행", number: "000-000-000000" },
      { role: "어머니", name: "장연수", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "김세리", bank: "농협은행", number: "351-0836-0032-93" },
      { role: "아버지", name: "김창성", bank: "기업은행", number: "000-000-000000" },
      { role: "어머니", name: "박귀숙", bank: "농협은행", number: "000-000-000000" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "신랑 ♥ 신부 결혼합니다",
    description: "2026년 9월 12일, 소중한 분들을 초대합니다."
  }
};
