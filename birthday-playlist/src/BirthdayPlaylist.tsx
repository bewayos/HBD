import React, { useState } from "react";

type Track = {
  id: number;
  title: string;
  subtitle: string;
  duration: string;
  body: string;
  icon?: string;
};

const tracks: Track[] = [
  {
    id: 1,
    title: "Track 1 · Намив, ніч і сміх",
    subtitle: "Highlights · Memories",
    duration: "3:38",
    icon: "/icons/namyv.png",
    body: `Ти пам’ятаєш, як ми на Намиві після мого вісімнадцятого ходили ніччю, сміялись так, ніби в ночі немає вух? Камера в руках, монтажі, які перетворювались на цілий архів — хайлайти нашої дурнуватої, але чесної молодості. Це ж був один із тих моментів, які застрягають у пам’яті, ніби хтось намалював їх маркером на стіні.`,
  },
  {
    id: 2,
    title: "Track 2 · Географія на льоду",
    subtitle: "Highlights · Memories",
    duration: "3:22",
    icon: "/icons/geography.png",
    body: `Ти пам’ятаєш, як ми «відвідували» урок Ігоря Васильовича на льоду річки, і намагались вдихнути життя в одноразку, яка відморозила собі акум як і ми дупи? Це була найсерйозніша наука того дня: простіше зрозуміти реальність через побічні речі, так ти менш упереджений, і бляха так воно і вийшло — життя все ж в спогадах складається з слайдшоу випадковостей.`,
  },
  {
    id: 3,
    title: "Track 3 · Одеса: Horror edition",
    subtitle: "Highlights · Memories",
    duration: "3:49",
    icon: "/icons/odesa.png",
    body: `Ти пам’ятаєш той самий одеський будинок, з вайбами відьомської колишньої власниці? Ми вмикали горори, і в якийсь момент вже було не ясно, від чого смішніше й страшніше — від фільму, чи від самої атмосфери. А потім ми дерлись через вікно на балкон, бо треба було довести, що програєш не ти. І я думаю: так, це і є дружба — лізти на холодний балкон серед ночі просто тому, що чому б ні.`,
  },
  {
    id: 4,
    title: "Bonus track · Балкон через вікно",
    subtitle: "Highlights · Memories",
    duration: "4:00",
    icon: "/icons/balcony.png",
    body: `Ми змінились. Стало більше філософії, більше розмов про медицину, біоінженерію, теорії, які нормально звучать тільки о четвертій ранку. Стало більше відстаней між містами й країнами. Але наш специфічний гумор, наші стрибки від дурниць до серйозного, наша здатність знову й знову виходити на контакт — це все залишилось. І це, мабуть, головне.`,
  },
  {
    id: 5,
    title: "Hidden track · Подяка і побажання",
    subtitle: "Message · From me to you",
    duration: "3:58",
    icon: "/icons/hidden.png",
    body: `Тому дякую. За сміх, за наш хаос, за чесність. За те, що після стількох трансформацій ми все ще говоримо однією мовою. І за те, що навіть коли життя розводить нас у різні боки, я знаю: поруч є людина, з якою можна і про світ, і про себе, і про повну нісенітницю.

Нехай цей рік буде новим набором хайлайтів — такими ж яскравими, як ніч на Намиві, такими ж дурними, як балкон через вікно, і такими ж живими, як усі наші розмови, що починаються з «ну, слухай…» і закінчуються тим, що вже світанок.

Зі святом тебе.`,
  },
];

export default function BirthdayPlaylist() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<Track | null>(null);

  const handleOpen = (t: Track) => {
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
            className="hidden md:block ml-2 bg-[#242424] text-sm rounded-full px-4 py-2 w-[360px] focus:outline-none"
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
              <div className="w-44 h-44 rounded-md overflow-hidden shadow-2xl border border-white/10 bg-[#2a2a2a] grid place-items-center">
                <img src="/icons/cover.png" className="w-full h-full object-cover" alt="Cover" />
              </div>
              <div className="space-y-2">
                <div className="text-sm text-white/70">Альбом</div>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Birthday Highlights</h1>
                <div className="text-sm text-white/80 flex items-center gap-2">
                  <img src="/icons/avatar.png" alt="avatar" className="w-6 h-6 rounded-full" />
                  <span>by You</span>
                  <span>•</span>
                  <span>{tracks.length} пісень</span>
                  <span>•</span>
                  <span>~ {tracks.length * 3 + 5} хв</span>
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
                  <div className="flex items-center gap-3 truncate">
                    {t.icon && <img src={t.icon} alt="" className="w-8 h-8 rounded" />}
                    <div className="min-w-0">
                      <div className="font-medium truncate">{t.title}</div>
                      <div className="text-white/60 text-sm truncate">{t.subtitle}</div>
                    </div>
                  </div>
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
