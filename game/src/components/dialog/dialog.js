import {dialogView} from './dialog.template'
import {renderQuestion, renderQuestionDialog} from './../tasks/question.template'
import simpleMathQuestions from './../tasks/simpleMath/simpleMath'
import translationQuestions from './../tasks/translation/translation'
import './dialog.scss'
import {KEYS} from './../../variables.js'

export default class Dialog {
	constructor() {
    this.targetQuestions = [];
	}
  renderDialog() {
    $('.middle').append(dialogView);
    $('.middle').append(renderQuestionDialog());
  }
  init(battle) {
    this.battle = battle;
    this.renderDialog();
    $('#pickTheSpell').on('click', function() {
      $('#pickTheSpell').hide();
      $("#spellSelection").modal('show');
    });

    setTimeout(function() {
      document.body.addEventListener('keydown', function(e) {
        if (e.keyCode === KEYS.ENTER_KEY && $('#pickTheSpell').css('display') == 'block') {
          $('#pickTheSpell').hide();
          $("#spellSelection").modal('show');
        }
      });
    }, 1000);
    
    $('#spellSelection').on('shown.bs.modal', function () {
      $('#simpleMath').addClass('selected');
    });

    // Add keyboard control on modal form.
    document.body.addEventListener('keydown', function(e) {
      if (e.keyCode === KEYS.RIGHT_ARROW) {
        const chosenBtn = $('.selected');
        if (chosenBtn.next().length) {
          chosenBtn.next().addClass('selected');
          chosenBtn.removeClass('selected');
        }
      }
    });
    document.body.addEventListener('keydown', function(e) {
      if (e.keyCode === KEYS.LEFT_ARROW) {
        const chosenBtn = $('.selected');
        if (chosenBtn.prev().length) {
          chosenBtn.prev().addClass('selected');
          chosenBtn.removeClass('selected');
        }
      }
    }.bind(this));
    document.body.addEventListener('keydown', function(e) {
      console.log(e);
      if (e.keyCode === KEYS.ENTER_KEY && this.isModalOpen('#spellSelection')) {
        const btnId = $('.selected').attr('id');
        this.toQuestionMode(btnId);
      }
    }.bind(this));
    $(".shoose-btn").on('click', function(e) {
      const btnId = event.target.attributes.id.value;
      this.toQuestionMode(btnId);
    }.bind(this));

    
    const submitBtn = $('#submit');

    submitBtn.on('click', function() {
      const answerInput = $('#answer');
      const userAnswer = answerInput.val();
      this.battle.checkIfCorrect(userAnswer, this.currentQuestion.answer);
    }.bind(this));
    document.body.addEventListener('keydown', function(e) {
      if (e.keyCode === KEYS.ENTER_KEY && this.isModalOpen('#questionForm')){
        const answerInput = $('#answer');
        const userAnswer = answerInput.val();
      this.battle.checkIfCorrect(userAnswer, this.currentQuestion.answer);
      }
    }.bind(this)); 
  }
  toQuestionMode(id) {
    $('#spellSelection').modal('hide');
    $('.selected').removeClass('selected');
    this.getTheQuestion(id);
  }
  isModalOpen(id) {
    return $(id).hasClass('show');
  }
  getTheQuestion(questionType) {
    if (questionType == 'simpleMath') {
      this.targetQuestions = simpleMathQuestions;
    } else if (questionType == 'translation') {
      this.targetQuestions = translationQuestions;
    }
    const number = this.getRandomInt(this.targetQuestions.length);  
    this.currentQuestion = this.targetQuestions[number];
    $('#questionForm .modal-content').html(renderQuestion(this.targetQuestions[number]));
    $("#questionForm").modal('show');
    $('#questionForm').on('shown.bs.modal', function() {
      $('#answer').trigger('focus')
    })

     
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  nextRound() {
    $('#pickTheSpell').show();
  }
}