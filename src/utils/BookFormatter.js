module.exports = fn = data => {
    return {
        "judul": data.judul.value,
        "bahasa": data.bahasa.value,
        "jmlhal": data.jmlhal.value,
        "penerbit": data.penerbit.value,
        "penulis": data.penulis.value,
        "penerjemah": data.penerjemah.value,
        "tanggalTerbit": data.tanggalTerbit.value,
        "urlFoto": data.urlFoto.value
    }
}