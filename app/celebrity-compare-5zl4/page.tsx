const people = [
  {
    name: "Elon Musk",
    field: "Tech / Space",
    achievement: "Tesla, SpaceX, X (Twitter) — revolutionized EVs and commercial space travel",
    country: "🇺🇸 USA / 🇿🇦 South Africa",
  },
  {
    name: "Jeff Bezos",
    field: "E-commerce / Space",
    achievement: "Founded Amazon; grew it into the world's largest online retailer and cloud provider",
    country: "🇺🇸 USA",
  },
  {
    name: "Bill Gates",
    field: "Tech / Philanthropy",
    achievement: "Co-founded Microsoft; Bill & Melinda Gates Foundation fights global disease and poverty",
    country: "🇺🇸 USA",
  },
  {
    name: "Mark Zuckerberg",
    field: "Social Media / AI",
    achievement: "Built Facebook into Meta; 3 billion+ users across Facebook, Instagram, WhatsApp",
    country: "🇺🇸 USA",
  },
  {
    name: "Warren Buffett",
    field: "Finance / Investment",
    achievement: "Turned Berkshire Hathaway into a $900B+ conglomerate; 'Oracle of Omaha'",
    country: "🇺🇸 USA",
  },
  {
    name: "Steve Jobs",
    field: "Tech / Design",
    achievement: "Co-founded Apple; introduced the Mac, iPod, iPhone, and iPad — redefining consumer tech",
    country: "🇺🇸 USA",
  },
  {
    name: "Cristiano Ronaldo",
    field: "Sports / Football",
    achievement: "5× Ballon d'Or; 900+ career goals; most-followed person on Instagram",
    country: "🇵🇹 Portugal",
  },
  {
    name: "Beyoncé",
    field: "Music / Entertainment",
    achievement: "32 Grammy Awards (most ever); global tours; cultural icon and businesswoman",
    country: "🇺🇸 USA",
  },
  {
    name: "Jack Ma",
    field: "E-commerce / Fintech",
    achievement: "Founded Alibaba and Ant Group; pioneered e-commerce across Asia",
    country: "🇨🇳 China",
  },
  {
    name: "Oprah Winfrey",
    field: "Media / Philanthropy",
    achievement: "Built a media empire; Oprah's Book Club; donated $500M+ to education",
    country: "🇺🇸 USA",
  },
]

export default function CelebrityCompare() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight mb-3 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 bg-clip-text text-transparent">
            世界を変えた10人
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            世界的な有名人・起業家10人の分野、代表的な実績、出身国を一覧で比較できるページです。
          </p>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto rounded-2xl shadow-2xl border border-slate-700">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-800 text-slate-300 uppercase text-xs tracking-widest">
                <th className="px-6 py-4 text-left w-8">#</th>
                <th className="px-6 py-4 text-left">名前</th>
                <th className="px-6 py-4 text-left">主な分野</th>
                <th className="px-6 py-4 text-left">代表的な実績</th>
                <th className="px-6 py-4 text-left">出身国</th>
              </tr>
            </thead>
            <tbody>
              {people.map((p, i) => (
                <tr
                  key={p.name}
                  className={`border-t border-slate-700 transition-colors hover:bg-purple-900/30 ${
                    i % 2 === 0 ? "bg-slate-800/50" : "bg-slate-900/50"
                  }`}
                >
                  <td className="px-6 py-4 font-bold text-slate-500">{i + 1}</td>
                  <td className="px-6 py-4 font-semibold text-white whitespace-nowrap">{p.name}</td>
                  <td className="px-6 py-4">
                    <span className="inline-block bg-purple-800/60 text-purple-200 text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap">
                      {p.field}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-300 leading-relaxed">{p.achievement}</td>
                  <td className="px-6 py-4 text-slate-300 whitespace-nowrap">{p.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {people.map((p, i) => (
            <div
              key={p.name}
              className="bg-slate-800/70 border border-slate-700 rounded-2xl p-5 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-slate-500 font-bold text-lg w-6">{i + 1}</span>
                <h2 className="text-lg font-bold text-white">{p.name}</h2>
                <span className="ml-auto inline-block bg-purple-800/60 text-purple-200 text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap">
                  {p.field}
                </span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-2">{p.achievement}</p>
              <p className="text-slate-400 text-xs">{p.country}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-600 text-xs mt-10">
          情報は一般公開データに基づきます。
        </p>
      </div>
    </main>
  )
}
