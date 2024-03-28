// Assets
import gallery__image_1 from './assets/gallery/image-1.webp';
import gallery__image_2 from './assets/gallery/image-2.webp';
import gallery__image_3 from './assets/gallery/image-3.webp';
import gallery__image_4 from './assets/gallery/image-4.webp';
import gallery__image_5 from './assets/gallery/image-5.webp';
import gallery__image_6 from './assets/gallery/image-6.webp';
import gallery__image_7 from './assets/gallery/image-7.webp';
import gallery__image_8 from './assets/gallery/image-8.webp';
import gallery__image_9 from './assets/gallery/image-9.webp';

import services__image_1 from './assets/gimnastica.webp';
import services__image_2 from './assets/kinetoterapie.webp';
import services__image_3 from './assets/masaj.webp';
import services__image_4 from './assets/reflexoterapie.webp';

// HYPHEN (-)
const h = '\u{00AD}';

const data = {
  modal__cards: [
    {
      id: 1,
      labels: [ 'Luni - Vineri', 'Pauza', 'Sambata', 'Duminica' ],
      title: 'Program',
      values: [ '10.00 - 19.00', '13.00 - 14.00', 'Liber', 'Liber' ]
    },

    {
      id: 2,
      labels: [ 'Facebook', '0700 000 000', 'adresa_de_email@gmail.com', 'strada Ion Popescu, Campulung' ],
      title: 'Contact',
      values: [ 'https://www.facebook.com', 'tel:+4074000000', 'mailto:adresa_de_email@gmail.com', 'https://www.google.com/maps/place/Campulung' ]
    },

    {
      id: 3,
      labels: [ 'Acasa', 'Servicii', 'Galerie', 'Preturi' ],
      title: 'Meniu',
      values: [ '#home', '#services', '#gallery', '#prices' ]
    },
  ],

  home__descriptions: [
    `Cen${h}trul de re${h}cu${h}pe${h}ra${h}re me${h}di${h}ca${h}la Alice-Kineto se con${h}cen${h}trea${h}za pe tra${h}ta${h}rea pa${h}ci${h}en${h}ti${h}lor sai de toa${h}te var${h}ste${h}le fo${h}lo${h}sin${h}du-se de o ga${h}ma va${h}ri${h}a${h}ta de ser${h}vi${h}cii te${h}ra${h}pe${h}u${h}ti${h}ce, dar si de e${h}chi${h}pa${h}men${h}te mo${h}der${h}ne ca${h}re au ro${h}lul de a a${h}si${h}gu${h}ra o in${h}gri${h}ji${h}re de in${h}alta ca${h}li${h}ta${h}te`,
    `De${h}vo${h}ta${h}men${h}tul cu ca${h}re isi des${h}fa${h}so${h}a${h}ra ac${h}ti${h}vi${h}ta${h}tea in fi${h}e${h}ca${h}re zi isi are o${h}ri${h}gi${h}nea din de${h}vo${h}ta${h}men${h}tul pen${h}tru ar${h}ta si stii${h}nta vin${h}de${h}ca${h}rii`
  ],

  services__cards: [
    {
      description: `Gim${h}nas${h}ti${h}ca de in${h}tre${h}ti${h}ne${h}re a${h}ju${h}ta cor${h}pul sa se men${h}ti${h}na in${h}tr-o for${h}ma fi${h}zi${h}ca bu${h}na si se e${h}fec${h}tu${h}ea${h}za prin${h}tr-un an${h}sam${h}blu de mis${h}ca${h}ri li${h}be${h}re, sim${h}ple sau com${h}ple${h}xe, e${h}xe${h}cu${h}ta${h}te la a${h}pa${h}ra${h}te de gim${h}nas${h}ti${h}ca. E${h}xer${h}ci${h}tii${h}le prac${h}ti${h}ca${h}te in ca${h}drul gim${h}nas${h}ti${h}cii de in${h}tre${h}ti${h}ne${h}re au ca rol prin${h}ci${h}pal sti${h}mu${h}la${h}rea tu${h}tu${h}ror gru${h}pe${h}lor mus${h}cu${h}la${h}re din or${h}ga${h}nism. Gim${h}nas${h}ti${h}ca de in${h}tre${h}ti${h}ne${h}re a${h}ju${h}ta cor${h}pul sa a${h}jun${h}ga la gre${h}u${h}ta${h}tea sa i${h}de${h}a${h}la si sa se men${h}ti${h}na a${h}co${h}lo`,
      image: services__image_1,
      title: 'Gimnastica de intretinere'
    },

    {
      description: `Ki${h}ne${h}to${h}te${h}ra${h}pi${h}a es${h}te o for${h}ma a te${h}ra${h}pi${h}ei prin mis${h}ca${h}re ce se re${h}a${h}li${h}zea${h}za cu a${h}ju${h}to${h}rul u${h}nor pro${h}gra${h}me de re${h}cu${h}pe${h}ra${h}re me${h}di${h}ca${h}la spe${h}ci${h}a${h}le ce au ro${h}lul de a im${h}bu${h}na${h}ta${h}tii func${h}tio${h}na${h}li${h}ta${h}tea seg${h}men${h}te${h}lor a${h}fec${h}ta${h}te a${h}le or${h}ga${h}nis${h}mu${h}lui. Ki${h}ne${h}to${h}te${h}ra${h}pia es${h}te for${h}ma${h}ta din mai mul${h}te teh${h}ni${h}ci si me${h}to${h}de ce se e${h}xe${h}cu${h}ta in func${h}tie de var${h}sta si con${h}sti${h}tu${h}tia per${h}soa${h}nei, dar si de a${h}fec${h}ti${h}u${h}nea de ca${h}re su${h}fe${h}ra, ac${h}ti${h}vi${h}ta${h}tea des${h}fa${h}su${h}ra${h}ta, sta${h}di${h}ul de e${h}vo${h}lu${h}ti${h}e al bo${h}lii sau e${h}xis${h}ten${h}ta al${h}tor a${h}fec${h}ti${h}uni.`,
      image: services__image_2,
      title: 'Kinetoterapie'
    },

    {
      description: `Ma${h}sa${h}jul te${h}ra${h}pe${h}u${h}tic es${h}te u${h}nul din${h}tre ce${h}le mai e${h}fi${h}ci${h}en${h}te si a${h}pre${h}ci${h}a${h}te for${h}me de te${h}ra${h}pie al${h}ter${h}na${h}ti${h}va, fo${h}lo${h}sit pen${h}tru tra${h}ta${h}rea du${h}re${h}ri${h}lor mus${h}cu${h}la${h}re, a${h}ces${h}ta im${h}bu${h}na${h}ta${h}tes${h}te cir${h}cu${h}la${h}tia san${h}gu${h}i${h}na, mo${h}bi${h}li${h}ta${h}tea zo${h}ne${h}lor a${h}fec${h}ta${h}te si de${h}con${h}ges${h}ti${h}o${h}nea${h}za punc${h}te${h}le de de${h}clan${h}sa${h}re a${h}le du${h}re${h}rii. Ma${h}sa${h}jul te${h}ra${h}pe${h}u${h}tic se re${h}a${h}li${h}zea${h}za prin ma${h}sa${h}rea pie${h}lii pen${h}tru a de${h}con${h}trac${h}tu${h}ra mus${h}cu${h}la${h}tu${h}ra si a sti${h}mu${h}la cir${h}cu${h}la${h}tia san${h}ge${h}lui din zo${h}ne${h}le a${h}fec${h}ta${h}te.`,
      image: services__image_3,
      title: 'Masaj'
    },

    {
      description: `Re${h}fle${h}xo${h}te${h}ra${h}pia es${h}te o for${h}ma de me${h}di${h}ci${h}na al${h}ter${h}na${h}ti${h}va ca${h}re a${h}re ca scop prin${h}ci${h}pal nor${h}ma${h}li${h}za${h}rea func${h}tii${h}lor or${h}ga${h}nis${h}mu${h}lui prin e${h}li${h}mi${h}na${h}rea de to${h}xi${h}ne a${h}cu${h}mu${h}la${h}te, ob${h}ti${h}nand o cir${h}cu${h}la${h}tie mai bu${h}na a san${h}ge${h}lui, ca${h}re es${h}te ne${h}ce${h}sa${h}ra pen${h}tru bu${h}na func${h}ti${h}o${h}na${h}re a fi${h}e${h}ca${h}rui or${h}gan sau par${h}te a or${h}ga${h}nis${h}mu${h}lui. De${h}pu${h}ne${h}ri${h}le to${h}xi${h}ce ce se ga${h}sesc in zo${h}ne${h}le re${h}fle${h}xe au drept ca${h}u${h}ze prin${h}ci${h}pa${h}le: se${h}den${h}ta${h}ris${h}mul, a${h}li${h}men${h}ta${h}tia in${h}co${h}rec${h}ta sau stre${h}sul.`,
      image: services__image_4,
      title: 'Reflexoterapie'
    }
  ],

  gallery__images: [ gallery__image_1, gallery__image_2, gallery__image_3, gallery__image_4, gallery__image_5, gallery__image_6, gallery__image_7, gallery__image_8, gallery__image_9 ],

  table__rows: [
    { minutes: 30, price: 30, service: 'Kinetoterapie' },
    { minutes: 30, price: 30, service: 'Masaj facial' },
    { minutes: 40, price: 40, service: 'Gimnastica de intretinere' },
    { minutes: 30, price: 40, service: 'Masaj pentru copii' },
    { minutes: 30, price: 40, service: 'Masaj terapeutic partial' },
    { minutes: 50, price: 50, service: 'Kinetoterapie' },
    { minutes: 40, price: 50, service: 'Masaj anticelulitic partial' },
    { minutes: 60, price: 50, service: 'Reflexoterapie' },
    { minutes: 60, price: 60, service: 'Masaj de relaxare total (femei)' },
    { minutes: 60, price: 70, service: 'Masaj terapeutic total (femei)' },
    { minutes: 60, price: 70, service: 'Masaj de relaxare total (barbati)' },
    { minutes: 60, price: 80, service: 'Masaj anticelulitic total' },
    { minutes: 60, price: 80, service: 'Masaj terapeutic total (barbati)' },
    { minutes: 90, price: 90, service: 'Masaj total (femei)' },
    { minutes: 90, price: 100, service: 'Masaj total (barbati)' }
  ]
}

export default data;