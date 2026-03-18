document.addEventListener("DOMContentLoaded", function(){

const ctx = document.getElementById('skillsChart')

if(ctx){

new Chart(ctx, {
type: 'bar',
data: {
labels: ['Python','Machine Learning','Flask','Data Science','TensorFlow'],
datasets: [{
label: 'Skill Level',
data: [90,80,75,85,70],
borderWidth: 1
}]
},
options: {
scales: {
y: {
beginAtZero: true,
max:100
}
}
}
})

}
window.addEventListener("scroll", function(){
let navbar = document.querySelector(".navbar");

if(window.scrollY > 10){
navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
}else{
navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
}
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    let navbar = document.querySelector('.navbar-collapse');
    if (navbar.classList.contains('show')) {
      new bootstrap.Collapse(navbar).hide();
    }
  });
});
})
