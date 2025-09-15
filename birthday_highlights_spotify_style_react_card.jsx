import React, { useState } from "react";

// Spotify‑style birthday playlist. Single‑file React + Tailwind.
// Interactions implemented: clicking a track opens a modal with the story text.
// All other UI elements are decorative to mirror the screenshot.

const tracks = [
  {
    id: 1,
    title: "Track 1 · Намив, ніч і сміх",
    subtitle: "Highlights · Memories",
    duration: "3:38",
    body: `Ніч на Намиві пахла теплом асфальту і трохи морем. Мені 18, у тебе камера,
ми сміємося так, ніби весь район — наша сцена. Потім з цих фрагментів ти склеїш
хайлайт, і він з часом стане тим самим кадром, що запускає ностальгію одним кліком.`,
  },
  {
    id: 2,
    title: "Track 2 · Географія на льоду",
    subtitle: "Highlights · Memories",
    duration: "3:22",
    body: `Мали бути в класі, але були на річці. Лід тримав нас обережно, одноразка
мерзла і не хотіла працювати — ми зігрівали її долонями і власною дурістю. Параграфи
про рельєф світу чекали в зошиті, а ми вивчали карту свободи під ногами.`,
  },
  {
    id: 3,
    title: "Track 3 · Одеса: Horror edition",
    subtitle: "Highlights · Memories",
    duration: "3:49",
    body: `Будинок із історією. Дивимось горори, і здається, що крихітні тіні дивляться у
відповідь. Десята хвилина сміху перекриває двадцять хвилин лячного шурхоту. Після цього
я надовго запам'ятав формулу: страх + сміх = правильна близькість.`,
  },
  {
    id: 4,
    title: "Bonus track · Балкон через вікно",
    subtitle: "Highlights · Memories",
    duration: "4:00",
    body: `Ми ліземо через вікно на балкон, бо так домовлено. Холод кусає пальці, а
суперечку виграєш ти — але насправді обидва перемагаємо: слово тримається, дружба теж.`,
  },
  {
    id: 5,
    title: "Hidden track · Дякую і з Днем народження",
    subtitle: "Message · From me to you",
    duration: "3:58",
    body: `Дякую за наш спільний хаос і ясність, за здатність сміятися і говорити серйозно
в одне й те саме дихання. Нехай цей рік буде як ніч на Намиві — темний за розкладом, але
яскравий за відчуттям. Нехай двері відчиняються навіть тоді, коли доводиться лізти через
вікно. Зі святом тебе. Ти поруч — і це головне.`,
  },
];

export default function BirthdayPlaylist() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(null as null | typeof tracks[number]);

  const handleOpen = (t: typeof tracks[number]) => {
    setCurrent(t);
    setOpen(true);
  };

  return (
    <div className="min-h-screen w-full bg-[#121212] text-white">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 md:px-6 h-14 bg-black/60 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-white/10 w-8 h-8 grid place-items-center">⟵</div>
          <div className="rounded-full bg-white/10 w-8 h-8 grid place-items-center">⟶</div>
          <input
            placeholder="Що ви хочете відтворити?"
            className="hidden md:block ml-2 bg-white/10/ bg-[#242424] text-sm rounded-full px-4 py-2 w-[360px] focus:outline-none"
          />
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <button className="hover:text-white">Premium</button>
          <button className="hover:text-white">Підтримка</button>
          <button className="hover:text-white">Завантажити</button>
          <button className="px-4 py-1 rounded-full bg-white text-black font-semibold">Увійти</button>
        </div>
      </div>

      {/* Body */}
      <div className="flex">
        {/* Left sidebar */}
        <aside className="hidden lg:block w-72 p-4 space-y-3 bg-black/40 border-r border-white/5">
          <div className="text-white/60 text-xs uppercase">Моя бібліотека</div>
          <div className="bg-[#1f1f1f] rounded-xl p-4 space-y-2">
            <div className="font-semibold">Створіть свій перший плейліст</div>
            <div className="text-sm text-white/70">Це легко. Ми вам допоможемо.</div>
            <button className="text-black bg-white rounded-full px-3 py-1 text-sm font-semibold">Створити плейліст</button>
          </div>
          <div className="bg-[#1f1f1f] rounded-xl p-4 space-y-2">
            <div className="font-semibold">Підберімо кілька подкастів</div>
            <div className="text-sm text-white/70">Ми повідомлятимемо про нові епізоди.</div>
            <button className="text-black bg-white rounded-full px-3 py-1 text-sm font-semibold">Огляд подкастів</button>
          </div>
          <div className="text-xs text-white/50 pt-2 space-y-1">
            <div>Юридична інформація</div>
            <div>Політика конфіденційності</div>
            <div>Політика щодо файлів cookie</div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1">
          {/* Header like album banner */}
          <div className="relative overflow-hidden">
            <div className="h-56 md:h-64 w-full bg-gradient-to-b from-[#b22222] to-transparent px-6 md:px-8 pt-8 pb-6 flex gap-6 items-end">
              {/* Cover */}
              <div className="w-44 h-44 rounded-md overflow-hidden shadow-2xl border border-white/10 bg-[#2a2a2a] grid place-items-center text-white/60 text-xs">
                COVER
              </div>
              <div className="space-y-2">
                <div className="text-sm text-white/70">Альбом</div>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Birthday Highlights</h1>
                <div className="text-sm text-white/80 flex items-center gap-2">
                  <img src="https://avatars.githubusercontent.com/u/9919?s=40" alt="avatar" className="w-6 h-6 rounded-full" />
                  <span>by You</span>
                  <span>•</span>
                  <span>{tracks.length} пісень</span>
                  <span>•</span>
                  <span>~ {tracks.reduce((a,_)=>a+1,0)*3 + 5} хв</span>
                </div>
              </div>
            </div>
          </div>

          {/* Controls row */}
          <div className="px-4 md:px-6 py-4 flex items-center gap-4 border-b border-white/5">
            <button className="h-12 w-12 rounded-full bg-[#1DB954] grid place-items-center text-black font-bold text-xl">▶</button>
            <button className="h-12 w-12 rounded-full bg-[#2a2a2a] grid place-items-center">＋</button>
            <button className="h-12 w-12 rounded-full bg-[#2a2a2a] grid place-items-center">⋯</button>
          </div>

          {/* Track table */}
          <div className="px-2 md:px-4">
            <div className="grid grid-cols-[40px_1fr_200px_80px] px-2 py-3 text-white/60 text-sm border-b border-white/5">
              <div className="text-center">#</div>
              <div>Назва</div>
              <div className="hidden md:block">Список</div>
              <div className="text-right">⏱️</div>
            </div>
            {tracks.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => handleOpen(t)}
                className="w-full grid grid-cols-[40px_1fr_200px_80px] items-center px-2 py-3 hover:bg-white/5 transition text-left"
              >
                <div className="text-center text-white/50">{idx + 1}</div>
                <div className="truncate">
                  <div className="font-medium truncate">{t.title}</div>
                  <div className="text-white/60 text-sm truncate">{t.subtitle}</div>
                </div>
                <div className="hidden md:block text-white/60 truncate">Birthday Highlights</div>
                <div className="text-right text-white/60">{t.duration}</div>
              </button>
            ))}
          </div>
        </main>
      </div>

      {/* Modal */}
      {open && current && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4" onClick={() => setOpen(false)}>
          <div className="max-w-2xl w-full bg-[#181818] rounded-2xl border border-white/10 shadow-xl" onClick={(e)=>e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="font-semibold truncate pr-4">{current.title}</div>
              <button onClick={()=>setOpen(false)} className="text-white/60 hover:text-white">✕</button>
            </div>
            <div className="p-5 text-white/90 leading-relaxed whitespace-pre-wrap">{current.body}</div>
            <div className="p-4 flex items-center justify-end gap-2 border-t border-white/10">
              <button onClick={()=>setOpen(false)} className="px-3 py-1.5 rounded-full bg-white text-black font-semibold">Закрити</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
