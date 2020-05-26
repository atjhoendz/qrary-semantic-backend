const BookRepo = require('../repo/BookRepo');
const BookFormatter = require('../utils/BookFormatter');

module.exports = {
    getAll: async(req, res) => {
        try {
            const books = await BookRepo.getAllBooks();

            let results = [];

            books.results.bindings.forEach(book => {
                const formattedBook = BookFormatter(book);

                results.push(formattedBook);
            });

            return res.status(200).json({
                success: true,
                status: 200,
                data: results,
                message: 'Data semua buku berhasil didapatkan'
            });
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