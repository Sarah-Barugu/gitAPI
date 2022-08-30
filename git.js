'use strict'

const finderBar = document.querySelector(".finder--bar");
const finderBtn = document.querySelector(".finder--btn");

const body = document.querySelector("body")

finderBtn.addEventListener('click', async function ()
{
  try
  {
  const awaitFetch = await fetch(`https://api.github.com/users/${ finderBar.value}`)
  const dataFeedback = await awaitFetch.json()
  console.log(dataFeedback);

  const html = `
    <h1>${dataFeedback.name}</h1>
    <img src="${dataFeedback.avatar_url}" alt="user-profile-picture">
    <p><b>FOLLOWERS</b>: ${dataFeedback.followers}</p>
    <p><b>FOLLOWING</b>: ${dataFeedback.following}</p>
  `
  body.insertAdjacentHTML("afterend", html)
    finderBar.value = '';
  } catch(error)
  {
    console.error(error);
  }
});
