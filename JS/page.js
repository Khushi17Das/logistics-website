function navTo(pageName) 
{
    if (pageName.includes('.html')) 
        {
        window.location.href = pageName;
        } 
    else 
        {
        const sections = document.querySelectorAll('section');
        sections.forEach(s => s.classList.remove('active-section'));
        const target = document.getElementById(pageName);
        if (target) 
            {
            target.classList.add('active-section');
            const mainArea = document.querySelector('main');
            if (mainArea) mainArea.scrollTop = 0;
            }
        }
}

function openLogin() 
{
    const modal = document.getElementById("loginModal");
    if (modal) 
        {
        modal.style.display = "flex";
        }
}

function closeLogin() 
{
    const modal = document.getElementById("loginModal");
    if (modal) 
        {
        modal.style.display = "none";
        }
}

window.onclick = function(event) 
{
    const modal = document.getElementById("loginModal");
    if (event.target == modal) 
        {
        modal.style.display = "none";
        }
}