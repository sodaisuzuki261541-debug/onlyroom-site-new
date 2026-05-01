export default function RealEstateFurnitureLP() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      
      {/* Header */}
      <header className="border-b border-neutral-800 sticky top-0 bg-neutral-950/90 backdrop-blur z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl">Only Room</div>
          <div className="text-sm text-neutral-400">東京・埼玉対応 / 家具セット販売・設置専門</div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm tracking-widest text-neutral-400">PREMIUM MOVE-IN PACKAGE</p>
          <h1 className="text-5xl font-bold leading-tight mt-3">
            引っ越したその日から、<br/>完成された部屋へ。
          </h1>
          <p className="mt-4 text-neutral-300">
            家具・家電・インテリアをまとめてコーディネートし、搬入から設置まで対応。
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <a className="px-6 py-3 rounded-2xl bg-green-500 font-semibold">
              LINEで無料相談
            </a>
            <button className="px-6 py-3 rounded-2xl border border-neutral-600">
              料金を見る
            </button>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden h-96 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1200&q=80"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Swipe Before After */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold">Before / After（スワイプ）</h2>
        <p className="text-neutral-400 mt-2">左右にスワイプできます</p>

        <div className="mt-6 flex gap-4 overflow-x-auto snap-x snap-mandatory">
          
          <div className="min-w-full snap-center rounded-2xl overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute top-4 left-4 bg-black/60 px-3 py-1 rounded">BEFORE</div>
          </div>

          <div className="min-w-full snap-center rounded-2xl overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1400&q=80"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute top-4 left-4 bg-black/60 px-3 py-1 rounded">AFTER</div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">まずはLINEで相談</h2>
        <p className="text-neutral-400 mt-2">最短当日でご提案可能</p>
        <a className="mt-6 inline-block px-6 py-4 bg-green-500 rounded-2xl font-semibold">
          LINEで相談する
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-neutral-500">
          © Only Room
        </div>
      </footer>

    </div>
  )
}
