////Client ID
// Ee_wnjykiSjBvM-vsRIkBw
////API Key
const apiKey = 'ybM6qiPe8enlMdfoisv96DW6wmVABx0UAUJ1mmQEgPLjeQCDZckVbQIcqjT6IXD0kaac_0Ld2YyaCyESJ8dTjg45UiCmorYE14l3mJRiGFyCauFPJggaZu1CgNfOX3Yx';

const Yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then( jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                  id: business.id,
                  imageSrc: business.image_url,
                  name: business.name,
                  address: business.location.address1,
                  city: business.location.city,
                  state: business.location.state,
                  zipCode: business.location.zip_code,
                  category: business.categories[0].title,
                  rating: business.rating,
                  reviewCount: business.review_count
                }));
              }
        })
    }
}

export default Yelp;