const dataList = [
  {
    title: "서울 미세먼지 현황",
    imgSrc:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20141210_145%2Fsi87844_1418192405560nVJtn_PNG%2FLES_0381.png&type=sc960_832",
    좋아요: 0,
    싫어요: 0,
    date: "12월 1일 발행",
  },
  {
    title: "인천 미세먼지 현황",
    imgSrc:
      "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fcdn.crowdpic.net%2Fdetail-thumb%2Fthumb_d_0C0911CC2885703F11AFC48C0F9C4B52.jpg&type=sc960_832",
    좋아요: 0,
    싫어요: 0,
    date: "12월 2일 발행",
  },
  {
    title: "경기 미세먼지 현황",
    imgSrc:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20110816_194%2Fjhj8637_1313422748484sMt1f_JPEG%2Fa14-3.JPG&type=sc960_832",
    좋아요: 0,
    싫어요: 0,
    date: "12월 3일 발행",
  },
  {
    title: "대전 미세먼지 현황",
    imgSrc:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20131104_220%2Fih5562_1383576342613QpyXG_JPEG%2F_DSC9888.jpg&type=sc960_832",
    좋아요: 0,
    싫어요: 0,
    date: "12월 4일 발행",
  },
  {
    title: "대구 미세먼지 현황",
    imgSrc:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140219_273%2Fcanca2_1392781290336Tu3Nh_JPEG%2FDSC_0061.jpg&type=sc960_832",
    좋아요: 0,
    싫어요: 0,
    date: "12월 5일 발행",
  },
  {
    title: "울산 미세먼지 현황",
    imgSrc:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAyMjJfNDIg%2FMDAxNTE5Mjg1NTY0MjA3.D_D5o5VIs5b5D-vtpZ4lC5rxtscHDWz-KunwzEFVoqQg.8VX1Dr2aaaJsIG4ckORYzrTcNXbSReMTbz75mnyVXJwg.JPEG.m25m25%2FKakaoTalk_20180220_084144815.jpg&type=sc960_832",
    좋아요: 0,
    싫어요: 0,
    date: "12월 6일 발행",
  },
  {
    title: "충남 미세먼지 현황",
    imgSrc:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEwMjhfNDIg%2FMDAxNjAzODQ4MTE5NjYw.Woa--5yLHbSqa5pt5TRTSX8OSx8P2YyWMxg8csKr6HEg.YIsq3LgBd8AAlwSlPSeFNqx8ukxU-65i5uqq1N_unSkg.JPEG.ki2437sss%2FAB5I2770.jpg&type=sc960_832",
    좋아요: 0,
    싫어요: 0,
    date: "12월 7일 발행",
  },
  {
    title: "경남 미세먼지 현황",
    imgSrc:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20130521_59%2Fcroxriver_1369099530777pJAUB_JPEG%2FDSC_4181.jpg&type=sc960_832",
    좋아요: 0,
    싫어요: 0,
    date: "12월 8일 발행",
  },
  {
    title: "충북 미세먼지 현황",
    imgSrc:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA2MTFfMjMx%2FMDAxNDk3MTE5MDkyMTQ3.NAC_8G3wv0KsQ2t2wZTq2K95X8V5FlrT2bWYXkoBw80g.Xdp2WkxfTasiGbgvQZSKBzrGb5iaLZcFQ8zHdYvcGfEg.JPEG.ukimsidea%2FP5261103.jpg&type=sc960_832",
    좋아요: 0,
    싫어요: 0,
    date: "12월 9일 발행",
  },
  {
    title: "부산 미세먼지 현황",
    imgSrc:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20120116_280%2Fpjj7020_1326671117412eAyQk_JPEG%2FPJJ_2660-1.jpg&type=sc960_832",
    좋아요: 0,
    싫어요: 0,
    date: "12월 10일 발행",
  },
  {
    title: "전남 미세먼지 현황",
    imgSrc: "/seoul.jpg",
    좋아요: 0,
    싫어요: 0,
    date: "12월 11일 발행",
  },
  {
    title: "광주 미세먼지 현황",
    imgSrc:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTExMDJfMjE0%2FMDAxNTcyNjYzNDQ0NDUx.YhZ8hKpEZSk_-4ByGR0wi3O08h4KurxD4O_cjmJ1HKAg.cbOWdm50oCNchpDI5v3VuWbSaN6lgt-0RhXLltjq9QEg.JPEG.b_yoil%2FIMG_7105.jpg&type=sc960_832",
    좋아요: 0,
    싫어요: 0,
    date: "12월 12일 발행",
  },
  {
    title: "전북 미세먼지 현황",
    imgSrc:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA2MThfNzYg%2FMDAxNDk3NzczNzY3NDE5.qAOwI8mFC6znd3ktjgjqYYv4BOxOSceMHMquZ_66JpUg.FFJzXacup5XmZyDcG5mj5pCATKZOHQPnwKMvTG5kgKgg.JPEG.loitocorp%2F20161105%25B8%25B6%25C0%25CC%25BB%25EA_%25B9%25DD%25BF%25B5LTC_1846_1_%25BB%25E7%25BA%25BB.jpg&type=sc960_832",
    좋아요: 0,
    싫어요: 0,
    date: "12월 13일 발행",
  },
  {
    title: "제주 미세먼지 현황",
    imgSrc:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMzBfOTIg%2FMDAxNjA5MzA4MTYyMzky.VI7Cf8Jclhs4eh0N3GOgS6mRTV5lIECNF5a9tHTzdeAg.svQWmNCBUQK9Xf95oS0WyhJT9rs-g3YMlPLYjJiToQsg.JPEG.mogey%2FKakaoTalk_20201229_223927494_04.jpg&type=sc960_832",
    좋아요: 0,
    싫어요: 0,
    date: "12월 14일 발행",
  },
  {
    title: "세종 미세먼지 현황",
    imgSrc:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MTlfMjQ5%2FMDAxNjI0MTEyNDk5MTA4.IfSKQwrr2Lm7OB9VZjBR5wDhnvqw_tZtyePioeZc05Ig.zLvjYCy5YEgT3bjeGHyRgcm62UFLOojloxMWM1IlTRwg.JPEG.kenjaka%2F%25BC%25BC%25C1%25BE%25BD%25C3%25B3%25EB%25C0%25BB-EDIT-006.jpg&type=sc960_832",
    좋아요: 0,
    싫어요: 0,
    date: "12월 15일 발행",
  },
];

export default dataList;
