const keyphrases = [
  ['#ramenbet', 'ramenbet'],
  ['#раменбет', 'раменбет'],
  ['#ramenbetзеркало', 'ramenbet зеркало'],
  ['#раменбетзеркало', 'раменбет зеркало'],
  ['#ramenbetофициальныйсайт', 'ramenbet официальный сайт'],
  ['#раменбетофициальныйсайт', 'раменбет официальный сайт'],
  ['#раменбетрабочеезеркало', 'раменбет рабочее зеркало'],
  ['#ramenbetказино', 'ramenbet казино'],
  ['#раменбетказино', 'раменбет казино'],
]

export default function Page() {
  return (
    <main className="rmb-shell">
      <header className="rmb-hero">
        <nav className="rmb-nav" aria-label="Основная навигация">
          <a className="rmb-mark" href="#top" aria-label="RamenBet — в начало"><span>R</span> RamenBet</a>
          <a className="rmb-navlink" href="#guide">Гид игрока <span aria-hidden="true">↗</span></a>
        </nav>
        <div className="rmb-hero-grid" id="top">
          <div className="rmb-hero-copy">
            <p className="rmb-kicker">Игровая точка без лишнего шума</p>
            <h1>RamenBet — понятное казино для спокойной игры</h1>
            <p className="rmb-lede">Быстрый вход, знакомые игры и ясная навигация. Собрали главное о площадке в одном коротком гиде для новых и опытных игроков.</p>
            <a className="rmb-action" href="#guide">Открыть гид <span aria-hidden="true">↓</span></a>
          </div>
          <figure className="rmb-hero-art">
            <img src="/ramenbet-night.png" alt="Рулетка и игровые фишки в тёплом свете" width="1200" height="675" />
            <figcaption>Игра начинается с правильного темпа</figcaption>
          </figure>
        </div>
      </header>

      <section className="rmb-guide" id="guide" aria-labelledby="guide-title">
        <div className="rmb-section-intro">
          <p className="rmb-kicker">Коротко и по делу</p>
          <h2 id="guide-title">Как найти RamenBet и начать без путаницы</h2>
          <p>Ниже — ответы на самые частые запросы игрока, которому важны скорость, понятные правила и аккуратный старт.</p>
        </div>
        <div className="rmb-articles">
          <article className="rmb-article">
            <span className="rmb-index">01</span>
            <h2>ramenbet и раменбет: один бренд, удобный формат</h2>
            <p>Запросы ramenbet и раменбет ведут к одному названию. RamenBet рассчитан на простую навигацию: каталог открывается быстро, а популярные разделы не приходится искать по длинному меню. Перед регистрацией проверьте адрес страницы и ознакомьтесь с правилами ответственной игры.</p>
          </article>
          <article className="rmb-article">
            <span className="rmb-index">02</span>
            <h2>ramenbet зеркало и раменбет зеркало — доступ без лишних шагов</h2>
            <p>Если основной адрес временно не загружается, игроки ищут ramenbet зеркало или раменбет зеркало. Рабочая ссылка должна открываться по защищённому соединению и сохранять привычный интерфейс. Не вводите данные на случайных страницах: сравните адрес, проверьте замок в браузере и только потом переходите к аккаунту.</p>
          </article>
          <article className="rmb-article">
            <span className="rmb-index">03</span>
            <h2>ramenbet официальный сайт и раменбет официальный сайт</h2>
            <p>Запрос ramenbet официальный сайт и вариант раменбет официальный сайт помогают найти первоисточник. На официальной странице обычно доступны правила, поддержка, информация о бонусах и способы пополнения. RamenBet не обещает лёгких выигрышей: воспринимайте казино как развлечение, задавайте лимит бюджета и не пытайтесь отыгрываться.</p>
          </article>
          <article className="rmb-article">
            <span className="rmb-index">04</span>
            <h2>раменбет рабочее зеркало и ramenbet казино</h2>
            <p>Когда нужен актуальный вход, фраза раменбет рабочее зеркало помогает отфильтровать неработающие варианты. А запрос ramenbet казино или раменбет казино — быстро перейти к игровому разделу. Выбирайте знакомую механику, изучите ставку и остановитесь, если игра перестала быть комфортной.</p>
          </article>
        </div>
      </section>

      <section className="rmb-note" aria-labelledby="note-title">
        <div>
          <p className="rmb-kicker">Личный ориентир</p>
          <h2 id="note-title">Игра должна оставаться частью вечера, а не его причиной</h2>
        </div>
        <p>Ставьте только ту сумму, которую готовы потратить на отдых. Делайте паузы, не используйте заемные средства и обращайтесь в поддержку, если появились вопросы по аккаунту.</p>
      </section>

      <footer className="rmb-footer">
        <div className="rmb-footer-top">
          <a className="rmb-mark" href="#top"><span>R</span> RamenBet</a>
          <p>Понятный маршрут игрока · 18+</p>
        </div>
        <nav className="rmb-tags" aria-label="Поиск по ключевым фразам">
          {keyphrases.map(([href, label]) => <a key={href} href={`#${href.slice(1)}`}>{label}</a>)}
        </nav>
        <p className="rmb-copyright">Информация носит ознакомительный характер. Играйте ответственно.</p>
      </footer>
    </main>
  )
}
