async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Andrelon-de-Souza/portfolio-provisorio-dio-js/refs/heads/main/data/profile.json';
    const fetching = await fetch(url);
    return await fetching.json();
}