// Checking user loggin
export const isLoggedIn = () => { 
    let data = sessionStorage.getItem("data");
    return (data != null) ? true : false;
}

// Saving user to sessionStorage
export const doLogin = (data) => {
    sessionStorage.setItem("data", JSON.stringify(data));
}




// Get Username from sessionStorage
export const getName = () => {
    let session = JSON.parse(sessionStorage.getItem('session'));
    return session.name != null ? session.name : 'Folks';
}

// Set Username to sessionStorage
export const savingSession = (session) => {
    sessionStorage.setItem("session", JSON.stringify(session));
}

// Get Member Id

export const getMemberId = () => {
    const session = JSON.parse(sessionStorage.getItem('session'));
    return (session.memberId !== 0) ? session.memberId : 0; 
}




//BASE URL

export const BASE_URL = 'https://health-app-production-fd2e.up.railway.app';
