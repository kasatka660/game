import {dialogView} from './dialog.template'
import {renderQuestionDialog} from './../tasks/questionDialog.template'
import QuestionsControl from './../tasks/questionsControl'
import './dialog.scss'
import {KEYS, correctAnswer, wrongAnswer} from './../../variables.js'

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
    this.questionsControl = new QuestionsControl(battle);
    this.renderDialog();
    $('#pickTheSpell').on('click', function() {
      $('#pickTheSpell').hide();
      $("#spellSelection").modal('show');
    });
    setTimeout(function() {
      document.body.addEventListener('keydown', spellPickingOnEnter);
    }, 1000);  
    $('#spellSelection').on('shown.bs.modal', function() {
      $('#simpleMath').addClass('selected');
    });

    document.body.addEventListener('keydown', rightArrowMove);
    document.body.addEventListener('keydown', leftArrowMove);
    this.toQuestionModeOnEnterBind = this.toQuestionModeOnEnter.bind(this);
    document.body.addEventListener('keydown', this.toQuestionModeOnEnterBind);

    $(".choose-btn").on('click', function(e) {
      const btnId = event.target.attributes.id.value;
      this.toQuestionMode(btnId);
    }.bind(this));

    this.processQuestionAnswerBind = this.processQuestionAnswer.bind(this);
    document.body.addEventListener('keydown', this.processQuestionAnswerBind); 
  }
  toQuestionMode(id) {
    $('#spellSelection').modal('hide');
    $('.selected').removeClass('selected');
    this.questionsControl.getQuestionByType(id);
    this.questionsControl.renderQuestion()
      .then(() => {
        this.processAnswer(true);
      },
      () => {
        this.processAnswer(false)
      });
  }
  processAnswer(isCorrect) {
    if (isCorrect) {
      $('#questionForm .modal-content').html(correctAnswer);
    } else {
      $('#questionForm .modal-content').html(wrongAnswer);
    }
    setTimeout(function() {
      $("#questionForm").modal('hide');
      if (!isCorrect) {
        this.battle.hitThePlayer();
      } else {
        this.battle.hitTheMonster();
      }
    }.bind(this), 1500);
    setTimeout(function() {
      this.battle.nextRound()
    }.bind(this), 6000);
  }
  isModalOpen(id) {
    return $(id).hasClass('show');
  } 
  nextRound() {
    $('#pickTheSpell').show();
  }
  endGame() {
    document.body.removeEventListener('keydown', rightArrowMove);
    document.body.removeEventListener('keydown', leftArrowMove);
    document.body.removeEventListener('keydown', this.toQuestionModeOnEnterBind);
    document.body.removeEventListener('keydown', spellPickingOnEnter);
    document.body.removeEventListener('keydown', this.processQuestionAnswerBind); 
  }

  processQuestionAnswer(e) {
    if (e.keyCode === KEYS.ENTER_KEY && this.isModalOpen('#questionForm')){
      this.processAnswer(this.questionsControl.isCorrect());
    }
  }
  toQuestionModeOnEnter(e) {
  if (e.keyCode === KEYS.ENTER_KEY && this.isModalOpen('#spellSelection')) {
    const btnId = $('.selected').attr('id');
    this.toQuestionMode(btnId);
  }
};
}

//Keyboard control functions.
const spellPickingOnEnter = function(e) {
  if (e.keyCode === KEYS.ENTER_KEY && $('#pickTheSpell').css('display') == 'block') {
    $('#pickTheSpell').hide();
    $("#spellSelection").modal('show');
  }
};
const leftArrowMove = function(e) {
  if (e.keyCode === KEYS.LEFT_ARROW) {
    const chosenBtn = $('.selected');
    if (chosenBtn.prev().length) {
      chosenBtn.prev().addClass('selected');
      chosenBtn.removeClass('selected');
    }
  }
};
const rightArrowMove = function(e) {
  if (e.keyCode === KEYS.RIGHT_ARROW) {
    const chosenBtn = $('.selected');
    if (chosenBtn.next().length) {
      chosenBtn.next().addClass('selected');
      chosenBtn.removeClass('selected');
    }
  }
};
