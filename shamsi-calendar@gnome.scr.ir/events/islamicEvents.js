function evList(Tarikh) {
  this.Tarikh = Tarikh;
  this._init();
}

evList.prototype = {
  name: 'مناسبت‌های مذهبی ایران',
  type: 'islamic',
  /* [month][day] = [title, isHoliday] */
  events: [[], [], [], [], [], [], [], [], [], [], [], [], []],

  _init: function () {



    this.events[1][1] = [[
      ['آغاز سال هجری قمری (اوّل ماه محرّم)', false, -1],
      ['روز شعر و ادبیات آیینی - روز بزرگداشت محتشم کاشانی', false, 0],
    ], false];

    this.events[1][9] = [[
      ['تاسوعای حسینی', true, -1],
    ], true];

    this.events[1][10] = [[
      ['عاشورای حسینی', true, -1],
    ], true];

    this.events[1][11] = [[
      ['روز تجلیل از اسرا و مفقودان', false, 0],
    ], false];

    this.events[1][12] = [[
      ['شهادت حضرت امام زین‌العابدین علیه‌السلام (۹۵ ه‍.ق)', false, -1],
    ], false];

    this.events[1][25] = [[
      ['شهادت حضرت امام زین‌العابدین علیه‌السلام :به روایتی (۹۵ ه‍.ق)', false, -1],
    ], false];

    this.events[2][7] = [[
      ['شهادت حضرت امام حسن مجتبی علیه‌السلام :به روایتی (۵۰ ه‍.ق)', false, -1],
      ['روز بزرگداشت سلمان فارسی', false, 0],
    ], false];

    this.events[2][20] = [[
      ['اربعین حسینی', true, -1],
    ], true];

    this.events[2][27] = [[
      ['روز وقف', false, 0],
    ], false];

    this.events[2][28] = [[
      ['رحلت حضرت رسول اکرم صلی اللّه علیه و آله (۱۱ ه‍.ق)', true, -1],
      ['شهادت حضرت امام حسن مجتبی علیه‌السلام (۵۰ ه‍.ق)', true, -1],
    ], true];

    this.events[3][1] = [[
      ['هجرت حضرت رسول اکرم صلی اللّه علیه و آله از مکّه به مدینه', false, 0],
    ], false];

    this.events[3][8] = [[
      ['شهادت حضرت امام حسن عسکری علیه‌السلام (۲۶۰ ه‍.ق)', true, -1],
      ['آغاز امامت حضرت ولی‌عصر (عج) (۲۶۰ ه‍.ق)', true, 0],
    ], true];

    this.events[3][12] = [[
      ['ولادت حضرت رسول اکرم صلی اللّه علیه و آله :به روایت اهل سنت (۵۳ سال قبل از هجرت)', false, 1],
      ['آغاز هفته‌ی وحدت', false, 0],
    ], false];

    this.events[3][17] = [[
      ['ولادت حضرت رسول اکرم صلی اللّه علیه و آله - روز اخلاق و مهرورزی (۵۳ سال قبل از هجرت)', true, 1],
      ['ولادت حضرت امام جعفر صادق علیه‌السلام، مؤسس مذهب جعفری (۸۳ ه‍.ق)', true, 1],
    ], true];

    this.events[4][4] = [[
      ['ولادت حضرت عبدالعظیم حسنی علیه‌السلام', false, 0],
    ], false];

    this.events[4][8] = [[
      ['ولادت حضرت امام حسن عسکری علیه‌السلام (۲۳۲ ه‍.ق)', false, 1],
    ], false];

    this.events[4][10] = [[
      ['وفات حضرت معصومه سلام‌اللّه علیها (۲۰۱ ه‍.ق)', false, -1],
    ], false];

    this.events[5][5] = [[
      ['ولادت حضرت زینب سلام‌اللّه علیها و روز پرستار', false, 1],
    ], false];

    this.events[5][13] = [[
      ['شهادت حضرت فاطمه‌ی زهرا سلام‌اللّه علیها :به روایتی (۱۱ ه‍.ق)', false, -1],
    ], false];

    this.events[6][3] = [[
      ['شهادت حضرت فاطمه‌ی زهرا سلام‌اللّه علیها (۱۱ ه‍.ق)', true, -1],
    ], true];

    this.events[6][13] = [[
      ['سالروز وفات حضرت اُم‌البنین سلام‌اللّه علیها', false, -1],
      ['روز تکریم مادران و همسران شهدا', false, 0],
    ], false];

    this.events[6][20] = [[
      ['ولادت حضرت فاطمه‌ی زهرا سلام‌اللّه علیها و روز زن (۸ سال قبل از هجرت)', false, 1],
      ['تولّد حضرت امام خمینی (رحمة‌اللّه علیه)، رهبر کبیر انقلاب اسلامی (۱۳۲۰ ه‍.ق)', false, 0],
      ['روز مادر - روز زن', false, 1],
    ], false];

    this.events[7][1] = [[
      ['ولادت حضرت امام محمّد باقر علیه‌السلام (۵۷ ه‍.ق)', false, 1],
    ], false];

    this.events[7][3] = [[
      ['شهادت حضرت امام علی نقی «هادی» علیه‌السلام (۲۵۴ ه‍.ق)', false, -1],
    ], false];

    this.events[7][10] = [[
      ['ولادت حضرت امام محمد تقی علیه‌السلام «جوادالائمه» (۱۹۵ ه‍.ق)', false, 1],
    ], false];

    this.events[7][13] = [[
      ['ولادت حضرت امام علی علیه‌السلام (۲۳ سال قبل از هجرت)', true, 1],
      ['آغاز ایام البیض (اعتکاف)', false, 1],
      ['روز پدر - روز مرد', false, 1],
    ], true];

    this.events[7][15] = [[
      ['ارتحال حضرت زینب کبری سلام‌اللّه علیها (۶۲ ه‍.ق)', false, -1],
      ['تغییر قبله‌ی مسلمین از بیت‌المقدس به مکّه‌ی معظّمه (۲ ه‍.ق)', false, 0],
    ], false];

    this.events[7][25] = [[
      ['شهادت حضرت امام موسی کاظم علیه‌السلام (۱۸۳ ه‍.ق)', false, -1],
    ], false];

    this.events[7][27] = [[
      ['مبعث حضرت رسول اکرم صلی‌اللّه علیه و آله (۱۳ سال قبل از هجرت)', true, 1],
    ], true];

    this.events[8][3] = [[
      ['ولادت حضرت امام حسین علیه‌السلام و روز پاسدار (۴ ه‍.ق)', false, 1],
    ], false];

    this.events[8][4] = [[
      ['ولادت حضرت ابوالفضل‌العباس علیه‌السلام و روز جانباز (۲۶ ه‍.ق)', false, 1],
    ], false];

    this.events[8][5] = [[
      ['ولادت حضرت امام زین‌العابدین علیه‌السلام (۳۸ ه‍.ق)', false, 1],
      ['روز صحیفه سجّادیه', false, 0],
    ], false];

    this.events[8][11] = [[
      ['ولادت حضرت علی‌اکبر علیه‌السلام و روز جوان (۳۳ ه‍.ق)', false, 1],
    ], false];

    this.events[8][15] = [[
      ['ولادت حضرت قائم عجل‌اللّه تعالی فرجه (جشن صاحب‌الزّمان) و روز جهانی مستضعفان (۲۵۵ ه‍.ق)', true, 1],
      ['روز سربازان گمنام امام زمان (عج)', false, 0],
    ], true];

    this.events[9][10] = [[
      ['وفات حضرت خدیجه سلام‌اللّه علیها (۳ سال قبل از هجرت)', false, -1],
    ], false];

    this.events[9][15] = [[
      ['ولادت حضرت امام حسن مجتبی علیه‌السلام (۳ ه‍.ق)', false, 1],
      ['روز اکرام و تکریم خیّرین', false, 0],
    ], false];

    this.events[9][18] = [[
      ['شب قدر', false, -1],
    ], false];

    this.events[9][19] = [[
      ['ضربت‌خوردن حضرت امام علی علیه‌السلام (۴۰ ه‍.ق)', false, -1],
      ['روز نهج‌البلاغه', false, 0],
    ], false];

    this.events[9][20] = [[
      ['شب قدر', false, -1],
    ], false];

    this.events[9][21] = [[
      ['شهادت امیر‌المؤمنین، حضرت امام علی علیه‌السلام (۴۰ ه‍.ق)', true, -1],
    ], true];

    this.events[9][22] = [[
      ['شب قدر', false, -1],
    ], false];

    this.events[9][23] = [[
      ['پیش‌یادآوری: آخرین جمعه‌ی ماه مبارک رمضان، روز قدس خواهد‌بود', false, 0],
    ], false];

    this.events[10][1] = [[
      ['عید سعید فطر', true, 1],
    ], true];

    this.events[10][2] = [[
      ['تعطیل به مناسبت عید سعید فطر', true, 0],
    ], true];

    this.events[10][17] = [[
      ['روز فرهنگ پهلوانی و ورزش زورخانه‌ای', false, 0],
    ], false];

    this.events[10][21] = [[
      ['فتح اندلس به دست مسلمانان (۹۲ ه‍.ق)', false, 0],
    ], false];

    this.events[10][25] = [[
      ['شهادت حضرت امام جعفر صادق علیه‌السلام (۱۴۸ ه‍.ق)', true, -1],
    ], true];

    this.events[11][1] = [[
      ['ولادت حضرت معصومه سلام‌اللّه علیها و روز دختران (۱۷۳ ه‍.ق)', false, 1],
      ['آغاز دهه‌ی کرامت', false, 0],
    ], false];

    this.events[11][5] = [[
      ['روز تجلیل از امام‌زادگان و بقاع متبرکه', false, 0],
      ['روز بزرگداشت حضرت صالح بن موسی کاظم علیه‌السلام', false, 0],
    ], false];

    this.events[11][6] = [[
      ['روز بزرگداشت حضرت احمد بن موسی شاهچراغ علیه‌السلام', false, 0],
    ], false];

    this.events[11][11] = [[
      ['ولادت حضرت امام رضا علیه‌السلام (۱۴۸ ه‍.ق)', false, 1],
    ], false];

    this.events[12][1] = [[
      ['سالروز ازدواج حضرت امام علی علیه‌السلام و حضرت فاطمه سلام‌اللّه علیها (۲ ه‍.ق)', false, 1],
      ['روز ازدواج', false, 0],
    ], false];

    this.events[12][6] = [[
      ['شهادت مظلومانه‌ی زائران خانه‌ی خدا به دست مأموران آل‌سعود در سال ۱۳۶۶ هجری‌شمسی (۱۴۰۷ ه‍.ق)', false, 0],
    ], false];

    this.events[12][7] = [[
      ['شهادت حضرت امام محمد باقر علیه‌السلام (۱۱۴ ه‍.ق)', false, -1],
    ], false];

    this.events[12][9] = [[
      ['روز عرفه (روز نیایش)', false, 1],
    ], false];

    this.events[12][10] = [[
      ['عید سعید قربان', true, 1],
      ['آغاز دهه‌ی امامت و ولایت', false, 0],
    ], true];

    this.events[12][15] = [[
      ['ولادت حضرت امام علی نقی «هادی» علیه‌السلام (۲۱۲ ه‍.ق)', false, 1],
    ], false];

    this.events[12][18] = [[
      ['عید سعید غدیر خم (۱۰ ه‍.ق)', true, 1],
    ], true];

    this.events[12][20] = [[
      ['ولادت حضرت امام موسی کاظم علیه‌السلام (۱۲۸ ه‍.ق)', false, 1],
    ], false];

    this.events[12][24] = [[
      ['روز مباهله‌ی پیامبر اسلام صلی‌اللّه علیه و آله (۱۰ ه‍.ق)', false, 0],
    ], false];

    this.events[12][25] = [[
      ['روز خانواده و تکریم بازنشستگان', false, 0],
    ], false];



    this.addSpecificEvents();
  },

  addSpecificEvents: function () {
    let date = this.Tarikh.timeStamp_to_islamic(Date.now());

    //آخرین روز ماه صَفَر 
    this.events[2][this.Tarikh.daysOfMonth_islamic(date[0], 2)] = [[
      ['شهادت حضرت امام رضا علیه‌السلام (۲۰۳ ه‍.ق)', true, -1]
    ], true];

    //آخرین روز ماه ذیقعده 
    this.events[11][this.Tarikh.daysOfMonth_islamic(date[0], 11)] = [[
      ['شهادت حضرت امام محمد تقی علیه‌السلام «جوادالائمه» (۲۲۰ ه‍.ق)', false, -1]
    ], false];

  }
};
