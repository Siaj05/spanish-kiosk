import React, { useEffect, useRef, useState } from "react";
import { X, Globe2, Lightbulb, ImageOff } from "lucide-react";

import img_gavi from "./assets/gavi.webp";
import img_mariachi from "./assets/mariachi.webp";
import img_ricebeans from "./assets/ricebeans.webp";
import img_baseball from "./assets/baseball.webp";
import img_beach from "./assets/beach.webp";
import img_bukele from "./assets/bukele.webp";
import img_volcano from "./assets/volcano.webp";
import img_hangingbridge from "./assets/hangingbridge.webp";
import img_soup from "./assets/soup.webp";
import img_panamacanal from "./assets/panamacanal.webp";
import img_roses from "./assets/roses.webp";
import img_quito from "./assets/quito.webp";
import img_machupicchu from "./assets/machupicchu.webp";
import img_mate from "./assets/mate.webp";
import img_messi from "./assets/messi.webp";
import img_pupusas from "./assets/pupusas.webp";
import img_havanacar from "./assets/havanacar.webp";
import img_alhambra from "./assets/alhambra.webp";
import img_tangoreal from "./assets/tangoreal.webp";
import img_andesmountains from "./assets/andesmountains.webp";
import img_llama from "./assets/llama.webp";
import img_taco from "./assets/taco.webp";
import img_paella from "./assets/paella.webp";
import img_spainofficialflag from "./assets/spainofficialflag.webp";
import img_uruguayteam from "./assets/uruguayteam.webp";
import img_moai from "./assets/moai.webp";
import img_chileempanada from "./assets/chileempanada.webp";
import img_colombiaemerald from "./assets/colombiaemerald.webp";
import img_peruofficialflag from "./assets/peruofficialflag.webp";
import img_colombiacoffee from "./assets/colombiacoffee.webp";
import img_colombiaforest from "./assets/colombiaforest.webp";
import img_argentinasteak from "./assets/argentinasteak.webp";
import img_costaricaofficialflag from "./assets/costaricaofficialflag.svg";
import img_uruguaystadium from "./assets/uruguaystadium.webp";
import img_mangu from "./assets/mangu.webp";
import img_spainflamenco from "./assets/spainflamenco.webp";
import img_cubasalsa from "./assets/cubasalsa.webp";
import img_costaricasloth from "./assets/costaricasloth.webp";
import img_atacama from "./assets/atacama.webp";
import img_chichenitza from "./assets/chichenitza.webp";
import img_mexicoofficialflag from "./assets/mexicoofficialflag.webp";
import img_guatemalatikal from "./assets/guatemalatikal.webp";
import img_guatemalavolcano from "./assets/guatemalavolcano.webp";
import img_guatemalaatitlan from "./assets/guatemalaatitlan.webp";
import img_guatemalaofficialflag from "./assets/guatemalaofficialflag.svg";
import img_hondurasbaleadas from "./assets/hondurasbaleadas.webp";
import img_hondurascoral from "./assets/hondurascoral.webp";
import img_hondurasofficialflag from "./assets/hondurasofficialflag.svg";
import img_nicaraguashark from "./assets/nicaraguashark.webp";
import img_nicaragualake from "./assets/nicaragualake.webp";
import img_nicaraguaofficialflag from "./assets/nicaraguaofficialflag.webp";
import img_puertoricobadbunny from "./assets/puertoricobadbunny.webp";
import img_puertoricobiobay from "./assets/puertoricobiobay.webp";
import img_puertoricoofficialflag from "./assets/puertoricoofficialflag.svg";
import img_venezuelaangel from "./assets/venezuelaangel.webp";
import img_venezuelamaduro from "./assets/venezuelamaduro.webp";
import img_venezuelaoil from "./assets/venezuelaoil.webp";
import img_venezuelaofficialflag from "./assets/venezuelaofficialflag.webp";
import img_boliviaofficialflag from "./assets/boliviaofficialflag.webp";
import img_boliviauyuni from "./assets/boliviauyuni.webp";
import img_boliviaflamingo from "./assets/boliviaflamingo.webp";
import img_boliviavalle from "./assets/boliviavalle.webp";
import img_paraguayofficialflag from "./assets/paraguayofficialflag.webp";
import img_paraguaypalacio from "./assets/paraguaypalacio.webp";
import img_paraguayitaipu from "./assets/paraguayitaipu.webp";
import img_paraguayharp from "./assets/paraguayharp.webp";
import img_equatorialguineatraditional from "./assets/equatorialguineatraditional.webp";
import img_equatorialguineaplantain from "./assets/equatorialguineaplantain.webp";

const IMAGES = {
  gavi: img_gavi,
  mariachi: img_mariachi,
  ricebeans: img_ricebeans,
  baseball: img_baseball,
  beach: img_beach,
  bukele: img_bukele,
  volcano: img_volcano,
  hangingbridge: img_hangingbridge,
  soup: img_soup,
  panamacanal: img_panamacanal,
  roses: img_roses,
  quito: img_quito,
  machupicchu: img_machupicchu,
  mate: img_mate,
  messi: img_messi,
  pupusas: img_pupusas,
  havanacar: img_havanacar,
  alhambra: img_alhambra,
  tangoreal: img_tangoreal,
  andesmountains: img_andesmountains,
  llama: img_llama,
  taco: img_taco,
  paella: img_paella,
  spainofficialflag: img_spainofficialflag,
  uruguayteam: img_uruguayteam,
  moai: img_moai,
  chileempanada: img_chileempanada,
  colombiaemerald: img_colombiaemerald,
  peruofficialflag: img_peruofficialflag,
  colombiacoffee: img_colombiacoffee,
  colombiaforest: img_colombiaforest,
  argentinasteak: img_argentinasteak,
  costaricaofficialflag: img_costaricaofficialflag,
  uruguaystadium: img_uruguaystadium,
  mangu: img_mangu,
  spainflamenco: img_spainflamenco,
  cubasalsa: img_cubasalsa,
  costaricasloth: img_costaricasloth,
  atacama: img_atacama,
  chichenitza: img_chichenitza,
  mexicoofficialflag: img_mexicoofficialflag,
  guatemalatikal: img_guatemalatikal,
  guatemalavolcano: img_guatemalavolcano,
  guatemalaatitlan: img_guatemalaatitlan,
  guatemalaofficialflag: img_guatemalaofficialflag,
  hondurasbaleadas: img_hondurasbaleadas,
  hondurascoral: img_hondurascoral,
  hondurasofficialflag: img_hondurasofficialflag,
  nicaraguashark: img_nicaraguashark,
  nicaragualake: img_nicaragualake,
  nicaraguaofficialflag: img_nicaraguaofficialflag,
  puertoricobadbunny: img_puertoricobadbunny,
  puertoricobiobay: img_puertoricobiobay,
  puertoricoofficialflag: img_puertoricoofficialflag,
  venezuelaangel: img_venezuelaangel,
  venezuelamaduro: img_venezuelamaduro,
  venezuelaoil: img_venezuelaoil,
  venezuelaofficialflag: img_venezuelaofficialflag,
  boliviaofficialflag: img_boliviaofficialflag,
  boliviauyuni: img_boliviauyuni,
  boliviaflamingo: img_boliviaflamingo,
  boliviavalle: img_boliviavalle,
  paraguayofficialflag: img_paraguayofficialflag,
  paraguaypalacio: img_paraguaypalacio,
  paraguayitaipu: img_paraguayitaipu,
  paraguayharp: img_paraguayharp,
  equatorialguineatraditional: img_equatorialguineatraditional,
  equatorialguineaplantain: img_equatorialguineaplantain,
};


const preloadAllImages = () => {
  const sources = Object.values(IMAGES);
  let index = 0;

  const loadBatch = () => {
    const batchEnd = Math.min(index + 6, sources.length);
    while (index < batchEnd) {
      const image = new Image();
      image.decoding = "async";
      image.src = sources[index];
      index += 1;
    }

    if (index < sources.length) {
      window.setTimeout(loadBatch, 120);
    }
  };

  window.setTimeout(loadBatch, 250);
};

/* ---------------- Flags ---------------- */
function Star({ cx, cy, r = 1.6, fill = "#fff", points = 5 }) {
  const inner = r * 0.42;
  const pts = Array.from({ length: points * 2 }, (_, i) => {
    const rr = i % 2 === 0 ? r : inner;
    const a = -Math.PI / 2 + (i * Math.PI) / points;
    return `${cx + Math.cos(a) * rr},${cy + Math.sin(a) * rr}`;
  }).join(" ");
  return <polygon points={pts} fill={fill} />;
}

function SunFace({ cx, cy, r = 2.4, ray = 3.8 }) {
  const rays = Array.from({ length: 16 }, (_, i) => {
    const a = (i * Math.PI) / 8;
    const r1 = r + 0.25;
    const r2 = i % 2 === 0 ? ray : ray - 0.8;
    const x1 = cx + Math.cos(a - 0.08) * r1;
    const y1 = cy + Math.sin(a - 0.08) * r1;
    const x2 = cx + Math.cos(a) * r2;
    const y2 = cy + Math.sin(a) * r2;
    const x3 = cx + Math.cos(a + 0.08) * r1;
    const y3 = cy + Math.sin(a + 0.08) * r1;
    return <polygon key={i} points={`${x1},${y1} ${x2},${y2} ${x3},${y3}`} fill="#F6B40E" />;
  });
  return (
    <g>
      {rays}
      <circle cx={cx} cy={cy} r={r} fill="#F6B40E" stroke="#9A6A00" strokeWidth="0.2" />
      <circle cx={cx - 0.7} cy={cy - 0.35} r="0.18" fill="#7a4d00" />
      <circle cx={cx + 0.7} cy={cy - 0.35} r="0.18" fill="#7a4d00" />
      <path d={`M${cx - 0.8} ${cy + 0.7} Q${cx} ${cy + 1.2} ${cx + 0.8} ${cy + 0.7}`} fill="none" stroke="#7a4d00" strokeWidth="0.16" strokeLinecap="round" />
    </g>
  );
}

function Flag({ k, size = 1 }) {
  const s = { width: "100%", height: "100%", display: "block" };
  switch (k) {
    case "spain":
      return <img src={IMAGES.spainofficialflag} alt="Bandera de España" style={s} />;
    case "equatorialguinea":
      return (
        <svg viewBox="0 0 30 20" style={s}>
          <rect width="30" height="6.67" fill="#3E9A57" />
          <rect y="6.67" width="30" height="6.66" fill="#FFFFFF" />
          <rect y="13.33" width="30" height="6.67" fill="#E3212F" />
          <polygon points="0,0 9.2,10 0,20" fill="#4C8BC9" />
          <g transform="translate(18 10)">
            <path d="M-2.2 -2.1 H2.2 V2.2 Q0 3.3 -2.2 2.2 Z" fill="#F5F5F5" stroke="#777" strokeWidth="0.22" />
            <path d="M0 -1.5 V1.25" stroke="#7A4B22" strokeWidth="0.38" strokeLinecap="round" />
            <circle cx="0" cy="-1.45" r="1.15" fill="#3E9A57" />
            {[-2.3,-1.4,-0.5,0.5,1.4,2.3].map((sx) => (
              <circle key={sx} cx={sx} cy="-3.15" r="0.28" fill="#F2C94C" />
            ))}
          </g>
        </svg>
      );
    case "mexico":
      return <img src={IMAGES.mexicoofficialflag} alt="Bandera de México" style={s} />;
    case "cuba":
      return (
        <svg viewBox="0 0 30 20" style={s}>
          <rect width="30" height="20" fill="#fff" />
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} y={i * 4} width="30" height="4" fill={i % 2 === 0 ? "#002A8F" : "#fff"} />
          ))}
          <polygon points="0,0 0,20 9,10" fill="#CE1126" />
          <Star cx={4.6} cy={10} r={2.05} fill="#fff" />
        </svg>
      );
    case "dominicanrepublic":
      return (
        <svg viewBox="0 0 30 20" style={s}>
          <rect width="30" height="20" fill="#002D62" />
          <rect x="13" width="4" height="20" fill="#fff" />
          <rect y="8" width="30" height="4" fill="#fff" />
          <rect width="13" height="8" fill="#002D62" />
          <rect x="17" width="13" height="8" fill="#CE1126" />
          <rect width="13" height="8" y="12" fill="#CE1126" />
          <rect x="17" y="12" width="13" height="8" fill="#002D62" />
          <rect x="13.7" y="8.7" width="2.6" height="2.6" rx="0.45" fill="#E6D0A8" stroke="#8A6B3D" strokeWidth="0.15" />
          <rect x="14.35" y="9.15" width="1.3" height="1.7" fill="#0B8E36" />
        </svg>
      );
    case "guatemala":
      return <img src={IMAGES.guatemalaofficialflag} alt="Bandera de Guatemala" style={s} />;
    case "honduras":
      return <img src={IMAGES.hondurasofficialflag} alt="Bandera de Honduras" style={s} />;
    case "nicaragua":
      return <img src={IMAGES.nicaraguaofficialflag} alt="Bandera de Nicaragua" style={s} />;
    case "puertorico":
      return <img src={IMAGES.puertoricoofficialflag} alt="Bandera de Puerto Rico" style={s} />;
    case "elsalvador":
      return (
        <svg viewBox="0 0 30 20" style={s}>
          <rect width="30" height="6.66" fill="#0047AB" />
          <rect y="6.66" width="30" height="6.66" fill="#fff" />
          <rect y="13.33" width="30" height="6.66" fill="#0047AB" />
          <polygon points="15,8.2 16.1,10.6 13.9,10.6" fill="#C0932B" />
          <circle cx="15" cy="10.1" r="1.2" fill="none" stroke="#0B8E36" strokeWidth="0.22" />
        </svg>
      );
    case "costarica":
      return <img src={IMAGES.costaricaofficialflag} alt="Bandera de Costa Rica" style={s} />;
    case "panama":
      return (
        <svg viewBox="0 0 30 20" style={s}>
          <rect width="15" height="10" fill="#fff" />
          <rect x="15" width="15" height="10" fill="#DA121A" />
          <rect y="10" width="15" height="10" fill="#0033A0" />
          <rect x="15" y="10" width="15" height="10" fill="#fff" />
          <Star cx={7.5} cy={5} r={2.05} fill="#0033A0" />
          <Star cx={22.5} cy={15} r={2.05} fill="#DA121A" />
        </svg>
      );
    case "colombia":
      return (
        <svg viewBox="0 0 30 20" style={s}>
          <rect width="30" height="10" fill="#FCD116" />
          <rect y="10" width="30" height="5" fill="#003893" />
          <rect y="15" width="30" height="5" fill="#CE1126" />
        </svg>
      );
    case "venezuela":
      return <img src={IMAGES.venezuelaofficialflag} alt="Bandera de Venezuela" style={s} />;
    case "ecuador":
      return (
        <svg viewBox="0 0 30 20" style={s}>
          <rect width="30" height="10" fill="#FFDD00" />
          <rect y="10" width="30" height="5" fill="#0F47AF" />
          <rect y="15" width="30" height="5" fill="#EF3340" />
          <g transform="translate(15 10)">
            <ellipse rx="2.05" ry="2.65" fill="#8C5B1B" opacity="0.22" />
            <path d="M-1.05 -0.4 h2.1 v2.2 h-2.1z" fill="#0F47AF" />
            <path d="M-1.2 -1.25 q1.2 -0.95 2.4 0" fill="none" stroke="#4b2e14" strokeWidth="0.28" />
          </g>
        </svg>
      );
    case "bolivia":
      return <img src={IMAGES.boliviaofficialflag} alt="Bandera de Bolivia" style={s} />;
    case "peru":
      return <img src={IMAGES.peruofficialflag} alt="Bandera de Perú" style={s} />;
    case "paraguay":
      return <img src={IMAGES.paraguayofficialflag} alt="Bandera de Paraguay" style={s} />;
    case "uruguay":
      return (
        <svg viewBox="0 0 30 20" style={s}>
          <rect width="30" height="20" fill="#fff" />
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} y={2.2 + i * 4.4} width="30" height="2.2" fill="#0038A8" />
          ))}
          <rect width="11" height="11" fill="#fff" stroke="#0038A8" strokeWidth="0.3" />
          <SunFace cx={5.5} cy={5.5} r={2.1} ray={3.7} />
        </svg>
      );
    case "chile":
      return (
        <svg viewBox="0 0 30 20" style={s}>
          <rect width="30" height="10" fill="#fff" />
          <rect y="10" width="30" height="10" fill="#D52B1E" />
          <rect width="10" height="10" fill="#0039A6" />
          <Star cx={5} cy={5} r={2.25} fill="#fff" />
        </svg>
      );
    case "argentina":
      return (
        <svg viewBox="0 0 30 20" style={s}>
          <rect width="30" height="6.66" fill="#74ACDF" />
          <rect y="6.66" width="30" height="6.66" fill="#fff" />
          <rect y="13.33" width="30" height="6.66" fill="#74ACDF" />
          <SunFace cx={15} cy={10} r={1.65} ray={3.05} />
        </svg>
      );
    default:
      return <svg viewBox="0 0 30 20" style={s}><rect width="30" height="20" fill="#ccc" /></svg>;
  }
}

/* ---------------- Data ---------------- */
const COUNTRIES = [
  {
    key: "spain", name: "España", code: "ES", flag: "spain", x: 491.2, y: 150.3,
    person: { title: "غافي", caption: "لاعب وسط شاب يلمع مع نادي برشلونة والمنتخب الإسباني", img: IMAGES.gavi },
    food: { title: "الباييلا", caption: "طبق الأرز الإسباني الأشهر، أصله من مدينة فالنسيا", img: IMAGES.paella },
    landmark: { title: "قصر الحمراء", caption: "قصر إسلامي تاريخي مطلّ على مدينة غرناطة", img: IMAGES.alhambra },
    fact: "إسبانيا هي أكبر منتج لزيت الزيتون في العالم.",
  },
  {
    key: "equatorialguinea", name: "Equatorial Guinea", code: "GQ", flag: "equatorialguinea", x: 529.1, y: 252.4,
    person: { title: "الزي التقليدي", caption: "أزياء إفريقية ملونة مزينة بنقوش زاهية، وتُرتدى في المناسبات والاحتفالات الشعبية", img: IMAGES.equatorialguineatraditional },
    food: { title: "الموز المطبوخ (Plantain)", caption: "أكلة يومية أساسية في غينيا الاستوائية", img: IMAGES.equatorialguineaplantain },
    fact: "غينيا الاستوائية هي الدولة الوحيدة في أفريقيا التي تُعد الإسبانية لغةً رسمية.",
  },
  {
    key: "mexico", name: "México", code: "MX", flag: "mexico", x: 232.6, y: 205.4,
    person: { title: "الماريا تشي", caption: "رمز الفولكلور المكسيكي بأزيائه وموسيقاه التقليدية", img: IMAGES.mariachi },
    food: { title: "التاكو", caption: "طبق تقليدي مكسيكي شهير حول العالم", img: IMAGES.taco },
    landmark: { title: "تشيتشن إيتزا", caption: "موقع أثري شهير لحضارة المايا في المكسيك", img: IMAGES.chichenitza },
    fact: "تحتفل المكسيك كل عام بعيد الموتى حيث تُزيَّن الشوارع بالورود والألوان تكريمًا لذكرى الراحلين.",
  },
  {
    key: "guatemala", name: "Guatemala", code: "GT", flag: "guatemala", x: 254.0, y: 216.2,
    person: { title: "Tikal", caption: "إحدى أكبر مدن حضارة المايا القديمة، وموقع مُدرج على قائمة التراث العالمي", img: IMAGES.guatemalatikal },
    landmark: { title: "البراكين", caption: "تشتهر غواتيمالا بطبيعتها البركانية، وتضم أكثر من 30 بركانًا", img: IMAGES.guatemalavolcano },
    extra: { title: "بحيرة أتيتلان (Atitlán)", caption: "بحيرة محاطة بالبراكين والجبال، وتُعد من أجمل البحيرات في العالم", img: IMAGES.guatemalaatitlan },
    fact: "تُعرف غواتيمالا بأنها قلب حضارة المايا في أمريكا الوسطى.",
  },
  {
    key: "honduras", name: "Honduras", code: "HN", flag: "honduras", x: 267.3, y: 217.2,
    food: { title: "Baleadas", caption: "خبز تورتيلا محشو بالفاصوليا والجبن، من أشهر الأكلات في هندوراس", img: IMAGES.hondurasbaleadas },
    landmark: { title: "المرجان", caption: "تشتهر هندوراس بثاني أكبر حاجز مرجاني في العالم", img: IMAGES.hondurascoral },
    fact: "يعني اسم هندوراس بالإسبانية «الأعماق»، وسُمّيت بذلك بسبب المياه العميقة التي شاهدها كريستوفر كولومبس.",
  },
  {
    key: "nicaragua", name: "Nicaragua", code: "NI", flag: "nicaragua", x: 270.2, y: 224.4,
    person: { title: "أسماك القرش في البحيرة", caption: "تشتهر نيكاراغوا بوجود أسماك القرش في البحيرة، وهي من أغرب الظواهر الطبيعية فيها", img: IMAGES.nicaraguashark },
    landmark: { title: "بحيرة نيكاراغوا", caption: "أكبر بحيرة في أمريكا الوسطى، ومن أبرز المعالم الطبيعية في البلاد", img: IMAGES.nicaragualake },
    fact: "جزيرة أوميتيبي هي أكبر جزيرة بركانية تقع داخل بحيرة في العالم.",
  },
  {
    key: "cuba", name: "Cuba", code: "CU", flag: "cuba", x: 285.8, y: 200.0,
    person: { title: "راقصة السالسا", caption: "السالسا من أشهر الرقصات المرتبطة بالهوية الكوبية", img: IMAGES.cubasalsa },
    food: { title: "أرزّ وفاصولياء سوداء", caption: "طبق كوبي تقليدي يرافق معظم الوجبات", img: IMAGES.ricebeans },
    landmark: { title: "سيارة كلاسيكية في هافانا", caption: "رمز كوبا الشهير الذي يزيّن شوارع هافانا القديمة", img: IMAGES.havanacar },
    fact: "تشتهر كوبا بأنها من أكثر الدول التي تنتشر فيها الموسيقى والرقص في الشوارع.",
  },
  {
    key: "dominicanrepublic", name: "República Dominicana", code: "DO", flag: "dominicanrepublic", x: 311.1, y: 207.3,
    person: { title: "نجم البيسبول", caption: "البيسبول هو الرياضة الأولى في جمهورية الدومينيكان", img: IMAGES.baseball },
    food: { title: "مانغو (Mangú)", caption: "طبق الموز المهروس التقليدي وأساس الإفطار الدومينيكاني", img: IMAGES.mangu },
    landmark: { title: "بونتا كانا", caption: "شواطئ كاريبية بيضاء من أجمل وجهات العالم", img: IMAGES.beach },
    fact: "كانت جمهورية الدومينيكان من أوائل الأماكن التي بدأ فيها الاستعمار الأوروبي في الأمريكتين.",
  },
  {
    key: "puertorico", name: "Puerto Rico", code: "PR", flag: "puertorico", x: 332.8, y: 208.1,
    person: { title: "Bad Bunny", caption: "من أشهر الفنانين المعاصرين من بورتوريكو، وساهم في انتشار الموسيقى اللاتينية عالميًا", img: IMAGES.puertoricobadbunny },
    landmark: { title: "خلجان متوهجة حيويًا", caption: "تشتهر بورتوريكو بخلجانها المتوهجة حيويًا، وهي ظاهرة طبيعية نادرة ومبهرة", img: IMAGES.puertoricobiobay },
    fact: "بورتوريكو ليست دولة مستقلة، بل إقليم تابع للولايات المتحدة.",
  },
  {
    key: "elsalvador", name: "El Salvador", code: "SV", flag: "elsalvador", x: 260.3, y: 220.5,
    person: { title: "رئيس السلفادور", caption: "نجيب بوكيلي، رئيس جمهورية السلفادور الحالي", img: IMAGES.bukele },
    food: { title: "بوبوسا (Pupusas)", caption: "الطبق الوطني السلفادوري المحشو بالجبن واللحم", img: IMAGES.pupusas },
    landmark: { title: "بركان في السلفادور", caption: "السلفادور أرض البراكين النشطة", img: IMAGES.volcano },
    fact: "السلفادور أول دولة في العالم تجعل البيتكوين عملة رسمية.",
  },
  {
    key: "costarica", name: "Costa Rica", code: "CR", flag: "costarica", x: 273.3, y: 230.9,
    person: { title: "حيوان الكسلان", caption: "من أشهر الحيوانات في غابات كوستاريكا، ويرمز للطبيعة الهادئة والحياة البرية الغنية", img: IMAGES.costaricasloth },
    landmark: { title: "غابة مونتيفيردي السحابية", caption: "جسر معلّق فوق غابة استوائية كثيفة الضباب", img: IMAGES.hangingbridge },
    fact: "كوستاريكا لا تملك جيشًا منذ عام 1948.",
  },
  {
    key: "panama", name: "Panamá", code: "PA", flag: "panama", x: 282.3, y: 232.9,
    food: { title: "سانكوتشو (Sancocho)", caption: "حساء بنمي تقليدي بالدجاج والذرة والخضار", img: IMAGES.soup },
    landmark: { title: "قناة بنما", caption: "أحد أهم الممرات الملاحية في العالم", img: IMAGES.panamacanal },
    fact: "في بنما يمكنك مشاهدة شروق الشمس على المحيط الأطلسي وغروبها على المحيط الهادئ.",
  },
  {
    key: "colombia", name: "Colombia", code: "CO", flag: "colombia", x: 300.5, y: 244.2,
    person: { title: "القهوة الكولومبية", caption: "كولومبيا من أبرز منتجي القهوة في العالم وتشتهر بجودة حبوبها", img: IMAGES.colombiacoffee },
    landmark: { title: "غابات الأمازون", caption: "جزء من أكبر غابة استوائية في العالم", img: IMAGES.colombiaforest },
    extra: { title: "الزمرد الكولومبي", caption: "تشتهر كولومبيا عالميًا بأحجار الزمرد وتُعد من أهم الدول في إنتاجه", img: IMAGES.colombiaemerald },
    fact: "عاصمة كولومبيا هي بوغوتا.",
  },
  {
    key: "venezuela", name: "Venezuela", code: "VE", flag: "venezuela", x: 329.6, y: 240.7,
    person: { title: "الرئيس نيكولاس مادورو", caption: "اختطفت الولايات المتحده رئيس فنزويلا في بداية 2026", img: IMAGES.venezuelamaduro },
    landmark: { title: "شلال أنجل", caption: "أعلى شلال في العالم، ويُعد من أشهر الظواهر الطبيعية في فنزويلا", img: IMAGES.venezuelaangel },
    extra: { title: "النفط", caption: "ثاني اكبر احتياطي نفط في العالم", img: IMAGES.venezuelaoil },
    fact: "عانت فنزويلا من تضخم مفرط أدى إلى انهيار قيمة عملتها وارتفاع الأسعار بشكل كبير جدًا.",
  },
  {
    key: "ecuador", name: "Ecuador", code: "EC", flag: "ecuador", x: 288.6, y: 257.1,
    person: { title: "مزارع ورود", caption: "الإكوادور من أكبر مصدّري الورود في العالم", img: IMAGES.roses },
    landmark: { title: "مدينة كيتو", caption: "العاصمة المرتفعة عند خط الاستواء", img: IMAGES.quito },
    fact: "اسم الإكوادور يعني «خط الاستواء» لأنها تقع عليه تقريبًا.",
  },
  {
    key: "peru", name: "Perú", code: "PE", flag: "peru", x: 297.9, y: 280.8,
    person: { title: "اللاما", caption: "اللاما من أشهر الحيوانات المرتبطة بمرتفعات الأنديز في بيرو وأمريكا الجنوبية", img: IMAGES.llama },
    landmark: { title: "جبال الأنديز", caption: "سلسلة جبلية تمتد بمحاذاة غرب أمريكا الجنوبية وتُعد من أبرز معالم بيرو الطبيعية", img: IMAGES.andesmountains },
    fact: "جبال الأنديز هي أطول سلسلة جبلية قارية في العالم وتمتد عبر عدة دول في أمريكا الجنوبية.",
  },
  {
    key: "bolivia", name: "Bolivia", code: "BO", flag: "bolivia", x: 321.5, y: 303.3,
    landmark: { title: "Salar de Uyuni", caption: "أكبر سهل ملحي في العالم، ومن أشهر المعالم الطبيعية في بوليفيا", img: IMAGES.boliviauyuni },
    person: { title: "الفلامنجو", caption: "من أهم مواطن طيور الفلامنجو في أمريكا الجنوبية، حيث تعيش في مرتفعات الأنديز والبحيرات المالحة", img: IMAGES.boliviaflamingo },
    extra: { title: "Valle de las Ánimas", caption: "وادي الأرواح، أحد أكثر المناظر الطبيعية تميّزًا في بوليفيا", img: IMAGES.boliviavalle },
    fact: "بوليفيا لديها عاصمتان: لاباز، أعلى عاصمة إدارية في العالم، وسوكري العاصمة الدستورية.",
  },
  {
    key: "paraguay", name: "Paraguay", code: "PY", flag: "paraguay", x: 336.3, y: 321.8,
    landmark: { title: "Palacio de los López", caption: "قصر لوبيز – المقر الرئاسي وأشهر مبنى في البلاد", img: IMAGES.paraguaypalacio },
    extra: { title: "سد Itaipu", caption: "أحد أكبر محطات توليد الطاقة الكهرومائية في العالم", img: IMAGES.paraguayitaipu },
    person: { title: "🎵 القيثارة الباراغوانية", caption: "القيثارة الباراغوانية من أبرز الرموز الموسيقية والثقافية في باراغواي", img: IMAGES.paraguayharp },
    fact: "تمتلك باراغواي لغتين رسميتين، ومعظم السكان يتحدثون الإسبانية والغوارانية معًا.",
  },
  {
    key: "uruguay", name: "Uruguay", code: "UY", flag: "uruguay", x: 349.1, y: 348.4,
    person: { title: "منتخب الأوروغواي", caption: "كرة القدم شغف وطني في الأوروغواي، والمنتخب من أهم رموز البلد", img: IMAGES.uruguayteam },
    food: { title: "شراب المتّة", caption: "المشروب التقليدي الذي لا يفارق الأوروغوايّين", img: IMAGES.mate },
    landmark: { title: "ملعب سنتيناريو", caption: "أحد أهم ملاعب كرة القدم التاريخية في أمريكا الجنوبية", img: IMAGES.uruguaystadium },
    fact: "تولّد الأوروغواي معظم كهربائها من مصادر الطاقة المتجددة.",
  },
  {
    key: "chile", name: "Chile", code: "CL", flag: "chile", x: 309.8, y: 344.6,
    food: { title: "إمبانادا تشيلينية", caption: "فطيرة محشوة باللحم، من أشهر الأطباق التشيلية", img: IMAGES.chileempanada },
    landmark: { title: "جزيرة الفصح (Moai)", caption: "تماثيل المواي الشهيرة في جزيرة الفصح من أبرز معالم تشيلي وأكثرها تميّزًا", img: IMAGES.moai },
    extra: { title: "صحراء أتاكاما", caption: "من أشهر معالم تشيلي، وتُعرف بأنها من أكثر الصحارى جفافًا في العالم", img: IMAGES.atacama },
    fact: "تشيلي من أطول دول العالم شكلًا.",
  },
  {
    key: "argentina", name: "Argentina", code: "AR", flag: "argentina", x: 343.0, y: 347.6,
    person: { title: "ليونيل ميسي", caption: "أعظم لاعب أرجنتيني في التاريخ وبطل كأس العالم", img: IMAGES.messi },
    food: { title: "الستيك الأرجنتيني", caption: "الأرجنتين من أكبر منتجي ومستهلكي اللحم البقري عالميًا", img: IMAGES.argentinasteak },
    landmark: { title: "راقصا تانغو", caption: "رقصة شغف وُلدت في شوارع بوينس آيرس", img: IMAGES.tangoreal },
    fact: "تقع في الأرجنتين أعلى قمة في أمريكا الجنوبية وهي جبل أكونكاغوا.",
  },
];


const VB = { x: 130, y: 75, w: 420, h: 350 };

const GEO = { lonMin: -137, lonMax: 18, latMin: -64, latMax: 69 };
const MAP_LON_LINES = [-120, -100, -80, -60, -40, -20, 0];
const MAP_LAT_LINES = [-60, -40, -20, 0, 20, 40, 60];
const mapX = (lon) => VB.x + ((lon - GEO.lonMin) / (GEO.lonMax - GEO.lonMin)) * VB.w;
const mapY = (lat) => VB.y + ((GEO.latMax - lat) / (GEO.latMax - GEO.latMin)) * VB.h;

const INITIAL_MAP_VIEW = { ...VB };
const MIN_MAP_WIDTH = VB.w / 4.2;
const MAX_MAP_WIDTH = VB.w;
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

function clampMapView(view) {
  const w = clamp(view.w, MIN_MAP_WIDTH, MAX_MAP_WIDTH);
  const h = w * (VB.h / VB.w);
  return {
    x: clamp(view.x, VB.x, VB.x + VB.w - w),
    y: clamp(view.y, VB.y, VB.y + VB.h - h),
    w,
    h,
  };
}

function zoomMapView(view, factor, focusX = view.x + view.w / 2, focusY = view.y + view.h / 2) {
  const nextW = clamp(view.w * factor, MIN_MAP_WIDTH, MAX_MAP_WIDTH);
  const nextH = nextW * (VB.h / VB.w);
  const relX = (focusX - view.x) / view.w;
  const relY = (focusY - view.y) / view.h;

  return clampMapView({
    x: focusX - relX * nextW,
    y: focusY - relY * nextH,
    w: nextW,
    h: nextH,
  });
}
const WORLD_LAND = ["M550.0 144.2L547.3 143.4L549.3 143.9L547.0 142.4L545.6 142.1L544.3 141.5L542.3 140.3L541.5 137.9L540.1 137.2L539.3 138.3L538.1 137.3L536.8 136.1L534.9 137.0L535.0 138.6L534.8 140.2L538.1 142.0L539.1 144.1L540.6 145.5L543.2 146.3L545.0 146.3L547.4 148.5L548.6 149.2L550.0 149.6L550.0 151.3L548.7 150.5L547.0 150.2L546.3 151.4L547.7 152.9L547.0 154.1L546.1 155.5L544.8 156.8L543.6 156.0L545.0 154.7L543.7 151.2L542.2 150.9L541.3 149.6L539.9 149.1L538.4 148.0L536.6 148.1L534.3 146.7L532.7 145.3L531.3 145.0L530.3 143.9L529.2 142.2L528.8 140.9L526.2 139.9L524.3 139.9L523.1 141.1L520.7 141.6L519.5 142.3L518.0 143.1L516.6 142.9L514.9 142.6L512.5 142.2L510.7 142.7L509.5 143.8L510.2 145.2L509.2 146.8L507.4 147.5L503.9 148.6L503.0 149.8L501.2 151.5L500.3 152.8L501.2 154.3L499.9 155.7L499.2 157.1L497.9 157.7L496.4 158.6L495.5 159.9L493.9 160.0L492.0 160.0L489.3 160.0L487.2 160.7L486.0 161.8L484.1 160.4L482.5 158.7L481.1 158.6L479.5 159.1L478.1 158.8L477.5 157.3L477.4 155.7L476.1 154.8L475.9 153.3L477.2 150.9L477.7 149.6L477.6 148.2L477.1 145.8L477.5 144.3L476.3 143.5L477.3 142.5L478.7 142.4L479.8 141.4L481.6 141.9L484.3 141.9L485.8 142.0L489.1 142.4L490.9 142.1L493.1 142.6L495.5 142.7L496.9 142.3L497.8 139.4L498.3 136.7L499.5 138.0L497.9 136.3L498.2 134.7L496.3 134.2L495.8 132.8L494.3 132.1L493.2 131.2L491.7 130.8L490.3 130.7L488.4 130.2L490.0 129.6L488.3 129.4L490.4 128.3L492.0 128.2L493.9 129.0L495.7 128.6L497.5 128.6L497.0 127.1L496.0 125.7L497.8 125.8L500.6 126.9L502.5 126.4L504.2 125.2L505.3 124.4L505.5 122.7L508.0 122.2L510.7 121.3L512.7 121.4L510.5 121.0L512.7 121.2L512.1 119.8L513.7 118.5L514.1 117.2L515.6 117.8L517.1 118.2L515.7 117.4L517.2 116.1L519.7 115.9L521.1 116.3L522.8 115.2L524.4 115.7L526.3 114.9L527.9 115.7L526.1 114.7L524.5 113.7L524.6 112.2L523.7 110.3L523.2 107.8L524.5 106.3L526.7 106.2L528.2 105.0L530.1 104.6L529.8 106.0L529.2 107.3L530.6 107.8L529.8 108.9L527.9 109.6L527.4 111.1L527.9 112.5L528.7 113.6L530.2 113.7L531.5 114.4L532.9 114.1L535.1 113.2L536.5 113.3L537.7 114.2L539.9 115.1L541.2 114.7L545.0 113.8L549.9 112.3L550.0 144.2Z", "M550.0 91.2L549.3 92.4L548.2 93.6L547.5 95.0L548.2 96.4L549.3 97.4L550.0 101.3L548.5 101.6L547.2 102.2L545.1 102.3L546.7 102.4L546.8 103.8L546.4 105.1L546.2 106.5L545.2 107.6L544.2 109.0L542.8 108.9L541.0 108.8L539.8 109.6L538.9 110.7L537.4 111.0L535.9 110.8L534.9 108.4L536.3 107.7L534.7 106.8L534.0 105.4L532.9 104.3L533.5 103.0L532.6 104.1L532.6 102.7L531.3 101.4L530.2 100.5L530.1 99.0L529.0 99.8L529.5 101.1L527.8 101.4L526.4 101.6L525.4 102.7L523.9 103.4L521.8 103.9L520.3 104.0L519.0 103.6L516.6 102.5L518.3 101.7L519.0 100.5L517.5 100.4L519.1 99.8L517.4 100.4L516.0 100.1L517.3 99.3L518.3 98.3L519.7 97.4L517.9 97.7L516.9 98.7L515.3 97.9L516.8 97.5L515.1 97.0L516.4 96.4L515.0 96.5L517.4 95.7L519.2 95.6L520.5 96.4L522.1 95.4L520.0 95.8L518.1 95.6L515.9 95.9L514.7 94.9L517.1 94.9L515.3 94.7L516.7 93.7L518.8 93.9L517.0 93.8L515.3 93.7L516.7 93.2L518.3 93.3L519.5 92.2L520.7 93.2L519.7 92.2L518.2 92.2L519.6 91.7L521.7 92.1L523.3 91.6L521.1 91.6L522.3 90.9L524.3 91.7L522.9 90.7L524.3 91.2L525.6 90.2L524.3 89.8L525.7 89.6L527.2 89.4L529.0 89.9L530.9 89.6L532.4 88.7L529.9 88.7L528.1 89.5L529.0 88.4L530.2 87.2L532.0 87.0L533.4 87.0L532.1 86.3L534.2 85.6L531.6 86.2L533.0 85.8L534.3 85.0L536.3 84.7L534.7 85.1L535.8 84.3L537.0 83.3L535.6 82.7L537.8 82.3L539.6 82.0L536.5 82.4L538.0 82.1L536.5 82.0L538.2 81.5L539.0 80.1L541.4 79.6L542.9 79.8L541.1 79.6L542.5 78.9L544.3 78.7L542.5 78.8L544.2 78.4L542.9 78.0L541.2 78.5L542.5 77.9L544.2 77.9L542.6 77.5L544.0 77.4L546.0 78.1L545.0 76.8L546.8 77.2L545.4 76.6L546.8 76.8L548.2 77.1L549.7 76.5L547.5 76.4L546.0 76.5L547.2 75.7L549.2 75.9L550.0 91.2Z", "M550.0 339.3L548.0 336.4L546.8 333.1L545.9 331.9L544.1 330.5L542.7 328.5L542.1 326.9L541.8 325.2L541.5 323.8L541.2 321.7L540.4 319.8L540.3 318.2L540.3 316.8L540.2 315.2L539.0 313.9L537.6 311.5L537.0 309.8L535.3 306.8L533.8 305.2L533.2 303.9L533.3 299.9L533.0 298.3L533.9 296.7L534.5 295.4L534.7 293.6L535.2 291.9L536.4 290.7L537.6 289.6L538.6 287.6L538.8 285.5L537.9 283.9L537.0 282.1L536.4 280.5L537.5 279.6L536.1 275.7L534.5 272.7L534.1 271.4L533.3 269.2L531.1 266.6L530.1 265.6L529.0 264.4L527.5 263.1L526.4 261.6L525.2 259.3L526.4 257.6L526.6 255.6L527.9 256.5L526.7 255.3L527.5 253.7L527.8 251.6L527.9 249.8L528.3 248.5L527.4 247.3L527.6 245.8L526.2 246.2L525.3 245.0L524.5 243.9L522.8 244.6L521.1 244.9L519.6 244.3L518.2 245.0L516.8 244.8L515.8 243.1L516.2 241.8L514.9 241.4L513.2 239.9L511.7 239.6L510.3 239.7L506.5 240.0L504.9 240.4L503.7 241.4L501.7 241.5L499.0 242.9L496.8 243.4L495.6 244.1L491.2 242.9L486.0 243.1L484.6 243.4L482.5 244.3L481.0 245.1L477.6 243.9L476.0 243.0L474.7 241.8L473.1 240.4L471.8 239.6L470.4 238.8L467.3 237.1L466.4 236.0L465.6 234.8L465.3 233.4L465.2 232.0L464.5 230.8L463.2 230.3L462.0 229.4L461.1 228.3L459.9 227.6L459.8 226.2L460.7 225.0L458.8 225.5L457.0 225.0L455.8 223.9L457.3 223.4L455.8 223.5L455.7 221.5L457.3 221.6L458.8 221.1L457.0 221.5L456.5 220.1L455.3 218.7L454.0 217.8L456.3 215.3L456.7 212.9L457.8 209.9L457.7 208.1L456.4 205.6L457.2 204.3L456.9 202.8L455.4 200.9L455.2 199.2L456.0 197.9L457.1 196.3L458.6 194.0L460.8 191.6L461.0 190.0L462.0 187.6L464.2 186.4L465.5 183.8L468.1 182.8L470.0 182.1L471.2 180.9L472.7 180.2L475.0 177.4L474.4 176.0L474.5 174.0L476.1 171.9L477.5 169.8L480.8 168.1L482.8 167.0L484.6 163.9L485.1 162.4L486.9 162.1L488.5 163.9L490.6 163.8L492.2 164.0L493.6 164.2L495.9 164.3L497.7 163.5L499.1 162.4L500.8 162.4L502.2 161.3L504.2 160.5L507.6 160.2L509.1 159.7L510.7 159.8L514.2 159.5L515.7 160.2L518.0 159.5L520.0 159.5L521.9 159.3L523.5 159.3L525.0 159.3L526.2 158.6L527.6 158.3L529.1 158.7L529.5 160.0L531.1 159.0L530.5 160.6L530.1 162.3L531.1 163.6L530.3 165.4L528.8 166.2L528.9 167.6L530.3 167.9L531.8 169.0L534.6 170.2L537.5 170.0L539.8 170.5L542.4 171.4L543.2 173.2L544.9 174.3L546.7 174.4L549.6 175.2L550.0 339.3Z", "M284.5 231.9L285.7 233.0L284.0 234.7L284.5 236.8L283.3 237.5L281.9 236.7L280.3 236.3L279.7 235.0L278.4 234.6L276.7 234.8L275.3 233.6L272.9 231.6L271.6 230.3L270.1 229.6L271.1 230.7L269.1 230.5L268.8 229.1L268.9 227.6L266.8 225.6L266.1 224.4L264.1 222.8L264.4 221.3L263.0 221.8L261.0 221.6L259.2 221.1L257.3 220.5L255.9 220.0L253.8 219.9L252.5 219.2L251.4 218.4L247.4 214.9L245.7 214.1L243.4 214.0L240.4 215.3L237.8 214.7L236.3 214.6L234.1 213.6L231.1 212.6L227.4 211.1L225.8 210.1L224.1 209.3L220.7 208.4L219.8 207.2L218.5 206.5L217.2 206.0L216.0 204.8L215.2 203.4L215.8 202.0L216.2 200.1L214.9 198.7L214.7 197.3L213.3 195.7L211.6 193.8L210.2 192.8L208.6 191.7L207.7 190.3L206.5 189.4L205.2 188.8L205.2 187.3L204.4 186.2L203.2 185.2L201.7 184.8L201.5 183.4L199.2 182.1L197.9 180.9L197.1 179.5L195.7 177.9L194.8 175.8L194.3 174.2L192.4 173.3L190.7 173.0L189.8 174.3L190.6 176.3L191.3 178.2L193.3 179.5L194.1 180.8L195.5 181.7L195.8 183.5L197.2 185.0L198.0 186.3L199.3 186.8L199.6 188.8L200.7 190.4L201.2 191.8L202.3 193.0L203.6 193.6L204.6 194.6L203.6 196.3L202.3 194.6L198.9 192.2L197.8 191.1L197.5 189.6L197.1 187.9L195.7 187.0L194.4 186.1L192.7 185.6L191.1 185.1L189.5 183.6L191.0 183.5L192.4 183.8L192.1 182.4L189.7 179.3L187.7 178.3L187.4 176.8L186.7 175.5L185.9 174.4L185.1 173.3L184.4 171.8L183.6 170.6L183.0 169.1L181.2 167.8L180.0 167.0L178.4 166.8L177.2 166.0L174.8 165.9L174.3 164.1L172.6 162.7L170.9 161.0L171.0 159.4L169.5 158.7L169.3 157.1L170.4 157.9L169.5 156.7L167.9 156.6L166.0 154.2L165.6 151.8L164.2 150.6L164.9 148.9L165.1 147.5L164.7 146.1L164.1 144.4L164.2 142.6L165.2 139.6L165.3 136.9L165.4 135.5L166.8 134.9L165.2 134.7L164.9 133.1L164.1 131.0L163.2 129.3L165.3 129.8L167.3 130.0L169.0 130.6L167.5 132.0L168.6 131.1L168.6 132.5L169.5 131.4L170.2 130.2L168.7 129.0L168.3 127.4L167.1 126.7L165.3 126.3L165.9 124.8L164.5 125.7L163.0 125.0L164.3 123.7L163.0 124.2L163.0 122.6L162.2 123.9L160.6 123.9L159.0 123.6L160.5 123.3L158.2 122.8L156.6 122.6L158.0 121.9L156.2 122.2L155.0 121.5L156.4 121.3L155.3 120.5L155.8 119.2L157.1 118.0L155.4 118.1L154.3 118.9L154.3 117.3L152.9 116.9L151.9 115.9L153.4 115.8L152.2 115.0L150.8 115.4L148.7 114.6L150.2 113.9L148.6 114.1L147.8 112.8L149.0 113.7L147.8 112.8L148.9 111.9L148.6 109.9L147.7 112.3L146.3 112.0L147.7 111.0L146.3 111.6L147.1 110.4L145.7 109.3L144.3 109.5L143.0 110.3L143.6 108.8L142.5 107.6L141.0 106.6L139.3 106.1L140.7 105.6L139.4 105.1L141.1 105.3L139.2 104.6L138.0 103.8L138.9 102.5L137.7 103.4L136.0 102.9L135.6 101.4L134.5 100.1L135.2 103.3L134.0 102.6L132.5 101.8L131.1 101.6L130.0 75.3L132.5 75.4L134.6 75.9L181.8 75.0L184.0 75.3L185.9 75.3L187.4 75.2L189.7 75.3L191.8 76.1L189.6 76.9L187.7 77.9L189.3 78.2L195.1 78.5L197.8 78.3L199.3 78.4L203.1 77.6L204.5 78.4L206.3 79.3L207.7 79.4L209.0 80.2L207.0 79.9L208.9 81.1L210.7 82.0L209.2 80.9L211.1 80.7L209.9 79.7L208.5 78.2L210.5 77.5L212.0 77.4L213.5 76.6L215.0 76.0L212.5 76.2L210.7 76.9L209.1 76.7L207.6 77.3L210.5 75.8L213.5 75.1L215.5 75.7L216.8 77.0L218.1 77.6L220.0 77.6L222.8 78.1L224.3 78.5L226.1 78.5L227.6 78.3L229.2 78.0L230.9 78.0L233.3 78.5L234.8 78.2L236.7 78.7L238.4 78.5L236.7 77.6L234.2 77.2L235.5 76.6L237.1 76.5L238.5 76.7L240.1 76.8L240.6 78.1L240.5 79.6L242.3 79.2L242.5 77.5L244.5 77.5L246.0 76.9L248.0 76.1L247.1 75.0L255.7 75.0L255.7 76.4L257.0 76.8L258.0 75.1L261.7 75.0L263.0 75.7L263.0 77.1L261.7 77.7L264.2 79.3L265.9 79.8L266.8 78.4L267.9 77.6L269.2 75.7L271.7 75.7L280.2 75.0L279.2 76.6L277.5 76.2L279.0 76.7L281.2 79.1L280.5 80.3L278.7 81.0L276.3 81.5L274.8 82.0L273.9 80.5L272.5 80.8L270.4 80.5L272.0 80.4L273.3 81.1L274.5 82.3L272.6 82.2L271.1 82.3L269.8 81.3L268.4 81.6L266.1 81.5L268.6 82.5L267.1 83.1L265.5 84.1L262.7 84.6L260.5 83.8L257.8 82.9L256.2 83.2L257.9 83.5L260.0 84.7L262.8 84.9L264.7 84.8L264.7 86.2L263.3 86.8L261.4 87.9L259.9 88.1L258.5 87.9L256.8 88.2L254.9 89.3L253.6 88.9L250.9 88.8L248.2 88.2L246.7 88.4L248.7 88.7L250.3 88.8L251.7 89.0L253.6 89.6L255.3 89.8L254.6 91.0L251.7 91.1L250.3 91.9L251.7 92.3L250.0 92.1L248.5 93.0L247.4 94.1L246.3 95.3L245.0 97.3L244.2 98.8L244.7 100.4L245.4 102.1L247.8 101.9L250.8 105.7L249.7 106.8L251.4 106.4L255.2 105.7L257.5 106.6L260.5 107.0L262.9 108.0L263.8 109.2L265.7 109.4L268.5 110.1L270.6 111.0L273.9 111.1L275.4 111.3L276.9 111.5L278.5 112.4L277.8 113.9L278.7 115.0L278.7 116.4L280.3 118.6L281.6 119.6L282.9 120.5L285.1 122.0L286.3 120.6L287.5 121.9L287.0 120.4L288.4 119.1L287.5 117.8L287.3 116.1L286.9 114.8L285.9 113.7L290.9 111.1L292.3 110.1L293.7 108.8L293.7 106.1L292.0 103.9L289.7 102.9L288.2 102.2L289.2 101.0L290.5 100.5L291.8 99.2L290.5 97.7L291.2 96.5L289.3 96.6L290.7 95.6L289.8 94.2L289.5 92.6L291.4 91.9L293.1 92.0L296.5 92.7L299.3 93.1L301.5 92.2L302.9 92.6L304.5 93.1L305.8 94.0L307.3 94.4L307.7 95.7L309.6 96.0L311.2 95.8L312.5 96.4L312.2 97.9L309.2 98.6L312.3 98.8L312.6 100.3L313.1 101.6L310.9 101.9L312.6 101.9L315.3 101.5L316.4 102.9L315.1 103.9L316.5 102.7L317.8 103.9L319.2 102.9L320.7 102.7L322.6 102.3L324.1 101.5L323.7 100.0L325.1 100.3L323.6 99.4L325.1 99.0L325.5 97.7L326.8 98.2L328.0 99.3L328.3 100.7L330.1 101.2L330.1 102.6L331.7 102.7L330.4 103.5L332.0 103.5L333.4 104.2L332.4 105.2L333.8 105.6L335.0 106.3L333.4 107.1L331.8 107.2L333.5 107.6L335.1 108.6L333.9 109.3L335.5 109.3L337.0 109.7L338.1 110.7L336.8 111.9L338.0 111.1L339.4 111.3L340.8 111.2L341.9 112.2L343.5 112.4L344.8 112.8L343.4 113.8L339.7 114.4L343.0 113.9L341.4 114.4L340.0 114.9L338.3 115.1L336.6 116.5L339.2 115.8L340.5 115.3L341.7 114.6L343.6 114.2L345.6 114.0L346.6 115.0L345.3 115.6L346.7 115.2L348.2 115.0L349.4 115.8L349.8 117.1L348.0 118.1L350.5 118.6L348.8 118.6L350.3 119.0L348.9 120.3L347.6 120.9L346.2 121.3L344.8 121.0L343.5 121.7L342.0 122.3L340.6 123.0L338.9 124.0L337.0 124.5L335.1 124.5L333.7 124.7L331.1 124.2L329.4 124.5L327.4 124.3L325.4 124.3L322.5 124.3L321.1 124.3L319.9 125.0L318.7 126.8L316.6 126.9L315.3 127.5L314.1 128.2L313.1 129.5L311.6 129.6L311.1 131.2L309.6 132.6L308.3 133.4L310.2 132.9L312.6 130.9L314.8 129.3L316.5 128.6L321.9 127.1L324.2 127.0L326.2 127.3L327.4 128.3L326.0 129.3L324.4 130.2L322.6 129.7L321.1 129.9L322.8 130.5L324.6 130.7L326.0 131.0L325.0 132.0L325.6 133.6L326.3 135.0L328.4 135.2L329.8 136.0L332.0 136.5L333.5 135.8L335.3 136.9L333.8 137.5L332.5 138.2L330.8 138.6L329.3 139.0L328.0 139.5L326.6 139.9L325.5 141.0L324.1 141.5L322.6 141.1L322.8 139.3L325.2 137.9L326.6 137.5L329.5 137.2L326.3 137.1L326.9 135.8L325.7 136.6L322.6 137.6L321.1 138.0L319.5 138.0L318.6 139.2L317.2 139.7L315.8 139.7L314.2 139.7L313.7 141.0L312.3 141.2L310.8 141.5L310.0 142.6L309.2 143.9L308.9 145.4L310.1 146.2L311.5 146.6L309.8 147.3L308.3 147.5L306.5 147.9L304.7 148.0L303.1 148.3L301.2 149.0L299.9 150.0L300.2 151.5L299.4 152.9L298.4 154.1L296.5 152.7L297.1 154.1L297.9 155.5L296.6 156.9L295.8 158.0L296.3 156.6L295.1 155.8L294.6 154.5L294.8 153.1L293.8 154.1L294.3 155.6L292.8 155.8L294.0 156.7L294.6 158.0L293.1 157.8L294.5 158.9L292.6 158.6L294.0 159.3L296.5 162.4L295.4 159.9L295.8 161.7L294.5 161.3L293.3 162.0L295.1 161.9L294.9 163.6L293.5 163.0L293.4 164.5L292.3 165.3L290.7 166.2L289.8 167.4L287.8 167.7L286.7 169.2L284.9 170.4L283.6 171.1L282.2 171.1L281.8 172.5L280.8 173.6L280.6 175.0L280.9 178.1L281.9 180.0L282.9 181.4L283.9 185.1L284.1 188.7L283.3 190.3L281.5 190.5L281.0 189.0L279.7 188.2L279.0 186.9L278.3 185.5L277.5 184.4L277.9 183.0L277.3 181.5L276.9 179.8L275.7 179.1L274.5 177.8L273.1 177.4L271.2 178.4L269.8 178.0L268.8 176.8L266.8 176.6L265.0 176.7L262.7 177.0L262.8 175.6L261.5 176.8L259.3 176.8L256.8 176.6L257.9 177.4L259.2 178.0L258.1 178.8L259.4 179.5L257.8 179.4L256.4 179.5L255.0 180.0L253.9 179.1L252.3 178.4L248.3 178.1L246.8 178.2L244.4 179.3L243.2 180.2L241.3 181.0L239.9 180.9L238.8 181.8L237.7 182.7L237.3 184.7L237.3 186.7L237.9 188.0L237.0 190.7L236.4 192.1L236.3 194.0L236.3 196.3L236.4 198.7L237.5 199.8L236.3 198.5L236.8 200.1L237.9 202.2L239.9 204.3L240.3 205.8L241.3 206.8L243.3 207.3L244.9 208.7L246.9 208.4L248.8 208.0L250.2 207.9L252.0 207.3L253.1 208.1L255.4 205.6L256.0 204.2L256.0 202.6L256.6 201.2L260.5 200.3L262.4 199.7L264.9 200.2L266.2 201.0L264.7 202.8L264.2 204.5L263.6 206.0L263.2 208.7L262.6 207.0L261.7 208.2L262.0 210.2L262.2 212.0L261.2 213.8L260.2 214.8L262.4 215.3L263.7 214.8L265.7 215.1L267.2 215.0L269.6 214.8L271.8 214.8L274.4 216.1L275.5 216.9L275.8 218.9L274.8 220.9L275.0 223.9L274.2 225.1L273.9 226.9L274.9 228.9L276.3 230.3L277.8 231.7L278.8 233.1L280.3 233.4L282.2 233.2L284.1 232.3L284.5 231.9Z", "M130.0 101.6L131.5 102.2L130.8 103.4L130.0 101.6Z", "M246.9 75.0L244.8 75.7L246.9 75.0Z", "M302.4 396.1L303.1 394.9L301.5 395.5L301.9 394.0L303.4 393.6L304.6 394.4L304.8 392.9L303.0 392.2L304.6 392.8L302.9 392.7L301.5 392.9L301.6 391.1L300.2 391.0L301.4 390.3L300.1 389.7L299.0 388.8L300.5 388.8L300.6 387.4L300.6 386.0L299.5 385.0L300.8 384.5L299.3 383.2L301.0 383.0L302.4 383.7L301.9 382.4L300.5 382.3L298.9 382.2L300.4 382.2L299.9 380.8L299.1 379.5L297.6 379.3L298.3 378.1L299.8 377.5L301.1 378.6L302.5 377.7L302.1 376.2L303.9 376.3L302.5 375.8L304.1 374.3L302.9 373.0L303.8 371.8L303.8 370.4L303.9 368.5L305.1 367.8L303.7 366.9L305.4 366.2L303.6 365.7L302.3 366.5L301.2 365.2L301.1 363.6L301.6 362.2L302.9 360.4L302.3 358.6L302.2 356.8L301.8 355.2L303.0 354.3L303.1 352.9L304.0 351.2L304.9 349.5L306.2 347.0L306.6 345.5L306.8 343.7L307.6 342.6L307.5 341.1L307.4 339.7L306.9 337.1L307.8 336.0L308.0 334.0L307.4 332.7L308.4 331.2L308.7 329.4L309.4 327.8L309.7 326.0L309.6 324.4L310.0 321.2L310.1 319.4L310.0 317.3L311.0 314.2L311.1 311.9L311.2 309.2L310.6 306.0L309.0 303.7L307.9 302.6L305.8 301.4L304.1 300.4L302.3 299.5L300.6 298.6L297.6 297.1L296.7 295.8L295.5 295.1L294.5 293.8L294.7 291.8L293.1 289.5L292.1 288.3L291.6 286.8L290.8 285.4L289.4 283.2L288.9 281.9L288.2 280.7L287.8 279.3L285.9 276.9L285.3 275.3L282.3 273.2L281.5 271.8L281.2 270.3L280.9 268.9L283.1 265.8L284.4 265.1L285.2 263.4L283.8 263.5L282.0 262.7L282.1 260.8L282.0 259.4L283.2 258.2L284.2 256.4L284.2 254.5L285.5 254.0L287.0 253.4L287.6 251.8L288.3 250.2L289.9 249.9L290.9 248.9L291.6 247.4L292.5 246.3L291.4 245.5L291.7 244.1L291.5 242.3L291.7 240.6L291.6 239.0L289.9 237.4L288.8 235.7L289.4 234.4L287.7 233.3L285.8 232.9L284.7 231.9L287.2 231.4L289.8 232.3L291.1 233.7L292.6 234.8L293.5 233.7L295.1 232.0L296.4 231.2L296.6 229.6L297.3 228.4L298.4 227.3L300.0 227.6L301.3 226.9L302.7 226.9L304.0 225.8L305.3 225.4L306.2 224.3L308.1 224.1L307.8 225.6L306.2 226.2L307.2 227.7L307.1 229.1L305.8 230.8L306.7 232.0L307.9 232.7L308.8 231.0L307.5 229.2L307.7 227.8L309.3 227.1L311.0 226.7L312.3 226.3L310.9 226.0L311.5 224.5L312.2 225.8L313.5 226.2L315.9 227.1L316.6 229.0L319.6 228.6L321.8 228.5L322.9 229.7L324.9 230.1L326.6 229.6L328.3 229.1L331.3 228.2L332.8 228.5L331.4 228.7L332.0 230.5L333.7 230.9L335.3 231.3L336.5 232.1L336.5 233.7L338.0 233.8L339.3 234.8L341.2 235.6L342.8 237.3L342.4 239.6L343.1 238.4L345.0 239.5L346.3 240.6L348.2 240.9L349.7 241.3L351.8 241.0L354.4 241.1L357.3 242.4L358.6 243.0L359.7 243.8L360.4 245.1L362.2 245.4L362.5 247.6L363.5 249.6L363.7 251.0L365.3 251.8L366.0 253.1L365.0 254.3L363.6 256.1L362.2 256.8L361.1 258.6L360.5 260.1L358.4 260.8L359.8 261.0L362.3 259.8L363.4 259.0L363.5 260.4L364.3 261.7L365.8 261.4L367.4 261.4L367.0 263.2L367.7 261.9L369.4 260.2L371.0 260.7L370.5 259.4L371.4 258.2L372.8 258.6L374.3 258.5L375.5 259.4L376.9 259.5L378.2 260.0L378.6 261.5L379.7 260.3L380.1 261.6L379.3 263.0L380.6 262.5L380.1 263.8L379.9 265.3L381.0 263.8L382.4 263.4L383.8 263.0L385.4 263.3L386.7 263.8L388.2 264.1L389.9 264.3L391.5 263.9L394.9 265.1L396.5 266.3L397.8 267.3L398.9 268.2L400.1 269.0L401.8 270.0L403.7 269.8L405.3 270.3L405.9 271.6L406.3 273.0L406.5 274.5L406.9 276.3L406.6 278.6L405.4 281.0L404.4 282.1L402.9 283.6L400.9 285.4L400.1 286.7L399.3 288.1L398.1 289.9L397.0 290.8L395.7 291.4L395.6 293.0L395.4 295.6L395.6 297.8L395.5 299.4L394.9 301.8L394.9 303.3L393.7 304.9L393.6 307.5L392.3 309.1L391.7 310.8L389.9 313.2L388.2 315.2L387.4 316.3L386.0 316.9L384.6 317.1L383.2 317.3L381.8 317.0L380.2 317.3L379.1 318.2L378.2 319.3L376.2 319.4L374.4 320.2L373.2 321.2L371.0 322.5L369.8 323.2L369.7 324.6L369.0 325.8L369.6 327.1L369.7 328.6L369.6 330.0L369.1 331.6L367.4 332.7L365.4 335.5L364.8 336.9L363.6 338.5L360.1 341.2L361.2 340.2L362.3 339.4L363.1 338.3L363.8 336.5L362.3 336.0L362.2 337.7L361.3 338.9L360.2 340.0L359.5 341.7L358.7 343.6L356.4 345.5L355.5 346.8L354.5 347.8L352.5 348.4L351.1 348.1L349.0 348.5L347.3 347.9L344.5 347.3L342.9 345.8L343.1 343.8L342.6 345.2L343.0 346.5L345.3 348.7L346.4 349.9L345.7 351.2L347.0 352.3L347.7 353.7L346.4 355.3L345.3 356.9L342.7 358.0L339.2 358.8L335.6 359.2L333.8 359.2L332.3 358.6L333.2 360.2L332.4 361.5L332.1 363.1L331.2 364.6L328.4 364.9L326.3 364.1L324.8 364.0L325.2 365.8L325.0 367.3L326.6 367.7L328.4 367.3L328.9 368.7L327.6 369.4L326.0 368.4L327.0 369.7L324.9 370.5L324.3 372.2L324.2 373.6L323.1 374.5L321.0 375.3L318.7 376.7L318.5 379.1L320.2 380.3L321.8 380.5L322.8 382.2L321.4 383.8L319.6 384.6L318.1 385.6L317.7 387.5L316.0 388.5L315.0 387.5L316.0 388.6L314.1 389.3L313.1 391.0L314.4 392.3L312.7 392.4L314.3 392.4L316.0 394.3L313.7 394.0L312.5 394.9L311.0 395.2L309.6 395.4L308.9 397.1L308.1 398.4L306.5 398.0L304.8 397.1L306.1 396.7L307.9 396.4L307.4 394.9L305.3 394.8L303.6 394.9L303.5 396.3L302.4 396.1Z", "M380.1 98.7L380.7 97.3L379.6 98.2L380.3 96.8L378.7 97.6L377.3 97.2L378.8 96.3L377.4 96.7L375.9 96.7L378.0 96.1L376.5 96.3L375.0 96.0L373.6 96.2L372.1 96.6L370.9 95.9L369.6 95.5L368.2 95.0L370.4 94.7L368.3 94.9L368.9 93.5L367.3 94.1L368.9 93.2L367.1 93.5L366.1 92.5L366.1 91.1L364.7 91.1L363.6 90.3L365.3 89.8L363.6 89.8L361.9 89.4L363.3 88.4L361.8 88.7L365.0 87.6L362.9 87.8L361.3 87.8L363.1 87.6L364.6 87.2L363.3 86.7L364.8 86.4L366.7 87.3L365.4 86.8L363.4 85.2L362.7 86.6L361.2 87.4L359.9 86.4L362.0 85.8L360.1 86.1L360.4 84.7L359.0 85.1L361.1 84.0L363.0 83.5L364.5 83.8L362.4 83.4L360.8 83.7L359.0 84.5L357.0 83.7L358.5 83.1L360.4 82.9L358.9 83.1L357.1 83.3L359.3 81.8L361.9 81.0L364.8 80.7L363.1 80.5L360.4 81.2L357.8 82.3L355.8 82.6L357.4 82.1L355.9 82.3L359.2 81.5L356.9 81.5L358.7 81.0L357.2 81.0L359.7 80.7L358.1 80.6L355.8 80.5L359.9 79.3L361.8 79.4L360.0 79.2L357.0 79.5L355.4 79.8L357.4 78.7L358.8 78.3L360.9 78.6L363.7 78.8L362.2 78.3L365.0 78.0L363.6 77.9L361.9 78.0L359.3 78.1L361.5 77.8L357.6 78.3L355.7 79.0L356.9 78.2L358.7 77.8L360.1 77.8L358.1 77.7L356.2 77.3L359.5 77.5L358.0 77.2L360.3 77.5L362.6 77.5L364.0 77.9L362.6 77.4L363.6 76.3L361.3 76.6L359.1 77.2L356.3 76.8L358.3 76.7L360.4 76.1L362.9 76.1L364.3 75.0L431.7 75.0L430.0 75.6L427.9 76.1L426.5 76.1L424.5 76.3L423.1 76.8L421.5 77.1L420.0 76.5L418.8 77.3L416.8 77.1L415.1 77.1L413.9 76.3L412.5 76.2L414.2 77.1L413.0 77.9L411.2 78.5L410.1 79.3L408.8 80.3L408.0 81.4L406.3 82.0L404.8 82.1L403.4 83.1L402.0 82.7L400.3 82.6L398.8 83.2L400.5 82.1L398.6 81.8L398.2 83.2L397.1 84.0L394.9 83.6L393.0 84.0L392.2 85.6L390.8 85.3L391.1 87.0L389.2 87.3L391.3 87.9L390.1 89.0L388.7 88.5L390.8 89.3L389.3 89.3L387.6 89.6L389.3 90.6L387.1 90.1L388.7 90.7L386.9 90.3L388.5 90.8L386.5 91.3L384.3 91.5L386.4 91.9L384.7 92.1L386.7 92.7L386.6 94.1L385.1 94.1L386.8 94.2L384.5 94.5L386.0 94.7L384.0 95.2L385.4 95.3L383.0 95.7L384.8 95.8L383.4 96.3L385.2 96.7L383.3 96.5L385.2 96.8L383.7 97.3L381.5 97.1L383.8 97.6L381.6 98.3L380.2 98.4L380.1 98.7Z", "M322.4 93.5L320.3 93.3L318.9 93.2L316.6 92.9L315.1 92.4L313.7 92.2L312.6 91.3L311.1 91.5L309.3 91.0L307.7 90.7L306.5 89.9L307.9 89.5L306.4 88.5L304.6 88.5L303.2 87.7L302.7 86.4L301.4 86.8L299.6 86.4L298.1 86.1L299.5 86.7L297.5 86.9L295.7 86.5L294.3 87.2L292.2 87.4L290.8 87.1L289.4 86.3L291.7 85.1L295.8 84.9L297.6 84.9L299.3 84.7L302.1 84.3L300.7 83.3L299.5 82.5L303.2 81.0L306.0 81.1L303.4 80.8L305.2 80.0L304.6 78.2L303.4 77.0L301.7 77.0L300.2 75.7L298.7 75.7L296.9 75.0L314.3 75.0L316.5 75.0L315.2 75.6L313.1 75.3L316.8 75.8L315.3 76.0L317.1 76.2L319.0 76.4L320.6 76.5L318.5 76.6L320.3 77.0L321.7 77.4L320.3 78.0L321.7 77.7L323.8 77.7L325.9 77.7L324.4 78.3L326.4 78.1L327.6 78.8L325.7 79.3L327.2 79.5L325.6 79.8L327.9 79.6L326.1 79.9L329.2 79.6L330.6 79.7L328.3 80.8L330.9 80.3L332.4 81.0L334.0 80.4L334.8 81.5L333.2 81.1L334.4 81.8L332.7 82.0L331.3 82.4L333.4 82.9L331.1 82.8L332.4 83.4L330.9 83.2L329.1 83.1L329.7 84.4L329.1 85.9L327.6 85.2L326.2 85.3L324.8 84.5L323.7 83.6L325.2 82.9L326.8 82.0L325.2 82.7L322.7 83.0L323.8 81.9L322.4 82.6L320.9 82.3L319.2 81.1L317.6 81.6L319.3 82.8L317.6 82.9L316.0 82.7L317.4 83.3L318.8 83.8L319.9 84.9L320.4 86.3L322.1 85.9L323.7 86.3L325.0 87.0L323.3 87.4L324.7 87.8L326.1 88.2L326.5 89.7L324.7 88.7L325.4 90.2L325.4 91.8L324.3 90.9L322.5 90.9L320.5 90.0L318.7 89.6L317.2 88.8L314.3 88.8L315.9 89.6L317.3 90.4L318.6 90.9L320.0 91.6L321.5 92.3L322.4 93.5Z", "M296.6 75.0L294.4 75.8L296.6 75.0Z", "M193.5 75.0L209.6 75.0L206.9 75.1L202.3 76.1L200.6 76.2L194.5 76.4L193.2 75.5L193.5 75.0Z", "M225.2 75.0L223.8 75.1L222.4 75.5L221.0 75.6L219.0 75.3L216.4 75.3L225.2 75.0Z", "M501.2 122.9L499.1 123.1L497.2 122.6L495.7 123.1L493.7 123.1L492.1 123.4L491.0 124.4L489.5 124.1L487.7 124.6L486.3 124.7L487.6 123.6L488.9 122.9L490.2 122.2L492.0 121.9L493.9 121.1L492.0 121.4L490.8 120.7L489.5 120.3L487.8 120.8L488.4 119.4L489.8 119.0L490.5 117.8L489.0 117.7L489.8 116.5L491.5 116.3L492.9 116.5L493.6 115.2L493.6 113.8L492.2 114.0L492.0 112.2L490.5 112.5L488.1 112.2L488.7 110.5L488.2 109.1L486.8 109.6L487.9 108.5L486.5 109.1L486.0 110.7L486.1 109.1L487.1 108.0L484.9 107.5L486.3 106.6L485.4 105.1L487.1 104.4L487.9 103.3L489.2 102.5L490.6 102.5L492.1 102.4L490.2 104.1L489.2 105.1L492.2 104.7L495.8 104.7L495.2 106.9L493.8 108.0L492.1 108.2L493.6 108.0L492.0 109.2L494.0 109.0L495.4 109.4L496.8 110.3L498.0 112.6L499.7 113.2L501.0 114.2L501.5 115.6L499.1 115.3L500.6 115.4L502.2 116.6L504.8 117.3L506.0 118.5L504.8 119.9L503.1 120.5L505.1 121.3L504.0 122.2L501.9 123.1L501.2 122.9Z", "M351.6 132.9L350.2 133.3L351.4 131.8L353.0 131.1L351.1 131.2L349.6 131.7L350.3 130.5L349.0 131.2L347.6 131.2L345.8 131.3L344.3 131.2L342.9 131.2L340.9 131.4L342.4 129.1L340.6 129.0L342.0 128.2L343.6 127.5L344.1 126.2L344.9 124.9L345.8 123.4L346.9 122.5L349.8 120.7L350.2 122.1L349.2 123.1L348.1 123.9L347.4 125.4L349.1 124.6L350.7 125.0L349.1 125.8L350.4 126.4L351.8 126.2L351.1 127.5L352.5 126.9L353.6 126.1L356.2 126.9L354.3 128.3L355.9 128.5L354.4 129.3L355.9 128.8L357.4 128.4L356.6 129.5L355.0 129.7L355.5 131.2L356.8 130.3L357.0 131.7L358.2 130.8L358.0 132.6L357.2 133.9L355.8 133.4L354.4 133.4L355.1 132.2L354.7 130.6L353.7 131.8L352.1 132.5L351.6 132.9Z", "M298.0 204.2L296.4 204.2L294.7 204.0L290.6 204.4L292.3 203.0L289.8 202.1L288.5 201.2L288.1 199.9L286.6 199.9L285.1 199.4L283.7 199.0L281.5 198.5L279.6 198.2L277.0 196.8L275.3 198.2L273.9 198.2L272.2 199.3L272.5 197.8L273.5 196.8L275.1 196.3L276.9 196.0L278.3 195.6L280.2 195.7L281.8 195.8L283.7 196.3L285.4 196.7L287.8 197.7L289.7 198.5L291.3 199.3L292.7 200.2L294.0 200.7L296.1 201.0L297.1 202.2L298.7 202.3L300.1 203.1L298.5 203.8L298.0 204.2Z", "M455.2 88.7L453.7 88.7L451.8 89.5L446.5 89.4L444.9 88.8L443.3 88.6L439.7 88.7L441.5 88.0L443.4 87.1L441.4 87.3L440.5 86.0L437.9 86.0L436.1 85.8L437.9 85.6L439.7 85.3L442.2 85.5L440.0 85.0L442.5 84.3L440.8 84.4L439.5 83.9L437.8 84.2L434.8 84.2L436.8 84.1L438.2 83.7L436.6 83.2L438.4 83.3L436.7 82.9L438.5 82.5L439.8 83.4L439.0 82.3L440.6 82.2L438.8 82.1L440.5 81.7L441.8 82.3L443.4 82.9L443.0 84.4L444.5 84.6L445.8 84.0L446.8 82.6L448.0 83.5L449.7 82.8L451.9 83.3L453.5 82.9L454.8 82.3L456.3 82.7L457.3 81.5L458.7 81.8L460.8 81.9L461.0 83.6L462.4 83.4L463.9 84.2L464.7 85.3L463.2 85.3L461.9 86.1L460.8 87.4L457.9 87.8L456.5 88.5L455.2 88.7Z", "M479.5 120.1L478.1 120.5L476.5 120.9L474.7 121.2L473.5 120.3L474.8 119.3L472.9 119.5L474.2 119.1L475.5 118.3L477.7 118.0L476.0 118.2L474.3 118.3L475.9 117.3L477.2 116.6L475.4 116.5L473.6 116.0L475.0 115.5L474.6 114.2L476.1 113.7L478.1 113.9L479.2 112.8L477.7 112.9L478.8 111.7L480.1 111.2L481.6 111.1L484.6 111.2L485.8 112.4L486.3 113.7L484.8 114.4L484.4 115.9L485.0 117.2L484.0 118.8L482.5 119.4L480.5 119.5L479.5 120.1Z", "M308.4 209.2L307.0 209.8L306.0 208.6L304.6 208.8L302.4 208.6L301.0 209.2L299.7 208.4L301.3 207.8L303.7 208.1L305.2 207.8L303.9 206.5L303.3 204.9L305.1 204.4L306.5 204.7L308.2 204.4L309.8 204.6L311.6 204.8L313.4 205.8L316.1 207.6L315.2 208.7L313.4 208.0L311.9 208.0L310.2 208.7L308.6 208.4L308.4 209.2Z", "M320.4 401.3L318.8 401.0L316.3 400.8L314.7 400.8L312.5 400.9L310.7 400.9L309.2 400.7L307.9 400.0L306.2 400.3L307.7 400.0L309.0 399.6L310.8 400.2L309.2 399.4L311.3 399.8L312.8 399.8L314.4 399.9L311.4 398.9L313.2 397.5L311.0 397.3L311.3 395.9L312.7 394.9L314.9 394.9L316.2 395.9L317.1 397.7L318.9 398.9L322.0 400.2L324.8 400.4L323.3 401.2L321.1 401.5L320.4 401.3Z", "M281.7 89.6L278.8 89.0L277.6 88.3L275.9 88.2L274.5 88.1L273.4 89.2L272.0 90.0L270.3 90.5L269.1 88.9L267.5 89.1L265.7 89.3L267.7 87.9L267.1 86.6L268.2 83.7L269.7 83.4L270.9 84.4L273.2 84.6L275.3 85.2L277.6 86.2L279.5 86.7L279.1 88.2L280.7 87.9L282.4 88.2L284.1 88.7L281.7 89.6Z", "M363.6 258.6L364.5 257.0L366.7 257.2L368.7 257.2L370.1 257.3L369.8 258.9L368.6 260.0L367.5 260.8L365.6 261.1L364.1 261.3L363.6 259.5L363.6 258.6Z", "M160.7 127.6L159.7 126.4L158.3 126.6L157.8 125.3L156.4 125.1L154.9 124.8L156.0 123.4L154.4 123.3L157.5 123.6L161.3 124.1L162.9 125.8L165.8 127.3L166.5 128.9L164.0 128.9L162.2 128.4L163.0 127.0L161.9 127.8L160.7 127.6Z", "M541.9 160.0L540.5 159.8L538.5 158.8L536.9 157.9L535.5 157.7L535.7 156.3L537.3 156.0L539.2 156.5L541.6 156.1L543.3 155.8L542.1 157.9L542.8 159.2L541.9 160.0Z", "M524.1 154.0L524.2 152.4L524.2 150.6L523.4 148.8L526.2 148.0L527.4 148.7L527.3 150.7L527.3 153.2L525.6 153.2L524.6 154.3L524.1 154.0Z", "M233.0 75.2L241.4 75.0L243.4 75.3L241.8 75.6L240.4 76.4L238.2 76.0L236.4 75.9L235.0 75.4L233.4 75.4L233.0 75.2Z", "M292.6 209.6L290.6 209.6L288.9 208.6L290.3 207.8L292.9 208.1L294.4 208.8L293.0 209.4L292.6 209.6Z", "M339.1 135.5L337.5 136.5L335.5 136.7L334.4 135.4L337.0 132.8L337.0 135.0L335.5 136.3L337.6 135.5L339.1 135.0L339.1 135.5Z", "M297.7 77.7L297.0 79.3L295.5 79.6L292.6 79.6L291.8 78.3L293.5 77.0L295.6 76.7L297.6 77.0L297.7 77.7Z", "M143.5 117.4L145.0 118.4L146.2 119.1L144.7 118.8L143.3 117.8L142.0 116.9L141.3 115.7L140.6 114.0L142.0 114.2L142.2 115.6L143.3 114.7L144.5 114.0L143.6 116.4L143.5 117.4Z", "M300.7 370.7L300.4 368.8L300.7 367.3L301.9 366.6L302.4 368.0L302.1 369.5L301.1 370.5L300.7 370.7Z", "M525.6 147.4L524.6 146.3L524.9 144.5L526.4 144.3L527.1 145.7L526.4 147.1L525.6 147.4Z", "M322.4 209.3L320.3 209.2L318.9 208.3L323.4 208.2L322.4 209.3Z", "M333.2 127.4L330.7 127.1L328.9 126.6L326.4 125.3L331.3 125.9L332.6 126.5L334.0 127.4L333.2 127.4Z", "M533.5 111.8L531.7 111.3L530.8 110.1L532.4 109.6L533.9 109.8L535.4 109.1L534.4 110.4L534.2 111.9L533.5 111.8Z", "M142.4 111.8L140.8 111.3L139.7 110.2L140.1 108.8L141.6 109.3L143.2 110.6L141.5 110.9L143.3 111.1L143.7 112.4L142.5 111.6L142.4 111.8Z", "M341.4 393.6L339.4 393.8L340.4 392.8L341.7 391.8L343.1 391.7L344.8 392.1L343.3 392.8L341.9 393.2L341.4 393.6Z", "M298.3 388.2L298.7 386.8L297.8 387.9L297.1 386.6L298.6 386.2L297.8 385.1L299.4 384.8L299.6 386.4L299.7 387.8L298.3 388.2Z", "M330.8 135.5L328.7 134.9L327.4 134.5L327.8 132.7L328.3 134.0L329.6 134.4L331.6 134.4L333.3 134.3L331.9 134.8L330.8 135.5Z", "M276.3 91.2L278.3 90.8L276.8 92.7L275.2 92.8L273.7 92.2L275.0 91.1L276.3 91.2Z", "M135.4 105.1L133.1 104.5L131.6 104.4L132.8 103.5L134.3 103.6L135.6 104.3L133.0 103.9L134.4 104.5L135.9 105.3L135.4 105.1Z", "M303.4 396.5L304.3 395.3L305.8 395.1L307.5 395.2L306.4 396.1L304.9 396.4L302.6 396.5L303.4 396.5Z", "M335.9 229.9L333.4 230.1L334.7 229.5L336.1 228.0L336.0 229.4L335.9 229.9Z", "M254.5 259.2L253.6 257.3L254.7 258.1L254.5 259.2Z", "M338.7 393.4L337.1 393.8L335.8 393.4L337.3 393.5L338.6 392.7L337.3 392.2L338.7 392.0L340.3 391.9L338.7 393.4Z", "M138.1 105.5L136.4 106.5L137.2 105.0L135.9 103.8L137.6 103.5L138.7 105.0L137.3 103.7L138.5 105.4L138.1 105.5Z", "M311.5 401.6L313.4 401.5L315.7 401.1L314.2 401.3L316.2 401.9L317.0 403.1L315.5 402.5L314.0 401.7L312.1 402.1L311.5 401.6Z", "M135.4 107.2L134.3 106.3L135.7 105.7L136.2 107.0L136.1 108.4L135.0 107.6L135.4 107.2Z", "M361.2 259.3L362.1 258.0L361.5 260.0L361.2 259.3Z", "M303.4 398.9L301.9 398.1L303.3 397.5L305.1 397.7L304.7 399.0L303.4 398.9Z", "M509.4 153.1L508.1 152.7L509.9 151.4L510.0 153.0L509.4 153.1Z", "M403.7 400.8L402.5 400.1L400.3 399.3L398.2 398.9L399.9 398.6L401.5 399.1L402.8 399.7L404.3 400.7L403.7 400.8Z", "M289.9 192.6L288.6 191.9L289.5 190.8L290.6 192.2L289.9 192.6Z", "M284.5 94.1L284.7 92.4L286.4 92.7L285.2 94.5L284.5 94.1Z", "M300.7 149.5L302.2 149.0L304.4 148.7L300.9 149.9L300.7 149.5Z", "M528.3 110.4L529.8 110.5L528.5 111.6L527.5 110.5L528.3 110.4Z", "M278.9 117.1L281.4 116.6L282.6 117.9L278.9 117.1Z", "M146.3 110.8L144.9 111.0L144.3 109.6L146.1 109.7L146.3 110.8Z", "M138.2 106.6L139.9 106.6L140.4 108.0L139.0 107.0L138.2 106.6Z", "M151.7 117.9L151.5 116.5L152.8 116.9L153.0 118.6L152.6 117.2L151.7 117.9Z", "M316.4 401.3L318.9 401.1L317.3 402.0L316.4 401.3Z", "M541.8 76.8L543.6 76.0L545.3 75.7L544.2 76.6L542.8 76.7L541.8 76.8Z", "M276.3 200.1L277.2 199.0L276.3 200.1Z", "M482.3 104.1L484.3 102.6L483.4 103.7L482.3 104.7L482.3 104.1Z", "M365.7 256.7L366.7 255.7L365.7 256.7Z", "M456.0 182.9L457.0 181.4L456.4 182.8L456.0 182.9Z", "M138.1 107.5L138.2 109.0L137.3 107.8L138.1 107.5Z", "M524.0 247.7L524.8 246.6L524.7 248.1L524.0 247.7Z", "M284.5 109.5L285.7 108.5L287.4 108.1L286.6 109.6L287.3 108.2L286.4 109.6L284.8 109.7L284.5 109.5Z", "M301.2 77.6L299.6 78.2L301.2 77.6Z", "M485.0 105.8L483.5 105.5L485.0 105.8Z", "M463.3 182.3L461.9 182.7L463.3 181.0L463.3 182.3Z", "M303.0 201.3L301.5 201.3L303.0 200.9L303.0 201.3Z", "M309.2 398.7L310.3 397.5L310.5 398.9L309.2 398.7Z", "M149.0 115.4L150.8 116.1L149.4 116.1L149.0 115.4Z", "M334.3 214.5L334.7 213.1L334.3 214.5Z", "M546.7 106.6L545.7 108.7L546.7 106.6Z", "M289.9 90.5L288.4 89.7L290.8 89.7L289.9 90.5Z", "M300.7 396.4L298.8 395.4L300.4 396.1L301.7 396.5L303.2 397.0L301.8 397.0L300.4 396.2L300.7 396.4Z", "M296.4 383.2L297.6 383.9L296.4 383.2Z", "M308.8 399.5L307.4 399.0L308.8 398.9L308.8 399.5Z", "M531.0 112.3L532.7 112.3L531.1 112.5L531.0 112.3Z", "M291.5 188.2L292.0 186.8L291.0 185.7L292.5 186.7L292.1 188.5L291.5 188.2Z", "M265.9 77.6L267.3 77.8L265.8 78.1L265.9 77.6Z", "M286.4 75.0L287.9 75.0L286.5 75.4L286.4 75.0Z", "M298.0 388.4L296.8 389.2L298.0 388.5L298.0 388.4Z", "M298.0 384.4L298.8 383.3L299.3 384.6L298.0 384.4Z", "M149.0 116.5L147.4 115.5L149.1 116.0L149.0 116.5Z", "M497.6 98.7L496.8 97.4L498.4 97.5L497.8 99.1L497.6 98.7Z", "M273.6 83.5L272.4 82.5L274.5 83.1L275.9 83.7L274.2 83.8L273.6 83.5Z"];
const WORLD_BORDERS = ["M312.9 302.6L313.4 303.7L314.0 304.8L314.4 306.0L315.0 307.1L315.4 308.2L315.4 309.4L315.3 310.6L315.8 311.7L316.5 312.8L316.6 314.0L317.1 315.4L317.3 316.7L318.6 316.8L319.6 317.4L319.2 318.5L318.8 319.7L317.7 320.2L316.5 320.7L315.4 321.8L315.3 323.5L315.7 324.6L315.4 325.8L315.9 327.0L315.4 328.1L314.4 328.7L313.9 329.8L313.2 330.8L312.4 331.8L312.1 333.0L311.5 334.0L311.7 335.3L311.7 336.5L310.8 337.4L310.4 338.6L310.0 339.8L310.9 340.6L311.1 342.1L311.3 343.5L312.0 344.5L311.9 345.8L311.4 347.1L310.8 348.2L310.0 349.3L310.5 350.4L310.3 351.6L309.1 352.4L308.3 353.5L308.3 354.7L308.4 355.9L308.9 357.1L309.0 358.5L307.8 359.0L307.4 360.6L307.0 362.1L306.5 363.2L306.6 364.4L306.6 366.0L306.8 367.2L305.8 367.8L305.8 369.0L306.3 370.1L306.9 371.3L306.5 372.6L307.5 373.4L308.1 374.4L306.8 374.4L307.6 375.3L306.8 376.4L307.2 377.6L306.9 378.9L306.4 380.3L305.2 381.5L304.7 382.6L305.4 383.8L304.6 384.8L303.6 385.4L302.7 386.3L302.2 387.6L302.4 388.8L302.9 389.9L304.1 389.8L305.3 389.9L305.1 391.1L304.9 392.3L306.0 392.9L306.4 393.4", "M550.0 277.8L548.7 277.8L548.0 276.7L547.1 275.5L546.8 274.3L546.6 273.1L545.4 272.0L544.1 272.0L542.8 272.1L541.5 272.1L540.3 272.1L539.1 271.9L537.8 272.0L536.9 272.0", "M534.0 124.2L535.3 124.0L536.6 123.8L537.7 123.4L538.9 122.9L540.2 122.7L541.9 122.7L543.1 123.0L544.6 123.4L545.8 123.5L546.2 124.6L547.4 124.4L549.3 124.2L550.0 125.0", "M538.4 134.1L539.7 134.3L541.0 134.3L542.2 133.9L543.4 133.9L544.7 133.8L545.9 134.0L546.9 134.6L548.1 135.6L549.3 135.9L550.0 136.1", "M287.7 252.8L288.7 253.5L290.3 254.4L291.4 254.9L292.4 255.9L293.6 255.9L295.1 255.6L296.3 256.4L297.6 256.7L298.6 257.4L299.6 258.0L300.0 259.1L301.1 259.8L302.1 260.7L303.0 261.6L303.4 262.8L304.6 262.8L306.0 262.7L307.4 262.4L308.6 262.6L309.8 263.0L311.1 263.6L310.7 264.8L310.0 265.9L310.9 266.8L311.7 267.7L311.9 266.5L312.2 265.2L312.4 264.0L312.6 262.7L312.9 261.5L313.1 260.2L312.8 259.0L312.5 257.8L311.5 257.1L311.4 255.9L312.2 254.9L313.7 255.0", "M521.8 131.4L521.8 129.9L522.3 128.8L523.2 128.0L522.1 127.5L520.3 127.3L519.2 126.8L518.8 125.7L517.8 124.8L518.5 123.8L517.7 122.6L518.1 121.4L517.4 120.3L518.6 120.2L519.7 119.8L520.2 118.5L520.7 117.3L519.9 115.9L518.7 115.5L518.6 115.5", "M516.2 220.0L517.3 220.4L518.6 220.8L519.5 221.7L520.8 222.0L522.1 221.6L523.4 221.7L524.5 222.4L525.6 222.8L526.9 222.9L527.9 222.3L529.0 221.6L530.3 221.4L531.6 221.4L532.9 221.6L534.1 222.1L535.3 221.6L536.5 221.0L538.1 220.5L538.9 221.5L539.4 222.6L539.6 223.9L541.0 224.5L540.7 225.7L540.1 226.7L539.0 227.1L538.2 228.1L537.8 229.2L537.1 230.2L537.1 231.4L536.0 231.9L536.0 233.1L534.8 233.9L534.4 235.1L533.9 236.2L533.3 237.2L532.8 238.3L532.1 239.6L531.1 238.8L530.1 238.0L529.0 238.5L527.8 238.7L527.0 239.6L526.1 240.5L525.2 241.6L525.2 242.8L524.5 243.9L524.3 244.3", "M550.0 197.3L548.9 196.8L547.8 196.2L546.7 195.7L545.6 195.2L544.4 194.8L543.3 195.4L542.2 195.9L541.1 196.4L539.9 197.0L538.9 196.4L537.9 195.6L536.7 195.3L535.5 195.1L534.3 194.8L533.3 194.0L532.7 192.9L531.6 192.3L530.4 192.0L529.0 191.8L528.4 190.7L528.0 189.4L527.2 188.4L527.0 187.2L528.0 186.6L527.8 185.3L527.9 184.1L528.0 182.8L527.8 181.6L527.9 180.3L527.7 179.1L527.0 178.1L527.5 176.9L528.5 176.1L529.1 175.1L528.7 174.0L529.7 173.0L530.7 172.0L531.8 171.6L532.3 170.5L532.5 169.3", "M317.8 284.7L318.7 283.9L319.8 283.3L320.8 282.6L322.1 282.3L323.6 282.5L324.2 283.6L324.0 284.8L324.1 286.1L324.6 287.5L325.6 288.2L326.5 289.1L327.7 289.6L328.9 289.6L330.3 289.9L331.1 290.8L332.2 291.2L333.3 291.8L334.5 292.2L335.8 292.0L336.9 292.7L337.3 293.9L337.7 295.0L337.6 296.3L338.0 297.5L338.2 298.7L339.2 299.4L340.5 299.5L341.8 299.5L343.2 299.4L342.8 300.5L343.0 301.8L344.1 302.4L344.8 303.5L345.4 304.5L344.9 305.6L344.6 306.8L344.0 308.0L344.5 309.1L343.6 309.7", "M311.5 268.0L310.1 267.5L309.0 268.1L307.7 268.3L306.4 268.5L305.3 269.1L304.4 269.9L303.6 270.9L303.2 272.0L303.0 273.3L302.1 274.2L301.2 275.3L300.7 276.4L301.3 277.5L302.0 278.6L303.0 279.5L303.5 280.6L304.5 281.4L305.4 282.2L306.4 282.9L307.6 282.9L308.7 282.4L309.7 281.7L309.8 282.9L309.8 284.2L309.8 285.5L311.0 285.6L312.3 285.4L313.5 285.4L314.8 285.5L316.0 285.6L316.8 284.7L317.8 284.7", "M251.3 218.3L251.5 217.1L251.7 215.9L252.3 214.9L253.3 214.3L254.5 214.2L255.8 214.2L255.4 212.6L254.4 212.0L253.5 211.2L254.7 211.2L254.7 209.9L256.0 209.7L257.3 209.7L258.6 209.7L259.7 210.2L259.6 211.4L259.6 212.7L259.5 213.9L260.3 214.8", "M521.6 141.3L520.8 140.3L519.8 139.4L519.2 137.9L520.4 137.6L519.9 136.5L520.9 135.8L522.2 135.7L523.3 135.1L524.6 135.2L525.6 136.0L526.3 134.9L527.6 134.6L528.8 134.4L529.6 133.1L528.0 133.1L526.9 132.7L527.1 131.5", "M183.9 171.0L185.2 170.9L186.5 170.8L187.8 170.7L189.0 170.6L190.2 170.5L191.1 171.3L192.3 171.7L193.5 172.1L194.8 172.4L195.9 172.8L197.1 173.2L198.4 173.5L199.6 173.9L200.8 174.1L202.0 174.1L203.3 174.1L204.6 174.1L205.9 174.1L207.2 174.1L208.0 173.2L209.2 173.0L210.5 173.0L211.8 173.0L213.0 173.2L214.1 174.0L215.0 174.8L216.1 175.6L217.1 176.3L217.6 177.8L218.3 178.8L219.5 179.4L220.6 180.0L221.8 180.3L222.4 179.3L223.0 178.3L224.6 178.2L225.8 178.2L226.9 178.7L227.9 179.5L228.6 180.5L229.3 181.5L230.1 182.5L230.7 183.5L231.6 184.3L232.2 185.9L232.7 187.1L233.8 187.5L235.1 188.0L236.3 188.1L237.7 188.3L238.0 188.2", "M532.0 250.9L533.3 250.6L534.6 250.5L535.8 250.7L537.1 250.6L536.9 251.9L537.1 253.1L538.3 253.0L539.6 253.0L540.4 254.0L539.9 255.1L538.9 256.1L538.9 257.3L540.3 257.8L540.3 259.1L540.5 260.3L540.3 261.6L539.9 262.8L538.7 262.4L537.6 263.0L536.4 262.8L536.0 261.6L535.0 262.7L533.6 262.7L532.5 264.1L533.2 265.1L533.4 266.3L532.2 265.9L531.4 266.9", "M455.0 201.9L455.2 200.7L456.4 200.4L457.6 200.4L458.9 200.4L460.2 200.4L461.5 200.4L462.8 200.4L464.1 200.4L465.4 200.4L465.9 199.3L465.7 198.1L465.6 196.8L466.4 195.9L467.5 195.2L468.7 194.9L468.7 193.6L468.7 192.3L468.7 191.1L468.7 189.8L468.7 188.5L470.0 188.2L471.3 188.2L472.6 188.2L473.9 188.2L475.2 188.2L476.5 188.2L477.7 188.2L477.7 186.9L477.7 185.6L477.7 184.4L477.7 183.1L477.7 181.8L478.3 180.7L479.4 180.0L480.5 179.3L481.6 178.8L482.9 178.7L484.4 178.2L485.7 178.0L486.8 177.6L487.6 176.6L488.7 176.1L489.8 175.6L491.0 175.1L490.8 173.7L491.9 173.2L493.1 172.8L494.1 172.1L495.4 172.0L496.7 172.0L498.0 172.1L498.5 171.0L497.0 169.9L496.8 168.7L496.6 167.4L496.4 166.2L496.4 165.0L495.4 164.4L495.2 164.2", "M338.3 242.8L338.6 244.0L339.5 245.0L339.9 246.1L339.1 247.1L339.0 248.3L338.7 249.5L339.4 250.6L339.5 251.9L340.5 252.7L341.9 253.5L343.0 252.7L344.1 252.2L345.3 252.1L346.5 251.3L347.7 251.6L347.2 250.5L346.6 249.4L346.1 248.3L345.0 247.7L344.3 246.7L343.9 245.6L344.4 244.5L344.9 243.4L346.0 243.0L346.1 242.1", "M550.0 235.5L549.2 235.6", "M477.5 146.1L478.7 145.7L479.8 146.2L481.1 146.5L482.5 146.2L483.5 146.9L482.8 148.6L482.7 149.8L482.6 151.3L481.6 152.1L481.6 153.4L481.5 154.7L481.7 155.9L481.3 157.0L481.0 158.2L481.1 158.7", "M527.6 131.5L528.9 131.9L530.0 131.5L531.8 131.8L532.9 131.3L534.1 131.3L535.9 131.1L535.8 129.9L536.9 129.5L538.4 128.9L537.8 127.8L536.5 126.8L535.4 126.4L535.2 125.2L534.2 124.5L534.0 124.1", "M276.0 217.1L274.6 217.5L273.3 217.7L271.7 218.0L270.5 218.2L269.9 219.2L268.9 219.8L267.7 219.9L266.6 220.4L266.3 221.6L265.3 222.4", "M550.0 253.0L549.7 254.2L549.9 255.4L549.4 256.5L549.2 257.7L548.6 258.7L547.6 259.5L546.7 260.3L546.1 261.4L545.2 262.3L545.1 263.6L545.2 264.8L544.8 266.0L544.2 267.0L543.1 267.8L542.1 268.4L541.0 269.5L540.1 268.6L538.4 268.3L537.6 269.4L536.6 268.7L534.8 268.7L533.8 269.8", "M163.2 128.9L164.4 129.2L165.6 129.5L166.9 129.6L167.2 128.4L168.1 127.6L169.4 127.6L170.7 127.6L172.0 127.6L173.3 127.6L174.6 127.6L175.9 127.6L177.2 127.6L178.5 127.6L179.8 127.6L181.1 127.6L182.4 127.6L183.7 127.6L185.0 127.6L186.3 127.6L187.6 127.6L188.9 127.6L190.2 127.6L191.5 127.6L192.8 127.6L194.1 127.6L195.4 127.6L196.7 127.6L198.0 127.6L199.3 127.6L200.6 127.6L201.9 127.6L203.2 127.6L204.5 127.6L205.8 127.6L207.1 127.6L208.4 127.6L209.7 127.6L211.0 127.6L212.3 127.6L213.6 127.6L214.9 127.6L216.2 127.6L217.5 127.6L218.8 127.6L220.1 127.6L221.4 127.6L222.7 127.6L224.0 127.6L225.3 127.6L226.6 127.6L227.9 127.6L229.2 127.6L230.5 127.6L231.8 127.6L233.1 127.6L234.4 127.6L235.7 127.6L237.0 127.6L238.3 127.6L239.6 127.6L240.8 127.6L242.1 127.6L243.4 127.6L244.3 126.8L244.6 128.1L245.7 128.5L246.9 128.6L248.1 128.7L249.4 128.6L250.6 129.1L251.8 129.3L252.8 129.9L254.0 130.1L255.3 130.0L256.3 130.0", "M544.9 133.2L545.9 132.6L546.5 131.5L547.3 130.6L548.5 130.5L549.6 130.9L550.0 130.9", "M543.2 236.8L542.4 237.7L541.9 238.8L541.3 239.9L540.3 240.7L540.8 241.8L541.0 243.1L541.1 244.3L542.0 245.1L542.1 246.3L542.9 247.2L543.8 248.1L544.9 249.0L544.9 250.3L545.0 252.0L543.9 251.5L542.4 251.2L541.2 251.2L540.0 251.0L538.7 250.9L537.4 250.9L537.3 250.9", "M277.3 144.6L276.3 145.2L276.1 146.4L277.9 146.9L279.1 146.4L280.2 145.8L281.4 145.4L282.7 145.2L284.0 145.0L285.3 144.6L286.5 144.2L287.0 142.7L287.9 141.8L289.1 141.7L290.4 141.7L291.7 141.8L293.0 141.8L293.8 140.9L294.8 140.1L295.8 139.5L296.9 138.9L297.9 138.3L299.2 138.2L300.5 138.2L301.8 138.2L303.1 138.1L304.4 138.1L305.7 138.1L307.0 138.1L308.0 137.4L309.2 137.5L310.0 136.5L310.9 135.2", "M493.9 231.6L492.9 230.8L491.8 230.4L490.6 230.7L489.5 231.3L488.2 230.9L487.3 229.5L486.3 228.8L486.4 227.4L487.1 226.1L487.5 225.0L488.9 224.6L489.1 223.1L489.5 222.0L490.4 221.1L491.4 221.7L491.9 221.6", "M308.0 225.4L306.7 225.7L305.8 226.6L304.8 227.3L304.2 228.3L303.6 229.4L303.5 230.7L302.8 231.8L304.0 232.6L304.3 233.8L305.2 235.2L304.8 236.3L305.6 237.2L306.5 238.2L307.7 238.1L309.0 238.1L310.2 238.1L311.4 238.5L312.2 239.5L313.1 240.4L314.3 240.3L315.5 240.4L316.8 240.3L318.1 240.2L318.4 240.3", "M520.3 135.7L519.7 134.4L518.4 134.5L517.4 135.2L517.8 134.0L518.7 133.1L519.8 132.5L520.7 131.6L521.9 131.3L523.1 131.3L524.3 131.3L525.5 131.2L526.8 131.3L527.6 131.5", "M312.7 285.4L313.3 286.4L313.9 287.4L314.5 288.4L315.1 289.4L314.3 290.4L314.4 291.7L314.2 293.0L314.3 294.4L313.3 295.5L313.8 296.6L313.2 297.6L313.6 298.9L314.7 299.6L313.8 300.6L312.6 301.8L312.4 303.1L312.0 304.3L310.9 304.8L310.5 304.9", "M550.0 77.5L548.7 77.6L547.4 77.6L546.3 78.3L545.2 79.0L545.5 80.2L544.4 80.8L543.3 81.4L542.5 82.3L541.3 82.5L540.8 83.7L540.4 84.8L539.4 85.6L538.5 86.4L539.6 87.7L538.5 88.1L537.3 87.9L536.1 88.1L535.0 88.6L534.1 89.6L534.1 90.9L534.0 92.1L534.4 93.2L534.7 94.4L535.8 95.0L535.0 96.0L535.2 97.2L535.1 98.4L534.1 99.0L532.8 99.7L533.0 101.0L531.8 101.0L530.6 101.5L530.4 101.5", "M355.3 328.1L353.9 328.8L352.7 329.0L351.8 329.9L350.8 330.6L349.8 331.2L349.0 332.1L348.3 333.1L347.4 334.0L346.5 334.9L345.6 335.7L344.4 336.9L344.5 338.3L343.9 339.3L343.5 340.5L343.5 342.0", "M147.3 112.6L148.3 111.8L148.9 110.8L148.9 109.5L147.9 108.9L146.9 108.2L145.7 108.0L144.0 107.6L143.5 106.5L142.6 105.7L141.6 104.8L140.7 104.0L139.8 102.8L138.8 102.1L137.5 101.7L136.6 100.9L135.2 100.2L134.1 99.2L132.9 99.5L131.5 100.1L130.5 100.9L130.0 101.1", "M297.2 256.9L297.2 258.5L296.7 259.6L296.4 260.8L295.5 261.7L294.6 262.6L293.5 263.3L292.4 263.7L291.3 264.1L290.1 264.5L289.3 265.4L288.4 266.9L288.1 268.6L287.1 269.7L286.0 269.2L285.4 268.2L284.2 267.9L284.1 267.8", "M550.0 127.5L548.9 128.1L547.6 128.0L547.1 128.6", "M348.2 251.5L349.4 251.7L349.5 250.2L350.8 250.2L351.9 249.8L353.0 250.5L354.3 250.9L355.4 250.5L356.7 250.4L357.8 250.8L358.8 249.9L359.2 248.7L359.9 247.6L360.7 246.6L361.2 246.0", "M348.2 314.7L349.3 315.2L350.5 316.1L350.7 317.5L350.8 318.7L351.4 319.7L352.7 319.5L353.9 319.6L354.2 320.8L353.8 321.9L353.5 323.1L353.3 324.3L353.1 325.6L352.7 326.7L351.8 327.5L350.6 328.1L350.1 328.8", "M319.2 316.6L320.3 315.6L321.2 314.8L322.2 314.1L323.2 314.8L324.4 314.7L325.6 314.9L326.5 315.8L327.6 315.1L328.6 314.5L329.8 314.5L331.0 314.5L331.8 315.4L332.8 316.3L333.5 317.3L334.5 318.1L335.6 318.7L336.7 319.5L337.9 319.8L339.1 320.1L340.1 320.7", "M326.1 245.5L326.6 246.6L327.3 247.6L327.5 248.8L327.7 250.1L329.0 250.2L328.4 251.4L327.6 252.3L326.5 252.8L325.0 253.6L324.0 254.4L322.8 254.2L321.5 254.6L320.5 253.8L320.0 253.4", "M518.5 126.4L516.9 126.2L515.5 125.8L514.4 125.4L513.1 125.1L512.2 124.1L511.0 123.7L509.8 122.9L508.3 122.8L508.1 122.1", "M550.0 302.4L548.8 302.4L547.6 302.4L546.3 302.4L545.0 302.4L543.7 302.4L542.4 302.4L541.1 302.4L539.8 302.4L538.6 302.1L537.5 301.3L536.2 301.4L535.1 301.9L533.8 301.7L533.1 302.0", "M256.3 130.0L257.6 130.3L258.8 130.3L260.0 130.0L261.1 129.6L262.4 129.7L263.6 130.1L264.8 130.6L265.9 131.0L267.1 131.5L268.3 132.0L269.5 132.4L270.7 132.9L271.5 133.8L272.6 134.2L273.7 135.3L275.1 135.5L275.9 136.5L277.1 137.0L277.7 138.0L278.0 139.2L278.3 140.5L278.6 141.7L278.2 142.9L277.9 143.4", "M356.6 345.4L356.2 344.2L356.8 343.2L356.4 342.1L355.7 341.1L354.7 340.5L353.6 339.9L352.6 339.3L351.5 338.7L350.6 337.8L349.5 338.4L349.1 337.3L348.1 336.5L346.6 335.8L345.5 336.3L345.1 336.0", "M538.4 136.6L537.8 135.5L538.2 134.3L536.9 134.0L535.7 133.8L534.5 133.2L533.3 132.9L532.1 133.0L530.9 133.5L529.6 133.2", "M468.6 217.8L467.4 217.1L466.4 216.5L465.4 215.5L464.9 214.3L463.7 214.2L462.9 213.2L461.7 212.8L460.5 212.8L459.3 212.9L458.1 213.2L456.9 213.6L456.4 214.3", "M510.8 216.2L511.6 215.3L512.1 214.2L512.6 213.1L512.6 211.9L512.7 210.6L512.7 209.3L512.7 208.1L512.7 206.8L511.6 206.4L510.3 206.6L509.9 205.1L509.3 204.1L508.1 203.9L507.1 203.2L505.7 202.9L504.8 202.0L504.1 200.9L503.1 200.3L502.0 199.6L501.3 199.2", "M468.5 220.5L469.2 221.6L470.2 222.2L470.2 223.5L469.1 223.9L467.8 224.2L466.6 223.9L465.5 223.3L464.2 223.3L462.9 223.3L461.6 223.2L460.3 223.2L459.1 223.7L457.9 223.8L456.6 224.1L455.9 224.1", "M541.4 122.7L542.0 121.7L541.2 120.6L541.1 119.4L540.9 118.2L539.7 117.6L540.3 116.5L540.0 115.2L539.8 114.7", "M336.7 242.9L336.2 244.2L335.1 244.7L333.9 245.4L332.8 245.8L331.2 246.0L330.9 247.2L329.9 246.4L328.2 246.2L327.1 245.7L326.1 245.5", "M527.1 177.0L526.7 175.8L526.4 174.6L526.1 173.3L525.8 172.1L524.8 171.5L523.8 170.8L523.3 169.7L522.2 169.1L521.8 167.9L522.3 166.5L523.2 165.6L523.7 164.5L523.9 163.1L523.7 161.8L523.4 160.5L524.7 159.6L524.6 159.4", "M477.4 225.0L477.8 226.3L477.7 227.7L478.8 228.9L479.5 229.9L479.2 231.1L479.8 232.4L480.4 233.9L480.5 234.5", "M538.7 128.2L540.1 128.8L541.4 128.2L542.7 127.6L544.1 127.9L545.6 128.3L546.8 128.3L547.1 129.5L547.5 129.9", "M478.3 236.7L478.8 238.2L478.2 239.2L479.1 240.0L480.1 240.6L481.1 241.2L481.3 242.6L480.7 243.7L480.8 245.0L480.8 245.1", "M502.3 229.5L502.2 230.8L502.7 232.0L502.6 233.3L503.0 234.4L502.9 235.6L502.6 236.9L502.9 238.1L503.1 239.2", "M339.6 320.4L340.6 321.0L341.7 321.7L343.1 322.4L344.4 322.6L345.3 323.5L344.4 324.7L343.5 326.1L343.2 327.3L342.4 328.4", "M481.6 111.7L480.6 112.5L479.6 113.2L480.6 114.1L481.9 113.9L483.1 114.0L484.2 114.2", "M277.5 231.4L276.5 232.0L277.1 233.1L276.8 234.3L276.6 235.4", "M517.5 123.0L516.9 121.9L515.4 121.7L514.2 121.3L512.7 121.4L511.6 121.8L510.4 121.4", "M546.8 236.7L545.7 236.1L544.5 236.8L543.2 236.8L543.0 235.6L542.5 234.4L541.5 233.5L540.5 232.7L539.6 231.8L539.5 230.6L540.8 230.4L542.1 230.4L543.4 230.3L543.7 230.3", "M508.9 224.0L509.8 224.9L511.0 225.8L511.1 227.0L511.7 228.7L511.2 229.8L510.3 230.8L509.8 232.2L508.8 232.8L508.7 234.0L508.5 235.3L508.5 235.8", "M456.4 220.8L457.7 220.8L459.0 220.8L460.4 220.2L461.8 220.6L463.0 221.0L462.0 221.6L460.9 221.1L459.7 221.4L458.5 221.4L457.4 221.9L456.1 221.9L455.8 222.2", "M291.6 233.7L291.8 234.9L291.6 236.1L290.6 236.8L290.2 237.6", "M331.5 315.1L331.9 313.9L332.3 312.7L332.5 311.5L332.8 310.3L333.5 309.3L334.1 308.2L335.4 308.0L336.6 307.8L337.8 307.5L339.0 307.4L340.3 307.5L341.5 307.7L342.7 308.3L343.7 308.9L344.1 310.4L344.3 311.6L344.2 313.2L344.2 314.4L344.1 314.7", "M550.0 332.4L548.4 332.1L548.2 330.9L547.0 330.5L546.6 331.6L545.9 331.8", "M486.3 215.8L485.0 215.8L483.7 215.8L482.4 215.8L481.1 215.8L479.8 215.8L478.5 215.8L477.2 215.8L475.9 215.8L474.6 216.1L473.3 215.9L472.1 216.1L470.9 216.0L469.4 215.9L469.2 217.3L468.6 217.8", "M465.2 232.8L466.5 232.1L467.2 231.0L468.4 230.6L469.6 230.3L470.8 230.3L471.7 231.3L472.1 232.7L472.9 233.8L472.2 234.8", "M338.3 242.8L336.7 242.9L335.8 241.9L334.9 241.0L335.6 240.0L336.1 238.9L337.3 238.5L337.0 237.3L337.2 236.0L337.7 235.9", "M486.3 215.8L486.6 214.6L486.5 213.4L485.9 212.2L485.8 210.9L485.6 209.7L485.5 208.4L485.3 207.2L485.2 205.9L485.0 204.7L484.9 203.4L484.7 202.2L484.6 200.9L484.5 199.6L484.3 198.4L484.2 197.1L484.0 195.9L483.9 194.6L483.7 193.4L483.6 192.1L483.4 190.9L484.7 190.8L486.0 190.8L487.3 190.8L486.5 189.8L485.4 189.2L484.4 188.6L483.4 188.0L482.3 187.4L481.2 186.8L480.2 186.2L479.1 185.6L478.1 185.0L477.7 184.8", "M353.3 250.4L354.2 249.5L354.3 248.3L354.9 247.0L354.1 246.1L353.8 244.9L353.6 243.7L354.2 242.7L355.0 241.4", "M538.1 220.5L537.9 219.2L538.2 218.0L538.8 217.0L539.5 216.0L540.3 215.1L541.2 214.1L542.1 213.2L543.0 212.3L543.3 211.0L543.3 209.7L543.4 208.5L543.5 207.2L543.7 205.9L543.8 204.6L544.3 203.4L543.8 202.2L543.3 201.1L542.5 200.1L542.4 198.9L542.2 197.6L541.9 196.4L541.9 196.0", "M550.0 247.2L548.6 246.8L547.4 247.3L546.1 247.5L545.9 248.7L545.5 249.9L545.1 250.7", "M268.9 227.5L270.1 227.4L271.2 227.8L272.4 227.7L273.6 228.2L274.6 227.8", "M263.6 220.2L262.4 219.8L260.9 219.6L259.8 218.8L259.1 218.6", "M480.5 234.5L478.9 234.4L479.7 235.5L479.1 236.5L477.7 236.3L477.3 237.4L476.0 237.1", "M543.7 230.3L542.8 229.5L542.2 228.4L541.9 227.2L542.0 225.8L541.6 224.6L541.4 223.3L540.7 222.8", "M318.4 240.3L318.0 242.0L317.5 243.3L317.3 244.5L317.7 245.7L318.4 246.8L318.5 248.0L317.6 248.8L317.4 249.2", "M527.8 250.4L528.9 250.9L530.2 250.9L531.5 250.9L532.0 252.0L532.0 253.2L531.0 253.9L529.7 253.9L528.4 253.9L527.1 254.0", "M320.0 253.4L319.5 252.3L318.9 251.3L317.6 251.6L316.2 251.7L315.0 252.0L313.8 252.0L312.0 252.1", "M476.0 237.1L475.7 235.8L475.5 234.6L474.3 234.2L473.1 234.2L472.2 234.8", "M503.7 227.6L503.4 228.9L504.3 229.9L504.9 230.9L505.2 232.2L505.6 233.3L505.6 234.5L505.6 235.8L505.7 237.0L505.7 238.2L505.7 239.4L506.1 240.1", "M501.8 217.1L501.7 218.4L502.5 220.0L503.9 220.9L503.9 222.2L505.0 223.0L506.3 223.4L507.4 223.9L507.6 225.1L507.7 225.3", "M501.2 144.2L499.8 143.9L498.6 143.5L497.4 143.2L496.4 142.4", "M353.3 323.9L354.6 323.7L355.4 324.9L355.8 326.0L355.7 327.3L355.3 328.1", "M342.4 328.4L343.6 328.4L344.8 328.4L345.9 328.8L347.5 329.0L348.7 328.9L349.8 328.5L350.1 328.8", "M493.6 227.6L493.7 229.2L493.7 230.4L493.8 231.6L494.0 232.9L494.2 233.5", "M259.7 216.9L259.7 218.2L258.5 218.6L258.6 219.0", "M263.5 208.8L262.5 208.1L261.3 208.2L260.7 209.3L259.7 209.7", "M507.5 225.8L506.5 226.5L505.1 226.4L504.1 227.3L503.0 227.7L501.8 227.5L501.3 227.4", "M460.5 227.7L461.2 226.7L462.5 225.8L463.7 225.7L463.4 224.6", "M306.8 204.7L307.1 206.2L306.6 207.6L306.7 209.1", "M314.6 132.4L315.8 132.0L317.0 132.4L317.5 133.5L317.5 134.8L317.5 136.0L318.5 136.6", "M483.2 228.5L482.3 229.9L480.9 229.0L479.6 229.8", "M317.4 249.2L318.5 249.8L319.4 251.1L319.7 252.4L320.0 253.4", "M473.4 234.2L472.7 235.3L472.1 236.4L471.1 237.2L470.3 238.3L470.1 238.4", "M284.1 267.8L284.0 266.6L283.5 265.4", "M505.3 144.5L504.1 143.9L502.8 144.2L501.2 144.2", "M517.8 124.7L516.8 125.3L517.0 126.2", "M348.2 314.7L347.2 315.3L345.9 315.0L344.5 314.9L344.1 314.7", "M509.9 144.9L508.6 145.0L507.4 144.9L506.2 144.8L506.0 144.7", "M494.2 233.5L494.4 234.7L493.7 235.7L493.3 236.9L492.9 238.1L492.4 239.2L492.7 240.4L493.1 241.6L493.7 241.9", "M491.9 221.6L492.4 220.5L493.5 220.0L494.3 219.1L495.5 219.3L496.2 218.2L497.4 217.9L498.5 217.4L500.1 216.9L501.2 217.1", "M343.5 342.0L343.7 343.2L342.9 344.2L342.8 345.4L343.4 346.5", "M258.6 219.1L257.3 219.9L257.1 220.4", "M472.4 225.3L473.2 224.4L474.3 224.8L475.9 224.3", "M536.7 268.8L535.6 269.5L535.2 270.7L534.5 271.7L534.3 271.8", "M310.9 135.2L311.5 133.7L312.4 132.8L313.3 132.0L314.6 132.4", "M315.3 395.1L315.3 396.4L315.3 397.6L315.3 398.9L315.2 400.2L315.2 401.0", "M306.4 393.4L307.7 393.4L309.0 393.4L310.3 393.4L311.6 393.4L312.8 393.7L314.1 394.0L315.3 394.3L315.8 394.4", "M259.7 216.9L260.8 216.3L261.8 215.5L262.2 215.2", "M521.4 201.7L522.5 201.1L523.5 200.5L524.6 199.9L525.6 199.3L526.7 198.7L527.7 198.1L528.8 197.5L529.8 196.9L530.8 196.3L531.9 195.7L532.9 195.1L533.7 194.7", "M470.4 223.9L470.9 225.0L472.1 225.0L472.4 225.3", "M501.2 227.3L499.9 227.6L498.7 227.6L497.4 227.6L496.1 227.6L494.8 227.6L493.5 227.6", "M508.6 239.8L508.6 238.3L508.8 237.1L508.5 235.8", "M488.2 190.8L489.2 191.4L490.2 192.1L491.2 192.7L492.3 193.4L493.4 194.1L494.4 194.8L495.4 195.4L496.5 196.1L497.6 196.8L498.6 197.5L499.6 198.1L500.7 198.8L501.2 199.1", "M312.0 252.1L312.0 253.3L313.1 253.8L313.9 254.9L313.7 255.0", "M468.0 217.7L468.5 218.8L468.9 220.2L468.5 220.5", "M484.4 229.6L484.4 228.4L483.2 228.5", "M507.5 225.8L507.7 224.4L508.9 224.0", "M506.0 144.7", "M546.8 236.7L548.0 236.0L549.1 235.6L549.2 235.6", "M510.8 216.2L509.5 216.0L508.3 216.2L507.1 216.3L505.8 216.3L504.5 216.6L503.5 217.2L502.2 217.1L501.3 217.1", "M511.0 225.8L511.2 224.6L511.4 223.4L512.3 222.4L512.5 221.1L513.5 220.5L514.8 220.3L516.3 220.0", "M476.0 223.7L477.0 224.3L477.4 225.0", "M512.7 206.2L514.0 206.0L515.3 205.7L516.6 205.5L517.6 204.9L518.6 204.1L519.6 203.2L520.6 202.4L521.4 201.7", "M337.7 235.9L338.7 235.1L338.7 234.1", "M486.3 229.1L485.2 229.5L484.4 229.6", "M493.7 241.9L493.8 243.1L493.3 243.2", "M536.9 272.0L535.7 272.3L534.8 272.5", "M465.5 183.8L466.7 183.8L468.0 183.8L469.3 183.8L470.6 183.8L471.9 183.8L473.2 183.8L474.5 183.8L475.8 183.8L477.1 183.8L477.7 183.8", "M502.3 229.5L501.3 228.7L501.2 228.7", "M318.5 136.6L318.8 137.8L319.1 137.7", "M263.6 220.2L263.3 221.3", "M504.5 240.5L503.4 239.7L503.1 239.2", "M540.6 316.3L541.1 317.4L540.4 317.5", "M524.0 111.6L525.5 112.1L526.8 112.2L528.0 112.4L528.4 112.5", "M277.9 143.4L277.3 144.6", "M464.1 224.2L463.4 224.6", "M527.4 143.5L526.8 142.9", "M540.7 222.8L539.7 222.2L539.4 222.2", "M475.9 224.3L476.0 223.7", "M464.1 224.2L464.1 223.2", "M534.8 141.0", "M527.2 132.7L527.1 132.2", "M501.2 228.7L501.2 227.8", "M264.7 222.4L265.3 222.4", "M547.7 130.2L547.5 129.9", "M506.6 144.8", "M492.8 243.2L493.4 243.1", "M527.9 144.8L527.8 144.3", "M506.1 240.1L505.7 240.2", "M501.2 227.4L500.8 227.3", "M501.2 227.7L501.2 227.4", "M525.7 147.8L526.7 147.6", "M521.3 141.5L521.4 141.4", "M493.3 163.8L493.2 163.6", "M524.7 131.1", "M486.7 162.3L486.6 162.1", "M501.2 227.8L501.2 227.7", "M486.7 161.4L486.6 161.4", "M550.0 137.8L548.8 137.9L547.5 137.6L546.2 137.6L545.0 137.9L543.9 138.3L544.7 139.3L545.3 140.3L546.3 141.0L547.3 141.7L548.1 142.6L549.1 143.4L550.0 144.0", "M546.2 134.3L544.9 134.5L543.7 135.0L543.3 136.1L542.3 137.1L540.8 136.5L539.7 136.9L538.5 137.0L538.1 136.9"];


/* ---------------- Pieces ---------------- */

const PIN_LABELS = {
  spain: { dx: 13, dy: -10, anchor: "start", size: 8.0 },
  equatorialguinea: { dx: -10, dy: -9, anchor: "end", size: 5.4 },
  mexico: { dx: -13, dy: -13, anchor: "end", size: 8.0 },
  cuba: { dx: 11, dy: -13, anchor: "start", size: 7.2 },
  dominicanrepublic: { dx: 19, dy: -1, anchor: "start", size: 5.7 },
  puertorico: { dx: 12, dy: -10, anchor: "start", size: 6.1 },
  guatemala: { dx: 7, dy: -17, anchor: "start", size: 6.7 },
  honduras: { dx: 9, dy: -6, anchor: "start", size: 6.5 },
  nicaragua: { dx: 11, dy: 8, anchor: "start", size: 6.5 },
  elsalvador: { dx: -17, dy: 8, anchor: "end", size: 6.5 },
  costarica: { dx: -17, dy: 21, anchor: "end", size: 6.5 },
  panama: { dx: 17, dy: 23, anchor: "start", size: 6.7 },
  colombia: { dx: 18, dy: 7, anchor: "start", size: 7.1 },
  venezuela: { dx: 14, dy: -9, anchor: "start", size: 6.8 },
  ecuador: { dx: -15, dy: 3, anchor: "end", size: 6.9 },
  peru: { dx: -16, dy: 17, anchor: "end", size: 7.1 },
  bolivia: { dx: 11, dy: 10, anchor: "start", size: 6.8 },
  paraguay: { dx: 12, dy: 3, anchor: "start", size: 6.7 },
  uruguay: { dx: 13, dy: -12, anchor: "start", size: 6.7 },
  chile: { dx: -15, dy: 24, anchor: "end", size: 7.0 },
  argentina: { dx: 15, dy: 16, anchor: "start", size: 7.0 },
};

function Pin({ c, active, hovered, showLabel, onEnter, onLeave, onClick }) {
  const r = hovered ? 6.4 : active ? 5.6 : 4.4;
  const label = PIN_LABELS[c.key] || { dx: 9, dy: 3, anchor: "start", size: 7.5 };
  const labelX = c.x + label.dx;
  const labelY = c.y + label.dy;
  const lineEndX = label.anchor === "end" ? labelX + 4 : labelX - 4;
  const showLeader = Math.abs(label.dx) > 10 || Math.abs(label.dy) > 10;
  const labelWidth = Math.max(36, c.name.length * label.size * 0.58 + 10);
  const labelHeight = label.size + 7;
  const labelBoxX = label.anchor === "end" ? labelX - labelWidth - 4 : labelX - 4;
  const labelBoxY = labelY - labelHeight + 2;
  const labelVisible = hovered || active || showLabel;

  const stopMapDrag = (event) => {
    event.stopPropagation();
  };

  const handleClick = (event) => {
    event.stopPropagation();
    onClick?.();
  };

  return (
    <g
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onPointerDown={stopMapDrag}
      onPointerUp={stopMapDrag}
      onClick={handleClick}
      style={{ cursor: "pointer", pointerEvents: "all" }}
      className={`pin ${hovered ? "pin-hover" : ""} ${active ? "pin-active" : ""}`}
    >
      <title>{c.name}</title>
      {labelVisible && showLeader && (
        <path
          d={`M${c.x} ${c.y} L${lineEndX} ${labelY - 2}`}
          className="pin-leader"
          pointerEvents="none"
        />
      )}
      <circle
        cx={c.x}
        cy={c.y}
        r="12"
        fill="transparent"
        stroke="transparent"
        className="pin-hitbox"
      />
      {labelVisible && (
        <rect
          x={labelBoxX}
          y={labelBoxY}
          width={labelWidth}
          height={labelHeight}
          rx="4"
          fill="transparent"
          stroke="transparent"
          className="pin-label-hitbox"
        />
      )}
      <circle
        cx={c.x}
        cy={c.y}
        r={r}
        fill={active ? "#FFB23E" : "#E63946"}
        stroke="#fff"
        strokeWidth="1.6"
        className="pin-dot"
        pointerEvents="none"
      />
      {labelVisible && (
        <text
          x={labelX}
          y={labelY}
          textAnchor={label.anchor}
          fontSize={label.size}
          className="pin-name"
          style={{
            fontFamily: "Inter, Arial, Helvetica, sans-serif",
            direction: "ltr",
            unicodeBidi: "plaintext",
            pointerEvents: "none",
          }}
        >
          {c.name}
        </text>
      )}
    </g>
  );
}

const NAME_EN = {
  spain: "España", equatorialguinea: "Equatorial Guinea", mexico: "México", guatemala: "Guatemala", honduras: "Honduras", nicaragua: "Nicaragua", cuba: "Cuba", dominicanrepublic: "República Dominicana", puertorico: "Puerto Rico",
  elsalvador: "El Salvador", costarica: "Costa Rica", panama: "Panamá", colombia: "Colombia", venezuela: "Venezuela",
  ecuador: "Ecuador", peru: "Perú", bolivia: "Bolivia", paraguay: "Paraguay", uruguay: "Uruguay", chile: "Chile", argentina: "Argentina",
};

function PhotoCard({ title, caption, img, isFlag, flagKey }) {
  return (
    <div className="info-card">
      <div className="info-card-media">
        {isFlag ? (
          <div className="flag-wrap"><Flag k={flagKey} /></div>
        ) : img ? (
          <img src={img} alt={title} />
        ) : (
          <div className="placeholder">
            <ImageOff size={22} strokeWidth={1.6} />
            <span>الصورة قيد الإضافة</span>
          </div>
        )}
      </div>
      <div className="info-card-body">
        <h4>{title}</h4>
        <p>{caption}</p>
      </div>
    </div>
  );
}

function Panel({ country, onClose }) {
  if (!country) return null;
  return (
    <aside className="panel">
      <div className="panel-top">
        {country.flag && <div className="panel-flag"><Flag k={country.flag} /></div>}
        <h2>{country.displayName || country.name}</h2>
        <button className="close-btn" onClick={onClose} aria-label="إغلاق">
          <X size={20} strokeWidth={2.4} />
        </button>
      </div>

      <div className="cards-row">
        {country.key === "andes" ? (
          <>
            {country.landmark && (
              <PhotoCard title={country.landmark.title} caption={country.landmark.caption} img={country.landmark.img} />
            )}
            {country.person && (
              <PhotoCard title={country.person.title} caption={country.person.caption} img={country.person.img} />
            )}
          </>
        ) : (
          <>
            {country.flag && <PhotoCard title="علم الدولة" caption={country.displayName || country.name} isFlag flagKey={country.flag} />}
            {country.person && (
              <PhotoCard title={country.person.title} caption={country.person.caption} img={country.person.img} />
            )}
            {country.food && (
              <PhotoCard title={country.food.title} caption={country.food.caption} img={country.food.img} />
            )}
            {country.landmark && (
              <PhotoCard title={country.landmark.title} caption={country.landmark.caption} img={country.landmark.img} />
            )}
            {country.extra && (
              <PhotoCard title={country.extra.title} caption={country.extra.caption} img={country.extra.img} />
            )}
          </>
        )}
      </div>

      <div className="fact-card">
        <span className="fact-icon"><Lightbulb size={18} strokeWidth={2.2} /></span>
        <div>
          <h5>هل تعلم؟</h5>
          <p>{country.fact}</p>
        </div>
      </div>
    </aside>
  );
}

/* ---------------- App ---------------- */
export default function App() {
  useEffect(() => {
    preloadAllImages();
  }, []);

  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [mapView, setMapView] = useState(INITIAL_MAP_VIEW);
  const dragRef = useRef(null);
  const current = COUNTRIES.find((c) => c.key === selected) || null;
  const zoomPercent = Math.round((VB.w / mapView.w) * 100);

  const getSvgPoint = (event) => {
    const svg = event.currentTarget;
    const rect = svg.getBoundingClientRect();
    const x = mapView.x + ((event.clientX - rect.left) / rect.width) * mapView.w;
    const y = mapView.y + ((event.clientY - rect.top) / rect.height) * mapView.h;
    return { x, y };
  };

  const handleZoom = (factor, focus) => {
    setMapView((view) => zoomMapView(view, factor, focus?.x, focus?.y));
  };

  const resetMap = () => setMapView(INITIAL_MAP_VIEW);

  const handleWheel = (event) => {
    event.preventDefault();
    const focus = getSvgPoint(event);
    handleZoom(event.deltaY < 0 ? 0.82 : 1.18, focus);
  };

  const handlePointerDown = (event) => {
    if (event.button !== 0) return;
    event.currentTarget.setPointerCapture?.(event.pointerId);
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startView: mapView,
    };
  };

  const handlePointerMove = (event) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const dx = ((event.clientX - drag.startX) / rect.width) * drag.startView.w;
    const dy = ((event.clientY - drag.startY) / rect.height) * drag.startView.h;

    setMapView(clampMapView({
      ...drag.startView,
      x: drag.startView.x - dx,
      y: drag.startView.y - dy,
    }));
  };

  const stopDrag = (event) => {
    if (dragRef.current?.pointerId === event.pointerId) {
      event.currentTarget.releasePointerCapture?.(event.pointerId);
      dragRef.current = null;
    }
  };

  return (
    <div className="kiosk" dir="rtl">
      <style>{CSS}</style>

      <header className="topbar">
        <div className="topbar-title">
          <Globe2 size={20} strokeWidth={2.2} />
          <div>
            <h1>اكتشف العالم الناطق بالإسبانية</h1>
            <p>اضغط على أي دبوس على الخريطة لاكتشاف الدولة</p>
          </div>
        </div>
        <div className="lang-pill">العربية</div>
      </header>

      <main className={`stage ${selected ? "stage-open" : ""}`}>
        <div className="map-pane">
          <div className="map-controls" dir="ltr">
            <button type="button" onClick={() => handleZoom(0.78)} aria-label="Zoom in">+</button>
            <button type="button" onClick={() => handleZoom(1.22)} aria-label="Zoom out">−</button>
            <button type="button" className="reset-btn" onClick={resetMap} aria-label="Reset map">Reset</button>
            <span className="zoom-readout">{zoomPercent}%</span>
          </div>
          <div className="map-hint" dir="ltr">Scroll to zoom • Drag to move</div>
          <svg
            className={`map-svg ${zoomPercent > 100 ? "map-svg-zoomed" : ""}`}
            viewBox={`${mapView.x} ${mapView.y} ${mapView.w} ${mapView.h}`}
            preserveAspectRatio="xMidYMid meet"
            onWheel={handleWheel}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={stopDrag}
            onPointerCancel={stopDrag}
          >

            <defs>
              <clipPath id="mapClip">
                <rect x={VB.x} y={VB.y} width={VB.w} height={VB.h} rx="18" />
              </clipPath>
              <radialGradient id="ocean" cx="38%" cy="38%" r="78%">
                <stop offset="0%" stopColor="#e8f7fb" />
                <stop offset="45%" stopColor="#b9ddea" />
                <stop offset="100%" stopColor="#6faec8" />
              </radialGradient>
              <linearGradient id="land" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#dce8b2" />
                <stop offset="45%" stopColor="#c8d58d" />
                <stop offset="75%" stopColor="#d0b776" />
                <stop offset="100%" stopColor="#a98b55" />
              </linearGradient>
              <pattern id="oceanTexture" width="18" height="18" patternUnits="userSpaceOnUse">
                <path d="M0 9 C4 6, 8 12, 12 9 S18 9, 18 9" fill="none" stroke="rgba(255,255,255,.22)" strokeWidth="0.45" />
              </pattern>
              <pattern id="landTexture" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M0 10 L10 0" stroke="rgba(80,88,48,.09)" strokeWidth="0.55" />
              </pattern>
              <filter id="mapShadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="1.6" stdDeviation="1.2" floodColor="#11394e" floodOpacity="0.28" />
              </filter>
              <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1.8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <rect x={VB.x} y={VB.y} width={VB.w} height={VB.h} rx="18" fill="url(#ocean)" />
            <rect x={VB.x} y={VB.y} width={VB.w} height={VB.h} rx="18" fill="url(#oceanTexture)" opacity="0.55" />
            <rect x={VB.x} y={VB.y} width={VB.w} height={VB.h} rx="18" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1.4" />

            <g clipPath="url(#mapClip)">
              <g className="ocean-depth" pointerEvents="none">
                <path d="M148 358 C195 336, 240 330, 286 340 S371 368, 418 345 S506 314, 544 330" />
                <path d="M144 268 C196 249, 247 250, 292 265 S387 290, 446 263 S520 235, 548 250" />
                <path d="M151 183 C211 169, 270 177, 322 190 S431 210, 545 180" />
                <path d="M456 97 C472 132, 464 169, 480 202 S534 260, 546 309" />
              </g>

            <g className="map-graticule" pointerEvents="none">
              {MAP_LON_LINES.map((lon) => (
                <path key={`lon-${lon}`} d={`M${mapX(lon)} ${VB.y} L${mapX(lon)} ${VB.y + VB.h}`} />
              ))}
              {MAP_LAT_LINES.map((lat) => (
                <path key={`lat-${lat}`} d={`M${VB.x} ${mapY(lat)} L${VB.x + VB.w} ${mapY(lat)}`} />
              ))}
            </g>

            <g className="world-shelf" pointerEvents="none">
              {WORLD_LAND.map((d, i) => <path key={`shelf-${i}`} d={d} />)}
            </g>

            <g className="world-land" filter="url(#mapShadow)">
              {WORLD_LAND.map((d, i) => <path key={`land-${i}`} d={d} />)}
            </g>

            <g className="land-texture" pointerEvents="none">
              {WORLD_LAND.map((d, i) => <path key={`texture-${i}`} d={d} />)}
            </g>

            <g className="terrain-zones" pointerEvents="none">
              <path className="amazon-zone" d="M289 258 C307 243, 334 245, 354 257 C374 270, 370 294, 349 304 C327 314, 298 302, 286 282 C281 273, 282 264, 289 258Z" />
              <path className="atacama-zone" d="M307 298 C315 313, 318 334, 317 355 C313 347, 307 327, 302 307 Z" />
              <path className="patagonia-zone" d="M318 356 C334 346, 356 350, 367 368 C354 389, 328 392, 314 376 C311 367, 312 361, 318 356Z" />
              <path className="central-america-zone" d="M250 218 C268 218, 283 229, 292 241 C273 241, 254 232, 244 222Z" />
            </g>

            <g className="world-borders" pointerEvents="none">
              {WORLD_BORDERS.map((d, i) => <path key={`border-${i}`} d={d} />)}
            </g>


            <g className="map-labels" pointerEvents="none">
              <text x={mapX(-104)} y={mapY(52)} className="map-note">NORTH AMERICA</text>
              <text x={mapX(-68)} y={mapY(-17)} className="map-note">SOUTH AMERICA</text>
              <text x={mapX(-83)} y={mapY(24)} className="map-note small-note">CARIBBEAN SEA</text>
              <text x={mapX(-43)} y={mapY(20)} className="map-note small-note">ATLANTIC OCEAN</text>
              <text x={mapX(-124)} y={mapY(5)} className="map-note small-note">PACIFIC OCEAN</text>
              <text x={mapX(-1)} y={mapY(49)} className="map-note small-note">EUROPE</text>
            </g>


            {COUNTRIES.map((c) => (
              <Pin
                key={c.key}
                c={{ ...c, name_en: NAME_EN[c.key] }}
                active={selected === c.key}
                hovered={hovered === c.key}
                showLabel={zoomPercent >= 150}
                onEnter={() => setHovered(c.key)}
                onLeave={() => setHovered(null)}
                onClick={() => setSelected(c.key)}
              />
            ))}
            </g>
          </svg>
        </div>

        <div className={`panel-pane ${selected ? "open" : ""}`}>
          <Panel country={current} onClose={() => setSelected(null)} />
        </div>
      </main>

      <footer className="bottombar">
        <Lightbulb size={15} strokeWidth={2.2} />
        <span>لغة واحدة، ثقافات لا تُحصى</span>
      </footer>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Changa:wght@500;700;800&family=Tajawal:wght@400;500;700&display=swap');

.kiosk {
  --navy: #0B1B2B;
  --navy-2: #122742;
  --ink: #1B2430;
  --line: rgba(11,27,43,0.12);
  --accent: #E63946;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--navy);
  font-family: 'Tajawal', sans-serif;
  color: var(--ink);
  overflow: hidden;
}
.kiosk * { box-sizing: border-box; }

.topbar {
  background: linear-gradient(180deg, var(--navy), var(--navy-2));
  color: #fff; padding: 14px 22px; display: flex; align-items: center;
  justify-content: space-between; flex-shrink: 0;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.topbar-title { display: flex; align-items: center; gap: 12px; }
.topbar-title h1 { font-family: 'Changa', sans-serif; font-weight: 800; font-size: 19px; margin: 0; }
.topbar-title p { font-size: 12px; opacity: 0.65; margin: 2px 0 0; }
.lang-pill {
  font-size: 12.5px; font-weight: 700; border: 1px solid rgba(255,255,255,0.25);
  padding: 6px 14px; border-radius: 999px; opacity: 0.85;
}

.stage { flex: 1; display: flex; min-height: 0; position: relative; }

.map-pane {
  flex: 1; position: relative; min-width: 0;
  background:
    radial-gradient(circle at 45% 30%, rgba(255,255,255,0.10), transparent 32%),
    linear-gradient(135deg, #0b2942, #071827);
}
.map-svg { width: 100%; height: 100%; display: block; cursor: zoom-in; touch-action: none; user-select: none; }
.map-svg-zoomed { cursor: grab; }
.map-svg-zoomed:active { cursor: grabbing; }
.map-controls {
  position: absolute; left: 16px; top: 16px; z-index: 4;
  display: flex; align-items: center; gap: 7px;
  padding: 7px; border-radius: 999px;
  background: rgba(255,255,255,.88);
  box-shadow: 0 10px 26px rgba(0,0,0,.18);
  border: 1px solid rgba(15,47,71,.15);
  backdrop-filter: blur(8px);
}
.map-controls button {
  width: 32px; height: 32px; border: 0; border-radius: 999px;
  background: #13324a; color: white; font-size: 19px; font-weight: 900;
  line-height: 1; cursor: pointer;
  box-shadow: inset 0 -2px 0 rgba(0,0,0,.16);
}
.map-controls button:hover { background: #8B1E2A; }
.map-controls .reset-btn {
  width: auto; padding: 0 12px; font-size: 11px; letter-spacing: .2px;
  background: #f3eee3; color: #123047; border: 1px solid rgba(15,47,71,.14);
  box-shadow: none;
}
.map-controls .reset-btn:hover { background: #fff6dc; color: #8B1E2A; }
.zoom-readout {
  min-width: 44px; text-align: center; color: #123047;
  font-size: 11px; font-weight: 900;
}
.map-hint {
  position: absolute; left: 18px; bottom: 16px; z-index: 4;
  padding: 7px 11px; border-radius: 999px;
  background: rgba(10, 30, 46, .72); color: rgba(255,255,255,.92);
  font-size: 11px; font-weight: 700; letter-spacing: .1px;
  pointer-events: none;
}
.ocean-depth path {
  fill: none;
  stroke: rgba(18, 92, 125, .18);
  stroke-width: .82;
  stroke-linecap: round;
  vector-effect: non-scaling-stroke;
}
.world-shelf path {
  fill: none;
  stroke: rgba(255,255,255,.44);
  stroke-width: 2.6;
  stroke-linejoin: round;
  vector-effect: non-scaling-stroke;
  filter: url(#softGlow);
}
.world-land path {
  fill: url(#land);
  stroke: #766642;
  stroke-width: .72;
  stroke-linejoin: round;
  vector-effect: non-scaling-stroke;
}
.land-texture path {
  fill: url(#landTexture);
  stroke: none;
  opacity: .42;
}
.terrain-zones path {
  stroke: rgba(77, 67, 37, .15);
  stroke-width: .4;
  vector-effect: non-scaling-stroke;
}
.amazon-zone { fill: rgba(75, 135, 86, .28); }
.atacama-zone { fill: rgba(191, 137, 67, .26); }
.patagonia-zone { fill: rgba(235, 243, 238, .36); }
.central-america-zone { fill: rgba(70, 138, 92, .22); }
.world-borders path {
  fill: none;
  stroke: rgba(80, 65, 40, .58);
  stroke-width: .48;
  stroke-linecap: round;
  stroke-linejoin: round;
  vector-effect: non-scaling-stroke;
}
.map-graticule path {
  fill: none;
  stroke: rgba(42, 83, 104, .18);
  stroke-width: .5;
  vector-effect: non-scaling-stroke;
}
.map-note {
  fill: rgba(41, 74, 91, 0.36);
  font-size: 8.2px;
  font-weight: 800;
  letter-spacing: .5px;
  font-family: Arial, sans-serif;
  text-shadow: 0 1px 0 rgba(255,255,255,.28);
}
.small-note { font-size: 6.8px; letter-spacing: .42px; opacity: .8; }
.rotate-note { transform: rotate(76deg); transform-origin: 310px 344px; }


.pin-hitbox, .pin-label-hitbox { pointer-events: all; }
.pin-dot { transition: r .15s ease, fill .15s ease; }
.pin { animation: pinFloat 3.4s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
.pin:nth-child(odd) { animation-delay: .4s; }
.pin-leader {
  fill: none;
  stroke: rgba(11,27,43,.46);
  stroke-width: .85;
  stroke-linecap: round;
  stroke-dasharray: 2.2 2.2;
}
.pin-name {
  fill: #132941;
  stroke: rgba(255,255,255,.94);
  stroke-width: 3px;
  paint-order: stroke;
  font-weight: 850;
  letter-spacing: -.08px;
  dominant-baseline: middle;
  filter: drop-shadow(0 1px 1px rgba(0,0,0,.18));
}
.pin-hover { animation-play-state: paused; }
.pin-hover .pin-name, .pin-active .pin-name { fill: #8B1E2A; }
.pin-hover .pin-leader, .pin-active .pin-leader { stroke: rgba(139,30,42,.62); stroke-width: 1.05; }
@keyframes pinFloat {
  0%, 100% { transform: translateY(0); filter: drop-shadow(0 0 0 rgba(230,57,70,0)); }
  50% { transform: translateY(-2.5px); filter: drop-shadow(0 0 5px rgba(230,57,70,0.85)); }
}

.panel-pane {
  flex-basis: 0; max-width: 0; overflow: hidden;
  transition: max-width .42s cubic-bezier(.22,.9,.32,1), flex-basis .42s cubic-bezier(.22,.9,.32,1);
}
.panel-pane.open { flex-basis: 42%; max-width: 560px; }
@media (max-width: 900px) {
  .panel-pane.open { flex-basis: 100%; max-width: 100%; position: absolute; inset: 0; z-index: 5; }
}

.panel {
  height: 100%; width: 100%; min-width: 360px;
  background: rgba(255,253,250,0.92); backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-radius: 22px 0 0 22px; box-shadow: -14px 0 40px rgba(0,0,0,0.35);
  padding: 18px 18px 16px; display: flex; flex-direction: column; gap: 14px;
  overflow-y: auto; animation: slideIn .42s cubic-bezier(.22,.9,.32,1) both;
}
@keyframes slideIn { from { opacity: 0; transform: translateX(24px); } to { opacity: 1; transform: translateX(0); } }

.panel-top { display: flex; align-items: center; gap: 12px; }
.panel-flag { width: 38px; height: 26px; border-radius: 4px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.25); flex-shrink: 0; }
.panel-top h2 { font-family: 'Changa', sans-serif; font-weight: 800; font-size: 22px; margin: 0; flex: 1; }
.close-btn {
  background: rgba(11,27,43,0.06); border: none; border-radius: 10px; padding: 7px;
  cursor: pointer; color: var(--ink); display: flex; transition: background .15s ease;
}
.close-btn:hover { background: rgba(11,27,43,0.14); }

.cards-row {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;
}
@media (max-width: 1100px) { .cards-row { grid-template-columns: repeat(2, 1fr); } }

.info-card {
  background: #fff; border-radius: 14px; overflow: hidden; border: 1px solid var(--line);
  box-shadow: 0 2px 10px rgba(11,27,43,0.06); display: flex; flex-direction: column;
}
.info-card-media { aspect-ratio: 4/3; background: #eef1ef; position: relative; overflow: hidden; }
.info-card-media img { width: 100%; height: 100%; object-fit: cover; display: block; }
.flag-wrap { width: 70%; height: 70%; margin: auto; display: flex; align-items: center; justify-content: center; box-shadow: 0 1px 4px rgba(0,0,0,0.25); border-radius: 4px; overflow: hidden; top: 15%; position: relative; }
.placeholder {
  width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 6px; color: #9aa3a0; background: repeating-linear-gradient(135deg, #f3f5f3, #f3f5f3 8px, #ebeeec 8px, #ebeeec 16px);
}
.placeholder span { font-size: 10.5px; font-weight: 600; }
.info-card-body { padding: 9px 10px 11px; }
.info-card-body h4 { font-family: 'Changa', sans-serif; font-size: 13.5px; font-weight: 700; margin: 0 0 4px; line-height: 1.25; }
.info-card-body p { font-size: 10.8px; line-height: 1.5; color: #5a6360; margin: 0; }

.fact-card {
  background: linear-gradient(135deg, #fff6e3, #fdebc8); border: 1px solid #f1d99a;
  border-radius: 14px; padding: 12px 14px; display: flex; gap: 10px; align-items: flex-start;
}
.fact-icon { color: #b4790d; flex-shrink: 0; margin-top: 1px; }
.fact-card h5 { font-family: 'Changa', sans-serif; font-size: 13.5px; font-weight: 800; margin: 0 0 3px; color: #7a5306; }
.fact-card p { font-size: 12.5px; line-height: 1.6; margin: 0; color: #4a3a10; }

.bottombar {
  flex-shrink: 0; background: var(--navy-2); color: rgba(255,255,255,0.75);
  font-size: 12px; font-weight: 600; padding: 8px 0; display: flex; align-items: center;
  justify-content: center; gap: 8px; border-top: 1px solid rgba(255,255,255,0.07);
}

@media (prefers-reduced-motion: reduce) {
  .pin, .panel { animation: none !important; }
}
`;
