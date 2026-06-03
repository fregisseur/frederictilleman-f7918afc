export interface PortfolioCredit {
  label: string;
  value: string;
  href?: string;
}

export interface PortfolioItem {
  slug: string;
  client: string;
  title: string;
  image: string;
  vimeoId?: string;
  /** Extra images for the detail-page carousel (first one is hero if no vimeoId) */
  images?: string[];
  /** Short Dutch description shown on the detail page */
  description?: string;
  /** Tags used for SEO + context labels */
  tags?: string[];
  /** Credits / collaborators with optional clickable links */
  credits?: PortfolioCredit[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "jack",
    client: "Birth Card",
    title: "Jack",
    image: "/images/portfolio/jack_SQ.webp",
    images: [
      "/images/portfolio/jack1.jpg",
      "/images/portfolio/jack_SQ.jpg",
    ],
    description:
      "Ontwerp van een geboortekaartje voor mijn enige echte neefje Jack. Een uniek verhaal verdient een uniek kaartje. Met de hand getekend en ingekleurd op de iPad. En aangezien Jack na amper drie jaar al sprekend op mij begint te lijken, is hij sowieso een geweldige aanwinst voor de familie 😅.",
    tags: ["Illustratie", "Geboortekaartje", "iPad-tekening"],
    credits: [
      { label: "Gemaakt voor", value: "Aline & Frederik" },
    ],
  },
  {
    slug: "doenizo-met-unizo",
    client: "Unizo",
    title: "Doenizo met Unizo",
    image: "/images/portfolio/doenizo_met_unizo.webp",
    vimeoId: "691830931",
    description:
      "Een reeks vrolijke animatievideo's voor Unizo waarin ondernemers stap voor stap meegenomen worden in het opstartproces van hun zaak. Van het eerste idee tot de officiële opstart, telkens helder uitgelegd in een korte, herkenbare animatie.",
    tags: ["2D Animatie", "Educatief", "Ondernemerschap"],
    credits: [
      { label: "Klant", value: "Unizo", href: "https://www.unizo.be" },
    ],
  },
  {
    slug: "urban-nature",
    client: "Ars Musica",
    title: "Urban Nature",
    image: "/images/portfolio/urban_nature.webp",
    vimeoId: "998824600",
    description:
      "Beeldend werk gemaakt in opdracht van Ars Musica rond het thema 'Urban Nature' — de spanning tussen stad en natuur, vertaald in een eigen visuele taal.",
    tags: ["Illustratie", "Editorial"],
    credits: [{ label: "Klant", value: "Ars Musica" }],
  },
  {
    slug: "de-slimste-mens-ter-wereld",
    client: "Woestijnvis",
    title: "De Slimste Mens ter Wereld",
    image: "/images/portfolio/de_slimste_mens_ter_wereld.webp",
    vimeoId: "235688904",
    description:
      "Animaties voor de iconische quiz 'De Slimste Mens ter Wereld' van Woestijnvis. Korte, speelse beelden die de vraagrondes ondersteunen en het tempo van de quiz extra pit geven.",
    tags: ["2D Animatie", "Televisie"],
    credits: [
      { label: "Productie", value: "Woestijnvis", href: "https://www.woestijnvis.be" },
    ],
  },
  {
    slug: "behoeften-van-kinderen",
    client: "Blink",
    title: "Behoeften van Kinderen",
    image: "/images/portfolio/behoeften_SQ.webp",
    description:
      "Illustratiereeks rond de basisbehoeften van kinderen, gemaakt voor Blink. Warme, toegankelijke beelden die complexe thema's bespreekbaar maken voor ouders en hulpverleners.",
    tags: ["Illustratie", "Educatief"],
    credits: [{ label: "Klant", value: "Blink" }],
  },
  {
    slug: "mealtime-mr-shark",
    client: "Trixie",
    title: "Mealtime Mr. Shark",
    image: "/images/portfolio/mealtime.webp",
    vimeoId: "1095973996",
    description:
      "Een speelse productvideo voor Trixie waarin Mr. Shark de show steelt tijdens het etensuurtje van je huisdier. Stop-motion en animatie hand in hand.",
    tags: ["Stop-motion", "Productvideo"],
    credits: [{ label: "Klant", value: "Trixie", href: "https://www.trixie.de" }],
  },
  {
    slug: "hannah-en-de-krokodil",
    client: "Ket & Doc",
    title: "Hannah & de Krokodil",
    image: "/images/portfolio/hannah_en_de_krokodil.webp",
    description:
      "Illustraties voor het kinderboek- en docuproject 'Hannah & de Krokodil' van Ket & Doc. Een verhaal vol verbeelding, vertaald in kleurrijke prenten.",
    tags: ["Illustratie", "Kinderboek"],
    credits: [{ label: "Klant", value: "Ket & Doc" }],
  },
  {
    slug: "fruit-ninja",
    client: "Danette",
    title: "Fruit Ninja",
    image: "/images/portfolio/fruit_ninja.webp",
    vimeoId: "1031126969",
    description:
      "Energieke food-animatie voor Danette waarin vers fruit door de lucht vliegt. Stop-motion en snelle montage zorgen voor een ninja-tempo.",
    tags: ["Stop-motion", "Food", "Reclame"],
    credits: [{ label: "Klant", value: "Danette" }],
  },
  {
    slug: "mothers-day",
    client: "Vandemoortele",
    title: "Mother's Day",
    image: "/images/portfolio/mothers_day.webp",
    description:
      "Visuele campagne voor Vandemoortele rond Moederdag. Een warm eerbetoon, vertaald in een eigen handgemaakte stijl.",
    tags: ["Illustratie", "Campagne"],
    credits: [{ label: "Klant", value: "Vandemoortele", href: "https://www.vandemoortele.com" }],
  },
  {
    slug: "save-the-arctic",
    client: "Greenpeace",
    title: "Save The Arctic",
    image: "/images/portfolio/save_the_arctic.webp",
    vimeoId: "65507308",
    description:
      "Animatie voor de Greenpeace-campagne 'Save The Arctic'. Een krachtige beeldtaal om aandacht te vragen voor het kwetsbare poolgebied.",
    tags: ["2D Animatie", "Campagne", "Non-profit"],
    credits: [{ label: "Klant", value: "Greenpeace", href: "https://www.greenpeace.org" }],
  },
  {
    slug: "monniken",
    client: "Willux",
    title: "Monniken",
    image: "/images/portfolio/monniken_SQ.webp",
    description:
      "Illustratiewerk in opdracht van Willux rond het thema 'monniken'. Strakke beeldtaal met een knipoog naar het kloosterleven.",
    tags: ["Illustratie"],
    credits: [{ label: "Klant", value: "Willux" }],
  },
  {
    slug: "mr-lion",
    client: "Trixie",
    title: "Mr. Lion",
    image: "/images/portfolio/mr_lion.webp",
    vimeoId: "872509738",
    description:
      "Productvideo voor Trixie waarin Mr. Lion brullend in beeld komt. Een speelse mix van stop-motion en animatie.",
    tags: ["Stop-motion", "Productvideo"],
    credits: [{ label: "Klant", value: "Trixie", href: "https://www.trixie.de" }],
  },
  {
    slug: "comfort-bonus",
    client: "Eneco",
    title: "Comfort Bonus",
    image: "/images/portfolio/comfort_bonus.webp",
    description:
      "Visuele uitwerking van de 'Comfort Bonus' van Eneco. Een complex aanbod helder en aanstekelijk in beeld gebracht.",
    tags: ["Illustratie", "Campagne"],
    credits: [{ label: "Klant", value: "Eneco", href: "https://www.eneco.be" }],
  },
  {
    slug: "tomashake",
    client: "Stoffels Tomaten",
    title: "Toma'Shake",
    image: "/images/portfolio/tomashake.webp",
    vimeoId: "857826863",
    description:
      "Smakelijke food-animatie voor Stoffels Tomaten waarin de Toma'Shake op vrolijke wijze geschud en geserveerd wordt.",
    tags: ["Stop-motion", "Food"],
    credits: [{ label: "Klant", value: "Stoffels Tomaten", href: "https://www.stoffels.be" }],
  },
  {
    slug: "lederworkshop",
    client: "Aesaert",
    title: "Lederworkshop",
    image: "/images/portfolio/lederworkshop.webp",
    vimeoId: "923653734",
    description:
      "Beeld- en communicatiemateriaal voor de lederworkshops van Aesaert. Ambachtelijk vakwerk verdient een ambachtelijk beeld.",
    tags: ["Illustratie", "Branding"],
    credits: [{ label: "Klant", value: "Aesaert", href: "https://www.aesaert.be" }],
  },
  {
    slug: "freestyle",
    client: "Joris Sweets",
    title: "Freestyle",
    image: "/images/portfolio/freestyle.webp",
    vimeoId: "886071911",
    description:
      "Speelse productvideo voor Joris Sweets met de Freestyle-snoepjes in de hoofdrol. Kleurrijk, swingend en lekker.",
    tags: ["Stop-motion", "Food", "Reclame"],
    credits: [{ label: "Klant", value: "Joris Sweets" }],
  },
  {
    slug: "winterfair",
    client: "Libelle",
    title: "Winterfair",
    image: "/images/portfolio/winterfair.webp",
    description:
      "Sfeervolle illustraties voor de Libelle Winterfair. Warme winterbeelden om bezoekers in de juiste sfeer te brengen.",
    tags: ["Illustratie", "Event"],
    credits: [{ label: "Klant", value: "Libelle", href: "https://www.libelle.be" }],
  },
  {
    slug: "ronde-van-vlaanderen",
    client: "Stad Antwerpen",
    title: "Ronde van Vlaanderen",
    image: "/images/portfolio/ronde_van_vlaanderen.webp",
    vimeoId: "211161422",
    description:
      "Stop-motion animatie voor Stad Antwerpen rond de start van de Ronde van Vlaanderen. Een kleien wielrenner — Julien de Flandrien — fietst dwars door de stad naar de start.",
    tags: ["Stop-motion", "Klei", "Sport"],
    credits: [
      { label: "Klant", value: "Stad Antwerpen", href: "https://www.antwerpen.be" },
      { label: "Productie", value: "MediaMixer" },
    ],
  },
  {
    slug: "routes-world-2018",
    client: "Brussels Airport",
    title: "Routes World 2018",
    image: "/images/portfolio/routes_world_2018.webp",
    description:
      "Illustratiewerk voor Brussels Airport ter gelegenheid van Routes World 2018. Een visueel verhaal over connecties, reizen en ontmoetingen.",
    tags: ["Illustratie", "Event"],
    credits: [{ label: "Klant", value: "Brussels Airport", href: "https://www.brusselsairport.be" }],
  },
  {
    slug: "ooit-was-ik-een-fles",
    client: "JBC",
    title: "Ooit was ik een fles",
    image: "/images/portfolio/ooit_was_ik_een_fles.webp",
    vimeoId: "679035077",
    description:
      "Animatie voor JBC rond de duurzame collectie 'Ooit was ik een fles'. Een PET-fles vertelt zijn eigen reis tot kledingstuk.",
    tags: ["2D Animatie", "Duurzaamheid"],
    credits: [{ label: "Klant", value: "JBC", href: "https://www.jbc.be" }],
  },
  {
    slug: "raamtekening",
    client: "Quarantekening",
    title: "Raamtekening",
    image: "/images/portfolio/raamtekening.webp",
    description:
      "Tijdens de lockdown ontstond Quarantekening: kleurrijke raamtekeningen die een glimlach op het gezicht van voorbijgangers brachten.",
    tags: ["Illustratie", "Persoonlijk werk"],
    credits: [{ label: "Project", value: "Quarantekening" }],
  },
  {
    slug: "hulptips",
    client: "Rode Kruis Vlaanderen",
    title: "Hulptips",
    image: "/images/portfolio/hulptips.webp",
    vimeoId: "314500806",
    description:
      "Animatiereeks met praktische eerstehulp-tips voor het Rode Kruis Vlaanderen. Heldere instructies, vlot in beeld gebracht.",
    tags: ["2D Animatie", "Educatief", "Non-profit"],
    credits: [{ label: "Klant", value: "Rode Kruis Vlaanderen", href: "https://www.rodekruis.be" }],
  },
  {
    slug: "stoffen-en-patronen",
    client: "Zonen09",
    title: "Stoffen en Patronen",
    image: "/images/portfolio/stoffen_en_patronen.webp",
    description:
      "Beeldend werk rond stoffen en patronen, gemaakt in samenwerking met Zonen09. Een viering van textuur, kleur en herhaling.",
    tags: ["Illustratie", "Pattern Design"],
    credits: [{ label: "Klant", value: "Zonen09", href: "https://www.zonen09.be" }],
  },
  {
    slug: "wat-is-blink",
    client: "VVSG",
    title: "Wat is Blink",
    image: "/images/portfolio/wat_is_blink.webp",
    vimeoId: "1053053841",
    description:
      "Uitlegvideo voor VVSG over Blink, het lerend netwerk rond kinderarmoede. Complexe materie, helder en menselijk in beeld gebracht.",
    tags: ["2D Animatie", "Educatief", "Non-profit"],
    credits: [{ label: "Klant", value: "VVSG", href: "https://www.vvsg.be" }],
  },
];

export const getPortfolioItem = (slug: string) =>
  portfolioItems.find((p) => p.slug === slug);