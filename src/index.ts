const githubUser = `https://api.github.com/users/th3fishMk/repos`;
fetch(githubUser)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const repoCnt = document.getElementById('repo-count')!;
        repoCnt.textContent = String(data.length);
    })
    .catch((error) => {
        if (error instanceof error) {
            console.log(error);
        }
    });
