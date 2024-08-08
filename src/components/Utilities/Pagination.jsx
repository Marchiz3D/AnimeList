const Pagination = ({ page, lastPage, setPage }) => {
  const setTopPage = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    })
  }

  const handleNextPage = () => {
    setPage((currentPage) => currentPage + 1)
    setTopPage()
  }

  const handlePrevPage = () => {
    setPage((currentPage) => currentPage - 1)
    setTopPage()
  }

  const handleToLastPage = () => {
    setPage((currentPage) => (currentPage = lastPage))
    setTopPage()
  }

  const handleToFirstPage = () => {
    setPage((currentPage) => (currentPage = 1))
    setTopPage()
  }

  return (
    <>
      <div className="flex justify-center items-center text-color-primary gap-4 pt-5 pb-2 text-2xl">
        {page <= 1 ? null : (
          <button
            className="transiton-all hover:text-color-accent"
            onClick={handlePrevPage}
          >
            Prev
          </button>
        )}
        <p>
          {page} of {lastPage}
        </p>
        {page >= lastPage ? null : (
          <button
            className="transiton-all hover:text-color-accent"
            onClick={handleNextPage}
          >
            Next
          </button>
        )}
      </div>
      <div className="flex justify-center items-center text-color-primary gap-4 py-2">
        <button
          className="hover:text-color-accent transition-all"
          onClick={handleToFirstPage}
        >
          Halaman Pertama
        </button>
        <button
          className="hover:text-color-accent transition-all"
          onClick={handleToLastPage}
        >
          Halaman Terakhir
        </button>
      </div>
    </>
  )
}

export default Pagination
