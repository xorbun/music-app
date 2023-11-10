export const OBTAIN_MUSIC="OBTAIN_MUSIC"

export const Searchmusic=(artistName)=>
{
    return async(dispatch)=>
     {
        fetch(
            'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
              artistName,
            {
              method: 'GET',
              headers: {
                'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
                'X-RapidAPI-Key':
                  '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
              },
            })
            .then((res)=>
            {
                if(res.ok)
                {
                    return res.json()
                }
                else
                {
                    throw new Error("errore")
                }
            })
            .then((data)=>
            {
                
                dispatch({
                type:OBTAIN_MUSIC,
                payload:data,
            })
            })
            .catch((err)=>
            {
                console.log(err)
            })
    }
}
