import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "Я тебя люблю",
      cover:
        "https://i1.sndcdn.com/artworks-000639970264-ydsmnp-t500x500.jpg",
      artist: "Где Фантом?",
      audio: "https://mp3uks.ru/mp3/files/gde-fantom-ya-tebya-lyublyu-mp3.mp3",
      color: ["#415D85", "#2D425E"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Daylight",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Keep Going",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Закрой за мной дверь, я ухожу",
      cover:
        "data:image/jpeg;base64,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",
      artist: "Kino",
      audio: "https://cdn1.sefon.pro/files/prev/94/%D0%92%D0%B8%D0%BA%D1%82%D0%BE%D1%80%20%D0%A6%D0%BE%D0%B9%20-%20%D0%97%D0%B0%D0%BA%D1%80%D0%BE%D0%B9%20%D0%B7%D0%B0%20%D0%BC%D0%BD%D0%BE%D0%B9%20%D0%B4%D0%B2%D0%B5%D1%80%D1%8C%2C%20%D1%8F%20%D1%83%D1%85%D0%BE%D0%B6%D1%83%20%28192kbps%29.mp3",
      color: ["black", "#361911"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Reflection",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Under the City Stars",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
        name: 'Cristal & МОЁТ',
        cover: 'https://linkstorage.linkfire.com/medialinks/images/c221ea8f-239c-4f73-a69a-d9d9a3069269/artwork-440x440.jpg',
        artist: 'MORGENSHTERN',
        audio: 'https://muz-tune.ru/uploads/music/2020/12/Morgenshtern_-_Cristal_Moyot.mp3',
        color: ['#040406', '#46545A'],
        id: uuidv4(),
        active: false
    }
  ];
}

export default chillHop;