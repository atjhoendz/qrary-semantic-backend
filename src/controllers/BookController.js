const BookRepo = require('../repo/BookRepo');
const BookFormatter = require('../utils/BookFormatter');

module.exports = {
    // Fungsi get data dari BookRepo
    getBooks: async(req, res) => {
        try {
            // mengambil data dai BookRepo berdasarkan req.query
            let books = await BookRepo.getBooks(req.query);

            // Jika data pada BookRepo kosong
            if (!books.bindings.length) {
                return res.status(200).json({
                    success: true,
                    status: 200,
                    data: [],
                    message: 'Data buku tidak ditemukan'
                });
            }

            // Ketika data dari BookRepo ada, data di mapping menjadi format json yang diinginkan
            books = books.bindings.map((book) => BookFormatter(book));

            // Ketika parameter di endpoint menunjuk isbn
            if (req.params.isbn) {

                let book = books.filter((book) => { return book.isbn == req.params.isbn });

                return res.status(200).json({
                    success: true,
                    status: 200,
                    data: book[0],
                    message: book.length ? 'Data buku berhasil didapatkan' : 'Data buku tidak ditemukan'
                });
            } else { //Ketika parameter selain isbn
                return res.status(200).json({
                    success: true,
                    status: 200,
                    data: books,
                    message: 'Data semua buku berhasil didapatkan'
                });
            }
        } catch (err) { //menangkap error jika fungsi tidak berhasil dijalankan
            return res.status(200).json({
                success: false,
                status: 200,
                data: '',
                message: `Error: ${err.message}`
            });
        }
    }
}