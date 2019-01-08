export const dragAndDropQuestionForm = `


<ul id="sortable">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
  <li>Item 5</li>
</ul> `;

export function createDragAndDropQuestion(dragDrop) {	
  return `<div class="modal-header">
            <h5 class="modal-title">${dragDrop.title}</h5>
          </div>
            <div class="modal-body">
              <ul id="sortable">
                 ${dragDrop.question.map(item => `<li>${item}</li>`).join('')}
              </ul>
            </div>
            <div class="modal-footer">
              <button type="button" id="submit" class="btn btn-submit shadow-none">Submit</button>
            </div>
          </div>`
}