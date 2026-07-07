// Paulino Marcenaria & Carpintaria - LP
const WHATSAPP_NUMBER = "5511969694683";

function whatsappLink(msg) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// Bind all [data-wa] anchors to WhatsApp
document.querySelectorAll("[data-wa]").forEach((el) => {
  const msg = el.getAttribute("data-wa") || "Olá!";
  el.setAttribute("href", whatsappLink(msg));
  el.setAttribute("target", "_blank");
  el.setAttribute("rel", "noreferrer");
});

// Countdown to midnight
const pad = (n) => String(n).padStart(2, "0");
function updateCountdown() {
  const now = new Date();
  const end = new Date(now);
  end.setHours(23, 59, 59, 999);
  let diff = Math.max(0, end.getTime() - now.getTime());
  const h = Math.floor(diff / 3_600_000); diff -= h * 3_600_000;
  const m = Math.floor(diff / 60_000); diff -= m * 60_000;
  const s = Math.floor(diff / 1000);
  document.getElementById("cd-h").textContent = pad(h);
  document.getElementById("cd-m").textContent = pad(m);
  document.getElementById("cd-s").textContent = pad(s);
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Services
const SERVICES = [
  { icon: "🪚", title: "Marcenaria para casas e apartamentos", text: "Ambientes mais bonitos, organizados e funcionais, feitos sob medida." },
  { icon: "🔨", title: "Carpintaria residencial", text: "Trabalhos em madeira com qualidade e cuidado do início ao fim." },
  { icon: "🪵", title: "Móveis planejados em madeira", text: "Cozinhas, dormitórios, closets, painéis e muito mais." },
  { icon: "📐", title: "Projetos sob medida", text: "Cada projeto pensado conforme o espaço e a necessidade do cliente." },
  { icon: "🛠️", title: "Reformas e personalização", text: "Melhorias e ajustes para renovar o ambiente sem obra pesada." },
  { icon: "🚚", title: "Entrega e instalação", text: "Cuidado também na etapa final — entregue pronto pra usar." },
];
const svcGrid = document.getElementById("servicos-grid");
if (svcGrid) {
  svcGrid.innerHTML = SERVICES.map(s => `
    <article class="card svc">
      <div class="svc-icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <p>${s.text}</p>
    </article>
  `).join("");
}

// Differentials
const DIFFS = [
  { t: "Atendimento próximo e direto", d: "Você fala com quem faz o serviço, sem intermediários." },
  { t: "Cuidado do início ao fim", d: "Atenção desde a contratação até a entrega final." },
  { t: "Material de qualidade", d: "Serviço feito com zelo e foco em acabamento premium." },
  { t: "Experiência em casas e apartamentos", d: "Anos atendendo residências em Carapicuíba e região." },
  { t: "Feito sob medida", d: "Cada projeto tratado de forma única e personalizada." },
  { t: "Prazo respeitado", d: "Combinamos a data e entregamos direitinho." },
];
const diffGrid = document.getElementById("diffs-grid");
if (diffGrid) {
  diffGrid.innerHTML = DIFFS.map((d, i) => `
    <div class="card diff">
      <div class="diff-num">0${i + 1}</div>
      <h3>${d.t}</h3>
      <p>${d.d}</p>
    </div>
  `).join("");
}

// Form
const form = document.getElementById("orc-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const regiao = document.getElementById("regiao").value.trim();
    const desc = document.getElementById("desc").value.trim();
    const err = document.getElementById("err");
    if (!nome || !regiao || !desc) {
      err.textContent = "Por favor, preencha todos os campos antes de enviar.";
      err.hidden = false;
      return;
    }
    err.hidden = true;
    const msg = `Olá, vim pelo site da Paulino Marcenaria & Carpintaria.\nMeu nome é: ${nome}\nMinha região/bairro é: ${regiao}\nQuero orçamento para: ${desc}`;
    window.open(whatsappLink(msg), "_blank");
  });
}
