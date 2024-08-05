const username = 'Flixz1n';
const url = `https://api.github.com/users/${username}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
    document.getElementById('avatar').src = data.avatar_url;
    document.getElementById('name').textContent = data.name;
    document.getElementById('followers').textContent = data.followers;
    document.getElementById('following').textContent = data.following;
    document.getElementById('repos').textContent = data.public_repos;
    document.getElementById('link').href = data.html_url;
})
.catch(error => {
    console.error('Erro ao buscar dados:', error);
});
