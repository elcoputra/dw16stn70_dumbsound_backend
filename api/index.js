const express = require('express');

const router = express.Router();

// ## MIDLEWARE ## //
const {
  validatingRegister,
  validatingLogin,
  validatingDeleteUser,
  validatingAddTransaction,
  validatingUpdateTransaction,
  validatingDeleteTransaction,
} = require('./middlwares/validator');
const { encryptPass, decryptPass } = require('./middlwares/encryptor');
const { getToken } = require('./middlwares/token');
const { authenticatingUser, authenticatingById, authenticatingAdmin, decode } = require('./middlwares/authenticator');

// ## USER ## //

const seasonCheckRoute = require('../controllers/user/seasonCheck');
const usersRoute = require('../controllers/user/users');
const userRoute = require('../controllers/user/user');
const deleteUserRoute = require('../controllers/user/delete');
const loginRoute = require('../controllers/user/login');
const rigisterRoute = require('../controllers/user/register');

// ## TRANSACTION ## //
const transactionRoute = require('../controllers/transaction/transaction');
const transactionsRoute = require('../controllers/transaction/transactions');
const transactionsByUserRoute = require('../controllers/transaction/transactionsByUser');
const addTransactionRoute = require('../controllers/transaction/add');
const updateTransactionRoute = require('../controllers/transaction/update');
const deleteTransactionRoute = require('../controllers/transaction/delete');

// ## TYPE ## //
const typesRoute = require('../controllers/type/types');

// ## ARTIST ## //
const artistsRoute = require('../controllers/artist/artists');
const addArtistRoute = require('../controllers/artist/addArtist');

// ## SONG ## //
const songsRoute = require('../controllers/song/songs');
const addSongRoute = require('../controllers/song/addSong');
const songRoute = require('../controllers/song/song');

// ################################## Routing ################################## //

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'DUMBSOUND' });
});

// ### USER ### //
router.get('/auth', decode, seasonCheckRoute.reads);
router.get('/users', authenticatingAdmin, usersRoute.reads); // authenticatingAdmin
router.get('/user/:id', authenticatingById, userRoute.reads); //authenticatingById
router.post('/login', validatingLogin, loginRoute.checkingDataUser, decryptPass, getToken);
router.post('/register', validatingRegister, encryptPass, rigisterRoute.create, getToken);
router.delete('/user/:id', authenticatingAdmin, validatingDeleteUser, deleteUserRoute.deleteUser); //authenticatingAdmin

// ### TRANSACTION ### //
router.get('/transactions', authenticatingAdmin, transactionsRoute.reads); //authenticatingAdmin
router.get('/transaction/:id', authenticatingAdmin, transactionRoute.reads); //authenticatingAdmin
router.get('/user/:id/transactions', authenticatingById, transactionsByUserRoute.reads); //authenticatingById
router.post('/transaction', validatingAddTransaction, addTransactionRoute.create); //authenticatingAdmin
router.patch('/transaction/:id', authenticatingAdmin, validatingUpdateTransaction, updateTransactionRoute.update); //authenticatingAdmin
router.delete('/transaction/:id', authenticatingAdmin, validatingDeleteTransaction, deleteTransactionRoute.deleteTransaction); //authenticatingAdmin

// ### TYPE ### //
router.get('/types', typesRoute.reads); //authenticatingUser
// router.post('/type', validatingAddCategory, addCategoryRoute.create); //authenticatingAdmin
// router.patch('/type/:id', validatingUpdateCategory, updateCategoryRoute.update); //authenticatingAdmin
// router.delete('/type/:id', validatingDeleteCategory, deleteCategoryRoute.deletecategory); //authenticatingAdmin

// ### ARTIST ### //
router.get('/artists', artistsRoute.reads);
router.post('/artist', authenticatingAdmin, addArtistRoute.create);

// ### SONG ### //
router.get('/songs', songsRoute.reads);
router.get('/song/:id', songRoute.read);
router.post('/song', authenticatingAdmin, addSongRoute.create);

module.exports = router;
