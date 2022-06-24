import {
    Auth,
    createConnection,
    subscribeEntities,
    ERR_HASS_HOST_REQUIRED,
    getAuth,
    callService
} from "home-assistant-js-websocket";
import {Connection} from "home-assistant-js-websocket/dist/connection";
import {AuthData, SaveTokensFunc} from "home-assistant-js-websocket/dist/auth";

let auth: Auth;
let connection: Connection;

export async function connect() {
    console.log("haws connect");
    let auth;
    const authOptions = {
        async loadTokens() {
            try {
                return JSON.parse(localStorage.hassTokens);
            } catch (err) {
                return undefined;
            }
        },
        saveTokens: (tokens: AuthData | null) => {
            localStorage.hassTokens = JSON.stringify(tokens);
        },
    };
    try {
        // Try to pick up authentication after user logs in
        auth = await getAuth(authOptions);
    } catch (err) {
        if (err === ERR_HASS_HOST_REQUIRED) {
            // const hassUrl = "http://192.168.1.10:8123"
            // const hassUrl = "http://10.147.17.10:8123"
            const hassUrl = "http://ha.shunqin.store"
            // Redirect user to log in on their instance
            auth = await getAuth({hassUrl});
        } else {
            alert(`Unknown error: ${err}`);
            return;
        }
    }
    // const data = {
    //     "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJiM2QwZDRiMDM0ZjA0YzIyYjAyNzJiNzhmYjUwYTI0YyIsImlhdCI6MTY1NTE3NTQwMCwiZXhwIjoxNjU1MTc3MjAwfQ.qa_GC46lOjRHPeRm5IBWkt8Xg1Y3fSxZB625eEldgnE",
    //     "refresh_token": "e5788bf1274f81545b4418098d7efe5065fc8a116d21cc9e15047f3389d5e370066fa9cb47a018859a800c5b017e55f515be83d07cd62b33137dc1ecdb8ddfc8",
    //     "expires_in": 1800,
    //     "hassUrl": "http://ha.shunqin.store",
    //     "clientId": "http://localhost:8090/",
    //     "expires": 1655177199958
    // }
    // auth = new Auth(data);
    console.log(auth)
    connection = await createConnection({auth});
    // console.log(connection);
    // auth = auth;
    // connection = connection;
}

export async function getConnection() {
    if (!connection) {
        console.log("not connect")
        await connect()
    }
    return new Promise((resolve, reject) => {
        // dosomething
        return resolve(connection)
    })

}

export async function doService(service: string, serviceData: any) {
    await callService(connection, "homeassistant", service, serviceData)
}

// export async function subscribe() {
//     console.log("haws subscribe");
//     console.log(connection);
//     subscribeEntities(connection, (state) => console.log(state));
//
// }

// async function connect() {

// try {
//   // Try to pick up authentication after user logs in
//   auth = await getAuth();
// } catch (err) {
//   if (err === ERR_HASS_HOST_REQUIRED) {
//     const hassUrl = prompt(
//         "What host to connect to?",
//         "http://ha.shunqin.store"
//     );
//     // Redirect user to log in on their instance
//     auth = await getAuth({hassUrl});
//   } else {
//     alert(`Unknown error: ${err}`);
//     return;
//   }
// }
// auth = await getAuth(auth);

// }


