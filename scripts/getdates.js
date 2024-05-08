const currentYear = document.querySelector("#currentYear");
const lastMod = document.querySelector("#lastModified");

const today = new Date();

currentYear.innerHTML = `<span>${today.getFullYear()}</span>`;


const modDate = new Date(document.lastModified)

lastMod.innerHTML = `Updated <span>${new Intl.DateTimeFormat("en-US",
{
    dateStyle: "short"
}
).format(modDate)}</span>`;
