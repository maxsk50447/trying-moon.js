// use Moon Router with Moon
Moon.use(MoonRouter);

// create a router with the two following routes:
// set "/" route to use the "Home" component
// set "/calculator" route to use the "Calculator" component
const router = new MoonRouter({
  map: {
    "/": "Home",
    "/calculator": "Calculator"
  }
});

// create new instance of moon, work inside of #app
// and pass in the router for Moon to use
new Moon({
  el: "#app",
  router: router
});


// create components
Moon.component("Home", {
  template:
    `<div  class="app">
      <h1 class="title">Home</h1>
      <p>This is the homepage of your application! Check out the calculator!</p>
    </div>`
});  

Moon.component("Calculator", {
  data: () => ({
      number1: 0,
      number2: 0,
      number3: 0,
      number4: 0,
      number5: 0,
      number6: 0,
      number7: 0,
      number8: 0,
  }),
  template:
    `<div  class="app">
      <h1 class="title">Calculator</h1>
      <input type="number" m-model="number1" class="input-box">
       +
      <input type="number" m-model="number2" class="input-box">
       =
      <span>{{totalplus}}</span><br /><br />
      <input type="number" m-model="number3" class="input-box">
       -
      <input type="number" m-model="number4" class="input-box">
       =
      <span>{{totalminus}}</span><br /><br />
       <input type="number" m-model="number5" class="input-box">
       x
      <input type="number" m-model="number6" class="input-box">
       =
      <span>{{totalmultiply}}</span><br /><br />
       <input type="number" m-model="number7" class="input-box">
       /
      <input type="number" m-model="number8" class="input-box">
       =
      <span>{{totaldivide}}</span><br /><br />
    </div>`,
  computed: {
    totalplus: {
      get: function() {
        return +this.get("number1") + +this.get("number2");
      }
    },
    totalminus: {
      get: function() {
        return +this.get("number3") - +this.get("number4");
      }
    },
    totalmultiply: {
      get: function() {
        return +this.get("number5") * +this.get("number6");
      }
    },
    totaldivide: {
      get: function() {
        return +this.get("number7") / +this.get("number8");
      }
    }
  }
});

