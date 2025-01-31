import { memo } from "react";

const GoogleMapsFrame = memo(function ({ address }) {

    const googleApiKey = 'AIzaSyCQg0E_bGstuMaMeIq0Syj48A50kC7fPDQ';
    const googleMapsUrl = function () {
        if (!address) return '';
        const url = new URL('https://www.google.com/maps/embed/v1/place');
        url.searchParams.append('key', googleApiKey);
        url.searchParams.append('q', address);
        url.searchParams.append('zoom', 16);
        return url;
    }();

    return (
        <iframe className='google-map' src={googleMapsUrl} />
    );
});

export default GoogleMapsFrame;