'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'artists',
      [
        {
          id: 5,
          typeId: 5,
          name: 'Blackpink',
          old: 4,
          startAcareer: 2016,
          bio:
            "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          pic: 'https://www.wowkeren.com/display/images/photo/2020/06/03/00313737.jpg',
          cover: 'https://i.pinimg.com/originals/5f/cc/06/5fcc06cbfa11feb233b129b2cdfe7ad0.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          typeId: 5,
          name: 'Dewa19',
          old: 25,
          startAcareer: 1986,
          bio:
            "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          pic:
            'https://cdns.klimg.com/merdeka.com/i/w/news/2020/04/18/1168286/content_images/670x335/20200418113257-1-ari-lasso-unggah-foto-lawas-band-dewa-001-endang-saputra.jpg',
          cover: 'https://ignitegki.com/storage/post_thumbnail/201905/artikel-359-header.jpg.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          typeId: 5,
          name: 'Nirvana',
          old: 33,
          startAcareer: 1987,
          bio:
            "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          pic:
            'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/10/3/577067304/577067304_95c773c2-a340-4808-b947-d7691520eabe_680_680.jpg',
          cover: 'https://cdn140.picsart.com/281044521015201.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          typeId: 4,
          name: 'Didi Kempot',
          old: 54,
          startAcareer: 2000,
          bio:
            "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          pic: 'https://disk.mediaindonesia.com/thumbs/1800x1200/news/2020/05/3644ce5bd039cca0f167c763d7a76618.jpg',
          cover: 'https://blogpictures.99.co/lagu-didi-kempot-header.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          typeId: 4,
          name: 'Sayuri',
          old: 24,
          startAcareer: 2010,
          bio:
            'She start playing guitar since sixth grade. Her inspiration at the time were a japanese boyband group name Kanjani8. She start playing guitar because she want cover their song in band and wanted to accompany the vocals with guitar. Then she start to write her own song and performed live in the street at second year of middle school.',
          pic: 'https://cdn.myanimelist.net/images/voiceactors/1/57707.jpg',
          cover:
            'https://1.bp.blogspot.com/-qD5Wd4Vm8dg/WnLUPOIoVEI/AAAAAAAABxc/FwptjnXOtcQ1dSG6sYOf0Y1QbkGWMZvnwCLcBGAs/s1600/Sayuri%2Bmikazuki%2Bno%2Bkoukai.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 14,
          typeId: 5,
          name: 'One Oke Rock',
          old: 15,
          startAcareer: 2005,
          bio:
            "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          pic: 'https://matamatamusik.com/wp-content/uploads/2020/01/ONE-OK-ROCK.jpg',
          cover: 'https://oneokrockfst.files.wordpress.com/2013/06/header-blog.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 28,
          typeId: 5,
          name: 'KANA-BOON',
          old: 12,
          startAcareer: 2008,
          bio:
            'KANA-BOON adalah grup musik rock asal Jepang yang dibentuk pada tahun 2008. Mereka membuat debut besarnya dengan Ki/oon Music pada 2013.',
          pic: 'https://mediaformasi.com/wp-content/uploads/2019/06/KANA-BOOM-768x512.jpg',
          cover: 'https://mediaformasi.com/wp-content/uploads/2019/06/21835_g09xnx.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
