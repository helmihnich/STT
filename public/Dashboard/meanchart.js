var socket = io();
let myChart;
var ctx = document.getElementById('myChartDash1').getContext('2d');
socket.on ("chart", (message)=>{
  
  if (myChart!=null){
    myChart.destroy()
  } 
  console.log(message)
  
  myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: message.time,
      datasets: [{
      data: message.temperature,
      fill:false,
      borderColor:'blue'
      }]
    },
  options: {
    plugins: {
      legend: {
        display: false,
      }},
      scales: {
        x:{
          grid:{
            display: false
          }
        },
        y: {
          beginAtZero: true,
          grid : {
            display: false
          }
        }
      },
    tension: 0.3
    }
  });

  
    document.querySelector(".date").addEventListener("change", function () {
      myChart.destroy();
      console.log("mrigle")
      myChart.data.datasets[0].data = message.temperature;
      myChart.data.labels = message.time;
      myChart.update();
    })
  
  
    
    document.querySelector(".xxxx").addEventListener("change", function () {
      myChart.destroy();
      console.log("mrigle")
      myChart.data.datasets[0].data = message.temperature;
      myChart.data.labels = message.time;
      myChart.update();
    })
  
  
    
    document.querySelector(".weeks").addEventListener("change", function () {
      myChart.destroy();
      console.log("mrigle")
      myChart.data.datasets[0].data = message.temperature;
      myChart.data.labels = message.time;
      myChart.update();
    })

  
    
    x.addEventListener("change",function(){
      myChart.destroy();
      myChart.data.datasets[0].data = message.temperature;
      myChart.data.labels = message.time;
      myChart.update();
    })
  
  
})

socket.on ("month", (message)=>{
  
  if (myChart!=null){
    myChart.destroy()
  } 
  
  myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: message.time,
      datasets: [{
      data: message.temperature,
      fill:false,
      borderColor:'blue'
      }]
    },
  options: {
    plugins: {
      legend: {
        display: false,
      }},
      scales: {
        x:{
          grid:{
            display: false
          },
          ticks: {
            display: false //this will remove only the label
        }
        },
        y: {
          grid : {
            display: false
          }
        }
      },
    tension: 0.3
    }
  });


  
    document.querySelector(".date").addEventListener("change", function () {
      myChart.destroy();
      console.log("mrigle")
      myChart.data.datasets[0].data = message.temperature;
      myChart.data.labels = message.time;
      myChart.update();
    })
  
  
    
    document.querySelector(".xxxx").addEventListener("change", function () {
      myChart.destroy();
      console.log("mrigle")
      myChart.data.datasets[0].data = message.temperature;
      myChart.data.labels = message.time;
      myChart.update();
    })
  
  
    
    document.querySelector(".weeks").addEventListener("change", function () {
      myChart.destroy();
      console.log("mrigle")
      myChart.data.datasets[0].data = message.temperature;
      myChart.data.labels = message.time;
      myChart.update();
    })
  
  
    
    x.addEventListener("change",function(){
      myChart.destroy();
      myChart.data.datasets[0].data = message.temperature;
      myChart.data.labels = message.time;
      myChart.update();
    })
  
  
})

socket.on ("week", (message)=>{
  
  if (myChart!=null){
    myChart.destroy()
  } 
  console.log(message)
  
  myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: message.time,
      datasets: [{
      data: message.temperature,
      fill:false,
      borderColor:'blue'
      }]
    },
  options: {
    plugins: {
      legend: {
        display: false,
      }},
      scales: {
        x:{
          grid:{
            display: false
          },
          ticks: {
            display: false //this will remove only the label
        }
        },
        y: {
          grid : {
            display: false
          }
        }
      },
    tension: 0.3
    }
  });

  
    document.querySelector(".date").addEventListener("change", function () {
      myChart.destroy();
      console.log("mrigle")
      myChart.data.datasets[0].data = message.temperature;
      myChart.data.labels = message.time;
      myChart.update();
    })
  
  
    
    document.querySelector(".xxxx").addEventListener("change", function () {
      myChart.destroy();
      console.log("mrigle")
      myChart.data.datasets[0].data = message.temperature;
      myChart.data.labels = message.time;
      myChart.update();
    })
  
  
    
    document.querySelector(".weeks").addEventListener("change", function () {
      myChart.destroy();
      console.log("mrigle")
      myChart.data.datasets[0].data = message.temperature;
      myChart.data.labels = message.time;
      myChart.update();
    })
  
  
    
    x.addEventListener("change",function(){
      myChart.destroy();
      myChart.data.datasets[0].data = message.temperature;
      myChart.data.labels = message.time;
      myChart.update();
    })
  
  
})

socket.on ("today", (message)=>{
  
  if (myChart!=null){
    myChart.destroy()
  } 
  console.log(message)
  
  myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: message.time,
      datasets: [{
      data: message.temperature,
      fill:false,
      borderColor:'blue'
      }]
    },
  options: {
    plugins: {
      legend: {
        display: false,
      }},
      scales: {
        x:{
          grid:{
            display: false
          }
        },
        y: {
          beginAtZero: true,
          grid : {
            display: false
          }
        }
      },
    tension: 0.3
    }
  });

  const b = document.querySelector(".date")

      b.addEventListener("change", function () {
      myChart.destroy();
      console.log("mrigle")
      myChart.data.datasets[0].data = message.temperature;
      myChart.data.labels = message.time;
      myChart.update();
    })

    
    document.querySelector(".xxxx").addEventListener("change", function () {
      myChart.destroy();
      console.log("mrigle")
      myChart.data.datasets[0].data = message.temperature;
      myChart.data.labels = message.time;
      myChart.update();
    })
  
  
    
    document.querySelector(".weeks").addEventListener("change", function () {
      myChart.destroy();
      console.log("mrigle")
      myChart.data.datasets[0].data = message.temperature;
      myChart.data.labels = message.time;
      myChart.update();
    })
  
  
    
    x.addEventListener("change",function(){
      myChart.destroy();
      myChart.data.datasets[0].data = message.temperature;
      myChart.data.labels = message.time;
      myChart.update();
    })
  
})

socket.on ("day", (message)=>{
  
  if (myChart!=null){
    myChart.destroy()
  } 
  console.log(message)
  
  myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: message.time,
      datasets: [{
      data: message.temperature,
      fill:false,
      borderColor:'blue'
      }]
    },
  options: {
    plugins: {
      legend: {
        display: false,
      }},
      scales: {
        x:{
          grid:{
            display: false
          }
        },
        y: {
          beginAtZero: true,
          grid : {
            display: false
          }
        }
      },
    tension: 0.3
    }
  });


  
  document.querySelector(".date").addEventListener("change", function () {
    myChart.destroy();
    console.log("mrigle")
    myChart.data.datasets[0].data = message.temperature;
    myChart.data.labels = message.time;
    myChart.update();
  })


  
  document.querySelector(".xxxx").addEventListener("change", function () {
    myChart.destroy();
    console.log("mrigle")
    myChart.data.datasets[0].data = message.temperature;
    myChart.data.labels = message.time;
    myChart.update();
  })


  
  document.querySelector(".weeks").addEventListener("change", function () {
    myChart.destroy();
    console.log("mrigle")
    myChart.data.datasets[0].data = message.temperature;
    myChart.data.labels = message.time;
    myChart.update();
  })


  
  x.addEventListener("change",function(){
    myChart.destroy();
    myChart.data.datasets[0].data = message.temperature;
    myChart.data.labels = message.time;
    myChart.update();
  })

})
