module.exports = fn = data => {
    return {
        "isbn": data.isbn ? data.isbn.value : '',
        "judul": data.judul ? data.judul.value : '',
        "bahasa": data.bahasa ? data.bahasa.value : '',
        "jmlhal": data.jmlhal ? data.jmlhal.value : '',
        "penerbit": data.penerbit ? data.penerbit.value : '',
        "penulis": data.penulis ? data.penulis.value : '',
        "penerjemah": data.penerjemah ? data.penerjemah.value : '',
        "tanggalTerbit": data.tanggalTerbit ? data.tanggalTerbit.value : '',
        "urlFoto": data.urlFoto ? data.urlFoto.value : ''
    }
}