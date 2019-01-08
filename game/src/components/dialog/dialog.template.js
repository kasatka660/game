export const dialogView = `
<button type="button" class="btn btn-primary start-dialog-btn" id="pickTheSpell" data-toggle="modal">
  Pick the spell
</button>
<div class="modal fade" id="spellSelection" tabindex="-1" role="dialog"data-keyboard="false" data-backdrop="static" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Pick the Spell</h5>
      </div>
      <div class="modal-body">
        <button type="button" id="simpleMath" class="btn shoose-btn">Simple Math</button>
        <button type="button" id="translation" class="btn shoose-btn">Translation</button>
        <button type="button" id="dragAndDrop" class="btn shoose-btn">Smth else</button>
      </div>     
    </div>
  </div>
</div>`