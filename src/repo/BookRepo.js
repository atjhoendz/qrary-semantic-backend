const axios = require('axios');
const qs = require('qs');

const BASE_URL = process.env.BASE_URL_FUSEKI; // URL Fuseki

// http headers request
const headers = {
    'Accept': 'application/sparql-results+json,*/*;q=0.9',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}

// Fungsi Get data dari fuseki server
exports.getBooks = async(param) => {

    // Query SparQL
    const queryData = {
        query: `PREFIX data:<http://example.com/>
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
        
        SELECT ?no ?isbn ?judul ?bahasa ?jmlhal ?penerbit ?penulis ?penerjemah ?tanggalTerbit ?urlFoto

        WHERE {
            ?sub rdf:type data:book.
            OPTIONAL {?sub data:isbn ?isbn.}
            OPTIONAL {?sub data:judul ?judul.}
            OPTIONAL {?sub data:bahasa ?bahasa.}
            OPTIONAL {?sub data:jmlHal ?jmlhal.}
            OPTIONAL {?sub data:penerbit ?penerbit.}
            OPTIONAL {?sub data:penulis ?penulis.}
            OPTIONAL {?sub data:penerjemah ?penerjemah.}
            OPTIONAL {?sub data:tanggalTerbit ?tanggalTerbit.}
            OPTIONAL {?sub data:urlFoto ?urlFoto.}
            FILTER regex(?judul, "${param.judul ? param.judul : ''}", "i")
            FILTER regex(?isbn, "${param.isbn ? param.isbn : ''}", "i")
            FILTER regex(?penerbit, "${param.penerbit ? param.penerbit : ''}", "i")
            FILTER regex(?penulis, "${param.penulis ? param.penulis : ''}", "i")
        }`
    };

    try {
        // Request post data ke endpoint fuseki server
        const { data } = await axios(`${BASE_URL}/qrary/query`, {
            method: 'POST',
            headers,
            data: qs.stringify(queryData)
        });
        // mengembalikan result
        return data.results;
    } catch (err) {
        return Promise.reject(err);
    }
}

module.exports = exports;