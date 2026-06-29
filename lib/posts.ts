export type BlogPost = {
  slug: string;
  title: string;
  dek: string;
  category: "Motion" | "Layout" | "Type" | "Interface" | "Color" | "Essay";
  date: string;
  readTime: string;
  accent: string;
  imageSeed: string;
  temperature: string;
  intro: string;
  fragments: string[];
  body: {
    heading: string;
    copy: string;
  }[];
};

export const posts: BlogPost[] = [
  {
    slug: "scroll-is-a-story-engine",
    title: "스크롤은 이야기의 엔진이다",
    dek: "스크롤을 단순 이동 장치로 두면 페이지는 죽는다. 속도, 마찰, 지연을 설계하면 글은 장면이 된다.",
    category: "Motion",
    date: "2026.06.18",
    readTime: "7분",
    accent: "cyan",
    imageSeed: "kinetic-editorial-scroll",
    temperature: "cool friction",
    intro: "스크롤은 독자의 손끝에서 발생하는 리듬이다. 그 리듬을 레이아웃이 받아치면 블로그는 목록이 아니라 작은 무대가 된다.",
    fragments: ["sticky cadence", "scrubbed reveal", "quiet inertia"],
    body: [
      {
        heading: "마찰이 있어야 장면이 남는다",
        copy: "좋은 스크롤 인터랙션은 독자를 붙잡지 않는다. 대신 읽는 속도를 잠깐 늦추고, 다음 문장이 들어올 공간을 만든다. 핀 고정 섹션, 느린 마스크, 살짝 늦게 따라오는 이미지가 이 역할을 한다."
      },
      {
        heading: "애니메이션은 장식이 아니라 문장 부호다",
        copy: "모든 요소가 동시에 나타나면 아무것도 중요하지 않다. 제목, 이미지, 메타 정보가 서로 다른 박자로 들어오면 독자는 자연스럽게 우선순위를 읽는다. 움직임은 예쁜 효과가 아니라 독해 순서를 정하는 문법이다."
      },
      {
        heading: "줄일수록 더 강해진다",
        copy: "스크롤 효과는 많을수록 약해진다. 한 페이지에 대표 동작 하나만 두고 나머지는 그 동작을 받쳐야 한다. 이 글에서는 세로 진행감 하나에 집중하고, hover와 필터는 손맛만 남기는 방향을 택했다."
      }
    ]
  },
  {
    slug: "cards-that-remember-your-fingers",
    title: "카드가 손끝을 기억할 때",
    dek: "hover는 색만 바꾸는 이벤트가 아니다. 카드가 기울고, 빛이 밀리고, 텍스트가 대답하면 목록은 악기가 된다.",
    category: "Interface",
    date: "2026.06.12",
    readTime: "6분",
    accent: "rose",
    imageSeed: "tactile-interface-cards",
    temperature: "warm pressure",
    intro: "블로그 카드가 너무 얌전하면 독자는 제목만 훑고 떠난다. 카드는 눌리는 물체처럼 반응해야 한다.",
    fragments: ["tilt field", "edge glow", "press memory"],
    body: [
      {
        heading: "카드는 평면이 아니다",
        copy: "포인터가 카드 위를 지나갈 때 시각적 무게 중심이 바뀌면 사용자는 그 면을 실제 물체처럼 느낀다. 작은 rotate 값과 깊이감만으로도 카드가 손끝을 따라오는 착시가 생긴다."
      },
      {
        heading: "반응은 짧아야 믿긴다",
        copy: "hover가 너무 과장되면 장난처럼 보인다. 200ms 안쪽의 압력, 긴 hover에서는 느린 이미지 확대, 클릭 순간에는 아주 작은 눌림을 주면 인터랙션이 과장 없이 살아난다."
      },
      {
        heading: "정보 구조는 흔들리면 안 된다",
        copy: "움직임이 있어도 제목, 요약, 날짜, 카테고리 위치는 안정적으로 유지되어야 한다. 사용자는 놀라움을 좋아하지만 길 찾기를 방해받는 건 싫어한다."
      }
    ]
  },
  {
    slug: "type-scale-without-vanity",
    title: "타입 스케일을 망치는 작은 허영",
    dek: "큰 제목은 자신감이지만, 아무 이유 없는 거대함은 소음이다. 글자 크기는 레이아웃의 체중계다.",
    category: "Type",
    date: "2026.06.06",
    readTime: "5분",
    accent: "amber",
    imageSeed: "wide-typography-lab",
    temperature: "dry contrast",
    intro: "전문가처럼 보이는 타입은 대부분 더 작고 더 정확하다. 허세가 빠지면 여백과 행간이 일을 시작한다.",
    fragments: ["wide measure", "balanced wrap", "weight shift"],
    body: [
      {
        heading: "두 줄은 규칙이 아니라 안전장치다",
        copy: "히어로 제목이 네 줄이 되는 순간, 독자는 메시지가 아니라 레이아웃 사고를 본다. 컨테이너를 넓히고, 글자 크기를 줄이고, 문장을 깎아야 한다."
      },
      {
        heading: "본문 폭은 신뢰다",
        copy: "본문이 너무 넓으면 눈이 줄 끝을 놓친다. 너무 좁으면 블로그가 모바일 캡처처럼 보인다. 60자에서 70자 사이의 폭은 오래된 규칙이지만 아직도 잘 버틴다."
      },
      {
        heading: "무게는 단계적으로 써라",
        copy: "400과 700만 쓰면 페이지가 두 계단짜리 사다리가 된다. 500, 600, 숫자용 mono를 섞으면 정보의 층이 자연스럽게 생긴다."
      }
    ]
  },
  {
    slug: "slow-animation-has-weight",
    title: "느린 애니메이션의 무게",
    dek: "빠른 UI는 효율적이다. 하지만 느린 UI는 기억된다. 문제는 느림을 어디에 쓰느냐다.",
    category: "Motion",
    date: "2026.05.28",
    readTime: "8분",
    accent: "violet",
    imageSeed: "slow-motion-interface",
    temperature: "heavy air",
    intro: "느림은 고급스러움의 자동 버튼이 아니다. 잘못 쓰면 답답하고, 제대로 쓰면 페이지 전체의 호흡이 된다.",
    fragments: ["delayed mass", "soft exit", "reduced path"],
    body: [
      {
        heading: "느림은 입장에만 허락된다",
        copy: "사용자가 조작한 결과는 빠르게 답해야 한다. 반대로 새 장면이 열리는 순간은 조금 느려도 된다. 이 차이를 지키면 UI가 둔하지 않고 무게 있게 느껴진다."
      },
      {
        heading: "감속 곡선이 분위기를 만든다",
        copy: "linear는 기계적이고, 너무 튀는 spring은 장난스럽다. 글 중심 블로그에서는 초반에 빠르고 끝에서 천천히 멈추는 곡선이 읽기 흐름을 해치지 않는다."
      },
      {
        heading: "움직임을 줄이는 사용자도 독자다",
        copy: "모션 강도가 높을수록 reduced motion 처리는 필수다. 장면 전환을 opacity나 즉시 상태로 낮추면 경험을 버리지 않고 접근성을 지킬 수 있다."
      }
    ]
  },
  {
    slug: "color-survives-on-dark",
    title: "검은 배경에서 색이 버티는 법",
    dek: "다크 UI는 검정과 네온의 문제가 아니다. 색이 오래 버티려면 채도보다 주변 온도가 먼저 정리되어야 한다.",
    category: "Color",
    date: "2026.05.17",
    readTime: "6분",
    accent: "lime",
    imageSeed: "dark-color-calibration",
    temperature: "acid night",
    intro: "검은 배경은 쉬워 보이지만 색을 망치기 가장 좋은 무대다. 과한 glow는 첫눈에만 이기고 두 번째 시선에서 무너진다.",
    fragments: ["single accent", "tinted black", "quiet glow"],
    body: [
      {
        heading: "순수한 검정은 깊이가 없다",
        copy: "완전한 검정은 모든 주변색을 끊어버린다. 아주 약한 청색, 녹색, 갈색 기운이 섞인 어두운 바탕은 색이 앉을 표면을 만든다."
      },
      {
        heading: "accent는 하나면 충분하다",
        copy: "섹션마다 다른 색을 쓰면 페이지가 조립품처럼 보인다. 하나의 accent를 버튼, 링크, 미세한 테두리, 진행 상태에 반복하면 브랜드 리듬이 생긴다."
      },
      {
        heading: "glow는 가장 늦게 켜라",
        copy: "빛 효과를 먼저 쓰면 디자인이 거기에 끌려간다. 먼저 대비, 면, 여백을 세우고 마지막에 아주 작은 빛을 얹어야 한다."
      }
    ]
  },
  {
    slug: "turning-a-blog-list-into-a-stage",
    title: "블로그 목록을 무대로 바꾸기",
    dek: "목록은 정보 구조지만 동시에 연출 장치다. 글의 순서, 크기, 거리, 반응이 독자의 시선을 지휘한다.",
    category: "Layout",
    date: "2026.05.03",
    readTime: "9분",
    accent: "orange",
    imageSeed: "editorial-blog-stage",
    temperature: "paper heat",
    intro: "좋은 블로그 홈은 모든 글을 공평하게 대하지 않는다. 어떤 글은 무대 중앙에 서고, 어떤 글은 다음 장면을 예고한다.",
    fragments: ["asymmetric list", "reader path", "visual pause"],
    body: [
      {
        heading: "공평한 그리드는 공평하게 지루하다",
        copy: "모든 카드가 같은 크기면 독자는 어디서 시작해야 할지 모른다. 대표 글은 크게, 짧은 노트는 얇게, 실험 글은 이미지 중심으로 다뤄야 목록에 리듬이 생긴다."
      },
      {
        heading: "필터는 네비게이션이 아니라 편집 도구다",
        copy: "카테고리 버튼이 단순한 검색 장치처럼 보이면 재미가 없다. 선택할 때 배경, 통계, 리스트 밀도가 같이 바뀌면 사용자는 직접 편집판을 만지는 느낌을 받는다."
      },
      {
        heading: "빈 공간도 글을 소개한다",
        copy: "간격은 글 사이의 침묵이다. 침묵이 없으면 모든 제목이 동시에 소리친다. 넓은 여백과 한 번씩 등장하는 큰 이미지는 독자가 다음 글을 고를 시간을 준다."
      }
    ]
  }
];

export const categories = ["전체", "Motion", "Layout", "Type", "Interface", "Color", "Essay"] as const;

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
