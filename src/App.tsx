import React from 'react';
import { Mail, MapPin, Building2, Zap, Calendar, Users, Ban as Bank, Briefcase } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/logo.svg" alt="SDコンサル株式会社" className="h-16" />
          </div>
          <ul className="hidden md:flex space-x-8">
            {['ホーム', '会社案内', '事業内容', '実績紹介'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item}`} 
                  className="text-gray-600 hover:text-[#00B6D6] transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="bg-black/50 absolute inset-0" />
        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            暮らしに寄り添い、未来をデザインする
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            確かな技術と豊かな経験が支える提案力
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20" id="会社案内">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">会社案内</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 mb-12 leading-relaxed text-lg">
              SDコンサル株式会社は、一級建築士事務所として、関西を拠点に全国の建築設計業務とコンサルティング業務を展開しています。私たちは、豊かな経験と確かな技術で、多様なニーズに応えるソリューションを提供します。
            </p>

            {/* 会社概要テーブル */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
              <table className="w-full">
                <tbody>
                  <tr className="border-b">
                    <th className="py-4 px-6 bg-gray-50 text-left w-1/4">商号</th>
                    <td className="py-4 px-6">SDコンサル株式会社</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-4 px-6 bg-gray-50 text-left">住所</th>
                    <td className="py-4 px-6">兵庫県姫路市福沢町１３７－５０５</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-4 px-6 bg-gray-50 text-left">メールアドレス</th>
                    <td className="py-4 px-6">
                      <a href="mailto:5522daijirou@gmail.com" className="text-[#00B6D6] hover:underline">
                        5522daijirou@gmail.com
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-4 px-6 bg-gray-50 text-left">沿革</th>
                    <td className="py-4 px-6">
                      <ul className="list-none">
                        <li>昭和５９年３月１日　個人事務所開設</li>
                        <li>平成１８年４月より　楠田一級建築設計事務所と合同事業開始</li>
                        <li>平成２７年８月20日　SDコンサル株式会社設立</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-4 px-6 bg-gray-50 text-left">事業種目</th>
                    <td className="py-4 px-6">
                      <ol className="list-decimal list-inside">
                        <li>建築設計、監理及び測量開発並びにこれらのコンサルティング業務</li>
                        <li>建築一式工事及び土木一式工事、その総合的コンサルティング業務</li>
                        <li>前各号に付帯関連する一切の事業</li>
                      </ol>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-4 px-6 bg-gray-50 text-left">資本金</th>
                    <td className="py-4 px-6">３００万円</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-4 px-6 bg-gray-50 text-left">事務所登録</th>
                    <td className="py-4 px-6">一級建築士事務所　　登録番号（一級）第４５００５６号</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-4 px-6 bg-gray-50 text-left">役員</th>
                    <td className="py-4 px-6">
                      <ul className="list-none">
                        <li>代表取締役　島津　大二郎（一級建築士）</li>
                        <li>執行役員　藤本　光太郎</li>
                        <li>顧問　玉木　敏彦（一級建築士）</li>
                        <li>顧問　大西　亨</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-4 px-6 bg-gray-50 text-left">職員</th>
                    <td className="py-4 px-6">技術関係職員　２名　　事務関係職員　１名</td>
                  </tr>
                  <tr>
                    <th className="py-4 px-6 bg-gray-50 text-left">取引銀行</th>
                    <td className="py-4 px-6">みずほ銀行　みなと銀行　但陽信用金庫　淡陽信用組合</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50" id="事業内容">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">事業内容</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-[#FF4B26] mb-6">
                <Building2 className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">建築設計業務</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                温もりあふれる木造建築から、機能性と強度を兼ね備えた軽量鉄骨建築まで、幅広い設計に対応。細部にまでこだわり、使い手の目線に立った空間づくりを大切にしています。
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-[#00B6D6] mb-6">
                <Zap className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">コンサルタント業務</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                系統用蓄電池や太陽光発電所の用地買い取り業務を通じて、再生可能エネルギーの普及と持続可能な社会の実現に貢献しています。豊富な知見と実績を活かし、複雑な調整や交渉にも柔軟に対応いたします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20" id="実績紹介">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">実績紹介</h2>
          
          {/* 建築関係 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">建築設計業務</h3>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[768px]">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-4 px-6 text-left">事業名</th>
                    <th className="py-4 px-6 text-left">場所</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['高岡小学校給食センター新築工事', '兵庫県姫路市'],
                    ['手柄幼稚園新築工事', '兵庫県姫路市'],
                    ['城陽保育園新築工事', '兵庫県姫路市'],
                    ['野里保育園新築工事', '兵庫県姫路市'],
                    ['特別養護老人ホーム「こころ広畑」１００床新築工事', '兵庫県姫路市'],
                    ['老人健康保健施設「こころ上牧」８０床新築工事', '奈良県北葛城郡'],
                    ['特別養護老人ホーム「こころ入間」８０床新築工事', '埼玉県入間郡'],
                    ['特別養護老人ホーム「さくら苑」７０床新築工事', '兵庫県加古川市'],
                    ['特別養護老人ホーム「宏智会」７０床新築工事', '兵庫県加東市'],
                    ['老人健康保健施設「東和」１００床新築工事', '大阪府大阪市'],
                    ['厚生会綱島病院新築工事', '兵庫県姫路市'],
                    ['市川町老人福祉センター新築工事', '兵庫県神崎郡'],
                    ['特別養護老人ホーム「ひまわり園」７０床新築工事', '兵庫県神崎郡'],
                    ['特別養護老人ホーム「ゆめの里」７０床新築工事', '兵庫県姫路市'],
                    ['障害者支援施設「オレンジ西宮」８０床新築工事', '兵庫県西宮市'],
                    ['柴田耳鼻咽喉科医院新築工事', '兵庫県姫路市'],
                    ['高田医院新築工事', '兵庫県宍粟市'],
                  ].map((item, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-6">{item[0]}</td>
                      <td className="py-4 px-6">{item[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 土木関係 */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">コンサルタント業務</h3>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[768px]">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-4 px-6 text-left">事業名</th>
                    <th className="py-4 px-6 text-left">場所</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['姫路グリーンハイツ（２３ha)宅地開発申請', '兵庫県姫路市'],
                    ['打越太陽光発電申請及びコンサルティング', '兵庫県姫路市'],
                    ['姫路「さつきが丘」（３２０区画）宅地開発申請', '兵庫県姫路市'],
                    ['夢前町太陽光発電林地開発及びコンサルティング', '兵庫県姫路市'],
                    ['雲仙太陽光発電林地開発及びコンサルティング', '長崎県雲仙市'],
                    ['岡山県建部町太陽光発電測量設計及びコンサルティング', '岡山県岡山市'],
                    ['三田市太陽光発電測量設計及びコンサルティング', '兵庫県三田市'],
                    ['系統用蓄電池プロジェクトの建設地の戦略的評価および選定', '西日本全域'],
                  ].map((item, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-6">{item[0]}</td>
                      <td className="py-4 px-6">{item[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <img src="/logo-white.svg" alt="SDコンサル株式会社" className="h-16 mb-4" />
              <p className="text-gray-400">
                法人番号：9140001099134
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">
                Copyright © SDコンサル株式会社. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
