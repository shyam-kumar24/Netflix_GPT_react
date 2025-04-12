export const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const PAGE_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/IN-en-20250407-TRIFECTA-perspective_43f6a235-9f3d-47ef-87e0-46185ab6a7e0_small.jpg"

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjlhN2I3YzE1ZTc2ZTk4NWU0Yzk1MmRkZWQ3MjliZiIsIm5iZiI6MTc0NDI5Nzc3NS45MzUwMDAyLCJzdWIiOiI2N2Y3ZGYyZmVhODBkODUxNzU5OTZiOGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.rjkj5GcNWRTmITFob8Dr0uv5_po5bYdKc7gC9LNRP-o'
    }
}


// curl --request GET \
// --url 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}' \
// --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjlhN2I3YzE1ZTc2ZTk4NWU0Yzk1MmRkZWQ3MjliZiIsIm5iZiI6MTc0NDI5Nzc3NS45MzUwMDAyLCJzdWIiOiI2N2Y3ZGYyZmVhODBkODUxNzU5OTZiOGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.rjkj5GcNWRTmITFob8Dr0uv5_po5bYdKc7gC9LNRP-o' \
// --header 'accept: application/json'

export const IMG_CDN = "https://image.tmdb.org/t/p/original/"

export const SUPPORTED_LANGUAGES = [
    {identifier: 'en', name: 'English'},
    {identifier: 'hindi', name: 'Hindi'},
    {identifier: 'spanish', name: 'Spanish'}
]