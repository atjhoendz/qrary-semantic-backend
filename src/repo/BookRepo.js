const axios = require('axios');
const qs = require('qs');

const BASE_URL = process.env.BASE_URL_FUSEKI;

const headers = {
    'Accept': 'application/sparql-results+json,*/*;q=0.9',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}

exports.getAllBooks = async() => {
    const queryData = {
        query: `PREFIX data:<http://example.com/>
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
        
        SELECT ?issn ?judul ?bahasa ?jmlhal ?penerbit ?penulis ?penerjemah ?tanggalTerbit ?urlFoto
        
        WHERE {
          ?any rdf:type data:book;
               data:judul ?judul;
               data:bahasa ?bahasa;
               data:jmlHal ?jmlhal;
               data:penerbit ?penerbit;
               data:penulis ?penulis;
               data:penerjemah ?penerjemah;
               data:tanggalTerbit ?tanggalTerbit;
               data:urlFoto ?urlFoto;
        }
        LIMIT 25`
    };

    try {
        const { data } = await axios(`${BASE_URL}/qrary/query`, {
            method: 'POST',
            headers,
            data: qs.stringify(queryData)
        });

        return data;
    } catch (err) {
        // console.log(err);
        return Promise.reject(err);
    }
}

module.exports = exports;