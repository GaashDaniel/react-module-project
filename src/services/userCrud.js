// const origin = 'https://monkfish-app-z9uza.ondigitalocean.app/bcard2';
const origin = 'http://localhost:3000';

export async function getUserToken({ email, password }) {
    const url = `${origin}/users/login`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password }),
        });
        if (!response.ok) {
            const error = await response.text();
            return { error, jwtToken: null };
        };
        const result = await response.text();
        return { jwtToken: result, error: null };
    } catch (error) {
        console.error(error);
        return { error: error, jwtToken: null };
    };
};

export async function getUserById(userId) {
    const url = `${origin}/users/${userId}`;
    try {
        const response = await fetch(url, {
            headers: {
                'x-auth-token': localStorage.getItem('jwtToken'),
            },
        });
        if (!response.ok) {
            const error = await response.text();
            return { error, user: null };
        };
        const result = await response.json();
        return { user: result, error: null };
    } catch (error) {
        console.error(error);
        return { error: error, user: null };
    };
};

export async function registerUser(formValues) {
    const url = `${origin}/users`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formValues),
        });
        if (!response.ok) {
            const error = await response.text();
            return { error, user: null };
        };
        const result = await response.json();
        return { user: result, error: null };
    } catch (error) {
        console.error(error);
        return { error: error, user: null };
    };
};

export async function updateUser(formValues, userId) {
    const url = `${origin}/users/${userId}`;
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.getItem('jwtToken'),
            },
            body: JSON.stringify(formValues),
        });
        if (!response.ok) {
            const error = await response.text();
            return { error, user: null };
        };
        const result = await response.json();
        return { user: result, error: null };
    } catch (error) {
        console.error(error);
        return { error: error, user: null };
    };
};

export async function deleteUser(userId) {
    const url = `${origin}/users/${userId}`;
    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'x-auth-token': localStorage.getItem('jwtToken'),
            },
        });
        if (!response.ok) {
            const error = await response.text();
            return { error, user: null };
        };
        const result = await response.json();
        return { user: result, error: null };
    } catch (error) {
        console.error(error);
        return { error: error, user: null };
    };
};