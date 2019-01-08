export const scoreTable = `
	<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Score</th>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>`

export function createTableRow(player) {
  return ` 
    <tr>
      <th scope="row">2</th>
      <td>${player.name}</td>
      <td>${player.score}</td>
    </tr>`
}