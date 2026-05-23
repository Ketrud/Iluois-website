export type Locale = 'et' | 'en'

export const locales: Locale[] = ['et', 'en']

export const contact = {
  name: 'Ketrud Tühane',
  email: 'ketrudtyhane@gmail.com',
  phone: '+372 522 2173',
  location: 'Tallinn',
}

export const nav = {
  et: [
    { href: '/et', label: 'Avaleht' },
    { href: '/et/massaz', label: 'Massaaž' },
    { href: '/et/teraapia', label: 'Teraapia' },
    { href: '/et/jooga', label: 'Jooga' },
    { href: '/et/hooldusteenused', label: 'Hooldusteenused' },
    { href: '/et/kontakt', label: 'Kontakt' },
  ],
  en: [
    { href: '/en', label: 'Home' },
    { href: '/en/massaz', label: 'Massage' },
    { href: '/en/teraapia', label: 'Therapy' },
    { href: '/en/jooga', label: 'Yoga' },
    { href: '/en/hooldusteenused', label: 'Care services' },
    { href: '/en/kontakt', label: 'Contact' },
  ],
}

export const dictionary = {
  et: {
    brand: 'Iluõis',
    tagline: 'keha · meel · hing',
    heroKicker: 'holistiline heaolu Tallinnas',
    heroTitle: 'Ilu,\nmis\nõitseb\nseestpoolt.',
    heroText:
      'Iluõis ühendab massaaži, teraapia, hooldusteenused ja jooga pehmeks, naiselikuks ning toetavaks tervikuks. Siin saad aeglustada, taastuda ja tulla tagasi iseenda juurde.',
    book: 'Broneeri aeg',
    services: 'Teenused',
    servicesTitle: 'Tasakaal kehale ja hingele',
    servicesText:
      'Kõik teenused on loodud toetama sügavamat lõõgastust, närvisüsteemi rahunemist ning sisemist ilu.',
    why: 'miks valida iluõis',
    whyTitle: 'Turvaline ruum,\nkus saad lihtsalt olla.',
    whyText1:
      'Iluõis ei ole ainult teenus — see on kogemus, mis toetab keha, närvisüsteemi ja emotsionaalset tasakaalu.',
    whyText2:
      'Õrn puudutus, rahulik atmosfäär ja teadlik kohalolu aitavad taastada sisemist rahu ning luua ühenduse iseendaga.',
    quote: '“Kui keha lõdvestub,\nhakkab hing taas õitsema.”',
    contactTitle: 'Anna endale aega\ntaastumiseks.',
    contactText: 'Võta ühendust ja leiame koos sinu kehale ja hingele sobiva tee.',
    formName: 'Sinu nimi',
    formEmail: 'E-mail',
    formMessage: 'Sinu soov või küsimus',
    formSend: 'Saada päring',
    gdprText:
      'Kasutame hädavajalikke küpsiseid veebilehe toimimiseks ja valikulisi küpsiseid kasutajakogemuse parandamiseks.',
    accept: 'Nõustun',
    decline: 'Keeldun',
    readMore: 'Loe lähemalt',
  },
  en: {
    brand: 'Iluõis',
    tagline: 'body · mind · soul',
    heroKicker: 'holistic wellbeing in Tallinn',
    heroTitle: 'Beauty\nthat\nblooms\nfrom within.',
    heroText:
      'Iluõis brings together massage, therapy, care services and yoga into a soft, feminine and supportive whole. A place to slow down, restore and return to yourself.',
    book: 'Book a time',
    services: 'Services',
    servicesTitle: 'Balance for body and soul',
    servicesText:
      'All services are created to support deeper relaxation, nervous-system calm and inner beauty.',
    why: 'why choose iluõis',
    whyTitle: 'A safe space\nwhere you can simply be.',
    whyText1:
      'Iluõis is not only a service — it is an experience supporting the body, nervous system and emotional balance.',
    whyText2:
      'Gentle touch, calm atmosphere and conscious presence help restore inner peace and connection with yourself.',
    quote: '“When the body softens,\nthe soul begins to bloom.”',
    contactTitle: 'Give yourself time\nto restore.',
    contactText: 'Get in touch and we will find the right path for your body and soul.',
    formName: 'Your name',
    formEmail: 'Email',
    formMessage: 'Your wish or question',
    formSend: 'Send request',
    gdprText:
      'We use essential cookies for the website to work and optional cookies to improve the experience.',
    accept: 'Accept',
    decline: 'Decline',
    readMore: 'Read more',
  },
}

export const services = {
  et: [
    {
      slug: 'massaz',
      title: 'Massaaž',
      excerpt: 'Lõõgastavad ja terapeutilised massaažid keha pingete vabastamiseks.',
      body:
        'Massaaž toetab keha taastumist, aitab leevendada lihaspingeid, rahustab närvisüsteemi ja loob sügavama kontakti iseendaga. Iga seanss kohandub sinu keha vajaduste ja hetke enesetunde järgi.',
      keywords: 'massaaž Tallinnas · lõõgastav massaaž · terapeutiline massaaž',
      bullets: ['Lihaspingete vabastamine', 'Närvisüsteemi rahunemine', 'Sügav lõõgastus', 'Individuaalne lähenemine'],
    },
    {
      slug: 'teraapia',
      title: 'Teraapia',
      excerpt: 'Keha ja emotsioonide tasakaalustamine läbi teadliku kohalolu.',
      body:
        'Teraapiline töö aitab märgata keha, tunnete ja sisemise seisundi vahelisi seoseid. See on toetav ruum, kus saab vabastada pingeid, jõuda selguse ja sügavama sisemise rahuni.',
      keywords: 'teraapia Tallinn · holistiline teraapia · emotsionaalne tasakaal',
      bullets: ['Emotsionaalne tasakaal', 'Keha ja meele ühendus', 'Sisemine rahu', 'Teadlik kohalolu'],
    },
    {
      slug: 'jooga',
      title: 'Jooga',
      excerpt: 'Rahulikud praktikad hingamise, painduvuse ja sisemise rahu toetamiseks.',
      body:
        'Jooga Iluõies on pehme, maandav ja taastav praktika. Fookuses on hingamine, kehatunnetus, rahunemine ja sisemine kohalolu, mitte sooritus.',
      keywords: 'jooga Tallinnas · hingamine · taastav jooga · rahulik jooga',
      bullets: ['Hingamine', 'Painduvus', 'Rahunemine', 'Taastumine'],
    },
    {
      slug: 'hooldusteenus',
      title: 'Hooldusteenus',
      excerpt: 'Hooliv ja toetav lähenemine igapäevase heaolu ning elukvaliteedi hoidmiseks.',
      body:
        'Hooldusteenused on loodud selleks, et toetada inimese väärikust, heaolu ja elukvaliteeti. Lähenemine on rahulik, tähelepanelik ja personaalseid vajadusi arvestav.',
      keywords: 'hooldusteenused · toetav hooldus · heaolu teenused',
      bullets: ['Hooliv kohalolu', 'Igapäevase heaolu toetamine', 'Rahulik keskkond', 'Väärikas lähenemine'],
    },
  ],
  en: [
    {
      slug: 'massaz',
      title: 'Massage',
      excerpt: 'Relaxing and therapeutic massage for releasing body tension.',
      body:
        'Massage supports restoration, helps release muscular tension, calms the nervous system and creates a deeper connection with yourself.',
      keywords: 'massage Tallinn · relaxing massage · therapeutic massage',
      bullets: ['Release tension', 'Calm the nervous system', 'Deep relaxation', 'Individual approach'],
    },
    {
      slug: 'teraapia',
      title: 'Therapy',
      excerpt: 'Balancing body and emotions through conscious presence.',
      body:
        'Therapeutic work helps notice connections between body, emotions and inner state. It is a supportive space for clarity and inner peace.',
      keywords: 'therapy Tallinn · holistic therapy · emotional balance',
      bullets: ['Emotional balance', 'Body-mind connection', 'Inner peace', 'Conscious presence'],
    },
    {
      slug: 'jooga',
      title: 'Yoga',
      excerpt: 'Gentle practices supporting breathing, flexibility and inner calm.',
      body:
        'Yoga at Iluõis is soft, grounding and restorative. The focus is on breathing, body awareness and presence.',
      keywords: 'yoga Tallinn · breathing · restorative yoga',
      bullets: ['Breathing', 'Flexibility', 'Calm', 'Restoration'],
    },
    {
      slug: 'hooldusteenus',
      title: 'Care services',
      excerpt: 'A caring and supportive approach to everyday wellbeing and quality of life.',
      body:
        'Care services are designed to support dignity, wellbeing and quality of life with a calm and attentive approach.',
      keywords: 'care services · supportive care · wellbeing services',
      bullets: ['Caring presence', 'Everyday wellbeing', 'Calm environment', 'Dignified support'],
    },
  ],
}
