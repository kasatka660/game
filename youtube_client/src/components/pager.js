export default class Pager {
	constructor(itemsPerPage, totalCount) {
		this.itemsPerPage = itemsPerPage;
		this.totalCount = totalCount;
		this.currentPage = 1;
	}

  getCurrentPage() {
    return this.currentPage;
  }

  isLastPage() {
    return Math.round(this.totalCount / this.itemsPerPage) == this.currentPage + 1;
  }

	setPage(page) {
		this.currentPage = page;
	}

  setTotalCount(count) {
    this.totalCount = count;
  }

  getTotalCount() {
    return this.totalCount;
  }

  openNextPage() {
    if (this.currentPage < this.totalCount / this.itemsPerPage) {
      this.currentPage += 1;
      this.moveVideos();
      this.render();
    }
  }

  openPrevPage() {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
      this.moveVideos();
      this.render()
    }
  }

	render() {
    // Remove pager.
    if (document.querySelector('.paging')) {
      document.querySelector('.paging').remove();
    }
    // Add new pager.
		const paging = document.createElement('div');
		paging.classList.add('paging');
		const circle = document.createElement('span');
		circle.classList.add('circle');
		for (let i = 0; i < this.totalCount / this.itemsPerPage; i += 1) {
		  	paging.appendChild(circle.cloneNode());
		}
    paging.children[this.currentPage - 1].classList.add('active');
		document.getElementsByTagName('main')[0].appendChild(paging);
	}

  moveVideos() {
    const slides = document.getElementsByClassName('video');
    for (let i = 0; i < slides.length; i += 1) {
      slides[i].setAttribute('style', 'transform:translateX(-' + ((this.currentPage-1)*1200 + 5*this.currentPage) + 'px)');
    }
  }
}