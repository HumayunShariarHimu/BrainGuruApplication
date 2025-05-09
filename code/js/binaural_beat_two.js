new Vue({
  data(){
    return{
      contextClass:null,
      context: null,
      merger: null,
      oscillator1: null,
      gainNode: null,
      oscillator2: null,
      freq:500,
      freq2:503,
    }
  },
  mounted(){
    var vm = this 
    vm.contextClass = (window.AudioContext ||
                      window.webkitAudioContext ||
                      window.mozAudioContext ||
                      window.oAudioContext ||
                      window.msAudioContext)
    if (vm.contextClass) {
      vm.context = new vm.contextClass();
    }
  },
  methods:{
    start() {
      var vm = this
      if (vm.oscillator1) vm.oscillator1.disconnect();
      if (vm.oscillator2) vm.oscillator2.disconnect();
      vm.oscOn(parseFloat(vm.freq),parseFloat(vm.freq2));
    },
    stop() {
      var vm = this
      vm.oscillator1.disconnect();
      vm.oscillator2.disconnect();
    },
    oscOn(freq1, freq2){
      var vm = this
      vm.merger = vm.context.createChannelMerger(2);
      
      vm.oscillator1 = vm.context.createOscillator();
      vm.oscillator1.type = 0;
      vm.oscillator1.frequency.value = freq1;
      vm.gainNode = vm.context.createGain ? vm.context.createGain() : vm.context.createGainNode();
      vm.oscillator1.connect(vm.gainNode,0,0);
      // gainNode.connect(context.destination,0,0);
      vm.gainNode.gain.value = .1;
      vm.oscillator1.start ? vm.oscillator1.start(0) : vm.oscillator1.noteOn(0)
      
      vm.gainNode.connect(vm.merger,0,1);
      
      vm.oscillator2 = vm.context.createOscillator();
      vm.oscillator2.type = 0;
      vm.oscillator2.frequency.value = freq2;
      vm.gainNode = vm.context.createGain ? vm.context.createGain() : vm.context.createGainNode();
      vm.oscillator2.connect(vm.gainNode);
      // gainNode.connect(context.destination,0,1);
      vm.gainNode.connect(vm.merger,0,0);
      
      
      vm.gainNode.gain.value = .1;
      vm.oscillator2.start ? vm.oscillator2.start(0) : vm.oscillator2.noteOn(0)
      
      vm.merger.connect(vm.context.destination);
    }
  }
}).$mount('#app')