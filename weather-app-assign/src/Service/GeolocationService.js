import axios from 'axios'

const baseUrl = 'https://www.googleapis.com/geolocation/v1/geolocate?key=';
const apiKey = 'AIzaSyAoauT_-ZrBkSr_Ik6RJhYL8uDs__LG640';
class GeolocationService {

getCurrentPosition()
    {
        const url = `${baseUrl}${apiKey}`;
        return new Promise((resolve, reject) => {
            axios
                .post(url, { considerIp: true })
                .then(response => {
                    if (response && response.status === 200) {
                        const { lat, lng } = response.data.location;
                        resolve({
                            latitude: lat,
                            longitude: lng
                        });
                    } else {
                        reject('Unable to retrieve current location');
                    }
                })
                .catch(error => {
                    const { errors } = error.response.data.error;
                    if (errors && errors.length > 0) {
                        errors.forEach(e => console.log(`Error: ${e.message}, Reason: ${e.reason}`));
                    }
                });
        });
    }
}

export { GeolocationService };