export default {
  name: "web-rating",
  props: {
    average: Number
  },
  mounted(){
    if(this.average){
      this.setProgress();
    }
    
  },
  methods: {
    setProgress(){
      const circle = this.$refs.progress;
      let radius = circle.r.baseVal.value;
      let circumference = radius * 2 * Math.PI;
      circle.style.strokeDasharray = circumference;
      let percent = this.average * 10;
      circle.style.strokeDashoffset = circumference - (percent / 100) * circumference;
    }
  }
};
