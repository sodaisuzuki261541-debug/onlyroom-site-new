export default function Page() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      <header className="border-b border-neutral-800 sticky top-0 bg-neutral-950/90 backdrop-blur z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl">Only Room</div>
          <div className="text-sm text-neutral-400">
            東京・埼玉対応 / 家具セット販売・設置専門
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm tracking-widest text-neutral-400">
            PREMIUM MOVE-IN PACKAGE
          </p>

          <h1 className="text-5xl font-bold leading-tight mt-3">
            自分だけの部屋を、
            <br />
            つくる。
          </h1>

          <p className="mt-4 text-base text-neutral-400">
            住まいを、その日から完成形に。
          </p>

          <p className="mt-4 text-lg text-neutral-300">
            ソファ・ベッド・家電・インテリアをまとめてセット販売。
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <button className="px-6 py-3 rounded-2xl bg-white text-black font-semibold">
              無料相談する
            </button>

            <a
              href="https://line.me"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-2xl bg-green-500 text-white font-semibold"
            >
              LINEで相談する
            </a>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden h-96 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1200&q=80"
            className="w-full h-full object-cover"
            alt="room"
          />
        </div>
      </section>

      <footer className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-neutral-500">
          © Only Room
        </div>
      </footer>
    </div>
  );
}
