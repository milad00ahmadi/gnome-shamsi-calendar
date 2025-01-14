
// copyright پژوهش‌های ایرانی at http://ghiasabadi.com/
// jdf.scr.ir : Only edit structure to new events structure (without change events text)

function evList(Tarikh) {
  this.Tarikh = Tarikh;
  this._init();
}

evList.prototype = {
  name: 'مناسبت‌های باستانی',
  type: 'persian',
  /* [month][day] = [title, isHoliday] */
  events: [[], [], [], [], [], [], [], [], [], [], [], [], []],

  _init: function () {

    this.events[1][1] = [[
      ['جشن نوروز', false, 1]
    ], false];

    this.events[1][6] = [[
      ['روز امید', false, 0],
      ['روز شادباش‌نویسی', false, 0]
    ], false];

    this.events[1][10] = [[
      ['جشن آبان‌گاه', false, 0]
    ], false];

    this.events[1][13] = [[
      ['جشن سیزده‌به‌در', false, 1]
    ], false];

    this.events[1][17] = [[
      ['سروش روز، جشن سروش‌گان', false, 0]
    ], false];

    this.events[1][19] = [[
      ['فروردین روز، جشن فروردین‌گان', false, 0]
    ], false];

    this.events[2][2] = [[
      ['جشن گیاه‌آوری', false, 0]
    ], false];

    this.events[2][3] = [[
      ['اردیبهشت روز، جشن اردیبهشت‌گان', false, 0]
    ], false];

    this.events[2][10] = [[
      ['جشن چهلم نوروز', false, 0]
    ], false];

    this.events[2][15] = [[
      ['گاهنبار میدیوزَرِم، جشن میانه بهار، جشن بهاربد', false, 0],
      ['روز پیام‌آوری زرتشت', false, 0]
    ], false];

    this.events[3][1] = [[
      ['ارغاسوان، جشن گرما', false, 0]
    ], false];

    this.events[3][6] = [[
      ['خرداد روز، جشن خردادگان', false, 0]
    ], false];

    this.events[4][1] = [[
      ['جشن آب‌پاشونک، جشن آغاز تابستان', false, 0],
      ['سال نو در گاهشماری گاهنباری', false, 0]
    ], false];

    this.events[4][6] = [[
      ['جشن نیلوفر', false, 0]
    ], false];

    this.events[4][13] = [[
      ['تیرروز، جشن تیرگان', false, 0]
    ], false];

    this.events[4][15] = [[
      ['جشن خام‌خواری', false, 0]
    ], false];

    this.events[5][7] = [[
      ['مردادروز، جشن مردادگان', false, 0]
    ], false];

    this.events[5][10] = [[
      ['جشن چهلم تابستان', false, 0]
    ], false];

    this.events[5][15] = [[
      ['گاهنبار میدیوشِم، جشن میانه تابستان', false, 0]
    ], false];

    this.events[5][18] = [[
      ['جشن مَی‌خواره', false, 0]
    ], false];

    this.events[6][1] = [[
      ['فغدیه، جشن خنکی هوا', false, 0]
    ], false];

    this.events[6][3] = [[
      ['جشن کشمین', false, 0]
    ], false];

    this.events[6][4] = [[
      ['شهریورروز، جشن شهریورگان', false, 0],
      ['زادروز داراب (کوروش)', false, 0],
      ['عروج مانی', false, 0]
    ], false];

    this.events[6][8] = [[
      ['خزان جشن', false, 0]
    ], false];

    this.events[6][15] = [[
      ['بازار جشن', false, 0]
    ], false];

    this.events[6][31] = [[
      ['گاهنبار پَتیَه‌شَهیم، جشن پایان تابستان', false, 0]
    ], false];

    this.events[7][1] = [[
      ['جشن میتراکانا', false, 0],
      ['سال نو هخامنشی', false, 0]
    ], false];

    this.events[7][14] = [[
      ['تیرروز، جشن تیرروزی', false, 0]
    ], false];

    this.events[7][13] = [[
      ['آیین قالیشویان اردهال، بازماندی از تیرگان', false, 0]
    ], false];

    this.events[7][16] = [[
      ['مهرروز، جشن مهرگان', false, 0]
    ], false];

    this.events[7][21] = [[
      ['رام روز، جشن رام روزی', false, 0],
      ['جشن پیروزی کاوه و فریدون', false, 0]
    ], false];

    this.events[8][10] = [[
      ['آبان روز، جشن آبان‌گان', false, 0]
    ], false];

    this.events[8][15] = [[
      ['گاهنبار اَیاثرَم، جشن میانه پاییز', false, 0]
    ], false];

    this.events[9][1] = [[
      ['آذر جشن', false, 0]
    ], false];

    this.events[9][9] = [[
      ['آذر روز، جشن آذرگان', false, 0]
    ], false];

    this.events[9][30] = [[
      ['جشن شب یلدا (چله)', false, 1],
      ['گاهنبار میدیارِم، جشن میانه سال گاهنباری و پایان پاییز', false, 0]
    ], false];

    this.events[10][1] = [[
      ['روز میلاد خورشید، جشن خرم روز', false, 0],
      ['نخستین جشن دی‌گان', false, 0]
    ], false];

    this.events[10][5] = [[
      ['بازار جشن', false, 0]
    ], false];

    this.events[10][8] = [[
      ['دی به آذر روز، دومین جشن دی‌گان', false, 0]
    ], false];

    this.events[10][14] = [[
      ['سیر روز، جشن گیاه‌خواری', false, 0]
    ], false];

    this.events[10][15] = [[
      ['جشن پیکرتراشی', false, 0],
      ['دی به مهر روز، سومین جشن دی‌گان', false, 0]
    ], false];

    this.events[10][16] = [[
      ['جشن درامزینان، جشن درفش‌ها', false, 0]
    ], false];

    this.events[10][23] = [[
      ['دی به دین روز، چهارمین جشن دی‌گان', false, 0]
    ], false];

    this.events[11][2] = [[
      ['بهمن روز، جشن بهمن‌گان', false, 0]
    ], false];

    this.events[11][4] = [[
      ['شهریور روز، آغاز پادشاهی داراب (کوروش)', false, 0]
    ], false];

    this.events[11][5] = [[
      ['جشن نوسَره', false, 0]
    ], false];

    this.events[11][10] = [[
      ['آبان روز، جشن سَدَه، آتش افروزی بر بام‌ها', false, 0],
      ['نمایش بازی همگانی', false, 0]
    ], false];

    this.events[11][15] = [[
      ['جشن میانه زمستان', false, 0]
    ], false];

    this.events[11][22] = [[
      ['بادروز، جشن بادروزی', false, 0]
    ], false];

    this.events[12][1] = [[
      ['جشن اسفندی', false, 0],
      ['جشن آبسالان، بهار جشن', false, 0],
      ['نمایش بازی همگانی', false, 0]
    ], false];

    this.events[12][5] = [[
      ['اسفند روز، جشن اسفندگان، گرامی‌داشت زمین و بانوان', false, 0],
      ['جشن برزگران', false, 0]
    ], false];

    this.events[12][10] = [[
      ['جشن وخشنکام', false, 0]
    ], false];

    this.events[12][19] = [[
      ['جشن نوروز رودها', false, 0]
    ], false];

    this.events[12][20] = [[
      ['جشن گلدان', false, 0]
    ], false];

    this.events[12][25] = [[
      ['پایان سرایش شاهنامه فردوسی', false, 0]
    ], false];

    this.events[12][26] = [[
      ['فروردگان', false, 0]
    ], false];

    this.addSpecificEvents();
  },

  addSpecificEvents: function () {
    let date = this.Tarikh.timeStamp_to_persian(Date.now());
    let year = date[0];

    let first_saturday_of_year,
      first_wednesday_of_year,
      last_day_of_year,
      last_wednesday_of_year;

    // find first saturday of the year
    // and
    // find first wednesday of the year
    for (let i = 1; i <= 7; i++) {
      let p_ts = this.Tarikh.persian_to_gregorian(year, 1, i);
      p_ts = new Date(p_ts[0], p_ts[1] - 1, p_ts[2], 5);/* :do not remove this 5 */
      if (p_ts.getDay() === 3) {
        let dummy_date = this.Tarikh.gregorian_to_persian(p_ts.getFullYear(), p_ts.getMonth() + 1, p_ts.getDate());
        first_wednesday_of_year = dummy_date[2];
      }
      if (p_ts.getDay() === 6) {
        let dummy_date = this.Tarikh.gregorian_to_persian(p_ts.getFullYear(), p_ts.getMonth() + 1, p_ts.getDate());
        first_saturday_of_year = dummy_date[2];
      }
    }

    // find last day of the year
    // and
    // find last wednesday of the year
    let leap = ((((((year - ((year > 0) ? 474 : 473)) % 2820) + 474) + 38) * 682) % 2816) < 682;

    if (!last_day_of_year) {
      last_day_of_year = 29 + leap;
    }

    for (let i = 0; i < 6; i++) {
      let p_ts = this.Tarikh.persian_to_gregorian(year, 12, 29 + leap - i);

      p_ts = new Date(p_ts[0], p_ts[1] - 1, p_ts[2]);
      if (p_ts.getDay() === 3) {
        let dummy_date = this.Tarikh.gregorian_to_persian(p_ts.getFullYear(), p_ts.getMonth() + 1, p_ts.getDate());
        last_wednesday_of_year = dummy_date[2];
        break;
      }
    }

    this.events[1][first_saturday_of_year] = [[
      ['جشن نخستین شنبه سال', false, 0]
    ], false];

    this.events[1][first_wednesday_of_year] = [[
      ['جشن نخستین چهارشنبه سال', false, 0]
    ], false];

    this.events[12][last_day_of_year] = [[
      ['گاهنبار هَمَسپَتمَدَم، جشن پایان زمستان', false, 0],
      ['زادروز زرتشت', false, 0],
      ['جشن اوشیدر (نجات بخش ایرانی) در دریاچه هامون و کوه خواجه', false, 0],
      ['آتش افروزی بر بام‌ها در استقبال از نوروز', false, 0]
    ], false];

    this.events[12][last_wednesday_of_year - 1] = [[
      ['شب چهارشنبه سوری : احتیاط کنیم!', false, 1]
    ], false];

  }
};
