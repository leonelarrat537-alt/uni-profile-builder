const areaData = {
  economia: {
    title: 'Economia',
    text: 'A IA sugere oportunidades ligadas a análise de mercado, educação financeira, pesquisa, dados, empreendedorismo e projetos de impacto social.',
    items: [
      'Projetos de análise econômica local e regional',
      'Modelos de negócios e investimentos simulados',
      'Pesquisa e produção de textos acadêmicos ou de opinião',
      'Programas de educação financeira para estudantes'
    ]
  },
  financas: {
    title: 'Finanças',
    text: 'Sugestões focadas em educação financeira, orçamento, investimentos, planejamento pessoal e análises de mercado com impacto prático.',
    items: [
      'Simulações de carteira e análise de risco',
      'Relatórios sobre comportamento de consumo e economia pessoal',
      'Workshops de educação financeira para jovens',
      'Projetos de análise de investimentos e finanças sustentáveis'
    ]
  },
  negocios: {
    title: 'Administração e negócios',
    text: 'A plataforma promove proposta de criação de negócios, validação de modelos, pesquisa de mercado e desenvolvimento de liderança.',
    items: [
      'Mini empresa com solução para uma dor real',
      'Pesquisas de mercado e mapa de clientes',
      'Planejamento financeiro e estratégia',
      'Projetos de empreendedorismo social e inovação'
    ]
  },
  engenharia: {
    title: 'Engenharia',
    text: 'Para engenharia, a IA enfatiza prototipagem, automação, resolução de problemas tangíveis e soluções com impacto em tecnologia ou sustentabilidade.',
    items: [
      'Protótipos com materiais simples e soluções práticas',
      'Projetos robotizados ou de automação',
      'Iniciativas de energia, transporte e sustentabilidade',
      'Relatórios técnicos e desafios de engenharia'
    ]
  },
  computacao: {
    title: 'Computação e tecnologia',
    text: 'A área oferece oportunidades em desenvolvimento de software, automação, sites, ferramentas digitais e projetos com solução concreta para problemas reais.',
    items: [
      'Aplicativos e sites para problemas reais',
      'Projetos de automação e produtividade',
      'Desenvolvimento de ferramentas open source',
      'Aplicações de dados, dashboards e análise de performance'
    ]
  },
  ia: {
    title: 'Inteligência artificial',
    text: 'A IA sugere projetos com análise de dados, ferramentas inteligentes, modelagem preditiva e uso ético de tecnologia em contextos reais.',
    items: [
      'Projetos de aprendizado de máquina aplicados a problemas locais',
      'Modelos para classificação, recomendação e análise de texto',
      'Ferramentas com impacto educacional, social ou de produtividade',
      'Exploração de ética, viés e uso responsável da IA'
    ]
  },
  medicina: {
    title: 'Medicina',
    text: 'A plataforma sugere projetos com educação em saúde, prevenção, pesquisa e impacto em bem-estar e saúde pública.',
    items: [
      'Campanhas de conscientização em saúde',
      'Projetos de prevenção e educação',
      'Leitura e síntese de artigos científicos',
      'Iniciativas com apoio comunitário e saúde mental'
    ]
  },
  biologia: {
    title: 'Biologia',
    text: 'Projetos que ligam ciência, meio ambiente, ecologia e evolução a problemas reais do cotidiano ou da comunidade.',
    items: [
      'Estudos científicos observacionais e experimentais',
      'Projetos de biodiversidade e ecologia local',
      'Campanhas de educação ambiental',
      'Pesquisa e leitura crítica em biologia aplicada'
    ]
  },
  quimica: {
    title: 'Química',
    text: 'Foco em experimentação, análise de materiais, compreensão de processos e conexão com saúde, energia ou sustentabilidade.',
    items: [
      'Experimentos de química aplicada',
      'Projetos sobre materiais, energia e sustentabilidade',
      'Relatórios sobre processos químicos do cotidiano',
      'Análise de soluções e reações em contexto real'
    ]
  },
  fisica: {
    title: 'Física',
    text: 'A IA recomenda projetos de modelagem, observação e experimentação de fenômenos físicos com rigor científico e curiosidade.',
    items: [
      'Experimentos sobre energia, movimento e ondas',
      'Modelagem matemática de fenômenos físicos',
      'Projetos de inovação em ótica, mecânica ou eletricidade',
      'Pesquisa e apresentação de temas complexos de forma clara'
    ]
  },
  matematica: {
    title: 'Matemática',
    text: 'Ideias ligadas a modelagem, análise de dados, resolução de problemas e uso da matemática em diversas aplicações.',
    items: [
      'Projetos de modelagem matemática aplicada',
      'Desafios de otimização e estatística',
      'Análise de dados e programação matemática',
      'Produção de materiais didáticos ou artigos curtos'
    ]
  },
  direito: {
    title: 'Direito',
    text: 'A IA sugere aprofundamento em direitos, justiça, cidadania, debates públicos e estudo de casos reais.',
    items: [
      'Estudos de casos jurídicos e políticas públicas',
      'Debates sobre direitos civis e acesso à justiça',
      'Análise de textos legais e decisões',
      'Projetos de educação jurídica e cidadania'
    ]
  },
  ri: {
    title: 'Relações internacionais',
    text: 'Projetos em geopolitica, desenvolvimento, migração, comércio e temas globais com foco em análise crítica e comunicação.',
    items: [
      'Análises de temas globais e regionais',
      'Produção de briefing ou artigos sobre política internacional',
      'Debates públicos e trabalhos de pesquisa',
      'Conexões com economia, meio ambiente e direitos humanos'
    ]
  },
  'ciencia-politica': {
    title: 'Ciência política',
    text: 'A plataforma sugere projetos de análise institucional, participação cidadã, políticas públicas e debate democrático.',
    items: [
      'Estudos sobre participação política e instituições',
      'Análise de políticas públicas locais',
      'Debates e pesquisas em temas de cidadania',
      'Produção de relatórios ou apresentações para a comunidade'
    ]
  },
  psicologia: {
    title: 'Psicologia',
    text: 'Projetos de estudo do comportamento humano, saúde mental, educação, comunicação e impacto social.',
    items: [
      'Pesquisas sobre comportamento e aprendizagem',
      'Campanhas de conscientização em saúde mental',
      'Projetos de apoio comunitário e comunicação',
      'Análises de dinâmica de grupos e bem-estar'
    ]
  },
  arquitetura: {
    title: 'Arquitetura',
    text: 'A IA recomenda projetos de visualização, maquetes, espaços públicos, acessibilidade e impacto cultural.',
    items: [
      'Estudos de espaços e melhorias urbanas',
      'Maquetes e projetos visuais de impacto',
      'Análise de acessibilidade e mobilidade',
      'Reinterpretação de espaços comunitários'
    ]
  },
  design: {
    title: 'Design',
    text: 'O foco está em design de experiência, identidade visual, comunicação e resolução visual de problemas reais.',
    items: [
      'Projetos de identidade visual e branding',
      'Design de interfaces e experiências digitais',
      'Criação de materiais para causas sociais',
      'Portfólio com projetos autorais e impacto real'
    ]
  },
  comunicacao: {
    title: 'Comunicação',
    text: 'Sugestões em jornalismo, storytelling, comunicação digital, estratégia de conteúdo e impacto social.',
    items: [
      'Produção de conteúdo com objetivo claro',
      'Projetos de mídia, vídeo ou escrita informativa',
      'Campanhas sobre temas relevantes da comunidade',
      'Análises de comunicação e narrativa'
    ]
  },
  'meio-ambiente': {
    title: 'Meio ambiente',
    text: 'Foco em sustentabilidade, impacto ambiental, educação ecológica e soluções práticas para excesso ou desperdício.',
    items: [
      'Projetos de educação ambiental e sensibilização',
      'Diagnósticos locais de resíduos, consumo e impacto',
      'Iniciativas de conservação e sustentabilidade',
      'Comunicação e mobilização para ações práticas'
    ]
  },
  empreendedorismo: {
    title: 'Empreendedorismo',
    text: 'A IA sugere ideias que conectam problem-solving, modelo de negócio, execução prática e impacto em comunidades.',
    items: [
      'Mini empresas ou projetos com problema real',
      'Validação de ideia com clientes e dados',
      'Estratégia de produto e negócios',
      'Projetos com impacto social e clareza de operação'
    ]
  }
};

const areaDetail = document.getElementById('area-detail');
const filterButtons = document.querySelectorAll('.filter-btn');

const renderArea = (key) => {
  const item = areaData[key];
  if (!item) return;

  const areaContent = `
    <div class="area-content">
      <div class="area-badge">Área em destaque</div>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <ul>
        ${item.items.map((entry) => `<li>${entry}</li>`).join('')}
      </ul>
    </div>
  `;

  areaDetail.innerHTML = areaContent;
};

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((el) => el.classList.remove('active'));
    button.classList.add('active');
    renderArea(button.dataset.area);
  });
});
