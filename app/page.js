export default function RealEstateFurnitureLP() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      
      {/* Header */}
      <header className="border-b border-neutral-800 sticky top-0 bg-neutral-950/90 backdrop-blur z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl">Only Room</div>
          <div className="text-sm text-neutral-400">
            東京・埼玉 / 家具付き部屋をワンストップ提供
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm tracking-widest text-neutral-400">
            MOVE-IN READY SERVICE
          </p>

          <h1 className="text-5xl font-bold leading-tight mt-3">
            引っ越したその日から、<br />完成された部屋へ。
          </h1>

          <p className="mt-5 text-neutral-300 text-lg">
            家具・家電・インテリアをまとめてコーディネート。搬入・設置まで一括対応し、すぐに暮らせる空間をつくります。
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a className="px-6 py-3 rounded-2xl bg-green-500 text-white font-semibold">
              LINEで無料相談
            </a>
            <button className="px-6 py-3 rounded-2xl border border-neutral-600">
              料金を見る
            </button>
          </div>

          <p className="mt-4 text-sm text-neutral-400">
            最短当日対応 / オンライン相談OK
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden h-96 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1200&q=80"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
        {[
          ["家具・家電セット", "生活に必要なものを丸ごとコーディネート"],
          ["搬入・設置込み", "届いたその日にすぐ生活スタート"],
          ["部屋別デザイン", "間取り・雰囲気に合わせて提案"]
        ].map(([t, d]) => (
          <div key={t} className="p-6 rounded-2xl bg-neutral-900">
            <h3 className="text-xl font-semibold">{t}</h3>
            <p className="mt-3 text-neutral-400">{d}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold">料金プラン</h2>
        <p className="mt-3 text-neutral-400">
          予算とライフスタイルに合わせて選べます
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800">
            <h3 className="text-xl font-semibold">ライト</h3>
            <p className="mt-2 text-3xl font-bold">¥98,000〜</p>
            <p className="mt-3 text-neutral-400">単身向け最低限セット</p>
          </div>

          <div className="p-6 rounded-2xl bg-white text-black scale-105">
            <h3 className="text-xl font-semibold">人気</h3>
            <p className="mt-2 text-3xl font-bold">¥198,000〜</p>
            <p className="mt-3 text-neutral-700">家具＋家電＋設置込み</p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800">
            <h3 className="text-xl font-semibold">プレミアム</h3>
            <p className="mt-2 text-3xl font-bold">¥398,000〜</p>
            <p className="mt-3 text-neutral-400">高級コーデ完全監修</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">まずは無料で相談</h2>
        <p className="mt-3 text-neutral-400">
          30分以内に担当からご連絡します
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a className="px-6 py-4 rounded-2xl bg-green-500 font-semibold">
            LINEで相談
          </a>
        </div>
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
