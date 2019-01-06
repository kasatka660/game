export function renderQuestionDialog() {
  return `<div class="modal fade" id="questionForm" tabindex="-1" aria-hidden="true" data-keyboard="false" data-backdrop="static">
            <div class="modal-dialog modal-dialog-centered">  
              <div class="modal-content">
            </div>
          </div>`
}

export function renderQuestion(question) {	
  return `<div class="modal-header">
            <h5 class="modal-title">${question.question}</h5>
          </div>
            <div class="modal-body">
              <input type="text" id="answer" class="form-control" placeholder="Answer" aria-label="Answer" required>
            </div>
            <div class="modal-footer">
              <button type="button" id="submit" class="btn btn-submit shadow-none">Submit</button>
            </div>
          </div>`
}