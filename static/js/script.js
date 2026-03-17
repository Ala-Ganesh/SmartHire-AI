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
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    let navbar = document.querySelector('.navbar-collapse');
    if (navbar.classList.contains('show')) {
      new bootstrap.Collapse(navbar).hide();
    }
  });
});
})
