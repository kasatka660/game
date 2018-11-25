export default class Pager {
	constructor(itemsPerPage, totalCount) {
		this.itemsPerPage = itemsPerPage;
		this.totalCount = totalCount;
		this.currentPage = 1;
	}

	setPage(page) {
		this.currentPage = page;
	}

  setTotalCount(count) {
    this.totalCount = count;
  }

  openNextPage() {
    this.currentPage += 1;
    this.render();
  }

	render() {
    // Remove pager.
    if (document.querySelector('.paging')) {
      document.querySelector('.paging')[0].remove();
    }
    // Add new pager.
		const paging = document.createElement('div');
		paging.classList.add('paging');
		const circle = document.createElement('span');
		circle.classList.add('circle');
		for (let i = 0; i < this.totalCount / this.itemsPerPage; i += 1) {
		  	paging.appendChild(circle.cloneNode());
		}
    paging.children[this.currentPage].classList.add('active');
		document.getElementsByTagName('main')[0].appendChild(paging);
	}
}