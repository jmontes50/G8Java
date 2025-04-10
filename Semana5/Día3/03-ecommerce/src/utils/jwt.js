import { jwtDecode } from "jwt-decode";

const getTimeExpToken = (jwt) => {
    try {
        const decode = jwtDecode(jwt);
        console.log(decode);
    } catch (error) {
        console.log(error);
        return false;
    }
}

export default getTimeExpToken;