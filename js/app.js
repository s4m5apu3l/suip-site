document.addEventListener("DOMContentLoaded",(event) => {
  if (document.getElementById('calendar')) {
    console.log('app js');
    let calendarSwiper = new Swiper(".calendar__swiper", {
      freeMode: true,
      cssMode: true,
      slidesPerView: "auto",
      scrollbar: {
        el: '.calendar__swiper-paggination',
        draggable: true,
      },
      // pagination: {
      //   el: ".calendar__swiper-paggination",
      //   type: "progressbar",
      // },
    });


    let calendar = new Vue({
      el: '#calendar',
      data() {
        const month = new Date().getMonth();
        const year = new Date().getFullYear();
        return {
          modal: {
            title: "Название модального окна",
            otv: "ФИО ответственного",
            contact: "Контакты",
            svyaz: "Режим связи",
            date: "Дата",
            studio_espd: "Студия видеоконференции в составе ЕСПД",
            studio_districts: "Студия видеоконференции в Администрациях муниципальных районов РС (Я)",
            file: null
          },
          isMounted: false,
          masks: {
            weekdays: 'WWWW',
            title: "MMMM"
          },
          attributes: [
            {
              key: '1',
              id: "85",
              customData: {
                title: "Министерство труда и социального развития РС(Я)",
                time: "12:00",
              },
              dates: "2023, 05, 3"
            },
            {
              key: '2',
              id: "122",
              customData: {
                title: "Министерство жилищно-коммунального хозяйства и энергетики РС(Я)",
                time: "16:00",
              },
              dates: "2023, 05, 3"
            },
            {
              key: '3',
              id: "32",
              customData: {
                title: "Министерство сельского хозяйства РС(Я)",
                time: "17:00",
              },
              dates: "2023, 05, 3"
            }
          ]
        };
      },
      methods:{
        nextMonth()
        {
          this.$refs.calendar.move(1)
          this.selectMonth = this.$refs.calendar.pages[0].month
        },
        prevMonth()
        {
          this.$refs.calendar.move(-1)
          this.selectMonth = this.$refs.calendar.pages[0].month
        },
        changeYear(year)
        {
          this.selectYear = year
          this.$refs.calendar.move({month: parseInt(this.selectMonth),year: parseInt(year)})
        },
        changeMonth(month)
        {
          this.selectMonth = month
          this.$refs.calendar.move({month: parseInt(month),year: parseInt(this.selectYear)})
        },
        changeModalInfo(title,otv,contact,svyaz,studio_espd,studio_districts,date,file)
          {
            this.modal.title = title
              this.modal = {
                title: title,
                otv: otv,
                contact: contact,
                svyaz: svyaz,
                date: date,
                studio_espd: studio_espd,
                studio_districts: studio_districts,
              file: file
              }
            }
          },
      computed:{
        thisMonth: function () {
          if(this.isMounted)
          {
            return this.$refs.calendar.pages[0].monthLabel
          }
          return
        },
        thisYear: function () {
          if(this.isMounted)
          {
            return this.$refs.calendar.pages[0].yearLabel
          }
          return
        },
      },
      async mounted(){
        this.isMounted = true
        this.selectMonth = this.$refs.calendar.pages[0].month
        this.selectYear = this.$refs.calendar.pages[0].year
        console.log(this.attributes)

        // let formData = new FormData();

        // let res = await fetch('/api/calendar/get/', {
        //   mode: 'cors',
        //   method: 'POST',
        //   body: formData,
        // });

        // let json = await res.json();
        // this.attributes = json.data;
        // console.log(json.data);
        // console.log(this.attributes[0].dates)
      }
    });
  };
});