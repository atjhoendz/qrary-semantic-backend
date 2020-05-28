const BookRepo = require('../repo/BookRepo');
const BookFormatter = require('../utils/BookFormatter');

module.exports = {
    getBooks: async(req, res) => {
        try {
            let books = await BookRepo.getBooks(req.query);

            if (!books.bindings.length) {
                return res.status(200).json({
                    success: true,
                    status: 200,
                    data: [],
                    message: 'Data buku tidak ditemukan'
                });
            }

            books = books.bindings.map((course) => BookFormatter(course));

            if (req.params.isbn) {

                let book = books.filter((book) => { return book.isbn == req.params.isbn });

                return res.status(200).json({
                    success: true,
                    status: 200,
                    data: book[0],
                    message: book.length ? 'Data buku berhasil didapatkan' : 'Data buku tidak ditemukan'
                });
            } else {
                return res.status(200).json({
                    success: true,
                    status: 200,
                    data: books,
                    message: 'Data semua buku berhasil didapatkan'
                });
            }
        } catch (err) {
            return res.status(200).json({
                success: false,
                status: 200,
                data: '',
                message: `Error: ${err.message}`
            });
        }
    }
}