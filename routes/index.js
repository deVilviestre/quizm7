var express = require('express');
var router = express.Router();

var quizControler = require('../controllers/quiz_controller'); //Quiz3

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});


//M7a Begin
// Autoload de comandos con :quizId // La funcion load se define en el controlador quiz_controller pero necesita cargarse aqui ...
router.param('quizId', quizControler.load); // autoload :quizId
//M7a End


/* comentado por M7mp
router.get('/quizes/question',quizControler.question); //Quiz3
router.get('/quizes/answer',quizControler.answer); //Quiz3
*/

//M7mp Begin
router.get('/quizes',quizControler.index);                 //lista de preguntas
router.get('/quizes/:quizId(\\d+)',quizControler.show);    //pregunta elegida
router.get('/quizes/:quizId(\\d+)/answer',quizControler.answer);    //pregunta elegida respuesta 
//M7mp End

router.get('/author',quizControler.author); //Modulo-6 P2P

module.exports = router;
