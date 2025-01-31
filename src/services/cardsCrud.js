import { toast } from "react-toastify";

export async function getAllBusinesses() {
    try {
        const response = await fetch(`https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards`);
        const businesses = await response.json();
        return businesses;
    } catch (error) {
        console.error(error);
        toast.error('Failed to fetch businesses');
        return [];
    };
};

export async function getBusinessById(id) {
    try {
        const response = await fetch(`https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${id}`);
        const business = await response.json();
        return business;
    } catch (error) {
        console.error(error);
        toast.error('Failed to fetch business');
        return {};
    };
};

export async function patchToggleFavorite(cardId) {
    try {
        const response = await fetch(`https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${cardId}`, {
            method: 'PATCH',
            headers: {
                'x-auth-token': localStorage.getItem('jwtToken'),
            },
        });
        const business = await response.json();
        return business;
    } catch (error) {
        console.error(error);
        toast.error('Failed to Like/Unlike business card');
        return null;
    };
};

export async function createNewBusinessCard(formValues) {
    try {
        const response = await fetch('https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.getItem('jwtToken'),
            },
            body: JSON.stringify(formValues),
        });
        if (!response.ok) {
            const error = await response.text();
            return { error, business: null };
        };
        const business = await response.json();
        return { business, error: null };
    } catch (error) {
        console.error(error);
        return { error: error, business: null };
    };
};

export async function updateBusinessCard(businessId, formValues) {
    try {
        const response = await fetch(`https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${businessId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.getItem('jwtToken'),
            },
            body: JSON.stringify(formValues),
        });
        if (!response.ok) {
            const error = await response.text();
            return { error, business: null };
        };
        const business = await response.json();
        return { business, error: null };
    } catch (error) {
        console.error(error);
        return { error: error, business: null };
    };
};

export async function deleteBusinessCard(businessId) {
    try {
        const response = await fetch(`https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${businessId}`, {
            method: 'DELETE',
            headers: {
                'x-auth-token': localStorage.getItem('jwtToken'),
            },
        });
        if (!response.ok) {
            const error = await response.text();
            return { error, business: null };
        };
        const business = await response.json();
        return { business, error: null };
    } catch (error) {
        console.error(error);
        return { error: error, business: null };
    };
};