const username = "YOUR_GITHUB_USERNAME"

fetch(`https://api.github.com/users/${username}`)
.then(res => res.json())
.then(data => {

document.getElementById("profile").innerHTML = `
<img src="${data.avatar_url}" width="120" class="rounded-circle">
<h3>${data.name}</h3>
<p>${data.bio || ""}</p>
<p>Repositories: ${data.public_repos}</p>
<p>Followers: ${data.followers}</p>
`

})

fetch(`https://api.github.com/users/${Ala-Ganesh}/repos`)
.then(res => res.json())
.then(repos => {

let repoHTML = ""

repos.slice(0,6).forEach(repo => {

repoHTML += `
<div class="col-md-4 mb-3">

<div class="card">

<div class="card-body">

<h5>${repo.name}</h5>

<p>${repo.description || "No description"}</p>

<a href="${repo.html_url}" target="_blank" class="btn btn-primary">
View Repo
</a>

</div>

</div>

</div>
`

})

document.getElementById("repos").innerHTML = repoHTML

})